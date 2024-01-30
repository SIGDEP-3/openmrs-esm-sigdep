import { defineConfigSchema } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';

const moduleName = '@uw-digi/esm-sigdep-core-app';
const options = {
  featureName: 'SIGDEP Core',
  moduleName,
};

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}
