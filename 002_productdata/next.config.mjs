/** @type {import('next').NextConfig} */
const nextConfig = {
    scrollRestoration: true,   
	experimental: {
		instrumentationHook: true
	}
};

export default nextConfig;
