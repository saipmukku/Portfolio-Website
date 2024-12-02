import { createSystem, defineConfig } from "@chakra-ui/react"
import '@fontsource-variable/manrope';
import '@fontsource-variable/playfair-display';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#DFDFDF" },
        secondary: { value: "#2B4141" },
      },
      fonts: {
        body: { value: "manrope, sans-serif" },
        heading: { value: "playfair-display, serif" },
      },
      shadows: {
        subtle: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
      },
    },
  },
})

export const system = createSystem(config)