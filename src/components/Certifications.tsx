import React from "react";
import "../assets/styles/Certifications.scss";

function Certifications() {
  return (
    <div className="certifications-container" id="certifications">
      <h1>Certifications</h1>

      <div className="certifications-list">
        <div className="cert-card">
          <div className="cert-header">
            <img
              className="cert-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              alt="AWS logo"
            />
            <h3>
              AWS Certified Cloud Practitioner CLF-C02
              <span className="cert-badge verified">Verified</span>
            </h3>
          </div>
          <p>
            Issue Date: March 16, 2026 | Expiration: March 16, 2029
            <br />
            Validation ID: 4c01e0c6b04644efae2d70aacb4de09f
            <br />
            <a
              href="https://aws.amazon.com/verification"
              target="_blank"
              rel="noreferrer"
            >
              Verify Credential
            </a>
          </p>
        </div>

        
        <div className="cert-card">
          <div className="cert-header">
            <img
              className="cert-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              alt="AWS logo"
            />
            <h3>
              AWS Certified Data Engineer - Associate DEA-C01
              <span className="cert-badge verified">Verified</span>
            </h3>
          </div>
          <p>
            Issue Date: March 28, 2026 | Expiration: March 28, 2029
            <br />
            Validation ID: bd3e23b13d6244ac89d3707c3454e2cd
            <br />
            <a
              href="https://aws.amazon.com/verification"
              target="_blank"
              rel="noreferrer"
            >
              Verify Credential
            </a>
          </p>
        </div>

        <div className="cert-card">
          <div className="cert-header">
            <img
              className="cert-logo"
              src="https://www.oracle.com/a/ocom/img/social-og-image-stacked-default-400.jpg"
              alt="Oracle logo"
            />
            <h3>
              Oracle Database SQL Certified Associate
              <span className="cert-badge progress">In Progress</span>
            </h3>
          </div>
          <p>
            Demonstrates strong SQL querying, data modeling, and relational
            database concepts.
          </p>
        </div>

        <div className="cert-card">
          <div className="cert-header">
            <img
              className="cert-logo"
              src="https://images.ctfassets.net/1e6ajr2k4140/6x8vLqQ6R6N0m1G8F2g4b7/2a9d6c1a5a5f1b7a8bda5fd4fdcfb60d/databricks-logo.png"
              alt="Databricks logo"
            />
            <h3>
              Databricks Certified Data Engineer Associate
              <span className="cert-badge progress">In Progress</span>
            </h3>
          </div>
          <p>
            Focused on Spark, distributed data processing, and modern data
            engineering workflows.
          </p>
        </div>

        <div className="cert-card">
          <div className="cert-header">
            <img
              className="cert-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg"
              alt="Snowflake logo"
            />
            <h3>
              Snowflake SnowPro Core
              <span className="cert-badge progress">In Progress</span>
            </h3>
          </div>
          <p>
            Covers data warehousing, Snowflake architecture, and cloud-native
            analytics solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certifications;

