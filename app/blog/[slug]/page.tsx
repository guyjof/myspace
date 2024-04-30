import { Post, Props } from '../blog.interface';

export const revalidate = 1200; // not necessary, just for ISR demonstration

export async function generateStaticParams() {
  const postsResponse = await fetch('http://localhost:3000/api/content');
  const posts: Post[] = await postsResponse.json();
  // this returns an array of objects with the shape { params: { slug: string } }
  // for each post in the array
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props ) {
  const postsResponse = await fetch('http://localhost:3000/api/content');
  const posts: Post[] = await postsResponse.json();
  const post = posts.find((post) => post.slug === params.slug);
  return (
    <main>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  );
}
