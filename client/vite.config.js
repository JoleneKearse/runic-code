import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { analyzer } from "vite-bundle-analyzer";
import compression from "vite-plugin-compression";
// import purgecss from "@fullhuman/postcss-purgecss";
import purgecss from "vite-plugin-purgecss";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		process.env.ANALYZE === "true" &&
			analyzer({
				analyzerMode: "server",
				analyzerPort: 8888,
				openAnalyzer: true,
			}),
		compression({
			algorithm: "gzip",
			ext: ".gz",
			threshold: 10240,
		}),
	].filter(Boolean),
	build: {
		target: "esnext",
		minify: "terser",
		cssCodeSplit: true,
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom", "react-router-dom"],
				},
			},
		},
	},
	css: {
		plugins: [
			purgecss({
				content: ["./index.html", "./src/**/*.{js,jsx}"],
			}),
		],
	},
});