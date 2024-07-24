export interface Project {
  id: number;
  title: string;
  problem: string;
  duration: string;
  link: string;
  paragraph: string;
  image: string;
  cover: string;
  author: {
    name: string;
    image: string;
    designation: string;
  };
  tags: string[];
  publishDate: string;
  significance: string;
  usecases: string [];
  techStack: string[];
}
