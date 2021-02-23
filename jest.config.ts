import type { Config } from '@jest/types';
import 'jest-localstorage-mock';
import '@testing-library/jest-dom';

// Sync object
const config: Config.InitialOptions = {
  setupFiles: ['jest-localstorage-mock'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
export default config;
