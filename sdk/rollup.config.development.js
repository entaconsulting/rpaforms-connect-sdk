import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import serve from "rollup-plugin-serve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/test/index.ts",
    output: [
      {
        file: "test/index.js",
        format: "umd",
        sourcemap: true,
        globals: { "@azure/msal-browser": "msal" },
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      // Delete dist folder with each new build.
      del({ targets: "test/index.js" }),
      serve({
        contentBase: ["test"],
        host: "localhost",
        port: 5500,
      }),
    ],
  },
];
