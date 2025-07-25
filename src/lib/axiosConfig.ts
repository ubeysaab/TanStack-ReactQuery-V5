// 📦 Import the Axios library
import axios from 'axios';

// 🔧 Create a custom Axios instance with default configuration
const axiosInstance = axios.create({
  // 🌍 Set the base URL for all HTTP requests
  // If you're using Vite and have a .env file, it will use that value
  // Otherwise, it falls back to 'https://api.example.com'
  baseURL: '/api',

  // ⏱ Set a timeout of 10 seconds (10000ms) for all requests
  timeout: 10000,

  // 🧾 Default headers for all requests
  headers: {
    'Content-Type': 'application/json', // Sending data as JSON
    Accept: 'application/json',         // Expecting JSON in response
  },
});

// 🛡️ REQUEST INTERCEPTOR (middleware)
// This runs **before every request is sent**
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // 🔐 Get token from browser's localStorage (e.g., after login)
//     const token = localStorage.getItem('access_token');

//     // If token exists, add it to the Authorization header
//     // This is how we send tokens to protected endpoints
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     // ✅ Always return the config object so Axios can continue
//     return config;
//   },
//   (error) => {
//     // ❌ If there's an error preparing the request, reject it
//     return Promise.reject(error);
//   }
// );

// 🛡️ RESPONSE INTERCEPTOR (mniddleware)
// This runs **after receiving every response**
// axiosInstance.interceptors.response.use(
//   (response) => {
//     // ✅ If the response is OK, just return it
//     return response;
//   },
//   (error) => {
//     // ❌ If there's an error in the response, we can handle it globally here

//     // Example: If the status code is 401 (Unauthorized), we can log out the user
//     if (error.response && error.response.status === 401) {
//       console.error('❌ Unauthorized - maybe redirect to login page or clear token');
//     }

//     // Always reject the error so the calling function knows something went wrong
//     return Promise.reject(error);
//   }
// );

// 📤 Export the configured Axios instance
// Now you can import it elsewhere in your app and reuse it
export default axiosInstance;
