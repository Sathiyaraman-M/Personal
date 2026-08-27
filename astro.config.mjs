import { defineConfig } from 'astro/config';
import { generateIconRegistry, iconsDirectory } from './scripts/generate-icons.mjs';

function iconRegistryPlugin() {
	return {
		name: 'generate-icon-registry',

		buildStart() {
			return generateIconRegistry();
		},

		configureServer(server) {
			server.watcher.add(iconsDirectory);

			const regenerate = async (event, file) => {
				if (!['add', 'change', 'unlink'].includes(event) || !file.endsWith('.svg')) return;

				try {
					await generateIconRegistry();
					server.ws.send({ type: 'full-reload' });
				} catch (error) {
					server.config.logger.error(`Failed to generate icon registry: ${error.message}`);
				}
			};

			server.watcher.on('all', regenerate);
			return () => server.watcher.off('all', regenerate);
		},
	};
}

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [iconRegistryPlugin()],
	},
});
