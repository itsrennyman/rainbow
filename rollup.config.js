import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: './src/index.js',
  output: {
    file: './dist/output.js',
    format: 'cjs',
    exports: 'default'
  },
  plugins: [
    postcss({
      config: {
        path: './postcss.config.js'
      },
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top'
      }
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react']
    }),
    commonjs()
  ],
  external: ['react', 'react-dom', 'framer-motion']
}
