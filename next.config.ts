import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects(){
    return [
      {
        source: "/flashcards",
        destination: "/",
        permanent: true
      }
    ]
  }
};

export default nextConfig;
