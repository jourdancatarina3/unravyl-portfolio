/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React strict mode
    swcMinify: true, // Enable SWC minification for faster builds
    transpilePackages: ['three'],
};

export default nextConfig;
