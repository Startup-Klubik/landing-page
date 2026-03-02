// vite.config.ts
import { defineConfig } from "file:///Users/dianasuzana/Library/Mobile%20Documents/com~apple~CloudDocs/via/Documents/Dokero/landing-page/node_modules/.pnpm/vite@5.4.21_@types+node@25.2.3/node_modules/vite/dist/node/index.js";
import react from "file:///Users/dianasuzana/Library/Mobile%20Documents/com~apple~CloudDocs/via/Documents/Dokero/landing-page/node_modules/.pnpm/@vitejs+plugin-react-swc@3.11.0_vite@5.4.21_@types+node@25.2.3_/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///Users/dianasuzana/Library/Mobile%20Documents/com~apple~CloudDocs/via/Documents/Dokero/landing-page/node_modules/.pnpm/lovable-tagger@1.1.13_vite@5.4.21_@types+node@25.2.3_/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/Users/dianasuzana/Library/Mobile Documents/com~apple~CloudDocs/via/Documents/Dokero/landing-page";
var vite_config_default = defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: true
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("react-dom")) return "react-dom";
            if (id.includes("react-router")) return "router";
            return "vendor";
          }
        }
      }
    },
    chunkSizeWarningLimit: 1e3
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGlhbmFzdXphbmEvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvdmlhL0RvY3VtZW50cy9Eb2tlcm8vbGFuZGluZy1wYWdlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZGlhbmFzdXphbmEvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvdmlhL0RvY3VtZW50cy9Eb2tlcm8vbGFuZGluZy1wYWdlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kaWFuYXN1emFuYS9MaWJyYXJ5L01vYmlsZSUyMERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL3ZpYS9Eb2N1bWVudHMvRG9rZXJvL2xhbmRpbmctcGFnZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBiYXNlOiAnLycsXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiOjpcIixcbiAgICBwb3J0OiA4MDgwLFxuICAgIGhtcjoge1xuICAgICAgb3ZlcmxheTogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IChpZCkgPT4ge1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygncmVhY3QnKSkgcmV0dXJuICdyZWFjdCc7XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3JlYWN0LWRvbScpKSByZXR1cm4gJ3JlYWN0LWRvbSc7XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3JlYWN0LXJvdXRlcicpKSByZXR1cm4gJ3JvdXRlcic7XG4gICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcic7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCksIG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiBjb21wb25lbnRUYWdnZXIoKV0uZmlsdGVyKEJvb2xlYW4pLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVkLFNBQVMsb0JBQW9CO0FBQ3BmLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFIaEMsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWMsQ0FBQyxPQUFPO0FBQ3BCLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixnQkFBSSxHQUFHLFNBQVMsT0FBTyxFQUFHLFFBQU87QUFDakMsZ0JBQUksR0FBRyxTQUFTLFdBQVcsRUFBRyxRQUFPO0FBQ3JDLGdCQUFJLEdBQUcsU0FBUyxjQUFjLEVBQUcsUUFBTztBQUN4QyxtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLHVCQUF1QjtBQUFBLEVBQ3pCO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsaUJBQWlCLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDOUUsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
