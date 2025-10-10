import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		wasm(),
		topLevelAwait(),
		Unfonts({
			google: {
				families: [
					{
						name: "Source Sans 3",
						defer: true,
						display: "swap",
						styles: "ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700",
					},
					{
						name: "IBM Plex Sans",
						defer: true,
						display: "swap",
						styles: "ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700",
					},
				],
				preconnect: true,
			},
		}),
	],
	build: {
		sourcemap: true,
	},
	server: {
		headers: {
			"Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval'; connect-src 'self' https://api.chaincrib.com https://wallet.nu.fi https://accounts.google.com https://www.googleapis.com; frame-src 'self' https://*.nu.fi https://auth.magic.link https://accounts.google.com; img-src 'self' data: blob: https://res.cloudinary.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; frame-ancestors 'self';",
		},
	},
	resolve: {
		alias: {
			src: "/src",
			components: "/src/components",
			assets: "/src/assets",
			routes: "/src/routes",
		},
	},
});
