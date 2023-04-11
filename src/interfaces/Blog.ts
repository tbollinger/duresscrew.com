interface Blog {
  coverImage: string;
  authorImage: string;
  author: string;
  authorUrl: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  date: string;
  tags: string;  // We parse this later
  tagList: Array<string>;  // We parse this later
}

export type {
  Blog,
}