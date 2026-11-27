// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Vercel informs the production domain at build time, so nothing is hardcoded.
// SITE_URL overrides it.
const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = process.env.SITE_URL || (productionDomain ? `https://${productionDomain}` : undefined);

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	vite: {
		plugins: [tailwindcss()],
	},
});
