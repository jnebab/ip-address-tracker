module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Rubik', 'sans-serif'],
        },
        extend: {
            backgroundImage: () => ({
                'hero-pattern': "url('/src/assets/images/pattern-bg.png')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
