import { Project } from "@/types/project";

const projectData: Project[] = [
  {
    id: 1,
    title: "Predictive Maintenance for Manufacturing",
    paragraph:
      "Utilizing AI algorithms to predict equipment failures and optimize maintenance schedules, reducing downtime and costs in manufacturing plants.",
    image: "/images/projects/project-01.jpg",
    author: {
      name: "Alex Johnson",
      image: "/images/projects/author-01.png",
      designation: "AI Engineer",
    },
    tags: ["maintenance", "manufacturing"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "AI-Powered Supply Chain Optimization",
    paragraph:
      "Implementing AI solutions to streamline supply chain processes, enhance logistics, and improve inventory management for retail businesses.",
    image: "/images/projects/project-02.jpg",
    author: {
      name: "Emma Williams",
      image: "/images/projects/author-02.png",
      designation: "Data Scientist",
    },
    tags: ["supply chain", "retail"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Smart City Traffic Management",
    paragraph:
      "Developing AI-driven traffic management systems to alleviate congestion, reduce emissions, and improve urban mobility in smart cities.",
    image: "/images/projects/project-03.jpg",
    author: {
      name: "Michael Brown",
      image: "/images/projects/author-01.png",
      designation: "Software Developer",
    },
    tags: ["smart city", "transportation"],
    publishDate: "2024",
  },
  {
    id: 4,
    title: "Personalized Healthcare Recommendations",
    paragraph:
      "Creating AI-based tools to provide personalized healthcare recommendations and improve patient outcomes through data-driven insights.",
    image: "/images/projects/project-04.jpg",
    author: {
      name: "Sophia Lee",
      image: "/images/projects/author-02.png",
      designation: "Health Data Analyst",
    },
    tags: ["healthcare", "personalization"],
    publishDate: "2024",
  },
  {
    id: 5,
    title: "Autonomous Vehicle Navigation",
    paragraph:
      "Building advanced AI models to enhance the navigation and safety systems of autonomous vehicles, ensuring reliable and efficient transportation.",
    image: "/images/projects/project-05.jpg",
    author: {
      name: "Liam Davis",
      image: "/images/projects/author-01.png",
      designation: "Robotics Engineer",
    },
    tags: ["autonomous vehicles", "navigation"],
    publishDate: "2024",
  },
  {
    id: 6,
    title: "AI-Enhanced Customer Support",
    paragraph:
      "Deploying AI-powered chatbots and virtual assistants to improve customer support services, offering quick and accurate responses to inquiries.",
    image: "/images/projects/project-06.jpg",
    author: {
      name: "Olivia Martinez",
      image: "/images/projects/author-02.png",
      designation: "Customer Support Specialist",
    },
    tags: ["customer support", "automation"],
    publishDate: "2024",
  },
];
export default projectData;
