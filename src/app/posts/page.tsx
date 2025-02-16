import { Post, allPosts } from "contentlayer/generated";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostsPage() {
  const posts = allPosts
    .filter((post: Post) => post.published)
    .sort(
      (a: Post, b: Post) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/" className="back-link">
        <HiArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="flex flex-col gap-8">
        {posts.map((post: Post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block border rounded-lg p-6 hover:bg-foreground/5 transition-colors"
          >
            <h2 className="text-xl font-medium mb-2">{post.title}</h2>
            <p className="text-foreground/60 mb-4">{post.description}</p>
            <div className="flex gap-4 items-center">
              <time className="text-sm text-foreground/40">
                {formatDate(post.date)}
              </time>
              <div className="flex gap-2">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
