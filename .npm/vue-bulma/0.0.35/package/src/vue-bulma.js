var components = require('./components');

module.exports = {
    install: function (Vue, options) {
        components.forEach(function (component) {
            Vue.component(component.name, component.module);
        });
    }
}