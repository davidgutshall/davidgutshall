import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isVercel = Boolean(process.env.VERCEL);
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const base = isVercel ? "/" : isGitHubActions ? "/davidgutshall/" : "/davidgutshall/";

export default defineConfig({
  base,
  plugins: [react()],
});
