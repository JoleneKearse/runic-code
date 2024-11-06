/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				neutral: {
					"alpha-900": "#483C38B3",
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
				accent: {
					blue: "#4e556f",
					navy: "#2f4858",
					red: "#9a2418",
					pink: "#9a6d80",
				},
			},
			backgroundImage: {
				fyord: "url('/background.jpg')",
			},
		},
	},
	plugins: [],
};
