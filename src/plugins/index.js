const requirePlugins = require.context('./', false, /(?<!index)\.js$/),
    removePrefix = str => {
        return str.replace(/^\.\//, '');
    };

requirePlugins.keys().forEach(fileName => {
    console.log(requirePlugins(fileName).default);
    const name = removePrefix(fileName);
    import(`@plugins/${name}`);
});
