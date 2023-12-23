from pyspark.sql.session import SparkSession
from pyspark.sql.functions import sum,col
from datetime import datetime
from argparse import ArgumentParser


def process_data(output_path: str=None):
    print("Creating Spark Session ...")
    spark = SparkSession.builder.appName("project-1-job").getOrCreate()
    print("Successfully created Spark Session ...")
    
    date_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    bucket = "project-airflow"
    orders_path = f"gs://{bucket}/orders/"
    books_path = f"gs://{bucket}/books/"
    if output_path is None:
        output_path = f"gs://{bucket}/processed-data/{date_time}/"

    print("Reading Orders data ...")
    orders = spark.read.csv(orders_path,header=True,inferSchema=True)

    print("Reading Books data ...")
    books = spark.read.format("csv").option("header","true").option("inferSchema","true").load(books_path)

    print("Successfully Read the data. Applying transformations ...")
    books_sold = books.join(orders, "book_id","left").groupBy(col("name").alias("Book")).agg(sum(col("quantity")).alias("Sold")).fillna(0).orderBy(col("Sold").desc())

    print("Successfully completed Data Transformation operations. Writing output in GCS Bucket ...")
    books_sold.write.mode("overwrite").csv(output_path,header=True)
    print("Successfully written data to Directory: ",output_path)
    print(books_sold.show())

    print("Closing the Spark Session ...")
    spark.stop()
    print("!!! Closed the Spark Session !!!")

if __name__=="__main__":
    parser = ArgumentParser()
    parser.add_argument("--output_path", type=str, help="Path to store the output dataframe")
    args = parser.parse_args()
    output_path = args.output_path
    
    process_data(output_path)


