(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['google-translate'] };
  }

  define('google-translate', [], vendorModule);
})();
