export interface AllArchiveType {
  posts: Post[];
  count: number;
}

export interface Post {
  _id: string;
  title: string;
  tags: string[];
  category: Category;
  created: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  created: string;
}