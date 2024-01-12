/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://localhost:27017/bookit-v2",
    DB_URI: "",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
