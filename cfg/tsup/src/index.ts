import type {Options} from 'tsup';
import * as process from "process";

const env = process.env.NODE_ENV;

export const tsup: Options = {
  splitting: true,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  minify: env === 'production',
  bundle: env === 'production',
  skipNodeModulesBundle: true,
  entry: ['src/index.ts'],
  watch: env === 'development',
  target: 'es2020',
};