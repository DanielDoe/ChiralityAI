import { Project } from "@/types/project";

const projectData: Project[] = [
  {
    id: 1,
    title: "Production Maintenance Tracker",
    paragraph:
      "Developed an in-house system of mobile applications to facilitate a communication system for on-field personnel and multiple teams, including artificial lift, chemical, subsurface teams, with over 250 users. Resulted in a 21% reduction in ticket close-out time.",
    image: "/images/projects/project1.png",
    author: {
      name: "Dr. Huzefa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["maintenance", "communication", "optimization"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Production Chemical Optimization",
    paragraph:
      "Implementing a metric-driven Chemical Management Program for H2S over 600+ wells across 150,000 acres. Triazine was identified as the most economical option for sub-50 lbs H2S application with centralized treatment as the best strategy.",
    image: "/images/projects/project2.png",
    author: {
      name: "Dr. Huzefa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["chemical management", "optimization"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Pipeline Integrity",
    paragraph:
      "Implemented a comprehensive program involving corrosion coupon program, microbial analysis, and tank coating specifications to maintain pipeline integrity. Included risk ranking of all lines and reviewing the current pigging program.",
    image: "/images/projects/project3.png",
    author: {
      name: "Dr. Huzefa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["pipeline", "integrity", "corrosion"],
    publishDate: "2024",
  },
  {
    id: 4,
    title: "iPig Machine Learning",
    paragraph:
      "Used Google Cloud Vision API to develop a machine learning model based on field images to identify areas with high paraffin levels and areas with corrosion, enabling effective monitoring and scheduling treatment/pigging accordingly.",
    image: "/images/projects/project4.png",
    author: {
      name: "Dr. Huzefa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["machine learning", "corrosion", "monitoring"],
    publishDate: "2024",
  },
  {
    id: 5,
    title: "Pigging Economic Calculator",
    paragraph:
      "Developed an economic calculator to optimize pigging operations, considering factors such as the number of segments pigged per crew, day rate for pigging crew, and SME hourly rate. This tool aids in calculating the overall cost-effectiveness of pigging operations.",
    image: "/images/projects/project5.png",
    author: {
      name: "Dr. Huzefa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["economic calculator", "pigging", "optimization"],
    publishDate: "2024",
  },
  {
    id: 6,
    title: "Mercury Partitioning Calculator",
    paragraph:
      "Leveraged a more modern equation of state for mercury to model the partitioning in gas condensate systems. The tool provides detailed outputs for liquid, gas, and other phases under various conditions.",
    image: "/images/projects/project6.png",
    author: {
      name: "Dr. Huzefa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["mercury partitioning", "modeling", "gas condensate"],
    publishDate: "2024",
  },
  {
    id: 7,
    title: "H2S Economic Model",
    paragraph:
      "Developed an economic model to evaluate different strategies for H2S treatment, including direct injection chemicals, chemical towers, physical solvents, and amine units. The model helps in determining the net profit and efficiency of each strategy.",
    image: "/images/projects/project7.png",
    author: {
      name: "Dr. Huzefa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["H2S treatment", "economic model", "optimization"],
    publishDate: "2024",
  },
  {
    id: 8,
    title: "Produced Water Model",
    paragraph:
      "Developed a model to simulate the behavior of produced water under various operational conditions. The tool helps in optimizing water treatment processes by providing insights into phase behavior and outlet distribution.",
    image: "/images/projects/project8.png",
    author: {
      name: "Dr. Huzefa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["produced water", "modeling", "optimization"],
    publishDate: "2024",
  },
  {
    id: 9,
    title: "Data Historian: Canary",
    paragraph:
      "Developed an open-source internal live streaming data system for engineers. This solution provides real-time data visualization and historical data access for enhanced decision-making in oil and gas operations.",
    image: "/images/projects/project9.png",
    author: {
      name: "Dr. Huzefa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["data historian", "live streaming", "real-time data"],
    publishDate: "2024",
  },
  {
    id: 10,
    title: "Completions Tag Normalization",
    paragraph:
      "Devised a multi-tier classification method to normalize a massive data set of completion tags. The solution includes a machine learning library for normalization and an in-house app to manage tag variations, resulting in significant data optimization.",
    image: "/images/projects/project10.png",
    author: {
      name: "Dr. Huzefa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["tag normalization", "data optimization", "machine learning"],
    publishDate: "2024",
  },
  {
    id: 11,
    title: "Automated Batch Treatment",
    paragraph:
      "Identified opportunities to reduce costs and improve planning processes through treatment frequency optimization and corrosion inhibitor volume optimization.",
    image: "/images/projects/project11.png",
    author: {
      name: "MJ, TAC, Zainab",
      image: "/images/projects/author-11.png",
      designation: "AI Specialists",
    },
    tags: ["cost reduction", "planning"],
    publishDate: "2024",
  },
  {
    id: 12,
    title: "Permian Basin Production Model",
    paragraph:
      "Developed a model to forecast production and predict Type Curve in the Permian Basin using publicly available, open-sourced data for over 12,000 wells.",
    image: "/images/projects/project12.png",
    author: {
      name: "Taher, Omar, Max",
      image: "/images/projects/author-12.png",
      designation: "Data Analysts",
    },
    tags: ["forecasting", "production"],
    publishDate: "2024",
  },
  {
    id: 13,
    title: "Profitability Analysis",
    paragraph:
      "Transitioned EFS Tiering to Profitability/LOE as opposed to Actual Oil Production, utilizing advanced data analysis techniques.",
    image: "/images/projects/project13.png",
    author: {
      name: "Dr. Huz",
      image: "/images/projects/author-13.png",
      designation: "Lead Analyst",
    },
    tags: ["profitability", "data analysis"],
    publishDate: "2024",
  },
  {
    id: 14,
    title: "Carbon Intensities in GOM and Permian Basin",
    paragraph:
      "Conducted a statistical study on carbon intensities using historic data from EPA, EIA, and BOEM, employing a log normal distribution algorithm.",
    image: "/images/projects/project14.png",
    author: {
      name: "Dr. Huz, Ama, MJ, Taher, Shaq",
      image: "/images/projects/author-14.png",
      designation: "Environmental Analysts",
    },
    tags: ["carbon intensities", "environment"],
    publishDate: "2024",
  },
  {
    id: 15,
    title: "Scope-3 Emissions",
    paragraph:
      "Assessed emissions from various sources including air travel, car rentals, and hotels to calculate the total CO2e emissions and identify reduction strategies.",
    image: "/images/projects/project15.png",
    author: {
      name: "Ama, MJ, TAC, Zainab, Sachin",
      image: "/images/projects/author-15.png",
      designation: "Environmental Analysts",
    },
    tags: ["emissions", "sustainability"],
    publishDate: "2024",
  },
  {
    id: 16,
    title: "Environmental Reporting App",
    paragraph:
      "Developed an app to streamline environmental reporting with modules for daily fuel reports, data entry, and comprehensive dashboards.",
    image: "/images/projects/project16.png",
    author: {
      name: "TAC, Ama, MJ, Zainab",
      image: "/images/projects/author-16.png",
      designation: "Software Developers",
    },
    tags: ["reporting", "environment"],
    publishDate: "2024",
  },
  {
    id: 17,
    title: "D&I Timeseries Analysis",
    paragraph:
      "Analyzed diversity and inclusion metrics across departments using time series data to identify trends and areas for improvement.",
    image: "/images/projects/project17.png",
    author: {
      name: "Dr. Huz",
      image: "/images/projects/author-17.png",
      designation: "Data Scientist",
    },
    tags: ["diversity", "inclusion"],
    publishDate: "2024",
  },
  {
    id: 18,
    title: "mLabs",
    paragraph:
      "Centralized content-management portal functioning as a growing bank of cross-discipline, cross-functional solutions organized by different business units.",
    image: "/images/projects/project18.png",
    author: {
      name: "Laura, TAC, Ehtesham",
      image: "/images/projects/author-18.png",
      designation: "Content Managers",
    },
    tags: ["content management", "cross-functional"],
    publishDate: "2024",
  },
  {
    id: 19,
    title: "KosGo",
    paragraph:
      "Developed a secured website and search wizard for real-time data search, daily overnight data crawling, and comprehensive dashboards.",
    image: "/images/projects/project19.png",
    author: {
      name: "TAC, Taher, Ehtesham, Zainab, Sachin",
      image: "/images/projects/author-19.png",
      designation: "Web Developers",
    },
    tags: ["data search", "web development"],
    publishDate: "2024",
  },
  {
    id: 20,
    title: "Production Report",
    paragraph:
      "Created a daily production performance report system integrating SQL Server, P2, and Spotfire for comprehensive data analysis and reporting.",
    image: "/images/projects/project20.png",
    author: {
      name: "Dr. Huz, Tony, Ama, MJ, Zainab",
      image: "/images/projects/author-20.png",
      designation: "Data Analysts",
    },
    tags: ["production", "reporting"],
    publishDate: "2024",
  },
{
    id: 21,
    title: "COVID-19 Tracker",
    paragraph:
      "Effectively manage COVID-19 risks without impacting production/revenue or compromising employee safety. Developed a tool with 5 active modules, 10 data tables, and 1535 power users.",
    image: "/images/projects/project21.png",
    author: {
      name: "Ama, Tac, Malik, Dr. Huz",
      image: "/images/projects/author-21.png",
      designation: "Health and Safety Team",
    },
    tags: ["COVID-19", "tracker", "health", "safety"],
    publishDate: "2024",
  },
  {
    id: 22,
    title: "Historical Data Normalization",
    paragraph:
      "Normalized historical data for better analytics. Filled missing production data and downtime hours, formulated working interest, and calculated bottom hole pressure.",
    image: "/images/projects/project22.png",
    author: {
      name: "MJ, Ama, Tony, Shaq, Ali",
      image: "/images/projects/author-22.png",
      designation: "Data Engineers",
    },
    tags: ["data", "normalization", "analytics"],
    publishDate: "2024",
  },
  {
    id: 23,
    title: "Decline Curve Analysis",
    paragraph:
      "Performed decline curve analysis using OWL 7 real-time data and Modified Hyperbolic (MH) model. Provided lifetime well data prediction and real-time dashboard.",
    image: "/images/projects/project23.png",
    author: {
      name: "Dr. Huz, Ama, MJ",
      image: "/images/projects/author-23.png",
      designation: "Data Scientists",
    },
    tags: ["decline curve", "analysis", "oil and gas"],
    publishDate: "2024",
  },
  {
    id: 24,
    title: "Well Data Extraction",
    paragraph:
      "Extracted well data from 1719 files with 58 unique columns for comprehensive analysis and reporting.",
    image: "/images/projects/project24.png",
    author: {
      name: "Tony, Ali, Shaq",
      image: "/images/projects/author-24.png",
      designation: "Data Analysts",
    },
    tags: ["well data", "extraction", "reporting"],
    publishDate: "2024",
  },
  {
    id: 25,
    title: "Global Downtime Report",
    paragraph:
      "Standardized 300+ nonproductive time codes for production and drilling teams, increasing transparency in downtime causes.",
    image: "/images/projects/project25.png",
    author: {
      name: "Dr. Huz",
      image: "/images/projects/author-25.png",
      designation: "Operations Analyst",
    },
    tags: ["downtime", "report", "standardization"],
    publishDate: "2024",
  },
  {
    id: 26,
    title: "OPEX Tracker",
    paragraph:
      "Tracked over $10MM of lease operating expenses per month across 130 fields for 13 cost categories through a customized in-house app.",
    image: "/images/projects/project26.png",
    author: {
      name: "Tac, Ama, Geoff",
      image: "/images/projects/author-26.png",
      designation: "Finance Analysts",
    },
    tags: ["OPEX", "tracker", "finance"],
    publishDate: "2024",
  },
  {
    id: 27,
    title: "CAPEX Accountability App",
    paragraph:
      "Developed a CAPEX accountability app for tracking expenses by region, cost category, and balance.",
    image: "/images/projects/project27.png",
    author: {
      name: "Tac, Ama, MJ, Taha, Zainab, Sachin",
      image: "/images/projects/author-27.png",
      designation: "Project Managers",
    },
    tags: ["CAPEX", "accountability", "finance"],
    publishDate: "2024",
  },
  {
    id: 28,
    title: "Clarity",
    paragraph:
      "Created a project management dashboard for summarizing daily production reports and tracking open projects.",
    image: "/images/projects/project28.png",
    author: {
      name: "Tac",
      image: "/images/projects/author-28.png",
      designation: "Project Manager",
    },
    tags: ["project management", "dashboard"],
    publishDate: "2024",
  }
];

export default projectData;