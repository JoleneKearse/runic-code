import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "happy-dom",
		setupFiles: ["@testing-library/jest-dom/vitest"],
	},
});