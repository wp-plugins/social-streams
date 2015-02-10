(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/scripts/admin.coffee":[function(require,module,exports){
"use strict";
require('./appMain');

require('./selectize-tab-separator');

require('./selectize-blacklisted-chars');

require("console-log-shim");

require('./Modules/SSOptions/ssOptionsMain');

require('./Modules/SSPosts/ssPostsMain');

require('./Modules/SSAuth/ssAuthMain');

require('./Modules/SSSearch/ssSearchMain');

require('./Modules/SSAdmin/ssAdminMain');



},{"./Modules/SSAdmin/ssAdminMain":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/ssAdminMain.coffee","./Modules/SSAuth/ssAuthMain":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAuth/ssAuthMain.coffee","./Modules/SSOptions/ssOptionsMain":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/ssOptionsMain.coffee","./Modules/SSPosts/ssPostsMain":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/ssPostsMain.coffee","./Modules/SSSearch/ssSearchMain":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/ssSearchMain.coffee","./appMain":"/srv/social-streams/releases/tmp/social-streams/src/scripts/appMain.coffee","./selectize-blacklisted-chars":"/srv/social-streams/releases/tmp/social-streams/src/scripts/selectize-blacklisted-chars.coffee","./selectize-tab-separator":"/srv/social-streams/releases/tmp/social-streams/src/scripts/selectize-tab-separator.coffee","console-log-shim":"/srv/social-streams/releases/tmp/social-streams/lib/console-log-shim.coffee"}],"/srv/social-streams/releases/tmp/social-streams/lib/console-log-shim.coffee":[function(require,module,exports){
"use strict";
if (window.console == null) {
  window.console = {};
}

if (window.console.log == null) {
  window.console.log = function() {};
}



},{}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/index.js":[function(require,module,exports){
var Modernizr = require('./lib/Modernizr'),
    ModernizrProto = require('./lib/ModernizrProto'),
    classes = require('./lib/classes'),
    testRunner = require('./lib/testRunner'),
    setClasses = require('./lib/setClasses');

// Run each test
testRunner();

// Remove the "no-js" class if it exists
setClasses(classes);

delete ModernizrProto.addTest;
delete ModernizrProto.addAsyncTest;

// Run the things that are supposed to run after the tests
for (var i = 0; i < Modernizr._q.length; i++) {
  Modernizr._q[i]();
}

module.exports = Modernizr;

},{"./lib/Modernizr":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/Modernizr.js","./lib/ModernizrProto":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/ModernizrProto.js","./lib/classes":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/classes.js","./lib/setClasses":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/setClasses.js","./lib/testRunner":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/testRunner.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/Modernizr.js":[function(require,module,exports){
var ModernizrProto = require('./ModernizrProto');


  // Fake some of Object.create
  // so we can force non test results
  // to be non "own" properties.
  var Modernizr = function(){};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it
  // rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();

  

module.exports = Modernizr;
},{"./ModernizrProto":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/ModernizrProto.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/ModernizrProto.js":[function(require,module,exports){
var tests = require('./tests');


  var ModernizrProto = {
    // The current version, dummy
    _version: 'v3.0.0pre',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      classPrefix : '',
      enableClasses : true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function( test, cb ) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for
      // actual async tests. This is in case people listen to
      // synchronous tests. I would leave it out, but the code
      // to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      setTimeout(function() {
        cb(this[test]);
      }, 0);
    },

    addTest: function( name, fn, options ) {
      tests.push({name : name, fn : fn, options : options });
    },

    addAsyncTest: function (fn) {
      tests.push({name : null, fn : fn});
    }
  };

  

module.exports = ModernizrProto;
},{"./tests":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/tests.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/classes.js":[function(require,module,exports){

  var classes = [];
  
module.exports = classes;
},{}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/createElement.js":[function(require,module,exports){

  var createElement = function() {
    return document.createElement.apply(document, arguments);
  };
  
module.exports = createElement;
},{}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/docElement.js":[function(require,module,exports){

  var docElement = document.documentElement;
  
module.exports = docElement;
},{}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/getBody.js":[function(require,module,exports){
var createElement = require('./createElement');


  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if(!body) {
      // Can't use the real body create a fake one.
      body = createElement('body');
      body.fake = true;
    }

    return body;
  }

  

module.exports = getBody;
},{"./createElement":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/createElement.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/injectElementWithStyles.js":[function(require,module,exports){
var ModernizrProto = require('./ModernizrProto');
var docElement = require('./docElement');
var createElement = require('./createElement');
var getBody = require('./getBody');


  // Inject element with style element and some CSS rules
  function injectElementWithStyles( rule, callback, nodes, testnames ) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if ( parseInt(nodes, 10) ) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while ( nodes-- ) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
    // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
    // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
    // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
    // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
    style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
    div.id = mod;
    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).innerHTML += style;
    body.appendChild(div);
    if ( body.fake ) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if ( body.fake ) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;

  }

  

module.exports = injectElementWithStyles;
},{"./ModernizrProto":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/ModernizrProto.js","./createElement":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/createElement.js","./docElement":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/docElement.js","./getBody":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/getBody.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/is.js":[function(require,module,exports){

  /**
   * is returns a boolean for if typeof obj is exactly type.
   */
  function is( obj, type ) {
    return typeof obj === type;
  }
  
module.exports = is;
},{}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/prefixes.js":[function(require,module,exports){
var ModernizrProto = require('./ModernizrProto');


  // List of property values to set for css tests. See ticket #21
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  // expose these for the plugin API. Look in the source for how to join() them against your input
  ModernizrProto._prefixes = prefixes;

  

module.exports = prefixes;
},{"./ModernizrProto":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/ModernizrProto.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/setClasses.js":[function(require,module,exports){
var Modernizr = require('./Modernizr');
var docElement = require('./docElement');


  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses( classes ) {
    var className = docElement.className;
    var regex;
    var classPrefix = Modernizr._config.classPrefix || '';

    // Change `no-js` to `js` (we do this regardles of the `enableClasses`
    // option)
    // Handle classPrefix on this too
    var reJS = new RegExp('(^|\\s)'+classPrefix+'no-js(\\s|$)');
    className = className.replace(reJS, '$1'+classPrefix+'js$2');

    if(Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      docElement.className = className;
    }

  }

  

module.exports = setClasses;
},{"./Modernizr":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/Modernizr.js","./docElement":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/docElement.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/testRunner.js":[function(require,module,exports){
var tests = require('./tests');
var Modernizr = require('./Modernizr');
var classes = require('./classes');
var is = require('./is');


  // Run through all tests and detect their support in the current UA.
  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;
    var modernizrProp;
    var mPropCount;

    for ( var featureIdx in tests ) {
      featureNames = [];
      feature = tests[featureIdx];
      // run the test, throw the return value into the Modernizr,
      //   then based on that boolean, define an appropriate className
      //   and push it into an array of classes we'll join later.
      //
      //   If there is no name, it's an 'async' test that is run,
      //   but not directly added to the object. That should
      //   be done with a post-run addTest call.
      if ( feature.name ) {
        featureNames.push(feature.name.toLowerCase());

        if (feature.options && feature.options.aliases && feature.options.aliases.length) {
          // Add all the aliases into the names list
          for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
            featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
          }
        }
      }

      // Run the test, or use the raw value if it's not a function
      result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


      // Set each of the names on the Modernizr object
      for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
        featureName = featureNames[nameIdx];
        // Support dot properties as sub tests. We don't do checking to make sure
        // that the implied parent tests have been added. You must call them in
        // order (either in the test, or make the parent test a dependency).
        //
        // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
        // hashtag famous last words
        featureNameSplit = featureName.split('.');

        if (featureNameSplit.length === 1) {
          Modernizr[featureNameSplit[0]] = result;
        }
        else if (featureNameSplit.length === 2) {
          Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
        }

        classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
      }
    }
  }

  

module.exports = testRunner;
},{"./Modernizr":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/Modernizr.js","./classes":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/classes.js","./is":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/is.js","./tests":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/tests.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/testStyles.js":[function(require,module,exports){
var ModernizrProto = require('./ModernizrProto');
var injectElementWithStyles = require('./injectElementWithStyles');


  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
  

module.exports = testStyles;
},{"./ModernizrProto":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/ModernizrProto.js","./injectElementWithStyles":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/injectElementWithStyles.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/tests.js":[function(require,module,exports){

  var tests = [];
  
module.exports = tests;
},{}],"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/test/touchevents.js":[function(require,module,exports){
var Modernizr = require('./../lib/Modernizr');
var prefixes = require('./../lib/prefixes');
var testStyles = require('./../lib/testStyles');

/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "http://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/
/* DOC

Indicates if the browser supports the W3C Touch Events API.

This *does not* necessarily reflect a touchscreen device:

* Older touchscreen devices only emulate mouse events
* Modern IE touch devices implement the Pointer Events API instead: use `Modernizr.pointerevents` to detect support for that
* Some browsers & OS setups may enable touch APIs when no touchscreen is connected
* Future browsers may implement other event models for touch interactions

See this article: [You Can't Detect A Touchscreen](http://www.stucox.com/blog/you-cant-detect-a-touchscreen/).

It's recommended to bind both mouse and touch/pointer events simultaneously – see [this HTML5 Rocks tutorial](http://www.html5rocks.com/en/mobile/touchandmouse/).

This test will also return `true` for Firefox 4 Multitouch support.

*/

  // Chrome (desktop) used to lie about its support on this, but that has since been rectified: http://crbug.com/36415
  Modernizr.addTest('touchevents', function() {
    var bool;
    if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      bool = true;
    } else {
      var query = ['@media (',prefixes.join('touch-enabled),('),'heartz',')','{#modernizr{top:9px;position:absolute}}'].join('');
      testStyles(query, function( node ) {
        bool = node.offsetTop === 9;
      });
    }
    return bool;
  });


},{"./../lib/Modernizr":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/Modernizr.js","./../lib/prefixes":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/prefixes.js","./../lib/testStyles":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/lib/testStyles.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars.runtime.js":[function(require,module,exports){
"use strict";
/*globals Handlebars: true */
var base = require("./handlebars/base");

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var SafeString = require("./handlebars/safe-string")["default"];
var Exception = require("./handlebars/exception")["default"];
var Utils = require("./handlebars/utils");
var runtime = require("./handlebars/runtime");

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
var create = function() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = SafeString;
  hb.Exception = Exception;
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function(spec) {
    return runtime.template(spec, hb);
  };

  return hb;
};

var Handlebars = create();
Handlebars.create = create;

Handlebars['default'] = Handlebars;

exports["default"] = Handlebars;
},{"./handlebars/base":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/base.js","./handlebars/exception":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/exception.js","./handlebars/runtime":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/runtime.js","./handlebars/safe-string":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/safe-string.js","./handlebars/utils":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/utils.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/base.js":[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];

var VERSION = "2.0.0";
exports.VERSION = VERSION;var COMPILER_REVISION = 6;
exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1'
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var isArray = Utils.isArray,
    isFunction = Utils.isFunction,
    toString = Utils.toString,
    objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials) {
  this.helpers = helpers || {};
  this.partials = partials || {};

  registerDefaultHelpers(this);
}

exports.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: logger,
  log: log,

  registerHelper: function(name, fn) {
    if (toString.call(name) === objectType) {
      if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
      Utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function(name) {
    delete this.helpers[name];
  },

  registerPartial: function(name, partial) {
    if (toString.call(name) === objectType) {
      Utils.extend(this.partials,  name);
    } else {
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function(name) {
    delete this.partials[name];
  }
};

function registerDefaultHelpers(instance) {
  instance.registerHelper('helperMissing', function(/* [args, ]options */) {
    if(arguments.length === 1) {
      // A missing field in a {{foo}} constuct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
    }
  });

  instance.registerHelper('blockHelperMissing', function(context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if(context === true) {
      return fn(this);
    } else if(context === false || context == null) {
      return inverse(this);
    } else if (isArray(context)) {
      if(context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
        options = {data: data};
      }

      return fn(context, options);
    }
  });

  instance.registerHelper('each', function(context, options) {
    if (!options) {
      throw new Exception('Must pass iterator to #each');
    }

    var fn = options.fn, inverse = options.inverse;
    var i = 0, ret = "", data;

    var contextPath;
    if (options.data && options.ids) {
      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (isFunction(context)) { context = context.call(this); }

    if (options.data) {
      data = createFrame(options.data);
    }

    if(context && typeof context === 'object') {
      if (isArray(context)) {
        for(var j = context.length; i<j; i++) {
          if (data) {
            data.index = i;
            data.first = (i === 0);
            data.last  = (i === (context.length-1));

            if (contextPath) {
              data.contextPath = contextPath + i;
            }
          }
          ret = ret + fn(context[i], { data: data });
        }
      } else {
        for(var key in context) {
          if(context.hasOwnProperty(key)) {
            if(data) {
              data.key = key;
              data.index = i;
              data.first = (i === 0);

              if (contextPath) {
                data.contextPath = contextPath + key;
              }
            }
            ret = ret + fn(context[key], {data: data});
            i++;
          }
        }
      }
    }

    if(i === 0){
      ret = inverse(this);
    }

    return ret;
  });

  instance.registerHelper('if', function(conditional, options) {
    if (isFunction(conditional)) { conditional = conditional.call(this); }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function(conditional, options) {
    return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
  });

  instance.registerHelper('with', function(context, options) {
    if (isFunction(context)) { context = context.call(this); }

    var fn = options.fn;

    if (!Utils.isEmpty(context)) {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
        options = {data:data};
      }

      return fn(context, options);
    } else {
      return options.inverse(this);
    }
  });

  instance.registerHelper('log', function(message, options) {
    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
    instance.log(level, message);
  });

  instance.registerHelper('lookup', function(obj, field) {
    return obj && obj[field];
  });
}

var logger = {
  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

  // State enum
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  level: 3,

  // can be overridden in the host environment
  log: function(level, message) {
    if (logger.level <= level) {
      var method = logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, message);
      }
    }
  }
};
exports.logger = logger;
var log = logger.log;
exports.log = log;
var createFrame = function(object) {
  var frame = Utils.extend({}, object);
  frame._parent = object;
  return frame;
};
exports.createFrame = createFrame;
},{"./exception":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/exception.js","./utils":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/utils.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/exception.js":[function(require,module,exports){
"use strict";

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var line;
  if (node && node.firstLine) {
    line = node.firstLine;

    message += ' - ' + line + ':' + node.firstColumn;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  if (line) {
    this.lineNumber = line;
    this.column = node.firstColumn;
  }
}

Exception.prototype = new Error();

exports["default"] = Exception;
},{}],"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/runtime.js":[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];
var COMPILER_REVISION = require("./base").COMPILER_REVISION;
var REVISION_CHANGES = require("./base").REVISION_CHANGES;
var createFrame = require("./base").createFrame;

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = REVISION_CHANGES[currentRevision],
          compilerVersions = REVISION_CHANGES[compilerRevision];
      throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
            "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
            "Please update your runtime to a newer version ("+compilerInfo[1]+").");
    }
  }
}

exports.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new Exception("No environment passed to template");
  }
  if (!templateSpec || !templateSpec.main) {
    throw new Exception('Unknown template object: ' + typeof templateSpec);
  }

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  var invokePartialWrapper = function(partial, indent, name, context, hash, helpers, partials, data, depths) {
    if (hash) {
      context = Utils.extend({}, context, hash);
    }

    var result = env.VM.invokePartial.call(this, partial, name, context, helpers, partials, data, depths);

    if (result == null && env.compile) {
      var options = { helpers: helpers, partials: partials, data: data, depths: depths };
      partials[name] = env.compile(partial, { data: data !== undefined, compat: templateSpec.compat }, env);
      result = partials[name](context, options);
    }
    if (result != null) {
      if (indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    }
  };

  // Just add water
  var container = {
    lookup: function(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function(i) {
      return templateSpec[i];
    },

    programs: [],
    program: function(i, data, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths) {
        programWrapper = program(this, i, fn, data, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = program(this, i, fn);
      }
      return programWrapper;
    },

    data: function(data, depth) {
      while (data && depth--) {
        data = data._parent;
      }
      return data;
    },
    merge: function(param, common) {
      var ret = param || common;

      if (param && common && (param !== common)) {
        ret = Utils.extend({}, common, param);
      }

      return ret;
    },

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  var ret = function(context, options) {
    options = options || {};
    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths;
    if (templateSpec.useDepths) {
      depths = options.depths ? [context].concat(options.depths) : [context];
    }

    return templateSpec.main.call(container, context, container.helpers, container.partials, data, depths);
  };
  ret.isTop = true;

  ret._setup = function(options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
    }
  };

  ret._child = function(i, data, depths) {
    if (templateSpec.useDepths && !depths) {
      throw new Exception('must pass parent depths');
    }

    return program(container, i, templateSpec[i], data, depths);
  };
  return ret;
}

exports.template = template;function program(container, i, fn, data, depths) {
  var prog = function(context, options) {
    options = options || {};

    return fn.call(container, context, container.helpers, container.partials, options.data || data, depths && [context].concat(depths));
  };
  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  return prog;
}

exports.program = program;function invokePartial(partial, name, context, helpers, partials, data, depths) {
  var options = { partial: true, helpers: helpers, partials: partials, data: data, depths: depths };

  if(partial === undefined) {
    throw new Exception("The partial " + name + " could not be found");
  } else if(partial instanceof Function) {
    return partial(context, options);
  }
}

exports.invokePartial = invokePartial;function noop() { return ""; }

exports.noop = noop;function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? createFrame(data) : {};
    data.root = context;
  }
  return data;
}
},{"./base":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/base.js","./exception":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/exception.js","./utils":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/utils.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/safe-string.js":[function(require,module,exports){
"use strict";
// Build out our basic SafeString type
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = function() {
  return "" + this.string;
};

exports["default"] = SafeString;
},{}],"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/utils.js":[function(require,module,exports){
"use strict";
/*jshint -W004 */
var SafeString = require("./safe-string")["default"];

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

exports.extend = extend;var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
var isFunction = function(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  isFunction = function(value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
var isFunction;
exports.isFunction = isFunction;
/* istanbul ignore next */
var isArray = Array.isArray || function(value) {
  return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
};
exports.isArray = isArray;

function escapeExpression(string) {
  // don't escape SafeStrings, since they're already safe
  if (string instanceof SafeString) {
    return string.toString();
  } else if (string == null) {
    return "";
  } else if (!string) {
    return string + '';
  }

  // Force a string conversion as this will be done by the append regardless and
  // the regex test will do this transparently behind the scenes, causing issues if
  // an object's to string has escaped characters in it.
  string = "" + string;

  if(!possible.test(string)) { return string; }
  return string.replace(badChars, escapeChar);
}

exports.escapeExpression = escapeExpression;function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

exports.isEmpty = isEmpty;function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}

exports.appendContextPath = appendContextPath;
},{"./safe-string":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars/safe-string.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/runtime.js":[function(require,module,exports){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = require('./dist/cjs/handlebars.runtime');

},{"./dist/cjs/handlebars.runtime":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/dist/cjs/handlebars.runtime.js"}],"/srv/social-streams/releases/tmp/social-streams/node_modules/hbsfy/runtime.js":[function(require,module,exports){
module.exports = require("handlebars/runtime")["default"];

},{"handlebars/runtime":"/srv/social-streams/releases/tmp/social-streams/node_modules/handlebars/runtime.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Collections/ApiCollection.coffee":[function(require,module,exports){
(function (global){
"use strict";
var App, Backbone,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

App.Collections.ApiCollection = (function(_super) {
  __extends(ApiCollection, _super);

  function ApiCollection() {
    this.fetch = __bind(this.fetch, this);
    this.parse = __bind(this.parse, this);
    this.url = __bind(this.url, this);
    return ApiCollection.__super__.constructor.apply(this, arguments);
  }

  ApiCollection.prototype.apiUrl = '/';

  ApiCollection.prototype.url = function() {
    return App.request('apiRoot') + _.result(this, 'apiUrl');
  };

  ApiCollection.prototype.parse = function(response) {
    return response.data;
  };

  ApiCollection.prototype.fetch = function(options) {
    var data;
    if (this.data == null) {
      data = {};
    }
    if (!_.isEmpty(this.data)) {
      if (options == null) {
        options = {};
      }
      if (options.data == null) {
        options.data = {};
      }
      options.data = _.extend({}, this.data, options.data);
    }
    return App.Collections.ApiCollection.__super__.fetch.apply(this, [options]);
  };

  return ApiCollection;

})(Backbone.Collection);



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Collections/InfiniteScrollCollection.coffee":[function(require,module,exports){
"use strict";
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.Collections.InfiniteScrollCollection = (function(_super) {
  __extends(InfiniteScrollCollection, _super);

  function InfiniteScrollCollection() {
    this.parse = __bind(this.parse, this);
    this.nextPage = __bind(this.nextPage, this);
    return InfiniteScrollCollection.__super__.constructor.apply(this, arguments);
  }

  InfiniteScrollCollection.prototype.nextPage = function(args) {
    return this.fetch(args);
  };

  InfiniteScrollCollection.prototype.parse = function(response) {
    if ((this.data != null) && (this.data.perPage != null) && response.data.length < this.data.perPage) {
      this.hasNext = false;
    }
    return response.data;
  };

  return InfiniteScrollCollection;

})(App.Collections.ApiCollection);



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Config/BackboneAjax.coffee":[function(require,module,exports){
(function (global){
'use strict';
var $, App, Backbone, _;

App = require("app");

$ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

_ = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

App.addInitializer(function() {
  var ajaxBackup, ajaxDebounce, ajaxDebounceCallback, ajaxDebounceWrapper, ajaxImmediate, apiCallStack, normalizeRequest, readDom, trimChar;
  Backbone.emulateJSON = true;
  Backbone.emulateHTTP = true;
  trimChar = function(str, char) {
    if (str.charAt(0) === char) {
      str = str.substr(1);
    }
    if (str.charAt(str.length - 1) === char) {
      str = str.substr(0, str.length - 1);
    }
    return str;
  };
  normalizeRequest = function(url) {
    var apiRoot, urlParts;
    apiRoot = App.request('apiRoot');
    if (url.indexOf(apiRoot) >= 0) {
      urlParts = url.split(apiRoot);
      url = urlParts[1];
    }
    url = trimChar(url, '/');
    return url;
  };
  readDom = function(options) {
    var $dataElement, data, request, requestIDQuery;
    if (options.type === 'GET') {
      request = normalizeRequest(options.url);
      requestIDQuery = '';
      if ((options.data != null) && (options.data.requestID != null) && options.data.requestID !== '') {
        requestIDQuery = '[data-id="' + options.data.requestID + '"]';
      }
      $dataElement = $('.bwapi-call-data[data-type="get"]' + requestIDQuery + '[data-request="' + request + '"]:not(.loaded)');
      if ($dataElement.length > 0) {
        $dataElement.addClass('loaded');
        data = App.Helpers.data.getElementData($dataElement);
        if ((data != null) && data !== '' && !_.isEmpty(data)) {
          if (options == null) {
            return true;
          }
          if (data.meta.code === 200) {
            if (typeof options.success === 'function') {
              options.success.apply(this, [data]);
            }
          } else {
            if (typeof options.error === 'function') {
              options.error.apply(this, [data]);
            }
          }
          if (typeof options.complete === 'function') {
            options.complete.apply(this, [data]);
          }
          return true;
        }
      }
    }
  };
  ajaxImmediate = function(options) {
    var connected, xhr;
    if (App.apiSocket != null) {
      connected = App.apiSocket.get('connected');
    }
    if ((connected != null) && connected) {
      xhr = App.apiSocket.call(options.type, options.url, options.data, options);
    } else {
      xhr = ajaxBackup(options);
    }
    return xhr;
  };
  apiCallStack = [];
  ajaxDebounceWrapper = function(func) {
    var apiCall, apiCallData, apiCallIndex, apiCallOptions, apiRoot, complete, contentType, data, dataType, error, options, request, requestID, success, type, url, _i, _len;
    if (apiCallStack.length === 0) {
      return;
    }
    contentType = apiCallStack[0].contentType;
    dataType = "json";
    type = "POST";
    apiRoot = App.request('apiRoot');
    url = apiRoot + "1/site/batch/";
    data = {};
    apiCallOptions = {};
    for (apiCallIndex = _i = 0, _len = apiCallStack.length; _i < _len; apiCallIndex = ++_i) {
      apiCall = apiCallStack[apiCallIndex];
      request = normalizeRequest(apiCall.url);
      if (apiCall.data != null) {
        apiCallData = apiCall.data;
      } else {
        apiCallData = '';
      }
      requestID = apiCallIndex + ':' + apiCall.type + ':' + request;
      data[requestID] = {
        url: request,
        type: apiCall.type,
        data: apiCallData
      };
      apiCallOptions[requestID] = apiCall;
    }
    success = function(batchResponse, batchResponseText, batchXHR) {
      var batchCallback, batchCallbacks, callback, context, response, responseResult, responses, _j, _len1, _results;
      responses = batchResponse.data;
      if (responses == null) {
        responses = {};
      }
      batchCallbacks = [];
      for (requestID in apiCallOptions) {
        apiCall = apiCallOptions[requestID];
        response = responses[requestID];
        if (response == null) {
          response = {};
        }
        responseResult = 'error';
        if ((response.status != null) && response.status === 'success') {
          responseResult = 'success';
        }
        callback = apiCall[responseResult];
        context = apiCall.context;
        if (typeof callback === 'function') {
          callback.apply(context, [response]);
        }
        batchCallback = apiCall['batchSuccess'];
        if (typeof batchCallback === 'function') {
          batchCallbacks.push({
            context: context,
            callback: apiCall['batchSuccess']
          });
        }
      }
      _results = [];
      for (_j = 0, _len1 = batchCallbacks.length; _j < _len1; _j++) {
        batchCallback = batchCallbacks[_j];
        _results.push(batchCallback.callback.apply(batchCallback.context, [batchResponse]));
      }
      return _results;
    };
    complete = function() {
      var batchCallback, batchCallbacks, callback, context, _j, _len1, _results;
      batchCallbacks = [];
      for (requestID in apiCallOptions) {
        apiCall = apiCallOptions[requestID];
        callback = apiCall['complete'];
        context = apiCall.context;
        if (typeof callback === 'function') {
          callback.apply(context, arguments);
        }
        batchCallback = apiCall['batchComplete'];
        if (typeof batchCallback === 'function') {
          batchCallbacks.push({
            context: context,
            callback: apiCall['batchComplete']
          });
        }
      }
      _results = [];
      for (_j = 0, _len1 = batchCallbacks.length; _j < _len1; _j++) {
        batchCallback = batchCallbacks[_j];
        _results.push(batchCallback.callback.apply(batchCallback.context, arguments));
      }
      return _results;
    };
    error = function() {
      var batchCallback, batchCallbacks, callback, context, _j, _len1, _results;
      batchCallbacks = [];
      for (requestID in apiCallOptions) {
        apiCall = apiCallOptions[requestID];
        callback = apiCall['error'];
        context = apiCall.context;
        if (typeof callback === 'function') {
          callback.apply(context, arguments);
        }
        batchCallback = apiCall['batchError'];
        if (typeof batchCallback === 'function') {
          batchCallbacks.push({
            context: context,
            callback: apiCall['batchError']
          });
        }
      }
      _results = [];
      for (_j = 0, _len1 = batchCallbacks.length; _j < _len1; _j++) {
        batchCallback = batchCallbacks[_j];
        _results.push(batchCallback.callback.apply(batchCallback.context, arguments));
      }
      return _results;
    };
    options = {
      error: error,
      success: success,
      complete: complete,
      contentType: contentType,
      dataType: dataType,
      type: type,
      url: url,
      data: data
    };
    func(options);
    return apiCallStack = [];
  };
  ajaxDebounceCallback = _.wrap(ajaxImmediate, ajaxDebounceWrapper);
  ajaxDebounce = _.debounce(ajaxDebounceCallback, 40);

  /*
  backup Backbone AJAX function
   */
  ajaxBackup = Backbone.ajax;

  /*
  override Backbone Ajax
   */
  return Backbone.ajax = function(options) {

    /*
    Check if call can be fetched from DOM
     */
    var result;
    result = readDom(options);
    if (result === true) {
      return result;
    }
    if (options.context == null) {
      options.context = this;
    }
    if ((options.batch != null) && options.batch === true) {
      apiCallStack.push(options);
      return ajaxDebounce.apply(this);
    } else {
      return ajaxImmediate.apply(this, [options]);
    }
  };
});



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Controllers/AppController.coffee":[function(require,module,exports){
(function (global){
"use strict";
var App, Backbone,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

App.Controllers.AppController = (function(_super) {
  __extends(AppController, _super);

  function AppController() {
    return AppController.__super__.constructor.apply(this, arguments);
  }

  AppController.prototype.getApiRoot = function() {
    var apiRoot, wpRoot;
    wpRoot = '/';
    apiRoot = '?bwapi=/';
    if (App.SSOptions != null) {
      wpRoot = App.SSOptions.reqres.request('option', 'wpRoot');
    }
    return wpRoot + apiRoot;
  };

  AppController.prototype.isEven = function(n) {
    return n % 2 === 0;
  };

  return AppController;

})(Backbone.Marionette.Controller);



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/browserSupport.coffee":[function(require,module,exports){
(function (global){
"use strict";
var $, Backbone, BrowserSupportHelper, Modernizr, _,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

_ = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

$ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);

Modernizr = require("modernizr");

BrowserSupportHelper = (function(_super) {
  __extends(BrowserSupportHelper, _super);

  function BrowserSupportHelper() {
    return BrowserSupportHelper.__super__.constructor.apply(this, arguments);
  }

  BrowserSupportHelper.prototype.checkForIE = function() {
    if ((navigator.appVersion.indexOf("MSIE 7.") > 0) || (navigator.appVersion.indexOf("MSIE 8.") > 0) || (navigator.appVersion.indexOf("MSIE 9.") > 0)) {
      return true;
    } else {
      return false;
    }
  };

  BrowserSupportHelper.prototype.ieAjaxSupport = function() {
    if (this.checkForIE()) {
      if (window.XDomainRequest) {
        return $.ajaxTransport(function(s) {
          var xdr;
          if (s.crossDomain && s.async) {
            if (s.timeout) {
              s.xdrTimeout = s.timeout;
              delete s.timeout;
            }
            xdr = void 0;
            return {
              send: function(_, complete) {
                var callback;
                callback = function(status, statusText, responses, responseHeaders) {
                  xdr.onload = xdr.onerror = xdr.ontimeout = jQuery.noop;
                  xdr = undefined;
                  complete(status, statusText, responses, responseHeaders);
                };
                xdr = new XDomainRequest();
                xdr.onload = function() {
                  callback(200, "OK", {
                    text: xdr.responseText
                  }, "Content-Type: " + xdr.contentType);
                };
                xdr.onerror = function() {
                  callback(404, "Not Found");
                };
                xdr.onprogress = jQuery.noop;
                xdr.ontimeout = function() {
                  callback(0, "timeout");
                };
                xdr.timeout = s.xdrTimeout || Number.MAX_VALUE;
                xdr.open(s.type, s.url);
                xdr.send((s.hasContent && s.data) || null);
              },
              abort: function() {
                if (xdr) {
                  xdr.onerror = jQuery.noop;
                  xdr.abort();
                  console.log("aborted");
                }
              }
            };
          }
        });
      }
    }
  };

  return BrowserSupportHelper;

})(Backbone.Model);


/*
Instantiate helper
 */

module.exports = new BrowserSupportHelper;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"modernizr":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/index.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/data.coffee":[function(require,module,exports){
(function (global){
"use strict";
var $, Backbone, DataHelper, JSON, Modernizr, _,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

_ = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

$ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);

Modernizr = require("modernizr");

JSON = (typeof window !== "undefined" ? window.JSON : typeof global !== "undefined" ? global.JSON : null);

DataHelper = (function(_super) {
  __extends(DataHelper, _super);

  function DataHelper() {
    return DataHelper.__super__.constructor.apply(this, arguments);
  }


  /*
  	Get data from element on DOM.
  
  	@author Alessandro Biavati <@alebiavati>
  	@package data.coffee
  	@since 1.0
  	@param (jQuery/string) el
  	@return (Object) data
   */

  DataHelper.prototype.getElementData = function(el, format) {
    var data;
    if (typeof el === 'string') {
      el = $(el);
    }
    if (!el instanceof $ || el.length === 0) {
      return;
    }
    data = {};
    if (el.is('script') || ((format != null) && format === 'json')) {
      data = JSON.parse(el.html());
    } else {
      data = el.data();
    }
    return data;
  };

  return DataHelper;

})(Backbone.Model);


/*
Instantiate helper
 */

module.exports = new DataHelper;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"modernizr":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/index.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/date.coffee":[function(require,module,exports){
(function (global){
"use strict";
var Backbone, DateHelper,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

DateHelper = (function(_super) {
  __extends(DateHelper, _super);

  function DateHelper() {
    this.getDatetime = __bind(this.getDatetime, this);
    return DateHelper.__super__.constructor.apply(this, arguments);
  }

  DateHelper.prototype.getDatetime = function(server_gmt_offset) {
    var server_datetime, server_time;
    server_time = this.getTime(server_gmt_offset);
    server_datetime = new Date(server_time);
    return server_datetime;
  };

  DateHelper.prototype.getTime = function(offset) {
    var d, nd, server_time, utc;
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000 * offset));
    server_time = Math.round(nd.getTime() / 1000);
    return server_time;
  };

  DateHelper.prototype.parseTimestamp = function(timestamp) {
    var days, hours, minutes, months, secs, weeks, years;
    secs = ((new Date()).getTime() / 1000) - timestamp;
    Math.floor(secs);
    minutes = secs / 60;
    secs = Math.floor(secs % 60);
    if (minutes < 1) {
      return secs + (secs > 1 ? " seconds ago" : " second ago");
    }
    hours = minutes / 60;
    minutes = Math.floor(minutes % 60);
    if (hours < 1) {
      return minutes + (minutes > 1 ? " minutes ago" : " minute ago");
    }
    days = hours / 24;
    hours = Math.floor(hours % 24);
    if (days < 1) {
      return hours + (hours > 1 ? " hours ago" : " hour ago");
    }
    weeks = days / 7;
    days = Math.floor(days % 7);
    if (weeks < 1) {
      return days + (days > 1 ? " days ago" : " day ago");
    }
    months = weeks / 4.35;
    weeks = Math.floor(weeks % 4.35);
    if (months < 1) {
      return weeks + (weeks > 1 ? " weeks ago" : " week ago");
    }
    years = months / 12;
    months = Math.floor(months % 12);
    if (years < 1) {
      return months + (months > 1 ? " months ago" : " month ago");
    }
    years = Math.floor(years);
    return years + (years > 1 ? " years ago" : " years ago");
  };

  return DateHelper;

})(Backbone.Model);


/*
Instantiate helper
 */

module.exports = new DateHelper;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/env.coffee":[function(require,module,exports){
(function (global){
"use strict";
var $, Backbone, EnvHelper, Modernizr, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

_ = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

$ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);

Modernizr = require("modernizr");

EnvHelper = (function(_super) {
  __extends(EnvHelper, _super);

  function EnvHelper() {
    this.mobileAddressBarScrollFix = __bind(this.mobileAddressBarScrollFix, this);
    this.getScrollTop = __bind(this.getScrollTop, this);
    this.wheelHandler = __bind(this.wheelHandler, this);
    this.updateScrollDir = __bind(this.updateScrollDir, this);
    this.updateEnv = __bind(this.updateEnv, this);
    this.isMobile = __bind(this.isMobile, this);
    this.userAgentDetects = __bind(this.userAgentDetects, this);
    this.offlineCheck = __bind(this.offlineCheck, this);
    this.initialize = __bind(this.initialize, this);
    this.start = __bind(this.start, this);
    return EnvHelper.__super__.constructor.apply(this, arguments);
  }

  EnvHelper.prototype.defaults = {
    resizeEvent: "resize",
    scrollTop: 0,
    orientation: null,
    center: null,
    heightFull: null,
    heightRaw: null,
    height: null,
    width: null,
    safari: null,
    isMobile: null,
    mobileIphone: null,
    mobileIpad: null,
    mobileIos: null,
    mobileAndroid: null,
    mobileAndroidVersion: null,
    mobileRawscreen: null,
    ios: null,
    ios1: null,
    ios2: null,
    ios2_4: null,
    ios3: null,
    ios4: null,
    ios5: null,
    ios5_up: null,
    ios6: null,
    ios6_up: null
  };

  EnvHelper.prototype.start = function() {
    return this.updateEnv();
  };

  EnvHelper.prototype.initialize = function() {
    this.userAgentDetects();
    if (this.get("is_mobile") || this.get("is_tablet")) {
      $(window).on(this.get("resizeEvent"), _.debounce(this.updateEnv, 300));
    } else {
      $(window).on(this.get("resizeEvent"), _.throttle(this.updateEnv, 100, {
        leading: false
      }));
    }
    if ("mousewheel" in window) {
      $(document).on("mousewheel", this.wheelHandler);
    } else {
      $(window).scroll(this.updateScrollDir);
    }
    this.on("change:orientation", this.mobileAddressBarScrollFix, this);
    if (window.navigator.onLine != null) {
      this.set('offline', !window.navigator.onLine);
      return $(window).on('offline online', this.offlineCheck);
    }
  };

  EnvHelper.prototype.offlineCheck = function(event) {
    return this.set('offline', event.type === 'offline');
  };

  EnvHelper.prototype.userAgentDetects = function() {
    var ios, ios1, ios2, ios2_4, ios3, ios4, ios5, ios5_up, ios6, ios6_up, is_mobile, mobile_android, mobile_android_version, mobile_ios, mobile_ipad, mobile_iphone, mobile_rawscreen, safari, ua;
    ua = navigator.userAgent || navigator.vendor || window.opera;
    ios = void 0;
    ios1 = void 0;
    ios2 = void 0;
    ios2_4 = void 0;
    ios3 = void 0;
    ios4 = void 0;
    ios5 = void 0;
    ios5_up = void 0;
    ios6 = void 0;
    ios6_up = void 0;
    safari = ~ua.indexOf("Safari") !== 0 && ~ua.indexOf("Chrome") === 0;
    mobile_iphone = ~ua.indexOf("iPhone") !== 0 || ~ua.indexOf("iPod") !== 0;
    mobile_ipad = ~ua.indexOf("iPad") !== 0;
    mobile_ios = mobile_iphone || mobile_ipad;
    mobile_android = ~ua.indexOf("Android") !== 0;
    mobile_android_version = void 0;
    mobile_rawscreen = window.navigator.standalone;
    is_mobile = this.isMobile(ua);
    if (mobile_android) {
      mobile_android_version = ua.slice(ua.indexOf("Android") + 8, ua.indexOf("Android") + 13);
    }
    if (/(iPhone|iPod|iPad)/i.test(ua)) {
      ios = true;
      if (/OS 2_\d(_\d)? like Mac OS X/i.test(ua)) {
        ios2 = true;
        ios2_4 = true;
      } else if (/OS 3_\d(_\d)? like Mac OS X/i.test(ua)) {
        ios3 = true;
        ios2_4 = true;
      } else if (/OS 4_\d(_\d)? like Mac OS X/i.test(ua)) {
        ios4 = true;
        ios2_4 = true;
      } else if (/OS 5_\d(_\d)? like Mac OS X/i.test(ua)) {
        ios5 = true;
        ios5_up = true;
      } else if (/OS 6_\d(_\d)? like Mac OS X/i.test(ua)) {
        ios6 = true;
        ios5_up = true;
        ios6_up = true;
      } else if (/CPU like Mac OS X/i.test(ua)) {
        ios1 = true;
      } else {
        ios5_up = true;
      }
    }
    return this.set({
      is_mobile: is_mobile,
      mobile_iphone: mobile_iphone,
      mobile_ipad: mobile_ipad,
      mobile_ios: mobile_ios,
      mobile_android: mobile_android,
      mobile_android_version: mobile_android_version,
      mobile_rawscreen: mobile_rawscreen,
      ios: ios,
      ios1: ios1,
      ios2: ios2,
      ios2_4: ios2_4,
      ios3: ios3,
      ios4: ios4,
      ios5: ios5,
      ios5_up: ios5_up,
      ios6: ios6,
      ios6_up: ios6_up
    });
  };

  EnvHelper.prototype.isMobile = function(ua) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4))) {
      return true;
    } else {
      return false;
    }
  };

  EnvHelper.prototype.updateEnv = function() {
    var center, height, height_full, height_raw, orientation, width;
    height = void 0;
    height_raw = void 0;
    height_full = void 0;
    width = void 0;
    center = void 0;
    orientation = void 0;
    width = $(window).width();
    if (this.get("mobile_ios") && this.get("safari")) {
      height = height_raw = document.documentElement.clientHeight;
      if (this.get("mobile_iphone") && !this.get("mobile_rawscreen") && height !== 320) {
        height += 60;
      }
      height_full = height;
    } else if (this.get("mobile_android")) {
      if (this.get("mobile_android_version") === "4.1.1") {
        height_full = height = height_raw = window.innerHeight;
      } else {
        height = height_raw = window.innerHeight;
        height_full = height + 56;
      }
    } else {
      height = height_raw = height_full = $(window).height();
    }
    if (width > height) {
      orientation = "landscape";
    } else {
      orientation = "portrait";
    }
    return this.set({
      width: width,
      height: height,
      height_raw: height_raw,
      height_full: height_full,
      center: {
        left: width / 2,
        top: height / 2
      },
      orientation: orientation
    });
  };

  EnvHelper.prototype.updateScrollDir = function(event) {
    var lastScrollTop, scrollTop;
    scrollTop = this.getScrollTop();
    lastScrollTop = this.get("scrollTop");
    if (scrollTop > lastScrollTop) {
      this.set("scrollDir", true);
    } else {
      this.set("scrollDir", false);
    }
    return this.set("scrollTop", scrollTop);
  };

  EnvHelper.prototype.wheelHandler = function(event, delta, deltaX, deltaY) {};

  EnvHelper.prototype.getScrollTop = function() {
    var B, D;
    if (typeof window.pageYOffset !== "undefined") {
      return window.pageYOffset;
    } else {
      B = document.body;
      D = document.documentElement;
      D = (D.clientHeight ? D : B);
      return D.scrollTop;
    }
  };

  EnvHelper.prototype.mobileAddressBarScrollFix = function() {
    if (this.get("mobile_android") || (this.get("mobile_ios") && this.get("safari"))) {
      $("body").height(this.get("height_full"));
      return setTimeout(function() {
        return window.scrollTo(0, 1);
      }, 0);
    }
  };

  return EnvHelper;

})(Backbone.Model);

module.exports = new EnvHelper;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"modernizr":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/index.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/http.coffee":[function(require,module,exports){
(function (global){
"use strict";
var $, Backbone, HttpHelper, Modernizr, _,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

_ = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

$ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);

Modernizr = require("modernizr");

HttpHelper = (function(_super) {
  __extends(HttpHelper, _super);

  function HttpHelper() {
    return HttpHelper.__super__.constructor.apply(this, arguments);
  }

  HttpHelper.prototype.toUrl = function(base_url, args) {
    var first_separator, index, url;
    url = base_url;
    index = 0;
    first_separator = (base_url.indexOf("?") === -1 ? "?" : "&");
    $.each(args, function(key, val) {
      if (val === undefined || val === "") {
        return true;
      }
      if (index === 0) {
        url += first_separator;
      } else {
        url += "&";
      }
      url += key + "=" + val;
      return index++;
    });
    return url;
  };

  HttpHelper.prototype.requireFiles = function(files) {
    return _.each(files, function(filename) {
      var fileExt, fileref;
      fileExt = filename.split('.').pop();
      fileref = null;
      if (fileExt === 'js') {
        fileref = document.createElement('script');
        fileref.setAttribute('type', 'text/javascript');
        fileref.setAttribute('src', filename);
      } else if (fileExt === 'css') {
        fileref = document.createElement('link');
        fileref.setAttribute('rel', 'stylesheet');
        fileref.setAttribute('type', 'text/css');
        fileref.setAttribute('href', filename);
      }
      if (fileref != null) {
        return document.getElementsByTagName('head')[0].appendChild(fileref);
      }
    });
  };

  HttpHelper.prototype.getQueryVariable = function(variable) {
    var query, value, vars;
    query = window.location.search.substring(1);
    vars = query.split('&');
    value = null;
    _.each(vars, function(v, i) {
      var pair;
      pair = v.split('=');
      if (decodeURIComponent(pair[0]) === variable) {
        return value = decodeURIComponent(pair[1]);
      }
    });
    return value;
  };

  return HttpHelper;

})(Backbone.Model);


/*
Instantiate helper
 */

module.exports = new HttpHelper;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"modernizr":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/index.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Models/ApiModel.coffee":[function(require,module,exports){
(function (global){
'use strict';
var App, Backbone,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

App.Models.ApiModel = (function(_super) {
  __extends(ApiModel, _super);

  function ApiModel() {
    this.toggleAttribute = __bind(this.toggleAttribute, this);
    this.toJSON = __bind(this.toJSON, this);
    this.get = __bind(this.get, this);
    this.urlRoot = __bind(this.urlRoot, this);
    return ApiModel.__super__.constructor.apply(this, arguments);
  }

  ApiModel.prototype.urlRoot = function() {
    var apiUrl, urlRoot;
    urlRoot = null;
    apiUrl = _.result(this, 'apiUrl');
    if (apiUrl != null) {
      urlRoot = App.request('apiRoot') + apiUrl;
    }
    return urlRoot;
  };

  ApiModel.prototype.parse = function(response) {
    var parsedData;
    parsedData = {};
    if (response.data != null) {
      parsedData = response.data;
    } else {
      parsedData = response;
    }
    return parsedData;
  };

  ApiModel.prototype.get = function() {
    var value;
    value = App.Models.ApiModel.__super__.get.apply(this, arguments);
    if (_.isFunction(value)) {
      value = value.apply(this);
    }
    return value;
  };

  ApiModel.prototype.toJSON = function() {
    var data, json;
    data = {};
    json = App.Models.ApiModel.__super__.toJSON.apply(this, arguments);
    _.each(json, function(value, key) {
      return data[key] = this.get(key);
    }, this);
    return data;
  };

  ApiModel.prototype.toggleAttribute = function(attr, options) {
    return this.set(attr, !this.get(attr, _["default"](options, {})));
  };

  return ApiModel;

})(Backbone.Model);



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Models/WPOptionModel.coffee":[function(require,module,exports){
'use strict';
var App,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.Models.WPOptionModel = (function(_super) {
  __extends(WPOptionModel, _super);

  function WPOptionModel() {
    return WPOptionModel.__super__.constructor.apply(this, arguments);
  }

  WPOptionModel.prototype.apiUrl = '1/site/options';

  return WPOptionModel;

})(App.Models.ApiModel);



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Models/WPUserMetaModel.coffee":[function(require,module,exports){
'use strict';
var App,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.Models.WPUserMetaModel = (function(_super) {
  __extends(WPUserMetaModel, _super);

  function WPUserMetaModel() {
    return WPUserMetaModel.__super__.constructor.apply(this, arguments);
  }

  WPUserMetaModel.prototype.apiUrl = '1/site/usermeta';

  return WPUserMetaModel;

})(App.Models.ApiModel);



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/Controllers/AdminController.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSAdmin', function(SSAdmin, App, Backbone, Marionette, $, _) {
  return SSAdmin.Controllers.AdminController = (function(_super) {
    __extends(AdminController, _super);

    function AdminController() {
      this.resetTrashToggle = __bind(this.resetTrashToggle, this);
      this.onStart = __bind(this.onStart, this);
      this.initialize = __bind(this.initialize, this);
      return AdminController.__super__.constructor.apply(this, arguments);
    }

    AdminController.prototype.initialize = function() {
      return SSAdmin.on('start', this.onStart);
    };

    AdminController.prototype.onStart = function() {
      var headerView, homeView, loaderView;
      if ($('.ss-header-region').length > 0) {
        App.addRegions({
          header: '.ss-header-region'
        });
        headerView = new SSAdmin.Views.HeaderItemView({
          model: App.SSOptions.reqres.request('options')
        });
        App.header.show(headerView);
      }
      if ($('.ss-home-region').length > 0) {
        App.addRegions({
          home: '.ss-home-region'
        });
        homeView = new SSAdmin.Views.HomeItemView({
          model: new Backbone.Model
        });
        App.home.show(homeView);
      }
      if ($('.ss-loader-region').length > 0) {
        App.addRegions({
          loader: '.ss-loader-region'
        });
        loaderView = new App.Views.LoaderItemView({
          model: new Backbone.Model
        });
        App.loader.show(loaderView);
        return loaderView.stopSpinner();
      }
    };

    AdminController.prototype.resetTrashToggle = function() {
      if ((App.header.currentView != null) && App.header.currentView instanceof SSAdmin.Views.HeaderItemView) {
        return App.header.currentView.resetTrashToggle();
      }
    };

    return AdminController;

  })(Backbone.Marionette.Controller);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/SSAdmin.coffee":[function(require,module,exports){
'use strict';
var App;

App = require('app');

App.module('SSAdmin', function(SSAdmin, App, Backbone, Marionette, $, _) {
  SSAdmin.Controllers = {};
  SSAdmin.Models = {};
  SSAdmin.Collections = {};
  SSAdmin.Views = {};
  SSAdmin.Layouts = {};
  SSAdmin.Routers = {};
  SSAdmin.Templates = {};
  SSAdmin.vent = new Backbone.Wreqr.EventAggregator();
  SSAdmin.commands = new Backbone.Wreqr.Commands();
  return SSAdmin.reqres = new Backbone.Wreqr.RequestResponse();
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/Templates/HeaderItemViewTemplate.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"ss-header-inner\">\n  <div class=\"ss-logo\">\n    <a href=\"http://socialstreams.com/\" target=\"_blank\">SocialStreams</a>\n  </div><!-- .ss-logo -->\n  <div class=\"ss-header-actions\">\n    <a href=\"javascript:void(0);\" class=\"ss-settings-toggle\"><i class=\"ss-icon-cog\"></i> <span class=\"ss-inner-text\">Settings</span></a>\n    <a href=\"javascript:void(0);\" class=\"ss-trash-toggle\"><i class=\"ss-icon-trash-o\"></i> <span class=\"ss-inner-text\">View Trash</span></a>\n  </div><!-- .ss-header-actions -->\n</div>\n";
  },"useData":true});

},{"hbsfy/runtime":"/srv/social-streams/releases/tmp/social-streams/node_modules/hbsfy/runtime.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/Templates/HomeItemViewTemplate.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<img class=\"home-logo\" alt=\"home-logo\" width=\"330\" src=\"data:image/png;base64,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\" />\n<div class=\"home-text\">Start by adding a social channel:</div>\n<div class=\"home-big-buttons\">\n  <a href=\"javascript:void(0)\" class=\"home-big-button big-button-twitter\" data-service=\"twitter\"><i class=\"ss-icon-twitter\"></i></a>\n  <a href=\"javascript:void(0)\" class=\"home-big-button big-button-instagram\" data-service=\"instagram\"><i class=\"ss-icon-instagram\"></i></a>\n</div>\n";
  },"useData":true});

},{"hbsfy/runtime":"/srv/social-streams/releases/tmp/social-streams/node_modules/hbsfy/runtime.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/Views/HeaderItemView.coffee":[function(require,module,exports){
(function (global){
'use strict';
var App, alertify,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

alertify = (typeof window !== "undefined" ? window.alertify : typeof global !== "undefined" ? global.alertify : null);

App.module('SSAdmin', function(SSAdmin, App, Backbone, Marionette, $, _) {
  return SSAdmin.Views.HeaderItemView = (function(_super) {
    __extends(HeaderItemView, _super);

    function HeaderItemView() {
      this.resetTrashToggle = __bind(this.resetTrashToggle, this);
      this.click__toggleTrash = __bind(this.click__toggleTrash, this);
      this.click__toggleModeration = __bind(this.click__toggleModeration, this);
      this.click__toggleSettings = __bind(this.click__toggleSettings, this);
      return HeaderItemView.__super__.constructor.apply(this, arguments);
    }

    HeaderItemView.prototype.template = require('../Templates/HeaderItemViewTemplate');

    HeaderItemView.prototype.className = 'ss-header';

    HeaderItemView.prototype.events = {
      'click .ss-settings-toggle': 'click__toggleSettings',
      'click .ss-trash-toggle': 'click__toggleTrash'
    };

    HeaderItemView.prototype.click__toggleSettings = function() {
      var alertMessage;
      alertify.alert().setting({
        onshow: (function(_this) {
          return function() {
            return $('.moderation-toggle').on('click', function() {
              return _this.click__toggleModeration();
            });
          };
        })(this)
      });
      alertMessage = '<span> <strong>Auto-Approve </strong> is </span>';
      if (this.model.get('moderation')) {
        alertMessage += '<button class="moderation-toggle btn btn-info">OFF</button> <button class="moderation-toggle btn btn-default">ON</button>';
      } else {
        alertMessage += '<button class="moderation-toggle btn btn-default">OFF</button> <button class="moderation-toggle btn btn-info">ON</button>';
      }
      return alertify.alert('<h3><i class="ss-icon-cog"></i> Settings </h3>', alertMessage);
    };

    HeaderItemView.prototype.click__toggleModeration = function() {
      var alertMessage;
      alertify.closeAll();
      alertMessage = '<h1><i class="ss-icon-refresh"></i></h1>';
      if (this.model.get('moderation')) {
        alertMessage += '<h3>Future posts will now automatically be published.</h3><p>Previously saved content will not change</p>';
      } else {
        alertMessage += '<h3>Future posts will now need manual approval before being published.</h3><p>Previously saved content will not change</p>';
      }
      return alertify.confirm('', alertMessage, (function(_this) {
        return function() {
          _this.model.toggleAttribute('moderation');
          return _this.model.save();
        };
      })(this), (function(_this) {
        return function() {};
      })(this));
    };

    HeaderItemView.prototype.click__toggleTrash = function(event) {
      var $target, fetchData, fetchOptions, iconClass, innerText, postFetchCommand;
      if ((App.SSSearch == null) || (App.SSPosts == null)) {
        return;
      }
      $target = this.$('.ss-trash-toggle');
      if ((this.showingTrash != null) && this.showingTrash === true) {
        this.showingTrash = false;
      } else {
        this.showingTrash = true;
      }
      fetchOptions = {};
      fetchData = {};
      iconClass = 'ss-icon-trash-o';
      innerText = 'View Trash';
      postFetchCommand = 'fetchServerPosts';
      fetchData.status = ['publish', 'draft'];
      if (this.showingTrash) {
        fetchData.status = 'trash';
        iconClass = 'ss-icon-level-up';
        innerText = "Go Back";
        this.prevSearchAction = App.SSSearch.reqres.request('action');
        App.SSSearch.commands.execute('setAction', '');
      }
      if (!this.showingTrash && (this.prevSearchAction != null) && this.prevSearchAction === 'publish') {
        postFetchCommand = 'fetchApiPosts';
      }
      fetchOptions.success = (function(_this) {
        return function() {
          var action, postsCollection;
          App.loader.currentView.stopSpinner();
          if (!_this.showingTrash && (_this.prevSearchAction != null)) {
            action = '';
            switch (_this.prevSearchAction) {
              case 'view':
              case 'search':
                postsCollection = App.SSPosts.reqres.request('postsCollection');
                break;
              default:
                postsCollection = App.SSPosts.reqres.request('apiPostsCollection');
            }
            if (postsCollection.length > 0) {
              action = _this.prevSearchAction;
            }
            return App.SSSearch.commands.execute('setAction', action);
          }
        };
      })(this);
      App.posts.close();
      App.loader.currentView.startSpinner();
      $target.find('i').attr('class', iconClass);
      $target.find('.ss-inner-text').text(innerText);
      return App.SSPosts.commands.execute(postFetchCommand, fetchData, fetchOptions);
    };

    HeaderItemView.prototype.resetTrashToggle = function() {
      var $target, iconClass, innerText;
      this.showingTrash = false;
      this.prevSearchAction = null;
      $target = this.$('.ss-trash-toggle');
      iconClass = 'ss-icon-trash-o';
      innerText = 'View Trash';
      $target.find('i').attr('class', iconClass);
      return $target.find('.ss-inner-text').text(innerText);
    };

    return HeaderItemView;

  })(App.Views.BaseItemView);
});



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Templates/HeaderItemViewTemplate":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/Templates/HeaderItemViewTemplate.hbs","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/Views/HomeItemView.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSAdmin', function(SSAdmin, App, Backbone, Marionette, $, _) {
  return SSAdmin.Views.HomeItemView = (function(_super) {
    __extends(HomeItemView, _super);

    function HomeItemView() {
      this.login = __bind(this.login, this);
      return HomeItemView.__super__.constructor.apply(this, arguments);
    }

    HomeItemView.prototype.template = require('../Templates/HomeItemViewTemplate');

    HomeItemView.prototype.className = 'ss-home';

    HomeItemView.prototype.events = {
      'click .home-big-button': 'login'
    };

    HomeItemView.prototype.login = function(event) {
      if (App.SSAuth == null) {
        return;
      }
      return App.SSAuth.commands.execute('login', $(event.currentTarget).attr('data-service'));
    };

    return HomeItemView;

  })(App.Views.BaseItemView);
});



},{"../Templates/HomeItemViewTemplate":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/Templates/HomeItemViewTemplate.hbs","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/ssAdminMain.coffee":[function(require,module,exports){
'use strict';
var App;

App = require('app');

require('./SSAdmin');

require('./Views/HeaderItemView');

require('./Views/HomeItemView');

require('./Controllers/AdminController');

App.module('SSAdmin', function(SSAdmin, App, Backbone, Marionette, $, _) {
  return SSAdmin.addInitializer(function() {
    var controller;
    controller = new SSAdmin.Controllers.AdminController();

    /*
    Define Module API
     */
    return SSAdmin.commands.setHandler('resetTrashToggle', controller.resetTrashToggle);
  });
});



},{"./Controllers/AdminController":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/Controllers/AdminController.coffee","./SSAdmin":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/SSAdmin.coffee","./Views/HeaderItemView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/Views/HeaderItemView.coffee","./Views/HomeItemView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAdmin/Views/HomeItemView.coffee","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAuth/Collections/ServicesCollection.coffee":[function(require,module,exports){
'use strict';
var App,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSAuth', function(SSAuth, App, Backbone, Marionette, $, _) {
  return SSAuth.Collections.ServicesCollection = (function(_super) {
    __extends(ServicesCollection, _super);

    function ServicesCollection() {
      return ServicesCollection.__super__.constructor.apply(this, arguments);
    }

    ServicesCollection.prototype.model = SSAuth.Models.ServiceModel;

    ServicesCollection.prototype.apiUrl = '1/site/socialstreams_services';

    return ServicesCollection;

  })(App.Collections.ApiCollection);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAuth/Controllers/AuthController.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSAuth', function(SSAuth, App, Backbone, Marionette, $, _) {
  return SSAuth.Controllers.AuthController = (function(_super) {
    __extends(AuthController, _super);

    function AuthController() {
      this.logout = __bind(this.logout, this);
      this.checkLoginStatus = __bind(this.checkLoginStatus, this);
      this.login = __bind(this.login, this);
      this.getServicesCollection = __bind(this.getServicesCollection, this);
      return AuthController.__super__.constructor.apply(this, arguments);
    }

    AuthController.prototype.getServicesCollection = function() {
      if (this.servicesCollection == null) {
        this.servicesCollection = new SSAuth.Collections.ServicesCollection;
        this.servicesCollection.fetch();
      }
      return this.servicesCollection;
    };

    AuthController.prototype.login = function(service) {
      var access_token, admin_page_url, features, height, left, outerHeight, outerWidth, plugin_version, screenX, screenY, ss_oauth_url, ss_user_id, top, urlArgs, urlString, width;
      ss_oauth_url = App.SSOptions.reqres.request('option', 'ss_oauth_url');
      admin_page_url = App.SSOptions.reqres.request('option', 'admin_page_url');
      ss_user_id = App.SSOptions.reqres.request('option', 'ss_user_id');
      plugin_version = App.SSOptions.reqres.request('option', 'plugin_version');
      access_token = App.SSOptions.reqres.request('option', 'access_token');
      urlArgs = {
        origin_url: encodeURIComponent(admin_page_url),
        ss_user_id: ss_user_id,
        access_token: access_token,
        plugin_version: plugin_version
      };
      urlString = App.Helpers.http.toUrl(ss_oauth_url + '/' + service + '-redirect', urlArgs);
      screenX = (typeof window.screenX !== "undefined" ? window.screenX : window.screenLeft);
      screenY = (typeof window.screenY !== "undefined" ? window.screenY : window.screenTop);
      outerWidth = (typeof window.outerWidth !== "undefined" ? window.outerWidth : document.body.clientWidth);
      outerHeight = (typeof window.outerHeight !== "undefined" ? window.outerHeight : document.body.clientHeight - 22);
      width = 1000;
      height = 600;
      left = parseInt(screenX + ((outerWidth - width) / 2), 10);
      top = parseInt(screenY + ((outerHeight - height) / 2.5), 10);
      features = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
      this.login_win = window.open(urlString, "", features);
      if (window.focus) {
        this.login_win.focus();
      }
      return setTimeout(this.checkLoginStatus, 500);
    };

    AuthController.prototype.checkLoginStatus = function() {
      if (this.login_win == null) {
        return;
      }
      if (!this.login_win.closed) {
        return setTimeout(this.checkLoginStatus, 500);
      } else {
        return window.location.reload();
      }
    };

    AuthController.prototype.logout = function(service) {
      var serviceModel;
      serviceModel = this.getServicesCollection().get(service);
      return serviceModel.save({
        authenticated: false,
        success: function() {
          return setTimeout(function() {
            return window.location.reload();
          }, 400);
        }
      });
    };

    return AuthController;

  })(Backbone.Marionette.Controller);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAuth/Models/ServiceModel.coffee":[function(require,module,exports){
'use strict';
var App,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSAuth', function(SSAuth, App, Backbone, Marionette, $, _) {
  return SSAuth.Models.ServiceModel = (function(_super) {
    __extends(ServiceModel, _super);

    function ServiceModel() {
      return ServiceModel.__super__.constructor.apply(this, arguments);
    }

    ServiceModel.prototype.apiUrl = '1/site/socialstreams_services';

    ServiceModel.prototype.defaults = {
      iconClass: function() {
        return 'ss-icon-' + this.get('id');
      },
      placeholder: function() {
        var output;
        output = '';
        switch (this.get('id')) {
          case 'twitter':
            output = 'Search Twitter for up to 3 keywords';
            break;
          case 'instagram':
            output = 'Search Instagram for only 1 keyword';
        }
        return output;
      },
      types: function() {
        var output;
        output = [];
        switch (this.get('id')) {
          case 'twitter':
            output = [
              {
                value: 'global',
                label: 'Public Twitter'
              }, {
                value: 'user',
                label: 'Search @Your posts'
              }
            ];
            break;
          case 'instagram':
            output = [
              {
                value: 'global',
                label: 'Public Instagram'
              }, {
                value: 'user',
                label: 'Search @Your posts'
              }
            ];
        }
        return output;
      },
      tabindex: function() {
        return this.collection.indexOf(this) + 1;
      },
      explodeQuery: function() {
        var queryArray, service;
        service = this.get('id');
        if (App.SSSearch.reqres.request('searchModel').get(service + 'Query') != null) {
          queryArray = App.SSSearch.reqres.request('searchModel').get(service + 'Query').split(' OR ');
          return queryArray;
        }
      }
    };

    return ServiceModel;

  })(App.Models.ApiModel);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAuth/SSAuth.coffee":[function(require,module,exports){
'use strict';
var App;

App = require('app');

App.module('SSAuth', function(SSAuth, App, Backbone, Marionette, $, _) {
  SSAuth.Controllers = {};
  SSAuth.Models = {};
  SSAuth.Collections = {};
  SSAuth.Views = {};
  SSAuth.Layouts = {};
  SSAuth.Routers = {};
  SSAuth.Templates = {};
  SSAuth.vent = new Backbone.Wreqr.EventAggregator();
  SSAuth.commands = new Backbone.Wreqr.Commands();
  return SSAuth.reqres = new Backbone.Wreqr.RequestResponse();
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAuth/ssAuthMain.coffee":[function(require,module,exports){
'use strict';
var App;

App = require('app');

require('./SSAuth');

require('./Models/ServiceModel');

require('./Collections/ServicesCollection');

require('./Controllers/AuthController');

App.module('SSAuth', function(SSAuth, App, Backbone, Marionette, $, _) {
  return SSAuth.addInitializer(function() {
    var controller;
    controller = new SSAuth.Controllers.AuthController;

    /*
    Define Module API
     */
    SSAuth.reqres.setHandler('servicesCollection', controller.getServicesCollection);
    SSAuth.commands.setHandler('login', controller.login);
    return SSAuth.commands.setHandler('logout', controller.logout);
  });
});



},{"./Collections/ServicesCollection":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAuth/Collections/ServicesCollection.coffee","./Controllers/AuthController":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAuth/Controllers/AuthController.coffee","./Models/ServiceModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAuth/Models/ServiceModel.coffee","./SSAuth":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSAuth/SSAuth.coffee","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/Controllers/OptionsController.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSOptions', function(SSOptions, App, Backbone, Marionette, $, _) {
  return SSOptions.Controllers.OptionsController = (function(_super) {
    __extends(OptionsController, _super);

    function OptionsController() {
      this.getUserMetaModel = __bind(this.getUserMetaModel, this);
      this.getUserMeta = __bind(this.getUserMeta, this);
      this.getOptionsModel = __bind(this.getOptionsModel, this);
      this.getOptions = __bind(this.getOptions, this);
      return OptionsController.__super__.constructor.apply(this, arguments);
    }

    OptionsController.prototype.getOptions = function(key) {
      var optionsModel;
      optionsModel = this.getOptionsModel();
      if (key != null) {
        return optionsModel.get(key);
      } else {
        return optionsModel;
      }
    };

    OptionsController.prototype.getOptionsModel = function() {
      if (this.optionsModel == null) {
        this.optionsModel = new SSOptions.Models.OptionsModel({
          id: 'socialstreams_app_settings'
        });
        this.optionsModel.fetch();
      }
      return this.optionsModel;
    };

    OptionsController.prototype.getUserMeta = function(key) {
      var userMeta;
      userMeta = this.getUserMetaModel();
      if (key != null) {
        return userMeta.get(key);
      } else {
        return userMeta;
      }
    };

    OptionsController.prototype.getUserMetaModel = function() {
      if (this.userMetaModel == null) {
        this.userMetaModel = new SSOptions.Models.UserMetaModel({
          id: 'socialstreams'
        });
        this.userMetaModel.fetch();
      }
      return this.userMetaModel;
    };

    return OptionsController;

  })(Backbone.Marionette.Controller);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/Models/OptionsModel.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSOptions', function(SSOptions, App, Backbone, Marionette, $, _) {
  return SSOptions.Models.OptionsModel = (function(_super) {
    __extends(OptionsModel, _super);

    function OptionsModel() {
      this.onModerationChange = __bind(this.onModerationChange, this);
      this.initialize = __bind(this.initialize, this);
      this.toggleAttribute = __bind(this.toggleAttribute, this);
      return OptionsModel.__super__.constructor.apply(this, arguments);
    }

    OptionsModel.prototype.defaults = {
      app_settings: true,
      moderation: false,
      user_can_moderate: false,
      is_admin: false,
      dev_mode: false,
      ss_api_url: 'https://api.socialstreams.com/',
      ss_oauth_url: 'https://oauth.socialstreams.com/',
      ss_user_id: 'new',
      access_token: 'new',
      time_to_next_cron: false,
      public_page_url: '',
      admin_page_url: '',
      wpRoot: '/'
    };

    OptionsModel.prototype.toggleAttribute = function(attr) {
      return this.set(attr, !this.get(attr));
    };

    OptionsModel.prototype.initialize = function() {
      return this.listenTo(this, 'change:moderation', this.onModerationChange);
    };

    OptionsModel.prototype.onModerationChange = function(model, moderation) {
      return App.SSOptions.vent.trigger('change:moderation', model, moderation);
    };

    return OptionsModel;

  })(App.Models.WPOptionModel);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/Models/UserMetaModel.coffee":[function(require,module,exports){
'use strict';
var App,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSOptions', function(SSOptions, App, Backbone, Marionette, $, _) {
  return SSOptions.Models.UserMetaModel = (function(_super) {
    __extends(UserMetaModel, _super);

    function UserMetaModel() {
      return UserMetaModel.__super__.constructor.apply(this, arguments);
    }

    UserMetaModel.prototype.defaults = {
      publishPopup: false,
      trashPopup: false
    };

    return UserMetaModel;

  })(App.Models.WPUserMetaModel);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/SSOptions.coffee":[function(require,module,exports){
'use strict';
var App;

App = require('app');

App.module('SSOptions', function(SSOptions, App, Backbone, Marionette, $, _) {
  SSOptions.Controllers = {};
  SSOptions.Models = {};
  SSOptions.Collections = {};
  SSOptions.Views = {};
  SSOptions.Layouts = {};
  SSOptions.Routers = {};
  SSOptions.Templates = {};
  SSOptions.vent = new Backbone.Wreqr.EventAggregator();
  SSOptions.commands = new Backbone.Wreqr.Commands();
  return SSOptions.reqres = new Backbone.Wreqr.RequestResponse();
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/ssOptionsMain.coffee":[function(require,module,exports){
'use strict';
var App;

App = require('app');

require('./SSOptions');

require('./Models/OptionsModel');

require('./Models/UserMetaModel');

require('./Controllers/OptionsController');

App.module('SSOptions', function(SSOptions, App, Backbone, Marionette, $, _) {
  return SSOptions.addInitializer(function() {
    var controller;
    controller = new SSOptions.Controllers.OptionsController();

    /*
    Define Module API
     */
    SSOptions.reqres.setHandler('option', controller.getOptions);
    SSOptions.reqres.setHandler('options', controller.getOptions);
    return SSOptions.reqres.setHandler('userMeta', controller.getUserMeta);
  });
});



},{"./Controllers/OptionsController":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/Controllers/OptionsController.coffee","./Models/OptionsModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/Models/OptionsModel.coffee","./Models/UserMetaModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/Models/UserMetaModel.coffee","./SSOptions":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/SSOptions.coffee","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Collections/ApiPostsCollection.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSPosts', function(SSPosts, App, Backbone, Marionette, $, _) {
  return SSPosts.Collections.ApiPostsCollection = (function(_super) {
    __extends(ApiPostsCollection, _super);

    function ApiPostsCollection() {
      this.parse = __bind(this.parse, this);
      return ApiPostsCollection.__super__.constructor.apply(this, arguments);
    }

    ApiPostsCollection.prototype.model = SSPosts.Models.PostModel;

    ApiPostsCollection.prototype.data = {
      perPage: 24,
      cron: 'false'
    };

    ApiPostsCollection.prototype.url = function() {
      var access_token, admin_page_url, data, plugin_version, ss_oauth_url, ss_user_id, url;
      url = App.SSOptions.reqres.request('option', 'ss_api_url');
      ss_oauth_url = App.SSOptions.reqres.request('option', 'ss_oauth_url');
      admin_page_url = App.SSOptions.reqres.request('option', 'admin_page_url');
      ss_user_id = App.SSOptions.reqres.request('option', 'ss_user_id');
      plugin_version = App.SSOptions.reqres.request('option', 'plugin_version');
      access_token = App.SSOptions.reqres.request('option', 'access_token');
      data = {
        origin_url: encodeURIComponent(admin_page_url),
        ss_user_id: ss_user_id,
        access_token: access_token,
        plugin_version: plugin_version
      };
      return App.Helpers.http.toUrl(url, data);
    };

    ApiPostsCollection.prototype.parse = function(response) {
      if (this.length >= 94) {
        return [];
      }
      if (response.search_metadata != null) {
        if (this.data == null) {
          this.data = {};
        }
        this.data.search_metadata = response.search_metadata;
      }
      if ((this.data != null) && (this.data.perPage != null) && response.statuses.length < this.data.perPage) {
        this.hasNext = false;
      }
      return response.statuses;
    };

    return ApiPostsCollection;

  })(App.Collections.InfiniteScrollCollection);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Collections/PostsCollection.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSPosts', function(SSPosts, App, Backbone, Marionette, $, _) {
  return SSPosts.Collections.PostsCollection = (function(_super) {
    __extends(PostsCollection, _super);

    function PostsCollection() {
      this.prevPage = __bind(this.prevPage, this);
      this.nextPage = __bind(this.nextPage, this);
      this.comparator = __bind(this.comparator, this);
      return PostsCollection.__super__.constructor.apply(this, arguments);
    }

    PostsCollection.prototype.model = SSPosts.Models.PostModel;

    PostsCollection.prototype.data = {
      perPage: 24,
      status: 'publish'
    };

    PostsCollection.prototype.apiUrl = '1/site/socialstreams';

    PostsCollection.prototype.comparator = function(a, b) {
      var aId, bId;
      aId = parseInt(a.get('order_id'), 10);
      bId = parseInt(b.get('order_id'), 10);
      if (aId > bId) {
        return -1;
      } else if (aId < bId) {
        return 1;
      } else {
        return 0;
      }
    };

    PostsCollection.prototype.nextPage = function(args) {
      if (args == null) {
        args = {};
      }
      args = _.defaults(args, {
        immediate: true
      });
      if (args.data == null) {
        args.data = {};
      }
      if (this.length > 0) {
        args.data.max_order_id = this.last().get('order_id');
      }
      return this.fetch(args);
    };

    PostsCollection.prototype.prevPage = function(args) {
      if (args == null) {
        args = {};
      }
      args = _.defaults(args, {
        immediate: true
      });
      if (args.data == null) {
        args.data = {};
      }
      if (this.length > 0) {
        args.data.min_order_id = this.first().get('order_id');
      }
      return this.fetch(args);
    };

    return PostsCollection;

  })(App.Collections.InfiniteScrollCollection);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Controllers/AutoReloadController.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSPosts', function(SSPosts, App, Backbone, Marionette, $, _) {
  return SSPosts.Controllers.AutoReloadController = (function(_super) {
    __extends(AutoReloadController, _super);

    function AutoReloadController() {
      this.showInRows = __bind(this.showInRows, this);
      this.autoreloadPoll = __bind(this.autoreloadPoll, this);
      this.initAutoreloadPoll = __bind(this.initAutoreloadPoll, this);
      this.initAutoreloadSocket = __bind(this.initAutoreloadSocket, this);
      this.initAutoreload = __bind(this.initAutoreload, this);
      this.onStart = __bind(this.onStart, this);
      this.initialize = __bind(this.initialize, this);
      return AutoReloadController.__super__.constructor.apply(this, arguments);
    }

    AutoReloadController.prototype.autoReloadInterval = 15 * 60 * 1000;

    AutoReloadController.prototype.initialize = function() {
      return SSPosts.on('start', this.onStart);
    };

    AutoReloadController.prototype.onStart = function() {
      var models, postsCompositeView;
      if ($('body').hasClass('page-template-template-socialstream-fullscreen-php')) {
        this.initAutoreload();
        postsCompositeView = SSPosts.reqres.request('postsCompositeView');
        models = [];
        postsCompositeView.collection.each(function(model) {
          return models.push(model);
        });
        return this.showInRows(postsCompositeView, models, {
          interval: 1500
        });
      }
    };

    AutoReloadController.prototype.initAutoreload = function() {
      var autoreloadMethod;
      autoreloadMethod = '';
      if (autoreloadMethod === 'websocket') {
        return this.initAutoreloadSocket();
      } else {
        return this.initAutoreloadPoll();
      }
    };

    AutoReloadController.prototype.initAutoreloadSocket = function() {};

    AutoReloadController.prototype.initAutoreloadPoll = function() {
      return setInterval(this.autoreloadPoll, this.autoReloadInterval);
    };

    AutoReloadController.prototype.autoreloadPoll = function() {
      var compositeView, firstOrderID;
      compositeView = SSPosts.reqres.request('postsCompositeView');
      if ((compositeView.loading != null) && compositeView.loading) {
        return;
      }
      compositeView.loading = true;
      firstOrderID = parseInt(compositeView.children.findByIndex(0).model.get('order_id'), 10);
      return compositeView.collection.prevPage({
        remove: false,
        data: {
          perPage: -1
        },
        success: (function(_this) {
          return function(collection, res) {
            var models;
            if (collection.length === 0) {
              return;
            }
            compositeView.render();
            models = [];
            collection.each(function(model) {
              if (parseInt(model.get('order_id'), 10) > firstOrderID) {
                return models.push(model);
              }
            });
            return _this.showInRows(compositeView, models);
          };
        })(this)
      });
    };

    AutoReloadController.prototype.showInRows = function(compositeView, models, args) {
      var cols, layout, newViews, newViewsGroups, showInterval;
      if (args == null) {
        args = {};
      }
      args = _.defaults(args, {});
      newViews = [];
      _.each(models, function(model) {
        var childView;
        childView = compositeView.children.findByModel(model);
        childView.$el.hide();
        return newViews.push(childView);
      });
      layout = $('.ss-wrapper').attr('data-layout');
      cols = 1;
      switch (layout) {
        case 'small':
          cols = 2;
          break;
        case 'medium':
          cols = 3;
          break;
        case 'large':
          cols = 4;
      }
      newViewsGroups = [];
      _.each(newViews.reverse(), function(newView, newViewIndex) {
        var groupIndex;
        groupIndex = Math.floor(newViewIndex / cols);
        if (newViewsGroups[groupIndex] == null) {
          newViewsGroups.push([]);
        }
        return newViewsGroups[groupIndex].push(newView);
      });
      if (args.interval != null) {
        showInterval = args.interval;
      } else {
        showInterval = Math.round(this.autoReloadInterval / (newViewsGroups.length + 1));
      }
      _.each(newViewsGroups, function(newViewGroup, newViewGroupIndex) {
        return setTimeout(function() {
          if (newViewGroup.length === cols) {
            return _.each(newViewGroup, function(newView) {
              return newView.$el.slideDown(500);
            });
          } else {
            return _.each(newViewGroup, function(newView) {
              return newView.$el.fadeIn(800);
            });
          }
        }, newViewGroupIndex * showInterval);
      });
      return compositeView.loading = false;
    };

    return AutoReloadController;

  })(Backbone.Marionette.Controller);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Controllers/PostsController.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSPosts', function(SSPosts, App, Backbone, Marionette, $, _) {
  return SSPosts.Controllers.PostsController = (function(_super) {
    __extends(PostsController, _super);

    function PostsController() {
      this.publishApiPosts = __bind(this.publishApiPosts, this);
      this.fetchApiPosts = __bind(this.fetchApiPosts, this);
      this.fetchServerPosts = __bind(this.fetchServerPosts, this);
      this.doingBatchSave = __bind(this.doingBatchSave, this);
      this.getApiPostsCompositeView = __bind(this.getApiPostsCompositeView, this);
      this.getPostsCompositeView = __bind(this.getPostsCompositeView, this);
      this.getAllPostsCollection = __bind(this.getAllPostsCollection, this);
      this.getApiPostsCollection = __bind(this.getApiPostsCollection, this);
      this.getPostsCollection = __bind(this.getPostsCollection, this);
      this.onStart = __bind(this.onStart, this);
      this.initialize = __bind(this.initialize, this);
      return PostsController.__super__.constructor.apply(this, arguments);
    }

    PostsController.prototype.initialize = function() {
      return SSPosts.on('start', this.onStart);
    };

    PostsController.prototype.onStart = function() {
      if ($('.ss-posts-region').length > 0) {
        App.addRegions({
          posts: '.ss-posts-region'
        });
      }

      /*
      Render posts for the first time, if any posts are found in the DOM.
       */
      if ($('.ss-wrapper').length > 0) {
        this.getPostsCompositeView().renderFromDOM($('.ss-wrapper'));
        if (App.posts != null) {
          return App.posts.currentView = this.getPostsCompositeView();
        }
      }
    };

    PostsController.prototype.getPostsCollection = function() {
      if (this.postsCollection == null) {
        this.postsCollection = new SSPosts.Collections.PostsCollection();
        if ($('.bwapi-call-data[data-id="socialstreams_top"]').length > 0) {
          this.postsCollection.data.requestID = 'socialstreams_top';
        }
        if ($('.ss-admin').length > 0) {
          this.postsCollection.data.status = ['draft', 'publish'];
        }
        this.postsCollection.fetch();
      }
      return this.postsCollection;
    };

    PostsController.prototype.getApiPostsCollection = function() {
      if (this.apiPostsCollection == null) {
        this.apiPostsCollection = new SSPosts.Collections.ApiPostsCollection();
      }
      return this.apiPostsCollection;
    };

    PostsController.prototype.getAllPostsCollection = function() {
      if (this.allPostsCollection == null) {
        this.allPostsCollection = new SSPosts.Collections.PostsCollection();
        this.allPostsCollection.data = {
          requestID: 'socialstreams_all',
          perPage: -1,
          status: ['publish', 'draft', 'trash'],
          fields: ['id', 'status', 'vendor_id', 'service_name']
        };
        this.allPostsCollection.fetch();
      }
      return this.allPostsCollection;
    };

    PostsController.prototype.getPostsCompositeView = function() {
      if ((this.postsCompositeView == null) || this.postsCompositeView.isClosed) {
        this.postsCompositeView = new SSPosts.Views.PostsCompositeView({
          collection: this.getPostsCollection(),
          model: new SSPosts.Models.PostsLayoutModel
        });
      }
      return this.postsCompositeView;
    };

    PostsController.prototype.getApiPostsCompositeView = function() {
      if ((this.apiPostsCompositeView == null) || this.apiPostsCompositeView.isClosed) {
        this.apiPostsCompositeView = new SSPosts.Views.PostsCompositeView({
          collection: this.getApiPostsCollection(),
          model: new SSPosts.Models.PostsLayoutModel
        });
      }
      return this.apiPostsCompositeView;
    };

    PostsController.prototype.doingBatchSave = function(value) {
      if (this.doingBatchSaveFlag == null) {
        this.doingBatchSaveFlag = false;
      }
      if (value != null) {
        this.doingBatchSaveFlag = value;
      }
      return this.doingBatchSaveFlag;
    };

    PostsController.prototype.fetchServerPosts = function(data, options) {
      var postsCollection;
      postsCollection = this.getPostsCollection();
      if (postsCollection.data == null) {
        postsCollection.data = {};
      }
      if (data != null) {
        postsCollection.data = _.extend({}, postsCollection.data, data);
      }
      postsCollection.hasNext = true;
      postsCollection.reset();
      return postsCollection.fetch({
        success: (function(_this) {
          return function() {
            var postsCompositeView;
            postsCompositeView = _this.getPostsCompositeView();
            if (!postsCompositeView.isRendered) {
              App.posts.show(postsCompositeView);
            }
            if ((options != null) && (options.success != null) && typeof options.success === 'function') {
              return options.success();
            }
          };
        })(this)
      });
    };

    PostsController.prototype.fetchApiPosts = function(data, options) {
      var apiPostsCollection;
      apiPostsCollection = this.getApiPostsCollection();
      if (apiPostsCollection.data == null) {
        apiPostsCollection.data = {};
      }
      if (data != null) {
        apiPostsCollection.data = _.extend({}, apiPostsCollection.data, data);
      }
      apiPostsCollection.hasNext = true;
      if (apiPostsCollection.data.search_metadata != null) {
        delete apiPostsCollection.data.search_metadata;
      }
      apiPostsCollection.reset();
      return apiPostsCollection.fetch({
        success: (function(_this) {
          return function() {
            var apiPostsCompositeView;
            apiPostsCompositeView = _this.getApiPostsCompositeView();
            if (!apiPostsCompositeView.isRendered) {
              App.posts.show(apiPostsCompositeView);
            }
            if ((options != null) && (options.success != null) && typeof options.success === 'function') {
              return options.success();
            }
          };
        })(this)
      });
    };

    PostsController.prototype.publishApiPosts = function() {
      var apiPostsCollection;
      apiPostsCollection = this.getApiPostsCollection();
      if (apiPostsCollection.length > 0) {
        return apiPostsCollection.each(function(apiPostModel) {
          return apiPostModel.save({}, {
            batch: true
          });
        });
      }
    };

    return PostsController;

  })(Backbone.Marionette.Controller);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Models/PostModel.coffee":[function(require,module,exports){
(function (global){
'use strict';
var App, moment,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

moment = (typeof window !== "undefined" ? window.moment : typeof global !== "undefined" ? global.moment : null);

App.module('SSPosts', function(SSPosts, App, Backbone, Marionette, $, _) {
  return SSPosts.Models.PostModel = (function(_super) {
    __extends(PostModel, _super);

    function PostModel() {
      this.getSavedPost = __bind(this.getSavedPost, this);
      this.onModerationChange = __bind(this.onModerationChange, this);
      this.initialize = __bind(this.initialize, this);
      return PostModel.__super__.constructor.apply(this, arguments);
    }

    PostModel.prototype.apiUrl = '1/site/socialstreams';

    PostModel.prototype.initialize = function() {
      var id, savedPost;
      if ((App.SSOptions != null) && (App.SSOptions.vent != null)) {
        this.listenTo(App.SSOptions.vent, 'change:moderation', this.onModerationChange);
      }
      if ((this.id == null) || this.id === '') {
        savedPost = this.getSavedPost();
        if (savedPost != null) {
          return id = savedPost.get('id');
        }
      }
    };

    PostModel.prototype.onModerationChange = function(model, moderation) {
      var status;
      if ((this.id == null) || this.id === '') {
        status = 'publish';
        if (moderation) {
          status = 'draft';
        }
        return this.set('status', status);
      }
    };

    PostModel.prototype.parse = function(data) {
      var computedFields, dupes;
      computedFields = ['formatted_time', 'avatar', 'permalink', 'user_link', 'formatted_caption', 'image', 'video', 'has_image', 'has_video', 'has_media', 'actions', 'status_icon'];
      _.each(computedFields, function(key) {
        if (data[key] != null) {
          return delete data[key];
        }
      });
      if (this.collection != null) {
        dupes = this.collection.where({
          vendor_id: data.vendor_id,
          service_name: data.service_name
        });
        if (dupes.length > 1) {
          data.duplicate = true;
        }
      }
      return data;
    };

    PostModel.prototype.defaults = {
      duplicate: false,
      status: function() {
        var moderation, output, savedPost;
        output = 'draft';
        if (App.SSOptions != null) {
          moderation = App.SSOptions.reqres.request('option', 'moderation');
          if ((moderation != null) && moderation === false) {
            output = 'publish';
          }
        }
        savedPost = this.getSavedPost();
        if (savedPost != null) {
          output = savedPost.get('status');
        }
        return output;
      },
      formatted_time: function() {
        return App.Helpers.date.parseTimestamp(this.get('timestamp'));
      },
      screen_name: function() {
        var output;
        output = '';
        switch (this.get('service_name')) {
          case 'twitter':
            output = this.get('user').screen_name;
            break;
          case 'instagram':
            output = this.get('user').username;
        }
        return output;
      },
      avatar: function() {
        var output;
        output = '';
        switch (this.get('service_name')) {
          case 'twitter':
            output = this.get('user').profile_image_url_https;
            break;
          case 'instagram':
            output = this.get('user').profile_picture;
        }
        return output;
      },
      permalink: function() {
        var output;
        output = '';
        switch (this.get('service_name')) {
          case 'twitter':
            output = "https://www.twitter.com/" + this.get('screen_name') + "/status/" + this.get('vendor_id');
            break;
          case 'instagram':
            output = this.get('link');
        }
        return output;
      },
      user_link: function() {
        var output;
        output = '';
        switch (this.get('service_name')) {
          case 'twitter':
            output = "https://www.twitter.com/" + this.get('screen_name');
            break;
          case 'instagram':
            output = "https://www.instagram.com/" + this.get('screen_name');
        }
        return output;
      },
      formatted_caption: function() {
        var caption, output;
        output = '';
        switch (this.get('service_name')) {
          case 'twitter':
            output = this.get('text');
            break;
          case 'instagram':
            caption = this.get('caption');
            if ((caption != null) && (caption.text != null)) {
              output = caption.text;
            }
        }
        output = this.parseUrls(output);
        output = this.parseMentions(output);
        output = this.parseHashtags(output);
        output = this.addLinebreaks(output);
        return output;
      },
      image: function() {
        var entities, output;
        output = '';
        switch (this.get('service_name')) {
          case 'twitter':
            entities = this.get('entities');
            if ((entities != null) && (entities.media != null) && entities.media.length > 0) {
              output = entities.media[0].media_url_https;
            }
            break;
          case 'instagram':
            output = this.get('images').standard_resolution.url;
        }
        return output;
      },
      video: function() {
        var output, videos;
        output = '';
        switch (this.get('service_name')) {
          case 'instagram':
            videos = this.get('videos');
            if ((videos != null) && (videos.standard_resolution != null) && (videos.standard_resolution.url != null)) {
              output = videos.standard_resolution.url;
            }
        }
        return output;
      },
      has_image: function() {
        return this.get('image') !== '';
      },
      has_video: function() {
        return this.get('video') !== '';
      },
      has_media: function() {
        return this.get('has_image') || this.get('has_video');
      },
      actions: function() {
        var output, user_can_moderate, vendor_id;
        output = '';
        user_can_moderate = false;
        if (App.SSOptions != null) {
          user_can_moderate = App.SSOptions.reqres.request('option', 'user_can_moderate');
        }
        if (user_can_moderate) {
          output += '<a class="ss-post-action ss-publish-btn" href="javascript:void(0);"><i class="ss-icon-check"></i><span class="ss-inner">Publish</span></a>';
          output += '<a class="ss-post-action ss-trash-btn" href="javascript:void(0);"><i class="ss-icon-trash-o"></i><span class="ss-inner">Trash</span></a>';
        } else {
          switch (this.get('service_name')) {
            case 'twitter':
              vendor_id = this.get('vendor_id');
              output += '<a class="ss-post-action" href="https://twitter.com/intent/tweet?in_reply_to=' + vendor_id + '&via=SocialStreamsWP&related=SocialStreamsWP" target="_blank"><i class="ss-icon-reply"></i><span class="ss-inner">Reply</span></a>';
              output += '<a class="ss-post-action" href="https://twitter.com/intent/retweet?tweet_id=' + vendor_id + '&related=SocialStreamsWP" target="_blank"><i class="ss-icon-retweet"></i><span class="ss-inner">Retweet</span></a>';
          }
        }
        return output;
      },
      status_icon: function() {
        var output, user_can_moderate;
        output = '';
        user_can_moderate = false;
        if (App.SSOptions != null) {
          user_can_moderate = App.SSOptions.reqres.request('option', 'user_can_moderate');
        }
        if (user_can_moderate) {
          switch (this.get('status')) {
            case 'publish':
              output += '<i class="ss-icon-check"></i>';
              break;
            case 'draft':
              output += '<i class="ss-icon-bw bw-draft-icon"></i>';
              break;
            case 'trash':
              output += '<i class="ss-icon-trash-o"></i>';
          }
        }
        return output;
      },
      dev_meta: function() {
        var dev_mode, output;
        if (App.SSOptions == null) {
          return;
        }
        dev_mode = App.SSOptions.reqres.request('option', 'dev_mode');
        if ((dev_mode == null) || !dev_mode) {
          return;
        }
        output = '';
        output += '<p class="ss-post-id">id: ' + this.get('id') + '</p>';
        output += '<p class="ss-post-order_id">order_id: ' + this.get('order_id') + '</p>';
        output += '<p class="ss-post-vendor_id">vendor_id: ' + this.get('vendor_id') + '</p>';
        output += '<p class="ss-post-service_name">service_name: ' + this.get('service_name') + '</p>';
        output += '<p class="ss-post-timestamp">timestamp: ' + this.get('timestamp') + '</p>';
        output += '<p class="ss-post-date">date: ' + moment.unix(this.get('timestamp')).format('YYYY-MM-DD HH:mm:ss') + '</p>';
        return output;
      }
    };

    PostModel.prototype.parseUrls = function(text) {
      text = text.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/g, function(uri) {
        return '<a href="' + uri + '" target="_blank">' + uri + '</a>';
      });
      return text;
    };

    PostModel.prototype.parseMentions = function(text) {
      switch (this.get('service_name')) {
        case 'twitter':
          text = text.replace(/[@]+([A-Za-z0-9-_]+)/g, function(match, handle) {
            return '<a href="https://twitter.com/' + handle + '" target="_blank">@' + handle + '</a>';
          });
          break;
        case 'instagram':
          text = text.replace(/[@]+([A-Za-z0-9-_]+)/g, function(match, handle) {
            return '<a href="https://instagram.com/' + handle + '" target="_blank">@' + handle + '</a>';
          });
      }
      return text;
    };

    PostModel.prototype.parseHashtags = function(text) {
      switch (this.get('service_name')) {
        case 'twitter':
          text = text.replace(/[\s]?[#]+([A-Za-z0-9-_]+)/g, function(match, hashtag) {
            return ' <a href="https://twitter.com/hashtag/' + hashtag + '" target="_blank">#' + hashtag + '</a>';
          });
          break;
        case 'instagram':
          text = text.replace(/[\s]?[#]+([A-Za-z0-9-_]+)/g, function(match, hashtag) {
            return ' #' + hashtag;
          });
      }
      return text;
    };

    PostModel.prototype.addLinebreaks = function(text) {
      switch (this.get('service_name')) {
        case 'twitter':
          text = text.replace(/\r?\n/g, '<br />');
          break;
        case 'instagram':
          text = text.replace(/\r?\n/g, ' ');
      }
      return text;
    };

    PostModel.prototype.getSavedPost = function() {
      var allPostsCollection;
      return null;
      if (this.savedPost == null) {
        allPostsCollection = SSPosts.reqres.request('allPostsCollection');
        this.savedPost = allPostsCollection.findWhere({
          vendor_id: this.get('vendor_id'),
          service_name: this.get('service_name')
        });
      }
      return this.savedPost;
    };

    return PostModel;

  })(App.Models.ApiModel);
});



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Models/PostsLayoutModel.coffee":[function(require,module,exports){
'use strict';
var App,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSPosts', function(SSPosts, App, Backbone, Marionette, $, _) {
  return SSPosts.Models.PostsLayoutModel = (function(_super) {
    __extends(PostsLayoutModel, _super);

    function PostsLayoutModel() {
      return PostsLayoutModel.__super__.constructor.apply(this, arguments);
    }

    PostsLayoutModel.prototype.defaults = {
      width: null,
      layout: function() {
        var layout, parentWidth;
        parentWidth = this.get('width');
        if (parentWidth == null) {
          return;
        }
        layout = '';
        if (parentWidth <= 600) {
          layout = 'x-small';
        } else if (parentWidth > 600 && parentWidth <= 900) {
          layout = 'small';
        } else if (parentWidth > 900 && parentWidth <= 1250) {
          layout = 'medium';
        } else if (parentWidth > 1250) {
          layout = 'large';
        }
        return layout;
      }
    };

    return PostsLayoutModel;

  })(App.Models.ApiModel);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/SSPosts.coffee":[function(require,module,exports){
'use strict';
var App;

App = require('app');

App.module('SSPosts', function(SSPosts, App, Backbone, Marionette, $, _) {
  SSPosts.Controllers = {};
  SSPosts.Models = {};
  SSPosts.Collections = {};
  SSPosts.Views = {};
  SSPosts.Layouts = {};
  SSPosts.Routers = {};
  SSPosts.Templates = {};
  SSPosts.vent = new Backbone.Wreqr.EventAggregator();
  SSPosts.commands = new Backbone.Wreqr.Commands();
  return SSPosts.reqres = new Backbone.Wreqr.RequestResponse();
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Templates/PostItemViewTemplate.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "  <div class=\"ss-meta\">\n    ";
  stack1 = ((helper = (helper = helpers.dev_meta || (depth0 != null ? depth0.dev_meta : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dev_meta","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n  </div><!-- .ss-meta -->\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "  <div class=\"ss-post-media\">\n    <span class=\"ss-post-social-icon\"><i class=\"ss-icon-"
    + escapeExpression(((helper = (helper = helpers.service_name || (depth0 != null ? depth0.service_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"service_name","hash":{},"data":data}) : helper)))
    + " ss-watermark\"></i></span>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.has_video : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div><!-- .ss-post-media -->\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      <video class=\"ss-post-video\" muted autoplay loop poster=\""
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + "\" data-image=\""
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + "\" data-src=\""
    + escapeExpression(((helper = (helper = helpers.video || (depth0 != null ? depth0.video : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"video","hash":{},"data":data}) : helper)))
    + "\" /><!-- video.ss-post-image -->\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      <div class=\"ss-post-image-wrapper\" style=\"background-image:url("
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + ");\">\n        <img src=\""
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + "\" class=\"ss-post-image\" />\n      </div><!-- .ss-post-image-wrapper -->\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"ss-post-inner\">\n\n  <span class=\"ss-post-spacer\"></span>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.dev_meta : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  <div class=\"ss-post-content\">\n    <span class=\"ss-post-social-icon\"><i class=\"ss-icon-"
    + escapeExpression(((helper = (helper = helpers.service_name || (depth0 != null ? depth0.service_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"service_name","hash":{},"data":data}) : helper)))
    + "\"></i></span>\n    <div class=\"ss-post-content-inner\">\n      ";
  stack1 = ((helper = (helper = helpers.formatted_caption || (depth0 != null ? depth0.formatted_caption : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formatted_caption","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    </div>\n  </div><!-- .ss-post-content -->\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.has_media : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  <div class=\"ss-post-actions\">\n    ";
  stack1 = ((helper = (helper = helpers.actions || (depth0 != null ? depth0.actions : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"actions","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  </div><!-- .ss-post-actions -->\n\n  <div class=\"ss-post-status\">\n    ";
  stack1 = ((helper = (helper = helpers.status_icon || (depth0 != null ? depth0.status_icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status_icon","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n  </div><!-- .ss-post-status -->\n\n  <div class=\"ss-post-footer\">\n    <a href=\""
    + escapeExpression(((helper = (helper = helpers.user_link || (depth0 != null ? depth0.user_link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"user_link","hash":{},"data":data}) : helper)))
    + "\" class=\"ss-avatar\" target=\"_blank\"> <img src=\""
    + escapeExpression(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar","hash":{},"data":data}) : helper)))
    + "\"/> </a>\n    <a href=\""
    + escapeExpression(((helper = (helper = helpers.user_link || (depth0 != null ? depth0.user_link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"user_link","hash":{},"data":data}) : helper)))
    + "\" class=\"ss-handle\" target=\"_blank\">@"
    + escapeExpression(((helper = (helper = helpers.screen_name || (depth0 != null ? depth0.screen_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"screen_name","hash":{},"data":data}) : helper)))
    + "</a>\n    <a href=\""
    + escapeExpression(((helper = (helper = helpers.permalink || (depth0 != null ? depth0.permalink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"permalink","hash":{},"data":data}) : helper)))
    + "\" class=\"ss-post-time\" target=\"_blank\">\n      <span data-livestamp=\""
    + escapeExpression(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timestamp","hash":{},"data":data}) : helper)))
    + "\"></span>\n    </a>\n  </div><!-- .ss-post-footer -->\n\n</div><!-- .ss-post-inner -->\n";
},"useData":true});

},{"hbsfy/runtime":"/srv/social-streams/releases/tmp/social-streams/node_modules/hbsfy/runtime.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Templates/PostsCompositeViewTemplate.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"ss-posts\"></div>\n\n<div class=\"ss-infinite-scroll-loader\"><div class=\"ss-inner-text\">No more content to load.</div></div>\n\n<div class=\"ss-footer\">\n  <div class=\"ss-credits\">\n    <span class=\"ss-powered-by\">Powered by</span>\n    <a href=\"http://socialstreams.com\" class=\"ss-footer-logo\" target=\"_blank\">\n       <span class=\"ss-footer-logo-text\">Social Streams</span>\n    </a>\n  </div>\n</div>\n\n";
  },"useData":true});

},{"hbsfy/runtime":"/srv/social-streams/releases/tmp/social-streams/node_modules/hbsfy/runtime.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Views/PostItemView.coffee":[function(require,module,exports){
(function (global){
'use strict';
var App, Modernizr, alertify,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

Modernizr = require('modernizr');

alertify = (typeof window !== "undefined" ? window.alertify : typeof global !== "undefined" ? global.alertify : null);

App.module('SSPosts', function(SSPosts, App, Backbone, Marionette, $, _) {
  return SSPosts.Views.PostItemView = (function(_super) {
    __extends(PostItemView, _super);

    function PostItemView() {
      this.onStatusChange = __bind(this.onStatusChange, this);
      this.onMouseover = __bind(this.onMouseover, this);
      this.onClickToggleStatus = __bind(this.onClickToggleStatus, this);
      this.onTap = __bind(this.onTap, this);
      this.onClickAnchor = __bind(this.onClickAnchor, this);
      this.onRender = __bind(this.onRender, this);
      this.attributes = __bind(this.attributes, this);
      this.className = __bind(this.className, this);
      this.initialize = __bind(this.initialize, this);
      return PostItemView.__super__.constructor.apply(this, arguments);
    }

    PostItemView.prototype.template = require('../Templates/PostItemViewTemplate');

    PostItemView.prototype.initialize = function() {
      return this.listenTo(this.model, 'change:status', this.onStatusChange);
    };

    PostItemView.prototype.className = function() {
      var classes, ssOptions;
      classes = ['ss-post'];
      if (App.SSOptions != null) {
        ssOptions = App.SSOptions.reqres.request('options');
        if (ssOptions.get('dev_mode')) {
          classes.push('ss-dev');
        }
      }
      if (this.model.get('has_media')) {
        classes.push('ss-has-media');
      }
      if (this.model.get('has_video')) {
        classes.push('ss-has-video');
      }
      if (this.model.get('duplicate')) {
        classes.push('ss-duplicate');
      }
      classes.push('ss-' + this.model.get('service_name'));
      classes.push('ss-status-' + this.model.get('status'));
      return classes.join(' ');
    };

    PostItemView.prototype.attributes = function() {
      return {
        'data-id': this.model.get('order_id')
      };
    };

    PostItemView.prototype.onRender = function() {
      if (this.model.get('has_video') != null) {
        this.$('video').prop('muted', true);
      }
      if ((Modernizr.touchevents != null) && Modernizr.touchevents === true) {
        this.$el.on('click', 'a', this.onClickAnchor);
        return this.$el.on('tap', this.onTap);
      } else {
        if (this.model.get('has_video') != null) {
          this.$('video').attr("src", this.$('video').data("src"));
        }
        this.$el.on('mouseenter mouseleave', '.ss-post-inner', this.onMouseover);
        return this.$el.on('click', '.ss-publish-btn, .ss-trash-btn', this.onClickToggleStatus);
      }
    };

    PostItemView.prototype.onClickAnchor = function(event) {
      var $target, href, targetAttr;
      $target = $(event.currentTarget);
      $target.addClass('click-fired');
      if ($target.hasClass('ss-publish-btn') || $target.hasClass('ss-trash-btn')) {
        this.onClickToggleStatus(event);
        return;
      }
      href = $target.attr('href');
      targetAttr = $target.attr('target');
      if (targetAttr == null) {
        targetAttr = '';
      }
      return window.open(href, targetAttr);
    };

    PostItemView.prototype.onTap = function(event) {
      var $currentTarget, $target, hasTapClass;
      $target = $(event.target);
      $currentTarget = $(event.currentTarget);
      if ($target.is('a') || $target.parents('a').length > 0) {
        setTimeout(function() {
          if (!$target.hasClass('click-fired')) {
            return $target.removeClass('click-fired').click();
          }
        }, 0);
        return;
      }
      hasTapClass = $currentTarget.hasClass('tap');
      $('.ss-post.tap').removeClass('tap');
      return $currentTarget.toggleClass('tap', !hasTapClass);
    };

    PostItemView.prototype.onClickToggleStatus = function(event) {
      var currentStatus, status;
      event.preventDefault();
      status = 'publish';
      if ($(event.currentTarget).hasClass('ss-trash-btn')) {
        status = 'trash';
      }
      currentStatus = this.model.get('status');
      if (currentStatus === status) {
        this.model.set({
          status: ''
        }, {
          silent: true
        });
        return this.model.set({
          status: status
        });
      } else {
        return this.model.save({
          status: status
        });
      }
    };

    PostItemView.prototype.onMouseover = function(event) {
      var hover;
      hover = false;
      if (event.type === 'mouseenter' || event.type === 'tap') {
        hover = true;
      }
      this.toggleEl(this.$('.ss-post-media'), !hover);
      this.toggleEl(this.$('.ss-post-actions'), hover);
      this.$el.toggleClass('ss-hover', hover);
      if ((Modernizr.touchevents != null) && Modernizr.touchevents === true) {
        return this.$el.parent().toggleClass('tap', hover);
      }
    };

    PostItemView.prototype.toggleEl = function($el, toggle) {
      var animate, cssEnd, cssStart;
      cssStart = {};
      animate = {};
      cssEnd = {};
      if (toggle) {
        cssStart = {
          display: 'block',
          opacity: 0
        };
        animate = {
          opacity: 1
        };
      } else {
        cssStart = {
          display: 'block'
        };
        animate = {
          opacity: 0
        };
        cssEnd = {
          display: 'none'
        };
      }
      return $el.stop(0, 0).css(cssStart).animate(animate, 200, function() {
        return $el.css(cssEnd);
      });
    };

    PostItemView.prototype.onStatusChange = function(model, status) {
      var doingBatchSave, message, moderation, prevStatus, userMeta;
      prevStatus = 'publish';
      if (this.$el.hasClass('ss-status-draft')) {
        prevStatus = 'draft';
      }
      if (this.$el.hasClass('ss-status-trash')) {
        prevStatus = 'trash';
      }
      doingBatchSave = SSPosts.reqres.request('doingBatchSave');
      userMeta = App.SSOptions.reqres.request('userMeta');
      message = '';
      switch (prevStatus + '-' + status) {
        case 'publish-publish':
          if (!doingBatchSave) {
            moderation = App.SSOptions.reqres.request('option', 'moderation');
            if (!moderation) {
              if (!userMeta.get('publishPopup')) {
                message = "<h1><i class='ss-icon-check'></i></h1><h3>This post is already approved.</h3> <br /> To turn Auto-Approve <strong>OFF</strong> see the <i>advanced settings</i> <i class='ss-icon-cog'></i>";
                userMeta.save({
                  publishPopup: true
                });
              }
            }
          }
          break;
        case 'publish-trash':
        case 'draft-trash':
          if (!doingBatchSave && !userMeta.get('trashPopup')) {
            message = "<h1><i class='ss-icon-trash-o'></i></h1><h3>This post is trashed!</h3> <br /> <h3>To rescue this post click <i>View Trash</i> <i class='ss-icon-trash-o'></i></h3> <br/> You will not see this message again.";
            userMeta.save({
              trashPopup: true
            });
          }
          this.$el.addClass('ss-trashing');
          this.$el.fadeOut(500, (function(_this) {
            return function() {
              return _this.remove();
            };
          })(this));
          break;
        case 'draft-publish':
          this.render();
          this.$el.attr('class', _.result(this, 'className'));
          this.$el.addClass('ss-publishing');
          this.$('.ss-post-spacer').fadeOut(500, (function(_this) {
            return function() {
              _this.$el.removeClass('ss-publishing');
              return _this.$('.ss-post-spacer').show();
            };
          })(this));
          break;
        case 'trash-publish':
          this.$el.addClass('ss-publishing');
          this.$el.fadeOut(500, (function(_this) {
            return function() {
              return _this.remove();
            };
          })(this));
          break;
        case 'trash-trash':
          break;
        default:
          this.render();
          this.$el.attr('class', _.result(this, 'className'));
      }
      if (message !== '' && (alertify != null)) {
        return alertify.alert('', message);
      }
    };

    return PostItemView;

  })(App.Views.BaseItemView);
});



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Templates/PostItemViewTemplate":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Templates/PostItemViewTemplate.hbs","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee","modernizr":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/index.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Views/PostsCompositeView.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

require('./PostItemView');

App.module('SSPosts', function(SSPosts, App, Backbone, Marionette, $, _) {
  return SSPosts.Views.PostsCompositeView = (function(_super) {
    __extends(PostsCompositeView, _super);

    function PostsCompositeView() {
      this.onChangeWidth = __bind(this.onChangeWidth, this);
      this.onChangeEnvWidth = __bind(this.onChangeEnvWidth, this);
      this.onRender = __bind(this.onRender, this);
      this.initialize = __bind(this.initialize, this);
      this._getChildViewElFromModel = __bind(this._getChildViewElFromModel, this);
      return PostsCompositeView.__super__.constructor.apply(this, arguments);
    }

    PostsCompositeView.prototype.template = require('../Templates/PostsCompositeViewTemplate');

    PostsCompositeView.prototype.className = function() {
      var className, ssOptions;
      className = 'ss-wrapper';
      if ((this.collection != null) && this.collection instanceof SSPosts.Collections.ApiPostsCollection) {
        className += ' ss-api-posts';
      }
      if (App.SSOptions != null) {
        ssOptions = App.SSOptions.reqres.request('options');
        if (ssOptions.get('user_can_moderate')) {
          className += ' ss-moderation';
        }
        if (ssOptions.get('is_admin')) {
          className += ' ss-is-admin';
        }
      }
      return className;
    };

    PostsCompositeView.prototype.itemViewContainer = '.ss-posts';

    PostsCompositeView.prototype.itemView = SSPosts.Views.PostItemView;

    PostsCompositeView.prototype.scrollContainer = 'window';

    PostsCompositeView.prototype._getChildViewElFromModel = function(model) {
      return this.$(this.itemViewContainer).find('[data-id="' + model.get('order_id') + '"]');
    };

    PostsCompositeView.prototype.initialize = function() {

      /*
      Listen for width changes to reset the number of columns
       */
      this.listenTo(App.Helpers.env, 'change:width', this.onChangeEnvWidth);
      this.listenTo(this.model, 'change:width', this.onChangeWidth);
      return SSPosts.Views.PostsCompositeView.__super__.initialize.apply(this, arguments);
    };

    PostsCompositeView.prototype.onRender = function() {
      this.onChangeEnvWidth();
      this.$el.attr('class', _.result(this, 'className'));
      return SSPosts.Views.PostsCompositeView.__super__.onRender.apply(this, arguments);
    };

    PostsCompositeView.prototype.onChangeEnvWidth = function() {
      var parentWidth;
      parentWidth = null;
      if ((this.$el != null) && this.$el.parent().length > 0) {
        parentWidth = this.$el.parent().width();
      }
      if ((parentWidth == null) || parentWidth === 0) {
        setTimeout(this.onChangeEnvWidth, 200);
        return;
      }
      return this.model.set('width', parentWidth);
    };

    PostsCompositeView.prototype.onChangeWidth = function() {
      var layout;
      layout = this.model.get('layout');
      if (layout == null) {
        return;
      }
      if (this.currentLayout == null) {
        this.currentLayout = '';
      }
      if (layout === this.currentLayout) {
        return;
      }
      this.currentLayout = layout;
      return this.$el.attr('data-layout', layout);
    };

    return PostsCompositeView;

  })(App.Views.InfiniteScrollCompositeView);
});



},{"../Templates/PostsCompositeViewTemplate":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Templates/PostsCompositeViewTemplate.hbs","./PostItemView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Views/PostItemView.coffee","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/ssPostsMain.coffee":[function(require,module,exports){
'use strict';
var App;

App = require('app');

require('./SSPosts');

require('./Models/PostModel');

require('./Models/PostsLayoutModel');

require('./Collections/PostsCollection');

require('./Collections/ApiPostsCollection');

require('./Views/PostItemView');

require('./Views/PostsCompositeView');

require('./Controllers/PostsController');

require('./Controllers/AutoReloadController');

App.module('SSPosts', function(SSPosts, App, Backbone, Marionette, $, _) {
  return SSPosts.addInitializer(function() {
    var autoReloadController, postsController;
    postsController = new SSPosts.Controllers.PostsController();
    autoReloadController = new SSPosts.Controllers.AutoReloadController();

    /*
    Define Module API
     */
    SSPosts.reqres.setHandler('postsCollection', postsController.getPostsCollection);
    SSPosts.reqres.setHandler('apiPostsCollection', postsController.getApiPostsCollection);
    SSPosts.reqres.setHandler('postsCompositeView', postsController.getPostsCompositeView);
    SSPosts.reqres.setHandler('allPostsCollection', postsController.getAllPostsCollection);
    SSPosts.reqres.setHandler('doingBatchSave', postsController.doingBatchSave);
    SSPosts.commands.setHandler('doingBatchSave', postsController.doingBatchSave);
    SSPosts.commands.setHandler('fetchServerPosts', postsController.fetchServerPosts);
    SSPosts.commands.setHandler('fetchApiPosts', postsController.fetchApiPosts);
    return SSPosts.commands.setHandler('publishApiPosts', postsController.publishApiPosts);
  });
});



},{"./Collections/ApiPostsCollection":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Collections/ApiPostsCollection.coffee","./Collections/PostsCollection":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Collections/PostsCollection.coffee","./Controllers/AutoReloadController":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Controllers/AutoReloadController.coffee","./Controllers/PostsController":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Controllers/PostsController.coffee","./Models/PostModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Models/PostModel.coffee","./Models/PostsLayoutModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Models/PostsLayoutModel.coffee","./SSPosts":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/SSPosts.coffee","./Views/PostItemView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Views/PostItemView.coffee","./Views/PostsCompositeView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Views/PostsCompositeView.coffee","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/Controllers/SearchController.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSSearch', function(SSSearch, App, Backbone, Marionette, $, _) {
  return SSSearch.Controllers.SearchController = (function(_super) {
    __extends(SearchController, _super);

    function SearchController() {
      this.setAction = __bind(this.setAction, this);
      this.getAction = __bind(this.getAction, this);
      this.getServicesCollection = __bind(this.getServicesCollection, this);
      this.getSearchView = __bind(this.getSearchView, this);
      this.getSearchModel = __bind(this.getSearchModel, this);
      this.onStart = __bind(this.onStart, this);
      this.initialize = __bind(this.initialize, this);
      return SearchController.__super__.constructor.apply(this, arguments);
    }

    SearchController.prototype.initialize = function() {
      return SSSearch.on('start', this.onStart);
    };

    SearchController.prototype.onStart = function() {
      if ($('.ss-search-region').length > 0) {
        App.addRegions({
          search: '.ss-search-region'
        });
        return App.search.show(this.getSearchView());
      }
    };

    SearchController.prototype.getSearchModel = function() {
      if (this.searchModel == null) {
        this.searchModel = new SSSearch.Models.SearchModel({
          id: 'socialstreams_search'
        });
        this.searchModel.fetch();
      }
      return this.searchModel;
    };

    SearchController.prototype.getSearchView = function() {
      if (this.searchView == null) {
        this.searchView = new SSSearch.Views.SearchItemView({
          model: this.getSearchModel()
        });
      }
      return this.searchView;
    };

    SearchController.prototype.getServicesCollection = function() {
      if (this.servicesCollection == null) {
        this.servicesCollection = new SSSearch.Collections.ServicesCollection;
        this.servicesCollection.fetch();
      }
      return this.servicesCollection;
    };

    SearchController.prototype.getAction = function(action) {
      return this.getSearchModel().get('action');
    };

    SearchController.prototype.setAction = function(action) {
      return this.getSearchModel().set('action', action);
    };

    return SearchController;

  })(Backbone.Marionette.Controller);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/Models/SearchModel.coffee":[function(require,module,exports){
'use strict';
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

App.module('SSSearch', function(SSSearch, App, Backbone, Marionette, $, _) {
  return SSSearch.Models.SearchModel = (function(_super) {
    __extends(SearchModel, _super);

    function SearchModel() {
      this.validate = __bind(this.validate, this);
      return SearchModel.__super__.constructor.apply(this, arguments);
    }

    SearchModel.prototype.defaults = {
      action: function() {
        var output, postsCollection;
        output = '';
        postsCollection = [];
        if (App.SSPosts != null) {
          postsCollection = App.SSPosts.reqres.request('postsCollection');
        }
        if (postsCollection.length > 0) {
          return output = 'view';
        }
      },
      public_page_url: function() {
        var public_page_url;
        public_page_url = null;
        if (App.SSOptions != null) {
          public_page_url = App.SSOptions.reqres.request('option', 'public_page_url');
        }
        return public_page_url;
      },
      time_to_next_cron: function() {
        var time_to_next_cron;
        time_to_next_cron = '';
        if (App.SSOptions != null) {
          time_to_next_cron = App.SSOptions.reqres.request('option', 'time_to_next_cron');
          if ((time_to_next_cron != null) && time_to_next_cron !== '') {
            time_to_next_cron = moment.unix(parseInt(time_to_next_cron, 10)).from(0, true);
          }
        }
        return time_to_next_cron;
      },
      services: function() {
        var services;
        services = [];
        if (App.SSAuth != null) {
          App.SSAuth.reqres.request('servicesCollection').each(function(model) {
            var serviceData;
            serviceData = model.toJSON();
            serviceData.query = this.get(serviceData.id + 'Query');
            serviceData.type = this.get(serviceData.id + 'Type');
            _.each(serviceData.types, function(type, index) {
              if (type.value === serviceData.type) {
                return serviceData.types[index].selected = true;
              }
            }, this);
            return services.push(serviceData);
          }, this);
        }
        return services;
      }
    };

    SearchModel.prototype.validate = function(attrs, options) {
      var errors, services, validSearchFound;
      errors = {};
      services = this.get('services');
      _.each(services, function(service) {
        var error;
        error = false;
        if (attrs[service.id + 'Type'] != null) {
          switch (attrs[service.id + 'Type']) {
            case 'global':
              if ((attrs[service.id + 'Query'] == null) || attrs[service.id + 'Query'] === '') {
                error = true;
              }
          }
        }
        return errors[service.id] = error;
      });
      validSearchFound = false;
      _.each(errors, function(error) {
        if (error === false) {
          return validSearchFound = true;
        }
      });
      if (validSearchFound) {
        errors = null;
      }
      return errors;
    };

    return SearchModel;

  })(App.Models.WPOptionModel);
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/SSSearch.coffee":[function(require,module,exports){
'use strict';
var App;

App = require('app');

App.module('SSSearch', function(SSSearch, App, Backbone, Marionette, $, _) {
  SSSearch.Controllers = {};
  SSSearch.Models = {};
  SSSearch.Collections = {};
  SSSearch.Views = {};
  SSSearch.Layouts = {};
  SSSearch.Routers = {};
  SSSearch.Templates = {};
  SSSearch.vent = new Backbone.Wreqr.EventAggregator();
  SSSearch.commands = new Backbone.Wreqr.Commands();
  return SSSearch.reqres = new Backbone.Wreqr.RequestResponse();
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/Templates/SearchItemViewTemplate.hbs":[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "  <div class=\"ss-search-service-wrapper "
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-search_type=\""
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.authenticated : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <!-- MOBILE -->\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.authenticated : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div><!-- end MOBILE -->\n  </div><!-- .search-fields -->\n\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n    <span class=\"ss-search-box-icon "
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"><i class=\""
    + escapeExpression(((helper = (helper = helpers.iconClass || (depth0 != null ? depth0.iconClass : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"iconClass","hash":{},"data":data}) : helper)))
    + "\"></i></span>\n\n    <div class=\"ss-search-type ss-search-field\">\n      <select name=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "Type\" data-service_select=\"twitter\" tabindex=\"0\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.types : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </select>\n    </div>\n\n    <div class=\"ss-search-query ss-search-field\">\n      <input type=\"text\" name=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "Query\" class=\"input search-bar "
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "-search selectized\" placeholder=\""
    + escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" tabindex=\""
    + escapeExpression(((helper = (helper = helpers.tabindex || (depth0 != null ? depth0.tabindex : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tabindex","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.query || (depth0 != null ? depth0.query : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"query","hash":{},"data":data}) : helper)))
    + "\" />\n    </div>\n\n    <a href=\"javascript:void(0);\" class=\"ss-search-box-remove\" data-service=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"><i class=\"ss-icon-close\"></i></a>\n\n    <input name=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "User\" type=\"hidden\" value=\""
    + escapeExpression(((helper = (helper = helpers.bw_account_id || (depth0 != null ? depth0.bw_account_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bw_account_id","hash":{},"data":data}) : helper)))
    + "\">\n\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <option value=\""
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.selected : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"4":function(depth0,helpers,partials,data) {
  return "selected=\"selected\"";
  },"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n    <a href=\"javascript:void(0);\" class=\"ss-social-auth-box\" data-service=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <span class=\"ss-social-auth-box-icon\"><i class=\""
    + escapeExpression(((helper = (helper = helpers.iconClass || (depth0 != null ? depth0.iconClass : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"iconClass","hash":{},"data":data}) : helper)))
    + "\"></i></span>\n      <span class=\"ss-social-auth-box-text\">+Add ";
  stack1 = ((helpers.toTitleCase || (depth0 && depth0.toTitleCase) || helperMissing).call(depth0, (depth0 != null ? depth0.id : depth0), {"name":"toTitleCase","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n    </a>\n\n";
},"7":function(depth0,helpers,partials,data) {
  return "";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "    <div class=\"ss-search-mobile-wrapper\">\n      <span class=\"ss-search-box-icon "
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"><i class=\""
    + escapeExpression(((helper = (helper = helpers.iconClass || (depth0 != null ? depth0.iconClass : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"iconClass","hash":{},"data":data}) : helper)))
    + "\"></i></span>\n\n      <div class=\"ss-mobile-search-box\">\n        <div class=\"ss-mobile-query\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.explodeQuery : depth0), {"name":"each","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n      </div>\n";
},"10":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <span class=\"ss-mobile-query-term\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</span>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "    <div class=\"view-stream-actions\">\n      <span class=\"ss-search-action-text\"> Your stream is now live. Check it out. </span>\n      <a href=\""
    + escapeExpression(((helper = (helper = helpers.public_page_url || (depth0 != null ? depth0.public_page_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"public_page_url","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-info see-your-stream-btn btn-lg\">SEE YOUR STREAM</a>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.time_to_next_cron : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div><!-- .view-stream-actions -->\n";
},"13":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      <p>New content will be loaded every 15 minutes (<span class=\"time-to-cron\">"
    + escapeExpression(((helper = (helper = helpers.time_to_next_cron || (depth0 != null ? depth0.time_to_next_cron : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time_to_next_cron","hash":{},"data":data}) : helper)))
    + "</span> to go). Need more frequent updates? <a href=\"http://socialstreams.com/get-pro/\" target=\"_blank\">go premium &raquo</a></p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"ss-search-fields\">\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.services : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\n<span class=\"help-block\"></span>\n\n<div class=\"ss-sticky-bar ss-search-actions\">\n  <div class=\"ss-search-actions-inner\">\n\n    <div class=\"publish-stream-actions\">\n      <span class=\"ss-search-action-text\"> This is just a preview. Click Publish to save changes. </span>\n      <a href=\"javascript:void(0);\" class=\"btn btn-success publish-stream-btn btn-lg\">PUBLISH</a>\n    </div><!-- .publish-stream -->\n\n  </div>\n</div>\n\n<div class=\"ss-search-actions non-sticky\">\n  <div class=\"ss-search-actions-inner\">\n\n    <div class=\"search-stream-actions\">\n      <span class=\"ss-search-action-text\"> Click to preview your search. </span>\n      <input type=\"submit\" class=\"btn btn-info search-btn btn-lg\" tabindex=\"3\" value=\"PREVIEW\" />\n    </div><!-- .search-stream -->\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.public_page_url : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n  </div><!-- .ss-search-actions-inner -->\n</div><!-- .ss-search-actions -->\n";
},"useData":true});

},{"hbsfy/runtime":"/srv/social-streams/releases/tmp/social-streams/node_modules/hbsfy/runtime.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/Views/SearchItemView.coffee":[function(require,module,exports){
(function (global){
'use strict';
var App, alertify,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require('app');

alertify = (typeof window !== "undefined" ? window.alertify : typeof global !== "undefined" ? global.alertify : null);

App.module('SSSearch', function(SSSearch, App, Backbone, Marionette, $, _) {
  return SSSearch.Views.SearchItemView = (function(_super) {
    __extends(SearchItemView, _super);

    function SearchItemView() {
      this.logout = __bind(this.logout, this);
      this.login = __bind(this.login, this);
      this.onValidationError = __bind(this.onValidationError, this);
      this.publishStream = __bind(this.publishStream, this);
      this.onPublish = __bind(this.onPublish, this);
      this.toggleLoadingClass = __bind(this.toggleLoadingClass, this);
      this.onChangeSearch = __bind(this.onChangeSearch, this);
      this.onSubmit = __bind(this.onSubmit, this);
      this.onChange = __bind(this.onChange, this);
      this.getValues = __bind(this.getValues, this);
      this.onChangeAction = __bind(this.onChangeAction, this);
      this.initialize = __bind(this.initialize, this);
      return SearchItemView.__super__.constructor.apply(this, arguments);
    }

    SearchItemView.prototype.tagName = 'form';

    SearchItemView.prototype.template = require('../Templates/SearchItemViewTemplate');

    SearchItemView.prototype.events = {
      'submit': 'onSubmit',
      'change select': 'onChange',
      'click .publish-stream-btn': 'onPublish',
      'click .ss-social-auth-box': 'login',
      'click .ss-search-box-remove': 'logout'
    };

    SearchItemView.prototype.className = function() {
      var action;
      action = this.model.get('action');
      if ((action == null) || action === '') {
        action = 'none';
      }
      return 'ss-search ss-search-action-' + action;
    };

    SearchItemView.prototype.attributes = function() {
      return {
        action: App.SSOptions.reqres.request('option', 'ss_api_url')
      };
    };

    SearchItemView.prototype.initialize = function() {
      this.listenTo(this.model, 'change:action', this.onChangeAction);
      this.listenTo(this.model, 'change:search', this.onChangeSearch);
      return this.listenTo(this.model, 'invalid', this.onValidationError);
    };

    SearchItemView.prototype.onChangeAction = function() {
      this.$el.attr('class', _.result(this, 'className'));
      return this.toggleLoadingClass('.search-btn, .publish-stream-btn', false);
    };

    SearchItemView.prototype.onRender = function() {
      var instaHack;
      this.$('.twitter .ss-search-query input').selectize({
        plugins: ['restore_on_backspace', 'selectize-tab-separator', 'selectize-blacklisted-chars'],
        blacklistedChars: [],
        tabTriggers: [32, 188],
        delimiter: ' OR ',
        maxItems: 3,
        createOnBlur: true,
        labelField: "query",
        valueField: "query",
        sortField: 'query',
        searchField: 'query',
        create: true,
        persist: false,
        onChange: this.onChange
      });
      this.$('.instagram .ss-search-query input').selectize({
        plugins: ['restore_on_backspace', 'selectize-tab-separator', 'selectize-blacklisted-chars'],
        blacklistedChars: ['@'],
        tabTriggers: [32, 188],
        delimiter: ',',
        maxItems: 1,
        createOnBlur: true,
        labelField: "query",
        valueField: "query",
        sortField: 'query',
        searchField: 'query',
        create: true,
        persist: false,
        onChange: this.onChange
      });
      instaHack = this.$('.instagram .ss-search-query input, .selectize-control');
      instaHack.removeClass('single');
      instaHack.addClass('multi');
      this.$('.selectize-input.items:not(.has-items) input').css({
        width: '100%'
      });
      this.$('select').customSelect();
      return this.$('.ss-sticky-bar').sticky({
        topSpacing: 32
      });
    };

    SearchItemView.prototype.getValues = function() {
      var data;
      data = {};
      this.$('[name]').each(function(index, input) {
        var name, value;
        name = $(input).attr('name');
        if ($(input).is('select')) {
          value = $(input).val();
        } else if ($(input).is('input')) {
          value = $(input).val();
        }
        return data[name] = value;
      });
      return data;
    };

    SearchItemView.prototype.onChange = function(event) {
      var values;
      this.model.set({
        action: 'search'
      });
      values = this.getValues();
      return _.each(this.model.get('services'), function(service) {
        var searchType;
        searchType = '';
        if (values[service.id + 'Type'] != null) {
          searchType = values[service.id + 'Type'];
        }
        return this.$('.ss-search-service-wrapper.' + service.id).attr('data-search_type', searchType);
      }, this);
    };

    SearchItemView.prototype.onSubmit = function(event) {
      var values;
      event.preventDefault();
      if ((this.loading != null) && this.loading === true) {
        return;
      }
      this.$('.ss-error').removeClass('ss-error');
      values = this.getValues();
      values.search = true;
      this.model.set({
        search: false
      }, {
        silent: true
      });
      this.model.set(values, {
        validate: true
      });
      if (App.SSAdmin != null) {
        App.SSAdmin.commands.execute('resetTrashToggle');
      }
      return false;
    };

    SearchItemView.prototype.onChangeSearch = function(model) {
      if (App.SSPosts == null) {
        return;
      }
      this.toggleLoadingClass('.search-btn', true);
      return App.SSPosts.commands.execute('fetchApiPosts', {
        search: this.getValues()
      }, {
        success: (function(_this) {
          return function() {
            return _this.model.set({
              action: 'publish'
            });
          };
        })(this)
      });
    };

    SearchItemView.prototype.toggleLoadingClass = function(el, loading) {
      var $el;
      $el = this.$(el);
      if ($el.length === 0) {
        return;
      }
      if (loading == null) {
        loading = $el.first().hasClass('loading');
      }
      $el.toggleClass('loading', loading);
      this.loading = loading;
      return $el.each(function(index, element) {
        var text;
        text = $(element).attr('data-text');
        if ((text == null) || text === '') {
          if ($(element).is('input')) {
            text = $(element).attr('value');
          } else {
            text = $(element).html();
          }
          $(element).attr('data-text', text);
        }
        if (loading) {
          if ($(element).is('input')) {
            return $(element).attr('value', 'Loading...');
          } else {
            return text = $(element).html('Loading...');
          }
        } else {
          if ($(element).is('input')) {
            return $(element).attr('value', text);
          } else {
            return $(element).html(text);
          }
        }
      });
    };

    SearchItemView.prototype.onPublish = function(event) {
      var confirmBox, message, moderation;
      moderation = App.SSOptions.reqres.request('option', 'moderation');
      message = '<h1><i class="ss-icon-warning"></i></h1>';
      message += '<h3>Publishing will make all approved posts public.</h3>';
      if (this.length < 1) {
        message = '<h3>You don\'t seem to have any posts ready to publish.</h3>';
      } else if (moderation) {
        message = message + '<p>All future posts will need to be moderated before they appear on your Social Stream. Consider turning Auto-Approve <strong>ON</strong></p>';
      } else if (!moderation) {
        message = message + '<p>All future posts will be automatically added to your Social Stream.</p>';
      }
      return confirmBox = alertify.confirm('', message, (function(_this) {
        return function() {
          return _this.publishStream();
        };
      })(this), (function(_this) {
        return function() {
          return confirmBox.close();
        };
      })(this));
    };

    SearchItemView.prototype.publishStream = function() {
      if ((this.loading != null) && this.loading === true) {
        return;
      }
      this.toggleLoadingClass('.publish-stream-btn', true);
      App.SSPosts.commands.execute('publishApiPosts');
      return this.model.save({}, {
        batch: true,
        batchSuccess: (function(_this) {
          return function() {
            var public_page_url;
            public_page_url = _this.model.get('public_page_url');
            if ((public_page_url == null) || public_page_url === '') {
              window.location.reload();
              return;
            }
            _this.model.set({
              action: 'view'
            });
            $('html,body').animate({
              scrollTop: 0
            }, 400, 'easieEaseInOut');
            return App.SSPosts.commands.execute('fetchServerPosts', {
              status: ['publish', 'draft']
            });
          };
        })(this)
      });
    };

    SearchItemView.prototype.onValidationError = function(model, errors) {
      console.log('onValidationError');
      return _.each(errors, function(error, service) {
        return this.$('.ss-search-service-wrapper.' + service).addClass('ss-error');
      }, this);
    };

    SearchItemView.prototype.login = function(event) {
      if (App.SSAuth == null) {
        return;
      }
      return App.SSAuth.commands.execute('login', $(event.currentTarget).attr('data-service'));
    };

    SearchItemView.prototype.logout = function(event) {
      var service;
      if (App.SSAuth == null) {
        return;
      }
      service = $(event.currentTarget).data('service');
      return alertify.confirm('', '<h1><i class="ss-icon-warning"></i></h1><h3>Are you sure you want to remove <span style="text-transform:capitalize;"><strong>' + service + '</strong></span> from your Social Stream?</h3>', (function(_this) {
        return function() {
          return App.SSAuth.commands.execute('logout', $(event.currentTarget).attr('data-service'));
        };
      })(this), (function(_this) {
        return function() {};
      })(this));
    };

    return SearchItemView;

  })(App.Views.BaseItemView);
});



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../Templates/SearchItemViewTemplate":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/Templates/SearchItemViewTemplate.hbs","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/ssSearchMain.coffee":[function(require,module,exports){
'use strict';
var App;

App = require('app');

require('./SSSearch');

require('./Models/SearchModel');

require('./Views/SearchItemView');

require('./Controllers/SearchController');

App.module('SSSearch', function(SSSearch, App, Backbone, Marionette, $, _) {
  return SSSearch.addInitializer(function() {
    var controller;
    controller = new SSSearch.Controllers.SearchController;

    /*
    Define Module API
     */
    SSSearch.commands.setHandler('setAction', controller.setAction);
    SSSearch.reqres.setHandler('action', controller.getAction);
    return SSSearch.reqres.setHandler('searchModel', controller.getSearchModel);
  });
});



},{"./Controllers/SearchController":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/Controllers/SearchController.coffee","./Models/SearchModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/Models/SearchModel.coffee","./SSSearch":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/SSSearch.coffee","./Views/SearchItemView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSSearch/Views/SearchItemView.coffee","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Templates/Helpers/toTitleCase.coffee":[function(require,module,exports){
"use strict";
var App, Handlebars;

App = require("app");

Handlebars = require("hbsfy/runtime");

Handlebars.registerHelper('toTitleCase', function(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
});



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee","hbsfy/runtime":"/srv/social-streams/releases/tmp/social-streams/node_modules/hbsfy/runtime.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/BaseCompositeView.coffee":[function(require,module,exports){
(function (global){
'use strict';
var $, App, Backbone,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require("app");

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

$ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);

App.Views.BaseCompositeView = (function(_super) {
  __extends(BaseCompositeView, _super);

  function BaseCompositeView() {
    this._getChildViewElFromModel = __bind(this._getChildViewElFromModel, this);
    this._renderChildrenFromDOM = __bind(this._renderChildrenFromDOM, this);
    this.renderFromDOM = __bind(this.renderFromDOM, this);
    return BaseCompositeView.__super__.constructor.apply(this, arguments);
  }

  BaseCompositeView.prototype.renderFromDOM = function(el) {
    if (el == null) {
      return this;
    }
    if (el instanceof $) {
      if (el.length > 0) {
        this.el = el[0];
      }
    } else {
      this.el = el;
    }
    if (this.el == null) {
      return this;
    }
    this.$el = $(el);
    this.isRendered = true;
    this.isClosed = false;
    this.resetItemViewContainer();
    this.triggerBeforeRender();
    this.bindUIElements();
    this.triggerMethod("composite:model:rendered");
    this._renderChildrenFromDOM();
    this.triggerMethod("composite:rendered");
    this.triggerRendered();
    return this;
  };

  BaseCompositeView.prototype._renderChildrenFromDOM = function() {
    if (this.collection.length > 0) {
      return this.collection.each(function(model) {
        var el, view;
        el = this._getChildViewElFromModel(model);
        if ((el != null) && el instanceof $ && el.length > 0) {
          el = el[0];
        }
        if (el == null) {
          return;
        }
        view = new this.itemView({
          el: el,
          model: model
        });
        this.addChildViewEventForwarding(view);
        this.children.add(view);
        return view.triggerMethod('render');
      }, this);
    }
  };

  BaseCompositeView.prototype._getChildViewElFromModel = function(model) {
    return this.$(this.itemViewContainer).find('[data-id="' + model.get('id') + '"]');
  };

  return BaseCompositeView;

})(Backbone.Marionette.CompositeView);



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/BaseItemView.coffee":[function(require,module,exports){
(function (global){
'use strict';
var $, App, Backbone,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require("app");

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

$ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);

App.Views.BaseItemView = (function(_super) {
  __extends(BaseItemView, _super);

  function BaseItemView() {
    this.renderFromDOM = __bind(this.renderFromDOM, this);
    return BaseItemView.__super__.constructor.apply(this, arguments);
  }

  BaseItemView.prototype.renderFromDOM = function(el) {
    if (el == null) {
      return this;
    }
    if (el instanceof $) {
      if (el.length > 0) {
        this.el = el[0];
      }
    } else {
      this.el = el;
    }
    if (this.el == null) {
      return this;
    }
    this.$el = $(el);
    this.isRendered = true;
    this.isClosed = false;
    return this.delegateEvents();
  };

  return BaseItemView;

})(Backbone.Marionette.ItemView);



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/InfiniteScrollCompositeView.coffee":[function(require,module,exports){
(function (global){
'use strict';
var $, App, Backbone, Modernizr, bindWindowScrollEvent, bindWindowScrollEventOnce, debouncedOnWindowScroll, onWindowScroll, windowScrollHandlerViews, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require("app");

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

$ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);

_ = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

Modernizr = require("modernizr");

windowScrollHandlerViews = {};

onWindowScroll = function(event) {
  var cid, view, _results;
  _results = [];
  for (cid in windowScrollHandlerViews) {
    view = windowScrollHandlerViews[cid];
    if ((view != null) && !view.isClosed && (view.el != null)) {
      _results.push(view.triggerMethod('scroll', event));
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

debouncedOnWindowScroll = _.throttle(onWindowScroll, 300);

bindWindowScrollEvent = function() {
  return $(window).on('scroll', debouncedOnWindowScroll);
};

bindWindowScrollEventOnce = _.once(bindWindowScrollEvent);

App.Views.InfiniteScrollCompositeView = (function(_super) {
  __extends(InfiniteScrollCompositeView, _super);

  function InfiniteScrollCompositeView() {
    this.onScrollNearBottom = __bind(this.onScrollNearBottom, this);
    this.getOffsetBottom = __bind(this.getOffsetBottom, this);
    this.onScroll = __bind(this.onScroll, this);
    this.bindScrollEvent = __bind(this.bindScrollEvent, this);
    this.onClose = __bind(this.onClose, this);
    this.onRender = __bind(this.onRender, this);
    this.initialize = __bind(this.initialize, this);
    return InfiniteScrollCompositeView.__super__.constructor.apply(this, arguments);
  }

  InfiniteScrollCompositeView.prototype.initialize = function() {
    if (this.scrollContainer == null) {
      return;
    }
    if ((this.collection != null) && this.collection instanceof App.Collections.InfiniteScrollCollection) {
      return this.listenTo(this.model, 'change:loading', this.onLoadingChange);
    }
  };

  InfiniteScrollCompositeView.prototype.onRender = function() {
    return this.bindScrollEvent();
  };

  InfiniteScrollCompositeView.prototype.onClose = function() {
    if (this.scrollContainer === 'window' && (windowScrollHandlerViews[this.cid] != null)) {
      return delete windowScrollHandlerViews[this.cid];
    }
  };

  InfiniteScrollCompositeView.prototype.bindScrollEvent = function() {
    var debouncedScroll;
    if (this.scrollContainer === 'window') {
      bindWindowScrollEventOnce();
      return windowScrollHandlerViews[this.cid] = this;
    } else {
      if (this.$(this.scrollContainer).length > 0) {
        debouncedScroll = _.throttle(this.onScroll, 100);
        return this.$(this.scrollContainer).scroll(debouncedScroll);
      }
    }
  };

  InfiniteScrollCompositeView.prototype.onScroll = function(event) {
    var $target, innerHeight, offset, offsetBottom, pixelsFromBottom, pixelsFromTop, scrollHeight, scrollTop;
    if (this.scrollContainer === 'window') {
      scrollHeight = $(document).height();
      innerHeight = $(window).height();
      scrollTop = App.Helpers.env.get('scrollTop');
    } else {
      $target = $(event.currentTarget);
      scrollHeight = $target[0].scrollHeight;
      innerHeight = $target.innerHeight();
      scrollTop = $target.scrollTop();
    }
    pixelsFromTop = scrollTop;
    pixelsFromBottom = 0 + scrollHeight - scrollTop - innerHeight;
    offset = 700;
    offsetBottom = this.getOffsetBottom($('.ss-wrapper'), scrollHeight);
    if (pixelsFromBottom < 0 || pixelsFromTop < 0) {
      return;
    }
    if (pixelsFromBottom < offset + offsetBottom) {
      return this.triggerMethod('scroll:near:bottom');
    } else if (pixelsFromTop < offset) {
      return this.triggerMethod('scroll:near:top');
    }
  };

  InfiniteScrollCompositeView.prototype.getOffsetBottom = function($el, scrollHeight) {
    if (this.offsetBottom == null) {
      this.offsetBottom = scrollHeight - ($el.height() + $el.offset().top);
      if (this.offsetBottom < 0) {
        this.offsetBottom = 0;
      }
    }
    return this.offsetBottom;
  };

  InfiniteScrollCompositeView.prototype.onScrollNearBottom = function() {
    if ((this.collection.nextPage == null) || (this.collection == null) || this.collection.length === 0) {
      return;
    }
    if ((this.loading != null) && this.loading) {
      return;
    }
    if ((this.collection.hasNext != null) && this.collection.hasNext === false) {
      return;
    }
    this.loading = true;
    this.model.set('loading', true);
    return this.collection.nextPage({
      remove: false,
      success: (function(_this) {
        return function(collection, response) {
          _this.loading = false;
          return _this.model.set('loading', false);
        };
      })(this)
    });
  };

  InfiniteScrollCompositeView.prototype.onLoadingChange = function(model, loading, options) {
    var done, infiniteScrollLoaderHtml;
    if (this.loaderView == null) {
      if (this.$('.ss-infinite-scroll-loader').length === 0) {
        infiniteScrollLoaderHtml = '<div class="ss-infinite-scroll-loader"><div class="ss-inner-text">No more content to load.</div></div>';
        if (this.scrollContainer === 'window') {
          this.$el.append(infiniteScrollLoaderHtml);
        } else {
          this.$(this.scrollContainer).append(infiniteScrollLoaderHtml);
        }
      }
      this.loaderView = new App.Views.LoaderItemView({
        model: new Backbone.Model
      });
      this.$('.ss-infinite-scroll-loader').append(this.loaderView.render().el);
    }
    done = false;
    if (loading) {
      this.loaderView.startSpinner();
    } else {
      this.loaderView.stopSpinner();
    }
    this.$('.ss-infinite-scroll-loader').toggleClass('ss-loading', loading);
    return this.$('.ss-infinite-scroll-loader').toggleClass('ss-done', done);
  };

  return InfiniteScrollCompositeView;

})(App.Views.BaseCompositeView);



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee","modernizr":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/index.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/LoaderItemView.coffee":[function(require,module,exports){
(function (global){
'use strict';
var App, Backbone, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

App = require("app");

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

_ = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

App.Views.LoaderItemView = (function(_super) {
  __extends(LoaderItemView, _super);

  function LoaderItemView() {
    this.stopSpinner = __bind(this.stopSpinner, this);
    this.startSpinner = __bind(this.startSpinner, this);
    this.onRender = __bind(this.onRender, this);
    return LoaderItemView.__super__.constructor.apply(this, arguments);
  }

  LoaderItemView.prototype.className = 'ss-ajax-loader-view';

  LoaderItemView.prototype.defaultSpinArgs = {
    lines: 12,
    length: 7,
    width: 2,
    radius: 9,
    corners: 1,
    rotate: 0,
    direction: 1,
    color: '#aeaeae',
    speed: 1,
    trail: 60,
    shadow: false,
    hwaccel: false,
    className: 'ss-spinner'
  };

  LoaderItemView.prototype.template = function() {
    return '';
  };

  LoaderItemView.prototype.onRender = function() {
    return this.startSpinner();
  };

  LoaderItemView.prototype.startSpinner = function() {
    var spinArgs;
    spinArgs = _.extend({}, this.defaultSpinArgs, this.model.toJSON());
    return this.$el.spin(spinArgs);
  };

  LoaderItemView.prototype.stopSpinner = function() {
    return this.$el.spin(false);
  };

  return LoaderItemView;

})(App.Views.BaseItemView);



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee":[function(require,module,exports){
(function (global){
"use strict";
var App, Backbone;

Backbone = (typeof window !== "undefined" ? window.Backbone : typeof global !== "undefined" ? global.Backbone : null);

App = new Backbone.Marionette.Application({
  Controllers: {},
  Models: {},
  Collections: {},
  Views: {},
  Layouts: {},
  Routers: {},
  Templates: {},
  Partials: {},
  Helpers: {}
});

window.SSApp = App;

module.exports = App;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/appMain.coffee":[function(require,module,exports){
(function (global){
"use strict";
var $, App;

require('browsernizr/test/touchevents');

App = require('app');

App.Helpers.browserSupport = require("./Helpers/browserSupport");

App.Helpers.data = require("./Helpers/data");

App.Helpers.date = require("./Helpers/date");

App.Helpers.env = require("./Helpers/env");

App.Helpers.http = require("./Helpers/http");

require('./Templates/Helpers/toTitleCase');

require('./Controllers/AppController');

require('./Models/ApiModel');

require('./Models/WPOptionModel');

require('./Models/WPUserMetaModel');

require('./Collections/ApiCollection');

require('./Collections/InfiniteScrollCollection');

require('./Views/BaseItemView');

require('./Views/BaseCompositeView');

require('./Views/LoaderItemView');

require('./Views/InfiniteScrollCompositeView');

require('./Config/BackboneAjax');


/*
initialize controller on doc ready - before even starting the app
so that sub apps and models will have access to the app api inside the appinitializers
 */

$ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);

$(document).ready(function() {
  var controller;
  $('video').prop("muted", true);
  App.Helpers.browserSupport.ieAjaxSupport();
  controller = new App.Controllers.AppController();

  /*
  Define App Requests
   */
  App.reqres.setHandler('apiRoot', controller.getApiRoot);
  App.reqres.setHandler('isEven', controller.isEven);

  /*
  start the app
  This is when modules get initialized
   */
  App.start();

  /*
  start ENV helper.
   */
  return App.Helpers.env.start();
});



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Collections/ApiCollection":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Collections/ApiCollection.coffee","./Collections/InfiniteScrollCollection":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Collections/InfiniteScrollCollection.coffee","./Config/BackboneAjax":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Config/BackboneAjax.coffee","./Controllers/AppController":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Controllers/AppController.coffee","./Helpers/browserSupport":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/browserSupport.coffee","./Helpers/data":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/data.coffee","./Helpers/date":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/date.coffee","./Helpers/env":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/env.coffee","./Helpers/http":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/http.coffee","./Models/ApiModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Models/ApiModel.coffee","./Models/WPOptionModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Models/WPOptionModel.coffee","./Models/WPUserMetaModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Models/WPUserMetaModel.coffee","./Templates/Helpers/toTitleCase":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Templates/Helpers/toTitleCase.coffee","./Views/BaseCompositeView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/BaseCompositeView.coffee","./Views/BaseItemView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/BaseItemView.coffee","./Views/InfiniteScrollCompositeView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/InfiniteScrollCompositeView.coffee","./Views/LoaderItemView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/LoaderItemView.coffee","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee","browsernizr/test/touchevents":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/test/touchevents.js"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/selectize-blacklisted-chars.coffee":[function(require,module,exports){
(function (global){
var Selectize;

Selectize = (typeof window !== "undefined" ? window.Selectize : typeof global !== "undefined" ? global.Selectize : null);

Selectize.define('selectize-blacklisted-chars', function(options) {
  var originalOnKeyPress;
  originalOnKeyPress = this.onKeyPress;
  return this.onKeyPress = (function(_this) {
    return function(event) {
      var character;
      character = String.fromCharCode(event.keyCode || event.which);
      if ((_this.settings.blacklistedChars != null) && _.indexOf(_this.settings.blacklistedChars, character) >= 0) {
        event.preventDefault();
        return;
      }
      return originalOnKeyPress.apply(_this, arguments);
    };
  })(this);
});



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/selectize-tab-separator.coffee":[function(require,module,exports){
(function (global){
var Selectize;

Selectize = (typeof window !== "undefined" ? window.Selectize : typeof global !== "undefined" ? global.Selectize : null);

Selectize.define('selectize-tab-separator', function(options) {
  var originalOnKeyDown;
  originalOnKeyDown = this.onKeyDown;
  return this.onKeyDown = (function(_this) {
    return function(event) {
      var value;
      if ((_this.settings.tabTriggers != null) && _.indexOf(_this.settings.tabTriggers, event.keyCode) >= 0) {
        value = _this.$control_input.val();
        if (value !== '') {
          _this.createItem(value);
        }
        event.preventDefault();
        return;
      }
      return originalOnKeyDown.apply(_this, arguments);
    };
  })(this);
});



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},["./src/scripts/admin.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9hZG1pbi5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9saWIvY29uc29sZS1sb2ctc2hpbS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL01vZGVybml6ci5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2Vybml6ci9saWIvTW9kZXJuaXpyUHJvdG8uanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL2NsYXNzZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL2NyZWF0ZUVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL2RvY0VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL2dldEJvZHkuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL2luamVjdEVsZW1lbnRXaXRoU3R5bGVzLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJuaXpyL2xpYi9pcy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2Vybml6ci9saWIvcHJlZml4ZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL3NldENsYXNzZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL3Rlc3RSdW5uZXIuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL3Rlc3RTdHlsZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL3Rlc3RzLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJuaXpyL3Rlc3QvdG91Y2hldmVudHMuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2Jhc2UuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIm5vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvc2FmZS1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIm5vZGVfbW9kdWxlcy9oYnNmeS9ydW50aW1lLmpzIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvQ29sbGVjdGlvbnMvQXBpQ29sbGVjdGlvbi5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Db2xsZWN0aW9ucy9JbmZpbml0ZVNjcm9sbENvbGxlY3Rpb24uY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvQ29uZmlnL0JhY2tib25lQWpheC5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Db250cm9sbGVycy9BcHBDb250cm9sbGVyLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL0hlbHBlcnMvYnJvd3NlclN1cHBvcnQuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvSGVscGVycy9kYXRhLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL0hlbHBlcnMvZGF0ZS5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9IZWxwZXJzL2Vudi5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9IZWxwZXJzL2h0dHAuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kZWxzL0FwaU1vZGVsLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZGVscy9XUE9wdGlvbk1vZGVsLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZGVscy9XUFVzZXJNZXRhTW9kZWwuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU0FkbWluL0NvbnRyb2xsZXJzL0FkbWluQ29udHJvbGxlci5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTQWRtaW4vU1NBZG1pbi5jb2ZmZWUiLCJzcmMvc2NyaXB0cy9Nb2R1bGVzL1NTQWRtaW4vVGVtcGxhdGVzL0hlYWRlckl0ZW1WaWV3VGVtcGxhdGUuaGJzIiwic3JjL3NjcmlwdHMvTW9kdWxlcy9TU0FkbWluL1RlbXBsYXRlcy9Ib21lSXRlbVZpZXdUZW1wbGF0ZS5oYnMiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTQWRtaW4vVmlld3MvSGVhZGVySXRlbVZpZXcuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU0FkbWluL1ZpZXdzL0hvbWVJdGVtVmlldy5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTQWRtaW4vc3NBZG1pbk1haW4uY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU0F1dGgvQ29sbGVjdGlvbnMvU2VydmljZXNDb2xsZWN0aW9uLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NBdXRoL0NvbnRyb2xsZXJzL0F1dGhDb250cm9sbGVyLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NBdXRoL01vZGVscy9TZXJ2aWNlTW9kZWwuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU0F1dGgvU1NBdXRoLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NBdXRoL3NzQXV0aE1haW4uY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU09wdGlvbnMvQ29udHJvbGxlcnMvT3B0aW9uc0NvbnRyb2xsZXIuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU09wdGlvbnMvTW9kZWxzL09wdGlvbnNNb2RlbC5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTT3B0aW9ucy9Nb2RlbHMvVXNlck1ldGFNb2RlbC5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTT3B0aW9ucy9TU09wdGlvbnMuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU09wdGlvbnMvc3NPcHRpb25zTWFpbi5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTUG9zdHMvQ29sbGVjdGlvbnMvQXBpUG9zdHNDb2xsZWN0aW9uLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NQb3N0cy9Db2xsZWN0aW9ucy9Qb3N0c0NvbGxlY3Rpb24uY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU1Bvc3RzL0NvbnRyb2xsZXJzL0F1dG9SZWxvYWRDb250cm9sbGVyLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NQb3N0cy9Db250cm9sbGVycy9Qb3N0c0NvbnRyb2xsZXIuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU1Bvc3RzL01vZGVscy9Qb3N0TW9kZWwuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU1Bvc3RzL01vZGVscy9Qb3N0c0xheW91dE1vZGVsLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NQb3N0cy9TU1Bvc3RzLmNvZmZlZSIsInNyYy9zY3JpcHRzL01vZHVsZXMvU1NQb3N0cy9UZW1wbGF0ZXMvUG9zdEl0ZW1WaWV3VGVtcGxhdGUuaGJzIiwic3JjL3NjcmlwdHMvTW9kdWxlcy9TU1Bvc3RzL1RlbXBsYXRlcy9Qb3N0c0NvbXBvc2l0ZVZpZXdUZW1wbGF0ZS5oYnMiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTUG9zdHMvVmlld3MvUG9zdEl0ZW1WaWV3LmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NQb3N0cy9WaWV3cy9Qb3N0c0NvbXBvc2l0ZVZpZXcuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU1Bvc3RzL3NzUG9zdHNNYWluLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NTZWFyY2gvQ29udHJvbGxlcnMvU2VhcmNoQ29udHJvbGxlci5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTU2VhcmNoL01vZGVscy9TZWFyY2hNb2RlbC5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTU2VhcmNoL1NTU2VhcmNoLmNvZmZlZSIsInNyYy9zY3JpcHRzL01vZHVsZXMvU1NTZWFyY2gvVGVtcGxhdGVzL1NlYXJjaEl0ZW1WaWV3VGVtcGxhdGUuaGJzIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU1NlYXJjaC9WaWV3cy9TZWFyY2hJdGVtVmlldy5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTU2VhcmNoL3NzU2VhcmNoTWFpbi5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9UZW1wbGF0ZXMvSGVscGVycy90b1RpdGxlQ2FzZS5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9WaWV3cy9CYXNlQ29tcG9zaXRlVmlldy5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9WaWV3cy9CYXNlSXRlbVZpZXcuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvVmlld3MvSW5maW5pdGVTY3JvbGxDb21wb3NpdGVWaWV3LmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL1ZpZXdzL0xvYWRlckl0ZW1WaWV3LmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL2FwcC5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9hcHBNYWluLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL3NlbGVjdGl6ZS1ibGFja2xpc3RlZC1jaGFycy5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9zZWxlY3RpemUtdGFiLXNlcGFyYXRvci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQyxZQUFBLENBQUE7QUFBQSxPQU1ELENBQVMsV0FBVCxDQU5DLENBQUE7O0FBQUEsT0FTRCxDQUFTLDJCQUFULENBVEMsQ0FBQTs7QUFBQSxPQVVELENBQVMsK0JBQVQsQ0FWQyxDQUFBOztBQUFBLE9BYUQsQ0FBUyxrQkFBVCxDQWJDLENBQUE7O0FBQUEsT0FtQkQsQ0FBUyxtQ0FBVCxDQW5CQyxDQUFBOztBQUFBLE9Bb0JELENBQVMsK0JBQVQsQ0FwQkMsQ0FBQTs7QUFBQSxPQXFCRCxDQUFTLDZCQUFULENBckJDLENBQUE7O0FBQUEsT0FzQkQsQ0FBUyxpQ0FBVCxDQXRCQyxDQUFBOztBQUFBLE9BdUJELENBQVMsK0JBQVQsQ0F2QkMsQ0FBQTs7Ozs7QUNBQSxZQUFBLENBQUE7QUFHRCxJQUFPLHNCQUFQO0FBQ0MsRUFBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixFQUFqQixDQUREO0NBSEM7O0FBTUQsSUFBTywwQkFBUDtBQUNDLEVBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFmLEdBQXFCLFNBQUEsR0FBQSxDQUFyQixDQUREO0NBTkM7Ozs7O0FDQUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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YUEsaUJBQWlCLENBQUMsS0FBbEIsQ0FBd0IsS0FBeEIsRUFBMkIsU0FBM0IsRUFoQlc7SUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxFQUo2QjtBQUFBLENBQTVDLENBRkEsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIlxuXG4jIGV4dHJhIG1vZGVybml6ciBtb2R1bGVzXG4jIHJlcXVpcmUgJ2Jyb3dzZXJuaXpyL3Rlc3QvY3NzL29wYWNpdHknXG5cbiMgTWFpbiBhcHAgbG9hZGVyXG5yZXF1aXJlICcuL2FwcE1haW4nXG5cbiMgU2VsZWN0aXplXG5yZXF1aXJlICcuL3NlbGVjdGl6ZS10YWItc2VwYXJhdG9yJ1xucmVxdWlyZSAnLi9zZWxlY3RpemUtYmxhY2tsaXN0ZWQtY2hhcnMnXG5cbiMgY29uc29sZSBsb2cgc2hpbVxucmVxdWlyZSBcImNvbnNvbGUtbG9nLXNoaW1cIlxuXG4jIExvYWQgTW9kdWxlcyB0aGF0IHdpbGwgYmUgdXNlZCBieSB0aGUgYXBwXG4jIFRoZXNlIG1vZHVsZXMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHN0YXJ0ZWRcbiMgd2hlbiB0aGUgYXBwIHN0YXJ0cyAob24gZG9jcmVhZHkpIGluIHRoZVxuIyBvcmRlciB0aGV5IGFwcGVhciBoZXJlLlxucmVxdWlyZSAnLi9Nb2R1bGVzL1NTT3B0aW9ucy9zc09wdGlvbnNNYWluJ1xucmVxdWlyZSAnLi9Nb2R1bGVzL1NTUG9zdHMvc3NQb3N0c01haW4nXG5yZXF1aXJlICcuL01vZHVsZXMvU1NBdXRoL3NzQXV0aE1haW4nXG5yZXF1aXJlICcuL01vZHVsZXMvU1NTZWFyY2gvc3NTZWFyY2hNYWluJ1xucmVxdWlyZSAnLi9Nb2R1bGVzL1NTQWRtaW4vc3NBZG1pbk1haW4nXG4iLCJcInVzZSBzdHJpY3RcIlxuXG4jIHNoaW0gZm9yIGNvbnNvbGUgbG9nXG5pZiBub3Qgd2luZG93LmNvbnNvbGU/XG5cdHdpbmRvdy5jb25zb2xlID0ge31cblxuaWYgbm90IHdpbmRvdy5jb25zb2xlLmxvZz9cblx0d2luZG93LmNvbnNvbGUubG9nID0gKCkgLT5cblx0XHQjIGRvIG5vdGhpbmdcbiIsInZhciBNb2Rlcm5penIgPSByZXF1aXJlKCcuL2xpYi9Nb2Rlcm5penInKSxcbiAgICBNb2Rlcm5penJQcm90byA9IHJlcXVpcmUoJy4vbGliL01vZGVybml6clByb3RvJyksXG4gICAgY2xhc3NlcyA9IHJlcXVpcmUoJy4vbGliL2NsYXNzZXMnKSxcbiAgICB0ZXN0UnVubmVyID0gcmVxdWlyZSgnLi9saWIvdGVzdFJ1bm5lcicpLFxuICAgIHNldENsYXNzZXMgPSByZXF1aXJlKCcuL2xpYi9zZXRDbGFzc2VzJyk7XG5cbi8vIFJ1biBlYWNoIHRlc3RcbnRlc3RSdW5uZXIoKTtcblxuLy8gUmVtb3ZlIHRoZSBcIm5vLWpzXCIgY2xhc3MgaWYgaXQgZXhpc3RzXG5zZXRDbGFzc2VzKGNsYXNzZXMpO1xuXG5kZWxldGUgTW9kZXJuaXpyUHJvdG8uYWRkVGVzdDtcbmRlbGV0ZSBNb2Rlcm5penJQcm90by5hZGRBc3luY1Rlc3Q7XG5cbi8vIFJ1biB0aGUgdGhpbmdzIHRoYXQgYXJlIHN1cHBvc2VkIHRvIHJ1biBhZnRlciB0aGUgdGVzdHNcbmZvciAodmFyIGkgPSAwOyBpIDwgTW9kZXJuaXpyLl9xLmxlbmd0aDsgaSsrKSB7XG4gIE1vZGVybml6ci5fcVtpXSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGVybml6cjtcbiIsInZhciBNb2Rlcm5penJQcm90byA9IHJlcXVpcmUoJy4vTW9kZXJuaXpyUHJvdG8nKTtcblxuXG4gIC8vIEZha2Ugc29tZSBvZiBPYmplY3QuY3JlYXRlXG4gIC8vIHNvIHdlIGNhbiBmb3JjZSBub24gdGVzdCByZXN1bHRzXG4gIC8vIHRvIGJlIG5vbiBcIm93blwiIHByb3BlcnRpZXMuXG4gIHZhciBNb2Rlcm5penIgPSBmdW5jdGlvbigpe307XG4gIE1vZGVybml6ci5wcm90b3R5cGUgPSBNb2Rlcm5penJQcm90bztcblxuICAvLyBMZWFrIG1vZGVybml6ciBnbG9iYWxseSB3aGVuIHlvdSBgcmVxdWlyZWAgaXRcbiAgLy8gcmF0aGVyIHRoYW4gZm9yY2UgaXQgaGVyZS5cbiAgLy8gT3ZlcndyaXRlIG5hbWUgc28gY29uc3RydWN0b3IgbmFtZSBpcyBuaWNlciA6RFxuICBNb2Rlcm5penIgPSBuZXcgTW9kZXJuaXpyKCk7XG5cbiAgXG5cbm1vZHVsZS5leHBvcnRzID0gTW9kZXJuaXpyOyIsInZhciB0ZXN0cyA9IHJlcXVpcmUoJy4vdGVzdHMnKTtcblxuXG4gIHZhciBNb2Rlcm5penJQcm90byA9IHtcbiAgICAvLyBUaGUgY3VycmVudCB2ZXJzaW9uLCBkdW1teVxuICAgIF92ZXJzaW9uOiAndjMuMC4wcHJlJyxcblxuICAgIC8vIEFueSBzZXR0aW5ncyB0aGF0IGRvbid0IHdvcmsgYXMgc2VwYXJhdGUgbW9kdWxlc1xuICAgIC8vIGNhbiBnbyBpbiBoZXJlIGFzIGNvbmZpZ3VyYXRpb24uXG4gICAgX2NvbmZpZzoge1xuICAgICAgY2xhc3NQcmVmaXggOiAnJyxcbiAgICAgIGVuYWJsZUNsYXNzZXMgOiB0cnVlXG4gICAgfSxcblxuICAgIC8vIFF1ZXVlIG9mIHRlc3RzXG4gICAgX3E6IFtdLFxuXG4gICAgLy8gU3R1YiB0aGVzZSBmb3IgcGVvcGxlIHdobyBhcmUgbGlzdGVuaW5nXG4gICAgb246IGZ1bmN0aW9uKCB0ZXN0LCBjYiApIHtcbiAgICAgIC8vIEkgZG9uJ3QgcmVhbGx5IHRoaW5rIHBlb3BsZSBzaG91bGQgZG8gdGhpcywgYnV0IHdlIGNhblxuICAgICAgLy8gc2FmZSBndWFyZCBpdCBhIGJpdC5cbiAgICAgIC8vIC0tIE5PVEU6OiB0aGlzIGdldHMgV0FZIG92ZXJyaWRkZW4gaW4gc3JjL2FkZFRlc3QgZm9yXG4gICAgICAvLyBhY3R1YWwgYXN5bmMgdGVzdHMuIFRoaXMgaXMgaW4gY2FzZSBwZW9wbGUgbGlzdGVuIHRvXG4gICAgICAvLyBzeW5jaHJvbm91cyB0ZXN0cy4gSSB3b3VsZCBsZWF2ZSBpdCBvdXQsIGJ1dCB0aGUgY29kZVxuICAgICAgLy8gdG8gKmRpc2FsbG93KiBzeW5jIHRlc3RzIGluIHRoZSByZWFsIHZlcnNpb24gb2YgdGhpc1xuICAgICAgLy8gZnVuY3Rpb24gaXMgYWN0dWFsbHkgbGFyZ2VyIHRoYW4gdGhpcy5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHRoaXNbdGVzdF0pO1xuICAgICAgfSwgMCk7XG4gICAgfSxcblxuICAgIGFkZFRlc3Q6IGZ1bmN0aW9uKCBuYW1lLCBmbiwgb3B0aW9ucyApIHtcbiAgICAgIHRlc3RzLnB1c2goe25hbWUgOiBuYW1lLCBmbiA6IGZuLCBvcHRpb25zIDogb3B0aW9ucyB9KTtcbiAgICB9LFxuXG4gICAgYWRkQXN5bmNUZXN0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRlc3RzLnB1c2goe25hbWUgOiBudWxsLCBmbiA6IGZufSk7XG4gICAgfVxuICB9O1xuXG4gIFxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGVybml6clByb3RvOyIsIlxuICB2YXIgY2xhc3NlcyA9IFtdO1xuICBcbm1vZHVsZS5leHBvcnRzID0gY2xhc3NlczsiLCJcbiAgdmFyIGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcbiAgfTtcbiAgXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUVsZW1lbnQ7IiwiXG4gIHZhciBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBcbm1vZHVsZS5leHBvcnRzID0gZG9jRWxlbWVudDsiLCJ2YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4vY3JlYXRlRWxlbWVudCcpO1xuXG5cbiAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAvLyBBZnRlciBwYWdlIGxvYWQgaW5qZWN0aW5nIGEgZmFrZSBib2R5IGRvZXNuJ3Qgd29yayBzbyBjaGVjayBpZiBib2R5IGV4aXN0c1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIGlmKCFib2R5KSB7XG4gICAgICAvLyBDYW4ndCB1c2UgdGhlIHJlYWwgYm9keSBjcmVhdGUgYSBmYWtlIG9uZS5cbiAgICAgIGJvZHkgPSBjcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gICAgICBib2R5LmZha2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgXG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0Qm9keTsiLCJ2YXIgTW9kZXJuaXpyUHJvdG8gPSByZXF1aXJlKCcuL01vZGVybml6clByb3RvJyk7XG52YXIgZG9jRWxlbWVudCA9IHJlcXVpcmUoJy4vZG9jRWxlbWVudCcpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuL2NyZWF0ZUVsZW1lbnQnKTtcbnZhciBnZXRCb2R5ID0gcmVxdWlyZSgnLi9nZXRCb2R5Jyk7XG5cblxuICAvLyBJbmplY3QgZWxlbWVudCB3aXRoIHN0eWxlIGVsZW1lbnQgYW5kIHNvbWUgQ1NTIHJ1bGVzXG4gIGZ1bmN0aW9uIGluamVjdEVsZW1lbnRXaXRoU3R5bGVzKCBydWxlLCBjYWxsYmFjaywgbm9kZXMsIHRlc3RuYW1lcyApIHtcbiAgICB2YXIgbW9kID0gJ21vZGVybml6cic7XG4gICAgdmFyIHN0eWxlO1xuICAgIHZhciByZXQ7XG4gICAgdmFyIG5vZGU7XG4gICAgdmFyIGRvY092ZXJmbG93O1xuICAgIHZhciBkaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgYm9keSA9IGdldEJvZHkoKTtcblxuICAgIGlmICggcGFyc2VJbnQobm9kZXMsIDEwKSApIHtcbiAgICAgIC8vIEluIG9yZGVyIG5vdCB0byBnaXZlIGZhbHNlIHBvc2l0aXZlcyB3ZSBjcmVhdGUgYSBub2RlIGZvciBlYWNoIHRlc3RcbiAgICAgIC8vIFRoaXMgYWxzbyBhbGxvd3MgdGhlIG1ldGhvZCB0byBzY2FsZSBmb3IgdW5zcGVjaWZpZWQgdXNlc1xuICAgICAgd2hpbGUgKCBub2Rlcy0tICkge1xuICAgICAgICBub2RlID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vZGUuaWQgPSB0ZXN0bmFtZXMgPyB0ZXN0bmFtZXNbbm9kZXNdIDogbW9kICsgKG5vZGVzICsgMSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA8c3R5bGU+IGVsZW1lbnRzIGluIElFNi05IGFyZSBjb25zaWRlcmVkICdOb1Njb3BlJyBlbGVtZW50cyBhbmQgdGhlcmVmb3JlIHdpbGwgYmUgcmVtb3ZlZFxuICAgIC8vIHdoZW4gaW5qZWN0ZWQgd2l0aCBpbm5lckhUTUwuIFRvIGdldCBhcm91bmQgdGhpcyB5b3UgbmVlZCB0byBwcmVwZW5kIHRoZSAnTm9TY29wZScgZWxlbWVudFxuICAgIC8vIHdpdGggYSAnc2NvcGVkJyBlbGVtZW50LCBpbiBvdXIgY2FzZSB0aGUgc29mdC1oeXBoZW4gZW50aXR5IGFzIGl0IHdvbid0IG1lc3Mgd2l0aCBvdXIgbWVhc3VyZW1lbnRzLlxuICAgIC8vIG1zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTMzODk3JTI4VlMuODUlMjkuYXNweFxuICAgIC8vIERvY3VtZW50cyBzZXJ2ZWQgYXMgeG1sIHdpbGwgdGhyb3cgaWYgdXNpbmcgJnNoeTsgc28gdXNlIHhtbCBmcmllbmRseSBlbmNvZGVkIHZlcnNpb24uIFNlZSBpc3N1ZSAjMjc3XG4gICAgc3R5bGUgPSBbJyYjMTczOycsJzxzdHlsZSBpZD1cInMnLCBtb2QsICdcIj4nLCBydWxlLCAnPC9zdHlsZT4nXS5qb2luKCcnKTtcbiAgICBkaXYuaWQgPSBtb2Q7XG4gICAgLy8gSUU2IHdpbGwgZmFsc2UgcG9zaXRpdmUgb24gc29tZSB0ZXN0cyBkdWUgdG8gdGhlIHN0eWxlIGVsZW1lbnQgaW5zaWRlIHRoZSB0ZXN0IGRpdiBzb21laG93IGludGVyZmVyaW5nIG9mZnNldEhlaWdodCwgc28gaW5zZXJ0IGl0IGludG8gYm9keSBvciBmYWtlYm9keS5cbiAgICAvLyBPcGVyYSB3aWxsIGFjdCBhbGwgcXVpcmt5IHdoZW4gaW5qZWN0aW5nIGVsZW1lbnRzIGluIGRvY3VtZW50RWxlbWVudCB3aGVuIHBhZ2UgaXMgc2VydmVkIGFzIHhtbCwgbmVlZHMgZmFrZWJvZHkgdG9vLiAjMjcwXG4gICAgKCFib2R5LmZha2UgPyBkaXYgOiBib2R5KS5pbm5lckhUTUwgKz0gc3R5bGU7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGlmICggYm9keS5mYWtlICkge1xuICAgICAgLy9hdm9pZCBjcmFzaGluZyBJRTgsIGlmIGJhY2tncm91bmQgaW1hZ2UgaXMgdXNlZFxuICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAvL1NhZmFyaSA1LjEzLzUuMS40IE9TWCBzdG9wcyBsb2FkaW5nIGlmIDo6LXdlYmtpdC1zY3JvbGxiYXIgaXMgdXNlZCBhbmQgc2Nyb2xsYmFycyBhcmUgdmlzaWJsZVxuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgZG9jT3ZlcmZsb3cgPSBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93O1xuICAgICAgZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgZG9jRWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgICB9XG5cbiAgICByZXQgPSBjYWxsYmFjayhkaXYsIHJ1bGUpO1xuICAgIC8vIElmIHRoaXMgaXMgZG9uZSBhZnRlciBwYWdlIGxvYWQgd2UgZG9uJ3Qgd2FudCB0byByZW1vdmUgdGhlIGJvZHkgc28gY2hlY2sgaWYgYm9keSBleGlzdHNcbiAgICBpZiAoIGJvZHkuZmFrZSApIHtcbiAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KTtcbiAgICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2NPdmVyZmxvdztcbiAgICAgIC8vIFRyaWdnZXIgbGF5b3V0IHNvIGtpbmV0aWMgc2Nyb2xsaW5nIGlzbid0IGRpc2FibGVkIGluIGlPUzYrXG4gICAgICBkb2NFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gISFyZXQ7XG5cbiAgfVxuXG4gIFxuXG5tb2R1bGUuZXhwb3J0cyA9IGluamVjdEVsZW1lbnRXaXRoU3R5bGVzOyIsIlxuICAvKipcbiAgICogaXMgcmV0dXJucyBhIGJvb2xlYW4gZm9yIGlmIHR5cGVvZiBvYmogaXMgZXhhY3RseSB0eXBlLlxuICAgKi9cbiAgZnVuY3Rpb24gaXMoIG9iaiwgdHlwZSApIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gdHlwZTtcbiAgfVxuICBcbm1vZHVsZS5leHBvcnRzID0gaXM7IiwidmFyIE1vZGVybml6clByb3RvID0gcmVxdWlyZSgnLi9Nb2Rlcm5penJQcm90bycpO1xuXG5cbiAgLy8gTGlzdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gc2V0IGZvciBjc3MgdGVzdHMuIFNlZSB0aWNrZXQgIzIxXG4gIHZhciBwcmVmaXhlcyA9ICcgLXdlYmtpdC0gLW1vei0gLW8tIC1tcy0gJy5zcGxpdCgnICcpO1xuXG4gIC8vIGV4cG9zZSB0aGVzZSBmb3IgdGhlIHBsdWdpbiBBUEkuIExvb2sgaW4gdGhlIHNvdXJjZSBmb3IgaG93IHRvIGpvaW4oKSB0aGVtIGFnYWluc3QgeW91ciBpbnB1dFxuICBNb2Rlcm5penJQcm90by5fcHJlZml4ZXMgPSBwcmVmaXhlcztcblxuICBcblxubW9kdWxlLmV4cG9ydHMgPSBwcmVmaXhlczsiLCJ2YXIgTW9kZXJuaXpyID0gcmVxdWlyZSgnLi9Nb2Rlcm5penInKTtcbnZhciBkb2NFbGVtZW50ID0gcmVxdWlyZSgnLi9kb2NFbGVtZW50Jyk7XG5cblxuICAvLyBQYXNzIGluIGFuIGFuZCBhcnJheSBvZiBjbGFzcyBuYW1lcywgZS5nLjpcbiAgLy8gIFsnbm8td2VicCcsICdib3JkZXJyYWRpdXMnLCAuLi5dXG4gIGZ1bmN0aW9uIHNldENsYXNzZXMoIGNsYXNzZXMgKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGRvY0VsZW1lbnQuY2xhc3NOYW1lO1xuICAgIHZhciByZWdleDtcbiAgICB2YXIgY2xhc3NQcmVmaXggPSBNb2Rlcm5penIuX2NvbmZpZy5jbGFzc1ByZWZpeCB8fCAnJztcblxuICAgIC8vIENoYW5nZSBgbm8tanNgIHRvIGBqc2AgKHdlIGRvIHRoaXMgcmVnYXJkbGVzIG9mIHRoZSBgZW5hYmxlQ2xhc3Nlc2BcbiAgICAvLyBvcHRpb24pXG4gICAgLy8gSGFuZGxlIGNsYXNzUHJlZml4IG9uIHRoaXMgdG9vXG4gICAgdmFyIHJlSlMgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknK2NsYXNzUHJlZml4Kyduby1qcyhcXFxcc3wkKScpO1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKHJlSlMsICckMScrY2xhc3NQcmVmaXgrJ2pzJDInKTtcblxuICAgIGlmKE1vZGVybml6ci5fY29uZmlnLmVuYWJsZUNsYXNzZXMpIHtcbiAgICAgIC8vIEFkZCB0aGUgbmV3IGNsYXNzZXNcbiAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBjbGFzc1ByZWZpeCArIGNsYXNzZXMuam9pbignICcgKyBjbGFzc1ByZWZpeCk7XG4gICAgICBkb2NFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG5cbiAgfVxuXG4gIFxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENsYXNzZXM7IiwidmFyIHRlc3RzID0gcmVxdWlyZSgnLi90ZXN0cycpO1xudmFyIE1vZGVybml6ciA9IHJlcXVpcmUoJy4vTW9kZXJuaXpyJyk7XG52YXIgY2xhc3NlcyA9IHJlcXVpcmUoJy4vY2xhc3NlcycpO1xudmFyIGlzID0gcmVxdWlyZSgnLi9pcycpO1xuXG5cbiAgLy8gUnVuIHRocm91Z2ggYWxsIHRlc3RzIGFuZCBkZXRlY3QgdGhlaXIgc3VwcG9ydCBpbiB0aGUgY3VycmVudCBVQS5cbiAgZnVuY3Rpb24gdGVzdFJ1bm5lcigpIHtcbiAgICB2YXIgZmVhdHVyZU5hbWVzO1xuICAgIHZhciBmZWF0dXJlO1xuICAgIHZhciBhbGlhc0lkeDtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBuYW1lSWR4O1xuICAgIHZhciBmZWF0dXJlTmFtZTtcbiAgICB2YXIgZmVhdHVyZU5hbWVTcGxpdDtcbiAgICB2YXIgbW9kZXJuaXpyUHJvcDtcbiAgICB2YXIgbVByb3BDb3VudDtcblxuICAgIGZvciAoIHZhciBmZWF0dXJlSWR4IGluIHRlc3RzICkge1xuICAgICAgZmVhdHVyZU5hbWVzID0gW107XG4gICAgICBmZWF0dXJlID0gdGVzdHNbZmVhdHVyZUlkeF07XG4gICAgICAvLyBydW4gdGhlIHRlc3QsIHRocm93IHRoZSByZXR1cm4gdmFsdWUgaW50byB0aGUgTW9kZXJuaXpyLFxuICAgICAgLy8gICB0aGVuIGJhc2VkIG9uIHRoYXQgYm9vbGVhbiwgZGVmaW5lIGFuIGFwcHJvcHJpYXRlIGNsYXNzTmFtZVxuICAgICAgLy8gICBhbmQgcHVzaCBpdCBpbnRvIGFuIGFycmF5IG9mIGNsYXNzZXMgd2UnbGwgam9pbiBsYXRlci5cbiAgICAgIC8vXG4gICAgICAvLyAgIElmIHRoZXJlIGlzIG5vIG5hbWUsIGl0J3MgYW4gJ2FzeW5jJyB0ZXN0IHRoYXQgaXMgcnVuLFxuICAgICAgLy8gICBidXQgbm90IGRpcmVjdGx5IGFkZGVkIHRvIHRoZSBvYmplY3QuIFRoYXQgc2hvdWxkXG4gICAgICAvLyAgIGJlIGRvbmUgd2l0aCBhIHBvc3QtcnVuIGFkZFRlc3QgY2FsbC5cbiAgICAgIGlmICggZmVhdHVyZS5uYW1lICkge1xuICAgICAgICBmZWF0dXJlTmFtZXMucHVzaChmZWF0dXJlLm5hbWUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgICAgaWYgKGZlYXR1cmUub3B0aW9ucyAmJiBmZWF0dXJlLm9wdGlvbnMuYWxpYXNlcyAmJiBmZWF0dXJlLm9wdGlvbnMuYWxpYXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBBZGQgYWxsIHRoZSBhbGlhc2VzIGludG8gdGhlIG5hbWVzIGxpc3RcbiAgICAgICAgICBmb3IgKGFsaWFzSWR4ID0gMDsgYWxpYXNJZHggPCBmZWF0dXJlLm9wdGlvbnMuYWxpYXNlcy5sZW5ndGg7IGFsaWFzSWR4KyspIHtcbiAgICAgICAgICAgIGZlYXR1cmVOYW1lcy5wdXNoKGZlYXR1cmUub3B0aW9ucy5hbGlhc2VzW2FsaWFzSWR4XS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUnVuIHRoZSB0ZXN0LCBvciB1c2UgdGhlIHJhdyB2YWx1ZSBpZiBpdCdzIG5vdCBhIGZ1bmN0aW9uXG4gICAgICByZXN1bHQgPSBpcyhmZWF0dXJlLmZuLCAnZnVuY3Rpb24nKSA/IGZlYXR1cmUuZm4oKSA6IGZlYXR1cmUuZm47XG5cblxuICAgICAgLy8gU2V0IGVhY2ggb2YgdGhlIG5hbWVzIG9uIHRoZSBNb2Rlcm5penIgb2JqZWN0XG4gICAgICBmb3IgKG5hbWVJZHggPSAwOyBuYW1lSWR4IDwgZmVhdHVyZU5hbWVzLmxlbmd0aDsgbmFtZUlkeCsrKSB7XG4gICAgICAgIGZlYXR1cmVOYW1lID0gZmVhdHVyZU5hbWVzW25hbWVJZHhdO1xuICAgICAgICAvLyBTdXBwb3J0IGRvdCBwcm9wZXJ0aWVzIGFzIHN1YiB0ZXN0cy4gV2UgZG9uJ3QgZG8gY2hlY2tpbmcgdG8gbWFrZSBzdXJlXG4gICAgICAgIC8vIHRoYXQgdGhlIGltcGxpZWQgcGFyZW50IHRlc3RzIGhhdmUgYmVlbiBhZGRlZC4gWW91IG11c3QgY2FsbCB0aGVtIGluXG4gICAgICAgIC8vIG9yZGVyIChlaXRoZXIgaW4gdGhlIHRlc3QsIG9yIG1ha2UgdGhlIHBhcmVudCB0ZXN0IGEgZGVwZW5kZW5jeSkuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIENhcCBpdCB0byBUV08gdG8gbWFrZSB0aGUgbG9naWMgc2ltcGxlIGFuZCBiZWNhdXNlIHdobyBuZWVkcyB0aGF0IGtpbmQgb2Ygc3VidGVzdGluZ1xuICAgICAgICAvLyBoYXNodGFnIGZhbW91cyBsYXN0IHdvcmRzXG4gICAgICAgIGZlYXR1cmVOYW1lU3BsaXQgPSBmZWF0dXJlTmFtZS5zcGxpdCgnLicpO1xuXG4gICAgICAgIGlmIChmZWF0dXJlTmFtZVNwbGl0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIE1vZGVybml6cltmZWF0dXJlTmFtZVNwbGl0WzBdXSA9IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmZWF0dXJlTmFtZVNwbGl0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIE1vZGVybml6cltmZWF0dXJlTmFtZVNwbGl0WzBdXVtmZWF0dXJlTmFtZVNwbGl0WzFdXSA9IHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsYXNzZXMucHVzaCgocmVzdWx0ID8gJycgOiAnbm8tJykgKyBmZWF0dXJlTmFtZVNwbGl0LmpvaW4oJy0nKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgXG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdFJ1bm5lcjsiLCJ2YXIgTW9kZXJuaXpyUHJvdG8gPSByZXF1aXJlKCcuL01vZGVybml6clByb3RvJyk7XG52YXIgaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMgPSByZXF1aXJlKCcuL2luamVjdEVsZW1lbnRXaXRoU3R5bGVzJyk7XG5cblxuICB2YXIgdGVzdFN0eWxlcyA9IE1vZGVybml6clByb3RvLnRlc3RTdHlsZXMgPSBpbmplY3RFbGVtZW50V2l0aFN0eWxlcztcbiAgXG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdFN0eWxlczsiLCJcbiAgdmFyIHRlc3RzID0gW107XG4gIFxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0czsiLCJ2YXIgTW9kZXJuaXpyID0gcmVxdWlyZSgnLi8uLi9saWIvTW9kZXJuaXpyJyk7XG52YXIgcHJlZml4ZXMgPSByZXF1aXJlKCcuLy4uL2xpYi9wcmVmaXhlcycpO1xudmFyIHRlc3RTdHlsZXMgPSByZXF1aXJlKCcuLy4uL2xpYi90ZXN0U3R5bGVzJyk7XG5cbi8qIVxue1xuICBcIm5hbWVcIjogXCJUb3VjaCBFdmVudHNcIixcbiAgXCJwcm9wZXJ0eVwiOiBcInRvdWNoZXZlbnRzXCIsXG4gIFwiY2FuaXVzZVwiIDogXCJ0b3VjaFwiLFxuICBcInRhZ3NcIjogW1wibWVkaWFcIiwgXCJhdHRyaWJ1dGVcIl0sXG4gIFwibm90ZXNcIjogW3tcbiAgICBcIm5hbWVcIjogXCJUb3VjaCBFdmVudHMgc3BlY1wiLFxuICAgIFwiaHJlZlwiOiBcImh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTMvV0QtdG91Y2gtZXZlbnRzLTIwMTMwMTI0L1wiXG4gIH1dLFxuICBcIndhcm5pbmdzXCI6IFtcbiAgICBcIkluZGljYXRlcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgVG91Y2ggRXZlbnRzIHNwZWMsIGFuZCBkb2VzIG5vdCBuZWNlc3NhcmlseSByZWZsZWN0IGEgdG91Y2hzY3JlZW4gZGV2aWNlXCJcbiAgXSxcbiAgXCJrbm93bkJ1Z3NcIjogW1xuICAgIFwiRmFsc2UtcG9zaXRpdmUgb24gc29tZSBjb25maWd1cmF0aW9ucyBvZiBOb2tpYSBOOTAwXCIsXG4gICAgXCJGYWxzZS1wb3NpdGl2ZSBvbiBzb21lIEJsYWNrQmVycnkgNi4wIGJ1aWxkcyDigJMgaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzLzM3MiNpc3N1ZWNvbW1lbnQtMzExMjY5NVwiXG4gIF1cbn1cbiEqL1xuLyogRE9DXG5cbkluZGljYXRlcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgVzNDIFRvdWNoIEV2ZW50cyBBUEkuXG5cblRoaXMgKmRvZXMgbm90KiBuZWNlc3NhcmlseSByZWZsZWN0IGEgdG91Y2hzY3JlZW4gZGV2aWNlOlxuXG4qIE9sZGVyIHRvdWNoc2NyZWVuIGRldmljZXMgb25seSBlbXVsYXRlIG1vdXNlIGV2ZW50c1xuKiBNb2Rlcm4gSUUgdG91Y2ggZGV2aWNlcyBpbXBsZW1lbnQgdGhlIFBvaW50ZXIgRXZlbnRzIEFQSSBpbnN0ZWFkOiB1c2UgYE1vZGVybml6ci5wb2ludGVyZXZlbnRzYCB0byBkZXRlY3Qgc3VwcG9ydCBmb3IgdGhhdFxuKiBTb21lIGJyb3dzZXJzICYgT1Mgc2V0dXBzIG1heSBlbmFibGUgdG91Y2ggQVBJcyB3aGVuIG5vIHRvdWNoc2NyZWVuIGlzIGNvbm5lY3RlZFxuKiBGdXR1cmUgYnJvd3NlcnMgbWF5IGltcGxlbWVudCBvdGhlciBldmVudCBtb2RlbHMgZm9yIHRvdWNoIGludGVyYWN0aW9uc1xuXG5TZWUgdGhpcyBhcnRpY2xlOiBbWW91IENhbid0IERldGVjdCBBIFRvdWNoc2NyZWVuXShodHRwOi8vd3d3LnN0dWNveC5jb20vYmxvZy95b3UtY2FudC1kZXRlY3QtYS10b3VjaHNjcmVlbi8pLlxuXG5JdCdzIHJlY29tbWVuZGVkIHRvIGJpbmQgYm90aCBtb3VzZSBhbmQgdG91Y2gvcG9pbnRlciBldmVudHMgc2ltdWx0YW5lb3VzbHkg4oCTIHNlZSBbdGhpcyBIVE1MNSBSb2NrcyB0dXRvcmlhbF0oaHR0cDovL3d3dy5odG1sNXJvY2tzLmNvbS9lbi9tb2JpbGUvdG91Y2hhbmRtb3VzZS8pLlxuXG5UaGlzIHRlc3Qgd2lsbCBhbHNvIHJldHVybiBgdHJ1ZWAgZm9yIEZpcmVmb3ggNCBNdWx0aXRvdWNoIHN1cHBvcnQuXG5cbiovXG5cbiAgLy8gQ2hyb21lIChkZXNrdG9wKSB1c2VkIHRvIGxpZSBhYm91dCBpdHMgc3VwcG9ydCBvbiB0aGlzLCBidXQgdGhhdCBoYXMgc2luY2UgYmVlbiByZWN0aWZpZWQ6IGh0dHA6Ly9jcmJ1Zy5jb20vMzY0MTVcbiAgTW9kZXJuaXpyLmFkZFRlc3QoJ3RvdWNoZXZlbnRzJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJvb2w7XG4gICAgaWYoKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKSB7XG4gICAgICBib29sID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHF1ZXJ5ID0gWydAbWVkaWEgKCcscHJlZml4ZXMuam9pbigndG91Y2gtZW5hYmxlZCksKCcpLCdoZWFydHonLCcpJywneyNtb2Rlcm5penJ7dG9wOjlweDtwb3NpdGlvbjphYnNvbHV0ZX19J10uam9pbignJyk7XG4gICAgICB0ZXN0U3R5bGVzKHF1ZXJ5LCBmdW5jdGlvbiggbm9kZSApIHtcbiAgICAgICAgYm9vbCA9IG5vZGUub2Zmc2V0VG9wID09PSA5O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBib29sO1xuICB9KTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKmdsb2JhbHMgSGFuZGxlYmFyczogdHJ1ZSAqL1xudmFyIGJhc2UgPSByZXF1aXJlKFwiLi9oYW5kbGViYXJzL2Jhc2VcIik7XG5cbi8vIEVhY2ggb2YgdGhlc2UgYXVnbWVudCB0aGUgSGFuZGxlYmFycyBvYmplY3QuIE5vIG5lZWQgdG8gc2V0dXAgaGVyZS5cbi8vIChUaGlzIGlzIGRvbmUgdG8gZWFzaWx5IHNoYXJlIGNvZGUgYmV0d2VlbiBjb21tb25qcyBhbmQgYnJvd3NlIGVudnMpXG52YXIgU2FmZVN0cmluZyA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvc2FmZS1zdHJpbmdcIilbXCJkZWZhdWx0XCJdO1xudmFyIEV4Y2VwdGlvbiA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvZXhjZXB0aW9uXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvdXRpbHNcIik7XG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvcnVudGltZVwiKTtcblxuLy8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXG52YXIgY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBoYiA9IG5ldyBiYXNlLkhhbmRsZWJhcnNFbnZpcm9ubWVudCgpO1xuXG4gIFV0aWxzLmV4dGVuZChoYiwgYmFzZSk7XG4gIGhiLlNhZmVTdHJpbmcgPSBTYWZlU3RyaW5nO1xuICBoYi5FeGNlcHRpb24gPSBFeGNlcHRpb247XG4gIGhiLlV0aWxzID0gVXRpbHM7XG4gIGhiLmVzY2FwZUV4cHJlc3Npb24gPSBVdGlscy5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIGhiLlZNID0gcnVudGltZTtcbiAgaGIudGVtcGxhdGUgPSBmdW5jdGlvbihzcGVjKSB7XG4gICAgcmV0dXJuIHJ1bnRpbWUudGVtcGxhdGUoc3BlYywgaGIpO1xuICB9O1xuXG4gIHJldHVybiBoYjtcbn07XG5cbnZhciBIYW5kbGViYXJzID0gY3JlYXRlKCk7XG5IYW5kbGViYXJzLmNyZWF0ZSA9IGNyZWF0ZTtcblxuSGFuZGxlYmFyc1snZGVmYXVsdCddID0gSGFuZGxlYmFycztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIYW5kbGViYXJzOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIFV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgRXhjZXB0aW9uID0gcmVxdWlyZShcIi4vZXhjZXB0aW9uXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIFZFUlNJT04gPSBcIjIuMC4wXCI7XG5leHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO3ZhciBDT01QSUxFUl9SRVZJU0lPTiA9IDY7XG5leHBvcnRzLkNPTVBJTEVSX1JFVklTSU9OID0gQ09NUElMRVJfUkVWSVNJT047XG52YXIgUkVWSVNJT05fQ0hBTkdFUyA9IHtcbiAgMTogJzw9IDEuMC5yYy4yJywgLy8gMS4wLnJjLjIgaXMgYWN0dWFsbHkgcmV2MiBidXQgZG9lc24ndCByZXBvcnQgaXRcbiAgMjogJz09IDEuMC4wLXJjLjMnLFxuICAzOiAnPT0gMS4wLjAtcmMuNCcsXG4gIDQ6ICc9PSAxLngueCcsXG4gIDU6ICc9PSAyLjAuMC1hbHBoYS54JyxcbiAgNjogJz49IDIuMC4wLWJldGEuMSdcbn07XG5leHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xudmFyIGlzQXJyYXkgPSBVdGlscy5pc0FycmF5LFxuICAgIGlzRnVuY3Rpb24gPSBVdGlscy5pc0Z1bmN0aW9uLFxuICAgIHRvU3RyaW5nID0gVXRpbHMudG9TdHJpbmcsXG4gICAgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5mdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG59XG5cbmV4cG9ydHMuSGFuZGxlYmFyc0Vudmlyb25tZW50ID0gSGFuZGxlYmFyc0Vudmlyb25tZW50O0hhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nLFxuXG4gIHJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBpZiAoZm4pIHsgdGhyb3cgbmV3IEV4Y2VwdGlvbignQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBoZWxwZXJzJyk7IH1cbiAgICAgIFV0aWxzLmV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24obmFtZSwgcGFydGlhbCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBVdGlscy5leHRlbmQodGhpcy5wYXJ0aWFscywgIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBBIG1pc3NpbmcgZmllbGQgaW4gYSB7e2Zvb319IGNvbnN0dWN0LlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU29tZW9uZSBpcyBhY3R1YWxseSB0cnlpbmcgdG8gY2FsbCBzb21ldGhpbmcsIGJsb3cgdXAuXG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFwiTWlzc2luZyBoZWxwZXI6ICdcIiArIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoLTFdLm5hbWUgKyBcIidcIik7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZihjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICBpZihjb250ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgICAgb3B0aW9ucy5pZHMgPSBbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzLmVhY2goY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICB2YXIgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBVdGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMubmFtZSk7XG4gICAgICAgIG9wdGlvbnMgPSB7ZGF0YTogZGF0YX07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoJyk7XG4gICAgfVxuXG4gICAgdmFyIGZuID0gb3B0aW9ucy5mbiwgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZTtcbiAgICB2YXIgaSA9IDAsIHJldCA9IFwiXCIsIGRhdGE7XG5cbiAgICB2YXIgY29udGV4dFBhdGg7XG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgY29udGV4dFBhdGggPSBVdGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKSArICcuJztcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihjb250ZXh0KSkgeyBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpOyB9XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICB9XG5cbiAgICBpZihjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKGlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgICAgZm9yKHZhciBqID0gY29udGV4dC5sZW5ndGg7IGk8ajsgaSsrKSB7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEuaW5kZXggPSBpO1xuICAgICAgICAgICAgZGF0YS5maXJzdCA9IChpID09PSAwKTtcbiAgICAgICAgICAgIGRhdGEubGFzdCAgPSAoaSA9PT0gKGNvbnRleHQubGVuZ3RoLTEpKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbaV0sIHsgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gY29udGV4dCkge1xuICAgICAgICAgIGlmKGNvbnRleHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgICAgICBkYXRhLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgZGF0YS5pbmRleCA9IGk7XG4gICAgICAgICAgICAgIGRhdGEuZmlyc3QgPSAoaSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsga2V5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2tleV0sIHtkYXRhOiBkYXRhfSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoaSA9PT0gMCl7XG4gICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7IGNvbmRpdGlvbmFsID0gY29uZGl0aW9uYWwuY2FsbCh0aGlzKTsgfVxuXG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpcyB0byByZW5kZXIgdGhlIHBvc2l0aXZlIHBhdGggaWYgdGhlIHZhbHVlIGlzIHRydXRoeSBhbmQgbm90IGVtcHR5LlxuICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG4gICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cbiAgICBpZiAoKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsKSB8fCBVdGlscy5pc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVyc1snaWYnXS5jYWxsKHRoaXMsIGNvbmRpdGlvbmFsLCB7Zm46IG9wdGlvbnMuaW52ZXJzZSwgaW52ZXJzZTogb3B0aW9ucy5mbiwgaGFzaDogb3B0aW9ucy5oYXNofSk7XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIHZhciBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gVXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICAgIG9wdGlvbnMgPSB7ZGF0YTpkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgbGV2ZWwgPSBvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwgPyBwYXJzZUludChvcHRpb25zLmRhdGEubGV2ZWwsIDEwKSA6IDE7XG4gICAgaW5zdGFuY2UubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvb2t1cCcsIGZ1bmN0aW9uKG9iaiwgZmllbGQpIHtcbiAgICByZXR1cm4gb2JqICYmIG9ialtmaWVsZF07XG4gIH0pO1xufVxuXG52YXIgbG9nZ2VyID0ge1xuICBtZXRob2RNYXA6IHsgMDogJ2RlYnVnJywgMTogJ2luZm8nLCAyOiAnd2FybicsIDM6ICdlcnJvcicgfSxcblxuICAvLyBTdGF0ZSBlbnVtXG4gIERFQlVHOiAwLFxuICBJTkZPOiAxLFxuICBXQVJOOiAyLFxuICBFUlJPUjogMyxcbiAgbGV2ZWw6IDMsXG5cbiAgLy8gY2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgbWVzc2FnZSkge1xuICAgIGlmIChsb2dnZXIubGV2ZWwgPD0gbGV2ZWwpIHtcbiAgICAgIHZhciBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZVttZXRob2RdKSB7XG4gICAgICAgIGNvbnNvbGVbbWV0aG9kXS5jYWxsKGNvbnNvbGUsIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMubG9nZ2VyID0gbG9nZ2VyO1xudmFyIGxvZyA9IGxvZ2dlci5sb2c7XG5leHBvcnRzLmxvZyA9IGxvZztcbnZhciBjcmVhdGVGcmFtZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgZnJhbWUgPSBVdGlscy5leHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn07XG5leHBvcnRzLmNyZWF0ZUZyYW1lID0gY3JlYXRlRnJhbWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgdmFyIGxpbmU7XG4gIGlmIChub2RlICYmIG5vZGUuZmlyc3RMaW5lKSB7XG4gICAgbGluZSA9IG5vZGUuZmlyc3RMaW5lO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBub2RlLmZpcnN0Q29sdW1uO1xuICB9XG5cbiAgdmFyIHRtcCA9IEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBlcnJvclByb3BzLmxlbmd0aDsgaWR4KyspIHtcbiAgICB0aGlzW2Vycm9yUHJvcHNbaWR4XV0gPSB0bXBbZXJyb3JQcm9wc1tpZHhdXTtcbiAgfVxuXG4gIGlmIChsaW5lKSB7XG4gICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcbiAgICB0aGlzLmNvbHVtbiA9IG5vZGUuZmlyc3RDb2x1bW47XG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV4Y2VwdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIEV4Y2VwdGlvbiA9IHJlcXVpcmUoXCIuL2V4Y2VwdGlvblwiKVtcImRlZmF1bHRcIl07XG52YXIgQ09NUElMRVJfUkVWSVNJT04gPSByZXF1aXJlKFwiLi9iYXNlXCIpLkNPTVBJTEVSX1JFVklTSU9OO1xudmFyIFJFVklTSU9OX0NIQU5HRVMgPSByZXF1aXJlKFwiLi9iYXNlXCIpLlJFVklTSU9OX0NIQU5HRVM7XG52YXIgY3JlYXRlRnJhbWUgPSByZXF1aXJlKFwiLi9iYXNlXCIpLmNyZWF0ZUZyYW1lO1xuXG5mdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcbiAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgdmFyIHJ1bnRpbWVWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgICBjb21waWxlclZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiBcIitcbiAgICAgICAgICAgIFwiUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoXCIrcnVudGltZVZlcnNpb25zK1wiKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKFwiK2NvbXBpbGVyVmVyc2lvbnMrXCIpLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFwiVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYSBuZXdlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiBcIitcbiAgICAgICAgICAgIFwiUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uIChcIitjb21waWxlckluZm9bMV0rXCIpLlwiKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjsvLyBUT0RPOiBSZW1vdmUgdGhpcyBsaW5lIGFuZCBicmVhayB1cCBjb21waWxlUGFydGlhbFxuXG5mdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGVcIik7XG4gIH1cbiAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcbiAgfVxuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgdmFyIGludm9rZVBhcnRpYWxXcmFwcGVyID0gZnVuY3Rpb24ocGFydGlhbCwgaW5kZW50LCBuYW1lLCBjb250ZXh0LCBoYXNoLCBoZWxwZXJzLCBwYXJ0aWFscywgZGF0YSwgZGVwdGhzKSB7XG4gICAgaWYgKGhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIGhhc2gpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIG5hbWUsIGNvbnRleHQsIGhlbHBlcnMsIHBhcnRpYWxzLCBkYXRhLCBkZXB0aHMpO1xuXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHsgaGVscGVyczogaGVscGVycywgcGFydGlhbHM6IHBhcnRpYWxzLCBkYXRhOiBkYXRhLCBkZXB0aHM6IGRlcHRocyB9O1xuICAgICAgcGFydGlhbHNbbmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB7IGRhdGE6IGRhdGEgIT09IHVuZGVmaW5lZCwgY29tcGF0OiB0ZW1wbGF0ZVNwZWMuY29tcGF0IH0sIGVudik7XG4gICAgICByZXN1bHQgPSBwYXJ0aWFsc1tuYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgIHZhciBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBpbmRlbnQgKyBsaW5lc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJUaGUgcGFydGlhbCBcIiArIG5hbWUgKyBcIiBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlXCIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBKdXN0IGFkZCB3YXRlclxuICB2YXIgY29udGFpbmVyID0ge1xuICAgIGxvb2t1cDogZnVuY3Rpb24oZGVwdGhzLCBuYW1lKSB7XG4gICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGRlcHRoc1tpXSAmJiBkZXB0aHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhbWJkYTogZnVuY3Rpb24oY3VycmVudCwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcbiAgICB9LFxuXG4gICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcbiAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuICAgIGZuOiBmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVTcGVjW2ldO1xuICAgIH0sXG5cbiAgICBwcm9ncmFtczogW10sXG4gICAgcHJvZ3JhbTogZnVuY3Rpb24oaSwgZGF0YSwgZGVwdGhzKSB7XG4gICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSBwcm9ncmFtKHRoaXMsIGksIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24oZGF0YSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlIChkYXRhICYmIGRlcHRoLS0pIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIHZhciByZXQgPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIHJldCA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgdmFyIHJldCA9IGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgdmFyIGRlcHRocztcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgZGVwdGhzID0gb3B0aW9ucy5kZXB0aHMgPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IFtjb250ZXh0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGVTcGVjLm1haW4uY2FsbChjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGRlcHRocyk7XG4gIH07XG4gIHJldC5pc1RvcCA9IHRydWU7XG5cbiAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5oZWxwZXJzLCBlbnYuaGVscGVycyk7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBvcHRpb25zLmhlbHBlcnM7XG4gICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcHRpb25zLnBhcnRpYWxzO1xuICAgIH1cbiAgfTtcblxuICByZXQuX2NoaWxkID0gZnVuY3Rpb24oaSwgZGF0YSwgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO2Z1bmN0aW9uIHByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVwdGhzKSB7XG4gIHZhciBwcm9nID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgcmV0dXJuIGZuLmNhbGwoY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBvcHRpb25zLmRhdGEgfHwgZGF0YSwgZGVwdGhzICYmIFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKSk7XG4gIH07XG4gIHByb2cucHJvZ3JhbSA9IGk7XG4gIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcbiAgcmV0dXJuIHByb2c7XG59XG5cbmV4cG9ydHMucHJvZ3JhbSA9IHByb2dyYW07ZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBuYW1lLCBjb250ZXh0LCBoZWxwZXJzLCBwYXJ0aWFscywgZGF0YSwgZGVwdGhzKSB7XG4gIHZhciBvcHRpb25zID0geyBwYXJ0aWFsOiB0cnVlLCBoZWxwZXJzOiBoZWxwZXJzLCBwYXJ0aWFsczogcGFydGlhbHMsIGRhdGE6IGRhdGEsIGRlcHRoczogZGVwdGhzIH07XG5cbiAgaWYocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcIlRoZSBwYXJ0aWFsIFwiICsgbmFtZSArIFwiIGNvdWxkIG5vdCBiZSBmb3VuZFwiKTtcbiAgfSBlbHNlIGlmKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydHMuaW52b2tlUGFydGlhbCA9IGludm9rZVBhcnRpYWw7ZnVuY3Rpb24gbm9vcCgpIHsgcmV0dXJuIFwiXCI7IH1cblxuZXhwb3J0cy5ub29wID0gbm9vcDtmdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufSIsIlwidXNlIHN0cmljdFwiO1xuLy8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcbmZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG4gIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xufVxuXG5TYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gXCJcIiArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTYWZlU3RyaW5nOyIsIlwidXNlIHN0cmljdFwiO1xuLypqc2hpbnQgLVcwMDQgKi9cbnZhciBTYWZlU3RyaW5nID0gcmVxdWlyZShcIi4vc2FmZS1zdHJpbmdcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgZXNjYXBlID0ge1xuICBcIiZcIjogXCImYW1wO1wiLFxuICBcIjxcIjogXCImbHQ7XCIsXG4gIFwiPlwiOiBcIiZndDtcIixcbiAgJ1wiJzogXCImcXVvdDtcIixcbiAgXCInXCI6IFwiJiN4Mjc7XCIsXG4gIFwiYFwiOiBcIiYjeDYwO1wiXG59O1xuXG52YXIgYmFkQ2hhcnMgPSAvWyY8PlwiJ2BdL2c7XG52YXIgcG9zc2libGUgPSAvWyY8PlwiJ2BdLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5mdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnRzLmV4dGVuZCA9IGV4dGVuZDt2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbnZhciBpc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG59O1xuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICBpZiAoc3RyaW5nIGluc3RhbmNlb2YgU2FmZVN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcudG9TdHJpbmcoKTtcbiAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9IGVsc2UgaWYgKCFzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gIH1cblxuICAvLyBGb3JjZSBhIHN0cmluZyBjb252ZXJzaW9uIGFzIHRoaXMgd2lsbCBiZSBkb25lIGJ5IHRoZSBhcHBlbmQgcmVnYXJkbGVzcyBhbmRcbiAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuICBzdHJpbmcgPSBcIlwiICsgc3RyaW5nO1xuXG4gIGlmKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHsgcmV0dXJuIHN0cmluZzsgfVxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYmFkQ2hhcnMsIGVzY2FwZUNoYXIpO1xufVxuXG5leHBvcnRzLmVzY2FwZUV4cHJlc3Npb24gPSBlc2NhcGVFeHByZXNzaW9uO2Z1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O2Z1bmN0aW9uIGFwcGVuZENvbnRleHRQYXRoKGNvbnRleHRQYXRoLCBpZCkge1xuICByZXR1cm4gKGNvbnRleHRQYXRoID8gY29udGV4dFBhdGggKyAnLicgOiAnJykgKyBpZDtcbn1cblxuZXhwb3J0cy5hcHBlbmRDb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoOyIsIi8vIENyZWF0ZSBhIHNpbXBsZSBwYXRoIGFsaWFzIHRvIGFsbG93IGJyb3dzZXJpZnkgdG8gcmVzb2x2ZVxuLy8gdGhlIHJ1bnRpbWUgb24gYSBzdXBwb3J0ZWQgcGF0aC5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKVtcImRlZmF1bHRcIl07XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5BcHAgICAgICA9IHJlcXVpcmUgJ2FwcCdcbkJhY2tib25lID0gcmVxdWlyZSBcImJhY2tib25lXCJcblxuY2xhc3MgQXBwLkNvbGxlY3Rpb25zLkFwaUNvbGxlY3Rpb24gZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uXG5cbiAgYXBpVXJsOiAnLydcblxuICB1cmw6ID0+XG4gICAgQXBwLnJlcXVlc3QoJ2FwaVJvb3QnKSArIF8ucmVzdWx0KEAsICdhcGlVcmwnKVxuXG5cbiAgcGFyc2U6IChyZXNwb25zZSkgPT5cbiAgICByZXNwb25zZS5kYXRhXG5cblxuXG4gIGZldGNoOiAob3B0aW9ucykgPT5cblxuICAgICMgQ2hlY2sgaWYgd2UgbmVlZCB0byBwYXNzIGFsb25nIGFueSBnZXQgdmFyaWFibGVzXG4gICAgaWYgbm90IEBkYXRhP1xuICAgICAgZGF0YSA9IHt9XG5cbiAgICAjIHNldCBleHRyYSBmaWVsZHNcbiAgICBpZiBub3QgXy5pc0VtcHR5KEBkYXRhKVxuXG4gICAgICBpZiBub3Qgb3B0aW9ucz9cbiAgICAgICAgb3B0aW9ucyA9IHt9XG5cbiAgICAgIGlmIG5vdCBvcHRpb25zLmRhdGE/XG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9XG5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IF8uZXh0ZW5kIHt9LCBAZGF0YSwgb3B0aW9ucy5kYXRhXG5cbiAgICBBcHAuQ29sbGVjdGlvbnMuQXBpQ29sbGVjdGlvbi5fX3N1cGVyX18uZmV0Y2guYXBwbHkgQCwgWyBvcHRpb25zIF1cblxuXG4iLCJcInVzZSBzdHJpY3RcIlxuXG5BcHAgICAgICA9IHJlcXVpcmUgJ2FwcCdcblxuY2xhc3MgQXBwLkNvbGxlY3Rpb25zLkluZmluaXRlU2Nyb2xsQ29sbGVjdGlvbiBleHRlbmRzIEFwcC5Db2xsZWN0aW9ucy5BcGlDb2xsZWN0aW9uXG5cbiAgbmV4dFBhZ2U6IChhcmdzKSA9PlxuXG4gICAgQGZldGNoIGFyZ3NcblxuXG4gIHBhcnNlOiAocmVzcG9uc2UpID0+XG5cbiAgICAjIGNoZWNrIGlmIHRoZSBjb2xsZWN0aW9uIGhhcyBhIG5leHQgcGFnZVxuICAgIGlmIEBkYXRhPyBhbmQgQGRhdGEucGVyUGFnZT8gYW5kIHJlc3BvbnNlLmRhdGEubGVuZ3RoIDwgQGRhdGEucGVyUGFnZVxuICAgICAgQGhhc05leHQgPSBmYWxzZVxuXG4gICAgcmVzcG9uc2UuZGF0YVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbkFwcCAgICAgICA9IHJlcXVpcmUgXCJhcHBcIlxuJCAgICAgICAgID0gcmVxdWlyZSBcImpxdWVyeVwiXG5CYWNrYm9uZSAgPSByZXF1aXJlIFwiYmFja2JvbmVcIlxuXyAgICAgICAgID0gcmVxdWlyZSBcInVuZGVyc2NvcmVcIlxuXG5cbkFwcC5hZGRJbml0aWFsaXplciAtPlxuXG4gICMgc2V0IGJhY2tib25lIGdsb2JhbCBvcHRpb25zXG4gIEJhY2tib25lLmVtdWxhdGVKU09OID0gdHJ1ZVxuICBCYWNrYm9uZS5lbXVsYXRlSFRUUCA9IHRydWVcblxuICB0cmltQ2hhciA9IChzdHIsIGNoYXIpIC0+XG5cbiAgICBpZiBzdHIuY2hhckF0KDApIGlzIGNoYXJcbiAgICAgIHN0ciA9IHN0ci5zdWJzdHIgMVxuXG4gICAgaWYgc3RyLmNoYXJBdCggc3RyLmxlbmd0aCAtIDEgKSBpcyBjaGFyXG4gICAgICBzdHIgPSBzdHIuc3Vic3RyIDAsIHN0ci5sZW5ndGggLSAxXG5cbiAgICBzdHJcblxuXG4gIG5vcm1hbGl6ZVJlcXVlc3QgPSAodXJsKSAtPlxuXG4gICAgIyBnZXQgdGhlIEFQSSByZXF1ZXN0IHBhdGggZnJvbSB0aGUgVVJMXG4gICAgYXBpUm9vdCA9IEFwcC5yZXF1ZXN0ICdhcGlSb290J1xuICAgIGlmIHVybC5pbmRleE9mKGFwaVJvb3QpID49IDBcbiAgICAgIHVybFBhcnRzID0gdXJsLnNwbGl0IGFwaVJvb3RcbiAgICAgIHVybCA9IHVybFBhcnRzWzFdXG5cbiAgICAjIHRyaW0gc2xhc2hlc1xuICAgIHVybCA9IHRyaW1DaGFyIHVybCwgJy8nXG5cbiAgICB1cmxcblxuXG4gIHJlYWREb20gPSAob3B0aW9ucykgLT5cblxuICAgICMgY2hlY2sgRE9NIVxuICAgIGlmIG9wdGlvbnMudHlwZSBpcyAnR0VUJ1xuXG4gICAgICAjIGdldCBBUEkgcmVxdWVzdCBmcm9tIHVybFxuICAgICAgcmVxdWVzdCA9IG5vcm1hbGl6ZVJlcXVlc3Qgb3B0aW9ucy51cmxcbiAgICAgIHJlcXVlc3RJRFF1ZXJ5ID0gJydcblxuICAgICAgaWYgb3B0aW9ucy5kYXRhPyBhbmQgb3B0aW9ucy5kYXRhLnJlcXVlc3RJRD8gYW5kIG9wdGlvbnMuZGF0YS5yZXF1ZXN0SUQgaXNudCAnJ1xuICAgICAgICByZXF1ZXN0SURRdWVyeSA9ICdbZGF0YS1pZD1cIicgKyBvcHRpb25zLmRhdGEucmVxdWVzdElEICsgJ1wiXSdcblxuXG4gICAgICAkZGF0YUVsZW1lbnQgPSAkKCcuYndhcGktY2FsbC1kYXRhW2RhdGEtdHlwZT1cImdldFwiXScgKyByZXF1ZXN0SURRdWVyeSArICdbZGF0YS1yZXF1ZXN0PVwiJyArIHJlcXVlc3QgKyAnXCJdOm5vdCgubG9hZGVkKScpXG5cbiAgICAgIGlmICRkYXRhRWxlbWVudC5sZW5ndGggPiAwXG5cbiAgICAgICAgIyBhZGQgbG9hZGVkIGNsYXNzXG4gICAgICAgICRkYXRhRWxlbWVudC5hZGRDbGFzcygnbG9hZGVkJylcblxuXG4gICAgICAgICMgdHJ5IHRvIGxvb2sgZm9yIG1vZGVsIGRhdGEgb24gZG9tLlxuICAgICAgICBkYXRhID0gQXBwLkhlbHBlcnMuZGF0YS5nZXRFbGVtZW50RGF0YSggJGRhdGFFbGVtZW50IClcblxuICAgICAgICBpZiBkYXRhPyBhbmQgZGF0YSBpc250ICcnIGFuZCBub3QgXy5pc0VtcHR5KGRhdGEpXG5cbiAgICAgICAgICAjIGNvbnNvbGUubG9nICdVc2luZyBET00hISEnLCByZXF1ZXN0XG5cbiAgICAgICAgICAjIGNoZWNrIGlmIHdlIGhhdmUgdGhlIG9wdGlvbnMgaGFzaFxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIG5vdCBvcHRpb25zP1xuXG4gICAgICAgICAgIyBjYWxsIGNhbGxiYWNrIGZ1bmN0aW9ucywgaWYgZGVmaW5lZFxuICAgICAgICAgIGlmIGRhdGEubWV0YS5jb2RlIGlzIDIwMFxuXG4gICAgICAgICAgICAjIGNhbGwgU1VDQ0VTUyBjYWxsYmFja1xuICAgICAgICAgICAgaWYgdHlwZW9mIG9wdGlvbnMuc3VjY2VzcyBpcyAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgIG9wdGlvbnMuc3VjY2Vzcy5hcHBseSBALCBbZGF0YV1cblxuICAgICAgICAgIGVsc2VcblxuICAgICAgICAgICAgIyBjYWxsIEVSUk9SIGNhbGxiYWNrXG4gICAgICAgICAgICBpZiB0eXBlb2Ygb3B0aW9ucy5lcnJvciBpcyAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgIG9wdGlvbnMuZXJyb3IuYXBwbHkgQCwgW2RhdGFdXG5cbiAgICAgICAgICAjIGNhbGwgQ09NUExFVEUgY2FsbGJhY2tcbiAgICAgICAgICBpZiB0eXBlb2Ygb3B0aW9ucy5jb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICAgICAgICBvcHRpb25zLmNvbXBsZXRlLmFwcGx5IEAsIFtkYXRhXVxuXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuXG5cblxuXG5cbiAgYWpheEltbWVkaWF0ZSA9IChvcHRpb25zKSAtPlxuXG4gICAgIyBDaGVjayBpZiB3ZSBjYW4gY2FsbCB0aHJvdWdoIHRoZSBXZWJTb2NrZXQgYXBpXG4gICAgY29ubmVjdGVkID0gQXBwLmFwaVNvY2tldC5nZXQgJ2Nvbm5lY3RlZCcgaWYgQXBwLmFwaVNvY2tldD9cbiAgICBpZiBjb25uZWN0ZWQ/IGFuZCBjb25uZWN0ZWRcblxuICAgICAgIyBjb25zb2xlLmxvZyAnVXNpbmcgV2ViU29ja2V0cyEhISdcbiAgICAgIHhociA9IEFwcC5hcGlTb2NrZXQuY2FsbCBvcHRpb25zLnR5cGUsIG9wdGlvbnMudXJsLCBvcHRpb25zLmRhdGEsIG9wdGlvbnNcblxuICAgIGVsc2VcblxuICAgICAgIyBjb25zb2xlLmxvZyAnVXNpbmcgQUpBWCEhISdcbiAgICAgIHhociA9IGFqYXhCYWNrdXAgb3B0aW9uc1xuXG4gICAgeGhyXG5cblxuXG4gIGFwaUNhbGxTdGFjayA9IFtdXG5cbiAgYWpheERlYm91bmNlV3JhcHBlciA9IChmdW5jKSAtPlxuXG4gICAgIyBjb25zb2xlLmxvZyAnYWpheERlYm91bmNlV3JhcHBlcicsIGFwaUNhbGxTdGFja1xuXG4gICAgIyBjaGVjayBpZiB3ZSBoYXZlIGFueSBjYWxscyBpbiB0aGUgc3RhY2tcbiAgICByZXR1cm4gaWYgYXBpQ2FsbFN0YWNrLmxlbmd0aCA9PSAwXG5cbiAgICAjIGNvbnNvbGUubG9nICdTZW5kaW5nIGJhdGNoIHJlcXVlc3QgZm9yICcgKyBhcGlDYWxsU3RhY2subGVuZ3RoICsgJyBBUEkgY2FsbHMnXG5cbiAgICAjIGdldCBjb250ZW50IHR5cGUgZnJvbSBmaXJzdCBjYWxsIGluIHN0YWNrXG4gICAgY29udGVudFR5cGUgPSBhcGlDYWxsU3RhY2tbMF0uY29udGVudFR5cGVcbiAgICBkYXRhVHlwZSA9IFwianNvblwiXG4gICAgdHlwZSA9IFwiUE9TVFwiXG4gICAgYXBpUm9vdCA9IEFwcC5yZXF1ZXN0ICdhcGlSb290J1xuICAgIHVybCA9IGFwaVJvb3QgKyBcIjEvc2l0ZS9iYXRjaC9cIlxuXG5cbiAgICBkYXRhID0ge31cbiAgICBhcGlDYWxsT3B0aW9ucyA9IHt9XG5cbiAgICAjIGJ1aWxkICdzdWNjZXNzJywgJ2NvbXBsZXRlJyBhbmQgJ2Vycm9yJyBjYWxsYmFja3NcbiAgICBmb3IgYXBpQ2FsbCwgYXBpQ2FsbEluZGV4IGluIGFwaUNhbGxTdGFja1xuXG4gICAgICByZXF1ZXN0ID0gbm9ybWFsaXplUmVxdWVzdCBhcGlDYWxsLnVybFxuXG4gICAgICBpZiBhcGlDYWxsLmRhdGE/XG4gICAgICAgIGFwaUNhbGxEYXRhID0gYXBpQ2FsbC5kYXRhXG4gICAgICBlbHNlXG4gICAgICAgIGFwaUNhbGxEYXRhID0gJydcblxuICAgICAgcmVxdWVzdElEID0gYXBpQ2FsbEluZGV4ICsgJzonICsgYXBpQ2FsbC50eXBlICsgJzonICsgcmVxdWVzdFxuXG4gICAgICBkYXRhWyByZXF1ZXN0SUQgXSA9XG4gICAgICAgIHVybDogcmVxdWVzdFxuICAgICAgICB0eXBlOiBhcGlDYWxsLnR5cGVcbiAgICAgICAgZGF0YTogYXBpQ2FsbERhdGFcblxuICAgICAgYXBpQ2FsbE9wdGlvbnNbIHJlcXVlc3RJRCBdID0gYXBpQ2FsbFxuXG5cbiAgICBzdWNjZXNzID0gKGJhdGNoUmVzcG9uc2UsIGJhdGNoUmVzcG9uc2VUZXh0LCBiYXRjaFhIUikgLT5cbiAgICAgICMgY29uc29sZS5sb2cgJ2JhdGNoIHN1Y2Nlc3MnLCBiYXRjaFJlc3BvbnNlXG5cbiAgICAgICMgIyBjaGVjayBmb3IgZXJyb3IgcmVzcG9uc2VcbiAgICAgICMgaWYgYmF0Y2hSZXNwb25zZS5yZXN1bHQ/IGFuZCBiYXRjaFJlc3BvbnNlLnJlc3VsdCBpc250ICdzdWNjZXNzJyBhbmQgYmF0Y2hSZXNwb25zZS5yZXN1bHQgaXNudCAnYWJvcnQnXG5cbiAgICAgICMgICAjIHRyaWdnZXIgYXBwIGV2ZW50XG4gICAgICAjICAgQXBwLnZlbnQudHJpZ2dlciAnYWpheDplcnJvcicsIGJhdGNoUmVzcG9uc2UsIGJhdGNoUmVzcG9uc2VUZXh0LCBiYXRjaFhIUlxuXG4gICAgICAjICAgcmV0dXJuXG5cblxuICAgICAgIyBjaGVjayBlYWNoIHJlc3BvbnNlIGFuZCBjYWxsIHByb3BlciBjYWxsYmFjayAoJ3N1Y2Nlc3MnIG9yICdlcnJvcicpXG4gICAgICByZXNwb25zZXMgPSBiYXRjaFJlc3BvbnNlLmRhdGFcblxuICAgICAgaWYgbm90IHJlc3BvbnNlcz9cbiAgICAgICAgcmVzcG9uc2VzID0ge31cblxuICAgICAgIyBzYXZlIGJhdGNoIGNhbGxiYWNrcyBpbiBhbiBhcnJheVxuICAgICAgYmF0Y2hDYWxsYmFja3MgPSBbXVxuXG4gICAgICBmb3IgcmVxdWVzdElELCBhcGlDYWxsIG9mIGFwaUNhbGxPcHRpb25zXG4gICAgICAgICMgY29uc29sZS5sb2cgcmVxdWVzdElELCBhcGlDYWxsXG4gICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2VzWyByZXF1ZXN0SUQgXVxuXG4gICAgICAgIGlmIG5vdCByZXNwb25zZT9cbiAgICAgICAgICByZXNwb25zZSA9IHt9XG5cbiAgICAgICAgcmVzcG9uc2VSZXN1bHQgPSAnZXJyb3InXG4gICAgICAgIGlmIHJlc3BvbnNlLnN0YXR1cz8gYW5kIHJlc3BvbnNlLnN0YXR1cyBpcyAnc3VjY2VzcydcbiAgICAgICAgICByZXNwb25zZVJlc3VsdCA9ICdzdWNjZXNzJ1xuXG4gICAgICAgIGNhbGxiYWNrID0gYXBpQ2FsbFsgcmVzcG9uc2VSZXN1bHQgXVxuICAgICAgICBjb250ZXh0ID0gYXBpQ2FsbC5jb250ZXh0XG5cbiAgICAgICAgaWYgdHlwZW9mIGNhbGxiYWNrIGlzICdmdW5jdGlvbidcbiAgICAgICAgICBjYWxsYmFjay5hcHBseSBjb250ZXh0LCBbIHJlc3BvbnNlIF1cblxuICAgICAgICAjIGJhdGNoIGNhbGxiYWNrXG4gICAgICAgIGJhdGNoQ2FsbGJhY2sgPSBhcGlDYWxsWyAnYmF0Y2hTdWNjZXNzJyBdXG5cbiAgICAgICAgaWYgdHlwZW9mIGJhdGNoQ2FsbGJhY2sgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgICAgIGJhdGNoQ2FsbGJhY2tzLnB1c2hcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhcGlDYWxsWyAnYmF0Y2hTdWNjZXNzJyBdXG5cblxuICAgICAgZm9yIGJhdGNoQ2FsbGJhY2sgaW4gYmF0Y2hDYWxsYmFja3NcbiAgICAgICAgYmF0Y2hDYWxsYmFjay5jYWxsYmFjay5hcHBseSBiYXRjaENhbGxiYWNrLmNvbnRleHQsIFsgYmF0Y2hSZXNwb25zZSBdXG5cblxuICAgIGNvbXBsZXRlID0gLT5cbiAgICAgICMgY29uc29sZS5sb2cgJ2NvbXBsZXRlJywgYXJndW1lbnRzXG5cbiAgICAgICMgc2F2ZSBiYXRjaCBjYWxsYmFja3MgaW4gYW4gYXJyYXlcbiAgICAgIGJhdGNoQ2FsbGJhY2tzID0gW11cblxuICAgICAgIyBmaXJlICdjb21wbGV0ZScgY2FsbGJhY2sgZm9yIGFsbCByZXF1ZXN0cyBpbiBiYXRjaFxuICAgICAgZm9yIHJlcXVlc3RJRCwgYXBpQ2FsbCBvZiBhcGlDYWxsT3B0aW9uc1xuXG4gICAgICAgIGNhbGxiYWNrID0gYXBpQ2FsbFsgJ2NvbXBsZXRlJyBdXG4gICAgICAgIGNvbnRleHQgPSBhcGlDYWxsLmNvbnRleHRcblxuICAgICAgICBpZiB0eXBlb2YgY2FsbGJhY2sgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgICAgIGNhbGxiYWNrLmFwcGx5IGNvbnRleHQsIGFyZ3VtZW50c1xuXG4gICAgICAgICMgYmF0Y2ggY2FsbGJhY2tcbiAgICAgICAgYmF0Y2hDYWxsYmFjayA9IGFwaUNhbGxbICdiYXRjaENvbXBsZXRlJyBdXG5cbiAgICAgICAgaWYgdHlwZW9mIGJhdGNoQ2FsbGJhY2sgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgICAgIGJhdGNoQ2FsbGJhY2tzLnB1c2hcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhcGlDYWxsWyAnYmF0Y2hDb21wbGV0ZScgXVxuXG5cblxuICAgICAgZm9yIGJhdGNoQ2FsbGJhY2sgaW4gYmF0Y2hDYWxsYmFja3NcbiAgICAgICAgYmF0Y2hDYWxsYmFjay5jYWxsYmFjay5hcHBseSBiYXRjaENhbGxiYWNrLmNvbnRleHQsIGFyZ3VtZW50c1xuXG5cbiAgICBlcnJvciA9IC0+XG4gICAgICAjIGNvbnNvbGUubG9nICdlcnJvcicsIGFyZ3VtZW50c1xuXG4gICAgICAjIHNhdmUgYmF0Y2ggY2FsbGJhY2tzIGluIGFuIGFycmF5XG4gICAgICBiYXRjaENhbGxiYWNrcyA9IFtdXG5cbiAgICAgICMgZmlyZSAnZXJyb3InIGNhbGxiYWNrIGZvciBhbGwgcmVxdWVzdHMgaW4gYmF0Y2hcbiAgICAgIGZvciByZXF1ZXN0SUQsIGFwaUNhbGwgb2YgYXBpQ2FsbE9wdGlvbnNcblxuICAgICAgICBjYWxsYmFjayA9IGFwaUNhbGxbICdlcnJvcicgXVxuICAgICAgICBjb250ZXh0ID0gYXBpQ2FsbC5jb250ZXh0XG5cbiAgICAgICAgaWYgdHlwZW9mIGNhbGxiYWNrIGlzICdmdW5jdGlvbidcbiAgICAgICAgICBjYWxsYmFjay5hcHBseSBjb250ZXh0LCBhcmd1bWVudHNcblxuICAgICAgICAjIGJhdGNoIGNhbGxiYWNrXG4gICAgICAgIGJhdGNoQ2FsbGJhY2sgPSBhcGlDYWxsWyAnYmF0Y2hFcnJvcicgXVxuXG4gICAgICAgIGlmIHR5cGVvZiBiYXRjaENhbGxiYWNrIGlzICdmdW5jdGlvbidcbiAgICAgICAgICBiYXRjaENhbGxiYWNrcy5wdXNoXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICAgICAgICBjYWxsYmFjazogYXBpQ2FsbFsgJ2JhdGNoRXJyb3InIF1cblxuXG4gICAgICBmb3IgYmF0Y2hDYWxsYmFjayBpbiBiYXRjaENhbGxiYWNrc1xuICAgICAgICBiYXRjaENhbGxiYWNrLmNhbGxiYWNrLmFwcGx5IGJhdGNoQ2FsbGJhY2suY29udGV4dCwgYXJndW1lbnRzXG5cblxuICAgICMgYnVpbGQgbmV3IG9wdGlvbnMgZm9yIGJhdGNoIGNhbGxcbiAgICBvcHRpb25zID1cbiAgICAgIGVycm9yOiBlcnJvclxuICAgICAgc3VjY2Vzczogc3VjY2Vzc1xuICAgICAgY29tcGxldGU6IGNvbXBsZXRlXG4gICAgICBjb250ZW50VHlwZTogY29udGVudFR5cGVcbiAgICAgIGRhdGFUeXBlOiBkYXRhVHlwZVxuICAgICAgdHlwZTogdHlwZVxuICAgICAgdXJsOiB1cmxcbiAgICAgIGRhdGE6IGRhdGFcblxuXG4gICAgZnVuYyBvcHRpb25zXG5cbiAgICAjIHJlc2V0IGNhbGwgc3RhY2tcbiAgICBhcGlDYWxsU3RhY2sgPSBbXVxuXG5cblxuICBhamF4RGVib3VuY2VDYWxsYmFjayA9IF8ud3JhcCBhamF4SW1tZWRpYXRlLCBhamF4RGVib3VuY2VXcmFwcGVyXG4gIGFqYXhEZWJvdW5jZSA9IF8uZGVib3VuY2UgYWpheERlYm91bmNlQ2FsbGJhY2ssIDQwXG5cblxuXG4gICMjI1xuICBiYWNrdXAgQmFja2JvbmUgQUpBWCBmdW5jdGlvblxuICAjIyNcbiAgYWpheEJhY2t1cCA9IEJhY2tib25lLmFqYXhcblxuICAjIyNcbiAgb3ZlcnJpZGUgQmFja2JvbmUgQWpheFxuICAjIyNcbiAgQmFja2JvbmUuYWpheCA9IChvcHRpb25zKSAtPlxuXG5cbiAgICAjIyNcbiAgICBDaGVjayBpZiBjYWxsIGNhbiBiZSBmZXRjaGVkIGZyb20gRE9NXG4gICAgIyMjXG4gICAgcmVzdWx0ID0gcmVhZERvbSBvcHRpb25zXG4gICAgaWYgcmVzdWx0IGlzIHRydWVcbiAgICAgIHJldHVybiByZXN1bHRcblxuXG4gICAgIyBzZXQgY29udGV4dCBiYXNlZCBvbiBvcHRpb25cbiAgICBpZiBub3Qgb3B0aW9ucy5jb250ZXh0P1xuICAgICAgb3B0aW9ucy5jb250ZXh0ID0gQFxuXG5cbiAgICBpZiBvcHRpb25zLmJhdGNoPyBhbmQgb3B0aW9ucy5iYXRjaCBpcyB0cnVlXG5cbiAgICAgICMgQWRkIHRvIGRlYm91bmNlZCBiYXRjaCBjYWxsXG4gICAgICBhcGlDYWxsU3RhY2sucHVzaCBvcHRpb25zXG4gICAgICBhamF4RGVib3VuY2UuYXBwbHkgQFxuXG4gICAgZWxzZVxuXG4gICAgICAjIENhbGwgYWpheCBpbW1lZGlhdGVseSBpZiBcImltbWVkaWF0ZVwiIGlzIHNldCB0byB0cnVlXG4gICAgICBhamF4SW1tZWRpYXRlLmFwcGx5IEAsIFtvcHRpb25zXVxuXG5cblxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuQXBwICAgICAgPSByZXF1aXJlICdhcHAnXG5CYWNrYm9uZSA9IHJlcXVpcmUgJ2JhY2tib25lJ1xuXG5jbGFzcyBBcHAuQ29udHJvbGxlcnMuQXBwQ29udHJvbGxlciBleHRlbmRzIEJhY2tib25lLk1hcmlvbmV0dGUuQ29udHJvbGxlclxuXG4gIGdldEFwaVJvb3Q6IC0+XG5cbiAgICB3cFJvb3QgPSAnLydcbiAgICBhcGlSb290ID0gJz9id2FwaT0vJ1xuXG4gICAgaWYgQXBwLlNTT3B0aW9ucz9cbiAgICAgIHdwUm9vdCA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICd3cFJvb3QnXG5cbiAgICB3cFJvb3QgKyBhcGlSb290XG5cblxuICBpc0V2ZW46IChuKSAtPlxuICAgIG4gJSAyIGlzIDBcbiIsIlwidXNlIHN0cmljdFwiXG5cblxuXyAgICAgICAgID0gcmVxdWlyZSgndW5kZXJzY29yZScpXG5CYWNrYm9uZSAgPSByZXF1aXJlKCdiYWNrYm9uZScpXG4kICAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKVxuTW9kZXJuaXpyID0gcmVxdWlyZShcIm1vZGVybml6clwiKVxuXG5cblxuY2xhc3MgQnJvd3NlclN1cHBvcnRIZWxwZXIgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbFxuXG4gIGNoZWNrRm9ySUU6ICgpIC0+XG5cbiAgICBpZiAoIG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDcuXCIpID4gMCApIG9yICggbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgOC5cIikgPiAwICkgb3IgKCBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5LlwiKSA+IDAgKVxuICAgICAgIyBjb25zb2xlLmxvZyAnZm91bmQgSUU5J1xuICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICAjIGNvbnNvbGUubG9nICdub3QgSUUnXG4gICAgICByZXR1cm4gZmFsc2VcblxuICBpZUFqYXhTdXBwb3J0OiAoKSAtPlxuXG4gICAgaWYgKCBAY2hlY2tGb3JJRSgpIClcblxuICAgICAgaWYgd2luZG93LlhEb21haW5SZXF1ZXN0XG4gICAgICAgICQuYWpheFRyYW5zcG9ydCAocykgLT5cbiAgICAgICAgICBpZiBzLmNyb3NzRG9tYWluIGFuZCBzLmFzeW5jXG4gICAgICAgICAgICBpZiBzLnRpbWVvdXRcbiAgICAgICAgICAgICAgcy54ZHJUaW1lb3V0ID0gcy50aW1lb3V0XG4gICAgICAgICAgICAgIGRlbGV0ZSBzLnRpbWVvdXRcbiAgICAgICAgICAgIHhkciA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgc2VuZDogKF8sIGNvbXBsZXRlKSAtPlxuICAgICAgICAgICAgICBjYWxsYmFjayA9IChzdGF0dXMsIHN0YXR1c1RleHQsIHJlc3BvbnNlcywgcmVzcG9uc2VIZWFkZXJzKSAtPlxuICAgICAgICAgICAgICAgIHhkci5vbmxvYWQgPSB4ZHIub25lcnJvciA9IHhkci5vbnRpbWVvdXQgPSBqUXVlcnkubm9vcFxuICAgICAgICAgICAgICAgIHhkciA9IGB1bmRlZmluZWRgXG4gICAgICAgICAgICAgICAgY29tcGxldGUgc3RhdHVzLCBzdGF0dXNUZXh0LCByZXNwb25zZXMsIHJlc3BvbnNlSGVhZGVyc1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB4ZHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKVxuICAgICAgICAgICAgICB4ZHIub25sb2FkID0gLT5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayAyMDAsIFwiT0tcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHhkci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgICAsIFwiQ29udGVudC1UeXBlOiBcIiArIHhkci5jb250ZW50VHlwZVxuICAgICAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICAgICAgIHhkci5vbmVycm9yID0gLT5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayA0MDQsIFwiTm90IEZvdW5kXCJcbiAgICAgICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgICAgICB4ZHIub25wcm9ncmVzcyA9IGpRdWVyeS5ub29wXG4gICAgICAgICAgICAgIHhkci5vbnRpbWVvdXQgPSAtPlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrIDAsIFwidGltZW91dFwiXG4gICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgICAgeGRyLnRpbWVvdXQgPSBzLnhkclRpbWVvdXQgb3IgTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgICB4ZHIub3BlbiBzLnR5cGUsIHMudXJsXG4gICAgICAgICAgICAgIHhkci5zZW5kIChzLmhhc0NvbnRlbnQgYW5kIHMuZGF0YSkgb3IgbnVsbFxuICAgICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgICAgYWJvcnQ6IC0+XG4gICAgICAgICAgICAgIGlmIHhkclxuICAgICAgICAgICAgICAgIHhkci5vbmVycm9yID0galF1ZXJ5Lm5vb3BcbiAgICAgICAgICAgICAgICB4ZHIuYWJvcnQoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIFwiYWJvcnRlZFwiXG4gICAgICAgICAgICAgIHJldHVyblxuXG5cblxuIyMjXG5JbnN0YW50aWF0ZSBoZWxwZXJcbiMjI1xubW9kdWxlLmV4cG9ydHMgPSBuZXcgQnJvd3NlclN1cHBvcnRIZWxwZXJcbiIsIlwidXNlIHN0cmljdFwiXG5cbl8gICAgICAgICA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKVxuQmFja2JvbmUgID0gcmVxdWlyZSgnYmFja2JvbmUnKVxuJCAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jylcbk1vZGVybml6ciA9IHJlcXVpcmUoXCJtb2Rlcm5penJcIilcbkpTT04gICAgICA9IHJlcXVpcmUoXCJqc29uM1wiKVxuXG5cbmNsYXNzIERhdGFIZWxwZXIgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbFxuXG5cdCMjI1xuXHRHZXQgZGF0YSBmcm9tIGVsZW1lbnQgb24gRE9NLlxuXG5cdEBhdXRob3IgQWxlc3NhbmRybyBCaWF2YXRpIDxAYWxlYmlhdmF0aT5cblx0QHBhY2thZ2UgZGF0YS5jb2ZmZWVcblx0QHNpbmNlIDEuMFxuXHRAcGFyYW0gKGpRdWVyeS9zdHJpbmcpIGVsXG5cdEByZXR1cm4gKE9iamVjdCkgZGF0YVxuXHQjIyNcblxuXHRnZXRFbGVtZW50RGF0YTogKCBlbCwgZm9ybWF0ICkgLT5cblxuXHRcdCMgZ2V0IGpRdWVyeSBlbGVtZW50XG5cdFx0aWYgdHlwZW9mIGVsID09ICdzdHJpbmcnXG5cdFx0XHRlbCA9ICQoIGVsIClcblxuXHRcdCMgY2hlY2sgaWYgZWwgd2FzIGZvdW5kXG5cdFx0aWYgbm90IGVsIGluc3RhbmNlb2YgJCBvciBlbC5sZW5ndGggPT0gMFxuXHRcdFx0cmV0dXJuXG5cblxuXHRcdCMgaW5pdGlhbGl6ZSBkYXRhIHRvIGVtcHR5IG9ialxuXHRcdGRhdGEgPSB7fVxuXG5cdFx0IyBnZXQgZGF0YVxuXHRcdGlmIGVsLmlzKCAnc2NyaXB0JyApIG9yICggZm9ybWF0PyBhbmQgZm9ybWF0IGlzICdqc29uJyApXG5cblx0XHRcdGRhdGEgPSBKU09OLnBhcnNlIGVsLmh0bWwoKVxuXG5cdFx0ZWxzZVxuXG5cdFx0XHRkYXRhID0gZWwuZGF0YSgpO1xuXG5cdFx0ZGF0YVxuXG5cdCMgZ2V0RWxlbWVudERhdGEoKVxuXG5cbiMjI1xuSW5zdGFudGlhdGUgaGVscGVyXG4jIyNcbm1vZHVsZS5leHBvcnRzID0gbmV3IERhdGFIZWxwZXJcbiIsIlwidXNlIHN0cmljdFwiXG5cbkJhY2tib25lICA9IHJlcXVpcmUoJ2JhY2tib25lJylcblxuXG5jbGFzcyBEYXRlSGVscGVyIGV4dGVuZHMgQmFja2JvbmUuTW9kZWxcblxuICBnZXREYXRldGltZTogKHNlcnZlcl9nbXRfb2Zmc2V0KSA9PlxuXG4gICAgc2VydmVyX3RpbWUgPSBAZ2V0VGltZShzZXJ2ZXJfZ210X29mZnNldClcbiAgICBzZXJ2ZXJfZGF0ZXRpbWUgPSBuZXcgRGF0ZSggc2VydmVyX3RpbWUgKVxuICAgIHNlcnZlcl9kYXRldGltZVxuXG5cbiAgZ2V0VGltZTogKG9mZnNldCkgLT5cblxuICAgICMgY3JlYXRlIERhdGUgb2JqZWN0IGZvciBjdXJyZW50IGxvY2F0aW9uXG4gICAgZCA9IG5ldyBEYXRlKClcblxuICAgICMgY29udmVydCB0byBtc2VjXG4gICAgIyBhZGQgbG9jYWwgdGltZSB6b25lIG9mZnNldFxuICAgICMgZ2V0IFVUQyB0aW1lIGluIG1zZWNcbiAgICB1dGMgPSBkLmdldFRpbWUoKSArIChkLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMClcblxuICAgICMgY3JlYXRlIG5ldyBEYXRlIG9iamVjdCBmb3IgZGlmZmVyZW50IGNpdHlcbiAgICAjIHVzaW5nIHN1cHBsaWVkIG9mZnNldFxuICAgIG5kID0gbmV3IERhdGUodXRjICsgKDM2MDAwMDAqb2Zmc2V0KSk7XG5cbiAgICBzZXJ2ZXJfdGltZSA9IE1hdGgucm91bmQobmQuZ2V0VGltZSgpIC8gMTAwMClcblxuICAgIHNlcnZlcl90aW1lXG5cblxuICBwYXJzZVRpbWVzdGFtcCA6ICh0aW1lc3RhbXApIC0+XG5cbiAgICBzZWNzID0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSAtIHRpbWVzdGFtcFxuICAgIE1hdGguZmxvb3Igc2Vjc1xuICAgIG1pbnV0ZXMgPSBzZWNzIC8gNjBcbiAgICBzZWNzID0gTWF0aC5mbG9vcihzZWNzICUgNjApXG4gICAgcmV0dXJuIHNlY3MgKyAoKGlmIHNlY3MgPiAxIHRoZW4gXCIgc2Vjb25kcyBhZ29cIiBlbHNlIFwiIHNlY29uZCBhZ29cIikpICBpZiBtaW51dGVzIDwgMVxuICAgIGhvdXJzID0gbWludXRlcyAvIDYwXG4gICAgbWludXRlcyA9IE1hdGguZmxvb3IobWludXRlcyAlIDYwKVxuICAgIHJldHVybiBtaW51dGVzICsgKChpZiBtaW51dGVzID4gMSB0aGVuIFwiIG1pbnV0ZXMgYWdvXCIgZWxzZSBcIiBtaW51dGUgYWdvXCIpKSAgaWYgaG91cnMgPCAxXG4gICAgZGF5cyA9IGhvdXJzIC8gMjRcbiAgICBob3VycyA9IE1hdGguZmxvb3IoaG91cnMgJSAyNClcbiAgICByZXR1cm4gaG91cnMgKyAoKGlmIGhvdXJzID4gMSB0aGVuIFwiIGhvdXJzIGFnb1wiIGVsc2UgXCIgaG91ciBhZ29cIikpICBpZiBkYXlzIDwgMVxuICAgIHdlZWtzID0gZGF5cyAvIDdcbiAgICBkYXlzID0gTWF0aC5mbG9vcihkYXlzICUgNylcbiAgICByZXR1cm4gZGF5cyArICgoaWYgZGF5cyA+IDEgdGhlbiBcIiBkYXlzIGFnb1wiIGVsc2UgXCIgZGF5IGFnb1wiKSkgIGlmIHdlZWtzIDwgMVxuICAgIG1vbnRocyA9IHdlZWtzIC8gNC4zNVxuICAgIHdlZWtzID0gTWF0aC5mbG9vcih3ZWVrcyAlIDQuMzUpXG4gICAgcmV0dXJuIHdlZWtzICsgKChpZiB3ZWVrcyA+IDEgdGhlbiBcIiB3ZWVrcyBhZ29cIiBlbHNlIFwiIHdlZWsgYWdvXCIpKSAgaWYgbW9udGhzIDwgMVxuICAgIHllYXJzID0gbW9udGhzIC8gMTJcbiAgICBtb250aHMgPSBNYXRoLmZsb29yKG1vbnRocyAlIDEyKVxuICAgIHJldHVybiBtb250aHMgKyAoKGlmIG1vbnRocyA+IDEgdGhlbiBcIiBtb250aHMgYWdvXCIgZWxzZSBcIiBtb250aCBhZ29cIikpICBpZiB5ZWFycyA8IDFcbiAgICB5ZWFycyA9IE1hdGguZmxvb3IoeWVhcnMpXG4gICAgeWVhcnMgKyAoKGlmIHllYXJzID4gMSB0aGVuIFwiIHllYXJzIGFnb1wiIGVsc2UgXCIgeWVhcnMgYWdvXCIpKVxuXG5cblxuIyMjXG5JbnN0YW50aWF0ZSBoZWxwZXJcbiMjI1xubW9kdWxlLmV4cG9ydHMgPSBuZXcgRGF0ZUhlbHBlclxuXG5cblxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuXyAgICAgICAgID0gcmVxdWlyZSgndW5kZXJzY29yZScpXG5CYWNrYm9uZSAgPSByZXF1aXJlKCdiYWNrYm9uZScpXG4kICAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKVxuTW9kZXJuaXpyID0gcmVxdWlyZShcIm1vZGVybml6clwiKVxuXG5cbmNsYXNzIEVudkhlbHBlciBleHRlbmRzIEJhY2tib25lLk1vZGVsXG5cbiAgICBkZWZhdWx0czpcblxuICAgICAgICByZXNpemVFdmVudDogICAgICAgICAgXCJyZXNpemVcIlxuICAgICAgICBzY3JvbGxUb3A6ICAgICAgICAgICAgMFxuICAgICAgICBvcmllbnRhdGlvbjogICAgICAgICAgbnVsbFxuICAgICAgICBjZW50ZXI6ICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBoZWlnaHRGdWxsOiAgICAgICAgICAgbnVsbFxuICAgICAgICBoZWlnaHRSYXc6ICAgICAgICAgICAgbnVsbFxuICAgICAgICBoZWlnaHQ6ICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICB3aWR0aDogICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBzYWZhcmk6ICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpc01vYmlsZTogICAgICAgICAgICAgbnVsbFxuICAgICAgICBtb2JpbGVJcGhvbmU6ICAgICAgICAgbnVsbFxuICAgICAgICBtb2JpbGVJcGFkOiAgICAgICAgICAgbnVsbFxuICAgICAgICBtb2JpbGVJb3M6ICAgICAgICAgICAgbnVsbFxuICAgICAgICBtb2JpbGVBbmRyb2lkOiAgICAgICAgbnVsbFxuICAgICAgICBtb2JpbGVBbmRyb2lkVmVyc2lvbjogbnVsbFxuICAgICAgICBtb2JpbGVSYXdzY3JlZW46ICAgICAgbnVsbFxuICAgICAgICBpb3M6ICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3MxOiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3MyOiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3MyXzQ6ICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3MzOiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3M0OiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3M1OiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3M1X3VwOiAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3M2OiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3M2X3VwOiAgICAgICAgICAgICAgbnVsbFxuXG5cbiAgICBzdGFydDogPT5cbiAgICAgICAgQHVwZGF0ZUVudigpXG5cblxuICAgIGluaXRpYWxpemU6ID0+XG5cbiAgICAgICAgIyBfLmJpbmRBbGwgQFxuXG4gICAgICAgICMgZGV0ZWN0IHVzZXIgYWdlbnRcbiAgICAgICAgQHVzZXJBZ2VudERldGVjdHMoKVxuXG4gICAgICAgIGlmIEBnZXQoXCJpc19tb2JpbGVcIikgb3IgQGdldChcImlzX3RhYmxldFwiKVxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uIEBnZXQoXCJyZXNpemVFdmVudFwiKSwgXy5kZWJvdW5jZShAdXBkYXRlRW52LCAzMDApXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgICQod2luZG93KS5vbiBAZ2V0KFwicmVzaXplRXZlbnRcIiksIF8udGhyb3R0bGUoQHVwZGF0ZUVudiwgMTAwLCB7bGVhZGluZzogZmFsc2V9KVxuXG4gICAgICAgICMgZGV0ZWN0IHNjcm9sbFxuICAgICAgICBpZiBcIm1vdXNld2hlZWxcIiBvZiB3aW5kb3dcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uIFwibW91c2V3aGVlbFwiLCBAd2hlZWxIYW5kbGVyXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwgQHVwZGF0ZVNjcm9sbERpclxuXG4gICAgICAgICMgYmluZCBjaGFuZ2U6Y2VudGVyIHRvIGFsbCBvdGhlciBoYW5kbGVyc1xuICAgICAgICBAb24gXCJjaGFuZ2U6b3JpZW50YXRpb25cIiwgQG1vYmlsZUFkZHJlc3NCYXJTY3JvbGxGaXgsIHRoaXNcblxuICAgICAgICAjIGRldGVjdCBvbmxpbmUvb2ZmbGluZVxuICAgICAgICBpZiB3aW5kb3cubmF2aWdhdG9yLm9uTGluZT9cbiAgICAgICAgICAgIEBzZXQgJ29mZmxpbmUnLCAobm90IHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lKVxuICAgICAgICAgICAgIyBiaW5kIG9mZmxpbmUvb25saW5lIGV2ZW50c1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9uICdvZmZsaW5lIG9ubGluZScsIEBvZmZsaW5lQ2hlY2tcblxuXG5cbiAgICBvZmZsaW5lQ2hlY2s6IChldmVudCkgPT5cblxuICAgICAgICBAc2V0ICdvZmZsaW5lJywgKGV2ZW50LnR5cGUgPT0gJ29mZmxpbmUnKVxuXG5cblxuXG4gICAgdXNlckFnZW50RGV0ZWN0czogPT5cblxuICAgICAgICB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmFcblxuICAgICAgICBpb3MgPSB1bmRlZmluZWRcbiAgICAgICAgaW9zMSA9IHVuZGVmaW5lZFxuICAgICAgICBpb3MyID0gdW5kZWZpbmVkXG4gICAgICAgIGlvczJfNCA9IHVuZGVmaW5lZFxuICAgICAgICBpb3MzID0gdW5kZWZpbmVkXG4gICAgICAgIGlvczQgPSB1bmRlZmluZWRcbiAgICAgICAgaW9zNSA9IHVuZGVmaW5lZFxuICAgICAgICBpb3M1X3VwID0gdW5kZWZpbmVkXG4gICAgICAgIGlvczYgPSB1bmRlZmluZWRcbiAgICAgICAgaW9zNl91cCA9IHVuZGVmaW5lZFxuICAgICAgICBzYWZhcmkgPSB+dWEuaW5kZXhPZihcIlNhZmFyaVwiKSBpc250IDAgYW5kIH51YS5pbmRleE9mKFwiQ2hyb21lXCIpIGlzIDBcbiAgICAgICAgbW9iaWxlX2lwaG9uZSA9IH51YS5pbmRleE9mKFwiaVBob25lXCIpIGlzbnQgMCBvciB+dWEuaW5kZXhPZihcImlQb2RcIikgaXNudCAwXG4gICAgICAgIG1vYmlsZV9pcGFkID0gfnVhLmluZGV4T2YoXCJpUGFkXCIpIGlzbnQgMFxuICAgICAgICBtb2JpbGVfaW9zID0gbW9iaWxlX2lwaG9uZSBvciBtb2JpbGVfaXBhZFxuICAgICAgICBtb2JpbGVfYW5kcm9pZCA9IH51YS5pbmRleE9mKFwiQW5kcm9pZFwiKSBpc250IDBcbiAgICAgICAgbW9iaWxlX2FuZHJvaWRfdmVyc2lvbiA9IHVuZGVmaW5lZFxuXG4gICAgICAgICMgRGV0ZWN0IGlmIHRoaXMgaXMgcnVubmluZyBhcyBhIGZ1bGxzY3JlZW4gYXBwIGZyb20gdGhlIGhvbWVzY3JlZW5cbiAgICAgICAgbW9iaWxlX3Jhd3NjcmVlbiA9IHdpbmRvdy5uYXZpZ2F0b3Iuc3RhbmRhbG9uZVxuXG4gICAgICAgIGlzX21vYmlsZSA9IEBpc01vYmlsZSggdWEgKVxuXG4gICAgICAgIG1vYmlsZV9hbmRyb2lkX3ZlcnNpb24gPSB1YS5zbGljZSh1YS5pbmRleE9mKFwiQW5kcm9pZFwiKSArIDgsIHVhLmluZGV4T2YoXCJBbmRyb2lkXCIpICsgMTMpICBpZiBtb2JpbGVfYW5kcm9pZFxuICAgICAgICBpZiAvKGlQaG9uZXxpUG9kfGlQYWQpL2kudGVzdCh1YSlcbiAgICAgICAgICAgIGlvcyA9IHRydWVcbiAgICAgICAgICAgIGlmIC9PUyAyX1xcZChfXFxkKT8gbGlrZSBNYWMgT1MgWC9pLnRlc3QodWEpXG5cbiAgICAgICAgICAgICAgICAjIGlPUyAyIHNvIERvIFNvbWV0aGluZ1xuICAgICAgICAgICAgICAgIGlvczIgPSB0cnVlXG4gICAgICAgICAgICAgICAgaW9zMl80ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiAvT1MgM19cXGQoX1xcZCk/IGxpa2UgTWFjIE9TIFgvaS50ZXN0KHVhKVxuXG4gICAgICAgICAgICAgICAgIyBpT1MgMyBzbyBEbyBTb21ldGhpbmdcbiAgICAgICAgICAgICAgICBpb3MzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlvczJfNCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgL09TIDRfXFxkKF9cXGQpPyBsaWtlIE1hYyBPUyBYL2kudGVzdCh1YSlcblxuICAgICAgICAgICAgICAgICMgaU9TIDQgc28gRG8gU29tZXRoaW5nXG4gICAgICAgICAgICAgICAgaW9zNCA9IHRydWVcbiAgICAgICAgICAgICAgICBpb3MyXzQgPSB0cnVlXG4gICAgICAgICAgICBlbHNlIGlmIC9PUyA1X1xcZChfXFxkKT8gbGlrZSBNYWMgT1MgWC9pLnRlc3QodWEpXG5cbiAgICAgICAgICAgICAgICAjIGlPUyA1IHNvIERvIFNvbWV0aGluZ1xuICAgICAgICAgICAgICAgIGlvczUgPSB0cnVlXG4gICAgICAgICAgICAgICAgaW9zNV91cCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgL09TIDZfXFxkKF9cXGQpPyBsaWtlIE1hYyBPUyBYL2kudGVzdCh1YSlcblxuICAgICAgICAgICAgICAgICMgaU9TIDYgc28gRG8gU29tZXRoaW5nXG4gICAgICAgICAgICAgICAgaW9zNiA9IHRydWVcbiAgICAgICAgICAgICAgICBpb3M1X3VwID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlvczZfdXAgPSB0cnVlXG4gICAgICAgICAgICBlbHNlIGlmIC9DUFUgbGlrZSBNYWMgT1MgWC9pLnRlc3QodWEpXG5cbiAgICAgICAgICAgICAgICAjIGlPUyAxIHNvIERvIFNvbWV0aGluZ1xuICAgICAgICAgICAgICAgIGlvczEgPSB0cnVlXG4gICAgICAgICAgICBlbHNlXG5cbiAgICAgICAgICAgICAgICAjIGlPUyA2IG9yIE5ld2VyIHNvIERvIE5vdGhpbmdcbiAgICAgICAgICAgICAgICBpb3M1X3VwID0gdHJ1ZVxuXG4gICAgICAgIEBzZXRcbiAgICAgICAgICAgICMgc2FmYXJpOiBzYWZhcmlcbiAgICAgICAgICAgIGlzX21vYmlsZTogaXNfbW9iaWxlXG4gICAgICAgICAgICBtb2JpbGVfaXBob25lOiBtb2JpbGVfaXBob25lXG4gICAgICAgICAgICBtb2JpbGVfaXBhZDogbW9iaWxlX2lwYWRcbiAgICAgICAgICAgIG1vYmlsZV9pb3M6IG1vYmlsZV9pb3NcbiAgICAgICAgICAgIG1vYmlsZV9hbmRyb2lkOiBtb2JpbGVfYW5kcm9pZFxuICAgICAgICAgICAgbW9iaWxlX2FuZHJvaWRfdmVyc2lvbjogbW9iaWxlX2FuZHJvaWRfdmVyc2lvblxuICAgICAgICAgICAgbW9iaWxlX3Jhd3NjcmVlbjogbW9iaWxlX3Jhd3NjcmVlblxuICAgICAgICAgICAgaW9zOiBpb3NcbiAgICAgICAgICAgIGlvczE6IGlvczFcbiAgICAgICAgICAgIGlvczI6IGlvczJcbiAgICAgICAgICAgIGlvczJfNDogaW9zMl80XG4gICAgICAgICAgICBpb3MzOiBpb3MzXG4gICAgICAgICAgICBpb3M0OiBpb3M0XG4gICAgICAgICAgICBpb3M1OiBpb3M1XG4gICAgICAgICAgICBpb3M1X3VwOiBpb3M1X3VwXG4gICAgICAgICAgICBpb3M2OiBpb3M2XG4gICAgICAgICAgICBpb3M2X3VwOiBpb3M2X3VwXG5cblxuXG4gICAgaXNNb2JpbGU6ICh1YSkgPT5cblxuICAgICAgICBpZiAoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaS50ZXN0KHVhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdCh1YS5zdWJzdHIoMCw0KSkpXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGZhbHNlXG5cbiAgICB1cGRhdGVFbnY6ID0+XG4gICAgICAgIGhlaWdodCA9IHVuZGVmaW5lZFxuICAgICAgICBoZWlnaHRfcmF3ID0gdW5kZWZpbmVkXG4gICAgICAgIGhlaWdodF9mdWxsID0gdW5kZWZpbmVkXG4gICAgICAgIHdpZHRoID0gdW5kZWZpbmVkXG4gICAgICAgIGNlbnRlciA9IHVuZGVmaW5lZFxuICAgICAgICBvcmllbnRhdGlvbiA9IHVuZGVmaW5lZFxuXG4gICAgICAgICMgZ2V0IHdpZHRoXG4gICAgICAgIHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKClcblxuICAgICAgICAjIGdldCBoZWlnaHQsIGRlcGVuZGluZyBvbiB3aGF0IGRldmljZSB3ZSBhcmUgb25cbiAgICAgICAgaWYgQGdldChcIm1vYmlsZV9pb3NcIikgYW5kIEBnZXQoXCJzYWZhcmlcIilcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodF9yYXcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICBoZWlnaHQgKz0gNjAgIGlmIEBnZXQoXCJtb2JpbGVfaXBob25lXCIpIGFuZCBub3QgQGdldChcIm1vYmlsZV9yYXdzY3JlZW5cIikgYW5kIGhlaWdodCBpc250IDMyMFxuICAgICAgICAgICAgaGVpZ2h0X2Z1bGwgPSBoZWlnaHRcbiAgICAgICAgZWxzZSBpZiBAZ2V0KFwibW9iaWxlX2FuZHJvaWRcIilcbiAgICAgICAgICAgIGlmIEBnZXQoXCJtb2JpbGVfYW5kcm9pZF92ZXJzaW9uXCIpIGlzIFwiNC4xLjFcIlxuICAgICAgICAgICAgICAgIGhlaWdodF9mdWxsID0gaGVpZ2h0ID0gaGVpZ2h0X3JhdyA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodF9yYXcgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgICAgICAgICBoZWlnaHRfZnVsbCA9IGhlaWdodCArIDU2XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodF9yYXcgPSBoZWlnaHRfZnVsbCA9ICQod2luZG93KS5oZWlnaHQoKVxuXG4gICAgICAgICMgY2hlY2sgb3JpZW50YXRpb25cbiAgICAgICAgaWYgd2lkdGggPiBoZWlnaHRcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gXCJsYW5kc2NhcGVcIlxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IFwicG9ydHJhaXRcIlxuXG4gICAgICAgICMgc2V0IGF0dHJpYnV0ZXNcbiAgICAgICAgQHNldFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgaGVpZ2h0X3JhdzogaGVpZ2h0X3Jhd1xuICAgICAgICAgICAgaGVpZ2h0X2Z1bGw6IGhlaWdodF9mdWxsXG4gICAgICAgICAgICBjZW50ZXI6XG4gICAgICAgICAgICAgICAgbGVmdDogd2lkdGggLyAyXG4gICAgICAgICAgICAgICAgdG9wOiBoZWlnaHQgLyAyXG5cbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvblxuXG5cbiAgICB1cGRhdGVTY3JvbGxEaXI6IChldmVudCkgPT5cbiAgICAgICAgc2Nyb2xsVG9wID0gQGdldFNjcm9sbFRvcCgpXG4gICAgICAgIGxhc3RTY3JvbGxUb3AgPSBAZ2V0KFwic2Nyb2xsVG9wXCIpXG4gICAgICAgIGlmIHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3BcbiAgICAgICAgICAgIEBzZXQgXCJzY3JvbGxEaXJcIiwgdHJ1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBAc2V0IFwic2Nyb2xsRGlyXCIsIGZhbHNlXG4gICAgICAgIEBzZXQgXCJzY3JvbGxUb3BcIiwgc2Nyb2xsVG9wXG5cbiAgICB3aGVlbEhhbmRsZXI6IChldmVudCwgZGVsdGEsIGRlbHRhWCwgZGVsdGFZKSA9PlxuXG5cbiAgICBnZXRTY3JvbGxUb3A6ID0+XG4gICAgICAgIGlmIHR5cGVvZiB3aW5kb3cucGFnZVlPZmZzZXQgaXNudCBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgI21vc3QgYnJvd3NlcnNcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgQiA9IGRvY3VtZW50LmJvZHkgI0lFICdxdWlya3MnXG4gICAgICAgICAgICBEID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICNJRSB3aXRoIGRvY3R5cGVcbiAgICAgICAgICAgIEQgPSAoaWYgKEQuY2xpZW50SGVpZ2h0KSB0aGVuIEQgZWxzZSBCKVxuICAgICAgICAgICAgRC5zY3JvbGxUb3BcblxuICAgIG1vYmlsZUFkZHJlc3NCYXJTY3JvbGxGaXg6ID0+XG5cbiAgICAgICAgaWYgQGdldChcIm1vYmlsZV9hbmRyb2lkXCIpIG9yIChAZ2V0KFwibW9iaWxlX2lvc1wiKSBhbmQgQGdldChcInNhZmFyaVwiKSlcbiAgICAgICAgICAgICQoXCJib2R5XCIpLmhlaWdodCBAZ2V0KFwiaGVpZ2h0X2Z1bGxcIilcbiAgICAgICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICAgICAgICAjIEhpZGUgdGhlIGFkZHJlc3MgYmFyIVxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyAwLCAxXG4gICAgICAgICAgICAsIDBcblxuIyBlbnZIZWxwZXJcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRW52SGVscGVyXG4iLCJcInVzZSBzdHJpY3RcIlxuXG5fICAgICAgICAgPSByZXF1aXJlKCd1bmRlcnNjb3JlJylcbkJhY2tib25lICA9IHJlcXVpcmUoJ2JhY2tib25lJylcbiQgICAgICAgICA9IHJlcXVpcmUoJ2pxdWVyeScpXG5Nb2Rlcm5penIgPSByZXF1aXJlKFwibW9kZXJuaXpyXCIpXG5cblxuY2xhc3MgSHR0cEhlbHBlciBleHRlbmRzIEJhY2tib25lLk1vZGVsXG5cbiAgdG9Vcmw6IChiYXNlX3VybCwgYXJncykgLT5cblxuICAgIHVybCA9IGJhc2VfdXJsXG4gICAgaW5kZXggPSAwXG4gICAgZmlyc3Rfc2VwYXJhdG9yID0gKGlmIGJhc2VfdXJsLmluZGV4T2YoXCI/XCIpIGlzIC0xIHRoZW4gXCI/XCIgZWxzZSBcIiZcIilcbiAgICAkLmVhY2ggYXJncywgKGtleSwgdmFsKSAtPlxuICAgICAgcmV0dXJuIHRydWUgIGlmIHZhbCBpcyBgdW5kZWZpbmVkYCBvciB2YWwgaXMgXCJcIlxuICAgICAgaWYgaW5kZXggaXMgMFxuICAgICAgICB1cmwgKz0gZmlyc3Rfc2VwYXJhdG9yXG4gICAgICBlbHNlXG4gICAgICAgIHVybCArPSBcIiZcIlxuICAgICAgdXJsICs9IGtleSArIFwiPVwiICsgdmFsXG4gICAgICBpbmRleCsrXG4gICAgdXJsXG5cbiAgIyB0b1VybCgpXG5cblxuICByZXF1aXJlRmlsZXM6IChmaWxlcykgLT5cblxuICAgIF8uZWFjaCBmaWxlcywgKGZpbGVuYW1lKSAtPlxuXG4gICAgICBmaWxlRXh0ID0gZmlsZW5hbWUuc3BsaXQoJy4nKS5wb3AoKVxuICAgICAgZmlsZXJlZiA9IG51bGw7XG5cbiAgICAgIGlmIGZpbGVFeHQgaXMgJ2pzJ1xuXG4gICAgICAgIGZpbGVyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdzY3JpcHQnXG4gICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlICd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCdcbiAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUgJ3NyYycsIGZpbGVuYW1lXG5cbiAgICAgIGVsc2UgaWYgZmlsZUV4dCBpcyAnY3NzJ1xuXG4gICAgICAgIGZpbGVyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdsaW5rJ1xuICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSAncmVsJywgJ3N0eWxlc2hlZXQnXG4gICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlICd0eXBlJywgJ3RleHQvY3NzJ1xuICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSAnaHJlZicsIGZpbGVuYW1lXG5cblxuICAgICAgaWYgZmlsZXJlZj9cblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2hlYWQnIClbMF0uYXBwZW5kQ2hpbGQoIGZpbGVyZWYgKVxuXG5cbiAgZ2V0UXVlcnlWYXJpYWJsZTogKHZhcmlhYmxlKSAtPlxuXG4gICAgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKVxuICAgIHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuXG4gICAgdmFsdWUgPSBudWxsXG5cbiAgICBfLmVhY2ggdmFycywgKHYsIGkpIC0+XG4gICAgICBwYWlyID0gdi5zcGxpdCgnPScpO1xuICAgICAgaWYgZGVjb2RlVVJJQ29tcG9uZW50KCBwYWlyWzBdICkgaXMgdmFyaWFibGVcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQgcGFpclsxXVxuXG4gICAgdmFsdWVcblxuIyBIdHRwSGVscGVyXG5cblxuIyMjXG5JbnN0YW50aWF0ZSBoZWxwZXJcbiMjI1xubW9kdWxlLmV4cG9ydHMgPSBuZXcgSHR0cEhlbHBlclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgICAgICA9IHJlcXVpcmUgJ2FwcCdcbkJhY2tib25lID0gcmVxdWlyZSBcImJhY2tib25lXCJcblxuY2xhc3MgQXBwLk1vZGVscy5BcGlNb2RlbCBleHRlbmRzIEJhY2tib25lLk1vZGVsXG5cbiAgdXJsUm9vdDogPT5cblxuICAgIHVybFJvb3QgPSBudWxsXG5cbiAgICBhcGlVcmwgPSBfLnJlc3VsdChALCAnYXBpVXJsJylcbiAgICBpZiBhcGlVcmw/XG4gICAgICB1cmxSb290ID0gQXBwLnJlcXVlc3QoJ2FwaVJvb3QnKSArIGFwaVVybFxuXG4gICAgdXJsUm9vdFxuXG5cbiAgcGFyc2U6IChyZXNwb25zZSkgLT5cblxuICAgIHBhcnNlZERhdGEgPSB7fVxuICAgIGlmIHJlc3BvbnNlLmRhdGE/XG4gICAgICBwYXJzZWREYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgIGVsc2VcbiAgICAgIHBhcnNlZERhdGEgPSByZXNwb25zZVxuXG4gICAgcGFyc2VkRGF0YVxuXG4gIGdldDogPT5cblxuICAgIHZhbHVlID0gQXBwLk1vZGVscy5BcGlNb2RlbC5fX3N1cGVyX18uZ2V0LmFwcGx5IEAsIGFyZ3VtZW50c1xuXG4gICAgaWYgXy5pc0Z1bmN0aW9uIHZhbHVlXG4gICAgICB2YWx1ZSA9IHZhbHVlLmFwcGx5IEBcblxuICAgIHZhbHVlXG5cblxuICB0b0pTT046ID0+XG5cbiAgICBkYXRhID0ge31cblxuICAgIGpzb24gPSBBcHAuTW9kZWxzLkFwaU1vZGVsLl9fc3VwZXJfXy50b0pTT04uYXBwbHkgQCwgYXJndW1lbnRzXG5cbiAgICBfLmVhY2gganNvbiwgKHZhbHVlLCBrZXkpIC0+XG4gICAgICBkYXRhW2tleV0gPSBAZ2V0KGtleSlcbiAgICAsIEBcblxuICAgIGRhdGFcblxuXG4gIHRvZ2dsZUF0dHJpYnV0ZTogKGF0dHIsIG9wdGlvbnMpID0+XG5cbiAgICBAc2V0KCBhdHRyLCBub3QgQGdldCggYXR0ciwgXy5kZWZhdWx0KCBvcHRpb25zLCB7fSApICkgKVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbmNsYXNzIEFwcC5Nb2RlbHMuV1BPcHRpb25Nb2RlbCBleHRlbmRzIEFwcC5Nb2RlbHMuQXBpTW9kZWxcblxuICBhcGlVcmw6ICcxL3NpdGUvb3B0aW9ucydcblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxuY2xhc3MgQXBwLk1vZGVscy5XUFVzZXJNZXRhTW9kZWwgZXh0ZW5kcyBBcHAuTW9kZWxzLkFwaU1vZGVsXG5cbiAgYXBpVXJsOiAnMS9zaXRlL3VzZXJtZXRhJ1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbkFwcC5tb2R1bGUgJ1NTQWRtaW4nLCAoU1NBZG1pbiwgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICBjbGFzcyBTU0FkbWluLkNvbnRyb2xsZXJzLkFkbWluQ29udHJvbGxlciBleHRlbmRzIEJhY2tib25lLk1hcmlvbmV0dGUuQ29udHJvbGxlclxuXG5cbiAgICBpbml0aWFsaXplOiA9PlxuXG4gICAgICBTU0FkbWluLm9uICdzdGFydCcsIEBvblN0YXJ0XG5cblxuXG4gICAgb25TdGFydDogPT5cblxuICAgICAgIyBjaGVjayBpZiB0aGUgaGVhZGVyIHJlZ2lvbiBpcyBpbiB0aGUgZG9tXG4gICAgICBpZiAkKCcuc3MtaGVhZGVyLXJlZ2lvbicpLmxlbmd0aCA+IDBcblxuICAgICAgICBBcHAuYWRkUmVnaW9uc1xuICAgICAgICAgIGhlYWRlcjogJy5zcy1oZWFkZXItcmVnaW9uJ1xuXG4gICAgICAgIGhlYWRlclZpZXcgPSBuZXcgU1NBZG1pbi5WaWV3cy5IZWFkZXJJdGVtVmlld1xuICAgICAgICAgIG1vZGVsOiBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb25zJ1xuXG4gICAgICAgIEFwcC5oZWFkZXIuc2hvdyBoZWFkZXJWaWV3XG5cblxuICAgICAgIyBjaGVjayBpZiB0aGUgaG9tZSByZWdpb24gaXMgaW4gdGhlIGRvbVxuICAgICAgaWYgJCgnLnNzLWhvbWUtcmVnaW9uJykubGVuZ3RoID4gMFxuXG4gICAgICAgIEFwcC5hZGRSZWdpb25zXG4gICAgICAgICAgaG9tZTogJy5zcy1ob21lLXJlZ2lvbidcblxuICAgICAgICBob21lVmlldyA9IG5ldyBTU0FkbWluLlZpZXdzLkhvbWVJdGVtVmlld1xuICAgICAgICAgIG1vZGVsOiAobmV3IEJhY2tib25lLk1vZGVsKVxuXG4gICAgICAgIEFwcC5ob21lLnNob3cgaG9tZVZpZXdcblxuXG4gICAgICAjIGNoZWNrIGlmIHRoZSBob21lIHJlZ2lvbiBpcyBpbiB0aGUgZG9tXG4gICAgICBpZiAkKCcuc3MtbG9hZGVyLXJlZ2lvbicpLmxlbmd0aCA+IDBcblxuICAgICAgICBBcHAuYWRkUmVnaW9uc1xuICAgICAgICAgIGxvYWRlcjogJy5zcy1sb2FkZXItcmVnaW9uJ1xuXG4gICAgICAgIGxvYWRlclZpZXcgPSBuZXcgQXBwLlZpZXdzLkxvYWRlckl0ZW1WaWV3XG4gICAgICAgICAgbW9kZWw6IChuZXcgQmFja2JvbmUuTW9kZWwpXG5cbiAgICAgICAgQXBwLmxvYWRlci5zaG93IGxvYWRlclZpZXdcbiAgICAgICAgbG9hZGVyVmlldy5zdG9wU3Bpbm5lcigpXG5cblxuXG4gICAgcmVzZXRUcmFzaFRvZ2dsZTogPT5cblxuICAgICAgaWYgQXBwLmhlYWRlci5jdXJyZW50Vmlldz8gYW5kIEFwcC5oZWFkZXIuY3VycmVudFZpZXcgaW5zdGFuY2VvZiBTU0FkbWluLlZpZXdzLkhlYWRlckl0ZW1WaWV3XG4gICAgICAgIEFwcC5oZWFkZXIuY3VycmVudFZpZXcucmVzZXRUcmFzaFRvZ2dsZSgpXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU0FkbWluJywgKFNTQWRtaW4sIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgU1NBZG1pbi5Db250cm9sbGVycyA9IHt9XG4gIFNTQWRtaW4uTW9kZWxzID0ge31cbiAgU1NBZG1pbi5Db2xsZWN0aW9ucyA9IHt9XG4gIFNTQWRtaW4uVmlld3MgPSB7fVxuICBTU0FkbWluLkxheW91dHMgPSB7fVxuICBTU0FkbWluLlJvdXRlcnMgPSB7fVxuICBTU0FkbWluLlRlbXBsYXRlcyA9IHt9XG5cbiAgU1NBZG1pbi52ZW50ID0gbmV3IEJhY2tib25lLldyZXFyLkV2ZW50QWdncmVnYXRvcigpXG4gIFNTQWRtaW4uY29tbWFuZHMgPSBuZXcgQmFja2JvbmUuV3JlcXIuQ29tbWFuZHMoKVxuICBTU0FkbWluLnJlcXJlcyA9IG5ldyBCYWNrYm9uZS5XcmVxci5SZXF1ZXN0UmVzcG9uc2UoKVxuXG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFyc0NvbXBpbGVyID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzQ29tcGlsZXIudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInNzLWhlYWRlci1pbm5lclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJzcy1sb2dvXFxcIj5cXG4gICAgPGEgaHJlZj1cXFwiaHR0cDovL3NvY2lhbHN0cmVhbXMuY29tL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlNvY2lhbFN0cmVhbXM8L2E+XFxuICA8L2Rpdj48IS0tIC5zcy1sb2dvIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic3MtaGVhZGVyLWFjdGlvbnNcXFwiPlxcbiAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBjbGFzcz1cXFwic3Mtc2V0dGluZ3MtdG9nZ2xlXFxcIj48aSBjbGFzcz1cXFwic3MtaWNvbi1jb2dcXFwiPjwvaT4gPHNwYW4gY2xhc3M9XFxcInNzLWlubmVyLXRleHRcXFwiPlNldHRpbmdzPC9zcGFuPjwvYT5cXG4gICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgY2xhc3M9XFxcInNzLXRyYXNoLXRvZ2dsZVxcXCI+PGkgY2xhc3M9XFxcInNzLWljb24tdHJhc2gtb1xcXCI+PC9pPiA8c3BhbiBjbGFzcz1cXFwic3MtaW5uZXItdGV4dFxcXCI+VmlldyBUcmFzaDwvc3Bhbj48L2E+XFxuICA8L2Rpdj48IS0tIC5zcy1oZWFkZXItYWN0aW9ucyAtLT5cXG48L2Rpdj5cXG5cIjtcbiAgfSxcInVzZURhdGFcIjp0cnVlfSk7XG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFyc0NvbXBpbGVyID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzQ29tcGlsZXIudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIjxpbWcgY2xhc3M9XFxcImhvbWUtbG9nb1xcXCIgYWx0PVxcXCJob21lLWxvZ29cXFwiIHdpZHRoPVxcXCIzMzBcXFwiIHNyYz1cXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFWZ0FBQUJFQ0FZQUFBREVEeTBVQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFEbUJKUkVGVWVOcnNYZHQxMjdvU2hiUHlMOThLcEZSZ3VnSXhuL215VW9Ib0NpSlhFTG1DeUJXWXJpRDBWejRQVlVHb0NvNVV3WkVyOENVMG9FbFRlQk9VSlh2dnRaQ0hKQkxBWUdaajhCcWNQVDgvTXdBQUFDQThQa0VFQUFBQUlGZ0FBQUFRTEFBQUFBQ0NCUUFBQU1FQ0FBQ0FZQUVBQUFBUUxBQUFBQWdXQUFBQUJBc0FBQUNBWUFFQUFFQ3dBQUFBSUZoQWhiTnY1MlVxeXZSY3BoUUNBWUFQWXZvSTluSUFjbVVzTDlORjQ5TUg5dnduT2JKeXh1V2ZVWm1Lc213NUdnNEFRTENuU0s3SFJiTHlNcTdLRkpmbDI2SVJBUUJUQk1lS1ZFR3VITk9TM0daSFVNYUZwSXo4L3dtYUR3QkFzS2VNOVJHVVlhVDRmSUxtQVFBUTdERWpFY050R2E3TElYZ0dFUUVBQ0Jid0FjMWh4aEtTNWVTYVFrQnZnTE52VVpsR0VBUUFnbjJmSkF0eWZSdGluWmVKdDhYZk12MWIvanZma1MwQTlJalBFTUhCU0JiRy9IYmttcFIvL214OU9pNFRuNktCTnd2QWd3V0FEa2dVbncvRi9sOEFBTUVDQUFDQVlBRUFBQUFRTEFBQVFGOElzOGhGcTdGOFl6ci8rN3oxYmM3b2ZIc1dLSjlZNUJIdjNzdllWdnlkQnp2YVNma2tvajdqeGpjYlJvY0RlSjJ5TXIvQzRsMjhyRE5SWGlhZW4xbVg5ZXpiUkR3cld5VExSRG5XamQ4MlQ0ZWxKN2xqZ2VUUDA2anhhYkdUblkzTSt5c1hMOCs4VWE3WDhxVzJuclRLdlJXLzIxcnFTcnVkaTRCNlBSTHZqMXB5TFY1MGFOK21xM3F1cmR0TzFrYVVkOXlRelZiWWJPRW9rNUR5T0c5d1ZpVHNtZ2s5V3dmSm9sTXNBbHFkNVFvM3RQajFFNk5qbVF0bkFkbm44N0Q3bmE5d2FNRmozaUpWSFRhQ0xEUE5PM1BKKzh4bi9kMWtleXNNNWJma08vMjJNSG41T0pibGMvRWJrQmMzNm9GQmp6S25kbGJYa2VPclZYQWJNc2ExcEd3MzVmT0wzVFl3NnR3R2lqSkgwdkpTdldlaTNrT05ubVhDZHRZOTJXbXR5eFR4YmVxb1I5eTJmN3pTSDZyVHVjaDdxbmh5S2ZJdEpFNUpvaWh6cFFPcGMyQWllbmNpMG9WQkh2NHk3MFN3Vk1qTWdZamF3b2t0dmI5STVETjB6T08yZlArOHBjU1RsbmVkdjJxY2ZRVnhnVHh3QzVYL3IrSVp1Y0w2eS9aSllkeDZvandHZ2lWeSt1bng1RjFaeHBuQzYwOGE3UjFwU0hzbHZLazIydDRwbDhVL2l1Y0xEWUhJZFlUYWVlNmhjN2ZXVGdycFgyb2drallleTNRbC9lYjV6NW1Hd084VjVCa1pPc3hLZHhOQjdvbHd4QWFXNVYyS1o5Y1c4bkI5dDV4UGVpVllmWVNvY0NTcmJqVG1JUGk1d1NQZENJRkhGZ2JpVHJKcW81UTNXaGpabmhiQnlyMGxGN3dlRFhSL241ekE5VzNwMWc3K2pvUExDS2dhOGc2Q3RaV2FZSDA3eURZbnBKNU9qZzJmZE5VTEwzdndXZVJLQXhEQVlLZGdSQ2lxb2ZwOXh6ekd3aUIwbmlCWDhGK0JEREpFZEt4NVlISTlidENvb2F2c0w0VGNLbEtaQml6aGo0RHZ5aHFqcWJ3RHVWWjF6algyY3g2Y1hQdkhvSU84QjBJZUk0VThaZ0gwWWl6MHRVZUNKZUs3c3ZqbHh1STNReWFMMkVUS2taNG9aY3lWU20rVzdTaXdRUjg3dVlhczc0L1dvc3l4NFc0M1Qxc1RiUWppdTlEWXlZS2RGcm1HSXVoVW9XZnp3SHJXbXdlYkdJWXRYM2ZEaU9jL0l6R2MrQ0xtZEZTWUtQSVlHb2IrMTd1OEdQdHVlSDlYckhaNVVKMTRmUzRaTGFUcEd0blh5T2VPWmZtZmtNUFR5WFpHK2lIZm5XampLdDBaNnNybHZnNWN4bzNITTdWK1ZtMVZUek1rekx5d3d2WHJWcnpIaEt1OWsyaEVLRk9MZXQwMmJPamhBTzI5RWJiNjZDSFhwU2lqU1NaakNRSE9ESjNOUTR0UGJQVE1HcTdidEVZYTRlM1BDZEhFODZTc2RLYndmR1VHb1J0bTN6UThnWHJvMVgyK1ZrVm9yK3RFY3p4Sm1SOHY5MDlOQS9oNDRCT0RnazFhWmFIdFB6U0hXcHlneHhKcnlGVzI0cDZMdWI2MXBxNVpZTy9OeGZONUVtMlVlNzVQTmljL0VuWFNrZktNMWR1TGJBaEF0bUNUaWVGdlg5TUsrM1pMQzVHcEliK05rR2x6aDRGcGJua2k3S0ZDcEdrdjJieHRKWXNnTnVYcXdZNlZpcTFmMVZ4bzU2VmVLNVRPZTVWN0tMVGFleHRZS1NhYU91bm1ZdHluQ0VocEJnYkQzU3Jxdm1hbkdSeGIxYzdxUFpja0F4Vko1WTNJWlk4ZFBmdWxHQzNZZHBTVnNlYUdOaDQ2a0Y3VnRyR2hMbGNPSGZXZGNqV2NpQ2J1b1owZkpFNFJFMXNiVFdzV3lSNEIwdjhuRGgyM2pyTUtqVTNOblRnb0VNR3FYSHY5dkFRcDNtMURVYXJwaE56U1E2NDlBUFVjWjJZd2dCc3hyUDdTS29zTWo5cHRIMlRJang3bDhDSGx6TGdsaCtTNFlSOERLZHVQcjN2N29rdmNhSjcvOEE3cHZER2RvaHRhTm9meVZZb2REOGFrRnRzT2RaN1V3cUJyYzBNSEhWdmE0dHlnUjBVUDB3VnpUWDZwUm04M3lnNkxQbi95NHFJYVd3ODllM0E5dU9OS3NHdk4zRWVxWGVEaFBXZXQ5SkhuemFVWE85ZWRUd2xVY3kxMEpiWnBXRjdzZWxHdXJKdzRxUmN2dEw4M0k1RTB3SXFGWDZETE83Yk5zV0tqbEt0dUlZSGFNR0wxM093WDN6MktBV0Z6Y0dhazBVM1Q4eTZuMXdaS3I5enVnRThlVkRMbS9hbHJUMzB1TE91Lzh0WXo4b2EvQytmczB1ZVNVdGM1V04wRytDbWorZFlGY3psYTV6ZTB2QmZrK25ZbVZjVjRKWEt2cnJ2dTR3cVlVeU5PbDQ1anFqQ1F2NlZjOWFmeWNMVjRYM2h2K2xZdytSeDJ0YlZMelZkazQ1MXMydFdEVFExRGExNW92dmpESThZWHUvMW43LzE2RGs2cTVKM2pmaTEzWGRKaCtxSDBDSGdMUFd2eVZTWkd4dWNoTTNjaldHSjBXemVaOXhxL0dvWEhMYVZBMndOOThOQ2o1SjFKZ2srdlBXdFR0eE5rMERNN1Bic1NJK1AveEhSbkVMNzY1RkZnN3FsZE96N0ZDLzk3dDcwSlJBdlU0S3ZJSzBjOXV0L2RyVVYzYkoxRGhFQVBlalp0OEZXbjA1bCs4V0JwSmUzU3NkQWNRMUh3M01NNCtBYmdEWFRsWFhrWDFZTFZuZU9UMWRBT0hUWmdPL0tPUGZTTWp0SVQwY2FISTFncWRDR01nM3V6UzhlbitVS1pLOGxtdXhOaXRLcFhuWFNwRWhmY0RUdk1pUlFndkFITVJJZnRlaXB2SURyc3hRZVg0QlpLWk5XWmN6Mzc2c0ZYbkdqLzhabWUraHlnNE55YlRSdkJocXNBMGFaVEVCZU1WdWhpeC93eXBsclpvNU0rd0drYUFHMGdyME5MeHN3dTdnWEhqOTFpMk1lOER2M2hUWU9RbjU2ZTVUdmRxbU5YVEpoOWdLWDczYzRsQnozN0hMRGdkSFN6V3JVanRrK1lQcHJWZU9kNm4vS1dtM3Jvc1Awd2lsNUh4dWVkYWhHMDNyUmRoZ0t6VTZjZEN6MHlrZTFpdHdnV0t0cjk0ZkRFM1BhNU5yM1dGTHRYT25Yb1BNMGJ0eTJZK01wWnp6NzNXSUhLczQyWlBvSlF3a0p2Ymo0TXllekhiajM3dGg4ejRQMlJhOExhY1IvNnFuZTlEekVUUnJEUUVPMUE2TktwVFJjVUI3MDVBbEIxNmhWZmpjUy94eUgwN0pNenFkQVdoclZJcVhFZWxieFQzVUxFeURMMzZJQWl0NWtiWGtpR0Z1TWVERHc2R2tVazVidVhqa1RNNThwbDc1dUkzUUJ6NHlJQ25jQ2JNUDA4ZTU5RU5XTEFxVG9GVVVQUFJoWjZGaHYwekhwaDlaTkRJYzlaZlRYR1VLUXBzemthcWo4N0hKSm9WQlhQcFo1RE53SEdCekxFeUxKdElnL0ZjMzF1Rkl6Y0tBb1l2MFBzcDBpMml3aXpqaDJqcjdIMFJkN25EaktiV0hWRzNmVHlmWG5UZEpQQjM0YWUvV3VsWng3SFlydDZzQW1UUndPNk1qWTRHYkpONkM4ZDZVMjFaNGVwREtySjZyVmpYa1B0L2pmNmJoaFFEVXoxTmltOUxrVGZXQ00zWGF6TTg5NDZEMUx3c2JRZTVoSFJOckI4emFkM3pERldiZVpRYzhYbkYxYUVTU0UvZnpjNkk5VXVuS1ZHcHljV2RwcG9QVUczVG1MRjNoSlUzNm1YbmdYQ3AwRHZ5UXlSdm5YRDVuYU0wNVZXU1dYS1dNL3p1aWkzYVhIZ2wxUWg2NXRuWFEzSlJCb3JnM3huVXNNbnc1dGF0RThzNlNSMDl5aGR2T3JwNjB2NlF0UmJSZFFENHhTTGZ1UDMydkh6S2svVDlTc21YVmwzSlBuTTREek0yUDdjODFqUkhycDhVbVUrZGxmWjdFOEoxbGZjNjIzN2JSQjEwTE1nKzZ0ZEZya3kwYUFEUllHckFCMVpRN0JWajNobGVHK2JqTzgxZ3VHOTkwbzhWNjB5NjdaWkxKV0JIS2k4T25MNkxSWnc4c2J3U2JmSytNVDg1MkJOOWY0bHRxRVZEZG5hYmkrcDl2RnRCQm5ZM1BUSkdHMUxpY1V6aWNINFhGYXpiVVlxKy9FZGlHaCtlYnpYUlA1VmxMWTVvN2l5NjhhMlExTUE3NDNWTGdyU045V05yZkxBSS9YMTFUOGRDSVRMN0lkR2p5bzd6VVc3TnJkWERpemxWTmw0WmQvSEd1dzkxOGh1K25LZFRIc1hFK2w4R3NLWmNMdFZOc3p0a1cxQ0d1ME4rL2lleG5DWC8xMHFEVUI5MTcwdjJ0ZUZ4OHp0VnRsMTRLbUhRMkVqRG9HNDZGTE83SzRtcjY3VkhudnBrbnQrM2RwY1gyZWRQc2pxWTlKTCtVMm5ZZTJuQzY2TmUwWjlielhXdFdmejlsdTdkbTl1bFJ0WjJPQVgyMmlCcmxNRWk4RHpLak9GUVNRc3pGMVR0MXJ2Z3ZJT2RkVHlNVUJjMGxNOTlwbDR0YjBkTGl5SmNXR1luNTMzVUcrM0VRdDVTcmJITlFlVzl0aEZ0bjEzdXVrUmxHTm1LZXV4U0NaeXZYTUp4ZW9UVFd2Q3dzUUVVRWNIcjYrdmVPcjQvcm1sMGw5M3JNdlNrMlJrOWU1U2xoVTcvSEhoYTYrREl0M3IydloyNWdISnpaWmNZK2RGTnpxdUdhS043cFNIRE1Mb2RGZEhLbUhIZ0xCNnRuTHRxSDJpYWEzRjNNK3lnMkplRzdkQjFDUzc2dVg5ci9OS0daMkY5K2s0YnNVVkl6SkQwL1YwUmVDeVBBcURUendNZU1YY1l3RThXUTBCelhMdmVqUHVnN1huVCtRV2dtU3JTejRMejNvbkhjdHgrM0pUclZtMnZzNUoxS0VqY09sMHQ0NmZtNzdmQkpaRjAwYWNPMVRmYUZwYk1UL3kxY0VvcTZ1WUkydWpmQjFRNXRGQzZXOFp6Y09sSG5VcXhEeml0UVc1UFFubDAxOVhRcDNSblVLQk0wUG5Fb242YkN3STVxdTRoMnJiTU9EdkZwM1RSaGhEOUhLWEZUMjN0S2g3RkdRSVNPL3dNZVlObzRzSkV5ZWw5dy80MGRTeHFQUHhZTDl5TEVWYnp4MWtlK21RUnkzVFdvOXVITXQzNmFnWEM4ZlBUZCtuZ1dUUjFQY2JZU1BPdXlMY0ZybTBiOXBONEkvWS9oWWNYcWc4eUhuMWVtTjhkUTZlc1dvMU5QUVZOYlNTSFVucWt6c1BpVWsyOFl0WDYwcE04ckxrek9ZK3AvcWM5Y2lwVGVwNEExSGptYUxYdUJIMXl2MklxVGU4OC95elFQbzBFdmsxWlR0bXJ4YzkxaUpsdmNXYXFBT1B4QXBQcmFyek9tQWV6WG9XVEhkeEk4bHBKdVEwbG5oMmEwWno0SGtIN3BnSm05NWF2K3YxYzB3OGwzbTBPMC9EQnFFV2pUYnZGT3NoSE1FQ0FBQUFBYVlJQUFBQUFCQXNBQUFBQ0JZQUFBQUVDd0FBQUlCZ0FRQUFRTEFBQUFBZ1dBQUFBQUFFQ3dBQUFJSUZBQUFBd1FJQUFBQWdXQUFBZ0RmSC93VVlBR3V3TkFzczBaUmxBQUFBQUVsRlRrU3VRbUNDXFxcIiAvPlxcbjxkaXYgY2xhc3M9XFxcImhvbWUtdGV4dFxcXCI+U3RhcnQgYnkgYWRkaW5nIGEgc29jaWFsIGNoYW5uZWw6PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiaG9tZS1iaWctYnV0dG9uc1xcXCI+XFxuICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMClcXFwiIGNsYXNzPVxcXCJob21lLWJpZy1idXR0b24gYmlnLWJ1dHRvbi10d2l0dGVyXFxcIiBkYXRhLXNlcnZpY2U9XFxcInR3aXR0ZXJcXFwiPjxpIGNsYXNzPVxcXCJzcy1pY29uLXR3aXR0ZXJcXFwiPjwvaT48L2E+XFxuICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMClcXFwiIGNsYXNzPVxcXCJob21lLWJpZy1idXR0b24gYmlnLWJ1dHRvbi1pbnN0YWdyYW1cXFwiIGRhdGEtc2VydmljZT1cXFwiaW5zdGFncmFtXFxcIj48aSBjbGFzcz1cXFwic3MtaWNvbi1pbnN0YWdyYW1cXFwiPjwvaT48L2E+XFxuPC9kaXY+XFxuXCI7XG4gIH0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5hbGVydGlmeSA9IHJlcXVpcmUgJ2FsZXJ0aWZ5J1xuXG5BcHAubW9kdWxlICdTU0FkbWluJywgKFNTQWRtaW4sIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NBZG1pbi5WaWV3cy5IZWFkZXJJdGVtVmlldyBleHRlbmRzIEFwcC5WaWV3cy5CYXNlSXRlbVZpZXdcblxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuLi9UZW1wbGF0ZXMvSGVhZGVySXRlbVZpZXdUZW1wbGF0ZScpXG5cbiAgICBjbGFzc05hbWU6ICdzcy1oZWFkZXInXG5cbiAgICBldmVudHM6XG4gICAgICAnY2xpY2sgLnNzLXNldHRpbmdzLXRvZ2dsZScgOiAnY2xpY2tfX3RvZ2dsZVNldHRpbmdzJ1xuICAgICAgJ2NsaWNrIC5zcy10cmFzaC10b2dnbGUnIDogJ2NsaWNrX190b2dnbGVUcmFzaCdcblxuXG4gICAgY2xpY2tfX3RvZ2dsZVNldHRpbmdzOiA9PlxuXG4gICAgICBhbGVydGlmeS5hbGVydCgpLnNldHRpbmdcbiAgICAgICAgb25zaG93OiA9PlxuICAgICAgICAgICQoJy5tb2RlcmF0aW9uLXRvZ2dsZScpLm9uICdjbGljaycsID0+XG4gICAgICAgICAgICBAY2xpY2tfX3RvZ2dsZU1vZGVyYXRpb24oKVxuXG5cbiAgICAgIGFsZXJ0TWVzc2FnZSA9ICc8c3Bhbj4gPHN0cm9uZz5BdXRvLUFwcHJvdmUgPC9zdHJvbmc+IGlzIDwvc3Bhbj4nXG5cbiAgICAgIGlmKCBAbW9kZWwuZ2V0ICdtb2RlcmF0aW9uJyApXG4gICAgICAgIGFsZXJ0TWVzc2FnZSArPSAnPGJ1dHRvbiBjbGFzcz1cIm1vZGVyYXRpb24tdG9nZ2xlIGJ0biBidG4taW5mb1wiPk9GRjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kZXJhdGlvbi10b2dnbGUgYnRuIGJ0bi1kZWZhdWx0XCI+T048L2J1dHRvbj4nXG4gICAgICBlbHNlXG4gICAgICAgIGFsZXJ0TWVzc2FnZSArPSAnPGJ1dHRvbiBjbGFzcz1cIm1vZGVyYXRpb24tdG9nZ2xlIGJ0biBidG4tZGVmYXVsdFwiPk9GRjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kZXJhdGlvbi10b2dnbGUgYnRuIGJ0bi1pbmZvXCI+T048L2J1dHRvbj4nXG5cbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0ICc8aDM+PGkgY2xhc3M9XCJzcy1pY29uLWNvZ1wiPjwvaT4gU2V0dGluZ3MgPC9oMz4nLCBhbGVydE1lc3NhZ2VcblxuXG5cblxuICAgIGNsaWNrX190b2dnbGVNb2RlcmF0aW9uOiA9PlxuXG4gICAgICBhbGVydGlmeS5jbG9zZUFsbCgpXG5cbiAgICAgIGFsZXJ0TWVzc2FnZSA9ICc8aDE+PGkgY2xhc3M9XCJzcy1pY29uLXJlZnJlc2hcIj48L2k+PC9oMT4nXG5cbiAgICAgIGlmKCBAbW9kZWwuZ2V0ICdtb2RlcmF0aW9uJyApXG4gICAgICAgIGFsZXJ0TWVzc2FnZSArPSAnPGgzPkZ1dHVyZSBwb3N0cyB3aWxsIG5vdyBhdXRvbWF0aWNhbGx5IGJlIHB1Ymxpc2hlZC48L2gzPjxwPlByZXZpb3VzbHkgc2F2ZWQgY29udGVudCB3aWxsIG5vdCBjaGFuZ2U8L3A+J1xuICAgICAgZWxzZVxuICAgICAgICBhbGVydE1lc3NhZ2UgKz0gJzxoMz5GdXR1cmUgcG9zdHMgd2lsbCBub3cgbmVlZCBtYW51YWwgYXBwcm92YWwgYmVmb3JlIGJlaW5nIHB1Ymxpc2hlZC48L2gzPjxwPlByZXZpb3VzbHkgc2F2ZWQgY29udGVudCB3aWxsIG5vdCBjaGFuZ2U8L3A+J1xuXG5cbiAgICAgIGFsZXJ0aWZ5LmNvbmZpcm0gJydcbiAgICAgICwgYWxlcnRNZXNzYWdlXG4gICAgICAgICwgPT5cbiAgICAgICAgICBAbW9kZWwudG9nZ2xlQXR0cmlidXRlICdtb2RlcmF0aW9uJ1xuICAgICAgICAgIEBtb2RlbC5zYXZlKClcbiAgICAgICwgPT5cblxuXG5cblxuICAgIGNsaWNrX190b2dnbGVUcmFzaDogKGV2ZW50KSA9PlxuXG4gICAgICBpZiBub3QgQXBwLlNTU2VhcmNoPyBvciBub3QgQXBwLlNTUG9zdHM/XG4gICAgICAgIHJldHVyblxuXG4gICAgICAkdGFyZ2V0ID0gQCQoJy5zcy10cmFzaC10b2dnbGUnKVxuXG4gICAgICBpZiBAc2hvd2luZ1RyYXNoPyBhbmQgQHNob3dpbmdUcmFzaCBpcyB0cnVlXG4gICAgICAgIEBzaG93aW5nVHJhc2ggPSBmYWxzZVxuICAgICAgZWxzZVxuICAgICAgICBAc2hvd2luZ1RyYXNoID0gdHJ1ZVxuXG4gICAgICAjU0VUIERFRkFVTFRTXG4gICAgICBmZXRjaE9wdGlvbnMgID0ge31cbiAgICAgIGZldGNoRGF0YSAgPSB7fVxuICAgICAgaWNvbkNsYXNzID0gJ3NzLWljb24tdHJhc2gtbydcbiAgICAgIGlubmVyVGV4dCAgPSAnVmlldyBUcmFzaCdcbiAgICAgIHBvc3RGZXRjaENvbW1hbmQgPSAnZmV0Y2hTZXJ2ZXJQb3N0cydcbiAgICAgIGZldGNoRGF0YS5zdGF0dXMgPSBbJ3B1Ymxpc2gnLCdkcmFmdCddXG5cblxuICAgICAgI0lGIFNFRSBUUkFTSCwgU0VUIFNFRSBBTExcbiAgICAgIGlmIEBzaG93aW5nVHJhc2hcbiAgICAgICAgZmV0Y2hEYXRhLnN0YXR1cyA9ICd0cmFzaCdcbiAgICAgICAgaWNvbkNsYXNzID0gJ3NzLWljb24tbGV2ZWwtdXAnXG4gICAgICAgIGlubmVyVGV4dCA9IFwiR28gQmFja1wiXG5cbiAgICAgICAgIyBzZXQgc2VhcmNoIGFjdGlvbiB0byBlbXB0eSBhbmQgc2F2ZSBwcmV2aW91cyBzZWFyY2ggYWN0aW9uXG4gICAgICAgIEBwcmV2U2VhcmNoQWN0aW9uID0gQXBwLlNTU2VhcmNoLnJlcXJlcy5yZXF1ZXN0ICdhY3Rpb24nXG5cbiAgICAgICAgIyBzZXQgZW1wdHkgZm9ybSBhY3Rpb25cbiAgICAgICAgQXBwLlNTU2VhcmNoLmNvbW1hbmRzLmV4ZWN1dGUgJ3NldEFjdGlvbicsICcnXG5cblxuICAgICAgIyBjaGVjayBpZiB3ZSBuZWVkIHRvIGZldGNoIGZyb20gdGhlIEFQSVxuICAgICAgaWYgbm90IEBzaG93aW5nVHJhc2ggYW5kIEBwcmV2U2VhcmNoQWN0aW9uPyBhbmQgQHByZXZTZWFyY2hBY3Rpb24gaXMgJ3B1Ymxpc2gnXG4gICAgICAgIHBvc3RGZXRjaENvbW1hbmQgPSAnZmV0Y2hBcGlQb3N0cydcblxuXG4gICAgICAjIHNldCBzdWNjZXNzIGNhbGxiYWNrIHRvIGJlIHJ1biBhZnRlciBmZXRjaFxuICAgICAgZmV0Y2hPcHRpb25zLnN1Y2Nlc3MgPSA9PlxuXG4gICAgICAgICMgc3RvcCBzcGlubmVyXG4gICAgICAgIEFwcC5sb2FkZXIuY3VycmVudFZpZXcuc3RvcFNwaW5uZXIoKVxuXG4gICAgICAgIGlmIG5vdCBAc2hvd2luZ1RyYXNoIGFuZCBAcHJldlNlYXJjaEFjdGlvbj9cbiAgICAgICAgICBhY3Rpb24gPSAnJ1xuICAgICAgICAgIHN3aXRjaCBAcHJldlNlYXJjaEFjdGlvblxuICAgICAgICAgICAgd2hlbiAndmlldycsICdzZWFyY2gnXG4gICAgICAgICAgICAgIHBvc3RzQ29sbGVjdGlvbiA9IEFwcC5TU1Bvc3RzLnJlcXJlcy5yZXF1ZXN0ICdwb3N0c0NvbGxlY3Rpb24nXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHBvc3RzQ29sbGVjdGlvbiA9IEFwcC5TU1Bvc3RzLnJlcXJlcy5yZXF1ZXN0ICdhcGlQb3N0c0NvbGxlY3Rpb24nXG5cbiAgICAgICAgICBpZiBwb3N0c0NvbGxlY3Rpb24ubGVuZ3RoID4gMFxuICAgICAgICAgICAgYWN0aW9uID0gQHByZXZTZWFyY2hBY3Rpb25cblxuICAgICAgICAgIEFwcC5TU1NlYXJjaC5jb21tYW5kcy5leGVjdXRlICdzZXRBY3Rpb24nLCBhY3Rpb25cblxuXG4gICAgICAjIGNsb3NlIHBvc3RzIHZpZXdcbiAgICAgIEFwcC5wb3N0cy5jbG9zZSgpXG5cbiAgICAgICMgU2hvdyBsb2FkZXJcbiAgICAgIEFwcC5sb2FkZXIuY3VycmVudFZpZXcuc3RhcnRTcGlubmVyKClcblxuICAgICAgI0FESlVTVCBTVFlMRSBDTEFTU0VTXG4gICAgICAkdGFyZ2V0LmZpbmQoJ2knKS5hdHRyICdjbGFzcycsIGljb25DbGFzc1xuICAgICAgJHRhcmdldC5maW5kKCcuc3MtaW5uZXItdGV4dCcpLnRleHQgaW5uZXJUZXh0XG5cbiAgICAgICNGRVRDSCBQT1NUUyBXSVRIIFVQREFURUQgQVJHVU1FTlRTXG4gICAgICBBcHAuU1NQb3N0cy5jb21tYW5kcy5leGVjdXRlIHBvc3RGZXRjaENvbW1hbmQsIGZldGNoRGF0YSwgZmV0Y2hPcHRpb25zXG5cblxuXG4gICAgcmVzZXRUcmFzaFRvZ2dsZTogPT5cblxuICAgICAgQHNob3dpbmdUcmFzaCA9IGZhbHNlXG4gICAgICBAcHJldlNlYXJjaEFjdGlvbiA9IG51bGxcblxuICAgICAgJHRhcmdldCA9IEAkKCcuc3MtdHJhc2gtdG9nZ2xlJylcbiAgICAgIGljb25DbGFzcyA9ICdzcy1pY29uLXRyYXNoLW8nXG4gICAgICBpbm5lclRleHQgID0gJ1ZpZXcgVHJhc2gnXG5cbiAgICAgICNBREpVU1QgU1RZTEUgQ0xBU1NFU1xuICAgICAgJHRhcmdldC5maW5kKCdpJykuYXR0ciAnY2xhc3MnLCBpY29uQ2xhc3NcbiAgICAgICR0YXJnZXQuZmluZCgnLnNzLWlubmVyLXRleHQnKS50ZXh0IGlubmVyVGV4dFxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU0FkbWluJywgKFNTQWRtaW4sIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NBZG1pbi5WaWV3cy5Ib21lSXRlbVZpZXcgZXh0ZW5kcyBBcHAuVmlld3MuQmFzZUl0ZW1WaWV3XG5cbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi4vVGVtcGxhdGVzL0hvbWVJdGVtVmlld1RlbXBsYXRlJylcblxuICAgIGNsYXNzTmFtZTogJ3NzLWhvbWUnXG5cbiAgICBldmVudHM6XG4gICAgICAnY2xpY2sgLmhvbWUtYmlnLWJ1dHRvbic6ICdsb2dpbidcblxuXG4gICAgbG9naW46IChldmVudCkgPT5cblxuICAgICAgaWYgbm90IEFwcC5TU0F1dGg/XG4gICAgICAgIHJldHVyblxuXG4gICAgICBBcHAuU1NBdXRoLmNvbW1hbmRzLmV4ZWN1dGUgJ2xvZ2luJywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdkYXRhLXNlcnZpY2UnKVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbnJlcXVpcmUgJy4vU1NBZG1pbidcblxuIyBWaWV3c1xucmVxdWlyZSAnLi9WaWV3cy9IZWFkZXJJdGVtVmlldydcbnJlcXVpcmUgJy4vVmlld3MvSG9tZUl0ZW1WaWV3J1xuXG4jIENvbnRyb2xsZXJzXG5yZXF1aXJlICcuL0NvbnRyb2xsZXJzL0FkbWluQ29udHJvbGxlcidcblxuXG5BcHAubW9kdWxlICdTU0FkbWluJywgKFNTQWRtaW4sIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgU1NBZG1pbi5hZGRJbml0aWFsaXplciAtPlxuXG4gICAgY29udHJvbGxlciA9IG5ldyBTU0FkbWluLkNvbnRyb2xsZXJzLkFkbWluQ29udHJvbGxlcigpXG5cbiAgICAjIyNcbiAgICBEZWZpbmUgTW9kdWxlIEFQSVxuICAgICMjI1xuICAgIFNTQWRtaW4uY29tbWFuZHMuc2V0SGFuZGxlciAncmVzZXRUcmFzaFRvZ2dsZScsIGNvbnRyb2xsZXIucmVzZXRUcmFzaFRvZ2dsZVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbkFwcC5tb2R1bGUgJ1NTQXV0aCcsIChTU0F1dGgsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NBdXRoLkNvbGxlY3Rpb25zLlNlcnZpY2VzQ29sbGVjdGlvbiBleHRlbmRzIEFwcC5Db2xsZWN0aW9ucy5BcGlDb2xsZWN0aW9uXG5cbiAgICBtb2RlbDogU1NBdXRoLk1vZGVscy5TZXJ2aWNlTW9kZWxcbiAgICBhcGlVcmw6ICcxL3NpdGUvc29jaWFsc3RyZWFtc19zZXJ2aWNlcydcbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU0F1dGgnLCAoU1NBdXRoLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIGNsYXNzIFNTQXV0aC5Db250cm9sbGVycy5BdXRoQ29udHJvbGxlciBleHRlbmRzIEJhY2tib25lLk1hcmlvbmV0dGUuQ29udHJvbGxlclxuXG5cbiAgICBnZXRTZXJ2aWNlc0NvbGxlY3Rpb246ID0+XG5cbiAgICAgIGlmIG5vdCBAc2VydmljZXNDb2xsZWN0aW9uP1xuXG4gICAgICAgIEBzZXJ2aWNlc0NvbGxlY3Rpb24gPSBuZXcgU1NBdXRoLkNvbGxlY3Rpb25zLlNlcnZpY2VzQ29sbGVjdGlvblxuXG4gICAgICAgICMgZmV0Y2ggaW5pdGlhbCBwb3N0cyBmcm9tIERPTVxuICAgICAgICBAc2VydmljZXNDb2xsZWN0aW9uLmZldGNoKClcblxuICAgICAgQHNlcnZpY2VzQ29sbGVjdGlvblxuXG5cbiAgICBsb2dpbjogKHNlcnZpY2UpID0+XG5cbiAgICAgICMgU2F2ZSBzdHJlYW0gb3B0aW9ucyB2aWEgQUpBWFxuICAgICAgc3Nfb2F1dGhfdXJsICAgPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAnc3Nfb2F1dGhfdXJsJ1xuICAgICAgYWRtaW5fcGFnZV91cmwgPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAnYWRtaW5fcGFnZV91cmwnXG4gICAgICBzc191c2VyX2lkICAgICA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICdzc191c2VyX2lkJ1xuICAgICAgcGx1Z2luX3ZlcnNpb24gPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAncGx1Z2luX3ZlcnNpb24nXG4gICAgICBhY2Nlc3NfdG9rZW4gPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAnYWNjZXNzX3Rva2VuJ1xuXG4gICAgICB1cmxBcmdzID1cbiAgICAgICAgb3JpZ2luX3VybCAgICAgOiBlbmNvZGVVUklDb21wb25lbnQoIGFkbWluX3BhZ2VfdXJsIClcbiAgICAgICAgc3NfdXNlcl9pZCAgICAgOiBzc191c2VyX2lkXG4gICAgICAgIGFjY2Vzc190b2tlbiAgIDogYWNjZXNzX3Rva2VuXG4gICAgICAgIHBsdWdpbl92ZXJzaW9uIDogcGx1Z2luX3ZlcnNpb25cblxuICAgICAgdXJsU3RyaW5nID0gQXBwLkhlbHBlcnMuaHR0cC50b1VybCBzc19vYXV0aF91cmwgKyAnLycgKyBzZXJ2aWNlICsgJy1yZWRpcmVjdCcsIHVybEFyZ3NcblxuICAgICAgc2NyZWVuWCA9ICggaWYgdHlwZW9mIHdpbmRvdy5zY3JlZW5YIGlzbnQgXCJ1bmRlZmluZWRcIiB0aGVuIHdpbmRvdy5zY3JlZW5YIGVsc2Ugd2luZG93LnNjcmVlbkxlZnQgKVxuICAgICAgc2NyZWVuWSA9ICggaWYgdHlwZW9mIHdpbmRvdy5zY3JlZW5ZIGlzbnQgXCJ1bmRlZmluZWRcIiB0aGVuIHdpbmRvdy5zY3JlZW5ZIGVsc2Ugd2luZG93LnNjcmVlblRvcCApXG4gICAgICBvdXRlcldpZHRoID0gKCBpZiB0eXBlb2Ygd2luZG93Lm91dGVyV2lkdGggaXNudCBcInVuZGVmaW5lZFwiIHRoZW4gd2luZG93Lm91dGVyV2lkdGggZWxzZSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIClcbiAgICAgIG91dGVySGVpZ2h0ID0gKCBpZiB0eXBlb2Ygd2luZG93Lm91dGVySGVpZ2h0IGlzbnQgXCJ1bmRlZmluZWRcIiB0aGVuIHdpbmRvdy5vdXRlckhlaWdodCBlbHNlIChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDIyKSApXG4gICAgICB3aWR0aCA9IDEwMDBcbiAgICAgIGhlaWdodCA9IDYwMFxuICAgICAgbGVmdCA9IHBhcnNlSW50KHNjcmVlblggKyAoICggb3V0ZXJXaWR0aCAtIHdpZHRoICkgLyAyICksIDEwIClcbiAgICAgIHRvcCA9IHBhcnNlSW50KHNjcmVlblkgKyAoICggb3V0ZXJIZWlnaHQgLSBoZWlnaHQgKSAvIDIuNSApLCAxMCApXG5cbiAgICAgIGZlYXR1cmVzID0gKCBcIndpZHRoPVwiICsgd2lkdGggKyBcIixoZWlnaHQ9XCIgKyBoZWlnaHQgKyBcIixsZWZ0PVwiICsgbGVmdCArIFwiLHRvcD1cIiArIHRvcCApXG5cbiAgICAgIEBsb2dpbl93aW4gPSB3aW5kb3cub3BlbiggdXJsU3RyaW5nLCBcIlwiLCBmZWF0dXJlcyApXG4gICAgICBAbG9naW5fd2luLmZvY3VzKCkgIGlmIHdpbmRvdy5mb2N1c1xuXG4gICAgICBzZXRUaW1lb3V0IEBjaGVja0xvZ2luU3RhdHVzLCA1MDBcblxuXG4gICAgY2hlY2tMb2dpblN0YXR1czogPT5cblxuICAgICAgaWYgbm90IEBsb2dpbl93aW4/XG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiBub3QgQGxvZ2luX3dpbi5jbG9zZWRcbiAgICAgICAgc2V0VGltZW91dCBAY2hlY2tMb2dpblN0YXR1cywgNTAwXG4gICAgICBlbHNlXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuXG5cbiAgICBsb2dvdXQ6IChzZXJ2aWNlKSA9PlxuXG4gICAgICAjIFNhdmUgc3RyZWFtIG9wdGlvbnMgdmlhIEFKQVhcbiAgICAgIHNlcnZpY2VNb2RlbCA9IEBnZXRTZXJ2aWNlc0NvbGxlY3Rpb24oKS5nZXQoIHNlcnZpY2UgKVxuXG4gICAgICBzZXJ2aWNlTW9kZWwuc2F2ZVxuICAgICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZVxuICAgICAgICBzdWNjZXNzOiAtPlxuICAgICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICwgNDAwXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU0F1dGgnLCAoU1NBdXRoLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIGNsYXNzIFNTQXV0aC5Nb2RlbHMuU2VydmljZU1vZGVsIGV4dGVuZHMgQXBwLk1vZGVscy5BcGlNb2RlbFxuXG4gICAgYXBpVXJsOiAnMS9zaXRlL3NvY2lhbHN0cmVhbXNfc2VydmljZXMnXG5cbiAgICBkZWZhdWx0czpcblxuICAgICAgaWNvbkNsYXNzOiAtPlxuICAgICAgICAnc3MtaWNvbi0nICsgQGdldCgnaWQnKVxuXG4gICAgICBwbGFjZWhvbGRlcjogLT5cbiAgICAgICAgb3V0cHV0ID0gJydcblxuICAgICAgICBzd2l0Y2ggQGdldCgnaWQnKVxuICAgICAgICAgIHdoZW4gJ3R3aXR0ZXInXG4gICAgICAgICAgICBvdXRwdXQgPSAnU2VhcmNoIFR3aXR0ZXIgZm9yIHVwIHRvIDMga2V5d29yZHMnXG4gICAgICAgICAgd2hlbiAnaW5zdGFncmFtJ1xuICAgICAgICAgICAgb3V0cHV0ID0gJ1NlYXJjaCBJbnN0YWdyYW0gZm9yIG9ubHkgMSBrZXl3b3JkJ1xuXG4gICAgICAgIG91dHB1dFxuXG5cbiAgICAgIHR5cGVzOiAtPlxuICAgICAgICBvdXRwdXQgPSBbXVxuXG4gICAgICAgIHN3aXRjaCBAZ2V0KCdpZCcpXG4gICAgICAgICAgd2hlbiAndHdpdHRlcidcbiAgICAgICAgICAgIG91dHB1dCA9IFtcbiAgICAgICAgICAgICAgdmFsdWU6ICdnbG9iYWwnXG4gICAgICAgICAgICAgIGxhYmVsOiAnUHVibGljIFR3aXR0ZXInXG4gICAgICAgICAgICAsXG4gICAgICAgICAgICAgIHZhbHVlOiAndXNlcidcbiAgICAgICAgICAgICAgbGFiZWw6ICdTZWFyY2ggQFlvdXIgcG9zdHMnXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICB3aGVuICdpbnN0YWdyYW0nXG4gICAgICAgICAgICBvdXRwdXQgPSBbXG4gICAgICAgICAgICAgIHZhbHVlOiAnZ2xvYmFsJ1xuICAgICAgICAgICAgICBsYWJlbDogJ1B1YmxpYyBJbnN0YWdyYW0nXG4gICAgICAgICAgICAsXG4gICAgICAgICAgICAgIHZhbHVlOiAndXNlcidcbiAgICAgICAgICAgICAgbGFiZWw6ICdTZWFyY2ggQFlvdXIgcG9zdHMnXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgb3V0cHV0XG5cblxuICAgICAgdGFiaW5kZXg6IC0+XG4gICAgICAgIEBjb2xsZWN0aW9uLmluZGV4T2YoQCkgKyAxXG5cblxuICAgICAgZXhwbG9kZVF1ZXJ5OiAtPlxuXG4gICAgICAgIHNlcnZpY2UgPSBAZ2V0KCdpZCcpXG5cbiAgICAgICAgaWYgQXBwLlNTU2VhcmNoLnJlcXJlcy5yZXF1ZXN0KCdzZWFyY2hNb2RlbCcpLmdldChzZXJ2aWNlICsgJ1F1ZXJ5Jyk/XG4gICAgICAgICAgcXVlcnlBcnJheSA9IEFwcC5TU1NlYXJjaC5yZXFyZXMucmVxdWVzdCgnc2VhcmNoTW9kZWwnKS5nZXQoc2VydmljZSArICdRdWVyeScpLnNwbGl0KCAnIE9SICcpXG5cbiAgICAgICAgICByZXR1cm4gcXVlcnlBcnJheVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbkFwcC5tb2R1bGUgJ1NTQXV0aCcsIChTU0F1dGgsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgU1NBdXRoLkNvbnRyb2xsZXJzID0ge31cbiAgU1NBdXRoLk1vZGVscyA9IHt9XG4gIFNTQXV0aC5Db2xsZWN0aW9ucyA9IHt9XG4gIFNTQXV0aC5WaWV3cyA9IHt9XG4gIFNTQXV0aC5MYXlvdXRzID0ge31cbiAgU1NBdXRoLlJvdXRlcnMgPSB7fVxuICBTU0F1dGguVGVtcGxhdGVzID0ge31cblxuICBTU0F1dGgudmVudCA9IG5ldyBCYWNrYm9uZS5XcmVxci5FdmVudEFnZ3JlZ2F0b3IoKVxuICBTU0F1dGguY29tbWFuZHMgPSBuZXcgQmFja2JvbmUuV3JlcXIuQ29tbWFuZHMoKVxuICBTU0F1dGgucmVxcmVzID0gbmV3IEJhY2tib25lLldyZXFyLlJlcXVlc3RSZXNwb25zZSgpXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5yZXF1aXJlICcuL1NTQXV0aCdcblxuIyBNb2RlbHNcbnJlcXVpcmUgJy4vTW9kZWxzL1NlcnZpY2VNb2RlbCdcblxuIyBDb2xsZWN0aW9uc1xucmVxdWlyZSAnLi9Db2xsZWN0aW9ucy9TZXJ2aWNlc0NvbGxlY3Rpb24nXG5cbiMgQ29udHJvbGxlcnNcbnJlcXVpcmUgJy4vQ29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXInXG5cblxuQXBwLm1vZHVsZSAnU1NBdXRoJywgKFNTQXV0aCwgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICBTU0F1dGguYWRkSW5pdGlhbGl6ZXIgLT5cblxuICAgIGNvbnRyb2xsZXIgPSBuZXcgU1NBdXRoLkNvbnRyb2xsZXJzLkF1dGhDb250cm9sbGVyXG5cbiAgICAjIyNcbiAgICBEZWZpbmUgTW9kdWxlIEFQSVxuICAgICMjI1xuICAgIFNTQXV0aC5yZXFyZXMuc2V0SGFuZGxlciAnc2VydmljZXNDb2xsZWN0aW9uJywgY29udHJvbGxlci5nZXRTZXJ2aWNlc0NvbGxlY3Rpb25cbiAgICBTU0F1dGguY29tbWFuZHMuc2V0SGFuZGxlciAnbG9naW4nLCBjb250cm9sbGVyLmxvZ2luXG4gICAgU1NBdXRoLmNvbW1hbmRzLnNldEhhbmRsZXIgJ2xvZ291dCcsIGNvbnRyb2xsZXIubG9nb3V0XG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxuQXBwLm1vZHVsZSAnU1NPcHRpb25zJywgKFNTT3B0aW9ucywgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICBjbGFzcyBTU09wdGlvbnMuQ29udHJvbGxlcnMuT3B0aW9uc0NvbnRyb2xsZXIgZXh0ZW5kcyBCYWNrYm9uZS5NYXJpb25ldHRlLkNvbnRyb2xsZXJcblxuXG4gICAgZ2V0T3B0aW9uczogKGtleSkgPT5cblxuICAgICAgb3B0aW9uc01vZGVsID0gQGdldE9wdGlvbnNNb2RlbCgpXG5cbiAgICAgIGlmIGtleT9cbiAgICAgICAgcmV0dXJuIG9wdGlvbnNNb2RlbC5nZXQga2V5XG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBvcHRpb25zTW9kZWxcblxuXG4gICAgZ2V0T3B0aW9uc01vZGVsOiA9PlxuXG4gICAgICBpZiBub3QgQG9wdGlvbnNNb2RlbD9cblxuICAgICAgICBAb3B0aW9uc01vZGVsID0gbmV3IFNTT3B0aW9ucy5Nb2RlbHMuT3B0aW9uc01vZGVsXG4gICAgICAgICAgaWQ6ICdzb2NpYWxzdHJlYW1zX2FwcF9zZXR0aW5ncydcblxuICAgICAgICAjIGZldGNoIGluaXRpYWwgZGF0YSBmcm9tIERPTVxuICAgICAgICBAb3B0aW9uc01vZGVsLmZldGNoKClcblxuICAgICAgQG9wdGlvbnNNb2RlbFxuXG5cblxuICAgIGdldFVzZXJNZXRhOiAoa2V5KSA9PlxuXG4gICAgICB1c2VyTWV0YSA9IEBnZXRVc2VyTWV0YU1vZGVsKClcblxuICAgICAgaWYga2V5P1xuICAgICAgICByZXR1cm4gdXNlck1ldGEuZ2V0IGtleVxuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gdXNlck1ldGFcblxuXG4gICAgZ2V0VXNlck1ldGFNb2RlbDogPT5cblxuICAgICAgaWYgbm90IEB1c2VyTWV0YU1vZGVsP1xuXG4gICAgICAgIEB1c2VyTWV0YU1vZGVsID0gbmV3IFNTT3B0aW9ucy5Nb2RlbHMuVXNlck1ldGFNb2RlbFxuICAgICAgICAgIGlkOiAnc29jaWFsc3RyZWFtcydcblxuICAgICAgICAjIGZldGNoIGluaXRpYWwgZGF0YSBmcm9tIERPTVxuICAgICAgICBAdXNlck1ldGFNb2RlbC5mZXRjaCgpXG5cbiAgICAgIEB1c2VyTWV0YU1vZGVsXG5cbiIsIid1c2Ugc3RyaWN0J1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbkFwcC5tb2R1bGUgJ1NTT3B0aW9ucycsIChTU09wdGlvbnMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NPcHRpb25zLk1vZGVscy5PcHRpb25zTW9kZWwgZXh0ZW5kcyBBcHAuTW9kZWxzLldQT3B0aW9uTW9kZWxcblxuICAgIGRlZmF1bHRzOlxuICAgICAgYXBwX3NldHRpbmdzOiB0cnVlXG4gICAgICBtb2RlcmF0aW9uOiBmYWxzZVxuICAgICAgdXNlcl9jYW5fbW9kZXJhdGU6IGZhbHNlXG4gICAgICBpc19hZG1pbjogZmFsc2VcbiAgICAgIGRldl9tb2RlOiBmYWxzZVxuICAgICAgc3NfYXBpX3VybDogJ2h0dHBzOi8vYXBpLnNvY2lhbHN0cmVhbXMuY29tLydcbiAgICAgIHNzX29hdXRoX3VybDogJ2h0dHBzOi8vb2F1dGguc29jaWFsc3RyZWFtcy5jb20vJ1xuICAgICAgc3NfdXNlcl9pZDogJ25ldydcbiAgICAgIGFjY2Vzc190b2tlbjogJ25ldydcbiAgICAgIHRpbWVfdG9fbmV4dF9jcm9uOiBmYWxzZVxuICAgICAgcHVibGljX3BhZ2VfdXJsOiAnJ1xuICAgICAgYWRtaW5fcGFnZV91cmw6ICcnXG4gICAgICB3cFJvb3Q6ICcvJ1xuXG5cblxuICAgIHRvZ2dsZUF0dHJpYnV0ZTogKGF0dHIpID0+XG4gICAgICBAc2V0KCBhdHRyLCBub3QgQGdldCggYXR0ciApIClcblxuXG4gICAgaW5pdGlhbGl6ZTogPT5cblxuICAgICAgQGxpc3RlblRvIEAsICdjaGFuZ2U6bW9kZXJhdGlvbicsIEBvbk1vZGVyYXRpb25DaGFuZ2VcblxuXG4gICAgb25Nb2RlcmF0aW9uQ2hhbmdlOiAobW9kZWwsIG1vZGVyYXRpb24pID0+XG5cbiAgICAgIEFwcC5TU09wdGlvbnMudmVudC50cmlnZ2VyICdjaGFuZ2U6bW9kZXJhdGlvbicsIG1vZGVsLCBtb2RlcmF0aW9uXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU09wdGlvbnMnLCAoU1NPcHRpb25zLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIGNsYXNzIFNTT3B0aW9ucy5Nb2RlbHMuVXNlck1ldGFNb2RlbCBleHRlbmRzIEFwcC5Nb2RlbHMuV1BVc2VyTWV0YU1vZGVsXG5cbiAgICBkZWZhdWx0czpcbiAgICAgIHB1Ymxpc2hQb3B1cDogZmFsc2VcbiAgICAgIHRyYXNoUG9wdXA6IGZhbHNlXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU09wdGlvbnMnLCAoU1NPcHRpb25zLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIFNTT3B0aW9ucy5Db250cm9sbGVycyA9IHt9XG4gIFNTT3B0aW9ucy5Nb2RlbHMgPSB7fVxuICBTU09wdGlvbnMuQ29sbGVjdGlvbnMgPSB7fVxuICBTU09wdGlvbnMuVmlld3MgPSB7fVxuICBTU09wdGlvbnMuTGF5b3V0cyA9IHt9XG4gIFNTT3B0aW9ucy5Sb3V0ZXJzID0ge31cbiAgU1NPcHRpb25zLlRlbXBsYXRlcyA9IHt9XG5cbiAgU1NPcHRpb25zLnZlbnQgPSBuZXcgQmFja2JvbmUuV3JlcXIuRXZlbnRBZ2dyZWdhdG9yKClcbiAgU1NPcHRpb25zLmNvbW1hbmRzID0gbmV3IEJhY2tib25lLldyZXFyLkNvbW1hbmRzKClcbiAgU1NPcHRpb25zLnJlcXJlcyA9IG5ldyBCYWNrYm9uZS5XcmVxci5SZXF1ZXN0UmVzcG9uc2UoKVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxucmVxdWlyZSAnLi9TU09wdGlvbnMnXG5cbiMgTW9kZWxzXG5yZXF1aXJlICcuL01vZGVscy9PcHRpb25zTW9kZWwnXG5yZXF1aXJlICcuL01vZGVscy9Vc2VyTWV0YU1vZGVsJ1xuXG4jIENvbnRyb2xsZXJzXG5yZXF1aXJlICcuL0NvbnRyb2xsZXJzL09wdGlvbnNDb250cm9sbGVyJ1xuXG5cbkFwcC5tb2R1bGUgJ1NTT3B0aW9ucycsIChTU09wdGlvbnMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgU1NPcHRpb25zLmFkZEluaXRpYWxpemVyIC0+XG5cbiAgICBjb250cm9sbGVyID0gbmV3IFNTT3B0aW9ucy5Db250cm9sbGVycy5PcHRpb25zQ29udHJvbGxlcigpXG5cbiAgICAjIyNcbiAgICBEZWZpbmUgTW9kdWxlIEFQSVxuICAgICMjI1xuICAgIFNTT3B0aW9ucy5yZXFyZXMuc2V0SGFuZGxlciAnb3B0aW9uJywgY29udHJvbGxlci5nZXRPcHRpb25zXG4gICAgU1NPcHRpb25zLnJlcXJlcy5zZXRIYW5kbGVyICdvcHRpb25zJywgY29udHJvbGxlci5nZXRPcHRpb25zXG4gICAgU1NPcHRpb25zLnJlcXJlcy5zZXRIYW5kbGVyICd1c2VyTWV0YScsIGNvbnRyb2xsZXIuZ2V0VXNlck1ldGFcbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU1Bvc3RzJywgKFNTUG9zdHMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NQb3N0cy5Db2xsZWN0aW9ucy5BcGlQb3N0c0NvbGxlY3Rpb24gZXh0ZW5kcyBBcHAuQ29sbGVjdGlvbnMuSW5maW5pdGVTY3JvbGxDb2xsZWN0aW9uXG5cbiAgICBtb2RlbDogU1NQb3N0cy5Nb2RlbHMuUG9zdE1vZGVsXG5cbiAgICBkYXRhOlxuICAgICAgcGVyUGFnZSA6IDI0XG4gICAgICBjcm9uIDogJ2ZhbHNlJ1xuXG4gICAgdXJsOiAtPlxuXG4gICAgICAjIGNyZWF0ZSBBUEkgdXJsLCBhZGRpbmcgZXh0cmEgZmllbGRzIGZvciBhdXRoZW50aWNhdGlvblxuICAgICAgdXJsICAgICAgICAgICAgPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAnc3NfYXBpX3VybCdcbiAgICAgIHNzX29hdXRoX3VybCAgID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAnb3B0aW9uJywgJ3NzX29hdXRoX3VybCdcbiAgICAgIGFkbWluX3BhZ2VfdXJsID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAnb3B0aW9uJywgJ2FkbWluX3BhZ2VfdXJsJ1xuICAgICAgc3NfdXNlcl9pZCAgICAgPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAnc3NfdXNlcl9pZCdcbiAgICAgIHBsdWdpbl92ZXJzaW9uID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAnb3B0aW9uJywgJ3BsdWdpbl92ZXJzaW9uJ1xuICAgICAgYWNjZXNzX3Rva2VuICAgPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAnYWNjZXNzX3Rva2VuJ1xuXG4gICAgICBkYXRhID1cbiAgICAgICAgb3JpZ2luX3VybCAgICAgOiBlbmNvZGVVUklDb21wb25lbnQoIGFkbWluX3BhZ2VfdXJsIClcbiAgICAgICAgc3NfdXNlcl9pZCAgICAgOiBzc191c2VyX2lkXG4gICAgICAgIGFjY2Vzc190b2tlbiAgIDogYWNjZXNzX3Rva2VuXG4gICAgICAgIHBsdWdpbl92ZXJzaW9uIDogcGx1Z2luX3ZlcnNpb25cblxuICAgICAgQXBwLkhlbHBlcnMuaHR0cC50b1VybCB1cmwsIGRhdGFcblxuXG4gICAgcGFyc2U6IChyZXNwb25zZSkgPT5cblxuICAgICAgIyB3ZSBzZXQgYSBtYXhpbXVtIG9mIDk0IHBvc3RzXG4gICAgICBpZiBAbGVuZ3RoID49IDk0XG4gICAgICAgIHJldHVybiBbXVxuXG4gICAgICBpZiByZXNwb25zZS5zZWFyY2hfbWV0YWRhdGE/XG5cbiAgICAgICAgaWYgbm90IEBkYXRhP1xuICAgICAgICAgIEBkYXRhID0ge31cblxuICAgICAgICBAZGF0YS5zZWFyY2hfbWV0YWRhdGEgPSByZXNwb25zZS5zZWFyY2hfbWV0YWRhdGFcblxuICAgICAgIyBjaGVjayBpZiB0aGUgY29sbGVjdGlvbiBoYXMgYSBuZXh0IHBhZ2VcbiAgICAgIGlmIEBkYXRhPyBhbmQgQGRhdGEucGVyUGFnZT8gYW5kIHJlc3BvbnNlLnN0YXR1c2VzLmxlbmd0aCA8IEBkYXRhLnBlclBhZ2VcbiAgICAgICAgQGhhc05leHQgPSBmYWxzZVxuXG4gICAgICAjIHJldHVybiB0aGUgc3RhdHVzZXMgZnJvbSB0aGUgcmVzcG9uc2VcbiAgICAgIHJlc3BvbnNlLnN0YXR1c2VzXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU1Bvc3RzJywgKFNTUG9zdHMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NQb3N0cy5Db2xsZWN0aW9ucy5Qb3N0c0NvbGxlY3Rpb24gZXh0ZW5kcyBBcHAuQ29sbGVjdGlvbnMuSW5maW5pdGVTY3JvbGxDb2xsZWN0aW9uXG5cbiAgICBtb2RlbDogU1NQb3N0cy5Nb2RlbHMuUG9zdE1vZGVsXG5cbiAgICBkYXRhOlxuICAgICAgcGVyUGFnZSA6IDI0XG4gICAgICBzdGF0dXM6ICdwdWJsaXNoJ1xuXG4gICAgYXBpVXJsOiAnMS9zaXRlL3NvY2lhbHN0cmVhbXMnXG5cbiAgICBjb21wYXJhdG9yOiAoYSxiKSA9PlxuXG4gICAgICBhSWQgPSBwYXJzZUludCBhLmdldCgnb3JkZXJfaWQnKSwgMTBcbiAgICAgIGJJZCA9IHBhcnNlSW50IGIuZ2V0KCdvcmRlcl9pZCcpLCAxMFxuXG4gICAgICBpZiBhSWQgPiBiSWRcbiAgICAgICAgLTFcbiAgICAgIGVsc2UgaWYgYUlkIDwgYklkXG4gICAgICAgIDFcbiAgICAgIGVsc2VcbiAgICAgICAgMFxuXG4gICAgbmV4dFBhZ2U6IChhcmdzKSA9PlxuXG4gICAgICBpZiBub3QgYXJncz9cbiAgICAgICAgYXJncyA9IHt9XG5cbiAgICAgIGFyZ3MgPSBfLmRlZmF1bHRzIGFyZ3MsXG4gICAgICAgIGltbWVkaWF0ZTogdHJ1ZVxuXG4gICAgICBpZiBub3QgYXJncy5kYXRhP1xuICAgICAgICBhcmdzLmRhdGEgPSB7fVxuXG4gICAgICAjIHNldCB0aGUgbWF4IG9yZGVyIElEIGZyb20gdGhlIGxhc3QgaXRlbSBpbiB0aGUgY29sbGVjdGlvblxuICAgICAgaWYgQGxlbmd0aCA+IDBcbiAgICAgICAgYXJncy5kYXRhLm1heF9vcmRlcl9pZCA9IEBsYXN0KCkuZ2V0KCdvcmRlcl9pZCcpXG5cbiAgICAgIEBmZXRjaCBhcmdzXG5cblxuICAgIHByZXZQYWdlOiAoYXJncykgPT5cblxuICAgICAgaWYgbm90IGFyZ3M/XG4gICAgICAgIGFyZ3MgPSB7fVxuXG4gICAgICBhcmdzID0gXy5kZWZhdWx0cyBhcmdzLFxuICAgICAgICBpbW1lZGlhdGU6IHRydWVcblxuICAgICAgaWYgbm90IGFyZ3MuZGF0YT9cbiAgICAgICAgYXJncy5kYXRhID0ge31cblxuICAgICAgIyBzZXQgdGhlIG1heCBvcmRlciBJRCBmcm9tIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb25cbiAgICAgIGlmIEBsZW5ndGggPiAwXG4gICAgICAgIGFyZ3MuZGF0YS5taW5fb3JkZXJfaWQgPSBAZmlyc3QoKS5nZXQoJ29yZGVyX2lkJylcblxuICAgICAgQGZldGNoIGFyZ3NcblxuXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbkFwcC5tb2R1bGUgJ1NTUG9zdHMnLCAoU1NQb3N0cywgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICBjbGFzcyBTU1Bvc3RzLkNvbnRyb2xsZXJzLkF1dG9SZWxvYWRDb250cm9sbGVyIGV4dGVuZHMgQmFja2JvbmUuTWFyaW9uZXR0ZS5Db250cm9sbGVyXG5cbiAgICAjIHNldCBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbiAgICBhdXRvUmVsb2FkSW50ZXJ2YWw6IDE1ICogNjAgKiAxMDAwICMgMTVtaW5cblxuICAgIGluaXRpYWxpemU6ID0+XG5cbiAgICAgIFNTUG9zdHMub24gJ3N0YXJ0JywgQG9uU3RhcnRcblxuXG4gICAgb25TdGFydDogPT5cblxuICAgICAgIyBpbml0aWFsaXplIGF1dG9yZWxvYWQgaWYgdGhpcyBpcyB0aGUgZnVsbCBzY3JlZW4gZXZlbnQgcGFnZVxuICAgICAgaWYgJCgnYm9keScpLmhhc0NsYXNzICdwYWdlLXRlbXBsYXRlLXRlbXBsYXRlLXNvY2lhbHN0cmVhbS1mdWxsc2NyZWVuLXBocCdcblxuICAgICAgICAjIGluaXRpYWxpemUgYXV0b3JlbG9hZFxuICAgICAgICBAaW5pdEF1dG9yZWxvYWQoKVxuXG4gICAgICAgIHBvc3RzQ29tcG9zaXRlVmlldyA9IFNTUG9zdHMucmVxcmVzLnJlcXVlc3QgJ3Bvc3RzQ29tcG9zaXRlVmlldydcblxuICAgICAgICBtb2RlbHMgPSBbXVxuXG4gICAgICAgIHBvc3RzQ29tcG9zaXRlVmlldy5jb2xsZWN0aW9uLmVhY2ggKG1vZGVsKSAtPlxuICAgICAgICAgIG1vZGVscy5wdXNoIG1vZGVsXG5cbiAgICAgICAgQHNob3dJblJvd3MgcG9zdHNDb21wb3NpdGVWaWV3LCBtb2RlbHMsXG4gICAgICAgICAgaW50ZXJ2YWw6IDE1MDBcblxuXG5cbiAgICBpbml0QXV0b3JlbG9hZDogPT5cblxuICAgICAgYXV0b3JlbG9hZE1ldGhvZCA9ICcnXG5cbiAgICAgICMgY2hlY2sgaWYgd2Vic29ja2V0IGlzIGF2YWlsYWJsZVxuICAgICAgIyAuLi5cblxuICAgICAgaWYgYXV0b3JlbG9hZE1ldGhvZCBpcyAnd2Vic29ja2V0J1xuICAgICAgICBAaW5pdEF1dG9yZWxvYWRTb2NrZXQoKVxuICAgICAgZWxzZVxuICAgICAgICBAaW5pdEF1dG9yZWxvYWRQb2xsKClcblxuXG5cbiAgICBpbml0QXV0b3JlbG9hZFNvY2tldDogPT5cblxuXG4gICAgaW5pdEF1dG9yZWxvYWRQb2xsOiA9PlxuXG4gICAgICBzZXRJbnRlcnZhbCBAYXV0b3JlbG9hZFBvbGwsIEBhdXRvUmVsb2FkSW50ZXJ2YWxcblxuXG4gICAgYXV0b3JlbG9hZFBvbGw6ID0+XG5cbiAgICAgICMgZ2V0IGNvbXBvc2l0ZVZpZXdcbiAgICAgIGNvbXBvc2l0ZVZpZXcgPSBTU1Bvc3RzLnJlcXJlcy5yZXF1ZXN0ICdwb3N0c0NvbXBvc2l0ZVZpZXcnXG5cbiAgICAgIGlmIGNvbXBvc2l0ZVZpZXcubG9hZGluZz8gYW5kIGNvbXBvc2l0ZVZpZXcubG9hZGluZ1xuICAgICAgICByZXR1cm5cblxuICAgICAgY29tcG9zaXRlVmlldy5sb2FkaW5nID0gdHJ1ZVxuXG4gICAgICBmaXJzdE9yZGVySUQgPSBwYXJzZUludCBjb21wb3NpdGVWaWV3LmNoaWxkcmVuLmZpbmRCeUluZGV4KDApLm1vZGVsLmdldCgnb3JkZXJfaWQnKSwgMTBcbiAgICAgIGNvbXBvc2l0ZVZpZXcuY29sbGVjdGlvbi5wcmV2UGFnZVxuICAgICAgICByZW1vdmU6IGZhbHNlXG5cbiAgICAgICAgZGF0YTpcbiAgICAgICAgICBwZXJQYWdlOiAtMVxuXG4gICAgICAgIHN1Y2Nlc3M6IChjb2xsZWN0aW9uLCByZXMpID0+XG5cbiAgICAgICAgICBpZiBjb2xsZWN0aW9uLmxlbmd0aCBpcyAwXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgIGNvbXBvc2l0ZVZpZXcucmVuZGVyKClcblxuICAgICAgICAgIG1vZGVscyA9IFtdXG5cbiAgICAgICAgICBjb2xsZWN0aW9uLmVhY2ggKG1vZGVsKSAtPlxuICAgICAgICAgICAgaWYgcGFyc2VJbnQoIG1vZGVsLmdldCgnb3JkZXJfaWQnKSwgMTAgKSA+IGZpcnN0T3JkZXJJRFxuICAgICAgICAgICAgICBtb2RlbHMucHVzaCBtb2RlbFxuXG4gICAgICAgICAgQHNob3dJblJvd3MgY29tcG9zaXRlVmlldywgbW9kZWxzXG5cblxuICAgIHNob3dJblJvd3M6IChjb21wb3NpdGVWaWV3LCBtb2RlbHMsIGFyZ3MpID0+XG5cbiAgICAgIGlmIG5vdCBhcmdzP1xuICAgICAgICBhcmdzID0ge31cbiAgICAgIGFyZ3MgPSBfLmRlZmF1bHRzIGFyZ3MsIHt9XG5cbiAgICAgIG5ld1ZpZXdzID0gW11cblxuICAgICAgXy5lYWNoIG1vZGVscywgKG1vZGVsKSAtPlxuICAgICAgICAjIGZpbmQgY2hpbGQgdmlldyBmb3IgdGhpcyBtb2RlbFxuICAgICAgICBjaGlsZFZpZXcgPSBjb21wb3NpdGVWaWV3LmNoaWxkcmVuLmZpbmRCeU1vZGVsIG1vZGVsXG5cbiAgICAgICAgY2hpbGRWaWV3LiRlbC5oaWRlKClcbiAgICAgICAgbmV3Vmlld3MucHVzaCBjaGlsZFZpZXdcblxuXG4gICAgICAjIGZpbmQgaG93IG1hbnkgY29sdW1ucyB3ZSBoYXZlXG4gICAgICBsYXlvdXQgPSAkKCcuc3Mtd3JhcHBlcicpLmF0dHIoJ2RhdGEtbGF5b3V0JylcblxuICAgICAgY29scyA9IDFcbiAgICAgIHN3aXRjaCBsYXlvdXRcbiAgICAgICAgd2hlbiAnc21hbGwnXG4gICAgICAgICAgY29scyA9IDJcbiAgICAgICAgd2hlbiAnbWVkaXVtJ1xuICAgICAgICAgIGNvbHMgPSAzXG4gICAgICAgIHdoZW4gJ2xhcmdlJ1xuICAgICAgICAgIGNvbHMgPSA0XG5cbiAgICAgICMgZGl2aWRlIG5ldyBwb3N0cyBpbiBncm91cHMgb3IgYGNvbHNgIHBvc3RzIGVhY2hcbiAgICAgIG5ld1ZpZXdzR3JvdXBzID0gW11cbiAgICAgIF8uZWFjaCBuZXdWaWV3cy5yZXZlcnNlKCksIChuZXdWaWV3LCBuZXdWaWV3SW5kZXgpIC0+XG4gICAgICAgIGdyb3VwSW5kZXggPSBNYXRoLmZsb29yKCBuZXdWaWV3SW5kZXggLyBjb2xzIClcblxuICAgICAgICBpZiBub3QgbmV3Vmlld3NHcm91cHNbIGdyb3VwSW5kZXggXT9cbiAgICAgICAgICBuZXdWaWV3c0dyb3Vwcy5wdXNoIFtdXG5cbiAgICAgICAgbmV3Vmlld3NHcm91cHNbIGdyb3VwSW5kZXggXS5wdXNoIG5ld1ZpZXdcblxuXG4gICAgICBpZiBhcmdzLmludGVydmFsP1xuICAgICAgICBzaG93SW50ZXJ2YWwgPSBhcmdzLmludGVydmFsXG4gICAgICBlbHNlXG4gICAgICAgIHNob3dJbnRlcnZhbCA9IE1hdGgucm91bmQoIEBhdXRvUmVsb2FkSW50ZXJ2YWwgLyAoIG5ld1ZpZXdzR3JvdXBzLmxlbmd0aCArIDEgKSApXG5cbiAgICAgIF8uZWFjaCBuZXdWaWV3c0dyb3VwcywgKG5ld1ZpZXdHcm91cCwgbmV3Vmlld0dyb3VwSW5kZXgpIC0+XG5cbiAgICAgICAgIyBzaG93IGFmdGVyIHNvbWUgdGltZVxuICAgICAgICBzZXRUaW1lb3V0IC0+XG5cbiAgICAgICAgICBpZiBuZXdWaWV3R3JvdXAubGVuZ3RoIGlzIGNvbHNcbiAgICAgICAgICAgIF8uZWFjaCBuZXdWaWV3R3JvdXAsIChuZXdWaWV3KSAtPlxuICAgICAgICAgICAgICBuZXdWaWV3LiRlbC5zbGlkZURvd24gNTAwXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgXy5lYWNoIG5ld1ZpZXdHcm91cCwgKG5ld1ZpZXcpIC0+XG4gICAgICAgICAgICAgIG5ld1ZpZXcuJGVsLmZhZGVJbiA4MDBcblxuICAgICAgICAsIG5ld1ZpZXdHcm91cEluZGV4ICogc2hvd0ludGVydmFsXG5cblxuICAgICAgIyBjbGVhciB0aGUgbG9hZGluZyBmbGFnXG4gICAgICBjb21wb3NpdGVWaWV3LmxvYWRpbmcgPSBmYWxzZVxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU1Bvc3RzJywgKFNTUG9zdHMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NQb3N0cy5Db250cm9sbGVycy5Qb3N0c0NvbnRyb2xsZXIgZXh0ZW5kcyBCYWNrYm9uZS5NYXJpb25ldHRlLkNvbnRyb2xsZXJcblxuXG4gICAgaW5pdGlhbGl6ZTogPT5cblxuICAgICAgU1NQb3N0cy5vbiAnc3RhcnQnLCBAb25TdGFydFxuXG5cbiAgICBvblN0YXJ0OiA9PlxuXG4gICAgICAjIGNoZWNrIGlmIHRoZSBoZWFkZXIgcmVnaW9uIGlzIGluIHRoZSBkb21cbiAgICAgIGlmICQoJy5zcy1wb3N0cy1yZWdpb24nKS5sZW5ndGggPiAwXG5cbiAgICAgICAgQXBwLmFkZFJlZ2lvbnNcbiAgICAgICAgICBwb3N0czogJy5zcy1wb3N0cy1yZWdpb24nXG5cblxuICAgICAgIyMjXG4gICAgICBSZW5kZXIgcG9zdHMgZm9yIHRoZSBmaXJzdCB0aW1lLCBpZiBhbnkgcG9zdHMgYXJlIGZvdW5kIGluIHRoZSBET00uXG4gICAgICAjIyNcbiAgICAgIGlmICQoJy5zcy13cmFwcGVyJykubGVuZ3RoID4gMFxuICAgICAgICBAZ2V0UG9zdHNDb21wb3NpdGVWaWV3KCkucmVuZGVyRnJvbURPTSAkKCcuc3Mtd3JhcHBlcicpXG5cbiAgICAgICAgaWYgQXBwLnBvc3RzP1xuICAgICAgICAgIEFwcC5wb3N0cy5jdXJyZW50VmlldyA9IEBnZXRQb3N0c0NvbXBvc2l0ZVZpZXcoKVxuXG5cblxuICAgIGdldFBvc3RzQ29sbGVjdGlvbjogPT5cblxuICAgICAgaWYgbm90IEBwb3N0c0NvbGxlY3Rpb24/XG5cbiAgICAgICAgQHBvc3RzQ29sbGVjdGlvbiA9IG5ldyBTU1Bvc3RzLkNvbGxlY3Rpb25zLlBvc3RzQ29sbGVjdGlvbigpXG5cbiAgICAgICAgIyBpZiB0aGUgcGhwIGFwaSBjYWxsIHdhcyBtYWRlIHdpdGggYSByZXF1ZXN0SUQsIGZldGNoIHRoYXRcbiAgICAgICAgaWYgJCgnLmJ3YXBpLWNhbGwtZGF0YVtkYXRhLWlkPVwic29jaWFsc3RyZWFtc190b3BcIl0nKS5sZW5ndGggPiAwXG4gICAgICAgICAgQHBvc3RzQ29sbGVjdGlvbi5kYXRhLnJlcXVlc3RJRCA9ICdzb2NpYWxzdHJlYW1zX3RvcCdcblxuICAgICAgICAjIElmIHdlIGFyZSBpbiB0aGUgYWRtaW4gYXJlYSwgd2UgbmVlZCB0byBzZXQgdGhlXG4gICAgICAgICMgb2YgdGhlIGNvbGxlY3Rpb24gdG8gZmV0Y2ggYm90aCBkcmFmdCBhbmQgcHVibGlzaGVkIHBvc3RzXG4gICAgICAgIGlmICQoJy5zcy1hZG1pbicpLmxlbmd0aCA+IDBcbiAgICAgICAgICBAcG9zdHNDb2xsZWN0aW9uLmRhdGEuc3RhdHVzID0gWydkcmFmdCcsICdwdWJsaXNoJ11cblxuICAgICAgICAjIGZldGNoIGluaXRpYWwgcG9zdHMgZnJvbSBET01cbiAgICAgICAgQHBvc3RzQ29sbGVjdGlvbi5mZXRjaCgpXG5cbiAgICAgIEBwb3N0c0NvbGxlY3Rpb25cblxuXG4gICAgZ2V0QXBpUG9zdHNDb2xsZWN0aW9uOiA9PlxuXG4gICAgICBpZiBub3QgQGFwaVBvc3RzQ29sbGVjdGlvbj9cblxuICAgICAgICBAYXBpUG9zdHNDb2xsZWN0aW9uID0gbmV3IFNTUG9zdHMuQ29sbGVjdGlvbnMuQXBpUG9zdHNDb2xsZWN0aW9uKClcblxuICAgICAgQGFwaVBvc3RzQ29sbGVjdGlvblxuXG5cblxuICAgIGdldEFsbFBvc3RzQ29sbGVjdGlvbjogPT5cblxuICAgICAgaWYgbm90IEBhbGxQb3N0c0NvbGxlY3Rpb24/XG5cbiAgICAgICAgQGFsbFBvc3RzQ29sbGVjdGlvbiA9IG5ldyBTU1Bvc3RzLkNvbGxlY3Rpb25zLlBvc3RzQ29sbGVjdGlvbigpXG5cbiAgICAgICAgQGFsbFBvc3RzQ29sbGVjdGlvbi5kYXRhID1cbiAgICAgICAgICByZXF1ZXN0SUQgOiAnc29jaWFsc3RyZWFtc19hbGwnXG4gICAgICAgICAgcGVyUGFnZTogLTFcbiAgICAgICAgICBzdGF0dXM6IFtcbiAgICAgICAgICAgICdwdWJsaXNoJ1xuICAgICAgICAgICAgJ2RyYWZ0J1xuICAgICAgICAgICAgJ3RyYXNoJ1xuICAgICAgICAgIF1cbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICdpZCdcbiAgICAgICAgICAgICdzdGF0dXMnXG4gICAgICAgICAgICAndmVuZG9yX2lkJ1xuICAgICAgICAgICAgJ3NlcnZpY2VfbmFtZSdcbiAgICAgICAgICBdXG5cbiAgICAgICAgQGFsbFBvc3RzQ29sbGVjdGlvbi5mZXRjaCgpXG5cbiAgICAgICAgIyBjb25zb2xlLmxvZyBAYWxsUG9zdHNDb2xsZWN0aW9uXG5cbiAgICAgIEBhbGxQb3N0c0NvbGxlY3Rpb25cblxuXG4gICAgZ2V0UG9zdHNDb21wb3NpdGVWaWV3OiA9PlxuXG4gICAgICBpZiBub3QgQHBvc3RzQ29tcG9zaXRlVmlldz8gb3IgQHBvc3RzQ29tcG9zaXRlVmlldy5pc0Nsb3NlZFxuXG4gICAgICAgIEBwb3N0c0NvbXBvc2l0ZVZpZXcgPSBuZXcgU1NQb3N0cy5WaWV3cy5Qb3N0c0NvbXBvc2l0ZVZpZXdcbiAgICAgICAgICBjb2xsZWN0aW9uOiBAZ2V0UG9zdHNDb2xsZWN0aW9uKClcbiAgICAgICAgICBtb2RlbDogKG5ldyBTU1Bvc3RzLk1vZGVscy5Qb3N0c0xheW91dE1vZGVsKVxuXG4gICAgICBAcG9zdHNDb21wb3NpdGVWaWV3XG5cblxuXG4gICAgZ2V0QXBpUG9zdHNDb21wb3NpdGVWaWV3OiA9PlxuXG4gICAgICBpZiBub3QgQGFwaVBvc3RzQ29tcG9zaXRlVmlldz8gb3IgQGFwaVBvc3RzQ29tcG9zaXRlVmlldy5pc0Nsb3NlZFxuXG4gICAgICAgIEBhcGlQb3N0c0NvbXBvc2l0ZVZpZXcgPSBuZXcgU1NQb3N0cy5WaWV3cy5Qb3N0c0NvbXBvc2l0ZVZpZXdcbiAgICAgICAgICBjb2xsZWN0aW9uOiBAZ2V0QXBpUG9zdHNDb2xsZWN0aW9uKClcbiAgICAgICAgICBtb2RlbDogKG5ldyBTU1Bvc3RzLk1vZGVscy5Qb3N0c0xheW91dE1vZGVsKVxuXG4gICAgICBAYXBpUG9zdHNDb21wb3NpdGVWaWV3XG5cblxuXG4gICAgZG9pbmdCYXRjaFNhdmU6ICh2YWx1ZSkgPT5cblxuICAgICAgaWYgbm90IEBkb2luZ0JhdGNoU2F2ZUZsYWc/XG4gICAgICAgIEBkb2luZ0JhdGNoU2F2ZUZsYWcgPSBmYWxzZVxuXG4gICAgICBpZiB2YWx1ZT9cbiAgICAgICAgQGRvaW5nQmF0Y2hTYXZlRmxhZyA9IHZhbHVlXG5cbiAgICAgIEBkb2luZ0JhdGNoU2F2ZUZsYWdcblxuXG4gICAgZmV0Y2hTZXJ2ZXJQb3N0czogKGRhdGEsIG9wdGlvbnMpID0+XG5cbiAgICAgIHBvc3RzQ29sbGVjdGlvbiA9IEBnZXRQb3N0c0NvbGxlY3Rpb24oKVxuXG4gICAgICBpZiBub3QgcG9zdHNDb2xsZWN0aW9uLmRhdGE/XG4gICAgICAgIHBvc3RzQ29sbGVjdGlvbi5kYXRhID0ge31cblxuICAgICAgaWYgZGF0YT9cbiAgICAgICAgcG9zdHNDb2xsZWN0aW9uLmRhdGEgPSBfLmV4dGVuZCB7fSwgcG9zdHNDb2xsZWN0aW9uLmRhdGEsIGRhdGFcblxuICAgICAgIyBzZXQgaGFzTmV4dCBmbGFnIHRvIHRydWUgc28gdGhhdCBpbmZpbml0ZSBzY3JvbGwgY2FuIHN0YXJ0IGFnYWluXG4gICAgICBwb3N0c0NvbGxlY3Rpb24uaGFzTmV4dCA9IHRydWVcblxuICAgICAgIyBmaXJzdCByZXNldCBjb2xsZWN0aW9uXG4gICAgICBwb3N0c0NvbGxlY3Rpb24ucmVzZXQoKVxuXG4gICAgICAjIGZldGNoIG5ldyBwb3N0c1xuICAgICAgcG9zdHNDb2xsZWN0aW9uLmZldGNoXG4gICAgICAgIHN1Y2Nlc3M6ID0+XG5cbiAgICAgICAgICAjIGNoZWNrIGlmIHRoZSByZWdpb24gY29udGFpbnMgcG9zdHMgZnJvbSB0aGUgQVBJXG4gICAgICAgICAgcG9zdHNDb21wb3NpdGVWaWV3ID0gQGdldFBvc3RzQ29tcG9zaXRlVmlldygpXG4gICAgICAgICAgaWYgbm90IHBvc3RzQ29tcG9zaXRlVmlldy5pc1JlbmRlcmVkXG4gICAgICAgICAgICBBcHAucG9zdHMuc2hvdyBwb3N0c0NvbXBvc2l0ZVZpZXdcblxuICAgICAgICAgIGlmIG9wdGlvbnM/IGFuZCBvcHRpb25zLnN1Y2Nlc3M/IGFuZCB0eXBlb2Ygb3B0aW9ucy5zdWNjZXNzIGlzICdmdW5jdGlvbidcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcygpXG5cblxuXG4gICAgZmV0Y2hBcGlQb3N0czogKGRhdGEsIG9wdGlvbnMpID0+XG5cbiAgICAgIGFwaVBvc3RzQ29sbGVjdGlvbiA9IEBnZXRBcGlQb3N0c0NvbGxlY3Rpb24oKVxuXG4gICAgICBpZiBub3QgYXBpUG9zdHNDb2xsZWN0aW9uLmRhdGE/XG4gICAgICAgIGFwaVBvc3RzQ29sbGVjdGlvbi5kYXRhID0ge31cblxuICAgICAgaWYgZGF0YT9cbiAgICAgICAgYXBpUG9zdHNDb2xsZWN0aW9uLmRhdGEgPSBfLmV4dGVuZCB7fSwgYXBpUG9zdHNDb2xsZWN0aW9uLmRhdGEsIGRhdGFcblxuICAgICAgYXBpUG9zdHNDb2xsZWN0aW9uLmhhc05leHQgPSB0cnVlXG5cbiAgICAgICMgZm9yIG5ldyBhcGkgY29sbGVjdGlvbnMgd2Ugc2V0IHRoZSBzZWFyY2hfbWV0YWRhdGEgdG8gbnVsbFxuICAgICAgaWYgYXBpUG9zdHNDb2xsZWN0aW9uLmRhdGEuc2VhcmNoX21ldGFkYXRhP1xuICAgICAgICBkZWxldGUgYXBpUG9zdHNDb2xsZWN0aW9uLmRhdGEuc2VhcmNoX21ldGFkYXRhXG5cbiAgICAgICMgZmlyc3QgcmVzZXQgY29sbGVjdGlvblxuICAgICAgYXBpUG9zdHNDb2xsZWN0aW9uLnJlc2V0KClcblxuICAgICAgIyBmZXRjaCBuZXcgcG9zdHNcbiAgICAgIGFwaVBvc3RzQ29sbGVjdGlvbi5mZXRjaFxuXG4gICAgICAgIHN1Y2Nlc3M6ID0+XG5cbiAgICAgICAgICAjIGNoZWNrIGlmIHRoZSByZWdpb24gY29udGFpbnMgcG9zdHMgZnJvbSB0aGUgQVBJXG4gICAgICAgICAgYXBpUG9zdHNDb21wb3NpdGVWaWV3ID0gQGdldEFwaVBvc3RzQ29tcG9zaXRlVmlldygpXG4gICAgICAgICAgaWYgbm90IGFwaVBvc3RzQ29tcG9zaXRlVmlldy5pc1JlbmRlcmVkXG4gICAgICAgICAgICBBcHAucG9zdHMuc2hvdyBhcGlQb3N0c0NvbXBvc2l0ZVZpZXdcblxuICAgICAgICAgIGlmIG9wdGlvbnM/IGFuZCBvcHRpb25zLnN1Y2Nlc3M/IGFuZCB0eXBlb2Ygb3B0aW9ucy5zdWNjZXNzIGlzICdmdW5jdGlvbidcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcygpXG5cblxuICAgIHB1Ymxpc2hBcGlQb3N0czogPT5cblxuICAgICAgIyBsb29wIHRocm91Z2ggYWxsIHBvc3RzIGluIHRoZSBBUEkgY29sbGVjdGlvblxuICAgICAgYXBpUG9zdHNDb2xsZWN0aW9uID0gQGdldEFwaVBvc3RzQ29sbGVjdGlvbigpXG5cbiAgICAgIGlmIGFwaVBvc3RzQ29sbGVjdGlvbi5sZW5ndGggPiAwXG4gICAgICAgIGFwaVBvc3RzQ29sbGVjdGlvbi5lYWNoIChhcGlQb3N0TW9kZWwpIC0+XG4gICAgICAgICAgYXBpUG9zdE1vZGVsLnNhdmUge30sXG4gICAgICAgICAgICBiYXRjaDogdHJ1ZVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcbm1vbWVudCA9IHJlcXVpcmUgJ21vbWVudCdcblxuQXBwLm1vZHVsZSAnU1NQb3N0cycsIChTU1Bvc3RzLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIGNsYXNzIFNTUG9zdHMuTW9kZWxzLlBvc3RNb2RlbCBleHRlbmRzIEFwcC5Nb2RlbHMuQXBpTW9kZWxcblxuICAgIGFwaVVybDogJzEvc2l0ZS9zb2NpYWxzdHJlYW1zJ1xuXG4gICAgaW5pdGlhbGl6ZTogPT5cblxuICAgICAgIyBjaGVjayBpZiB0aGUgb3B0aW9ucyBtb2R1bGUgd2FzIGxvYWRlZFxuICAgICAgaWYgQXBwLlNTT3B0aW9ucz8gYW5kIEFwcC5TU09wdGlvbnMudmVudD9cblxuICAgICAgICAjIGxpc3RlbiBmb3IgbW9kZXJhdGlvbiBjaGFuZ2VzXG4gICAgICAgIEBsaXN0ZW5UbyBBcHAuU1NPcHRpb25zLnZlbnQsICdjaGFuZ2U6bW9kZXJhdGlvbicsIEBvbk1vZGVyYXRpb25DaGFuZ2VcblxuXG4gICAgICBpZiBub3QgQGlkPyBvciBAaWQgaXMgJydcbiAgICAgICAgc2F2ZWRQb3N0ID0gQGdldFNhdmVkUG9zdCgpXG4gICAgICAgIGlmIHNhdmVkUG9zdD9cbiAgICAgICAgICBpZCA9IHNhdmVkUG9zdC5nZXQoJ2lkJylcblxuXG4gICAgb25Nb2RlcmF0aW9uQ2hhbmdlOiAobW9kZWwsIG1vZGVyYXRpb24pID0+XG5cbiAgICAgICMgSWYgcG9zdCBkb2VzIG5vdCBoYXZlIGEgaWQgc2V0LCBkbyBub3QgdG9nZ2xlIG9uIG1vZGVyYXRpb24gY2hhbmdlc1xuICAgICAgaWYgbm90IEBpZD8gb3IgQGlkIGlzICcnXG5cbiAgICAgICAgIyBieSBkZWZhdWx0IHRoZSBzdGF0dXMgaXMgJ3B1YmxpYydcbiAgICAgICAgc3RhdHVzID0gJ3B1Ymxpc2gnXG5cbiAgICAgICAgIyBpZiBtb2RlcmF0aW9uIGlzIHR1cm5lZCBPTiwgdGhlbiB3ZSBzaG91bGQgc3dpdGNoIGFsbCBwb3N0cyB0byBkcmFmdFxuICAgICAgICBpZiBtb2RlcmF0aW9uXG4gICAgICAgICAgc3RhdHVzID0gJ2RyYWZ0J1xuXG4gICAgICAgIEBzZXQgJ3N0YXR1cycsIHN0YXR1c1xuXG5cbiAgICBwYXJzZTogKGRhdGEpIC0+XG5cbiAgICAgIGNvbXB1dGVkRmllbGRzID0gW1xuICAgICAgICAnZm9ybWF0dGVkX3RpbWUnXG4gICAgICAgICdhdmF0YXInXG4gICAgICAgICdwZXJtYWxpbmsnXG4gICAgICAgICd1c2VyX2xpbmsnXG4gICAgICAgICdmb3JtYXR0ZWRfY2FwdGlvbidcbiAgICAgICAgJ2ltYWdlJ1xuICAgICAgICAndmlkZW8nXG4gICAgICAgICdoYXNfaW1hZ2UnXG4gICAgICAgICdoYXNfdmlkZW8nXG4gICAgICAgICdoYXNfbWVkaWEnXG4gICAgICAgICdhY3Rpb25zJ1xuICAgICAgICAnc3RhdHVzX2ljb24nXG4gICAgICBdXG5cbiAgICAgICMgcmVtb3ZlIGNvbXB1dGVkIGRhdGFcbiAgICAgIF8uZWFjaCBjb21wdXRlZEZpZWxkcywgKGtleSkgLT5cbiAgICAgICAgaWYgZGF0YVtrZXldP1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2tleV1cblxuICAgICAgaWYgQGNvbGxlY3Rpb24/XG5cbiAgICAgICAgZHVwZXMgPSBAY29sbGVjdGlvbi53aGVyZVxuICAgICAgICAgIHZlbmRvcl9pZDogZGF0YS52ZW5kb3JfaWRcbiAgICAgICAgICBzZXJ2aWNlX25hbWU6IGRhdGEuc2VydmljZV9uYW1lXG5cbiAgICAgICAgaWYgZHVwZXMubGVuZ3RoID4gMVxuICAgICAgICAgIGRhdGEuZHVwbGljYXRlID0gdHJ1ZVxuXG4gICAgICBkYXRhXG5cblxuICAgIGRlZmF1bHRzOlxuXG4gICAgICBkdXBsaWNhdGU6IGZhbHNlXG5cbiAgICAgIHN0YXR1czogLT5cblxuICAgICAgICBvdXRwdXQgPSAnZHJhZnQnXG5cbiAgICAgICAgIyBjaGVjayBtb2RlcmF0aW9uXG4gICAgICAgIGlmIEFwcC5TU09wdGlvbnM/XG4gICAgICAgICAgbW9kZXJhdGlvbiA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICdtb2RlcmF0aW9uJ1xuICAgICAgICAgIGlmIG1vZGVyYXRpb24/IGFuZCBtb2RlcmF0aW9uIGlzIGZhbHNlXG4gICAgICAgICAgICBvdXRwdXQgPSAncHVibGlzaCdcblxuXG4gICAgICAgIHNhdmVkUG9zdCA9IEBnZXRTYXZlZFBvc3QoKVxuICAgICAgICBpZiBzYXZlZFBvc3Q/XG4gICAgICAgICAgb3V0cHV0ID0gc2F2ZWRQb3N0LmdldCgnc3RhdHVzJylcblxuICAgICAgICBvdXRwdXRcblxuXG4gICAgICBmb3JtYXR0ZWRfdGltZSA6IC0+XG4gICAgICAgIEFwcC5IZWxwZXJzLmRhdGUucGFyc2VUaW1lc3RhbXAgQGdldCgndGltZXN0YW1wJylcblxuICAgICAgc2NyZWVuX25hbWU6IC0+XG5cbiAgICAgICAgb3V0cHV0ID0gJydcblxuICAgICAgICBzd2l0Y2ggQGdldCgnc2VydmljZV9uYW1lJylcbiAgICAgICAgICB3aGVuICd0d2l0dGVyJ1xuICAgICAgICAgICAgb3V0cHV0ID0gQGdldCgndXNlcicpLnNjcmVlbl9uYW1lXG5cbiAgICAgICAgICB3aGVuICdpbnN0YWdyYW0nXG4gICAgICAgICAgICBvdXRwdXQgPSBAZ2V0KCd1c2VyJykudXNlcm5hbWVcblxuICAgICAgICBvdXRwdXRcblxuXG4gICAgICBhdmF0YXI6IC0+XG5cbiAgICAgICAgb3V0cHV0ID0gJydcblxuICAgICAgICBzd2l0Y2ggQGdldCgnc2VydmljZV9uYW1lJylcbiAgICAgICAgICB3aGVuICd0d2l0dGVyJ1xuICAgICAgICAgICAgb3V0cHV0ID0gQGdldCgndXNlcicpLnByb2ZpbGVfaW1hZ2VfdXJsX2h0dHBzXG5cbiAgICAgICAgICB3aGVuICdpbnN0YWdyYW0nXG4gICAgICAgICAgICBvdXRwdXQgPSBAZ2V0KCd1c2VyJykucHJvZmlsZV9waWN0dXJlXG5cbiAgICAgICAgb3V0cHV0XG5cblxuICAgICAgcGVybWFsaW5rOiAtPlxuXG4gICAgICAgIG91dHB1dCA9ICcnXG5cbiAgICAgICAgc3dpdGNoIEBnZXQoJ3NlcnZpY2VfbmFtZScpXG4gICAgICAgICAgd2hlbiAndHdpdHRlcidcbiAgICAgICAgICAgIG91dHB1dCA9IFwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vXCIgKyBAZ2V0KCdzY3JlZW5fbmFtZScpICsgXCIvc3RhdHVzL1wiICsgQGdldCgndmVuZG9yX2lkJylcblxuICAgICAgICAgIHdoZW4gJ2luc3RhZ3JhbSdcbiAgICAgICAgICAgIG91dHB1dCA9IEBnZXQoJ2xpbmsnKVxuXG4gICAgICAgIG91dHB1dFxuXG5cbiAgICAgIHVzZXJfbGluazogLT5cblxuICAgICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAgIHN3aXRjaCBAZ2V0KCdzZXJ2aWNlX25hbWUnKVxuICAgICAgICAgIHdoZW4gJ3R3aXR0ZXInXG4gICAgICAgICAgICBvdXRwdXQgPSBcImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL1wiICsgQGdldCgnc2NyZWVuX25hbWUnKVxuXG4gICAgICAgICAgd2hlbiAnaW5zdGFncmFtJ1xuICAgICAgICAgICAgb3V0cHV0ID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiICsgQGdldCgnc2NyZWVuX25hbWUnKVxuXG4gICAgICAgIG91dHB1dFxuXG5cbiAgICAgIGZvcm1hdHRlZF9jYXB0aW9uOiAtPlxuXG4gICAgICAgIG91dHB1dCA9ICcnXG5cbiAgICAgICAgc3dpdGNoIEBnZXQoJ3NlcnZpY2VfbmFtZScpXG4gICAgICAgICAgd2hlbiAndHdpdHRlcidcbiAgICAgICAgICAgIG91dHB1dCA9IEBnZXQoJ3RleHQnKVxuXG4gICAgICAgICAgd2hlbiAnaW5zdGFncmFtJ1xuICAgICAgICAgICAgY2FwdGlvbiA9IEBnZXQoJ2NhcHRpb24nKVxuICAgICAgICAgICAgaWYgY2FwdGlvbj8gYW5kIGNhcHRpb24udGV4dD9cbiAgICAgICAgICAgICAgb3V0cHV0ID0gY2FwdGlvbi50ZXh0XG5cbiAgICAgICAgb3V0cHV0ID0gQHBhcnNlVXJscyBvdXRwdXRcbiAgICAgICAgb3V0cHV0ID0gQHBhcnNlTWVudGlvbnMgb3V0cHV0XG4gICAgICAgIG91dHB1dCA9IEBwYXJzZUhhc2h0YWdzIG91dHB1dFxuICAgICAgICBvdXRwdXQgPSBAYWRkTGluZWJyZWFrcyBvdXRwdXRcblxuICAgICAgICBvdXRwdXRcblxuXG4gICAgICBpbWFnZTogLT5cblxuICAgICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAgIHN3aXRjaCBAZ2V0KCdzZXJ2aWNlX25hbWUnKVxuICAgICAgICAgIHdoZW4gJ3R3aXR0ZXInXG4gICAgICAgICAgICBlbnRpdGllcyA9IEBnZXQoJ2VudGl0aWVzJylcbiAgICAgICAgICAgIGlmIGVudGl0aWVzPyBhbmQgZW50aXRpZXMubWVkaWE/IGFuZCBlbnRpdGllcy5tZWRpYS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgIG91dHB1dCA9IGVudGl0aWVzLm1lZGlhWzBdLm1lZGlhX3VybF9odHRwc1xuXG4gICAgICAgICAgd2hlbiAnaW5zdGFncmFtJ1xuICAgICAgICAgICAgb3V0cHV0ID0gQGdldCgnaW1hZ2VzJykuc3RhbmRhcmRfcmVzb2x1dGlvbi51cmxcblxuICAgICAgICBvdXRwdXRcblxuXG4gICAgICB2aWRlbzogLT5cblxuICAgICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAgIHN3aXRjaCBAZ2V0KCdzZXJ2aWNlX25hbWUnKVxuICAgICAgICAgIHdoZW4gJ2luc3RhZ3JhbSdcbiAgICAgICAgICAgIHZpZGVvcyA9IEBnZXQoJ3ZpZGVvcycpXG4gICAgICAgICAgICBpZiB2aWRlb3M/IGFuZCB2aWRlb3Muc3RhbmRhcmRfcmVzb2x1dGlvbj8gYW5kIHZpZGVvcy5zdGFuZGFyZF9yZXNvbHV0aW9uLnVybD9cbiAgICAgICAgICAgICAgb3V0cHV0ID0gdmlkZW9zLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsXG5cbiAgICAgICAgb3V0cHV0XG5cblxuICAgICAgaGFzX2ltYWdlOiAtPlxuICAgICAgICAoQGdldCgnaW1hZ2UnKSBpc250ICcnKVxuXG4gICAgICBoYXNfdmlkZW86IC0+XG4gICAgICAgIChAZ2V0KCd2aWRlbycpIGlzbnQgJycpXG5cblxuICAgICAgaGFzX21lZGlhOiAtPlxuICAgICAgICAoQGdldCgnaGFzX2ltYWdlJykgb3IgQGdldCgnaGFzX3ZpZGVvJykpXG5cblxuICAgICAgYWN0aW9uczogLT5cblxuICAgICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAgICMgY2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBjYW4gbW9kZXJhdGVcbiAgICAgICAgdXNlcl9jYW5fbW9kZXJhdGUgPSBmYWxzZVxuICAgICAgICAjIGNoZWNrIGlmIHRoZSBvcHRpb25zIG1vZHVsZSB3YXMgbG9hZGVkXG4gICAgICAgIGlmIEFwcC5TU09wdGlvbnM/XG4gICAgICAgICAgdXNlcl9jYW5fbW9kZXJhdGUgPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAndXNlcl9jYW5fbW9kZXJhdGUnXG5cbiAgICAgICAgaWYgdXNlcl9jYW5fbW9kZXJhdGVcbiAgICAgICAgICBvdXRwdXQgKz0gJzxhIGNsYXNzPVwic3MtcG9zdC1hY3Rpb24gc3MtcHVibGlzaC1idG5cIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPjxpIGNsYXNzPVwic3MtaWNvbi1jaGVja1wiPjwvaT48c3BhbiBjbGFzcz1cInNzLWlubmVyXCI+UHVibGlzaDwvc3Bhbj48L2E+J1xuICAgICAgICAgIG91dHB1dCArPSAnPGEgY2xhc3M9XCJzcy1wb3N0LWFjdGlvbiBzcy10cmFzaC1idG5cIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPjxpIGNsYXNzPVwic3MtaWNvbi10cmFzaC1vXCI+PC9pPjxzcGFuIGNsYXNzPVwic3MtaW5uZXJcIj5UcmFzaDwvc3Bhbj48L2E+J1xuICAgICAgICBlbHNlXG4gICAgICAgICAgc3dpdGNoIEBnZXQoJ3NlcnZpY2VfbmFtZScpXG4gICAgICAgICAgICB3aGVuICd0d2l0dGVyJ1xuICAgICAgICAgICAgICB2ZW5kb3JfaWQgPSBAZ2V0KCd2ZW5kb3JfaWQnKVxuICAgICAgICAgICAgICBvdXRwdXQgKz0gJzxhIGNsYXNzPVwic3MtcG9zdC1hY3Rpb25cIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/aW5fcmVwbHlfdG89JyArIHZlbmRvcl9pZCArICcmdmlhPVNvY2lhbFN0cmVhbXNXUCZyZWxhdGVkPVNvY2lhbFN0cmVhbXNXUFwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwic3MtaWNvbi1yZXBseVwiPjwvaT48c3BhbiBjbGFzcz1cInNzLWlubmVyXCI+UmVwbHk8L3NwYW4+PC9hPidcbiAgICAgICAgICAgICAgb3V0cHV0ICs9ICc8YSBjbGFzcz1cInNzLXBvc3QtYWN0aW9uXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3JldHdlZXQ/dHdlZXRfaWQ9JyArIHZlbmRvcl9pZCArICcmcmVsYXRlZD1Tb2NpYWxTdHJlYW1zV1BcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cInNzLWljb24tcmV0d2VldFwiPjwvaT48c3BhbiBjbGFzcz1cInNzLWlubmVyXCI+UmV0d2VldDwvc3Bhbj48L2E+J1xuXG4gICAgICAgIG91dHB1dFxuXG5cbiAgICAgIHN0YXR1c19pY29uOiAtPlxuXG4gICAgICAgIG91dHB1dCA9ICcnXG5cbiAgICAgICAgIyBjaGVjayBpZiB0aGUgY3VycmVudCB1c2VyIGNhbiBtb2RlcmF0ZVxuICAgICAgICB1c2VyX2Nhbl9tb2RlcmF0ZSA9IGZhbHNlXG4gICAgICAgICMgY2hlY2sgaWYgdGhlIG9wdGlvbnMgbW9kdWxlIHdhcyBsb2FkZWRcbiAgICAgICAgaWYgQXBwLlNTT3B0aW9ucz9cbiAgICAgICAgICB1c2VyX2Nhbl9tb2RlcmF0ZSA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICd1c2VyX2Nhbl9tb2RlcmF0ZSdcblxuICAgICAgICBpZiB1c2VyX2Nhbl9tb2RlcmF0ZVxuICAgICAgICAgIHN3aXRjaCBAZ2V0KCdzdGF0dXMnKVxuICAgICAgICAgICAgd2hlbiAncHVibGlzaCdcbiAgICAgICAgICAgICAgb3V0cHV0ICs9ICc8aSBjbGFzcz1cInNzLWljb24tY2hlY2tcIj48L2k+J1xuICAgICAgICAgICAgd2hlbiAnZHJhZnQnXG4gICAgICAgICAgICAgIG91dHB1dCArPSAnPGkgY2xhc3M9XCJzcy1pY29uLWJ3IGJ3LWRyYWZ0LWljb25cIj48L2k+J1xuICAgICAgICAgICAgd2hlbiAndHJhc2gnXG4gICAgICAgICAgICAgIG91dHB1dCArPSAnPGkgY2xhc3M9XCJzcy1pY29uLXRyYXNoLW9cIj48L2k+J1xuXG4gICAgICAgIG91dHB1dFxuXG5cbiAgICAgIGRldl9tZXRhOiAtPlxuXG4gICAgICAgICMgY2hlY2sgaWYgdGhlIG9wdGlvbnMgbW9kdWxlIHdhcyBsb2FkZWRcbiAgICAgICAgaWYgbm90IEFwcC5TU09wdGlvbnM/XG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgIyBnZXQgdGhlIGRldl9tb2RlIG9wdGlvblxuICAgICAgICBkZXZfbW9kZSA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICdkZXZfbW9kZSdcbiAgICAgICAgaWYgbm90IGRldl9tb2RlPyBvciBub3QgZGV2X21vZGVcbiAgICAgICAgICByZXR1cm5cblxuICAgICAgICBvdXRwdXQgPSAnJ1xuICAgICAgICBvdXRwdXQgKz0gJzxwIGNsYXNzPVwic3MtcG9zdC1pZFwiPmlkOiAnICsgQGdldCgnaWQnKSArICc8L3A+J1xuICAgICAgICBvdXRwdXQgKz0gJzxwIGNsYXNzPVwic3MtcG9zdC1vcmRlcl9pZFwiPm9yZGVyX2lkOiAnICsgQGdldCgnb3JkZXJfaWQnKSArICc8L3A+J1xuICAgICAgICBvdXRwdXQgKz0gJzxwIGNsYXNzPVwic3MtcG9zdC12ZW5kb3JfaWRcIj52ZW5kb3JfaWQ6ICcgKyBAZ2V0KCd2ZW5kb3JfaWQnKSArICc8L3A+J1xuICAgICAgICBvdXRwdXQgKz0gJzxwIGNsYXNzPVwic3MtcG9zdC1zZXJ2aWNlX25hbWVcIj5zZXJ2aWNlX25hbWU6ICcgKyBAZ2V0KCdzZXJ2aWNlX25hbWUnKSArICc8L3A+J1xuICAgICAgICBvdXRwdXQgKz0gJzxwIGNsYXNzPVwic3MtcG9zdC10aW1lc3RhbXBcIj50aW1lc3RhbXA6ICcgKyBAZ2V0KCd0aW1lc3RhbXAnKSArICc8L3A+J1xuICAgICAgICBvdXRwdXQgKz0gJzxwIGNsYXNzPVwic3MtcG9zdC1kYXRlXCI+ZGF0ZTogJyArIG1vbWVudC51bml4KCBAZ2V0KCd0aW1lc3RhbXAnKSApLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpICsgJzwvcD4nXG5cbiAgICAgICAgb3V0cHV0XG5cblxuICAgICMgL2RlZmF1bHRzXG5cblxuXG4gICAgcGFyc2VVcmxzOiAodGV4dCkgLT5cblxuXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlIC9bQS1aYS16XSs6XFwvXFwvW0EtWmEtejAtOS1fXStcXC5bQS1aYS16MC05LV86JSZcXD9cXC8uPV0rL2csICh1cmkpIC0+XG4gICAgICAgICc8YSBocmVmPVwiJyArIHVyaSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICsgdXJpICsgJzwvYT4nXG5cbiAgICAgIHRleHRcblxuXG4gICAgcGFyc2VNZW50aW9uczogKHRleHQpIC0+XG5cbiAgICAgIHN3aXRjaCBAZ2V0KCdzZXJ2aWNlX25hbWUnKVxuICAgICAgICB3aGVuICd0d2l0dGVyJ1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UgL1tAXSsoW0EtWmEtejAtOS1fXSspL2csIChtYXRjaCwgaGFuZGxlKSAtPlxuICAgICAgICAgICAgJzxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tLycgKyBoYW5kbGUgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QCcgKyBoYW5kbGUgKyAnPC9hPidcblxuICAgICAgICB3aGVuICdpbnN0YWdyYW0nXG4gICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSAvW0BdKyhbQS1aYS16MC05LV9dKykvZywgKG1hdGNoLCBoYW5kbGUpIC0+XG4gICAgICAgICAgICAnPGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS8nICsgaGFuZGxlICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPkAnICsgaGFuZGxlICsgJzwvYT4nXG5cbiAgICAgIHRleHRcblxuXG4gICAgcGFyc2VIYXNodGFnczogKHRleHQpIC0+XG5cbiAgICAgIHN3aXRjaCBAZ2V0KCdzZXJ2aWNlX25hbWUnKVxuICAgICAgICB3aGVuICd0d2l0dGVyJ1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UgL1tcXHNdP1sjXSsoW0EtWmEtejAtOS1fXSspL2csIChtYXRjaCwgaGFzaHRhZykgLT5cbiAgICAgICAgICAgICcgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaGFzaHRhZy8nICsgaGFzaHRhZyArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4jJyArIGhhc2h0YWcgKyAnPC9hPidcblxuICAgICAgICB3aGVuICdpbnN0YWdyYW0nXG4gICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSAvW1xcc10/WyNdKyhbQS1aYS16MC05LV9dKykvZywgKG1hdGNoLCBoYXNodGFnKSAtPlxuICAgICAgICAgICAgIyAnPGEgaHJlZj1cImh0dHA6Ly9zZWFyY2hpbnN0YWdyYW0uY29tLycgKyBoYXNodGFnICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPiMnICsgaGFzaHRhZyArICc8L2E+J1xuICAgICAgICAgICAgJyAjJyArIGhhc2h0YWdcblxuICAgICAgdGV4dFxuXG5cbiAgICBhZGRMaW5lYnJlYWtzOiAodGV4dCkgLT5cblxuICAgICAgc3dpdGNoIEBnZXQoJ3NlcnZpY2VfbmFtZScpXG4gICAgICAgIHdoZW4gJ3R3aXR0ZXInXG4gICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSAvXFxyP1xcbi9nLCAnPGJyIC8+J1xuXG4gICAgICAgIHdoZW4gJ2luc3RhZ3JhbSdcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlIC9cXHI/XFxuL2csICcgJ1xuXG4gICAgICB0ZXh0XG5cblxuXG4gICAgZ2V0U2F2ZWRQb3N0OiA9PlxuXG4gICAgICAjIHJlbW92aW5nIHRoaXMgZmVhdHVyZSBmb3Igbm93XG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgICBpZiBub3QgQHNhdmVkUG9zdD9cblxuICAgICAgICAjIGNoZWNrIHN0YXR1cyBmcm9tIHRoZSBjb2xsZWN0aW9uIG9mIGFsbCBzYXZlZCBwb3N0c1xuICAgICAgICBhbGxQb3N0c0NvbGxlY3Rpb24gPSBTU1Bvc3RzLnJlcXJlcy5yZXF1ZXN0ICdhbGxQb3N0c0NvbGxlY3Rpb24nXG4gICAgICAgIEBzYXZlZFBvc3QgPSBhbGxQb3N0c0NvbGxlY3Rpb24uZmluZFdoZXJlXG4gICAgICAgICAgdmVuZG9yX2lkOiBAZ2V0ICd2ZW5kb3JfaWQnXG4gICAgICAgICAgc2VydmljZV9uYW1lOiBAZ2V0ICdzZXJ2aWNlX25hbWUnXG5cbiAgICAgIEBzYXZlZFBvc3RcbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU1Bvc3RzJywgKFNTUG9zdHMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NQb3N0cy5Nb2RlbHMuUG9zdHNMYXlvdXRNb2RlbCBleHRlbmRzIEFwcC5Nb2RlbHMuQXBpTW9kZWxcblxuICAgIGRlZmF1bHRzOlxuXG4gICAgICB3aWR0aDogbnVsbFxuXG4gICAgICBsYXlvdXQ6IC0+XG5cbiAgICAgICAgcGFyZW50V2lkdGggPSBAZ2V0KCd3aWR0aCcpXG5cbiAgICAgICAgaWYgbm90IHBhcmVudFdpZHRoP1xuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIGxheW91dCA9ICcnXG5cbiAgICAgICAgaWYgcGFyZW50V2lkdGggPD0gNjAwXG4gICAgICAgICAgbGF5b3V0ID0gJ3gtc21hbGwnXG5cbiAgICAgICAgZWxzZSBpZiBwYXJlbnRXaWR0aCA+IDYwMCBhbmQgcGFyZW50V2lkdGggPD0gOTAwXG4gICAgICAgICAgbGF5b3V0ID0gJ3NtYWxsJ1xuXG4gICAgICAgIGVsc2UgaWYgcGFyZW50V2lkdGggPiA5MDAgYW5kIHBhcmVudFdpZHRoIDw9IDEyNTBcbiAgICAgICAgICBsYXlvdXQgPSAnbWVkaXVtJ1xuXG4gICAgICAgIGVsc2UgaWYgcGFyZW50V2lkdGggPiAxMjUwXG4gICAgICAgICAgbGF5b3V0ID0gJ2xhcmdlJ1xuXG4gICAgICAgICMgZWxzZSBpZiBwYXJlbnRXaWR0aCA+IDE1MDBcbiAgICAgICAgIyAgIGxheW91dCA9ICd4LWxhcmdlJ1xuXG4gICAgICAgIGxheW91dFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbkFwcC5tb2R1bGUgJ1NTUG9zdHMnLCAoU1NQb3N0cywgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICBTU1Bvc3RzLkNvbnRyb2xsZXJzID0ge31cbiAgU1NQb3N0cy5Nb2RlbHMgPSB7fVxuICBTU1Bvc3RzLkNvbGxlY3Rpb25zID0ge31cbiAgU1NQb3N0cy5WaWV3cyA9IHt9XG4gIFNTUG9zdHMuTGF5b3V0cyA9IHt9XG4gIFNTUG9zdHMuUm91dGVycyA9IHt9XG4gIFNTUG9zdHMuVGVtcGxhdGVzID0ge31cblxuICBTU1Bvc3RzLnZlbnQgPSBuZXcgQmFja2JvbmUuV3JlcXIuRXZlbnRBZ2dyZWdhdG9yKClcbiAgU1NQb3N0cy5jb21tYW5kcyA9IG5ldyBCYWNrYm9uZS5XcmVxci5Db21tYW5kcygpXG4gIFNTUG9zdHMucmVxcmVzID0gbmV3IEJhY2tib25lLldyZXFyLlJlcXVlc3RSZXNwb25zZSgpXG5cbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzQ29tcGlsZXIgPSByZXF1aXJlKCdoYnNmeS9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnNDb21waWxlci50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBidWZmZXIgPSBcIiAgPGRpdiBjbGFzcz1cXFwic3MtbWV0YVxcXCI+XFxuICAgIFwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmRldl9tZXRhIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5kZXZfbWV0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJkZXZfbWV0YVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCJcXG4gIDwvZGl2PjwhLS0gLnNzLW1ldGEgLS0+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGJ1ZmZlciA9IFwiICA8ZGl2IGNsYXNzPVxcXCJzcy1wb3N0LW1lZGlhXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInNzLXBvc3Qtc29jaWFsLWljb25cXFwiPjxpIGNsYXNzPVxcXCJzcy1pY29uLVwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuc2VydmljZV9uYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zZXJ2aWNlX25hbWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwic2VydmljZV9uYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIiBzcy13YXRlcm1hcmtcXFwiPjwvaT48L3NwYW4+XFxuXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oYXNfdmlkZW8gOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oNCwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDYsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiICA8L2Rpdj48IS0tIC5zcy1wb3N0LW1lZGlhIC0tPlxcblwiO1xufSxcIjRcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcbiAgcmV0dXJuIFwiICAgICAgPHZpZGVvIGNsYXNzPVxcXCJzcy1wb3N0LXZpZGVvXFxcIiBtdXRlZCBhdXRvcGxheSBsb29wIHBvc3Rlcj1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbWFnZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaW1hZ2UgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiaW1hZ2VcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBkYXRhLWltYWdlPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmltYWdlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pbWFnZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJpbWFnZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGRhdGEtc3JjPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnZpZGVvIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC52aWRlbyA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ2aWRlb1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIC8+PCEtLSB2aWRlby5zcy1wb3N0LWltYWdlIC0tPlxcblwiO1xufSxcIjZcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcbiAgcmV0dXJuIFwiICAgICAgPGRpdiBjbGFzcz1cXFwic3MtcG9zdC1pbWFnZS13cmFwcGVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbWFnZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaW1hZ2UgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiaW1hZ2VcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiKTtcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaW1hZ2UgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmltYWdlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImltYWdlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcInNzLXBvc3QtaW1hZ2VcXFwiIC8+XFxuICAgICAgPC9kaXY+PCEtLSAuc3MtcG9zdC1pbWFnZS13cmFwcGVyIC0tPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbiwgYnVmZmVyID0gXCI8ZGl2IGNsYXNzPVxcXCJzcy1wb3N0LWlubmVyXFxcIj5cXG5cXG4gIDxzcGFuIGNsYXNzPVxcXCJzcy1wb3N0LXNwYWNlclxcXCI+PC9zcGFuPlxcblxcblwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZGV2X21ldGEgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5ub29wLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiXFxuICA8ZGl2IGNsYXNzPVxcXCJzcy1wb3N0LWNvbnRlbnRcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwic3MtcG9zdC1zb2NpYWwtaWNvblxcXCI+PGkgY2xhc3M9XFxcInNzLWljb24tXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5zZXJ2aWNlX25hbWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNlcnZpY2VfbmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJzZXJ2aWNlX25hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj48L2k+PC9zcGFuPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzcy1wb3N0LWNvbnRlbnQtaW5uZXJcXFwiPlxcbiAgICAgIFwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmZvcm1hdHRlZF9jYXB0aW9uIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5mb3JtYXR0ZWRfY2FwdGlvbiA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJmb3JtYXR0ZWRfY2FwdGlvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICBidWZmZXIgKz0gXCJcXG4gICAgPC9kaXY+XFxuICA8L2Rpdj48IS0tIC5zcy1wb3N0LWNvbnRlbnQgLS0+XFxuXFxuXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oYXNfbWVkaWEgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMywgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5ub29wLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiXFxuICA8ZGl2IGNsYXNzPVxcXCJzcy1wb3N0LWFjdGlvbnNcXFwiPlxcbiAgICBcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5hY3Rpb25zIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hY3Rpb25zIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImFjdGlvbnNcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiXFxuICA8L2Rpdj48IS0tIC5zcy1wb3N0LWFjdGlvbnMgLS0+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJzcy1wb3N0LXN0YXR1c1xcXCI+XFxuICAgIFwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnN0YXR1c19pY29uIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zdGF0dXNfaWNvbiA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJzdGF0dXNfaWNvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCJcXG4gIDwvZGl2PjwhLS0gLnNzLXBvc3Qtc3RhdHVzIC0tPlxcblxcbiAgPGRpdiBjbGFzcz1cXFwic3MtcG9zdC1mb290ZXJcXFwiPlxcbiAgICA8YSBocmVmPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnVzZXJfbGluayB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudXNlcl9saW5rIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcInVzZXJfbGlua1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJzcy1hdmF0YXJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj4gPGltZyBzcmM9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYXZhdGFyIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hdmF0YXIgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiYXZhdGFyXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIvPiA8L2E+XFxuICAgIDxhIGhyZWY9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudXNlcl9saW5rIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC51c2VyX2xpbmsgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidXNlcl9saW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcInNzLWhhbmRsZVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkBcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnNjcmVlbl9uYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zY3JlZW5fbmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJzY3JlZW5fbmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2E+XFxuICAgIDxhIGhyZWY9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMucGVybWFsaW5rIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wZXJtYWxpbmsgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwicGVybWFsaW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcInNzLXBvc3QtdGltZVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlxcbiAgICAgIDxzcGFuIGRhdGEtbGl2ZXN0YW1wPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpbWVzdGFtcCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGltZXN0YW1wIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcInRpbWVzdGFtcFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPjwvc3Bhbj5cXG4gICAgPC9hPlxcbiAgPC9kaXY+PCEtLSAuc3MtcG9zdC1mb290ZXIgLS0+XFxuXFxuPC9kaXY+PCEtLSAuc3MtcG9zdC1pbm5lciAtLT5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuIiwiLy8gaGJzZnkgY29tcGlsZWQgSGFuZGxlYmFycyB0ZW1wbGF0ZVxudmFyIEhhbmRsZWJhcnNDb21waWxlciA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFyc0NvbXBpbGVyLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJzcy1wb3N0c1xcXCI+PC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwic3MtaW5maW5pdGUtc2Nyb2xsLWxvYWRlclxcXCI+PGRpdiBjbGFzcz1cXFwic3MtaW5uZXItdGV4dFxcXCI+Tm8gbW9yZSBjb250ZW50IHRvIGxvYWQuPC9kaXY+PC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwic3MtZm9vdGVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInNzLWNyZWRpdHNcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwic3MtcG93ZXJlZC1ieVxcXCI+UG93ZXJlZCBieTwvc3Bhbj5cXG4gICAgPGEgaHJlZj1cXFwiaHR0cDovL3NvY2lhbHN0cmVhbXMuY29tXFxcIiBjbGFzcz1cXFwic3MtZm9vdGVyLWxvZ29cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcInNzLWZvb3Rlci1sb2dvLXRleHRcXFwiPlNvY2lhbCBTdHJlYW1zPC9zcGFuPlxcbiAgICA8L2E+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG5cIjtcbiAgfSxcInVzZURhdGFcIjp0cnVlfSk7XG4iLCIndXNlIHN0cmljdCdcblxuQXBwICAgICAgID0gcmVxdWlyZSAnYXBwJ1xuTW9kZXJuaXpyID0gcmVxdWlyZSAnbW9kZXJuaXpyJ1xuYWxlcnRpZnkgID0gcmVxdWlyZSAnYWxlcnRpZnknXG5cbkFwcC5tb2R1bGUgJ1NTUG9zdHMnLCAoU1NQb3N0cywgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICBjbGFzcyBTU1Bvc3RzLlZpZXdzLlBvc3RJdGVtVmlldyBleHRlbmRzIEFwcC5WaWV3cy5CYXNlSXRlbVZpZXdcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi4vVGVtcGxhdGVzL1Bvc3RJdGVtVmlld1RlbXBsYXRlJylcblxuICAgIGluaXRpYWxpemU6ID0+XG5cbiAgICAgIEBsaXN0ZW5UbyBAbW9kZWwsICdjaGFuZ2U6c3RhdHVzJywgQG9uU3RhdHVzQ2hhbmdlXG5cbiAgICBjbGFzc05hbWU6ID0+XG5cbiAgICAgICMgc2V0IGNsYXNzIGJhc2VkIG9uIGNoaWxkIGluZGV4XG4gICAgICBjbGFzc2VzID0gWydzcy1wb3N0J11cblxuICAgICAgIyBjaGVjayBpZiB0aGUgb3B0aW9ucyBtb2R1bGUgd2FzIGxvYWRlZFxuICAgICAgaWYgQXBwLlNTT3B0aW9ucz9cbiAgICAgICAgc3NPcHRpb25zID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAnb3B0aW9ucydcblxuICAgICAgICBpZiBzc09wdGlvbnMuZ2V0KCdkZXZfbW9kZScpXG4gICAgICAgICAgY2xhc3Nlcy5wdXNoICdzcy1kZXYnXG5cbiAgICAgIGlmIEBtb2RlbC5nZXQoJ2hhc19tZWRpYScpXG4gICAgICAgIGNsYXNzZXMucHVzaCAnc3MtaGFzLW1lZGlhJ1xuXG4gICAgICBpZiBAbW9kZWwuZ2V0KCdoYXNfdmlkZW8nKVxuICAgICAgICBjbGFzc2VzLnB1c2ggJ3NzLWhhcy12aWRlbydcblxuICAgICAgaWYgQG1vZGVsLmdldCgnZHVwbGljYXRlJylcbiAgICAgICAgY2xhc3Nlcy5wdXNoICdzcy1kdXBsaWNhdGUnXG5cbiAgICAgICMgc2VydmljZSBjbGFzc1xuICAgICAgY2xhc3Nlcy5wdXNoICdzcy0nICsgQG1vZGVsLmdldCgnc2VydmljZV9uYW1lJylcblxuICAgICAgIyBzdGF0dXMgY2xhc3NcbiAgICAgIGNsYXNzZXMucHVzaCAnc3Mtc3RhdHVzLScgKyBAbW9kZWwuZ2V0KCdzdGF0dXMnKVxuXG4gICAgICBjbGFzc2VzLmpvaW4gJyAnXG5cblxuICAgIGF0dHJpYnV0ZXM6ID0+XG4gICAgICAnZGF0YS1pZCc6IEBtb2RlbC5nZXQgJ29yZGVyX2lkJ1xuXG4gICAgb25SZW5kZXI6ID0+XG5cbiAgICAgICNpZiB2aWRlb1xuICAgICAgaWYgQG1vZGVsLmdldCgnaGFzX3ZpZGVvJyk/XG5cbiAgICAgICAgIyBNdXRlIHZpZGVvXG4gICAgICAgIEAkKCd2aWRlbycpLnByb3AgJ211dGVkJywgdHJ1ZVxuXG5cbiAgICAgICMgY2hlY2sgaWYgaXQgaXMgbW9iaWxlIG9yIHRhYmxldFxuICAgICAgaWYgTW9kZXJuaXpyLnRvdWNoZXZlbnRzPyBhbmQgTW9kZXJuaXpyLnRvdWNoZXZlbnRzIGlzIHRydWVcblxuICAgICAgICAjIGJpbmQgdGhlIGNsaWNrIGV2ZW50IHRvIHRoZSBhIHRhZyBzbyBpT1MgY2FuIGZpcmUgdGhlIGNsaWNrIGV2ZW50XG4gICAgICAgIEAkZWwub24gJ2NsaWNrJywgJ2EnLCBAb25DbGlja0FuY2hvclxuXG4gICAgICAgICMgYmluZCB0aGUgZWxlbWVudCB3aXRoIHRhcHB5XG4gICAgICAgIEAkZWwub24gJ3RhcCcsIEBvblRhcFxuXG4gICAgICBlbHNlXG4gICAgICAgICNpZiB2aWRlb1xuICAgICAgICBpZiBAbW9kZWwuZ2V0KCdoYXNfdmlkZW8nKT9cbiAgICAgICAgICAjIHNldCB2aWRlbyBzcmNcbiAgICAgICAgICBAJCgndmlkZW8nKS5hdHRyIFwic3JjXCIsIEAkKCd2aWRlbycpLmRhdGEoXCJzcmNcIilcblxuICAgICAgICAjIGRvIHRoZSBkZXNrdG9wIGV2ZW50c1xuICAgICAgICBAJGVsLm9uICdtb3VzZWVudGVyIG1vdXNlbGVhdmUnLCAnLnNzLXBvc3QtaW5uZXInLCBAb25Nb3VzZW92ZXJcbiAgICAgICAgQCRlbC5vbiAnY2xpY2snLCAnLnNzLXB1Ymxpc2gtYnRuLCAuc3MtdHJhc2gtYnRuJywgQG9uQ2xpY2tUb2dnbGVTdGF0dXNcblxuXG4gICAgb25DbGlja0FuY2hvcjogKCBldmVudCApID0+XG5cbiAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgICAkdGFyZ2V0LmFkZENsYXNzKCAnY2xpY2stZmlyZWQnIClcblxuICAgICAgIyBjaGVjayBpZiB0aGUgYSB0YWcgaGFzIHRoZSBwdWJsaXNoIG9yIHRyYXNoIGNsYXNzZXNcbiAgICAgICMgaWYgaXQgZG9lcywgdHJpZ2dlciB0aGUgc3RhdHVzIGNoYW5nZSBmdW5jdGlvblxuICAgICAgaWYgJHRhcmdldC5oYXNDbGFzcyggJ3NzLXB1Ymxpc2gtYnRuJyApIG9yICR0YXJnZXQuaGFzQ2xhc3MoICdzcy10cmFzaC1idG4nIClcbiAgICAgICAgQG9uQ2xpY2tUb2dnbGVTdGF0dXMoZXZlbnQpXG4gICAgICAgIHJldHVyblxuXG4gICAgICAjIHRyaWdnZXIgdGhlIGEgdGFnIGZvciB0aGUgbGlua3MgaW5zaWRlIHRoZSBwb3N0IG1hbnVhbGx5XG4gICAgICBocmVmID0gJHRhcmdldC5hdHRyKCAnaHJlZicgKVxuXG4gICAgICB0YXJnZXRBdHRyID0gJHRhcmdldC5hdHRyKCAndGFyZ2V0JyApXG4gICAgICBpZiBub3QgdGFyZ2V0QXR0cj9cbiAgICAgICAgdGFyZ2V0QXR0ciA9ICcnXG5cbiAgICAgICMgb3BlbiB0aGUgbGluayBpbiBhIG5ldyB0YWJcbiAgICAgIHdpbmRvdy5vcGVuIGhyZWYsIHRhcmdldEF0dHJcblxuICAgIG9uVGFwOiAoIGV2ZW50ICkgPT5cblxuICAgICAgJHRhcmdldCA9ICQoIGV2ZW50LnRhcmdldCApXG4gICAgICAkY3VycmVudFRhcmdldCA9ICQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKVxuXG4gICAgICAjIGNoZWNrIGlmIHRoZSB0YXJnZXQgaXMgYW4gYSB0YWcgb3IgaWYgdGhlIHBhcmVudCBpcyBhbiBhIHRhZ1xuICAgICAgaWYgJHRhcmdldC5pcyggJ2EnICkgb3IgJHRhcmdldC5wYXJlbnRzKCAnYScgKS5sZW5ndGggPiAwXG5cbiAgICAgICAgc2V0VGltZW91dCAtPlxuXG4gICAgICAgICAgIyBiZWZvcmUgZ29pbmcgaW5zaWRlIHRoZSBzZXR0aW1lb3V0IGZ1bmN0aW9uLCBpdCB3aWxsIGZpcnN0IHRyaWdnZXIgYSBjbGljayBldmVudCBmb3IgdGhlIGEgdGFnXG4gICAgICAgICAgIyB3aGljaCBhZGRzIHRoZSAnY2xpY2stZmlyZWQnIGNsYXNzXG4gICAgICAgICAgIyBzbyB3ZSBjaGVjayBpZiB0aGUgYSB0YWcgaGFzIHRoYXQgY2xhc3MgYW5kIG1hbnVhbGx5IHRyaWdnZXIgdGhlIGNsaWNrIGV2ZW50XG4gICAgICAgICAgaWYgbm90ICR0YXJnZXQuaGFzQ2xhc3MoICdjbGljay1maXJlZCcgKVxuICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcyggJ2NsaWNrLWZpcmVkJyApLmNsaWNrKClcbiAgICAgICAgLCAwXG5cbiAgICAgICAgcmV0dXJuXG5cbiAgICAgICMgY2hlY2sgaWYgd2UgaGF2ZSB0aGUgdGFwIGNsYXNzIGluIHRoZSBjdXJyZW50IHRhcmdldFxuICAgICAgaGFzVGFwQ2xhc3MgPSAkY3VycmVudFRhcmdldC5oYXNDbGFzcyggJ3RhcCcgKVxuICAgICAgJCggJy5zcy1wb3N0LnRhcCcgKS5yZW1vdmVDbGFzcyggJ3RhcCcgKVxuICAgICAgJGN1cnJlbnRUYXJnZXQudG9nZ2xlQ2xhc3MgJ3RhcCcsIG5vdCBoYXNUYXBDbGFzc1xuXG4gICAgb25DbGlja1RvZ2dsZVN0YXR1czogKGV2ZW50KSA9PlxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICMgU2V0IGRlZmF1bHQgc3RhdHVzXG4gICAgICBzdGF0dXMgPSAncHVibGlzaCdcbiAgICAgIGlmICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ3NzLXRyYXNoLWJ0bicpXG4gICAgICAgIHN0YXR1cyA9ICd0cmFzaCdcblxuICAgICAgY3VycmVudFN0YXR1cyA9IEBtb2RlbC5nZXQoJ3N0YXR1cycpXG5cbiAgICAgIGlmIGN1cnJlbnRTdGF0dXMgaXMgc3RhdHVzXG5cbiAgICAgICAgQG1vZGVsLnNldFxuICAgICAgICAgIHN0YXR1czogJydcbiAgICAgICAgLFxuICAgICAgICAgIHNpbGVudDogdHJ1ZVxuXG4gICAgICAgIEBtb2RlbC5zZXRcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuXG4gICAgICBlbHNlXG5cbiAgICAgICAgQG1vZGVsLnNhdmVcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuXG5cbiAgICBvbk1vdXNlb3ZlcjogKGV2ZW50KSA9PlxuXG4gICAgICBob3ZlciA9IGZhbHNlXG4gICAgICBpZiBldmVudC50eXBlID09ICdtb3VzZWVudGVyJyBvciBldmVudC50eXBlID09ICd0YXAnXG4gICAgICAgIGhvdmVyID0gdHJ1ZVxuXG4gICAgICBAdG9nZ2xlRWwgQCQoJy5zcy1wb3N0LW1lZGlhJyksIG5vdCBob3ZlclxuICAgICAgQHRvZ2dsZUVsIEAkKCcuc3MtcG9zdC1hY3Rpb25zJyksIGhvdmVyXG5cbiAgICAgIEAkZWwudG9nZ2xlQ2xhc3MgJ3NzLWhvdmVyJywgaG92ZXJcblxuICAgICAgIyBjaGVjayBpZiBpdCBpcyBtb2JpbGUgb3IgdGFibGV0XG4gICAgICBpZiBNb2Rlcm5penIudG91Y2hldmVudHM/IGFuZCBNb2Rlcm5penIudG91Y2hldmVudHMgaXMgdHJ1ZVxuICAgICAgICBAJGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzICd0YXAnLCBob3ZlclxuXG5cbiAgICB0b2dnbGVFbDogKCRlbCwgdG9nZ2xlKSAtPlxuXG4gICAgICBjc3NTdGFydCA9IHt9XG4gICAgICBhbmltYXRlID0ge31cbiAgICAgIGNzc0VuZCA9IHt9XG5cbiAgICAgICMgZmFkZSBpbi9vdXQgaW1hZ2VcbiAgICAgIGlmIHRvZ2dsZVxuXG4gICAgICAgIGNzc1N0YXJ0ID1cbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgICAgb3BhY2l0eTogMFxuXG4gICAgICAgIGFuaW1hdGUgPVxuICAgICAgICAgIG9wYWNpdHk6IDFcblxuICAgICAgZWxzZVxuXG4gICAgICAgIGNzc1N0YXJ0ID1cbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG5cbiAgICAgICAgYW5pbWF0ZSA9XG4gICAgICAgICAgb3BhY2l0eTogMFxuXG4gICAgICAgIGNzc0VuZCA9XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG5cbiAgICAgICRlbFxuICAgICAgICAuc3RvcCgwLDApXG4gICAgICAgIC5jc3MoIGNzc1N0YXJ0IClcbiAgICAgICAgLmFuaW1hdGUgYW5pbWF0ZSwgMjAwLCAtPlxuICAgICAgICAgICRlbC5jc3MoIGNzc0VuZCApXG5cblxuXG4gICAgb25TdGF0dXNDaGFuZ2U6IChtb2RlbCwgc3RhdHVzKSA9PlxuXG4gICAgICAjIGdldCBwcmV2aW91cyBzdGF0dXNcbiAgICAgIHByZXZTdGF0dXMgPSAncHVibGlzaCdcbiAgICAgIGlmIEAkZWwuaGFzQ2xhc3MoJ3NzLXN0YXR1cy1kcmFmdCcpXG4gICAgICAgIHByZXZTdGF0dXMgPSAnZHJhZnQnXG4gICAgICBpZiBAJGVsLmhhc0NsYXNzKCdzcy1zdGF0dXMtdHJhc2gnKVxuICAgICAgICBwcmV2U3RhdHVzID0gJ3RyYXNoJ1xuXG4gICAgICBkb2luZ0JhdGNoU2F2ZSA9IFNTUG9zdHMucmVxcmVzLnJlcXVlc3QgJ2RvaW5nQmF0Y2hTYXZlJ1xuICAgICAgdXNlck1ldGEgPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICd1c2VyTWV0YSdcblxuICAgICAgbWVzc2FnZSA9ICcnXG5cbiAgICAgIHN3aXRjaCBwcmV2U3RhdHVzICsgJy0nICsgc3RhdHVzXG5cbiAgICAgICAgd2hlbiAncHVibGlzaC1wdWJsaXNoJ1xuXG4gICAgICAgICAgaWYgbm90IGRvaW5nQmF0Y2hTYXZlXG4gICAgICAgICAgICBtb2RlcmF0aW9uID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAnb3B0aW9uJywgJ21vZGVyYXRpb24nXG4gICAgICAgICAgICBpZiBub3QgbW9kZXJhdGlvblxuICAgICAgICAgICAgICBpZiBub3QgdXNlck1ldGEuZ2V0KCdwdWJsaXNoUG9wdXAnKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIjxoMT48aSBjbGFzcz0nc3MtaWNvbi1jaGVjayc+PC9pPjwvaDE+PGgzPlRoaXMgcG9zdCBpcyBhbHJlYWR5IGFwcHJvdmVkLjwvaDM+IDxiciAvPiBUbyB0dXJuIEF1dG8tQXBwcm92ZSA8c3Ryb25nPk9GRjwvc3Ryb25nPiBzZWUgdGhlIDxpPmFkdmFuY2VkIHNldHRpbmdzPC9pPiA8aSBjbGFzcz0nc3MtaWNvbi1jb2cnPjwvaT5cIlxuICAgICAgICAgICAgICAgIHVzZXJNZXRhLnNhdmVcbiAgICAgICAgICAgICAgICAgIHB1Ymxpc2hQb3B1cDogdHJ1ZVxuXG4gICAgICAgIHdoZW4gJ3B1Ymxpc2gtdHJhc2gnLCAnZHJhZnQtdHJhc2gnXG5cbiAgICAgICAgICBpZiBub3QgZG9pbmdCYXRjaFNhdmUgYW5kIG5vdCB1c2VyTWV0YS5nZXQoJ3RyYXNoUG9wdXAnKVxuICAgICAgICAgICAgbWVzc2FnZSA9IFwiPGgxPjxpIGNsYXNzPSdzcy1pY29uLXRyYXNoLW8nPjwvaT48L2gxPjxoMz5UaGlzIHBvc3QgaXMgdHJhc2hlZCE8L2gzPiA8YnIgLz4gPGgzPlRvIHJlc2N1ZSB0aGlzIHBvc3QgY2xpY2sgPGk+VmlldyBUcmFzaDwvaT4gPGkgY2xhc3M9J3NzLWljb24tdHJhc2gtbyc+PC9pPjwvaDM+IDxici8+IFlvdSB3aWxsIG5vdCBzZWUgdGhpcyBtZXNzYWdlIGFnYWluLlwiXG4gICAgICAgICAgICB1c2VyTWV0YS5zYXZlXG4gICAgICAgICAgICAgIHRyYXNoUG9wdXA6IHRydWVcblxuICAgICAgICAgICMgcmVtb3ZlIGl0ZW0gZnJvbSBsaXN0IChkbyBhbmltYXRpb24pXG4gICAgICAgICAgQCRlbC5hZGRDbGFzcyAnc3MtdHJhc2hpbmcnXG5cbiAgICAgICAgICBAJGVsLmZhZGVPdXQgNTAwLCA9PlxuICAgICAgICAgICAgQHJlbW92ZSgpXG5cblxuICAgICAgICB3aGVuICdkcmFmdC1wdWJsaXNoJ1xuXG4gICAgICAgICAgQHJlbmRlcigpXG4gICAgICAgICAgQCRlbC5hdHRyKCdjbGFzcycsIF8ucmVzdWx0KEAsICdjbGFzc05hbWUnKSlcblxuICAgICAgICAgIEAkZWwuYWRkQ2xhc3MgJ3NzLXB1Ymxpc2hpbmcnXG4gICAgICAgICAgQCQoJy5zcy1wb3N0LXNwYWNlcicpLmZhZGVPdXQgNTAwLCA9PlxuICAgICAgICAgICAgQCRlbC5yZW1vdmVDbGFzcyAnc3MtcHVibGlzaGluZydcbiAgICAgICAgICAgIEAkKCcuc3MtcG9zdC1zcGFjZXInKS5zaG93KClcblxuXG4gICAgICAgIHdoZW4gJ3RyYXNoLXB1Ymxpc2gnXG5cbiAgICAgICAgICAjIHJlbW92ZSBpdGVtIGZyb20gbGlzdCAoZG8gYW5pbWF0aW9uKVxuICAgICAgICAgIEAkZWwuYWRkQ2xhc3MgJ3NzLXB1Ymxpc2hpbmcnXG4gICAgICAgICAgQCRlbC5mYWRlT3V0IDUwMCwgPT5cbiAgICAgICAgICAgIEByZW1vdmUoKVxuXG4gICAgICAgIHdoZW4gJ3RyYXNoLXRyYXNoJ1xuXG4gICAgICAgICAgIyBkbyBub3RoaW5nXG5cbiAgICAgICAgZWxzZVxuXG4gICAgICAgICAgQHJlbmRlcigpXG4gICAgICAgICAgQCRlbC5hdHRyKCdjbGFzcycsIF8ucmVzdWx0KEAsICdjbGFzc05hbWUnKSlcblxuXG4gICAgICAjIElGIE1PREVMIElTIFBVQkxJU0ggT1IgVFJBU0ggQUxFUlQgKG5vdCBkcmFmdClcbiAgICAgIGlmIG1lc3NhZ2UgaXNudCAnJyBhbmQgYWxlcnRpZnk/XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0ICcnLCBtZXNzYWdlXG5cbiIsIid1c2Ugc3RyaWN0J1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbnJlcXVpcmUgJy4vUG9zdEl0ZW1WaWV3J1xuXG5BcHAubW9kdWxlICdTU1Bvc3RzJywgKFNTUG9zdHMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NQb3N0cy5WaWV3cy5Qb3N0c0NvbXBvc2l0ZVZpZXcgZXh0ZW5kcyBBcHAuVmlld3MuSW5maW5pdGVTY3JvbGxDb21wb3NpdGVWaWV3XG5cbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSAnLi4vVGVtcGxhdGVzL1Bvc3RzQ29tcG9zaXRlVmlld1RlbXBsYXRlJ1xuXG4gICAgY2xhc3NOYW1lOiAtPlxuICAgICAgY2xhc3NOYW1lID0gJ3NzLXdyYXBwZXInXG5cbiAgICAgICMgYWRkIGNsYXNzIGlmIHRoZSBwb3N0cyBhcmUgY29taW5nIGZyb20gdGhlIEJXIEFQSVxuICAgICAgaWYgQGNvbGxlY3Rpb24/IGFuZCBAY29sbGVjdGlvbiBpbnN0YW5jZW9mIFNTUG9zdHMuQ29sbGVjdGlvbnMuQXBpUG9zdHNDb2xsZWN0aW9uXG4gICAgICAgIGNsYXNzTmFtZSArPSAnIHNzLWFwaS1wb3N0cydcblxuICAgICAgIyBjaGVjayBpZiB0aGUgb3B0aW9ucyBtb2R1bGUgd2FzIGxvYWRlZFxuICAgICAgaWYgQXBwLlNTT3B0aW9ucz9cbiAgICAgICAgc3NPcHRpb25zID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAnb3B0aW9ucydcblxuICAgICAgICBpZiBzc09wdGlvbnMuZ2V0KCd1c2VyX2Nhbl9tb2RlcmF0ZScpXG4gICAgICAgICAgY2xhc3NOYW1lICs9ICcgc3MtbW9kZXJhdGlvbidcblxuICAgICAgICBpZiBzc09wdGlvbnMuZ2V0KCdpc19hZG1pbicpXG4gICAgICAgICAgY2xhc3NOYW1lICs9ICcgc3MtaXMtYWRtaW4nXG5cbiAgICAgIGNsYXNzTmFtZVxuXG5cbiAgICBpdGVtVmlld0NvbnRhaW5lcjogJy5zcy1wb3N0cydcblxuICAgIGl0ZW1WaWV3OiBTU1Bvc3RzLlZpZXdzLlBvc3RJdGVtVmlld1xuXG4gICAgc2Nyb2xsQ29udGFpbmVyOiAnd2luZG93J1xuXG5cbiAgICBfZ2V0Q2hpbGRWaWV3RWxGcm9tTW9kZWw6IChtb2RlbCkgPT5cblxuICAgICAgQCQoQGl0ZW1WaWV3Q29udGFpbmVyKS5maW5kKCdbZGF0YS1pZD1cIicgKyBtb2RlbC5nZXQoJ29yZGVyX2lkJykgKyAnXCJdJylcblxuXG4gICAgaW5pdGlhbGl6ZTogPT5cblxuICAgICAgIyMjXG4gICAgICBMaXN0ZW4gZm9yIHdpZHRoIGNoYW5nZXMgdG8gcmVzZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zXG4gICAgICAjIyNcbiAgICAgIEBsaXN0ZW5UbyBBcHAuSGVscGVycy5lbnYsICdjaGFuZ2U6d2lkdGgnLCBAb25DaGFuZ2VFbnZXaWR0aFxuICAgICAgQGxpc3RlblRvIEBtb2RlbCwgJ2NoYW5nZTp3aWR0aCcsIEBvbkNoYW5nZVdpZHRoXG5cbiAgICAgICMgY2FsbCB0aGUgcGFyZW50J3MgY29uc3RydWN0b3JcbiAgICAgIFNTUG9zdHMuVmlld3MuUG9zdHNDb21wb3NpdGVWaWV3Ll9fc3VwZXJfXy5pbml0aWFsaXplLmFwcGx5IEAsIGFyZ3VtZW50c1xuXG5cbiAgICBvblJlbmRlcjogPT5cbiAgICAgIEBvbkNoYW5nZUVudldpZHRoKClcbiAgICAgIEAkZWwuYXR0ciAnY2xhc3MnLCBfLnJlc3VsdChALCAnY2xhc3NOYW1lJylcblxuICAgICAgU1NQb3N0cy5WaWV3cy5Qb3N0c0NvbXBvc2l0ZVZpZXcuX19zdXBlcl9fLm9uUmVuZGVyLmFwcGx5IEAsIGFyZ3VtZW50c1xuXG5cbiAgICBvbkNoYW5nZUVudldpZHRoOiA9PlxuICAgICAgIyBjb25zb2xlLmxvZyAnb25DaGFuZ2VFbnZXaWR0aCdcblxuICAgICAgcGFyZW50V2lkdGggPSBudWxsXG4gICAgICBpZiBAJGVsPyBhbmQgQCRlbC5wYXJlbnQoKS5sZW5ndGggPiAwXG4gICAgICAgIHBhcmVudFdpZHRoID0gQCRlbC5wYXJlbnQoKS53aWR0aCgpXG5cbiAgICAgIGlmIG5vdCBwYXJlbnRXaWR0aD8gb3IgcGFyZW50V2lkdGggaXMgMFxuICAgICAgICBzZXRUaW1lb3V0IEBvbkNoYW5nZUVudldpZHRoLCAyMDBcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgICMgaWYgdGhlIHdpZHRoIGlzIHNldCwgcHJvY2VkZSB3aXRoIHRoZSBsYXlvdXQgY2hlY2tzXG4gICAgICBAbW9kZWwuc2V0ICd3aWR0aCcsIHBhcmVudFdpZHRoXG5cblxuICAgIG9uQ2hhbmdlV2lkdGg6ID0+XG5cbiAgICAgIGxheW91dCA9IEBtb2RlbC5nZXQoJ2xheW91dCcpXG5cbiAgICAgICMgY29uc29sZS5sb2cgJ29uQ2hhbmdlV2lkdGgnLCBsYXlvdXRcblxuICAgICAgaWYgbm90IGxheW91dD9cbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGlmIG5vdCBAY3VycmVudExheW91dD9cbiAgICAgICAgQGN1cnJlbnRMYXlvdXQgPSAnJ1xuXG4gICAgICBpZiBsYXlvdXQgaXMgQGN1cnJlbnRMYXlvdXRcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIEBjdXJyZW50TGF5b3V0ID0gbGF5b3V0XG5cbiAgICAgICMgc2V0IGRhdGEgbGF5b3V0XG4gICAgICBAJGVsLmF0dHIgJ2RhdGEtbGF5b3V0JywgbGF5b3V0XG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxucmVxdWlyZSAnLi9TU1Bvc3RzJ1xuXG4jIE1vZGVsc1xucmVxdWlyZSAnLi9Nb2RlbHMvUG9zdE1vZGVsJ1xucmVxdWlyZSAnLi9Nb2RlbHMvUG9zdHNMYXlvdXRNb2RlbCdcblxuIyBDb2xsZWN0aW9uc1xucmVxdWlyZSAnLi9Db2xsZWN0aW9ucy9Qb3N0c0NvbGxlY3Rpb24nXG5yZXF1aXJlICcuL0NvbGxlY3Rpb25zL0FwaVBvc3RzQ29sbGVjdGlvbidcblxuIyBWaWV3c1xucmVxdWlyZSAnLi9WaWV3cy9Qb3N0SXRlbVZpZXcnXG5yZXF1aXJlICcuL1ZpZXdzL1Bvc3RzQ29tcG9zaXRlVmlldydcblxuIyBDb250cm9sbGVyc1xucmVxdWlyZSAnLi9Db250cm9sbGVycy9Qb3N0c0NvbnRyb2xsZXInXG5yZXF1aXJlICcuL0NvbnRyb2xsZXJzL0F1dG9SZWxvYWRDb250cm9sbGVyJ1xuXG5cbkFwcC5tb2R1bGUgJ1NTUG9zdHMnLCAoU1NQb3N0cywgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICBTU1Bvc3RzLmFkZEluaXRpYWxpemVyIC0+XG5cbiAgICBwb3N0c0NvbnRyb2xsZXIgPSBuZXcgU1NQb3N0cy5Db250cm9sbGVycy5Qb3N0c0NvbnRyb2xsZXIoKVxuICAgIGF1dG9SZWxvYWRDb250cm9sbGVyID0gbmV3IFNTUG9zdHMuQ29udHJvbGxlcnMuQXV0b1JlbG9hZENvbnRyb2xsZXIoKVxuXG4gICAgIyMjXG4gICAgRGVmaW5lIE1vZHVsZSBBUElcbiAgICAjIyNcbiAgICBTU1Bvc3RzLnJlcXJlcy5zZXRIYW5kbGVyICdwb3N0c0NvbGxlY3Rpb24nLCBwb3N0c0NvbnRyb2xsZXIuZ2V0UG9zdHNDb2xsZWN0aW9uXG4gICAgU1NQb3N0cy5yZXFyZXMuc2V0SGFuZGxlciAnYXBpUG9zdHNDb2xsZWN0aW9uJywgcG9zdHNDb250cm9sbGVyLmdldEFwaVBvc3RzQ29sbGVjdGlvblxuICAgIFNTUG9zdHMucmVxcmVzLnNldEhhbmRsZXIgJ3Bvc3RzQ29tcG9zaXRlVmlldycsIHBvc3RzQ29udHJvbGxlci5nZXRQb3N0c0NvbXBvc2l0ZVZpZXdcbiAgICBTU1Bvc3RzLnJlcXJlcy5zZXRIYW5kbGVyICdhbGxQb3N0c0NvbGxlY3Rpb24nLCBwb3N0c0NvbnRyb2xsZXIuZ2V0QWxsUG9zdHNDb2xsZWN0aW9uXG5cbiAgICBTU1Bvc3RzLnJlcXJlcy5zZXRIYW5kbGVyICdkb2luZ0JhdGNoU2F2ZScsIHBvc3RzQ29udHJvbGxlci5kb2luZ0JhdGNoU2F2ZVxuICAgIFNTUG9zdHMuY29tbWFuZHMuc2V0SGFuZGxlciAnZG9pbmdCYXRjaFNhdmUnLCBwb3N0c0NvbnRyb2xsZXIuZG9pbmdCYXRjaFNhdmVcbiAgICBTU1Bvc3RzLmNvbW1hbmRzLnNldEhhbmRsZXIgJ2ZldGNoU2VydmVyUG9zdHMnLCBwb3N0c0NvbnRyb2xsZXIuZmV0Y2hTZXJ2ZXJQb3N0c1xuICAgIFNTUG9zdHMuY29tbWFuZHMuc2V0SGFuZGxlciAnZmV0Y2hBcGlQb3N0cycsIHBvc3RzQ29udHJvbGxlci5mZXRjaEFwaVBvc3RzXG4gICAgU1NQb3N0cy5jb21tYW5kcy5zZXRIYW5kbGVyICdwdWJsaXNoQXBpUG9zdHMnLCBwb3N0c0NvbnRyb2xsZXIucHVibGlzaEFwaVBvc3RzXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxuQXBwLm1vZHVsZSAnU1NTZWFyY2gnLCAoU1NTZWFyY2gsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NTZWFyY2guQ29udHJvbGxlcnMuU2VhcmNoQ29udHJvbGxlciBleHRlbmRzIEJhY2tib25lLk1hcmlvbmV0dGUuQ29udHJvbGxlclxuXG5cbiAgICBpbml0aWFsaXplOiA9PlxuXG4gICAgICBTU1NlYXJjaC5vbiAnc3RhcnQnLCBAb25TdGFydFxuXG5cbiAgICBvblN0YXJ0OiA9PlxuXG4gICAgICAjIGNoZWNrIGlmIHRoZSBoZWFkZXIgcmVnaW9uIGlzIGluIHRoZSBkb21cbiAgICAgIGlmICQoJy5zcy1zZWFyY2gtcmVnaW9uJykubGVuZ3RoID4gMFxuXG4gICAgICAgIEFwcC5hZGRSZWdpb25zXG4gICAgICAgICAgc2VhcmNoOiAnLnNzLXNlYXJjaC1yZWdpb24nXG5cbiAgICAgICAgQXBwLnNlYXJjaC5zaG93IEBnZXRTZWFyY2hWaWV3KClcblxuXG4gICAgZ2V0U2VhcmNoTW9kZWw6ID0+XG5cbiAgICAgIGlmIG5vdCBAc2VhcmNoTW9kZWw/XG5cbiAgICAgICAgQHNlYXJjaE1vZGVsID0gbmV3IFNTU2VhcmNoLk1vZGVscy5TZWFyY2hNb2RlbFxuICAgICAgICAgIGlkOiAnc29jaWFsc3RyZWFtc19zZWFyY2gnXG5cbiAgICAgICAgQHNlYXJjaE1vZGVsLmZldGNoKClcblxuICAgICAgQHNlYXJjaE1vZGVsXG5cblxuXG4gICAgZ2V0U2VhcmNoVmlldzogPT5cblxuICAgICAgaWYgbm90IEBzZWFyY2hWaWV3P1xuXG4gICAgICAgIEBzZWFyY2hWaWV3ID0gbmV3IFNTU2VhcmNoLlZpZXdzLlNlYXJjaEl0ZW1WaWV3XG4gICAgICAgICAgbW9kZWw6IEBnZXRTZWFyY2hNb2RlbCgpXG5cbiAgICAgIEBzZWFyY2hWaWV3XG5cblxuICAgIGdldFNlcnZpY2VzQ29sbGVjdGlvbjogPT5cblxuICAgICAgaWYgbm90IEBzZXJ2aWNlc0NvbGxlY3Rpb24/XG5cbiAgICAgICAgQHNlcnZpY2VzQ29sbGVjdGlvbiA9IG5ldyBTU1NlYXJjaC5Db2xsZWN0aW9ucy5TZXJ2aWNlc0NvbGxlY3Rpb25cblxuICAgICAgICAjIGZldGNoIGluaXRpYWwgcG9zdHMgZnJvbSBET01cbiAgICAgICAgQHNlcnZpY2VzQ29sbGVjdGlvbi5mZXRjaCgpXG5cbiAgICAgIEBzZXJ2aWNlc0NvbGxlY3Rpb25cblxuXG4gICAgZ2V0QWN0aW9uOiAoYWN0aW9uKSA9PlxuXG4gICAgICBAZ2V0U2VhcmNoTW9kZWwoKS5nZXQgJ2FjdGlvbidcblxuXG4gICAgc2V0QWN0aW9uOiAoYWN0aW9uKSA9PlxuXG4gICAgICBAZ2V0U2VhcmNoTW9kZWwoKS5zZXQgJ2FjdGlvbicsIGFjdGlvblxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU1NlYXJjaCcsIChTU1NlYXJjaCwgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICBjbGFzcyBTU1NlYXJjaC5Nb2RlbHMuU2VhcmNoTW9kZWwgZXh0ZW5kcyBBcHAuTW9kZWxzLldQT3B0aW9uTW9kZWxcblxuICAgIGRlZmF1bHRzOlxuXG4gICAgICBhY3Rpb246IC0+XG5cbiAgICAgICAgb3V0cHV0ID0gJydcblxuICAgICAgICBwb3N0c0NvbGxlY3Rpb24gPSBbXVxuICAgICAgICBpZiBBcHAuU1NQb3N0cz9cbiAgICAgICAgICBwb3N0c0NvbGxlY3Rpb24gPSBBcHAuU1NQb3N0cy5yZXFyZXMucmVxdWVzdCAncG9zdHNDb2xsZWN0aW9uJ1xuXG4gICAgICAgIGlmIHBvc3RzQ29sbGVjdGlvbi5sZW5ndGggPiAwXG4gICAgICAgICAgb3V0cHV0ID0gJ3ZpZXcnXG5cblxuICAgICAgcHVibGljX3BhZ2VfdXJsOiAtPlxuXG4gICAgICAgIHB1YmxpY19wYWdlX3VybCA9IG51bGxcblxuICAgICAgICBpZiBBcHAuU1NPcHRpb25zP1xuICAgICAgICAgIHB1YmxpY19wYWdlX3VybCA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICdwdWJsaWNfcGFnZV91cmwnXG5cbiAgICAgICAgcHVibGljX3BhZ2VfdXJsXG5cblxuICAgICAgdGltZV90b19uZXh0X2Nyb246IC0+XG5cbiAgICAgICAgdGltZV90b19uZXh0X2Nyb24gPSAnJ1xuXG4gICAgICAgIGlmIEFwcC5TU09wdGlvbnM/XG4gICAgICAgICAgdGltZV90b19uZXh0X2Nyb24gPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAndGltZV90b19uZXh0X2Nyb24nXG5cbiAgICAgICAgICBpZiB0aW1lX3RvX25leHRfY3Jvbj8gYW5kIHRpbWVfdG9fbmV4dF9jcm9uIGlzbnQgJydcbiAgICAgICAgICAgIHRpbWVfdG9fbmV4dF9jcm9uID0gbW9tZW50LnVuaXgoIHBhcnNlSW50KCB0aW1lX3RvX25leHRfY3JvbiwgMTAgKSApLmZyb20oMCx0cnVlKVxuXG4gICAgICAgIHRpbWVfdG9fbmV4dF9jcm9uXG5cblxuICAgICAgIyBnZXQgbGlzdCBvZiBzZXJ2aWNlc1xuICAgICAgc2VydmljZXM6IC0+XG4gICAgICAgIHNlcnZpY2VzID0gW11cblxuICAgICAgICBpZiBBcHAuU1NBdXRoP1xuICAgICAgICAgIEFwcC5TU0F1dGgucmVxcmVzLnJlcXVlc3QoJ3NlcnZpY2VzQ29sbGVjdGlvbicpLmVhY2ggKG1vZGVsKSAtPlxuXG4gICAgICAgICAgICBzZXJ2aWNlRGF0YSA9IG1vZGVsLnRvSlNPTigpXG5cbiAgICAgICAgICAgIHNlcnZpY2VEYXRhLnF1ZXJ5ID0gQGdldCggc2VydmljZURhdGEuaWQgKyAnUXVlcnknIClcbiAgICAgICAgICAgIHNlcnZpY2VEYXRhLnR5cGUgPSBAZ2V0KCBzZXJ2aWNlRGF0YS5pZCArICdUeXBlJyApXG5cbiAgICAgICAgICAgIF8uZWFjaCBzZXJ2aWNlRGF0YS50eXBlcywgKHR5cGUsIGluZGV4KSAtPlxuICAgICAgICAgICAgICBpZiB0eXBlLnZhbHVlIGlzIHNlcnZpY2VEYXRhLnR5cGVcbiAgICAgICAgICAgICAgICBzZXJ2aWNlRGF0YS50eXBlc1sgaW5kZXggXS5zZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICwgQFxuXG4gICAgICAgICAgICBzZXJ2aWNlcy5wdXNoIHNlcnZpY2VEYXRhXG5cbiAgICAgICAgICAsIEBcblxuICAgICAgICBzZXJ2aWNlc1xuXG5cbiAgICB2YWxpZGF0ZTogKGF0dHJzLCBvcHRpb25zKSA9PlxuXG4gICAgICBlcnJvcnMgPSB7fVxuXG4gICAgICBzZXJ2aWNlcyA9IEBnZXQgJ3NlcnZpY2VzJ1xuXG4gICAgICBfLmVhY2ggc2VydmljZXMsIChzZXJ2aWNlKSAtPlxuXG4gICAgICAgICMgYnkgZGVmYXVsdCB0aGlzIHNlcnZpY2UgZG9lc24ndCBoYXZlIGVycm9yc1xuICAgICAgICBlcnJvciA9IGZhbHNlXG5cbiAgICAgICAgIyBmaW5kIGVycm9yc1xuICAgICAgICBpZiBhdHRyc1sgc2VydmljZS5pZCArICdUeXBlJyBdP1xuICAgICAgICAgIHN3aXRjaCBhdHRyc1sgc2VydmljZS5pZCArICdUeXBlJyBdXG4gICAgICAgICAgICB3aGVuICdnbG9iYWwnXG4gICAgICAgICAgICAgIGlmIG5vdCBhdHRyc1sgc2VydmljZS5pZCArICdRdWVyeScgXT8gb3IgYXR0cnNbIHNlcnZpY2UuaWQgKyAnUXVlcnknIF0gaXMgJydcbiAgICAgICAgICAgICAgICBlcnJvciA9IHRydWVcblxuICAgICAgICBlcnJvcnNbIHNlcnZpY2UuaWQgXSA9IGVycm9yXG5cblxuICAgICAgIyBjaGVjayBpZiB0aGVyZSBpcyBhdCBsZWFzdCBhIHZhbGlkIHNlYXJjaFxuICAgICAgdmFsaWRTZWFyY2hGb3VuZCA9IGZhbHNlXG4gICAgICBfLmVhY2ggZXJyb3JzLCAoZXJyb3IpIC0+XG4gICAgICAgIGlmIGVycm9yIGlzIGZhbHNlXG4gICAgICAgICAgdmFsaWRTZWFyY2hGb3VuZCA9IHRydWVcblxuXG4gICAgICAjIHJldHVybiBudWxsIGlmIG5vIGVycm9ycyB3ZXJlIGZvdW5kXG4gICAgICBpZiB2YWxpZFNlYXJjaEZvdW5kXG4gICAgICAgIGVycm9ycyA9IG51bGxcblxuICAgICAgZXJyb3JzXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxuQXBwLm1vZHVsZSAnU1NTZWFyY2gnLCAoU1NTZWFyY2gsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgU1NTZWFyY2guQ29udHJvbGxlcnMgPSB7fVxuICBTU1NlYXJjaC5Nb2RlbHMgPSB7fVxuICBTU1NlYXJjaC5Db2xsZWN0aW9ucyA9IHt9XG4gIFNTU2VhcmNoLlZpZXdzID0ge31cbiAgU1NTZWFyY2guTGF5b3V0cyA9IHt9XG4gIFNTU2VhcmNoLlJvdXRlcnMgPSB7fVxuICBTU1NlYXJjaC5UZW1wbGF0ZXMgPSB7fVxuXG4gIFNTU2VhcmNoLnZlbnQgPSBuZXcgQmFja2JvbmUuV3JlcXIuRXZlbnRBZ2dyZWdhdG9yKClcbiAgU1NTZWFyY2guY29tbWFuZHMgPSBuZXcgQmFja2JvbmUuV3JlcXIuQ29tbWFuZHMoKVxuICBTU1NlYXJjaC5yZXFyZXMgPSBuZXcgQmFja2JvbmUuV3JlcXIuUmVxdWVzdFJlc3BvbnNlKClcblxuIiwiLy8gaGJzZnkgY29tcGlsZWQgSGFuZGxlYmFycyB0ZW1wbGF0ZVxudmFyIEhhbmRsZWJhcnNDb21waWxlciA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFyc0NvbXBpbGVyLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBidWZmZXIgPSBcIiAgPGRpdiBjbGFzcz1cXFwic3Mtc2VhcmNoLXNlcnZpY2Utd3JhcHBlciBcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmlkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGRhdGEtc2VhcmNoX3R5cGU9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudHlwZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudHlwZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ0eXBlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxuXFxuXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hdXRoZW50aWNhdGVkIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDIsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSg2LCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIlxcbiAgPC9kaXY+XFxuXFxuICA8IS0tIE1PQklMRSAtLT5cXG5cIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmF1dGhlbnRpY2F0ZWQgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oOSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5ub29wLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiICAgIDwvZGl2PjwhLS0gZW5kIE1PQklMRSAtLT5cXG4gIDwvZGl2PjwhLS0gLnNlYXJjaC1maWVsZHMgLS0+XFxuXFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGJ1ZmZlciA9IFwiXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJzcy1zZWFyY2gtYm94LWljb24gXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj48aSBjbGFzcz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pY29uQ2xhc3MgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmljb25DbGFzcyA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJpY29uQ2xhc3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj48L2k+PC9zcGFuPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzcy1zZWFyY2gtdHlwZSBzcy1zZWFyY2gtZmllbGRcXFwiPlxcbiAgICAgIDxzZWxlY3QgbmFtZT1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiVHlwZVxcXCIgZGF0YS1zZXJ2aWNlX3NlbGVjdD1cXFwidHdpdHRlclxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcblwiO1xuICBzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50eXBlcyA6IGRlcHRoMCksIHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDMsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIiAgICAgIDwvc2VsZWN0PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwic3Mtc2VhcmNoLXF1ZXJ5IHNzLXNlYXJjaC1maWVsZFxcXCI+XFxuICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlF1ZXJ5XFxcIiBjbGFzcz1cXFwiaW5wdXQgc2VhcmNoLWJhciBcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmlkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCItc2VhcmNoIHNlbGVjdGl6ZWRcXFwiIHBsYWNlaG9sZGVyPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnBsYWNlaG9sZGVyIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wbGFjZWhvbGRlciA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJwbGFjZWhvbGRlclwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIHRhYmluZGV4PVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRhYmluZGV4IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50YWJpbmRleCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ0YWJpbmRleFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIHZhbHVlPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnF1ZXJ5IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5xdWVyeSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJxdWVyeVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIC8+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBjbGFzcz1cXFwic3Mtc2VhcmNoLWJveC1yZW1vdmVcXFwiIGRhdGEtc2VydmljZT1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj48aSBjbGFzcz1cXFwic3MtaWNvbi1jbG9zZVxcXCI+PC9pPjwvYT5cXG5cXG4gICAgPGlucHV0IG5hbWU9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlVzZXJcXFwiIHR5cGU9XFxcImhpZGRlblxcXCIgdmFsdWU9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYndfYWNjb3VudF9pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYndfYWNjb3VudF9pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJid19hY2NvdW50X2lkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxuXFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGJ1ZmZlciA9IFwiICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnZhbHVlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC52YWx1ZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ2YWx1ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIFwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VsZWN0ZWQgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oNCwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5ub29wLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubGFiZWwgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxhYmVsIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImxhYmVsXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvb3B0aW9uPlxcblwiO1xufSxcIjRcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcInNlbGVjdGVkPVxcXCJzZWxlY3RlZFxcXCJcIjtcbiAgfSxcIjZcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBidWZmZXIgPSBcIlxcbiAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBjbGFzcz1cXFwic3Mtc29jaWFsLWF1dGgtYm94XFxcIiBkYXRhLXNlcnZpY2U9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInNzLXNvY2lhbC1hdXRoLWJveC1pY29uXFxcIj48aSBjbGFzcz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pY29uQ2xhc3MgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmljb25DbGFzcyA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJpY29uQ2xhc3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj48L2k+PC9zcGFuPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzcy1zb2NpYWwtYXV0aC1ib3gtdGV4dFxcXCI+K0FkZCBcIjtcbiAgc3RhY2sxID0gKChoZWxwZXJzLnRvVGl0bGVDYXNlIHx8IChkZXB0aDAgJiYgZGVwdGgwLnRvVGl0bGVDYXNlKSB8fCBoZWxwZXJNaXNzaW5nKS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwge1wibmFtZVwiOlwidG9UaXRsZUNhc2VcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDcsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSkpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCI8L3NwYW4+XFxuICAgIDwvYT5cXG5cXG5cIjtcbn0sXCI3XCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCJcIjtcbn0sXCI5XCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbiwgYnVmZmVyID0gXCIgICAgPGRpdiBjbGFzcz1cXFwic3Mtc2VhcmNoLW1vYmlsZS13cmFwcGVyXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwic3Mtc2VhcmNoLWJveC1pY29uIFwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+PGkgY2xhc3M9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWNvbkNsYXNzIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pY29uQ2xhc3MgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiaWNvbkNsYXNzXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+PC9pPjwvc3Bhbj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzcy1tb2JpbGUtc2VhcmNoLWJveFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcy1tb2JpbGUtcXVlcnlcXFwiPlxcblwiO1xuICBzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5leHBsb2RlUXVlcnkgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxMCwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5ub29wLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cIjtcbn0sXCIxMFwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIGxhbWJkYT10aGlzLmxhbWJkYSwgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzcy1tb2JpbGUtcXVlcnktdGVybVxcXCI+XCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24obGFtYmRhKGRlcHRoMCwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiO1xufSxcIjEyXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbiwgYnVmZmVyID0gXCIgICAgPGRpdiBjbGFzcz1cXFwidmlldy1zdHJlYW0tYWN0aW9uc1xcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInNzLXNlYXJjaC1hY3Rpb24tdGV4dFxcXCI+IFlvdXIgc3RyZWFtIGlzIG5vdyBsaXZlLiBDaGVjayBpdCBvdXQuIDwvc3Bhbj5cXG4gICAgICA8YSBocmVmPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnB1YmxpY19wYWdlX3VybCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucHVibGljX3BhZ2VfdXJsIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcInB1YmxpY19wYWdlX3VybFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gc2VlLXlvdXItc3RyZWFtLWJ0biBidG4tbGdcXFwiPlNFRSBZT1VSIFNUUkVBTTwvYT5cXG5cXG5cIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRpbWVfdG9fbmV4dF9jcm9uIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEzLCBkYXRhKSxcImludmVyc2VcIjp0aGlzLm5vb3AsXCJkYXRhXCI6ZGF0YX0pO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCIgICAgPC9kaXY+PCEtLSAudmlldy1zdHJlYW0tYWN0aW9ucyAtLT5cXG5cIjtcbn0sXCIxM1wiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuICByZXR1cm4gXCIgICAgICA8cD5OZXcgY29udGVudCB3aWxsIGJlIGxvYWRlZCBldmVyeSAxNSBtaW51dGVzICg8c3BhbiBjbGFzcz1cXFwidGltZS10by1jcm9uXFxcIj5cIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpbWVfdG9fbmV4dF9jcm9uIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aW1lX3RvX25leHRfY3JvbiA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ0aW1lX3RvX25leHRfY3JvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+IHRvIGdvKS4gTmVlZCBtb3JlIGZyZXF1ZW50IHVwZGF0ZXM/IDxhIGhyZWY9XFxcImh0dHA6Ly9zb2NpYWxzdHJlYW1zLmNvbS9nZXQtcHJvL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPmdvIHByZW1pdW0gJnJhcXVvPC9hPjwvcD5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCI8ZGl2IGNsYXNzPVxcXCJzcy1zZWFyY2gtZmllbGRzXFxcIj5cXG5cXG5cIjtcbiAgc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VydmljZXMgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhKSxcImludmVyc2VcIjp0aGlzLm5vb3AsXCJkYXRhXCI6ZGF0YX0pO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICBidWZmZXIgKz0gXCJcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+PC9zcGFuPlxcblxcbjxkaXYgY2xhc3M9XFxcInNzLXN0aWNreS1iYXIgc3Mtc2VhcmNoLWFjdGlvbnNcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwic3Mtc2VhcmNoLWFjdGlvbnMtaW5uZXJcXFwiPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwdWJsaXNoLXN0cmVhbS1hY3Rpb25zXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwic3Mtc2VhcmNoLWFjdGlvbi10ZXh0XFxcIj4gVGhpcyBpcyBqdXN0IGEgcHJldmlldy4gQ2xpY2sgUHVibGlzaCB0byBzYXZlIGNoYW5nZXMuIDwvc3Bhbj5cXG4gICAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIHB1Ymxpc2gtc3RyZWFtLWJ0biBidG4tbGdcXFwiPlBVQkxJU0g8L2E+XFxuICAgIDwvZGl2PjwhLS0gLnB1Ymxpc2gtc3RyZWFtIC0tPlxcblxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwic3Mtc2VhcmNoLWFjdGlvbnMgbm9uLXN0aWNreVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJzcy1zZWFyY2gtYWN0aW9ucy1pbm5lclxcXCI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInNlYXJjaC1zdHJlYW0tYWN0aW9uc1xcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInNzLXNlYXJjaC1hY3Rpb24tdGV4dFxcXCI+IENsaWNrIHRvIHByZXZpZXcgeW91ciBzZWFyY2guIDwvc3Bhbj5cXG4gICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIHNlYXJjaC1idG4gYnRuLWxnXFxcIiB0YWJpbmRleD1cXFwiM1xcXCIgdmFsdWU9XFxcIlBSRVZJRVdcXFwiIC8+XFxuICAgIDwvZGl2PjwhLS0gLnNlYXJjaC1zdHJlYW0gLS0+XFxuXFxuXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wdWJsaWNfcGFnZV91cmwgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMTIsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcbiAgPC9kaXY+PCEtLSAuc3Mtc2VhcmNoLWFjdGlvbnMtaW5uZXIgLS0+XFxuPC9kaXY+PCEtLSAuc3Mtc2VhcmNoLWFjdGlvbnMgLS0+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuYWxlcnRpZnkgPSByZXF1aXJlICdhbGVydGlmeSdcblxuQXBwLm1vZHVsZSAnU1NTZWFyY2gnLCAoU1NTZWFyY2gsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NTZWFyY2guVmlld3MuU2VhcmNoSXRlbVZpZXcgZXh0ZW5kcyBBcHAuVmlld3MuQmFzZUl0ZW1WaWV3XG5cbiAgICB0YWdOYW1lOiAnZm9ybSdcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi4vVGVtcGxhdGVzL1NlYXJjaEl0ZW1WaWV3VGVtcGxhdGUnKVxuXG4gICAgZXZlbnRzOlxuICAgICAgJ3N1Ym1pdCc6ICdvblN1Ym1pdCdcbiAgICAgICdjaGFuZ2Ugc2VsZWN0JzogJ29uQ2hhbmdlJ1xuICAgICAgJ2NsaWNrIC5wdWJsaXNoLXN0cmVhbS1idG4nOiAnb25QdWJsaXNoJ1xuICAgICAgJ2NsaWNrIC5zcy1zb2NpYWwtYXV0aC1ib3gnOiAnbG9naW4nXG4gICAgICAnY2xpY2sgLnNzLXNlYXJjaC1ib3gtcmVtb3ZlJzogJ2xvZ291dCdcblxuXG4gICAgY2xhc3NOYW1lOiAtPlxuICAgICAgYWN0aW9uID0gIEBtb2RlbC5nZXQoJ2FjdGlvbicpXG4gICAgICBpZiBub3QgYWN0aW9uPyBvciBhY3Rpb24gaXMgJydcbiAgICAgICAgYWN0aW9uID0gJ25vbmUnXG5cbiAgICAgICdzcy1zZWFyY2ggc3Mtc2VhcmNoLWFjdGlvbi0nICsgYWN0aW9uXG5cblxuICAgIGF0dHJpYnV0ZXM6IC0+XG4gICAgICBhY3Rpb246IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICdzc19hcGlfdXJsJ1xuXG5cbiAgICBpbml0aWFsaXplOiA9PlxuXG4gICAgICBAbGlzdGVuVG8gQG1vZGVsLCAnY2hhbmdlOmFjdGlvbicsIEBvbkNoYW5nZUFjdGlvblxuICAgICAgQGxpc3RlblRvIEBtb2RlbCwgJ2NoYW5nZTpzZWFyY2gnLCBAb25DaGFuZ2VTZWFyY2hcbiAgICAgIEBsaXN0ZW5UbyBAbW9kZWwsICdpbnZhbGlkJywgQG9uVmFsaWRhdGlvbkVycm9yXG5cblxuICAgIG9uQ2hhbmdlQWN0aW9uOiA9PlxuXG4gICAgICAjIHJlLWV2YWx1YXRlIGVsZW1lbnQgY2xhc3NcbiAgICAgIEAkZWwuYXR0ciAnY2xhc3MnLCBfLnJlc3VsdCggQCwgJ2NsYXNzTmFtZScgKVxuXG4gICAgICAjIHVuc2V0IGxvYWRpbmcgY2xhc3NcbiAgICAgIEB0b2dnbGVMb2FkaW5nQ2xhc3MgJy5zZWFyY2gtYnRuLCAucHVibGlzaC1zdHJlYW0tYnRuJywgZmFsc2VcblxuXG5cbiAgICBvblJlbmRlcjogLT5cblxuICAgICAgI1xuICAgICAgIyBUdXJuIHNlYXJjaCBmaWVsZHMgaW50byBzZWxlY3RpemUgZmllbGRzXG4gICAgICAjXG4gICAgICAjIFR3aXR0ZXJcbiAgICAgICNcbiAgICAgIEAkKCcudHdpdHRlciAuc3Mtc2VhcmNoLXF1ZXJ5IGlucHV0Jykuc2VsZWN0aXplXG4gICAgICAgIHBsdWdpbnM6IFsncmVzdG9yZV9vbl9iYWNrc3BhY2UnLCdzZWxlY3RpemUtdGFiLXNlcGFyYXRvcicsICdzZWxlY3RpemUtYmxhY2tsaXN0ZWQtY2hhcnMnXVxuICAgICAgICBibGFja2xpc3RlZENoYXJzOiBbXVxuICAgICAgICB0YWJUcmlnZ2VyczogWzMyLCAxODhdXG4gICAgICAgIGRlbGltaXRlcjogJyBPUiAnXG4gICAgICAgIG1heEl0ZW1zOiAzXG4gICAgICAgIGNyZWF0ZU9uQmx1cjogdHJ1ZVxuICAgICAgICBsYWJlbEZpZWxkOiBcInF1ZXJ5XCJcbiAgICAgICAgdmFsdWVGaWVsZDogXCJxdWVyeVwiXG4gICAgICAgIHNvcnRGaWVsZDogJ3F1ZXJ5J1xuICAgICAgICBzZWFyY2hGaWVsZDogJ3F1ZXJ5J1xuICAgICAgICBjcmVhdGU6IHRydWVcbiAgICAgICAgcGVyc2lzdDogZmFsc2VcbiAgICAgICAgb25DaGFuZ2U6IEBvbkNoYW5nZVxuXG5cbiAgICAgICNcbiAgICAgICMgSW5zdGFncmFtXG4gICAgICAjXG4gICAgICBAJCgnLmluc3RhZ3JhbSAuc3Mtc2VhcmNoLXF1ZXJ5IGlucHV0Jykuc2VsZWN0aXplXG4gICAgICAgIHBsdWdpbnM6IFsncmVzdG9yZV9vbl9iYWNrc3BhY2UnLCdzZWxlY3RpemUtdGFiLXNlcGFyYXRvcicsICdzZWxlY3RpemUtYmxhY2tsaXN0ZWQtY2hhcnMnXVxuICAgICAgICBibGFja2xpc3RlZENoYXJzOiBbJ0AnXVxuICAgICAgICB0YWJUcmlnZ2VyczogWzMyLCAxODhdXG4gICAgICAgIGRlbGltaXRlcjogJywnXG4gICAgICAgIG1heEl0ZW1zOiAxXG4gICAgICAgIGNyZWF0ZU9uQmx1cjogdHJ1ZVxuICAgICAgICBsYWJlbEZpZWxkOiBcInF1ZXJ5XCJcbiAgICAgICAgdmFsdWVGaWVsZDogXCJxdWVyeVwiXG4gICAgICAgIHNvcnRGaWVsZDogJ3F1ZXJ5J1xuICAgICAgICBzZWFyY2hGaWVsZDogJ3F1ZXJ5J1xuICAgICAgICBjcmVhdGU6IHRydWVcbiAgICAgICAgcGVyc2lzdDogZmFsc2VcbiAgICAgICAgb25DaGFuZ2U6IEBvbkNoYW5nZVxuXG5cbiAgICAgICNIYWNrIHNlbGVjdGl6ZSB0byBkaXNwbGF5IHRhZ3Mgb24gc2luZ2xlIHNlYXJjaCBmaWVsZFxuICAgICAgaW5zdGFIYWNrID0gQCQoJy5pbnN0YWdyYW0gLnNzLXNlYXJjaC1xdWVyeSBpbnB1dCwgLnNlbGVjdGl6ZS1jb250cm9sJylcbiAgICAgIGluc3RhSGFjay5yZW1vdmVDbGFzcyAnc2luZ2xlJ1xuICAgICAgaW5zdGFIYWNrLmFkZENsYXNzICdtdWx0aSdcblxuXG4gICAgICAjIGNvbnNvbGUubG9nIEAkKCcuc2VsZWN0aXplLWlucHV0Lm5vdC1mdWxsJylbMF1cbiAgICAgICMgc2V0IGluaXRpYWwgd2lkdGggZm9yIG5vbi1lbXB0eSBmaWVsZHNcbiAgICAgIEAkKCcuc2VsZWN0aXplLWlucHV0Lml0ZW1zOm5vdCguaGFzLWl0ZW1zKSBpbnB1dCcpLmNzc1xuICAgICAgICB3aWR0aDogJzEwMCUnXG5cbiAgICAgICMgaW5pdGlhbGl6ZSBjdXN0b20gc2VsZWN0XG4gICAgICBAJCgnc2VsZWN0JykuY3VzdG9tU2VsZWN0KClcblxuICAgICAgIyBpbml0aWFsaXplIHN0aWNreSBiYXJzXG4gICAgICBAJCgnLnNzLXN0aWNreS1iYXInKS5zdGlja3lcbiAgICAgICAgdG9wU3BhY2luZzogMzJcblxuXG4gICAgZ2V0VmFsdWVzOiA9PlxuXG4gICAgICBkYXRhID0ge31cblxuICAgICAgQCQoJ1tuYW1lXScpLmVhY2ggKGluZGV4LCBpbnB1dCkgLT5cblxuICAgICAgICBuYW1lID0gJChpbnB1dCkuYXR0cignbmFtZScpXG5cbiAgICAgICAgaWYgJChpbnB1dCkuaXMoJ3NlbGVjdCcpXG4gICAgICAgICAgdmFsdWUgPSAkKGlucHV0KS52YWwoKVxuXG4gICAgICAgIGVsc2UgaWYgJChpbnB1dCkuaXMoJ2lucHV0JylcbiAgICAgICAgICB2YWx1ZSA9ICQoaW5wdXQpLnZhbCgpXG5cbiAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlXG5cbiAgICAgIGRhdGFcblxuXG4gICAgb25DaGFuZ2U6IChldmVudCkgPT5cblxuICAgICAgIyBzZXQgdGhlIGFjdGlvbiBiYWNrIHRvICdzZWFyY2gnXG4gICAgICBAbW9kZWwuc2V0XG4gICAgICAgIGFjdGlvbjogJ3NlYXJjaCdcblxuICAgICAgIyBVcGRhdGUgdGhlIHNlYXJjaCB0eXBlIGRhdGEgYXR0cmlidXRlc1xuICAgICAgdmFsdWVzID0gQGdldFZhbHVlcygpXG4gICAgICBfLmVhY2ggQG1vZGVsLmdldCgnc2VydmljZXMnKSwgKHNlcnZpY2UpIC0+XG5cbiAgICAgICAgc2VhcmNoVHlwZSA9ICcnXG4gICAgICAgIGlmIHZhbHVlc1sgc2VydmljZS5pZCArICdUeXBlJyBdP1xuICAgICAgICAgIHNlYXJjaFR5cGUgPSB2YWx1ZXNbIHNlcnZpY2UuaWQgKyAnVHlwZScgXVxuXG4gICAgICAgIEAkKCcuc3Mtc2VhcmNoLXNlcnZpY2Utd3JhcHBlci4nICsgc2VydmljZS5pZCkuYXR0ciAnZGF0YS1zZWFyY2hfdHlwZScsIHNlYXJjaFR5cGVcblxuICAgICAgLCBAXG5cblxuICAgIG9uU3VibWl0OiAoZXZlbnQpID0+XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgaWYgQGxvYWRpbmc/IGFuZCBAbG9hZGluZyBpcyB0cnVlXG4gICAgICAgIHJldHVyblxuXG4gICAgICAjIGNsZWFyIGFsbCB2YWxpZGF0aW9uIGVycm9yc1xuICAgICAgQCQoJy5zcy1lcnJvcicpLnJlbW92ZUNsYXNzICdzcy1lcnJvcidcblxuICAgICAgdmFsdWVzID0gQGdldFZhbHVlcygpXG5cbiAgICAgICMgZm9yY2Utc2V0IHRoZSBzZWFyY2ggZmxhZ1xuICAgICAgdmFsdWVzLnNlYXJjaCA9IHRydWVcbiAgICAgIEBtb2RlbC5zZXRcbiAgICAgICAgc2VhcmNoOiBmYWxzZVxuICAgICAgLFxuICAgICAgICBzaWxlbnQ6IHRydWVcblxuXG4gICAgICBAbW9kZWwuc2V0IHZhbHVlcyxcbiAgICAgICAgdmFsaWRhdGU6IHRydWVcblxuXG4gICAgICAjIHJlc2V0IHRyYXNoIHRvZ2dsZSBpbiB0aGUgaGVhZGVyIGlmIHNldFxuICAgICAgaWYgQXBwLlNTQWRtaW4/XG4gICAgICAgIEFwcC5TU0FkbWluLmNvbW1hbmRzLmV4ZWN1dGUgJ3Jlc2V0VHJhc2hUb2dnbGUnXG5cbiAgICAgICMgIyBNSVhQQU5FTCBUUkFDS1xuICAgICAgIyBpZiB3aW5kb3cubWl4cGFuZWw/XG4gICAgICAjICAgd2luZG93Lm1peHBhbmVsLnRyYWNrIFwiU2VhcmNoXCIsXG4gICAgICAjICAgICBcIkluc3RhZ3JhbSBUeXBlXCI6IHZhbHVlcy5pbnN0YWdyYW1UeXBlXG4gICAgICAjICAgICBcIkluc3RhZ3JhbSBTZWFyY2hcIjogdmFsdWVzLmluc3RhZ3JhbVF1ZXJ5XG4gICAgICAjICAgICBcIkluc3RhZ3JhbSBVc2VyXCI6IHZhbHVlcy5pbnN0YWdyYW1Vc2VyXG4gICAgICAjICAgICBcIlR3aXR0ZXIgVHlwZVwiOiB2YWx1ZXMudHdpdHRlclR5cGVcbiAgICAgICMgICAgIFwiVHdpdHRlciBTZWFyY2hcIjogdmFsdWVzLnR3aXR0ZXJRdWVyeVxuICAgICAgIyAgICAgXCJUd2l0dGVyIFVzZXJcIjogdmFsdWVzLnR3aXR0ZXJVc2VyXG5cblxuXG4gICAgICAjICAgd2luZG93Lm1peHBhbmVsLnBlb3BsZS5zZXQoXG4gICAgICAjICAgICBcIkluc3RhZ3JhbSBVc2VyXCI6IHZhbHVlcy5pbnN0YWdyYW1Vc2VyXG4gICAgICAjICAgICBcIlR3aXR0ZXIgVXNlclwiOiB2YWx1ZXMudHdpdHRlclVzZXJcbiAgICAgICMgICApXG5cbiAgICAgIGZhbHNlXG5cblxuXG4gICAgb25DaGFuZ2VTZWFyY2g6IChtb2RlbCkgPT5cblxuICAgICAgaWYgbm90IEFwcC5TU1Bvc3RzP1xuICAgICAgICByZXR1cm5cblxuICAgICAgIyBzZXQgbG9hZGluZyBjbGFzc1xuICAgICAgQHRvZ2dsZUxvYWRpbmdDbGFzcyAnLnNlYXJjaC1idG4nLCB0cnVlXG5cbiAgICAgIEFwcC5TU1Bvc3RzLmNvbW1hbmRzLmV4ZWN1dGUgJ2ZldGNoQXBpUG9zdHMnLFxuICAgICAgICBzZWFyY2g6IEBnZXRWYWx1ZXMoKVxuICAgICAgLFxuICAgICAgICBzdWNjZXNzOiA9PlxuXG4gICAgICAgICAgQG1vZGVsLnNldFxuICAgICAgICAgICAgYWN0aW9uOiAncHVibGlzaCdcblxuXG4gICAgdG9nZ2xlTG9hZGluZ0NsYXNzOiAoZWwsIGxvYWRpbmcpID0+XG5cbiAgICAgICRlbCA9IEAkKGVsKVxuXG4gICAgICBpZiAkZWwubGVuZ3RoIGlzIDBcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGlmIG5vdCBsb2FkaW5nP1xuICAgICAgICBsb2FkaW5nID0gJGVsLmZpcnN0KCkuaGFzQ2xhc3MoJ2xvYWRpbmcnKVxuXG4gICAgICAjIHRvZ2dsZSBjbGFzc1xuICAgICAgJGVsLnRvZ2dsZUNsYXNzICdsb2FkaW5nJywgbG9hZGluZ1xuXG4gICAgICAjIHdlIGFsc28gc2V0IGEgbG9hZGluZyBmbGFnIHRvIHRoZSB2aWV3XG4gICAgICAjIHNvIHdlIGRvbid0IHJpc2sgdG8gc3VibWl0IG11bHRpcGxlIHRpbWVzXG4gICAgICBAbG9hZGluZyA9IGxvYWRpbmdcblxuICAgICAgJGVsLmVhY2ggKGluZGV4LCBlbGVtZW50KSAtPlxuXG4gICAgICAgICMgc2F2ZSBkYXRhIGF0dHJpYnV0ZSB3aXRoIHZhbHVlIGlmIG5vdCBhbHJlYWR5IHNldFxuICAgICAgICB0ZXh0ID0gJChlbGVtZW50KS5hdHRyICdkYXRhLXRleHQnXG5cbiAgICAgICAgaWYgbm90IHRleHQ/IG9yIHRleHQgaXMgJydcbiAgICAgICAgICBpZiAkKGVsZW1lbnQpLmlzKCdpbnB1dCcpXG4gICAgICAgICAgICB0ZXh0ID0gJChlbGVtZW50KS5hdHRyICd2YWx1ZSdcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0ZXh0ID0gJChlbGVtZW50KS5odG1sKClcblxuICAgICAgICAgICQoZWxlbWVudCkuYXR0ciAnZGF0YS10ZXh0JywgdGV4dFxuXG5cbiAgICAgICAgaWYgbG9hZGluZ1xuXG4gICAgICAgICAgaWYgJChlbGVtZW50KS5pcygnaW5wdXQnKVxuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyICd2YWx1ZScsICdMb2FkaW5nLi4uJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRleHQgPSAkKGVsZW1lbnQpLmh0bWwgJ0xvYWRpbmcuLi4nXG5cbiAgICAgICAgZWxzZVxuXG4gICAgICAgICAgaWYgJChlbGVtZW50KS5pcygnaW5wdXQnKVxuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyICd2YWx1ZScsIHRleHRcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAkKGVsZW1lbnQpLmh0bWwgdGV4dFxuXG5cblxuXG5cbiAgICBvblB1Ymxpc2g6IChldmVudCkgPT5cblxuXG5cbiAgICAgICNcbiAgICAgICNTRVQgTUVTU0FHRSBGT1IgUFJPTVBUXG4gICAgICAjXG4gICAgICBtb2RlcmF0aW9uID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAnb3B0aW9uJywgJ21vZGVyYXRpb24nXG5cbiAgICAgIG1lc3NhZ2UgPSAnPGgxPjxpIGNsYXNzPVwic3MtaWNvbi13YXJuaW5nXCI+PC9pPjwvaDE+J1xuICAgICAgbWVzc2FnZSArPSAnPGgzPlB1Ymxpc2hpbmcgd2lsbCBtYWtlIGFsbCBhcHByb3ZlZCBwb3N0cyBwdWJsaWMuPC9oMz4nXG5cbiAgICAgIGlmIEBsZW5ndGggPCAxXG4gICAgICAgIG1lc3NhZ2UgPSAnPGgzPllvdSBkb25cXCd0IHNlZW0gdG8gaGF2ZSBhbnkgcG9zdHMgcmVhZHkgdG8gcHVibGlzaC48L2gzPidcblxuICAgICAgZWxzZSBpZiBtb2RlcmF0aW9uXG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgJzxwPkFsbCBmdXR1cmUgcG9zdHMgd2lsbCBuZWVkIHRvIGJlIG1vZGVyYXRlZCBiZWZvcmUgdGhleSBhcHBlYXIgb24geW91ciBTb2NpYWwgU3RyZWFtLiBDb25zaWRlciB0dXJuaW5nIEF1dG8tQXBwcm92ZSA8c3Ryb25nPk9OPC9zdHJvbmc+PC9wPidcblxuICAgICAgZWxzZSBpZiAhbW9kZXJhdGlvblxuICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSArICc8cD5BbGwgZnV0dXJlIHBvc3RzIHdpbGwgYmUgYXV0b21hdGljYWxseSBhZGRlZCB0byB5b3VyIFNvY2lhbCBTdHJlYW0uPC9wPidcblxuXG5cbiAgICAgICNcbiAgICAgICNESVNQTEFZIENPTkZJUk0gTUVTU0FHRVxuICAgICAgI1xuICAgICAgY29uZmlybUJveCA9IGFsZXJ0aWZ5LmNvbmZpcm0gJycsIG1lc3NhZ2VcbiAgICAgICwgPT5cbiAgICAgICAgQHB1Ymxpc2hTdHJlYW0oKVxuICAgICAgLCA9PlxuICAgICAgICBjb25maXJtQm94LmNsb3NlKClcblxuXG5cbiAgICBwdWJsaXNoU3RyZWFtOiA9PlxuXG4gICAgICBpZiBAbG9hZGluZz8gYW5kIEBsb2FkaW5nIGlzIHRydWVcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgICMgc2V0IGxvYWRpbmcgY2xhc3NcbiAgICAgIEB0b2dnbGVMb2FkaW5nQ2xhc3MgJy5wdWJsaXNoLXN0cmVhbS1idG4nLCB0cnVlXG5cbiAgICAgICMgIyBNSVhQQU5FTCBUUkFDS1xuICAgICAgIyBpZiB3aW5kb3cubWl4cGFuZWw/XG4gICAgICAjICAgd2luZG93Lm1peHBhbmVsLnRyYWNrIFwiUHVibGlzaFwiLFxuXG5cbiAgICAgIEFwcC5TU1Bvc3RzLmNvbW1hbmRzLmV4ZWN1dGUgJ3B1Ymxpc2hBcGlQb3N0cydcblxuICAgICAgQG1vZGVsLnNhdmUge30sXG4gICAgICAgIGJhdGNoOiB0cnVlXG4gICAgICAgIGJhdGNoU3VjY2VzczogPT5cblxuICAgICAgICAgICMgcmVsb2FkIHRoZSBwYWdlIGlmIHRoZSBwYWdlIGlzIG5vdCBkZWZpbmVkXG4gICAgICAgICAgcHVibGljX3BhZ2VfdXJsID0gQG1vZGVsLmdldCgncHVibGljX3BhZ2VfdXJsJylcbiAgICAgICAgICBpZiBub3QgcHVibGljX3BhZ2VfdXJsPyBvciBwdWJsaWNfcGFnZV91cmwgaXMgJydcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICBAbW9kZWwuc2V0XG4gICAgICAgICAgICBhY3Rpb246ICd2aWV3J1xuXG4gICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZVxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgICAgLCA0MDAsICdlYXNpZUVhc2VJbk91dCdcblxuICAgICAgICAgIEFwcC5TU1Bvc3RzLmNvbW1hbmRzLmV4ZWN1dGUgJ2ZldGNoU2VydmVyUG9zdHMnLFxuICAgICAgICAgICAgc3RhdHVzOiBbJ3B1Ymxpc2gnLCAnZHJhZnQnXVxuXG5cblxuXG5cbiAgICBvblZhbGlkYXRpb25FcnJvcjogKG1vZGVsLCBlcnJvcnMpID0+XG5cbiAgICAgIGNvbnNvbGUubG9nICdvblZhbGlkYXRpb25FcnJvcidcblxuICAgICAgXy5lYWNoIGVycm9ycywgKGVycm9yLCBzZXJ2aWNlKSAtPlxuICAgICAgICBAJCgnLnNzLXNlYXJjaC1zZXJ2aWNlLXdyYXBwZXIuJyArIHNlcnZpY2UpLmFkZENsYXNzICdzcy1lcnJvcidcbiAgICAgICwgQFxuXG5cbiAgICBsb2dpbjogKGV2ZW50KSA9PlxuXG4gICAgICBpZiBub3QgQXBwLlNTQXV0aD9cbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIEFwcC5TU0F1dGguY29tbWFuZHMuZXhlY3V0ZSAnbG9naW4nLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2RhdGEtc2VydmljZScpXG5cblxuXG4gICAgbG9nb3V0OiAoZXZlbnQpID0+XG5cbiAgICAgIGlmIG5vdCBBcHAuU1NBdXRoP1xuICAgICAgICByZXR1cm5cblxuICAgICAgc2VydmljZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnc2VydmljZScpXG5cbiAgICAgIGFsZXJ0aWZ5LmNvbmZpcm0gJycsJzxoMT48aSBjbGFzcz1cInNzLWljb24td2FybmluZ1wiPjwvaT48L2gxPjxoMz5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIDxzcGFuIHN0eWxlPVwidGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcIj48c3Ryb25nPicgKyAgc2VydmljZSArICc8L3N0cm9uZz48L3NwYW4+IGZyb20geW91ciBTb2NpYWwgU3RyZWFtPzwvaDM+J1xuICAgICAgLCA9PlxuICAgICAgICBBcHAuU1NBdXRoLmNvbW1hbmRzLmV4ZWN1dGUgJ2xvZ291dCcsICQoZXZlbnQuY3VycmVudFRhcmdldCkuYXR0cignZGF0YS1zZXJ2aWNlJylcbiAgICAgICwgPT5cblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxucmVxdWlyZSAnLi9TU1NlYXJjaCdcblxuIyBNb2RlbHNcbnJlcXVpcmUgJy4vTW9kZWxzL1NlYXJjaE1vZGVsJ1xuXG4jIFZpZXdzXG5yZXF1aXJlICcuL1ZpZXdzL1NlYXJjaEl0ZW1WaWV3J1xuXG4jIENvbnRyb2xsZXJzXG5yZXF1aXJlICcuL0NvbnRyb2xsZXJzL1NlYXJjaENvbnRyb2xsZXInXG5cblxuQXBwLm1vZHVsZSAnU1NTZWFyY2gnLCAoU1NTZWFyY2gsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgU1NTZWFyY2guYWRkSW5pdGlhbGl6ZXIgLT5cblxuICAgIGNvbnRyb2xsZXIgPSBuZXcgU1NTZWFyY2guQ29udHJvbGxlcnMuU2VhcmNoQ29udHJvbGxlclxuXG4gICAgIyMjXG4gICAgRGVmaW5lIE1vZHVsZSBBUElcbiAgICAjIyNcbiAgICBTU1NlYXJjaC5jb21tYW5kcy5zZXRIYW5kbGVyICdzZXRBY3Rpb24nLCBjb250cm9sbGVyLnNldEFjdGlvblxuICAgIFNTU2VhcmNoLnJlcXJlcy5zZXRIYW5kbGVyICdhY3Rpb24nLCBjb250cm9sbGVyLmdldEFjdGlvblxuICAgIFNTU2VhcmNoLnJlcXJlcy5zZXRIYW5kbGVyICdzZWFyY2hNb2RlbCcsIGNvbnRyb2xsZXIuZ2V0U2VhcmNoTW9kZWxcbiIsIlwidXNlIHN0cmljdFwiXG5cbkFwcCAgICAgICAgPSByZXF1aXJlIFwiYXBwXCJcbkhhbmRsZWJhcnMgPSByZXF1aXJlIFwiaGJzZnkvcnVudGltZVwiXG5cblxuSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlciAndG9UaXRsZUNhc2UnLCAoc3RyKSAtPlxuICBzdHIucmVwbGFjZSAvXFx3XFxTKi9nLCAodHh0KSAtPlxuICAgIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgICAgICA9IHJlcXVpcmUgXCJhcHBcIlxuQmFja2JvbmUgPSByZXF1aXJlIFwiYmFja2JvbmVcIlxuJCAgICAgICAgPSByZXF1aXJlIFwianF1ZXJ5XCJcblxuY2xhc3MgQXBwLlZpZXdzLkJhc2VDb21wb3NpdGVWaWV3IGV4dGVuZHMgQmFja2JvbmUuTWFyaW9uZXR0ZS5Db21wb3NpdGVWaWV3XG5cbiAgcmVuZGVyRnJvbURPTTogKGVsKSA9PlxuXG4gICAgaWYgbm90IGVsP1xuICAgICAgcmV0dXJuIEBcblxuICAgICMgYXNzaWduIGRvbSBlbGVtZW50IHRvIHZpZXdcbiAgICBpZiBlbCBpbnN0YW5jZW9mICRcbiAgICAgIGlmIGVsLmxlbmd0aCA+IDBcbiAgICAgICAgQGVsID0gZWxbMF1cbiAgICBlbHNlXG4gICAgICBAZWwgPSBlbFxuXG4gICAgaWYgbm90IEBlbD9cbiAgICAgIHJldHVybiBAXG5cbiAgICBAJGVsID0gJChlbClcblxuICAgIEBpc1JlbmRlcmVkID0gdHJ1ZVxuICAgIEBpc0Nsb3NlZCA9IGZhbHNlXG4gICAgQHJlc2V0SXRlbVZpZXdDb250YWluZXIoKVxuXG4gICAgQHRyaWdnZXJCZWZvcmVSZW5kZXIoKVxuXG4gICAgQGJpbmRVSUVsZW1lbnRzKClcbiAgICBAdHJpZ2dlck1ldGhvZChcImNvbXBvc2l0ZTptb2RlbDpyZW5kZXJlZFwiKVxuXG4gICAgQF9yZW5kZXJDaGlsZHJlbkZyb21ET00oKVxuXG4gICAgQHRyaWdnZXJNZXRob2QoXCJjb21wb3NpdGU6cmVuZGVyZWRcIilcbiAgICBAdHJpZ2dlclJlbmRlcmVkKClcblxuICAgIEBcblxuXG5cbiAgX3JlbmRlckNoaWxkcmVuRnJvbURPTTogPT5cblxuICAgIGlmIEBjb2xsZWN0aW9uLmxlbmd0aCA+IDBcblxuICAgICAgQGNvbGxlY3Rpb24uZWFjaCAobW9kZWwpIC0+XG5cbiAgICAgICAgZWwgPSBAX2dldENoaWxkVmlld0VsRnJvbU1vZGVsIG1vZGVsXG5cbiAgICAgICAgIyBhc3NpZ24gZG9tIGVsZW1lbnQgdG8gdmlld1xuICAgICAgICBpZiBlbD8gYW5kIGVsIGluc3RhbmNlb2YgJCBhbmQgZWwubGVuZ3RoID4gMFxuICAgICAgICAgIGVsID0gZWxbMF1cblxuICAgICAgICBpZiBub3QgZWw/XG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgdmlldyA9IG5ldyB0aGlzLml0ZW1WaWV3XG4gICAgICAgICAgZWw6IGVsXG4gICAgICAgICAgbW9kZWw6IG1vZGVsXG5cbiAgICAgICAgIyBzZXQgdXAgdGhlIGNoaWxkIHZpZXcgZXZlbnQgZm9yd2FyZGluZ1xuICAgICAgICBAYWRkQ2hpbGRWaWV3RXZlbnRGb3J3YXJkaW5nIHZpZXdcblxuICAgICAgICAjIFN0b3JlIHRoZSBjaGlsZCB2aWV3IGl0c2VsZiBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAgICAgIyByZW1vdmUgYW5kL29yIGNsb3NlIGl0IGxhdGVyXG4gICAgICAgIEBjaGlsZHJlbi5hZGQgdmlld1xuXG4gICAgICAgIHZpZXcudHJpZ2dlck1ldGhvZCAncmVuZGVyJ1xuXG4gICAgICAsIEBcblxuXG5cbiAgX2dldENoaWxkVmlld0VsRnJvbU1vZGVsOiAobW9kZWwpID0+XG5cbiAgICBAJChAaXRlbVZpZXdDb250YWluZXIpLmZpbmQoJ1tkYXRhLWlkPVwiJyArIG1vZGVsLmdldCgnaWQnKSArICdcIl0nKVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgICAgICA9IHJlcXVpcmUgXCJhcHBcIlxuQmFja2JvbmUgPSByZXF1aXJlIFwiYmFja2JvbmVcIlxuJCAgICAgICAgPSByZXF1aXJlIFwianF1ZXJ5XCJcblxuY2xhc3MgQXBwLlZpZXdzLkJhc2VJdGVtVmlldyBleHRlbmRzIEJhY2tib25lLk1hcmlvbmV0dGUuSXRlbVZpZXdcblxuICByZW5kZXJGcm9tRE9NOiAoZWwpID0+XG5cbiAgICBpZiBub3QgZWw/XG4gICAgICByZXR1cm4gQFxuXG4gICAgIyBhc3NpZ24gZG9tIGVsZW1lbnQgdG8gdmlld1xuICAgIGlmIGVsIGluc3RhbmNlb2YgJFxuICAgICAgaWYgZWwubGVuZ3RoID4gMFxuICAgICAgICBAZWwgPSBlbFswXVxuICAgIGVsc2VcbiAgICAgIEBlbCA9IGVsXG5cbiAgICBpZiBub3QgQGVsP1xuICAgICAgcmV0dXJuIEBcblxuICAgIEAkZWwgPSAkKGVsKVxuXG4gICAgQGlzUmVuZGVyZWQgPSB0cnVlXG4gICAgQGlzQ2xvc2VkID0gZmFsc2VcblxuICAgICMgZGVsZWdhdGUgRE9NIGV2ZW50c1xuICAgIEBkZWxlZ2F0ZUV2ZW50cygpXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwICAgICAgID0gcmVxdWlyZSBcImFwcFwiXG5CYWNrYm9uZSAgPSByZXF1aXJlIFwiYmFja2JvbmVcIlxuJCAgICAgICAgID0gcmVxdWlyZSBcImpxdWVyeVwiXG5fICAgICAgICAgPSByZXF1aXJlIFwidW5kZXJzY29yZVwiXG5Nb2Rlcm5penIgPSByZXF1aXJlIFwibW9kZXJuaXpyXCJcblxuXG53aW5kb3dTY3JvbGxIYW5kbGVyVmlld3MgPSB7fVxuXG5cbm9uV2luZG93U2Nyb2xsID0gKGV2ZW50KSAtPlxuXG4gIGZvciBjaWQsIHZpZXcgb2Ygd2luZG93U2Nyb2xsSGFuZGxlclZpZXdzXG5cbiAgICBpZiB2aWV3PyBhbmQgbm90IHZpZXcuaXNDbG9zZWQgYW5kIHZpZXcuZWw/XG4gICAgICB2aWV3LnRyaWdnZXJNZXRob2QgJ3Njcm9sbCcsIGV2ZW50XG5cblxuZGVib3VuY2VkT25XaW5kb3dTY3JvbGwgPSBfLnRocm90dGxlKCBvbldpbmRvd1Njcm9sbCwgMzAwIClcblxuYmluZFdpbmRvd1Njcm9sbEV2ZW50ID0gLT5cblxuICAkKHdpbmRvdykub24gJ3Njcm9sbCcsIGRlYm91bmNlZE9uV2luZG93U2Nyb2xsXG5cblxuYmluZFdpbmRvd1Njcm9sbEV2ZW50T25jZSA9IF8ub25jZSggYmluZFdpbmRvd1Njcm9sbEV2ZW50IClcblxuXG5cbmNsYXNzIEFwcC5WaWV3cy5JbmZpbml0ZVNjcm9sbENvbXBvc2l0ZVZpZXcgZXh0ZW5kcyBBcHAuVmlld3MuQmFzZUNvbXBvc2l0ZVZpZXdcblxuICBpbml0aWFsaXplOiA9PlxuXG4gICAgcmV0dXJuIGlmIG5vdCBAc2Nyb2xsQ29udGFpbmVyP1xuXG4gICAgaWYgQGNvbGxlY3Rpb24/IGFuZCBAY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFwcC5Db2xsZWN0aW9ucy5JbmZpbml0ZVNjcm9sbENvbGxlY3Rpb25cblxuICAgICAgQGxpc3RlblRvIEBtb2RlbCwgJ2NoYW5nZTpsb2FkaW5nJywgQG9uTG9hZGluZ0NoYW5nZVxuXG5cbiAgb25SZW5kZXI6ID0+XG5cbiAgICBAYmluZFNjcm9sbEV2ZW50KClcblxuXG4gIG9uQ2xvc2U6ID0+XG5cbiAgICBpZiBAc2Nyb2xsQ29udGFpbmVyIGlzICd3aW5kb3cnIGFuZCB3aW5kb3dTY3JvbGxIYW5kbGVyVmlld3NbIEBjaWQgXT9cbiAgICAgIGRlbGV0ZSB3aW5kb3dTY3JvbGxIYW5kbGVyVmlld3NbIEBjaWQgXVxuXG5cbiAgYmluZFNjcm9sbEV2ZW50OiA9PlxuXG4gICAgaWYgQHNjcm9sbENvbnRhaW5lciBpcyAnd2luZG93J1xuXG4gICAgICBiaW5kV2luZG93U2Nyb2xsRXZlbnRPbmNlKClcbiAgICAgIHdpbmRvd1Njcm9sbEhhbmRsZXJWaWV3c1sgQGNpZCBdID0gQFxuXG4gICAgZWxzZVxuXG4gICAgICBpZiBAJCggQHNjcm9sbENvbnRhaW5lciApLmxlbmd0aCA+IDBcbiAgICAgICAgZGVib3VuY2VkU2Nyb2xsID0gXy50aHJvdHRsZSggQG9uU2Nyb2xsLCAxMDAgKVxuICAgICAgICBAJCggQHNjcm9sbENvbnRhaW5lciApLnNjcm9sbCBkZWJvdW5jZWRTY3JvbGxcblxuXG5cbiAgb25TY3JvbGw6IChldmVudCkgPT5cblxuICAgICMgZ2V0IHNjcm9sbCBoZWlnaHRzXG4gICAgaWYgQHNjcm9sbENvbnRhaW5lciBpcyAnd2luZG93J1xuXG4gICAgICBzY3JvbGxIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKVxuICAgICAgaW5uZXJIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KClcblxuICAgICAgIyBnZXQgc2Nyb2xsdG9wIHBvc2l0aW9uXG4gICAgICBzY3JvbGxUb3AgPSBBcHAuSGVscGVycy5lbnYuZ2V0ICdzY3JvbGxUb3AnXG5cbiAgICBlbHNlXG5cbiAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cbiAgICAgIHNjcm9sbEhlaWdodCA9ICR0YXJnZXRbMF0uc2Nyb2xsSGVpZ2h0XG4gICAgICBpbm5lckhlaWdodCA9ICR0YXJnZXQuaW5uZXJIZWlnaHQoKVxuXG4gICAgICAjIGdldCBzY3JvbGx0b3AgcG9zaXRpb25cbiAgICAgIHNjcm9sbFRvcCA9ICR0YXJnZXQuc2Nyb2xsVG9wKClcblxuXG4gICAgIyBjYWxjdWxhdGUgZGlmZmVyZW50aWFsc1xuICAgIHBpeGVsc0Zyb21Ub3AgPSBzY3JvbGxUb3BcbiAgICBwaXhlbHNGcm9tQm90dG9tID0gMCArIHNjcm9sbEhlaWdodCAtIHNjcm9sbFRvcCAtIGlubmVySGVpZ2h0XG5cbiAgICAjIGZpeGVkIG9mZnNldFxuICAgIG9mZnNldCA9IDcwMCAgIyA9IDEwMDAwICogMC4yXG5cbiAgICAjIGdldCBib3R0b20gb2Zmc2V0IG9mIGVsZW1lbnQgaW4gdGhlIHNjcm9sbGluZyBhcmVhXG4gICAgb2Zmc2V0Qm90dG9tID0gQGdldE9mZnNldEJvdHRvbSAkKCcuc3Mtd3JhcHBlcicpLCBzY3JvbGxIZWlnaHRcblxuICAgICMgcmV0dXJuIGZvciBuZWdhdGl2ZSB2YWx1ZXMgKGVsYXN0aWMgc2Nyb2xsaW5nIG9uIE1hYyBPUyBhbmQgaU9TKVxuICAgIHJldHVybiBpZiBwaXhlbHNGcm9tQm90dG9tIDwgMCBvciBwaXhlbHNGcm9tVG9wIDwgMFxuXG4gICAgIyB0cmlnZ2VyIGV2ZW50c1xuICAgIGlmIHBpeGVsc0Zyb21Cb3R0b20gPCBvZmZzZXQgKyBvZmZzZXRCb3R0b21cblxuICAgICAgIyBjb25zb2xlLmxvZyAnTmVhckJvdHRvbSdcbiAgICAgIEB0cmlnZ2VyTWV0aG9kICdzY3JvbGw6bmVhcjpib3R0b20nXG5cbiAgICBlbHNlIGlmIHBpeGVsc0Zyb21Ub3AgPCBvZmZzZXRcblxuICAgICAgIyBjb25zb2xlLmxvZyAnTmVhclRvcCdcbiAgICAgIEB0cmlnZ2VyTWV0aG9kICdzY3JvbGw6bmVhcjp0b3AnXG5cblxuXG4gIGdldE9mZnNldEJvdHRvbTogKCRlbCwgc2Nyb2xsSGVpZ2h0KSA9PlxuXG4gICAgaWYgbm90IEBvZmZzZXRCb3R0b20/XG4gICAgICAjIGNhbGN1bGF0ZSB0aGUgb2Zmc2V0IG9mIHRoZSBwb3N0cyBkaXYgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBwYWdlXG4gICAgICBAb2Zmc2V0Qm90dG9tID0gc2Nyb2xsSGVpZ2h0IC0gKCAkZWwuaGVpZ2h0KCkgKyAkZWwub2Zmc2V0KCkudG9wIClcblxuICAgICAgIyBtYWtlIHN1cmUgdGhhdCB0aGlzIGlzIG5vdCBuZWdhdGl2ZS5cbiAgICAgIGlmIEBvZmZzZXRCb3R0b20gPCAwXG4gICAgICAgIEBvZmZzZXRCb3R0b20gPSAwXG5cbiAgICBAb2Zmc2V0Qm90dG9tXG5cblxuICBvblNjcm9sbE5lYXJCb3R0b206ID0+XG5cbiAgICBpZiBub3QgQGNvbGxlY3Rpb24ubmV4dFBhZ2U/IG9yIG5vdCBAY29sbGVjdGlvbj8gb3IgQGNvbGxlY3Rpb24ubGVuZ3RoIGlzIDBcbiAgICAgIHJldHVyblxuXG4gICAgaWYgQGxvYWRpbmc/IGFuZCBAbG9hZGluZ1xuICAgICAgcmV0dXJuXG5cbiAgICBpZiBAY29sbGVjdGlvbi5oYXNOZXh0PyBhbmQgQGNvbGxlY3Rpb24uaGFzTmV4dCBpcyBmYWxzZVxuICAgICAgcmV0dXJuXG5cbiAgICBAbG9hZGluZyA9IHRydWVcbiAgICBAbW9kZWwuc2V0ICdsb2FkaW5nJywgdHJ1ZVxuXG4gICAgQGNvbGxlY3Rpb24ubmV4dFBhZ2VcbiAgICAgIHJlbW92ZTogZmFsc2VcbiAgICAgIHN1Y2Nlc3M6IChjb2xsZWN0aW9uLCByZXNwb25zZSkgPT5cbiAgICAgICAgQGxvYWRpbmcgPSBmYWxzZVxuICAgICAgICBAbW9kZWwuc2V0ICdsb2FkaW5nJywgZmFsc2VcblxuXG4gIG9uTG9hZGluZ0NoYW5nZTogKG1vZGVsLCBsb2FkaW5nLCBvcHRpb25zKSAtPlxuXG4gICAgaWYgbm90IEBsb2FkZXJWaWV3P1xuXG4gICAgICAjIGNyZWF0ZSBsb2FkZXJcbiAgICAgIGlmIEAkKCcuc3MtaW5maW5pdGUtc2Nyb2xsLWxvYWRlcicpLmxlbmd0aCBpcyAwXG5cbiAgICAgICAgaW5maW5pdGVTY3JvbGxMb2FkZXJIdG1sID0gJzxkaXYgY2xhc3M9XCJzcy1pbmZpbml0ZS1zY3JvbGwtbG9hZGVyXCI+PGRpdiBjbGFzcz1cInNzLWlubmVyLXRleHRcIj5ObyBtb3JlIGNvbnRlbnQgdG8gbG9hZC48L2Rpdj48L2Rpdj4nXG5cbiAgICAgICAgaWYgQHNjcm9sbENvbnRhaW5lciBpcyAnd2luZG93J1xuXG4gICAgICAgICAgQCRlbC5hcHBlbmQgaW5maW5pdGVTY3JvbGxMb2FkZXJIdG1sXG5cbiAgICAgICAgZWxzZVxuXG4gICAgICAgICAgQCQoIEBzY3JvbGxDb250YWluZXIgKS5hcHBlbmQgaW5maW5pdGVTY3JvbGxMb2FkZXJIdG1sXG5cblxuICAgICAgQGxvYWRlclZpZXcgPSBuZXcgQXBwLlZpZXdzLkxvYWRlckl0ZW1WaWV3XG4gICAgICAgIG1vZGVsOiBuZXcgQmFja2JvbmUuTW9kZWxcblxuICAgICAgQCQoJy5zcy1pbmZpbml0ZS1zY3JvbGwtbG9hZGVyJykuYXBwZW5kIEBsb2FkZXJWaWV3LnJlbmRlcigpLmVsXG5cblxuICAgIGRvbmUgPSBmYWxzZVxuXG4gICAgaWYgbG9hZGluZ1xuXG4gICAgICBAbG9hZGVyVmlldy5zdGFydFNwaW5uZXIoKVxuXG4gICAgZWxzZVxuXG4gICAgICBAbG9hZGVyVmlldy5zdG9wU3Bpbm5lcigpXG5cbiAgICAgICMgIyBzZXQgJ2RvbmUnIGZsYWcgdG8gdHJ1ZSB3aGVuIHRoZSBjb2xsZWN0aW9uIGlzIGF0IHRoZSBib3R0b20uXG4gICAgICAjICMgV2UgZG9uJ3QgbmVlZCBpdCBvbiB0aGUgZnJvbnQgZW5kLCBidXQgd2UgbWlnaHQgd2FudCBpdCBvbiB0aGVcbiAgICAgICMgIyBiYWNrIGVuZCB0byBzaG93IGEgbWVzc2FnZSBsaWtlOiBcIkdvIHBybyB0byBsb2FkIG1vcmUgcG9zdHNcIlxuICAgICAgIyBpZiBAY29sbGVjdGlvbi5oYXNOZXh0PyBhbmQgQGNvbGxlY3Rpb24uaGFzTmV4dCBpcyBmYWxzZVxuICAgICAgIyAgIGRvbmUgPSB0cnVlXG5cbiAgICBAJCgnLnNzLWluZmluaXRlLXNjcm9sbC1sb2FkZXInKS50b2dnbGVDbGFzcyAnc3MtbG9hZGluZycsIGxvYWRpbmdcbiAgICBAJCgnLnNzLWluZmluaXRlLXNjcm9sbC1sb2FkZXInKS50b2dnbGVDbGFzcyAnc3MtZG9uZScsIGRvbmVcblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCAgICAgICA9IHJlcXVpcmUgXCJhcHBcIlxuQmFja2JvbmUgID0gcmVxdWlyZSBcImJhY2tib25lXCJcbl8gICAgICAgICA9IHJlcXVpcmUgXCJ1bmRlcnNjb3JlXCJcblxuXG5jbGFzcyBBcHAuVmlld3MuTG9hZGVySXRlbVZpZXcgZXh0ZW5kcyBBcHAuVmlld3MuQmFzZUl0ZW1WaWV3XG5cbiAgY2xhc3NOYW1lOiAnc3MtYWpheC1sb2FkZXItdmlldydcblxuICBkZWZhdWx0U3BpbkFyZ3M6XG5cbiAgICBsaW5lczogMTIgICAgICAgICAgICAgICAjIFRoZSBudW1iZXIgb2YgbGluZXMgdG8gZHJhd1xuICAgIGxlbmd0aDogNyAgICAgICAgICAgICAgICMgVGhlIGxlbmd0aCBvZiBlYWNoIGxpbmVcbiAgICB3aWR0aDogMiAgICAgICAgICAgICAgICAjIFRoZSBsaW5lIHRoaWNrbmVzc1xuICAgIHJhZGl1czogOSAgICAgICAgICAgICAgICMgVGhlIHJhZGl1cyBvZiB0aGUgaW5uZXIgY2lyY2xlXG4gICAgY29ybmVyczogMSAgICAgICAgICAgICAgIyBDb3JuZXIgcm91bmRuZXNzICgwLi4xKVxuICAgIHJvdGF0ZTogMCAgICAgICAgICAgICAgICMgVGhlIHJvdGF0aW9uIG9mZnNldFxuICAgIGRpcmVjdGlvbjogMSAgICAgICAgICAgICMgMTogY2xvY2t3aXNlLCAtMTogY291bnRlcmNsb2Nrd2lzZVxuICAgIGNvbG9yOiAnI2FlYWVhZScgICAgICAgICMgI3JnYiBvciAjcnJnZ2JiIG9yIGFycmF5IG9mIGNvbG9yc1xuICAgIHNwZWVkOiAxICAgICAgICAgICAgICAgICMgUm91bmRzIHBlciBzZWNvbmRcbiAgICB0cmFpbDogNjAgICAgICAgICAgICAgICAjIEFmdGVyZ2xvdyBwZXJjZW50YWdlXG4gICAgc2hhZG93OiBmYWxzZSAgICAgICAgICAgIyBXaGV0aGVyIHRvIHJlbmRlciBhIHNoYWRvd1xuICAgIGh3YWNjZWw6IGZhbHNlICAgICAgICAgICMgV2hldGhlciB0byB1c2UgaGFyZHdhcmUgYWNjZWxlcmF0aW9uXG4gICAgY2xhc3NOYW1lOiAnc3Mtc3Bpbm5lcicgICAgIyBUaGUgQ1NTIGNsYXNzIHRvIGFzc2lnbiB0byB0aGUgc3Bpbm5lclxuXG5cbiAgdGVtcGxhdGU6IC0+XG4gICAgJydcblxuICBvblJlbmRlcjogPT5cblxuICAgIEBzdGFydFNwaW5uZXIoKVxuXG5cbiAgc3RhcnRTcGlubmVyOiA9PlxuXG4gICAgc3BpbkFyZ3MgPSBfLmV4dGVuZCB7fSwgQGRlZmF1bHRTcGluQXJncywgQG1vZGVsLnRvSlNPTigpXG5cbiAgICBAJGVsLnNwaW4gc3BpbkFyZ3NcblxuICBzdG9wU3Bpbm5lcjogPT5cblxuICAgIEAkZWwuc3BpbiBmYWxzZVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuQmFja2JvbmUgPSByZXF1aXJlICdiYWNrYm9uZSdcblxuIyBDUkVBVEUgTkVXIEJBQ0tCT05FLk1BUklPTkVUVEUgQVBQTElDQVRJT05cbkFwcCA9IG5ldyBCYWNrYm9uZS5NYXJpb25ldHRlLkFwcGxpY2F0aW9uXG5cblx0Q29udHJvbGxlcnM6IHt9XG5cdE1vZGVsczoge31cblx0Q29sbGVjdGlvbnM6IHt9XG5cdFZpZXdzOiB7fVxuXHRMYXlvdXRzOiB7fVxuXHRSb3V0ZXJzOiB7fVxuXHRUZW1wbGF0ZXM6IHt9XG5cdFBhcnRpYWxzOiB7fVxuXHRIZWxwZXJzOiB7fVxuXG53aW5kb3cuU1NBcHAgPSBBcHBcblxuIyBSRVRVUk4gTUFJTiBBUFBcbm1vZHVsZS5leHBvcnRzID0gQXBwXG4iLCJcInVzZSBzdHJpY3RcIlxuXG4jIG1vZGVybml6ciBtb2R1bGVzXG5yZXF1aXJlICdicm93c2Vybml6ci90ZXN0L3RvdWNoZXZlbnRzJ1xuXG4jIGxvYWQgYXBwIG9iamVjdFxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG4jIHJlcXVpcmUgaGVscGVyc1xuQXBwLkhlbHBlcnMuYnJvd3NlclN1cHBvcnQgID0gcmVxdWlyZSBcIi4vSGVscGVycy9icm93c2VyU3VwcG9ydFwiXG5BcHAuSGVscGVycy5kYXRhICAgICAgICAgICAgPSByZXF1aXJlIFwiLi9IZWxwZXJzL2RhdGFcIlxuQXBwLkhlbHBlcnMuZGF0ZSAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vSGVscGVycy9kYXRlXCJcbkFwcC5IZWxwZXJzLmVudiAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuL0hlbHBlcnMvZW52XCJcbkFwcC5IZWxwZXJzLmh0dHAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuL0hlbHBlcnMvaHR0cFwiXG5cblxuIyBsb2FkIHRlbXBsYXRlIGhlbHBlcnNcbnJlcXVpcmUgJy4vVGVtcGxhdGVzL0hlbHBlcnMvdG9UaXRsZUNhc2UnXG5cbiMgbG9hZCBhcHAgY29udHJvbGxlcnNcbnJlcXVpcmUgJy4vQ29udHJvbGxlcnMvQXBwQ29udHJvbGxlcidcblxuIyBsb2FkIGFwcCBtb2RlbHNcbnJlcXVpcmUgJy4vTW9kZWxzL0FwaU1vZGVsJ1xucmVxdWlyZSAnLi9Nb2RlbHMvV1BPcHRpb25Nb2RlbCdcbnJlcXVpcmUgJy4vTW9kZWxzL1dQVXNlck1ldGFNb2RlbCdcblxuIyBsb2FkIGFwcCBjb2xsZWN0aW9uc1xucmVxdWlyZSAnLi9Db2xsZWN0aW9ucy9BcGlDb2xsZWN0aW9uJ1xucmVxdWlyZSAnLi9Db2xsZWN0aW9ucy9JbmZpbml0ZVNjcm9sbENvbGxlY3Rpb24nXG5cbiMgcmVxdWlyZSBhcHAgdmlld3NcbnJlcXVpcmUgJy4vVmlld3MvQmFzZUl0ZW1WaWV3J1xucmVxdWlyZSAnLi9WaWV3cy9CYXNlQ29tcG9zaXRlVmlldydcbnJlcXVpcmUgJy4vVmlld3MvTG9hZGVySXRlbVZpZXcnXG5yZXF1aXJlICcuL1ZpZXdzL0luZmluaXRlU2Nyb2xsQ29tcG9zaXRlVmlldydcblxuIyBiYWNrYm9uZSBleHRlbnRpb25zXG5yZXF1aXJlICcuL0NvbmZpZy9CYWNrYm9uZUFqYXgnXG5cblxuIyMjXG5pbml0aWFsaXplIGNvbnRyb2xsZXIgb24gZG9jIHJlYWR5IC0gYmVmb3JlIGV2ZW4gc3RhcnRpbmcgdGhlIGFwcFxuc28gdGhhdCBzdWIgYXBwcyBhbmQgbW9kZWxzIHdpbGwgaGF2ZSBhY2Nlc3MgdG8gdGhlIGFwcCBhcGkgaW5zaWRlIHRoZSBhcHBpbml0aWFsaXplcnNcbiMjI1xuJCA9IHJlcXVpcmUgJ2pxdWVyeSdcbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG5cbiAgJCgndmlkZW8nKS5wcm9wIFwibXV0ZWRcIiwgdHJ1ZVxuXG5cbiAgIyBhZGQgQUpBWCBzdXBwb3J0IGZvciBJRTlcbiAgQXBwLkhlbHBlcnMuYnJvd3NlclN1cHBvcnQuaWVBamF4U3VwcG9ydCgpXG5cbiAgIyBJbnN0YW50aWF0ZSBhcHAgY29udHJvbGxlclxuICBjb250cm9sbGVyID0gbmV3IEFwcC5Db250cm9sbGVycy5BcHBDb250cm9sbGVyKClcblxuICAjIyNcbiAgRGVmaW5lIEFwcCBSZXF1ZXN0c1xuICAjIyNcbiAgQXBwLnJlcXJlcy5zZXRIYW5kbGVyICdhcGlSb290JywgY29udHJvbGxlci5nZXRBcGlSb290XG4gIEFwcC5yZXFyZXMuc2V0SGFuZGxlciAnaXNFdmVuJywgY29udHJvbGxlci5pc0V2ZW5cblxuICAjIyNcbiAgc3RhcnQgdGhlIGFwcFxuICBUaGlzIGlzIHdoZW4gbW9kdWxlcyBnZXQgaW5pdGlhbGl6ZWRcbiAgIyMjXG4gIEFwcC5zdGFydCgpXG5cbiAgIyMjXG4gIHN0YXJ0IEVOViBoZWxwZXIuXG4gICMjI1xuICBBcHAuSGVscGVycy5lbnYuc3RhcnQoKVxuIiwiU2VsZWN0aXplID0gcmVxdWlyZSAnc2VsZWN0aXplJ1xuXG5TZWxlY3RpemUuZGVmaW5lICdzZWxlY3RpemUtYmxhY2tsaXN0ZWQtY2hhcnMnLCAob3B0aW9ucykgLT5cblxuICAjIG92ZXJyaWRlIHRoZSBvbktleVByZXNzIG1ldGhvZFxuICBvcmlnaW5hbE9uS2V5UHJlc3MgPSBAb25LZXlQcmVzc1xuICBAb25LZXlQcmVzcyA9IChldmVudCkgPT5cblxuICAgICMgY2hlY2sgaWYgdGhlIGtleSB0aGF0IHdhcyBwcmVzc2VkIGlzIG9uZSBvZiB0aGUgYmxhY2tsaXN0ZWQgY2hhcnNcbiAgICBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlIGV2ZW50LmtleUNvZGUgb3IgZXZlbnQud2hpY2hcbiAgICBpZiBAc2V0dGluZ3MuYmxhY2tsaXN0ZWRDaGFycz8gYW5kIF8uaW5kZXhPZiggQHNldHRpbmdzLmJsYWNrbGlzdGVkQ2hhcnMsIGNoYXJhY3RlciApID49IDBcbiAgICAgICMgc3RvcCBldmVudCBwcm9wYWdhdGlvbiBoZXJlXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm5cblxuICAgICMgcnVuIG9yaWdpbmFsIG9uS2V5RG93biBoYW5kbGVyXG4gICAgb3JpZ2luYWxPbktleVByZXNzLmFwcGx5IEAsIGFyZ3VtZW50c1xuIiwiU2VsZWN0aXplID0gcmVxdWlyZSAnc2VsZWN0aXplJ1xuXG5TZWxlY3RpemUuZGVmaW5lICdzZWxlY3RpemUtdGFiLXNlcGFyYXRvcicsIChvcHRpb25zKSAtPlxuXG4gICMgb3ZlcnJpZGUgdGhlIG9uS2V5RG93biBtZXRob2RcbiAgb3JpZ2luYWxPbktleURvd24gPSBAb25LZXlEb3duXG4gIEBvbktleURvd24gPSAoZXZlbnQpID0+XG5cbiAgICAjIGNoZWNrIGlmIHRoZSBrZXkgdGhhdCB3YXMgcHJlc3NlZCBpcyBvbmUgb2YgdGhlIHRhYiB0cmlnZ2Vyc1xuICAgIGlmIEBzZXR0aW5ncy50YWJUcmlnZ2Vycz8gYW5kIF8uaW5kZXhPZiggQHNldHRpbmdzLnRhYlRyaWdnZXJzLCBldmVudC5rZXlDb2RlICkgPj0gMFxuXG4gICAgICAjIGZpcnN0LCBjaGVjayBpZiB0aGUgaW5wdXQgaGFzIGEgbm9uLWVtcHR5IHZhbHVlXG4gICAgICB2YWx1ZSA9IEAkY29udHJvbF9pbnB1dC52YWwoKVxuICAgICAgaWYgdmFsdWUgaXNudCAnJ1xuICAgICAgICAjIGNyZWF0ZSBuZXcgaXRlbSB3aXRoIHZhbHVlIGZvdW5kXG4gICAgICAgIEBjcmVhdGVJdGVtKHZhbHVlKVxuXG4gICAgICAjIHN0b3AgZXZlbnQgcHJvcGFnYXRpb24gaGVyZVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuXG5cbiAgICAjIHJ1biBvcmlnaW5hbCBvbktleURvd24gaGFuZGxlclxuICAgIG9yaWdpbmFsT25LZXlEb3duLmFwcGx5IEAsIGFyZ3VtZW50c1xuIl19
