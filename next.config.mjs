/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // enable static export
    basePath: "/portfolio",      // substitute with your repo name
    assetPrefix: "/portfolio/",  // substitute with your repo name, note the trailing slash
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
