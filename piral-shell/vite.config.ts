import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.codegen': 'js',
            },
        },
        include: ["react", "react-dom", "piral", "piral-ext"]
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
    },
    server: {
        port: 3000,
    },

});
