
const fs = require("fs");
const path = require("path");
const srcDir = path.resolve(__dirname, "src");
const dirs = fs.readdirSync(srcDir).filter(file => fs.statSync(path.join(srcDir, file)).isDirectory());

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      ["nativewind/babel"],
      [
        "module-resolver",
        {
          root: [
            "./src",
            "./modules",
          ],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: dirs.reduce((acc, dir) => {
            acc[`@/${dir}`] = `./src/${dir}`;
            return acc;
          }, {}),
        },
      ],
    ],
  };
};
