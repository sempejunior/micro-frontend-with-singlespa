const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "microfrontend-with-singlespa",
    projectName: "app2",
    webpackConfigEnv,
    argv,
  });

  console.log(defaultConfig);
  return merge(defaultConfig, {
    externals: ["@material-ui/core", "@react-router-dom"],
  });
};
