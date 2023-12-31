# orchestra-de-airflow

This project demonstrates the orchestration of a data processing workflow using Apache Airflow. The workflow involves creating a Dataproc cluster, submitting a PySpark job, and deleting the cluster upon job completion. The Spark job performs basic data processing on orders and books data.

## Apache Airflow DAG

### Overview

The Apache Airflow DAG (`spark_job_dag.py`) is designed to perform the following tasks:

1. Dynamically accept the input parameters using Airflow Variables for Dataproc cluster and pyspark application.
2. Create a Dataproc cluster using dynamically passed cluster configurations.
3. Submit a PySpark job to the Dataproc cluster for data processing.
4. Delete the Dataproc cluster after the successful execution of the PySpark job.

### Configuration

The configuration for the DAG is provided through Airflow variables, including cluster details, project ID, region, and other parameters.
The configurations used in this project are:
```python
{"CLUSTER_NAME":"spark-cluster",
 "PROJECT_ID":"spark-project-409004",
 "REGION" : "us-central1",
 "CLUSTER_CONFIG" : {
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
},
"spark_main_file" :"gs://project-airflow/spark_main.py",
"output_path": "processed-output"
}
```

### How to Use

To use the DAG, follow these steps:

1. Set the necessary configurations as Airflow variables.
2. Ensure that the PySpark job file (`spark_main.py`) is accessible and contains the necessary data processing logic.

### DAG Execution Flow

The DAG execution follows these steps:

1. **Cluster Creation**: Creates a Dataproc cluster for executing the Spark job.
2. **Spark Job Execution**: Submits a PySpark job to the Dataproc cluster for data processing.
3. **Cluster Deletion**: Deletes the Dataproc cluster after the successful execution of the Spark job.

## PySpark Job

### Overview

The PySpark job (`spark_main.py`) performs basic data processing using Spark:

1. Reads orders and books data from Google Cloud Storage.
2. Applies transformations to find the sales of each book.
3. Writes the processed data back to Google Cloud Storage.

### How to Use

To execute the PySpark job independently:

1. Ensure the Spark job file (`spark_main.py`) is accessible.
2. Provide the necessary arguments, such as `--output_path` for specifying the output directory.

  Example:
  ```bash
  python spark_main.py --output_path gs://your-output-bucket/
  ```
### Spark Job Logic
The PySpark job includes logic for:

* Creating a Spark session.
* Reading data from Google Cloud Storage.
* Applying transformations to find the sales of each book.
* Writing the processed data back to Google Cloud Storage.
* Closing the Spark session.
