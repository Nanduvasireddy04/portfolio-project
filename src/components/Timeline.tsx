import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Oct 2025 – Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">
              ChiEAC – Chicago Education Advocacy Co-operative &nbsp;|&nbsp; Remote, USA
            </h4>
            <p>
              Built the organization's end-to-end analytics platform on Snowflake + dbt Core
              with full schema test coverage and data lineage. Developed predictive ML models
              (scikit-learn, XGBoost) with SHAP explainability for non-technical stakeholders.
              Shipped a full-stack community aid-matching web app (Python, JavaScript,
              PostgreSQL / Supabase, AWS) used by real community members. Orchestrated all
              pipelines via Apache Airflow DAGs and prototyped an LLM-powered NL analytics
              interface using LangChain / LangGraph.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2025 – Oct 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer (Contract)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Washy Washy World Laundromat LLC &nbsp;|&nbsp; New Bedford, MA (Remote)
            </h4>
            <p>
              Designed and built a production CRM from scratch — customer management, order
              tracking, revenue dashboard, and tax-ready Excel reporting outputs. Architected
              the full stack: Python backend, PostgreSQL relational model, CI/CD via GitHub
              Actions. Built SQL pipelines (joins, window functions, aggregations) feeding
              pivot-table Excel reports shared directly with the client's accountant.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Aug 2023 – May 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              M.S. Technology Management — GPA 3.7 / 4.0
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Massachusetts Dartmouth &nbsp;|&nbsp; North Dartmouth, MA
            </h4>
            <p>
              Coursework: Business Analytics & Data Mining, Statistical Analysis, Business
              Intelligence, Operations Analysis, Enterprise Systems, Algorithms & Data Structures.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2022 – Jul 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Systems Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Infosys Ltd — Standard Bank Africa (Finacle) &nbsp;|&nbsp; Hyderabad, India
            </h4>
            <p>
              Supported Standard Bank Africa on Infosys's Finacle core banking platform.
              Optimized Oracle SQL / PL/SQL analytical queries by 35% via execution-plan
              analysis and index tuning. Built custom iReports templates and PL/SQL stored
              procedures for regulatory reporting. Delivered backend Java CRs in Agile sprints
              with Jira and cross-functional QA/compliance sign-off.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2021 – Apr 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Capgemini Engineering &nbsp;|&nbsp; India (Hybrid)
            </h4>
            <p>
              Built ETL/ELT pipelines using Python, PySpark / Spark SQL, and AWS (Glue, S3,
              Lambda) ingesting Parquet, JSON, CSV, Avro into Snowflake and Databricks Delta Lake
              via Medallion Architecture (Bronze → Silver → Gold). Implemented Apache Kafka
              streaming ingestion and orchestrated batch + streaming workflows via Airflow DAGs
              with SLA monitoring. Applied Great Expectations data quality checks at each layer
              and built dbt transformation models with full schema tests and documentation.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;


// import React from "react";
// import "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import "../assets/styles/Timeline.scss";

// function Timeline() {
//   return (
//     <div id="history">
//       <div className="items-container">
//         <h1>Experience & Education</h1>
//         <VerticalTimeline>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
//             contentArrowStyle={{ borderRight: "7px solid white" }}
//             date="Oct 2025 - Present"
//             iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Data Scientist</h3>
//             <h4 className="vertical-timeline-element-subtitle">
//               ChiEAC (Chicago Education Advocacy Co-operative) | Remote
//             </h4>
//             <p>
//               Working on data-driven solutions, analytics workflows, and applied
//               machine learning to support decision-making and impact-focused
//               initiatives.
//             </p>
//           </VerticalTimelineElement>

//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="Aug 2025 - Oct 2025"
//             iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Software Engineer</h3>
//             <h4 className="vertical-timeline-element-subtitle">
//               Washy Washy World Laundromat LLC | Remote
//             </h4>
//             <p>
//               Designed data-driven applications, built and maintained data
//               pipelines, created dashboards and reports, and supported production
//               systems across multiple platforms and programming environments.
//             </p>
//           </VerticalTimelineElement>

//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="Aug 2023 - May 2025 (Education)"
//             iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">
//               Master of Science in Technology Management
//             </h3>
//             <h4 className="vertical-timeline-element-subtitle">
//               University of Massachusetts Dartmouth | GPA: 3.7
//             </h4>
//             <p>
//               Graduate studies focused on technology management, analytics,
//               software systems, and practical data-driven problem solving.
//             </p>
//           </VerticalTimelineElement>

//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="Apr 2022 - Jul 2023"
//             iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Systems Engineer</h3>
//             <h4 className="vertical-timeline-element-subtitle">
//               Infosys Ltd | Hyderabad, India
//             </h4>
//             <p>
//               Designed SQL-based data models, automated ETL and data validation,
//               developed microservice APIs for real-time exchange, and supported
//               DevOps and Agile delivery for core banking systems.
//             </p>
//           </VerticalTimelineElement>

//           {/* <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="Featured Project"
//             iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">
//               La Tiendita Aid Match 24/7
//             </h3>
//             <h4 className="vertical-timeline-element-subtitle">
//               Full-Stack Data Engineering Project
//             </h4>
//             <p>
//               Built a secure mutual-aid platform using Python, FastAPI, React,
//               PostgreSQL, AWS, Docker, and scikit-learn, with anonymous signup,
//               matching logic, real-time coordination, analytics dashboards, and
//               safety-first design.
//             </p>
//           </VerticalTimelineElement> */}
//         </VerticalTimeline>
//       </div>
//     </div>
//   );
// }

// export default Timeline;