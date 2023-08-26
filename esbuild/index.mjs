import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  outdir: "bundle/",
  minify: true,
  treeShaking: true,
  loader: {
    ".html": "file",
  },
});
