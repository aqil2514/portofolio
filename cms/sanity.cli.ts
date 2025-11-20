import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '30c680d2',
    dataset: 'production',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    appId: 'rn5o3jvnf91c7wvfyol6akc5',
    autoUpdates: true,
  },
})
