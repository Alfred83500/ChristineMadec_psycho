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
        NEXT_PUBLIC_API_URL: '',
        NEXT_PUBLIC_SENDGRID_API_KEY: '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',
        user: 'apikey',
        pass: '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'

    },
};