import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import serve from "rollup-plugin-serve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";

export default [
  {
    input: "src/rpaforms-connect-sdk.ts",
    output: [
      {
        file: packageJson.main,
        format: "umd",
        name: "rpaFormsConnectSdk",
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
      del({ targets: "dist/*" }),
      serve({
        contentBase: ["", "dist", "test"],
        host: "localhost",
        port: 5500,
      }),
    ],
  },
];
