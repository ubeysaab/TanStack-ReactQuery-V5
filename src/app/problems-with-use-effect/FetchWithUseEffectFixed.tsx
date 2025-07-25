import { fetchData } from "@/lib/fetch-utils";
import { useEffect, useState } from "react";
import { Post } from "../api/posts/data";

export default function FetchWithUseEffect({ category }: { category: string }) {
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    // Fix race conditions with ignore flag

    let ignore = false;
    setIsLoading(true);

    async function fetchPosts() {
      try {
        const data = await fetchData<Post[]>(`/posts?category=${category}`);
        if (!ignore) {
          setPosts(data);
          setError('')

        }

      } catch (error) {
        if (!ignore) {

          console.error("Fetch error:", error);
          setError("Failed to fetch posts");
          setPosts(undefined)
        }
      } finally {
          if (!ignore) {
          setIsLoading(false);
        }
      }

    }

    

      fetchPosts();
  
    return () => {
      ignore = true;
    };
  }, [category]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        {category.charAt(0).toUpperCase() + category.slice(1)} Posts
      </h2>

      <div>
        {isLoading ? (
          <div className="mb-4 text-blue-500">Loading posts...</div>
        ) : (
          <>
            {error && <div className="mb-4 text-red-500">Error: {error}</div>}

            {posts && posts.length === 0 && !error && (
              <div className="mb-4">No posts found for this category.</div>
            )}

            {posts && posts.length > 0 && !error && (
              <ul className="space-y-4">
                {posts.map((post) => (
                  <li key={post.id} className="border p-3 rounded">
                    <h3 className="font-semibold">{post.title}</h3>
                    <p>{post.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}
