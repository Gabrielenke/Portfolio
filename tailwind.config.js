/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			Sugarpunch: ["Sugarpunch DEMO", "sans-serif"],
		},
		extend: {
			animation: {
				typing: "blink 1s linear infinite",
				moveup: "up 2s ease-in-out infinite alternate",
			},
			keyframes: {
				blink: {
					"0%,100%": { "border-right-color": "0adea3" },
					"50%": { "border-right-color": "transparent" },
				},
				up: {
					to: {
						transform: "translateY(20px)",
					},
				},
			},
			colors: {
				dark: "#000",
				light: "#f5f5f5",
				primary: "#db2777", // 240,86,199
				primaryDark: "#2563eb", // 80,230,217
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
