import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/App.js', // Ruta del archivo de entrada principal
  output: {
    file: 'dist/bundle.js', // Ruta del archivo de salida
    format: 'cjs' // Formato de salida (CommonJS, ES Module, UMD, etc.)
  },
  plugins: [
    nodeResolve(), // Resuelve las dependencias de node_modules
    commonjs(), // Convierte módulos CommonJS en ES6, si es necesario
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }) // Transpila el código con Babel
  ]
};
