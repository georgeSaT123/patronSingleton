const ConfigSingleton = require('./configSingleton');

const config1 = new ConfigSingleton().getInstance();
console.log(config1.getConfig());

const config2 = new ConfigSingleton().getInstance();
config2.setConfig({ environment: 'production' });
console.log(config1.getConfig()); 
console.log(config2.getConfig()); 
