/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://localhost:27017/bookit-v2",
    DB_URI: "",

    CLOUDINARY_CLOUD_NAME: "book-it",
    CLOUDINARY_API_KEY: "655584471164133",
    CLOUDINARY_API_SECRET: "xW1AD3-Rs8xsWytLnkKtYLwj93Q",

    SMTP_HOST: "sandbox.smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "88d9761e50cc65",
    SMTP_PASSWORD: "8118d75c02537f",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
    SMTP_FROM_NAME: "BookIT",

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
