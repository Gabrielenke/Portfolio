/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				typing: "blink 1s linear infinite",
			},
			keyframes: {
				blink: {
					"0%,100%": { "border-right-color": "0adea3" },
					"50%": { "border-right-color": "transparent" },
				},
			},
			colors: {
				dark: "#1b1b1b",
				light: "#f5f5f5",
				primary: "#db2777", // 240,86,199
				primaryDark: "#2563eb", // 80,230,217
			},
		},
	},
	plugins: [],
};
