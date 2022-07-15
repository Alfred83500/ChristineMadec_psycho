module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif']

            },
            backgroundImage: {
                'hero': "url('../src/image_hero_section.jpg')",

            },

        },
    },
    plugins: [],
}
