import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/output.js",
    format: "esm",
  },
  plugins: [
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
  ],
  external: ["react", "react-dom", "framer-motion", "tailwindcss"],
};
