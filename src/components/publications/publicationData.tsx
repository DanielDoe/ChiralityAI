import { Publication } from "@/types/publication";

const publicationData = [
  // Existing Operations Excellence Publications (1-5)
  {
    id: 1,
    classification: "Operations Excellence",
    title:
      "Implementation of a Metric-Driven, Statistical Chemical Management Program for Unconventional Plays",
    abstract:
      "The challenges for operators in the Eagle Ford have been enormous, which can push chemical management to the back burner. But there is a price to be paid down the road. Operators have recently become more mindful of implementing metric-driven chemical management programs.",
    source: "Oil and Gas Facilities",
    type: "Article",
    keywords:
      "metric-driven, statistical chemical management, unconventional plays, Eagle Ford",
    link: "https://jpt.spe.org/implementation-metric-driven-statistical-chemical-management-program-unconventional-plays",
    image: "/images/usecases/operations-one.jpg",
    author: {
      name: "Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["metric-driven", "chemical management", "unconventional plays"],
    publishDate: "January 16, 2014",
  },
  {
    id: 2,
    classification: "Operations Excellence",
    title:
      "Data-Driven Pipeline Management System for Oil and Gas Transportation in Unconventional Plays",
    abstract:
      "An article detailing the implementation of a data-driven pipeline management system specifically designed for the transportation of oil and gas in unconventional plays.",
    source: "Energy CIO Insights",
    type: "Article",
    keywords:
      "data-driven, pipeline management, oil and gas, transportation, unconventional plays",
    link: "https://big-data.energycioinsights.com/cxo-insights/datadriven-pipeline-management-system-for-oil-and-gas-transportation-in-unconventional-plays-nwid-76.html",
    image: "/images/usecases/operations-one.jpg",
    author: {
      name: "Dr. Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["pipeline management", "data-driven", "oil and gas"],
    publishDate: "July 29, 2015",
  },
  {
    id: 3,
    classification: "Operations Excellence",
    title: "Production Chemicals Optimization Congress",
    abstract:
      "Presentation on implementing a metric-driven chemical management program, addressing various challenges such as H2S, paraffin, biocide, corrosion, and SI in the context of Murphy Oil-Eagle Ford Operations.",
    source: "Murphy Oil Corporation",
    type: "Conference Presentation",
    keywords:
      "production chemicals, optimization, chemical management, Eagle Ford, Murphy Oil",
    link: "https://www.lbcg.com/media/downloads/events/487/day-1-huzeifa-ismail-production-chemistry-and-integrity-management-and-leslie-malone-senior-staff-en.8005.pdf",
    image: "/images/usecases/operations-one.jpg",
    author: {
      name: "Dr. Huz Ismail, Leslie Malone",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["chemical management", "production optimization"],
    publishDate: "July 29, 2015",
  },
  {
    id: 4,
    classification: "Operations Excellence",
    title: "Digital Approach to Operations Management Empowers the Oil Field",
    abstract:
      "This article discusses how the implementation of a digital Production Maintenance Tracker (PMT) application at Sanchez Oil & Gas has transformed operations management by centralizing assets, departments, and routes into one hub.",
    source: "Journal of Petroleum Technology",
    type: "Article",
    keywords:
      "digital operations, Production Maintenance Tracker, PMT, Sanchez Oil & Gas, operations management",
    link: "https://jpt.spe.org/digital-approach-operations-management-empowers-oil-field",
    image: "/images/usecases/operations-one.jpg",
    author: {
      name: "Justin Bender, Khuzema Sunel, Leslie Malone",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["digital operations", "PMT", "operations management"],
    publishDate: "July 25, 2019",
  },
  {
    id: 5,
    classification: "Operations Excellence",
    title: "Production Operations Alerts",
    abstract:
      "This publication discusses the implementation of production operations alerts to streamline communication and operational efficiency in the oil field.",
    source: "Society of Petroleum Engineers",
    type: "Article",
    keywords:
      "production operations, alerts, communication, operational efficiency",
    link: "https://pubs.spe.org/en/dsde/dsde-article-detail-page/?art=5773",
    image: "/images/usecases/operations-one.jpg",
    author: {
      name: "Dr. Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["production operations", "alerts"],
    publishDate: "Date not specified",
  },
  // New Data Historian Publications (6-7)
  {
    id: 6,
    classification: "Data Historian",
    title: "Data Historian and Trending Tool Transforms Company Operations",
    abstract:
      "In 2018, Murphy Oil launched an initiative to open-source all internal live streaming data to its engineers. The process led it to implement a global data historian and a corresponding visualization tool. The insights provided are shaping the future of operations at the company.",
    source: "Journal of Petroleum Technology",
    type: "Article",
    keywords:
      "data historian, trending tool, Murphy Oil, operations transformation",
    link: "https://jpt.spe.org/data-historian-and-trending-tool-transforms-company-operations",
    image: "/images/usecases/data-historian-one.jpg",
    author: {
      name: "Huzeifa Ismail, Francisco Ruiz, Thomas Nix",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["data historian", "trending tool", "operations transformation"],
    publishDate: "October 29, 2019",
  },
  {
    id: 7,
    classification: "Data Historian",
    title: "Proposed Framework Normalizes Completions Tags",
    abstract:
      "Murphy Oil has created a workflow to normalize the tags it uses when collecting data on its hydraulic fracturing stages. The workflow described here empowers decision-makers, who no longer wait for hours to collect data or waste hours cleaning and preparing data for analysis.",
    source: "Journal of Petroleum Technology",
    type: "Article",
    keywords:
      "completions tags, data normalization, hydraulic fracturing, Murphy Oil",
    link: "https://jpt.spe.org/proposed-framework-normalizes-completions-tags",
    image: "/images/usecases/data-historian-two.jpg",
    author: {
      name: "Molly Smith, Sarah Carr, Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["completions tags", "data normalization", "hydraulic fracturing"],
    publishDate: "January 28, 2021",
  },
  {
    id: 8,
    classification: "Reporting & Analytics",
    title: "Downtime Report",
    abstract:
      "Murphy Oil worked across its assets to create a tool called the Global Downtime Report (GDR). The GDR provides a global perspective of operational downtime data, focusing on nonproductive time related to drilling, completion, and production operations.",
    source: "Journal of Petroleum Technology",
    type: "Article",
    keywords:
      "downtime report, operational downtime, drilling, completion, production operations",
    link: "https://pubs.spe.org/en/dsde/dsde-article-detail-page/?art=7422",
    image: "/images/usecases/reporting-analytics-one.jpg",
    author: {
      name: "Huzeifa Ismail, Laura Naaykens, Mark Mick",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["downtime report", "operational downtime"],
    publishDate: "July 29, 2020",
  },
  {
    id: 9,
    classification: "Reporting & Analytics",
    title:
      "GOM Hurricane Downtime: Data Science Offers Perspective on Downtime of Production Facilities Caused by Storms in the Gulf of Mexico",
    abstract:
      "This article provides a data science perspective on the downtime of production facilities caused by storms in the Gulf of Mexico, highlighting the impacts and solutions for minimizing such downtime.",
    source: "Journal of Petroleum Technology",
    type: "Article",
    keywords:
      "hurricane downtime, production facilities, Gulf of Mexico, storms, data science",
    link: "/mnt/data/Data Science Offers Perspective on Downtime of Production Facilities Caused by Storms in the Gulf of Mexico.pdf",
    image: "/images/usecases/reporting-analytics-two.jpg",
    author: {
      name: "Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["hurricane downtime", "production facilities", "Gulf of Mexico"],
    publishDate: "Date not specified",
  },
  {
    id: 10,
    classification: "Reporting & Analytics",
    title:
      "Content Management Tool: Innovation Advances Digital Culture Throughout Company",
    abstract:
      "A technology initiative is changing more than the digital landscape at Murphy Oil. Since its deployment in November 2018, Murphy Labs is changing the very culture of the corporation.",
    source: "Journal of Petroleum Technology",
    type: "Article",
    keywords:
      "content management tool, digital culture, Murphy Oil, technology initiative",
    link: "https://pubs.spe.org/en/dsde/dsde-article-detail-page/?art=5098",
    image: "/images/usecases/reporting-analytics-three.jpg",
    author: {
      name: "Eric Hambly, Sean Aslam, Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["content management", "digital culture"],
    publishDate: "February 20, 2019",
  },
  {
    id: 11,
    classification: "ESG / HSE",
    title: "Statistical Study of Carbon Intensities in the GOM and PB",
    abstract:
      "In addressing carbon emissions as the primary contributor to climate change, a study was conducted to examine the total carbon dioxide equivalent (CO2e) emitted into the atmosphere from the production of crude oil and gas in the two largest producing regions of the U.S: the Permian Basin (PB) and the Gulf of Mexico (GOM). This report details the initiative, including the research of emissions and production data from three federal agencies: the U.S. Environmental Protection Agency (EPA), U.S. Energy Information Administration (EIA), and the Bureau of Ocean Energy Management (BOEM).",
    source: "ChemRxiv",
    type: "Article",
    keywords:
      "carbon emission, carbon emission factor, greenhouse gases, flaring activity, oil and gas industry, carbon intensity",
    link: "https://chemrxiv.org/engage/chemrxiv/article-details/60c749d20f50db4b6c39696c",
    image: "/images/usecases/esg-one.jpg",
    author: {
      name: "Ama Motiwala, Dr. Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["carbon intensity", "GOM", "Permian Basin", "climate change"],
    publishDate: "April 13, 2020",
  },
  {
    id: 12,
    classification: "ESG / HSE",
    title: "HSE Behavioral Safety Program",
    abstract:
      "An in-depth exploration of the behavioral safety program implemented in the oil and gas industry to improve safety culture and reduce incidents. The program focuses on proactive safety measures, employee engagement, and continuous improvement.",
    source: "Society of Petroleum Engineers",
    type: "Article",
    keywords:
      "behavioral safety, safety culture, incident reduction, proactive safety measures",
    link: "https://pubs.spe.org/en/hsenow/hse-now-article-page/?art=5420",
    image: "/images/usecases/esg-two.jpg",
    author: {
      name: "Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["behavioral safety", "safety culture", "incident reduction"],
    publishDate: "Date not specified",
  },
  {
    id: 13,
    classification: "ESG / HSE",
    title: "COVID Management in Oil & Gas Companies",
    abstract:
      "A comprehensive guide co-authored by Tom Mireles and Huzeifa Ismail, detailing the strategies and measures oil and gas companies can adopt to manage and mitigate the impacts of COVID-19 on their operations. The guide covers health protocols, remote work strategies, and crisis management.",
    source: "Society of Petroleum Engineers",
    type: "Article",
    keywords:
      "COVID-19, oil and gas, crisis management, health protocols, remote work",
    link: "https://pubs.spe.org/en/hsenow/hse-now-article-page/?art=7678",
    image: "/images/usecases/esg-three.jpg",
    author: {
      name: "Tom Mireles, Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["COVID-19", "crisis management", "oil and gas"],
    publishDate: "Date not specified",
  },
  {
    id: 14,
    classification: "ESG / HSE",
    title: "A Practical Approach to Opening Up the Economy",
    abstract:
      "A non-peer-reviewed article discussing practical strategies for reopening the economy post-COVID-19, with a focus on balancing public health concerns and economic activities. The article provides insights into phased reopening, monitoring systems, and public health measures.",
    source: "Chirality Research Inc. Medium",
    type: "Article",
    keywords: "COVID-19, economy reopening, public health, economic activities",
    link: "https://chiralityresearchinc.medium.com/a-practical-approach-to-opening-up-the-economy-5f220c60ccd1",
    image: "/images/usecases/esg-four.jpg",
    author: {
      name: "Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["COVID-19", "economy reopening", "public health"],
    publishDate: "April 26, 2020",
  },
  {
    id: 15,
    classification: "ESG / HSE",
    title: "City of Houston COVID-19 Apex Predictions",
    abstract:
      "A non-peer-reviewed article providing predictions and analysis of COVID-19 apex in Houston. The study discusses the potential peak periods, healthcare capacity, and recommended measures to mitigate the impacts of the virus in the city.",
    source: "Chirality Research Inc. Medium",
    type: "Article",
    keywords: "COVID-19, Houston, apex predictions, healthcare capacity",
    link: "https://chiralityresearchinc.medium.com/city-of-houston-covid-19-apex-predictions-8b278b78c9cc",
    image: "/images/usecases/esg-five.jpg",
    author: {
      name: "Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["COVID-19", "Houston", "apex predictions"],
    publishDate: "Date not specified",
  },
  {
    id: 16,
    classification: "ESG / HSE",
    title: "COVID-19 Apex Contingencies",
    abstract:
      "A non-peer-reviewed article discussing various contingency plans for managing the COVID-19 apex in different regions, with a focus on healthcare readiness, supply chain management, and community support systems.",
    source: "Chirality Research Inc. Medium",
    type: "Article",
    keywords:
      "COVID-19, apex contingencies, healthcare readiness, supply chain management",
    link: "https://chiralityresearchinc.medium.com/covid-19-apex-contingencies-fc103942cc19",
    image: "/images/usecases/esg-six.jpg",
    author: {
      name: "Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["COVID-19", "apex contingencies", "healthcare readiness"],
    publishDate: "Date not specified",
  },
  {
    id: 17,
    classification: "ESG / HSE",
    title: "COVID-19 Highway Profiling",
    abstract:
      "A non-peer-reviewed article that explores the use of highway profiling to monitor and manage the spread of COVID-19 in the Permian Basin. The article covers data collection methods, analysis techniques, and the implementation of profiling systems.",
    source: "Chirality Research Inc. Medium",
    type: "Article",
    keywords: "COVID-19, highway profiling, Permian Basin, data collection",
    link: "https://chiralityresearchinc.medium.com/covid-19-highway-profiling-951e65899f99",
    image: "/images/usecases/esg-seven.jpg",
    author: {
      name: "Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["COVID-19", "highway profiling", "Permian Basin"],
    publishDate: "Date not specified",
  },
  {
    id: 18,
    classification: "ESG / HSE",
    title: "ESG Carbon Footprint",
    abstract:
      "This article provides an in-depth analysis of the carbon footprint of various operations within the oil and gas industry, highlighting strategies for reducing emissions and improving sustainability practices.",
    source: "Society of Petroleum Engineers",
    type: "Article",
    keywords: "ESG, carbon footprint, emissions reduction, sustainability",
    link: "https://pubs.spe.org/en/hsenow/hse-now-article-page/?art=7152",
    image: "/images/usecases/esg-eight.jpg",
    author: {
      name: "Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["ESG", "carbon footprint", "sustainability"],
    publishDate: "Date not specified",
  },
  {
    id: 19,
    classification: "ESG / HSE",
    title: "ESG Scope 1: Digital Solution Advances Environmental Efforts",
    abstract:
      "An article discussing the implementation of digital solutions to advance environmental efforts within the oil and gas industry, focusing on Scope 1 emissions and the impact of these solutions on operational efficiency.",
    source: "Society of Petroleum Engineers",
    type: "Article",
    keywords: "ESG, Scope 1, digital solutions, environmental efforts",
    link: "https://pubs.spe.org/en/hsenow/hse-now-article-page/?art=7152",
    image: "/images/usecases/esg-nine.jpg",
    author: {
      name: "Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["ESG", "Scope 1", "digital solutions"],
    publishDate: "Date not specified",
  },
  {
    id: 20,
    classification: "ESG / HSE",
    title:
      "ESG Scope 3: CO2 Emissions for Business Travel - A Comparison of Static and Dynamic Models",
    abstract:
      "A non-peer-reviewed article comparing the CO2 emissions from business travel using static and dynamic models. The study highlights the differences in emission calculations and the implications for ESG reporting.",
    source: "Chirality Research Inc. Medium",
    type: "Article",
    keywords:
      "ESG, Scope 3, CO2 emissions, business travel, static models, dynamic models",
    link: "https://chiralityresearchinc.medium.com/esg-scope-3-co2-emissions-for-business-travel-a-comparison-of-static-and-dynamic-models-ab6bc07be310",
    image: "/images/usecases/esg-ten.jpg",
    author: {
      name: "Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["ESG", "Scope 3", "CO2 emissions"],
    publishDate: "Date not specified",
  },
  {
    id: 21,
    classification: "ESG / HSE",
    title: "A Comparative Study of Plant-Based Burgers and Meat Burgers",
    abstract:
      "A non-peer-reviewed article that compares the environmental impact of plant-based burgers and meat burgers, focusing on factors such as carbon footprint, water usage, and sustainability.",
    source: "Chirality Research Inc. Medium",
    type: "Article",
    keywords:
      "plant-based burgers, meat burgers, environmental impact, carbon footprint, sustainability",
    link: "https://chiralityresearchinc.medium.com/a-comparative-study-of-plant-based-burgers-and-meat-burgers-fae099b41601?p=951b8256b609",
    image: "/images/usecases/esg-eleven.jpg",
    author: {
      name: "Huzeifa Ismail",
      image: "/images/team/huz.jpg",
      designation: "Founder",
    },
    tags: ["plant-based burgers", "meat burgers", "environmental impact"],
    publishDate: "Date not specified",
  },
];

export default publicationData;
