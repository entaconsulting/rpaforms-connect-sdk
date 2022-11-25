import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";
import analyzer from "rollup-plugin-analyzer";

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
      resolve({ browser: true }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      // Delete dist folder with each new build.
      del({ targets: "dist/*" }),
      analyzer({ summaryOnly: true }),
    ],
  },
  {
    input: "dist/types/rpaforms-connect-sdk.d.ts",
    output: [{ file: "dist/rpaforms-connect-sdk.d.ts", format: "es" }],
    plugins: [
      dts(),
      // Remove types folder after building.
      // Deliver only a bundled .d.ts file.
      del({ hook: "buildEnd", targets: "dist/types" }),
    ],
  },
];
