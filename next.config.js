/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
    reactStrictMode: true,
    images: {
        loader: "default",
        domains: ["localhost"],
    },

    env: {
        NEXT_PUBLIC_API_URL: 'http://localhost:3000',
        user: 'tbonnardel@gmail.com',
        pass: '0SHt9rd6aOgRfZTJ'

    },
};