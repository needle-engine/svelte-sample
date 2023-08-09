import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(async ({ command }) => {
  const { needlePlugins, useGzip, loadConfig } = await import(
    '@needle-tools/engine/plugins/vite/index.js'
  );
  const needleConfig = await loadConfig();
  return {
    base: './',
    plugins: [
      useGzip(needleConfig)
        ? viteCompression({ deleteOriginFile: true })
        : null,
      needlePlugins(command, needleConfig, {
        noPoster: true,
      }),
      svelte({}),
    ],
    server: {
      port: 1107,
    },
    build: {
      outDir: './dist',
      emptyOutDir: true,
      keepNames: true,
    },
  };
});
