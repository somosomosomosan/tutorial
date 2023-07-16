// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	basePath: process.env.NODE_ENV === 'development' ? undefined : '/subDirectory', // Sub directory
	assetPrefix: process.env.NODE_ENV === 'development' ? undefined : '/Nginx/', // Nginx
};

module.exports = nextConfig;
