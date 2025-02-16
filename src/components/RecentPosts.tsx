import { Post, allPosts } from "contentlayer/generated";
import Link from "next/link";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function RecentPosts() {
  const posts = allPosts
    .filter((post: Post) => post.published)
    .sort(
      (a: Post, b: Post) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 3);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Recent Posts</h2>
        <Link href="/posts" className="link-button">
          View All
        </Link>
      </div>
      <div className="grid gap-6">
        {posts.map((post: Post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="card-interactive">
      <h3 className="text-xl font-medium mb-2">{post.title}</h3>
      <p className="text-foreground/60 mb-4">{post.description}</p>
      <div className="flex flex-wrap gap-4 items-center">
        <time className="text-sm text-foreground/40">
          {formatDate(post.date)}
        </time>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
