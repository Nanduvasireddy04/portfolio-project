import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://github.com/Nanduvasireddy04/la-tiendita-aidmatch" target="_blank" rel="noreferrer">
            <img src={mock01} className="zoom" alt="La Tiendita AidMatch" width="100%" />
          </a>
          <a href="https://github.com/Nanduvasireddy04/la-tiendita-aidmatch" target="_blank" rel="noreferrer">
            <h2>La Tiendita AidMatch</h2>
          </a>
          <p>
            Built a mutual-aid matching platform that connects people requesting essential resources with local donors.
            Developed the frontend and backend using React, FastAPI, PostgreSQL, and Supabase, with rule-based matching,
            chat, and deployment across Vercel and Render.
          </p>
        </div>

        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={mock02} className="zoom" alt="Real-Time Stock Data Pipeline" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Real-Time Stock Data Pipeline</h2>
          </a>
          <p>
            Designing a real-time data engineering pipeline to ingest and process market data from APIs such as Finnhub
            and Binance. The project focuses on streaming ingestion, transformation, cloud storage, and dashboard-ready
            analytics for financial data use cases.
          </p>
        </div>

        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={mock03} className="zoom" alt="Customer Churn Prediction" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Customer Churn Prediction</h2>
          </a>
          <p>
            Built a machine learning project to predict telecom customer churn using Python, Pandas, Scikit-learn, and
            XGBoost. Included model evaluation, feature importance analysis, and dashboard-oriented outputs to support
            business decision-making.
          </p>
        </div>
      </div>
    </div>
    );
}

export default Project;