import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { unlockPolityDemo } from './api/polity-password.js';

function polityAccessApi(password: string): Plugin {
  return {
    name: 'polity-access-api',
    configureServer(server) {
      server.middlewares.use('/api/polity-access', (req, res, next) => {
        if (req.method !== 'POST') {
          next();
          return;
        }

        const chunks: Buffer[] = [];
        req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        req.on('end', () => {
          let attempt = '';
          try {
            attempt = JSON.parse(Buffer.concat(chunks).toString('utf8')).password ?? '';
          } catch {
            attempt = '';
          }

          const result = unlockPolityDemo(attempt, password);
          res.statusCode = result.status;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify(result.ok ? { ok: true, url: result.url } : { ok: false })
          );
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), polityAccessApi(env.POLITY_DEMO_PASSWORD || '')],
    define: {
      __BUILD_DATE__: JSON.stringify(
        new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      ),
    },
  };
});
