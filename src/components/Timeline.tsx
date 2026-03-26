import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
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
            date="Oct 2025 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">
              ChiEAC (Chicago Education Advocacy Co-operative) | Remote
            </h4>
            <p>
              Working on data-driven solutions, analytics workflows, and applied
              machine learning to support decision-making and impact-focused
              initiatives.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2025 - Oct 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Washy Washy World Laundromat LLC | Remote
            </h4>
            <p>
              Designed data-driven applications, built and maintained data
              pipelines, created dashboards and reports, and supported production
              systems across multiple platforms and programming environments.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 - May 2025 (Education)"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Master of Science in Technology Management
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Massachusetts Dartmouth | GPA: 3.7
            </h4>
            <p>
              Graduate studies focused on technology management, analytics,
              software systems, and practical data-driven problem solving.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2022 - Jul 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Systems Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Infosys Ltd | Hyderabad, India
            </h4>
            <p>
              Designed SQL-based data models, automated ETL and data validation,
              developed microservice APIs for real-time exchange, and supported
              DevOps and Agile delivery for core banking systems.
            </p>
          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Featured Project"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              La Tiendita Aid Match 24/7
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Full-Stack Data Engineering Project
            </h4>
            <p>
              Built a secure mutual-aid platform using Python, FastAPI, React,
              PostgreSQL, AWS, Docker, and scikit-learn, with anonymous signup,
              matching logic, real-time coordination, analytics dashboards, and
              safety-first design.
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;