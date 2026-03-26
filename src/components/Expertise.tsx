import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faDocker, faReact } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

// 1️ Data Engineering
const dataEngineering = [
  "Python",
  "SQL",
  "Oracle SQL",
  "PostgreSQL",
  "PySpark",
  "Pandas",
  "NumPy",
  "Databricks",
  "Apache Airflow",
  "Kafka",
  "dbt",
  "Snowflake",
  "Redshift"
];

// 2️ Cloud / AWS
const cloud = [
  "AWS",
  "S3",
  "RDS",
  "Lambda",
  "Glue",
  "CloudWatch",
  "IAM",
  "Docker",
  "CI/CD",
  "GitHub Actions",
  "Linux"
];

// 3️ Full Stack
const fullStack = [
  "Python",
  "Oracle SQL",
  "PostgreSQL",
  "React",
  "FastAPI",
  "REST API",
  "HTML",
  "CSS",
  "JavaScript"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* 1️⃣ Data Engineering */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data Engineering & Analytics</h3>
            <p>
              I build scalable data pipelines and analytics systems using modern data tools.
              My work includes data ingestion, transformation, streaming, and warehouse design
              using cloud-native and big data technologies.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {dataEngineering.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* 2️⃣ Cloud */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Cloud & AWS Engineering</h3>
            <p>
              I design and deploy scalable cloud architectures using AWS. My experience includes
              containerization, cloud services, monitoring, and building production-ready systems
              for data and backend applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {cloud.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* 3️ Full Stack */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Development</h3>
            <p>
              I develop full-stack applications with modern frontend and backend frameworks.
              Experienced in building APIs, user interfaces, and database-driven applications
              with production-ready architecture.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {fullStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;