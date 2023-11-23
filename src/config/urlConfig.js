// apiConfig.js

// let BASE_URL = "http://localhost:4000"; // Your local backend URL

// if (process.env.NODE_ENV === "production") {
//   BASE_URL = "https://your-production-backend-url.com";
//   // Update BASE_URL to your actual production backend URL
// } else if (process.env.NODE_ENV === "development") {
//   BASE_URL = "https://your-staging-backend-url.com";
//   // Update BASE_URL to your actual staging backend URL
// }
let BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://record-server2.onrender.com";
export default BASE_URL;
