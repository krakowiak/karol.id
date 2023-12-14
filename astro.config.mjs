import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    site: 'https://karol.id',
    i18n: {
        defaultLocale: "en",
        locales: ["en", "pl"],
        routing: {
            prefixDefaultLocale: true
        }
    }
});