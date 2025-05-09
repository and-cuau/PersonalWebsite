import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PersonalWebsite/', // Add this line, replace 'PersonalWebsite' with your repository name
});
