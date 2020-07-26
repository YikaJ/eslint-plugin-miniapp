'use strict';

module.exports = {
  rules: {
    'no-assign-this-data': require('./lib/rules/no-assign-this-data')
  },
  rulesConfig: {
    'no-assign-this-data': [2, 'allowCatch']
  }
};