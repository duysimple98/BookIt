/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://localhost:27017/bookit-v2",
    DB_URI: "",

    CLOUDINARY_CLOUD_NAME: "book-it",
    CLOUDINARY_API_KEY: "655584471164133",
    CLOUDINARY_API_SECRET: "xW1AD3-Rs8xsWytLnkKtYLwj93Q",

    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "DJE9CMVLWKFPDWOQPMCAJVKQPEKOIOHNCAVMMWJK",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
