import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetch-utils";
import { Post } from "../api/posts/data";

function FetchWithReactQuery({category}:{category:string}) {



  const {data:posts,error,isLoading} = useQuery(
    {
      queryKey:['posts',category],
//    !   queryFn should be a function that returns a Promise. You're directly calling fetchData instead of passing a function that calls it. This will execute fetchData immediately during render, rather than when the query runs.
      queryFn : () => fetchData<Post[]>(`/posts?category=${category}`)
    }
  )


 

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
          {error && (
  <div className="mb-4 text-red-500">
    Error: {error instanceof Error ? error.message : String(error)}
  </div>
)}

            {posts?.length === 0 && !error && (
              <div className="mb-4">No posts found for this category.</div>
            )}

            {posts&&posts?.length > 0 && !error && (
              <ul className="space-y-4">
                {posts?.map((post) => (
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

export default FetchWithReactQuery