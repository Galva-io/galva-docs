// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Galva Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Admin API",
          items: [
            { label: "Overview", slug: "api/admin/overview" },
            { label: "Authentication", slug: "api/admin/authentication" },
            { label: "Data Objects", slug: "api/admin/data-objects" },
            { label: "Identify (Single User)", slug: "api/admin/identify" },
            { label: "Batch Identify (Bulk)", slug: "api/admin/batch-identify" },
            { label: "Events (Lifecycle)", slug: "api/admin/events" },
            { label: "Error Handling", slug: "api/admin/errors" },
          ],
        },
      ],
      expressiveCode: {
        plugins: [pluginCollapsibleSections()],
      },
    }),
  ],

  adapter: cloudflare(),
});
