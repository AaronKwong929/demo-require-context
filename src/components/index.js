import Vue from 'vue';
const requireComponent = require.context('./', false, /global-\w*[-\w*]*\.vue$/),
    removePrefix = str => {
        return str.replace(/^\.\/global-/, '');
    },
    removeSuffix = str => {
        return str.replace(/\.\w+$/, '');
    },
    install = Vue => {
        requireComponent.keys().forEach(fileName => {
            const config = requireComponent(fileName),
                componentName = removePrefix(removeSuffix(fileName));
            Vue.component(componentName, config.default || config);
        });
    };

install(Vue);
