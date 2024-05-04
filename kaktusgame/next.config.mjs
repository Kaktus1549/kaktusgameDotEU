/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        URL: process.env.URL,
    },
    images: {
      remotePatterns:[
        {
          protocol: 'https',
          hostname: 'http.cat'
        }
      ]
    }
};

export default nextConfig;