import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { analyzer } from "vite-bundle-analyzer";

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
	].filter(Boolean), 
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom", "react-router-dom"],
				},
			},
		},
	},
});
