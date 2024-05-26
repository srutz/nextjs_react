/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        scrollRestoration: true,   
		instrumentationHook: true
	}
};

export default nextConfig;
