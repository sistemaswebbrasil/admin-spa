// Sobrescreve as configurações do webpack do react no modo desenvolvimento
module.exports = function (config) {
    // Use your own ESLint file
    let eslintLoader = config.module.rules[0];
    eslintLoader.use[0].options.useEslintrc = true;

    // Add the SASS loader second-to-last
    // (last one must remain as the "file-loader")
    let loaderList = config.module.rules[1].oneOf;
    loaderList.splice(loaderList.length - 1, 0, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    });
};
