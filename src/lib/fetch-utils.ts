

import axios from "./axiosConfig";

export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response)
    return response.data;
  } catch (error:any) {
    console.log("from the catch inside fetchData :",error?.message)
    throw error;
  }
}



export async function postData<T>(url: string, data: unknown): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}















// export async function fetchData<T>(url: string): Promise<T> {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   return response.json();
// }



// import axios, { AxiosRequestConfig } from 'axios';

// export async function fetchData<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
//   try {
//     const response = await axios.get<T>(url, config);
//     return response.data;
//   } catch (error: any) {
//      Optional: Customize error message or logging
//     if (axios.isAxiosError(error)) {
      // Server or request error
//       throw new Error(error.response?.data?.message || error.message);
//     } else {
    // Unknown error
//       throw new Error('An unexpected error occurred');
//     }
//   }
// }