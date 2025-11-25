import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ig0le6uy',
    dataset: 'production',
  },
  deployment: {
    appId: 'z1gtt0ccx9y0waxnnuq822s9',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  },
})
