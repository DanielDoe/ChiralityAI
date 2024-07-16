// solution.ts
type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Solution = {
  id: number;
  title: string;
  description: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
