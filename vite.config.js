import { resolve } from 'path'
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                'auth': resolve(__dirname, './pages/auth.html'),
                'merchant': resolve(__dirname, './pages/merchant.html'),
            },
        },
    },
});