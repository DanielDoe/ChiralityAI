export interface Author {
  name: string;
  image: string;
  designation: string;
}

export interface Publication {
  id: number;
  classification: string;
  title: string;
  abstract: string;
  source: string;
  type: string;
  keywords: string;
  link: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
}
