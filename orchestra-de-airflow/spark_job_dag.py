# Here we will write dag which will accept input via airflow variables, create the cluster, submit the spark job and after execution of job simply terminate the cluster.
from datetime import timedelta
from airflow import DAG
from airflow.models import Variable
from airflow.utils.dates import days_ago
from airflow.providers.google.cloud.operators import dataproc 

# Defining default arguments for dag
default_args = {
    "owner":"air-project-1",
    "depends_on_past":True,
    "email_on_failure":False,
    "email_on_retry":False,
    "retries":1,
    "retry_delay":timedelta(minutes=5)}

# Fetch configuration details from airflow variable
dynamic_configs =Variable.get("configs", deserialize_json=True)
CLUSTER_NAME = dynamic_configs.get("CLUSTER_NAME")
PROJECT_ID = dynamic_configs.get("PROJECT_ID")
REGION = dynamic_configs.get("REGION")
CLUSTER_CONFIG = dynamic_configs.get("CLUSTER_CONFIG")
spark_main_file = dynamic_configs.get("spark_main_file")
output_write_path = dynamic_configs.get("output_path")

if CLUSTER_CONFIG is None:
    CLUSTER_CONFIG = {
        "master_config":{
            "num_instances":1,
            "machine_type_uri":"n1-standard-2",
            "disk_config":{
                "boot_disk_type":"pd-standard",
                "boot_disk_size_gb":50
            }
        },
        "worker_config":{
            "num_instances":2,
            "machine_type_uri":"n1-standard-2",
            "disk_config":{
                "boot_disk_type":"pd-standard",
                "boot_disk_size_gb":50
            }
        },
        "software_config":{
            "image_version":"2.1-debian11"
        }
    }

# If we want to apply some other transformation operations on the same data 
# then we will pass new spark_main file path else below file will be used in transformation
if spark_main_file is None:
    spark_main_file = "gs://project-airflow/spark_job.py"

pyspark_job_arguments = { "main_python_file_uri": spark_main_file}

# Defining dag related properties
dag = DAG(dag_id="books_order_data_processing",
          default_args=default_args,
          schedule_interval=timedelta(days=1),
          start_date=days_ago(1))

# Task to create Dataproc cluster for spark job execution
create_cluster = dataproc.DataprocCreateClusterOperator(
    task_id="cluster_creation",
    project_id = PROJECT_ID,
    cluster_name=CLUSTER_NAME,
    region=REGION,
    cluster_config=CLUSTER_CONFIG,
    dag=dag)

# Task to submit the spark job to Dataproc cluster
spark_job = dataproc.DataprocSubmitPySparkJobOperator(
    task_id="spark_execution_job",
    main=pyspark_job_arguments["main_python_file_uri"],
    project_id = PROJECT_ID,
    cluster_name=CLUSTER_NAME,
    region=REGION,
    arguments=[f"--output_path={output_write_path}"],
    dag=dag
)

# Task to delete the Dataproc cluster after execution of spark job
delete_cluster = dataproc.DataprocDeleteClusterOperator(
    task_id="delete_spark_cluster",
    project_id = PROJECT_ID,
    cluster_name=CLUSTER_NAME,
    region=REGION,
    trigger_rule="all_done",
    dag=dag
)

# Defining the sequence/execution flow of tasks inside the DAG workflow
create_cluster >> spark_job >> delete_cluster
