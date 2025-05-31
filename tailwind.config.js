/** @type {import('tailwindcss').Config} */ // <--- This is the correct way
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // If you have a components folder
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Or if your main source is in 'src'
    // Ensure your CaseStudy.jsx file's path is included here
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.2' },
          '50%': { transform: 'translateY(-20px)', opacity: '0.4' },
        },
      },
    },
  },
}