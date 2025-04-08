import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Aziz Ishan-Khojaev</h1>
        <p className="text-lg mt-2">DevOps & Data Platform Engineer</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/Azneo" target="_blank" className="hover:underline text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/aziz-ishan-khojaev-073472107/" target="_blank" className="hover:underline text-blue-400">LinkedIn</a>
          <a href="mailto:mr.azizkhadja@mail.ru" className="hover:underline text-blue-400">Email</a>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-700">Projects</h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold">Car Price Prediction Analysis</h3>
            <p className="mt-2 text-gray-300">Analyzed car price determinants using regression models (Linear, Logistic, Lasso). Explored feature impact (e.g., max power, year, kilometers) with visualizations and insights.</p>
            <a href="https://github.com/Azneo/Feature_importance" target="_blank" className="text-blue-400 hover:underline">GitHub Repo</a>
          </div>

          <div>
            <h3 className="text-xl font-bold">Trustpilot Review Sentiment Analysis of Coca-Cola</h3>
            <p className="mt-2 text-gray-300">Scraped reviews, analyzed sentiment using Hugging Face NLP, extracted key word frequencies and bigrams, and visualized insights around consumer perception.</p>
            <a href="https://github.com/Azneo/Sentiment_analysis" target="_blank" className="text-blue-400 hover:underline">GitHub Repo</a>
          </div>

          <div>
            <h3 className="text-xl font-bold">Sentiment Analysis and Stock Market Comparison</h3>
            <p className="mt-2 text-gray-300">Analyzed tweet sentiment trends over time, filled missing data, and overlaid with stock market data to explore correlations in behavior and pricing.</p>
            <a href="https://github.com/Azneo/Bachelor" target="_blank" className="text-blue-400 hover:underline">GitHub Repo</a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-700">Skills & Technologies</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Cloud: Azure, AWS, OCI</li>
          <li>Infrastructure: Terraform, Ansible, Docker, Kubernetes</li>
          <li>Languages: Python, Go, SQL (PostgreSQL, Oracle), Java</li>
          <li>Data Tools: Pandas, Scikit-learn, OpenCV, Matplotlib</li>
          <li>DevOps: CI/CD Pipelines, Monitoring, Microservices Architecture</li>
          <li>Web Scraping & Automation: BeautifulSoup, Requests</li>
          <li>Languages: German, English, Persian, Russian</li>
        </ul>
      </section>
    </div>
  );
}
