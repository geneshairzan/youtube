import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import { splitVendorChunkPlugin } from "vite";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default ({ mode }) => {
  return defineConfig({
    server: { https: true, port: 3000 },
    define: {
      global: "window",
    },
    // base: mode == "production" ? `/public/` : "",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@component": path.resolve(__dirname, "./src/component"),
        "@img": path.resolve(__dirname, "./src/assets/img"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@context": path.resolve(__dirname, "./src/component/context"),
      },
    },
    plugins: [
      react(),
      mkcert(),
      splitVendorChunkPlugin(),
      VitePWA({
        registerType: "autoUpdate",
        manifest: manifest,
        devOptions: {
          enabled: true,
        },
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // if (id.includes("node_modules")) {
            //   console.log(id);
            //   return id;
            //   return (
            //     "some_" +
            //     id.toString().split["node_modules/"](1).split["/"](0).toString()
            //   );
            // }
            if (id.includes("node_modules")) {
              if (id.includes("@aws-amplify")) {
                return "vendor_aws";
              }
              if (id.includes("@mui")) {
                return "vendor_mui";
              }
              if (id.includes("moment") || id.includes("date-fns")) {
                return "vendor_moment";
              }
              return "vendor"; // all other package goes here
            }
            // if (id.includes("gip-form")) {
            //   return "vendor_form";
            // }
            // if (id.includes("gip-ui")) {
            //   return "vendor_ui";
            // }
            // if (id.includes("src/pages")) {
            //   return "app_pages";
            // }
            // if (id.includes("src/component")) {
            //   return "app_component";
            // }
          },
        },
      },
    },
  });
};

const manifest = {
  short_name: "GenDev",
  name: "Genesha Dev",
  icons: [
    {
      src: "logo64.png",
      type: "image/png",
      sizes: "64x64",
    },
    {
      src: "logo192.png",
      type: "image/png",
      sizes: "192x192",
    },
    {
      src: "logo512.png",
      type: "image/png",
      sizes: "512x512",
    },
  ],
  start_url: ".",
  display: "standalone",
  theme_color: "#303443",
  background_color: "#ffffff",
};
