import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faDocker, faReact, faAws } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faBrain } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const dataEngineering = [
  "Python", "PySpark / Spark SQL", "Apache Kafka", "Apache Airflow",
  "dbt Core", "Snowflake", "Databricks Delta Lake", "PostgreSQL",
  "Oracle SQL / PL/SQL", "Medallion Architecture", "CDC",
  "Great Expectations", "Parquet / Avro / JSON"
];

const cloudInfra = [
  "AWS S3", "AWS Glue", "AWS Lambda", "AWS Redshift",
  "Azure Data Factory", "Azure Synapse", "Supabase",
  "Docker", "GitHub Actions CI/CD", "Git", "Linux / Bash"
];

const mlAnalytics = [
  "scikit-learn", "XGBoost", "LightGBM", "SHAP Explainability",
  "Feature Engineering", "Time-Series Forecasting", "Isolation Forest",
  "A/B Testing", "Tableau", "Power BI", "Streamlit",
  "LangChain / LangGraph", "RAG Pipelines", "Pandas / NumPy"
];

const fullStack = [
  "Python", "JavaScript / HTML / CSS", "React",
  "FastAPI", "REST APIs", "PostgreSQL", "SQL Server / T-SQL",
  "Java", "pytest", "SQLAlchemy"
];

const healthcareData = [
  "HL7 FHIR", "Patient / Observation / Encounter Resources",
  "Clinical Data Architecture", "EHR / EMR Patterns",
  "Epic / Cerner Aligned", "Healthcare Data Quality Validation"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* Data Engineering */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data Engineering & Pipelines</h3>
            <p>
              I build scalable ETL/ELT pipelines and cloud-native data platforms using the
              modern data stack — from streaming ingestion with Kafka to Medallion Architecture
              on Databricks and dbt-powered transformation layers on Snowflake.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {dataEngineering.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Cloud & Infrastructure */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Cloud & Infrastructure</h3>
            <p>
              I design and deploy cloud-native architectures on AWS and Azure — building
              containerized, reproducible environments and CI/CD pipelines for production
              data systems and backend applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {cloudInfra.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* ML, Analytics & BI */}
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>ML, Analytics & BI</h3>
            <p>
              I develop and ship predictive ML models, analytics engineering platforms, and
              executive BI dashboards — from SHAP-explained classification models to
              LangChain-powered NL analytics interfaces and live Tableau / Power BI workbooks.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {mlAnalytics.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Full Stack Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Development</h3>
            <p>
              I build production-ready full-stack applications end-to-end — frontend UI,
              backend API, relational database layer, and deployment infrastructure.
              Delivered real applications used in production by real users.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {fullStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Healthcare Data */}
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Healthcare Data Engineering</h3>
            <p>
              I work with clinical data standards and EHR/EMR architectures — building
              HL7 FHIR-based ingestion pipelines, healthcare data quality validation
              frameworks, and analytics platforms aligned with Epic and Cerner systems.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {healthcareData.map((label, index) => (
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



// import React from "react";
// import "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPython, faDocker, faReact } from "@fortawesome/free-brands-svg-icons";
// import Chip from "@mui/material/Chip";
// import "../assets/styles/Expertise.scss";

// // 1️ Data Engineering
// const dataEngineering = [
//   "Python",
//   "SQL",
//   "Oracle SQL",
//   "PostgreSQL",
//   "PySpark",
//   "Pandas",
//   "NumPy",
//   "Databricks",
//   "Apache Airflow",
//   "Kafka",
//   "dbt",
//   "Snowflake",
//   "Redshift"
// ];

// // 2️ Cloud / AWS
// const cloud = [
//   "AWS",
//   "S3",
//   "RDS",
//   "Lambda",
//   "Glue",
//   "CloudWatch",
//   "IAM",
//   "Docker",
//   "CI/CD",
//   "GitHub Actions",
//   "Linux"
// ];

// // 3️ Full Stack
// const fullStack = [
//   "Python",
//   "Oracle SQL",
//   "PostgreSQL",
//   "React",
//   "FastAPI",
//   "REST API",
//   "HTML",
//   "CSS",
//   "JavaScript"
// ];

// function Expertise() {
//   return (
//     <div className="container" id="expertise">
//       <div className="skills-container">
//         <h1>Expertise</h1>
//         <div className="skills-grid">

//           {/* 1️⃣ Data Engineering */}
//           <div className="skill">
//             <FontAwesomeIcon icon={faPython} size="3x" />
//             <h3>Data Engineering & Analytics</h3>
//             <p>
//               I build scalable data pipelines and analytics systems using modern data tools.
//               My work includes data ingestion, transformation, streaming, and warehouse design
//               using cloud-native and big data technologies.
//             </p>
//             <div className="flex-chips">
//               <span className="chip-title">Tech stack:</span>
//               {dataEngineering.map((label, index) => (
//                 <Chip key={index} className="chip" label={label} />
//               ))}
//             </div>
//           </div>

//           {/* 2️⃣ Cloud */}
//           <div className="skill">
//             <FontAwesomeIcon icon={faDocker} size="3x" />
//             <h3>Cloud & AWS Engineering</h3>
//             <p>
//               I design and deploy scalable cloud architectures using AWS. My experience includes
//               containerization, cloud services, monitoring, and building production-ready systems
//               for data and backend applications.
//             </p>
//             <div className="flex-chips">
//               <span className="chip-title">Tech stack:</span>
//               {cloud.map((label, index) => (
//                 <Chip key={index} className="chip" label={label} />
//               ))}
//             </div>
//           </div>

//           {/* 3️ Full Stack */}
//           <div className="skill">
//             <FontAwesomeIcon icon={faReact} size="3x" />
//             <h3>Full Stack Development</h3>
//             <p>
//               I develop full-stack applications with modern frontend and backend frameworks.
//               Experienced in building APIs, user interfaces, and database-driven applications
//               with production-ready architecture.
//             </p>
//             <div className="flex-chips">
//               <span className="chip-title">Tech stack:</span>
//               {fullStack.map((label, index) => (
//                 <Chip key={index} className="chip" label={label} />
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Expertise;