// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://leafy-basbousa-80b2a4.netlify.app/",
  integrations: [preact()]
});