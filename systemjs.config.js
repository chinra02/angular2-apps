(function(global) {
 System.config({
   paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
  // map tells the System loader where to look for things
   map : {
    'ng2-app': 'app',
    '@angular':                   'node_modules/@angular',
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
    

       // other libraries
      'underscore': 'npm:underscore',
      'angular2-jwt':'npm:angular2-jwt',
      'base64-js': 'npm:base64-js',
      'js-base64':'npm:js-base64',
      'buffer':'npm:buffer',
      'ieee754':'npm:ieee754',
      'convert-hex':'npm:convert-hex',
      'convert-string':'npm:convert-string',
      'isarray':'npm:isarray',
      'sha256':'npm:sha256',
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'redux':'npm:redux/dist',
      'ng2-redux':'npm:ng2-redux',
      'ng2-modal':'npm:ng2-modal',
      'ng2-dropdown': 'npm:ng2-dropdown',
      'moment':'npm:moment',
      'ng2-bootstrap':'npm:ng2-bootstrap',
      'angular2-select': 'npm:angular2-select',
      'ng2-popover':'npm:ng2-popover',
      'ng2-tooltip':'npm:ng2-tooltip',
      'immutable':'npm:immutable',
      'redux-logger':'npm:redux-logger/dist',
      'redux-localstorage':'npm:redux-localstorage/lib'
      
  },

  // packages tells the System loader how to load when no filename and/or no extension
  packages : {
    'app':          { main: 'main.js',  defaultExtension: 'js' },
    'underscore':{main: 'underscore.js', defaultExtension: 'js'},
    'rxjs':                       { defaultExtension: 'js' },
    'redux':{main:'redux.js',defaultExtension: 'js'},
    'ng2-redux':{main: 'lib/index.js', defaultExtension: 'js'},
    'angular2-in-memory-web-api': { main: './index.js',defaultExtension: 'js'  },
    'ng2-dropdown': { 'main': 'src/index.js', 'defaultExtension': 'js' },
    'ng2-modal':   { 'main': 'index.js', defaultExtension: 'js' },
    'moment':{'main':'moment.js',defaultExtension:'js'},
    'ng2-bootstrap':{'main':'ng2-bootstrap.js',defaultExtension:'js'},
    'angular2-select': {'main':'index.js',defaultExtension:'js'},
    'ng2-popover':{'main':'index.js',defaultExtension:'js'},
    'base64-js':{main:'index.js',defaultExtension:'js'},
    'js-base64':{main:'base64.js',defaultExtension:'js'},
    'ieee754':{main:'index.js',defaultExtension:'js'},
    'buffer': {main:'index.js',defaultExtension:'js'},
    'convert-hex': {main:'convert-hex.js',defaultExtension:'js'},
    'convert-string': {main:'convert-string.js',defaultExtension:'js'},
    'isarray': {main:'index.js',defaultExtension:'js'},
    'sha256':{man: 'lib/sha256.js',defaultExtension:'js'},
    'angular2-jwt':{main:'angular2-jwt.js',defaultExtension:'js'},
    'ng2-tooltip':{main:'index.js',defaultExtension:'js'},
    'immutable':{defaultExtension:'js'},
    'redux-logger':{main:'index.js',defaultExtension:'js'},
    'redux-localstorage':{main:'persistState.js',defaultExtension:'js'}
   
    
    }
  });
})(this);