/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dw4kivbv0/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
