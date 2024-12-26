import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'public/build', // Thư mục đầu ra của các tệp build
    manifest: true, // Bật chế độ tạo manifest.json
    rollupOptions: {
      input: 'resources/js/app.js', // Đảm bảo đường dẫn đến tệp JavaScript chính xác
    },
  },
});
