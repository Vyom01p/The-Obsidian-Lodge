/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // These are your new "Foundation" colors, sampled from the image shadows.
        // They are desaturated, deep blues, not grays.
        primary: {
          50: "#f6f8fb", // Ultra-light, misty white for main page bg.
          100: "#e9edf3",
          200: "#ccd7e6",
          300: "#a9bed6",
          400: "#86a2c3",
          500: "#6987af",
          600: "#557095",
          700: "#475c7b",
          800: "#3d4c63", // Subtle card bg.
          900: "#323d51", // Deepest section shadows.
          950: "#242d3c", // This is your deepest "Obsidian."
        },
        // These are your new "Action" and "Heading" colors, sampled from the sunset/sand tones.
        // They are desaturated and sophisticated, matching the "Explore" button in the image.
        accent: {
          50: "#fbf8f5",
          100: "#f5eee7",
          200: "#ebddcf",
          300: "#decaaf",
          400: "#d0b08a", // Soft sand for subtle text.
          500: "#bf946a", // Main Accent: Matches button color in the photo.
          600: "#a67b54", // Heading color (a deeper version of accent-500).
          700: "#8a6646",
          800: "#6e5138",
          900: "#5a432e",
          950: "#2f2217",
        },
      },
    },
  },
  plugins: [],
};
