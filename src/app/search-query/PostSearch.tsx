import { useDebounce } from "@/hooks/use-debounce";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Input from "@/components/ui/input";
import { fetchData } from "@/lib/fetch-utils";
import { Post } from "../api/posts/data";
import { Button } from "@/components/ui/button";



export default function PostSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
const {data:posts,isLoading,isError ,error} = useQuery({
  queryKey :['posts','search',debouncedSearchTerm],
  queryFn:()=> fetchData<Post[]>(`posts/search?search=${debouncedSearchTerm}`),
  enabled:()=> Boolean(debouncedSearchTerm)

})
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
          <Button
            onClick={() => setSearchTerm("")}
            variant="outline"
            disabled={!searchTerm}
          >
            Clear
          </Button>
        </div>

        {!debouncedSearchTerm && (
          <div className="p-4 text-center text-gray-500 border border-dashed rounded-md">
            Start typing to search for posts...
          </div>
        )}

        {isLoading && <div className="text-blue-500">Loading posts...</div>}

        {isError && (
          <div className="text-red-500">Error: {(error as Error).message}</div>
        )}

        {!isLoading && !isError && posts?.length === 0 && (
          <div>No posts found for this search term.</div>
        )}

        {posts && posts.length > 0 && (
          <ul className="space-y-4">
            {posts.map((post: Post) => (
              <li key={post.id} className="border p-4 rounded-md shadow-sm">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="mt-1 text-gray-600">{post.body}</p>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}
