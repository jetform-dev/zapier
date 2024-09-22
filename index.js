const authentication = require('./authentication');
const newOrderTrigger = require('./triggers/new_order.js');
const newUserTrigger = require('./triggers/new_user.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  triggers: { 
    [newOrderTrigger.key]: newOrderTrigger,
    [newUserTrigger.key]: newUserTrigger,
  },
  searches: {},
};
