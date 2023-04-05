const Config = require('./config');

class ConfigSingleton {
  constructor() {
    if (!ConfigSingleton.instance) {
      ConfigSingleton.instance = new Config();
    }
  }

  getInstance() {
    return ConfigSingleton.instance;
  }
}

module.exports = ConfigSingleton;
