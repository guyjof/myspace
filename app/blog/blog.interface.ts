export interface Post {
    title: string;
    content: string;
    slug: string;
}

export interface Props {
    params: { slug: string };
  }
