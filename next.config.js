/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://localhost:27017/bookit-v2",
    DB_URI: "",

    STRIPE_WEBHOOK_SECRET:
      "whsec_a884e873becc12cb458a4f3b038e54b997d79c5b5f42e4a02b036642a4a7147a",
    STRIPE_SECRET_KEY: "sk_test_YGubAgFQgURZWgUk9M1jUBHQ00dYfJSHe3",

    CLOUDINARY_CLOUD_NAME: "book-it",
    CLOUDINARY_API_KEY: "655584471164133",
    CLOUDINARY_API_SECRET: "xW1AD3-Rs8xsWytLnkKtYLwj93Q",

    SMTP_HOST: "sandbox.smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "88d9761e50cc65",
    SMTP_PASSWORD: "8118d75c02537f",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
    SMTP_FROM_NAME: "BookIT",

    GEOCODER_API_KEY: "CCzjdYj56z8pPUb3edcjuePU9kJ2sY48",
    GEOCODER_PROVIDER: "mapquest",

    MAPBOX_ACCESS_TOKEN:
      "pk.eyJ1IjoiYWRia2giLCJhIjoiY2xyeHRoZHVmMWY4ajJtcHFlbnVieHYwYyJ9.vhIcaMuqoD5xjaYEq7sPrg",

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
