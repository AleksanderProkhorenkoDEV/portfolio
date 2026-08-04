// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "JetBrainMono",
      cssVariable: "--font-jetbrain",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono-Bold.ttf"],
            weight: 700,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/JetBrainsMono-Light.ttf"],
            weight: 300,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/JetBrainsMono-Medium.ttf"],
            weight: 500,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/JetBrainsMono-Regular.ttf"],
            weight: 400,
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Montserrat-Bold.ttf"],
            weight: 700,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Montserrat-Light.ttf"],
            weight: 300,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Montserrat-Medium.ttf"],
            weight: 500,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Montserrat-Regular.ttf"],
            weight: 400,
            style: "normal",
          },
        ],
      },
    },
  ],
});
