/* eslint-env node */
'use strict';

var stew = require('broccoli-stew');

module.exports = {
  name: 'ember-cli-google-translate',

  treeForVendor: function() {
    return stew.find(__dirname + '/vendor/google-translate', {
      destDir: 'google-translate',
      files: ['shims.js', 'google-translate.js']
    });
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/google-translate/google-translate.js');
    app.import('vendor/google-translate/shims.js', {
      exports: { 'google-translate': [ 'default' ]}
    });
  }
};
