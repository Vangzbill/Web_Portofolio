/** @type {import('next').NextConfig} */
const nextConfig = {
    css : {
        modules: true,
        loaderOptions: {
            localIdentName: '[local]_[hash:base64:5]'
        }
    },
    reactStrictMode: true,
    
}

module.exports = nextConfig
