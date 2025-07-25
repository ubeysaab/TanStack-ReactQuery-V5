'use client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react'




export default function ReactQueryProvider({children}:{children:React.ReactNode}) {
    const [queryClient] = useState(()=> new QueryClient())
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}