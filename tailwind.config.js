/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			mainbg: "#19183E",
			brightpurple: "#C242FF",
			lightpurple: "#8A85E0",
			lightpurple2: "#2F2C63",
			midnight: "#121063",
			metal: "#565584",
			tahiti: "#3ab7bf",
			silver: "#ecebff",
			bermuda: "#78dcca",
		},
		extend: {},
	},
	plugins: [],
};
