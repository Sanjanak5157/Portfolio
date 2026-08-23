/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["'Syne'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      colors: {
        bg:      "#0a0a0f",
        bg2:     "#111118",
        bg3:     "#1a1a24",
        accent:  "#7c3aed",
        accent2: "#06d6a0",
        accent3: "#f72585",
        muted:   "#6b6b80",
        border:  "rgba(255,255,255,0.08)",
      },
      animation: {
        blink: "blink 1s infinite",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0 } },
      },
    },
  },
  plugins: [],
};
