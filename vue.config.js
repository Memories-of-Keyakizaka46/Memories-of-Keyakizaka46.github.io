module.exports = {
  outputDir: "docs",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "欅之回忆|Memories of Keyakizaka46";
      return args;
    });
  }
};
