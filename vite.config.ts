import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
	plugins:
		[
			svgr(),
			react(),
			svgr({
				svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
				include: "**/*.svg",
			}),
		],
	build: {
		chunkSizeWarningLimit: 700,
		rollupOptions: {
			output: {
				entryFileNames: "assets/[name].js",
				assetFileNames: "assets/[name].css",
				chunkFileNames: "assets/[name].js",
			}
		}
	}
});
