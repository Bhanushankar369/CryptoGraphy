import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})

// export default{
//   server: {
//     proxy: {
//       '/api': 'http://localhost:8000',
//     },
//   },
// };
