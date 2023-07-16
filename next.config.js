/** @type {import('next').NextConfig} */

const dev = process.env.NODE_ENV === 'development';
const repoName = '/tutorial';

const nextConfig = {
	reactStrictMode: true,

	basePath: dev ? undefined : repoName,
	assetPrefix: dev ? undefined : repoName,
};

module.exports = nextConfig;
