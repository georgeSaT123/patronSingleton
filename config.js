class Config {
    constructor() {
      this.config = {
        port: 3000,
        maxConnections: 10,
        environment: 'development',
      };
    }
  
    getConfig() {
      return this.config;
    }
  
    setConfig(newConfig) {
      this.config = { ...this.config, ...newConfig };
    }
  }
  
  module.exports = Config;
  