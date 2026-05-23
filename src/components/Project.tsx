import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">

        {/* La Tiendita AidMatch */}
        <div className="project">
          <a href="https://github.com/Nanduvasireddy04/la-tiendita-aidmatch" target="_blank" rel="noreferrer">
            <img src={mock01} className="zoom" alt="La Tiendita AidMatch" width="100%" />
          </a>
          <a href="https://github.com/Nanduvasireddy04/la-tiendita-aidmatch" target="_blank" rel="noreferrer">
            <h2>La Tiendita AidMatch</h2>
          </a>
          <div className="project-tags">
            <span>Python</span><span>JavaScript</span><span>PostgreSQL</span>
            <span>Supabase</span><span>AWS</span><span>GitHub Actions</span>
          </div>
          <p>
            Full-stack community aid-matching platform built end-to-end — enabling community
            members to post requests for food, clothing, and household needs while volunteers
            offer assistance. Two-sided matching system with real-time coordination. Relational
            data model with complex SQL (CTEs, window functions) powering request fulfillment
            tracking and operational reporting. Production-deployed with CI/CD via GitHub Actions.
          </p>
        </div>

        {/* Market Analytics Platform */}
        <div className="project">
          <a href="https://github.com/Nanduvasireddy04/Market-Analytics-Platform" target="_blank" rel="noreferrer">
            <img src={mock02} className="zoom" alt="Market Analytics Platform" width="100%" />
          </a>
          <a href="https://github.com/Nanduvasireddy04/Market-Analytics-Platform" target="_blank" rel="noreferrer">
            <h2>Market Analytics Platform</h2>
          </a>
          <div className="project-tags">
            <span>Python</span><span>PostgreSQL</span><span>Supabase</span>
            <span>dbt</span><span>Tableau</span>
          </div>
          <p>
            Cloud-native financial analytics platform analyzing stock market performance across
            large historical datasets. Built end-to-end ETL pipelines transforming raw market
            data into analytics-ready warehouse models via layered dbt (staging → intermediate →
            mart). Engineered KPIs including rolling 30-day volatility, moving averages, and
            trend signal indicators. Integrated Tableau live against a cloud-hosted PostgreSQL
            warehouse for interactive executive dashboards.
          </p>
        </div>

        {/* Clinical Risk Analytics Platform */}
        <div className="project">
          <a href="https://github.com/Nanduvasireddy04/clinical-analysis-platform" target="_blank" rel="noreferrer">
            <img src={mock03} className="zoom" alt="Clinical Risk Analytics Platform" width="100%" />
          </a>
          <a href="https://github.com/Nanduvasireddy04/clinical-analysis-platform" target="_blank" rel="noreferrer">
            <h2>Clinical Risk Analytics Platform</h2>
          </a>
          <div className="project-tags">
            <span>Python</span><span>HL7 FHIR</span><span>Kafka</span>
            <span>Databricks</span><span>Snowflake</span><span>dbt</span>
            <span>Airflow</span><span>Streamlit</span><span>Docker</span>
          </div>
          <p>
            End-to-end healthcare data engineering platform using synthetic HL7 FHIR EMR/EHR
            data. Kafka-based streaming ingestion for Patient, Observation, Encounter, Condition,
            and MedicationRequest events. Medallion architecture (Bronze → Silver → Gold)
            flattening nested FHIR JSON into analytics-ready clinical datasets. ML pipelines
            for patient risk prediction and vitals anomaly detection. Airflow DAG orchestration
            and Streamlit dashboards for clinical alerts and executive monitoring. Aligned with
            Epic / Cerner enterprise EHR patterns.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;


// import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import '../assets/styles/Project.scss';

// function Project() {
//     return(
//     <div className="projects-container" id="projects">
//       <h1>Projects</h1>
//       <div className="projects-grid">
//         <div className="project">
//           <a href="https://github.com/Nanduvasireddy04/la-tiendita-aidmatch" target="_blank" rel="noreferrer">
//             <img src={mock01} className="zoom" alt="La Tiendita AidMatch" width="100%" />
//           </a>
//           <a href="https://github.com/Nanduvasireddy04/la-tiendita-aidmatch" target="_blank" rel="noreferrer">
//             <h2>La Tiendita AidMatch</h2>
//           </a>
//           <p>
//             Built a mutual-aid matching platform that connects people requesting essential resources with local donors.
//             Developed the frontend and backend using React, FastAPI, PostgreSQL, and Supabase, with rule-based matching,
//             chat, and deployment across Vercel and Render.
//           </p>
//         </div>

//         <div className="project">
//           <a href="#" target="_blank" rel="noreferrer">
//             <img src={mock02} className="zoom" alt="Real-Time Stock Data Pipeline" width="100%" />
//           </a>
//           <a href="#" target="_blank" rel="noreferrer">
//             <h2>Real-Time Stock Data Pipeline</h2>
//           </a>
//           <p>
//             Designing a real-time data engineering pipeline to ingest and process market data from APIs such as Finnhub
//             and Binance. The project focuses on streaming ingestion, transformation, cloud storage, and dashboard-ready
//             analytics for financial data use cases.
//           </p>
//         </div>

//         <div className="project">
//           <a href="#" target="_blank" rel="noreferrer">
//             <img src={mock03} className="zoom" alt="Customer Churn Prediction" width="100%" />
//           </a>
//           <a href="#" target="_blank" rel="noreferrer">
//             <h2>Customer Churn Prediction</h2>
//           </a>
//           <p>
//             Built a machine learning project to predict telecom customer churn using Python, Pandas, Scikit-learn, and
//             XGBoost. Included model evaluation, feature importance analysis, and dashboard-oriented outputs to support
//             business decision-making.
//           </p>
//         </div>
//       </div>
//     </div>
//     );
// }

// export default Project;