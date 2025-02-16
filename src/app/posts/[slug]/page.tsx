import { Post, allPosts } from "contentlayer/generated";
import { MDXContent } from "@/components/mdx/MDXContent";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

// Generate static params at build time
export async function generateStaticParams() {
  return allPosts
    .filter((post: Post) => post.published)
    .map((post: Post) => ({
      slug: post.slug,
    }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage(props: PageProps) {
  const { slug } = await props.params;
  const post = allPosts.find((post: Post) => post.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert mx-auto">
      <Link href="/posts" className="back-link no-underline">
        <HiArrowLeft className="w-4 h-4" />
        Back to Posts
      </Link>
      <div className="mb-8">
        <h1 className="mb-2 text-foreground">{post.title}</h1>
        <div className="flex gap-4 text-sm text-foreground/60">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <div className="flex gap-2">
            {post.tags.map((tag: string) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <MDXContent code={post.body.code} />
    </article>
  );
}
