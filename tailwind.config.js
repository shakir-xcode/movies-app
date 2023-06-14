/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ["Montserrat", "sans-serif"]
      },
      colors: {
        "primary-color": "var(--text-primary)",
        "secondary-color": "var(--text-secondary)",
        "accent": "var(--accent)",
        "color-bg": "var(--background)",
        "nav-bg": "var(--nav-bg)",
        "btn.accent-hover": "var(--btn-accent-hover)",
        "nav-drawer-bg": "var(--nav-drawer-bg)",
        "bg-accent": "var(--bg-accent)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

