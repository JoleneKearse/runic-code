/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				neutral: {
					50: "#F6F4F4",
					100: "#EFECEB",
					200: "#E6E1DF",
					300: "#D9D1CE",
					400: "#CCC1BD",
					500: "#BEB0AC",
					600: "#AF9D98",
					700: "#9B857E",
					800: "#7B6760",
					900: "#483C38",
					950: "#120F0E",
				},
			},
			backgroundImage: {
				fyord: "url('/background.jpg')",
			},
		},
	},
	plugins: [],
};
