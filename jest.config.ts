import type { Config } from '@jest/types';
import 'jest-localstorage-mock';

// Sync object
const config: Config.InitialOptions = {
  setupFiles: ['jest-localstorage-mock'],
};
export default config;
