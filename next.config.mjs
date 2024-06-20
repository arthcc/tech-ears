/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    },
  };
  
  export default nextConfig;
  