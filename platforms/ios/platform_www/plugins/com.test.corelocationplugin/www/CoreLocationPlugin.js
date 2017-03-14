cordova.define("com.test.corelocationplugin.CoreLocationPlugin", function(require, exports, module) {
module.exports = {
    initial: function() {
        cordova.exec(null, null, "CoreLocationPlugin", "initial", []);
    },
    startAllManager: function() {
        cordova.exec(null, null, "CoreLocationPlugin", "startAllManager", []);
    }
};

});
