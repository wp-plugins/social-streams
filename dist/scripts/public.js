(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/scripts/public.coffee":[function(require,module,exports){
"use strict";
require('./appMain');

require('twitter');

require("console-log-shim");

require('./Modules/SSOptions/ssOptionsMain');

require('./Modules/SSPosts/ssPostsMain');



},{"./Modules/SSOptions/ssOptionsMain":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/ssOptionsMain.coffee","./Modules/SSPosts/ssPostsMain":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/ssPostsMain.coffee","./appMain":"/srv/social-streams/releases/tmp/social-streams/src/scripts/appMain.coffee","console-log-shim":"/srv/social-streams/releases/tmp/social-streams/lib/console-log-shim.coffee","twitter":"/srv/social-streams/releases/tmp/social-streams/lib/twitter.js"}],"/srv/social-streams/releases/tmp/social-streams/lib/console-log-shim.coffee":[function(require,module,exports){
"use strict";
if (window.console == null) {
  window.console = {};
}

if (window.console.log == null) {
  window.console.log = function() {};
}



},{}],"/srv/social-streams/releases/tmp/social-streams/lib/twitter.js":[function(require,module,exports){
(function() {
  if (window.__twitterIntentHandler) return;
  var intentRegex = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,
      windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
      width = 550,
      height = 420,
      winHeight = screen.height,
      winWidth = screen.width;

  function handleIntent(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        m, left, top;

    while (target && target.nodeName.toLowerCase() !== 'a') {
      target = target.parentNode;
    }

    if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
      m = target.href.match(intentRegex);
      if (m) {
        left = Math.round((winWidth / 2) - (width / 2));
        top = 0;

        if (winHeight > height) {
          top = Math.round((winHeight / 2) - (height / 2));
        }

        window.open(target.href, 'intent', windowOptions + ',width=' + width +
                                           ',height=' + height + ',left=' + left + ',top=' + top);
        e.returnValue = false;
        e.preventDefault && e.preventDefault();
      }
    }
  }

  if (document.addEventListener) {
    document.addEventListener('click', handleIntent, false);
  } else if (document.attachEvent) {
    document.attachEvent('onclick', handleIntent);
  }
  window.__twitterIntentHandler = true;
}());

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



},{"app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSOptions/Controllers/OptionsController.coffee":[function(require,module,exports){
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



},{"./Collections/ApiPostsCollection":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Collections/ApiPostsCollection.coffee","./Collections/PostsCollection":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Collections/PostsCollection.coffee","./Controllers/AutoReloadController":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Controllers/AutoReloadController.coffee","./Controllers/PostsController":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Controllers/PostsController.coffee","./Models/PostModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Models/PostModel.coffee","./Models/PostsLayoutModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Models/PostsLayoutModel.coffee","./SSPosts":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/SSPosts.coffee","./Views/PostItemView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Views/PostItemView.coffee","./Views/PostsCompositeView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Modules/SSPosts/Views/PostsCompositeView.coffee","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee"}],"/srv/social-streams/releases/tmp/social-streams/src/scripts/Templates/Helpers/toTitleCase.coffee":[function(require,module,exports){
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

},{"./Collections/ApiCollection":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Collections/ApiCollection.coffee","./Collections/InfiniteScrollCollection":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Collections/InfiniteScrollCollection.coffee","./Config/BackboneAjax":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Config/BackboneAjax.coffee","./Controllers/AppController":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Controllers/AppController.coffee","./Helpers/browserSupport":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/browserSupport.coffee","./Helpers/data":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/data.coffee","./Helpers/date":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/date.coffee","./Helpers/env":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/env.coffee","./Helpers/http":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Helpers/http.coffee","./Models/ApiModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Models/ApiModel.coffee","./Models/WPOptionModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Models/WPOptionModel.coffee","./Models/WPUserMetaModel":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Models/WPUserMetaModel.coffee","./Templates/Helpers/toTitleCase":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Templates/Helpers/toTitleCase.coffee","./Views/BaseCompositeView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/BaseCompositeView.coffee","./Views/BaseItemView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/BaseItemView.coffee","./Views/InfiniteScrollCompositeView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/InfiniteScrollCompositeView.coffee","./Views/LoaderItemView":"/srv/social-streams/releases/tmp/social-streams/src/scripts/Views/LoaderItemView.coffee","app":"/srv/social-streams/releases/tmp/social-streams/src/scripts/app.coffee","browsernizr/test/touchevents":"/srv/social-streams/releases/tmp/social-streams/node_modules/browsernizr/test/touchevents.js"}]},{},["./src/scripts/public.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9wdWJsaWMuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvbGliL2NvbnNvbGUtbG9nLXNoaW0uY29mZmVlIiwibGliL3R3aXR0ZXIuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL01vZGVybml6ci5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2Vybml6ci9saWIvTW9kZXJuaXpyUHJvdG8uanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL2NsYXNzZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL2NyZWF0ZUVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL2RvY0VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL2dldEJvZHkuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL2luamVjdEVsZW1lbnRXaXRoU3R5bGVzLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJuaXpyL2xpYi9pcy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2Vybml6ci9saWIvcHJlZml4ZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL3NldENsYXNzZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL3Rlc3RSdW5uZXIuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL3Rlc3RTdHlsZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlcm5penIvbGliL3Rlc3RzLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJuaXpyL3Rlc3QvdG91Y2hldmVudHMuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2Jhc2UuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIm5vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvc2FmZS1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIm5vZGVfbW9kdWxlcy9oYnNmeS9ydW50aW1lLmpzIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvQ29sbGVjdGlvbnMvQXBpQ29sbGVjdGlvbi5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Db2xsZWN0aW9ucy9JbmZpbml0ZVNjcm9sbENvbGxlY3Rpb24uY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvQ29uZmlnL0JhY2tib25lQWpheC5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Db250cm9sbGVycy9BcHBDb250cm9sbGVyLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL0hlbHBlcnMvYnJvd3NlclN1cHBvcnQuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvSGVscGVycy9kYXRhLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL0hlbHBlcnMvZGF0ZS5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9IZWxwZXJzL2Vudi5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9IZWxwZXJzL2h0dHAuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kZWxzL0FwaU1vZGVsLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZGVscy9XUE9wdGlvbk1vZGVsLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZGVscy9XUFVzZXJNZXRhTW9kZWwuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU09wdGlvbnMvQ29udHJvbGxlcnMvT3B0aW9uc0NvbnRyb2xsZXIuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU09wdGlvbnMvTW9kZWxzL09wdGlvbnNNb2RlbC5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTT3B0aW9ucy9Nb2RlbHMvVXNlck1ldGFNb2RlbC5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTT3B0aW9ucy9TU09wdGlvbnMuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU09wdGlvbnMvc3NPcHRpb25zTWFpbi5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTUG9zdHMvQ29sbGVjdGlvbnMvQXBpUG9zdHNDb2xsZWN0aW9uLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NQb3N0cy9Db2xsZWN0aW9ucy9Qb3N0c0NvbGxlY3Rpb24uY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU1Bvc3RzL0NvbnRyb2xsZXJzL0F1dG9SZWxvYWRDb250cm9sbGVyLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NQb3N0cy9Db250cm9sbGVycy9Qb3N0c0NvbnRyb2xsZXIuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU1Bvc3RzL01vZGVscy9Qb3N0TW9kZWwuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU1Bvc3RzL01vZGVscy9Qb3N0c0xheW91dE1vZGVsLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NQb3N0cy9TU1Bvc3RzLmNvZmZlZSIsInNyYy9zY3JpcHRzL01vZHVsZXMvU1NQb3N0cy9UZW1wbGF0ZXMvUG9zdEl0ZW1WaWV3VGVtcGxhdGUuaGJzIiwic3JjL3NjcmlwdHMvTW9kdWxlcy9TU1Bvc3RzL1RlbXBsYXRlcy9Qb3N0c0NvbXBvc2l0ZVZpZXdUZW1wbGF0ZS5oYnMiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9Nb2R1bGVzL1NTUG9zdHMvVmlld3MvUG9zdEl0ZW1WaWV3LmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL01vZHVsZXMvU1NQb3N0cy9WaWV3cy9Qb3N0c0NvbXBvc2l0ZVZpZXcuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvTW9kdWxlcy9TU1Bvc3RzL3NzUG9zdHNNYWluLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL1RlbXBsYXRlcy9IZWxwZXJzL3RvVGl0bGVDYXNlLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL1ZpZXdzL0Jhc2VDb21wb3NpdGVWaWV3LmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL1ZpZXdzL0Jhc2VJdGVtVmlldy5jb2ZmZWUiLCIvc3J2L3NvY2lhbC1zdHJlYW1zL3JlbGVhc2VzL3RtcC9zb2NpYWwtc3RyZWFtcy9zcmMvc2NyaXB0cy9WaWV3cy9JbmZpbml0ZVNjcm9sbENvbXBvc2l0ZVZpZXcuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvVmlld3MvTG9hZGVySXRlbVZpZXcuY29mZmVlIiwiL3Nydi9zb2NpYWwtc3RyZWFtcy9yZWxlYXNlcy90bXAvc29jaWFsLXN0cmVhbXMvc3JjL3NjcmlwdHMvYXBwLmNvZmZlZSIsIi9zcnYvc29jaWFsLXN0cmVhbXMvcmVsZWFzZXMvdG1wL3NvY2lhbC1zdHJlYW1zL3NyYy9zY3JpcHRzL2FwcE1haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUMsWUFBQSxDQUFBO0FBQUEsT0FNRCxDQUFTLFdBQVQsQ0FOQyxDQUFBOztBQUFBLE9BU0QsQ0FBUyxTQUFULENBVEMsQ0FBQTs7QUFBQSxPQVlELENBQVMsa0JBQVQsQ0FaQyxDQUFBOztBQUFBLE9Ba0JELENBQVMsbUNBQVQsQ0FsQkMsQ0FBQTs7QUFBQSxPQW1CRCxDQUFTLCtCQUFULENBbkJDLENBQUE7Ozs7O0FDQUEsWUFBQSxDQUFBO0FBR0QsSUFBTyxzQkFBUDtBQUNDLEVBQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsRUFBakIsQ0FERDtDQUhDOztBQU1ELElBQU8sMEJBQVA7QUFDQyxFQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBZixHQUFxQixTQUFBLEdBQUEsQ0FBckIsQ0FERDtDQU5DOzs7OztBQ0FEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SUFBekIsQ0FBQSxDQUFBO0FBQUEsRUFJQSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxhQUEzQixDQUFBLENBSkEsQ0FBQTtBQUFBLEVBT0EsVUFBQSxHQUFpQixJQUFBLEdBQUcsQ0FBQyxXQUFXLENBQUMsYUFBaEIsQ0FBQSxDQVBqQixDQUFBO0FBU0E7QUFBQTs7S0FUQTtBQUFBLEVBWUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFYLENBQXVCLFNBQXZCLEVBQWlDLFVBQVUsQ0FBQyxVQUE1QyxDQVpBLENBQUE7QUFBQSxFQWFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBWCxDQUF1QixRQUF2QixFQUFnQyxVQUFVLENBQUMsTUFBM0MsQ0FiQSxDQUFBO0FBZUE7QUFBQTs7O0tBZkE7QUFBQSxFQW1CQSxHQUFHLENBQUMsS0FBSixDQUFBLENBbkJBLENBQUE7QUFxQkE7QUFBQTs7S0FyQkE7U0F3QkEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBaEIsQ0FBQSxFQTFCZ0I7QUFBQSxDQUFsQixDQTlDQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiXG5cbiMgZXh0cmEgbW9kZXJuaXpyIG1vZHVsZXNcbiMgcmVxdWlyZSAnYnJvd3Nlcm5penIvdGVzdC9jc3Mvb3BhY2l0eSdcblxuIyBNYWluIGFwcCBsb2FkZXJcbnJlcXVpcmUgJy4vYXBwTWFpbidcblxuIyBUd2l0dGVyIGFwaVxucmVxdWlyZSAndHdpdHRlcidcblxuIyBjb25zb2xlIGxvZyBzaGltXG5yZXF1aXJlIFwiY29uc29sZS1sb2ctc2hpbVwiXG5cbiMgTG9hZCBNb2R1bGVzIHRoYXQgd2lsbCBiZSB1c2VkIGJ5IHRoZSBhcHBcbiMgVGhlc2UgbW9kdWxlcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgc3RhcnRlZFxuIyB3aGVuIHRoZSBhcHAgc3RhcnRzIChvbiBkb2NyZWFkeSkgaW4gdGhlXG4jIG9yZGVyIHRoZXkgYXBwZWFyIGhlcmUuXG5yZXF1aXJlICcuL01vZHVsZXMvU1NPcHRpb25zL3NzT3B0aW9uc01haW4nXG5yZXF1aXJlICcuL01vZHVsZXMvU1NQb3N0cy9zc1Bvc3RzTWFpbidcbiIsIlwidXNlIHN0cmljdFwiXG5cbiMgc2hpbSBmb3IgY29uc29sZSBsb2dcbmlmIG5vdCB3aW5kb3cuY29uc29sZT9cblx0d2luZG93LmNvbnNvbGUgPSB7fVxuXG5pZiBub3Qgd2luZG93LmNvbnNvbGUubG9nP1xuXHR3aW5kb3cuY29uc29sZS5sb2cgPSAoKSAtPlxuXHRcdCMgZG8gbm90aGluZ1xuIiwiKGZ1bmN0aW9uKCkge1xuICBpZiAod2luZG93Ll9fdHdpdHRlckludGVudEhhbmRsZXIpIHJldHVybjtcbiAgdmFyIGludGVudFJlZ2V4ID0gL3R3aXR0ZXJcXC5jb20oXFw6XFxkezIsNH0pP1xcL2ludGVudFxcLyhcXHcrKS8sXG4gICAgICB3aW5kb3dPcHRpb25zID0gJ3Njcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMsdG9vbGJhcj1ubyxsb2NhdGlvbj15ZXMnLFxuICAgICAgd2lkdGggPSA1NTAsXG4gICAgICBoZWlnaHQgPSA0MjAsXG4gICAgICB3aW5IZWlnaHQgPSBzY3JlZW4uaGVpZ2h0LFxuICAgICAgd2luV2lkdGggPSBzY3JlZW4ud2lkdGg7XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW50ZW50KGUpIHtcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCxcbiAgICAgICAgbSwgbGVmdCwgdG9wO1xuXG4gICAgd2hpbGUgKHRhcmdldCAmJiB0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2EnKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScgJiYgdGFyZ2V0LmhyZWYpIHtcbiAgICAgIG0gPSB0YXJnZXQuaHJlZi5tYXRjaChpbnRlbnRSZWdleCk7XG4gICAgICBpZiAobSkge1xuICAgICAgICBsZWZ0ID0gTWF0aC5yb3VuZCgod2luV2lkdGggLyAyKSAtICh3aWR0aCAvIDIpKTtcbiAgICAgICAgdG9wID0gMDtcblxuICAgICAgICBpZiAod2luSGVpZ2h0ID4gaGVpZ2h0KSB7XG4gICAgICAgICAgdG9wID0gTWF0aC5yb3VuZCgod2luSGVpZ2h0IC8gMikgLSAoaGVpZ2h0IC8gMikpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm9wZW4odGFyZ2V0LmhyZWYsICdpbnRlbnQnLCB3aW5kb3dPcHRpb25zICsgJyx3aWR0aD0nICsgd2lkdGggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsaGVpZ2h0PScgKyBoZWlnaHQgKyAnLGxlZnQ9JyArIGxlZnQgKyAnLHRvcD0nICsgdG9wKTtcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0ICYmIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlSW50ZW50LCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpIHtcbiAgICBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25jbGljaycsIGhhbmRsZUludGVudCk7XG4gIH1cbiAgd2luZG93Ll9fdHdpdHRlckludGVudEhhbmRsZXIgPSB0cnVlO1xufSgpKTtcbiIsInZhciBNb2Rlcm5penIgPSByZXF1aXJlKCcuL2xpYi9Nb2Rlcm5penInKSxcbiAgICBNb2Rlcm5penJQcm90byA9IHJlcXVpcmUoJy4vbGliL01vZGVybml6clByb3RvJyksXG4gICAgY2xhc3NlcyA9IHJlcXVpcmUoJy4vbGliL2NsYXNzZXMnKSxcbiAgICB0ZXN0UnVubmVyID0gcmVxdWlyZSgnLi9saWIvdGVzdFJ1bm5lcicpLFxuICAgIHNldENsYXNzZXMgPSByZXF1aXJlKCcuL2xpYi9zZXRDbGFzc2VzJyk7XG5cbi8vIFJ1biBlYWNoIHRlc3RcbnRlc3RSdW5uZXIoKTtcblxuLy8gUmVtb3ZlIHRoZSBcIm5vLWpzXCIgY2xhc3MgaWYgaXQgZXhpc3RzXG5zZXRDbGFzc2VzKGNsYXNzZXMpO1xuXG5kZWxldGUgTW9kZXJuaXpyUHJvdG8uYWRkVGVzdDtcbmRlbGV0ZSBNb2Rlcm5penJQcm90by5hZGRBc3luY1Rlc3Q7XG5cbi8vIFJ1biB0aGUgdGhpbmdzIHRoYXQgYXJlIHN1cHBvc2VkIHRvIHJ1biBhZnRlciB0aGUgdGVzdHNcbmZvciAodmFyIGkgPSAwOyBpIDwgTW9kZXJuaXpyLl9xLmxlbmd0aDsgaSsrKSB7XG4gIE1vZGVybml6ci5fcVtpXSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGVybml6cjtcbiIsInZhciBNb2Rlcm5penJQcm90byA9IHJlcXVpcmUoJy4vTW9kZXJuaXpyUHJvdG8nKTtcblxuXG4gIC8vIEZha2Ugc29tZSBvZiBPYmplY3QuY3JlYXRlXG4gIC8vIHNvIHdlIGNhbiBmb3JjZSBub24gdGVzdCByZXN1bHRzXG4gIC8vIHRvIGJlIG5vbiBcIm93blwiIHByb3BlcnRpZXMuXG4gIHZhciBNb2Rlcm5penIgPSBmdW5jdGlvbigpe307XG4gIE1vZGVybml6ci5wcm90b3R5cGUgPSBNb2Rlcm5penJQcm90bztcblxuICAvLyBMZWFrIG1vZGVybml6ciBnbG9iYWxseSB3aGVuIHlvdSBgcmVxdWlyZWAgaXRcbiAgLy8gcmF0aGVyIHRoYW4gZm9yY2UgaXQgaGVyZS5cbiAgLy8gT3ZlcndyaXRlIG5hbWUgc28gY29uc3RydWN0b3IgbmFtZSBpcyBuaWNlciA6RFxuICBNb2Rlcm5penIgPSBuZXcgTW9kZXJuaXpyKCk7XG5cbiAgXG5cbm1vZHVsZS5leHBvcnRzID0gTW9kZXJuaXpyOyIsInZhciB0ZXN0cyA9IHJlcXVpcmUoJy4vdGVzdHMnKTtcblxuXG4gIHZhciBNb2Rlcm5penJQcm90byA9IHtcbiAgICAvLyBUaGUgY3VycmVudCB2ZXJzaW9uLCBkdW1teVxuICAgIF92ZXJzaW9uOiAndjMuMC4wcHJlJyxcblxuICAgIC8vIEFueSBzZXR0aW5ncyB0aGF0IGRvbid0IHdvcmsgYXMgc2VwYXJhdGUgbW9kdWxlc1xuICAgIC8vIGNhbiBnbyBpbiBoZXJlIGFzIGNvbmZpZ3VyYXRpb24uXG4gICAgX2NvbmZpZzoge1xuICAgICAgY2xhc3NQcmVmaXggOiAnJyxcbiAgICAgIGVuYWJsZUNsYXNzZXMgOiB0cnVlXG4gICAgfSxcblxuICAgIC8vIFF1ZXVlIG9mIHRlc3RzXG4gICAgX3E6IFtdLFxuXG4gICAgLy8gU3R1YiB0aGVzZSBmb3IgcGVvcGxlIHdobyBhcmUgbGlzdGVuaW5nXG4gICAgb246IGZ1bmN0aW9uKCB0ZXN0LCBjYiApIHtcbiAgICAgIC8vIEkgZG9uJ3QgcmVhbGx5IHRoaW5rIHBlb3BsZSBzaG91bGQgZG8gdGhpcywgYnV0IHdlIGNhblxuICAgICAgLy8gc2FmZSBndWFyZCBpdCBhIGJpdC5cbiAgICAgIC8vIC0tIE5PVEU6OiB0aGlzIGdldHMgV0FZIG92ZXJyaWRkZW4gaW4gc3JjL2FkZFRlc3QgZm9yXG4gICAgICAvLyBhY3R1YWwgYXN5bmMgdGVzdHMuIFRoaXMgaXMgaW4gY2FzZSBwZW9wbGUgbGlzdGVuIHRvXG4gICAgICAvLyBzeW5jaHJvbm91cyB0ZXN0cy4gSSB3b3VsZCBsZWF2ZSBpdCBvdXQsIGJ1dCB0aGUgY29kZVxuICAgICAgLy8gdG8gKmRpc2FsbG93KiBzeW5jIHRlc3RzIGluIHRoZSByZWFsIHZlcnNpb24gb2YgdGhpc1xuICAgICAgLy8gZnVuY3Rpb24gaXMgYWN0dWFsbHkgbGFyZ2VyIHRoYW4gdGhpcy5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHRoaXNbdGVzdF0pO1xuICAgICAgfSwgMCk7XG4gICAgfSxcblxuICAgIGFkZFRlc3Q6IGZ1bmN0aW9uKCBuYW1lLCBmbiwgb3B0aW9ucyApIHtcbiAgICAgIHRlc3RzLnB1c2goe25hbWUgOiBuYW1lLCBmbiA6IGZuLCBvcHRpb25zIDogb3B0aW9ucyB9KTtcbiAgICB9LFxuXG4gICAgYWRkQXN5bmNUZXN0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRlc3RzLnB1c2goe25hbWUgOiBudWxsLCBmbiA6IGZufSk7XG4gICAgfVxuICB9O1xuXG4gIFxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGVybml6clByb3RvOyIsIlxuICB2YXIgY2xhc3NlcyA9IFtdO1xuICBcbm1vZHVsZS5leHBvcnRzID0gY2xhc3NlczsiLCJcbiAgdmFyIGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcbiAgfTtcbiAgXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUVsZW1lbnQ7IiwiXG4gIHZhciBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBcbm1vZHVsZS5leHBvcnRzID0gZG9jRWxlbWVudDsiLCJ2YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4vY3JlYXRlRWxlbWVudCcpO1xuXG5cbiAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAvLyBBZnRlciBwYWdlIGxvYWQgaW5qZWN0aW5nIGEgZmFrZSBib2R5IGRvZXNuJ3Qgd29yayBzbyBjaGVjayBpZiBib2R5IGV4aXN0c1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIGlmKCFib2R5KSB7XG4gICAgICAvLyBDYW4ndCB1c2UgdGhlIHJlYWwgYm9keSBjcmVhdGUgYSBmYWtlIG9uZS5cbiAgICAgIGJvZHkgPSBjcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gICAgICBib2R5LmZha2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgXG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0Qm9keTsiLCJ2YXIgTW9kZXJuaXpyUHJvdG8gPSByZXF1aXJlKCcuL01vZGVybml6clByb3RvJyk7XG52YXIgZG9jRWxlbWVudCA9IHJlcXVpcmUoJy4vZG9jRWxlbWVudCcpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuL2NyZWF0ZUVsZW1lbnQnKTtcbnZhciBnZXRCb2R5ID0gcmVxdWlyZSgnLi9nZXRCb2R5Jyk7XG5cblxuICAvLyBJbmplY3QgZWxlbWVudCB3aXRoIHN0eWxlIGVsZW1lbnQgYW5kIHNvbWUgQ1NTIHJ1bGVzXG4gIGZ1bmN0aW9uIGluamVjdEVsZW1lbnRXaXRoU3R5bGVzKCBydWxlLCBjYWxsYmFjaywgbm9kZXMsIHRlc3RuYW1lcyApIHtcbiAgICB2YXIgbW9kID0gJ21vZGVybml6cic7XG4gICAgdmFyIHN0eWxlO1xuICAgIHZhciByZXQ7XG4gICAgdmFyIG5vZGU7XG4gICAgdmFyIGRvY092ZXJmbG93O1xuICAgIHZhciBkaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgYm9keSA9IGdldEJvZHkoKTtcblxuICAgIGlmICggcGFyc2VJbnQobm9kZXMsIDEwKSApIHtcbiAgICAgIC8vIEluIG9yZGVyIG5vdCB0byBnaXZlIGZhbHNlIHBvc2l0aXZlcyB3ZSBjcmVhdGUgYSBub2RlIGZvciBlYWNoIHRlc3RcbiAgICAgIC8vIFRoaXMgYWxzbyBhbGxvd3MgdGhlIG1ldGhvZCB0byBzY2FsZSBmb3IgdW5zcGVjaWZpZWQgdXNlc1xuICAgICAgd2hpbGUgKCBub2Rlcy0tICkge1xuICAgICAgICBub2RlID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vZGUuaWQgPSB0ZXN0bmFtZXMgPyB0ZXN0bmFtZXNbbm9kZXNdIDogbW9kICsgKG5vZGVzICsgMSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA8c3R5bGU+IGVsZW1lbnRzIGluIElFNi05IGFyZSBjb25zaWRlcmVkICdOb1Njb3BlJyBlbGVtZW50cyBhbmQgdGhlcmVmb3JlIHdpbGwgYmUgcmVtb3ZlZFxuICAgIC8vIHdoZW4gaW5qZWN0ZWQgd2l0aCBpbm5lckhUTUwuIFRvIGdldCBhcm91bmQgdGhpcyB5b3UgbmVlZCB0byBwcmVwZW5kIHRoZSAnTm9TY29wZScgZWxlbWVudFxuICAgIC8vIHdpdGggYSAnc2NvcGVkJyBlbGVtZW50LCBpbiBvdXIgY2FzZSB0aGUgc29mdC1oeXBoZW4gZW50aXR5IGFzIGl0IHdvbid0IG1lc3Mgd2l0aCBvdXIgbWVhc3VyZW1lbnRzLlxuICAgIC8vIG1zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTMzODk3JTI4VlMuODUlMjkuYXNweFxuICAgIC8vIERvY3VtZW50cyBzZXJ2ZWQgYXMgeG1sIHdpbGwgdGhyb3cgaWYgdXNpbmcgJnNoeTsgc28gdXNlIHhtbCBmcmllbmRseSBlbmNvZGVkIHZlcnNpb24uIFNlZSBpc3N1ZSAjMjc3XG4gICAgc3R5bGUgPSBbJyYjMTczOycsJzxzdHlsZSBpZD1cInMnLCBtb2QsICdcIj4nLCBydWxlLCAnPC9zdHlsZT4nXS5qb2luKCcnKTtcbiAgICBkaXYuaWQgPSBtb2Q7XG4gICAgLy8gSUU2IHdpbGwgZmFsc2UgcG9zaXRpdmUgb24gc29tZSB0ZXN0cyBkdWUgdG8gdGhlIHN0eWxlIGVsZW1lbnQgaW5zaWRlIHRoZSB0ZXN0IGRpdiBzb21laG93IGludGVyZmVyaW5nIG9mZnNldEhlaWdodCwgc28gaW5zZXJ0IGl0IGludG8gYm9keSBvciBmYWtlYm9keS5cbiAgICAvLyBPcGVyYSB3aWxsIGFjdCBhbGwgcXVpcmt5IHdoZW4gaW5qZWN0aW5nIGVsZW1lbnRzIGluIGRvY3VtZW50RWxlbWVudCB3aGVuIHBhZ2UgaXMgc2VydmVkIGFzIHhtbCwgbmVlZHMgZmFrZWJvZHkgdG9vLiAjMjcwXG4gICAgKCFib2R5LmZha2UgPyBkaXYgOiBib2R5KS5pbm5lckhUTUwgKz0gc3R5bGU7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGlmICggYm9keS5mYWtlICkge1xuICAgICAgLy9hdm9pZCBjcmFzaGluZyBJRTgsIGlmIGJhY2tncm91bmQgaW1hZ2UgaXMgdXNlZFxuICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAvL1NhZmFyaSA1LjEzLzUuMS40IE9TWCBzdG9wcyBsb2FkaW5nIGlmIDo6LXdlYmtpdC1zY3JvbGxiYXIgaXMgdXNlZCBhbmQgc2Nyb2xsYmFycyBhcmUgdmlzaWJsZVxuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgZG9jT3ZlcmZsb3cgPSBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93O1xuICAgICAgZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgZG9jRWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgICB9XG5cbiAgICByZXQgPSBjYWxsYmFjayhkaXYsIHJ1bGUpO1xuICAgIC8vIElmIHRoaXMgaXMgZG9uZSBhZnRlciBwYWdlIGxvYWQgd2UgZG9uJ3Qgd2FudCB0byByZW1vdmUgdGhlIGJvZHkgc28gY2hlY2sgaWYgYm9keSBleGlzdHNcbiAgICBpZiAoIGJvZHkuZmFrZSApIHtcbiAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KTtcbiAgICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2NPdmVyZmxvdztcbiAgICAgIC8vIFRyaWdnZXIgbGF5b3V0IHNvIGtpbmV0aWMgc2Nyb2xsaW5nIGlzbid0IGRpc2FibGVkIGluIGlPUzYrXG4gICAgICBkb2NFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gISFyZXQ7XG5cbiAgfVxuXG4gIFxuXG5tb2R1bGUuZXhwb3J0cyA9IGluamVjdEVsZW1lbnRXaXRoU3R5bGVzOyIsIlxuICAvKipcbiAgICogaXMgcmV0dXJucyBhIGJvb2xlYW4gZm9yIGlmIHR5cGVvZiBvYmogaXMgZXhhY3RseSB0eXBlLlxuICAgKi9cbiAgZnVuY3Rpb24gaXMoIG9iaiwgdHlwZSApIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gdHlwZTtcbiAgfVxuICBcbm1vZHVsZS5leHBvcnRzID0gaXM7IiwidmFyIE1vZGVybml6clByb3RvID0gcmVxdWlyZSgnLi9Nb2Rlcm5penJQcm90bycpO1xuXG5cbiAgLy8gTGlzdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gc2V0IGZvciBjc3MgdGVzdHMuIFNlZSB0aWNrZXQgIzIxXG4gIHZhciBwcmVmaXhlcyA9ICcgLXdlYmtpdC0gLW1vei0gLW8tIC1tcy0gJy5zcGxpdCgnICcpO1xuXG4gIC8vIGV4cG9zZSB0aGVzZSBmb3IgdGhlIHBsdWdpbiBBUEkuIExvb2sgaW4gdGhlIHNvdXJjZSBmb3IgaG93IHRvIGpvaW4oKSB0aGVtIGFnYWluc3QgeW91ciBpbnB1dFxuICBNb2Rlcm5penJQcm90by5fcHJlZml4ZXMgPSBwcmVmaXhlcztcblxuICBcblxubW9kdWxlLmV4cG9ydHMgPSBwcmVmaXhlczsiLCJ2YXIgTW9kZXJuaXpyID0gcmVxdWlyZSgnLi9Nb2Rlcm5penInKTtcbnZhciBkb2NFbGVtZW50ID0gcmVxdWlyZSgnLi9kb2NFbGVtZW50Jyk7XG5cblxuICAvLyBQYXNzIGluIGFuIGFuZCBhcnJheSBvZiBjbGFzcyBuYW1lcywgZS5nLjpcbiAgLy8gIFsnbm8td2VicCcsICdib3JkZXJyYWRpdXMnLCAuLi5dXG4gIGZ1bmN0aW9uIHNldENsYXNzZXMoIGNsYXNzZXMgKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGRvY0VsZW1lbnQuY2xhc3NOYW1lO1xuICAgIHZhciByZWdleDtcbiAgICB2YXIgY2xhc3NQcmVmaXggPSBNb2Rlcm5penIuX2NvbmZpZy5jbGFzc1ByZWZpeCB8fCAnJztcblxuICAgIC8vIENoYW5nZSBgbm8tanNgIHRvIGBqc2AgKHdlIGRvIHRoaXMgcmVnYXJkbGVzIG9mIHRoZSBgZW5hYmxlQ2xhc3Nlc2BcbiAgICAvLyBvcHRpb24pXG4gICAgLy8gSGFuZGxlIGNsYXNzUHJlZml4IG9uIHRoaXMgdG9vXG4gICAgdmFyIHJlSlMgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknK2NsYXNzUHJlZml4Kyduby1qcyhcXFxcc3wkKScpO1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKHJlSlMsICckMScrY2xhc3NQcmVmaXgrJ2pzJDInKTtcblxuICAgIGlmKE1vZGVybml6ci5fY29uZmlnLmVuYWJsZUNsYXNzZXMpIHtcbiAgICAgIC8vIEFkZCB0aGUgbmV3IGNsYXNzZXNcbiAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBjbGFzc1ByZWZpeCArIGNsYXNzZXMuam9pbignICcgKyBjbGFzc1ByZWZpeCk7XG4gICAgICBkb2NFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG5cbiAgfVxuXG4gIFxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENsYXNzZXM7IiwidmFyIHRlc3RzID0gcmVxdWlyZSgnLi90ZXN0cycpO1xudmFyIE1vZGVybml6ciA9IHJlcXVpcmUoJy4vTW9kZXJuaXpyJyk7XG52YXIgY2xhc3NlcyA9IHJlcXVpcmUoJy4vY2xhc3NlcycpO1xudmFyIGlzID0gcmVxdWlyZSgnLi9pcycpO1xuXG5cbiAgLy8gUnVuIHRocm91Z2ggYWxsIHRlc3RzIGFuZCBkZXRlY3QgdGhlaXIgc3VwcG9ydCBpbiB0aGUgY3VycmVudCBVQS5cbiAgZnVuY3Rpb24gdGVzdFJ1bm5lcigpIHtcbiAgICB2YXIgZmVhdHVyZU5hbWVzO1xuICAgIHZhciBmZWF0dXJlO1xuICAgIHZhciBhbGlhc0lkeDtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciBuYW1lSWR4O1xuICAgIHZhciBmZWF0dXJlTmFtZTtcbiAgICB2YXIgZmVhdHVyZU5hbWVTcGxpdDtcbiAgICB2YXIgbW9kZXJuaXpyUHJvcDtcbiAgICB2YXIgbVByb3BDb3VudDtcblxuICAgIGZvciAoIHZhciBmZWF0dXJlSWR4IGluIHRlc3RzICkge1xuICAgICAgZmVhdHVyZU5hbWVzID0gW107XG4gICAgICBmZWF0dXJlID0gdGVzdHNbZmVhdHVyZUlkeF07XG4gICAgICAvLyBydW4gdGhlIHRlc3QsIHRocm93IHRoZSByZXR1cm4gdmFsdWUgaW50byB0aGUgTW9kZXJuaXpyLFxuICAgICAgLy8gICB0aGVuIGJhc2VkIG9uIHRoYXQgYm9vbGVhbiwgZGVmaW5lIGFuIGFwcHJvcHJpYXRlIGNsYXNzTmFtZVxuICAgICAgLy8gICBhbmQgcHVzaCBpdCBpbnRvIGFuIGFycmF5IG9mIGNsYXNzZXMgd2UnbGwgam9pbiBsYXRlci5cbiAgICAgIC8vXG4gICAgICAvLyAgIElmIHRoZXJlIGlzIG5vIG5hbWUsIGl0J3MgYW4gJ2FzeW5jJyB0ZXN0IHRoYXQgaXMgcnVuLFxuICAgICAgLy8gICBidXQgbm90IGRpcmVjdGx5IGFkZGVkIHRvIHRoZSBvYmplY3QuIFRoYXQgc2hvdWxkXG4gICAgICAvLyAgIGJlIGRvbmUgd2l0aCBhIHBvc3QtcnVuIGFkZFRlc3QgY2FsbC5cbiAgICAgIGlmICggZmVhdHVyZS5uYW1lICkge1xuICAgICAgICBmZWF0dXJlTmFtZXMucHVzaChmZWF0dXJlLm5hbWUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgICAgaWYgKGZlYXR1cmUub3B0aW9ucyAmJiBmZWF0dXJlLm9wdGlvbnMuYWxpYXNlcyAmJiBmZWF0dXJlLm9wdGlvbnMuYWxpYXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBBZGQgYWxsIHRoZSBhbGlhc2VzIGludG8gdGhlIG5hbWVzIGxpc3RcbiAgICAgICAgICBmb3IgKGFsaWFzSWR4ID0gMDsgYWxpYXNJZHggPCBmZWF0dXJlLm9wdGlvbnMuYWxpYXNlcy5sZW5ndGg7IGFsaWFzSWR4KyspIHtcbiAgICAgICAgICAgIGZlYXR1cmVOYW1lcy5wdXNoKGZlYXR1cmUub3B0aW9ucy5hbGlhc2VzW2FsaWFzSWR4XS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUnVuIHRoZSB0ZXN0LCBvciB1c2UgdGhlIHJhdyB2YWx1ZSBpZiBpdCdzIG5vdCBhIGZ1bmN0aW9uXG4gICAgICByZXN1bHQgPSBpcyhmZWF0dXJlLmZuLCAnZnVuY3Rpb24nKSA/IGZlYXR1cmUuZm4oKSA6IGZlYXR1cmUuZm47XG5cblxuICAgICAgLy8gU2V0IGVhY2ggb2YgdGhlIG5hbWVzIG9uIHRoZSBNb2Rlcm5penIgb2JqZWN0XG4gICAgICBmb3IgKG5hbWVJZHggPSAwOyBuYW1lSWR4IDwgZmVhdHVyZU5hbWVzLmxlbmd0aDsgbmFtZUlkeCsrKSB7XG4gICAgICAgIGZlYXR1cmVOYW1lID0gZmVhdHVyZU5hbWVzW25hbWVJZHhdO1xuICAgICAgICAvLyBTdXBwb3J0IGRvdCBwcm9wZXJ0aWVzIGFzIHN1YiB0ZXN0cy4gV2UgZG9uJ3QgZG8gY2hlY2tpbmcgdG8gbWFrZSBzdXJlXG4gICAgICAgIC8vIHRoYXQgdGhlIGltcGxpZWQgcGFyZW50IHRlc3RzIGhhdmUgYmVlbiBhZGRlZC4gWW91IG11c3QgY2FsbCB0aGVtIGluXG4gICAgICAgIC8vIG9yZGVyIChlaXRoZXIgaW4gdGhlIHRlc3QsIG9yIG1ha2UgdGhlIHBhcmVudCB0ZXN0IGEgZGVwZW5kZW5jeSkuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIENhcCBpdCB0byBUV08gdG8gbWFrZSB0aGUgbG9naWMgc2ltcGxlIGFuZCBiZWNhdXNlIHdobyBuZWVkcyB0aGF0IGtpbmQgb2Ygc3VidGVzdGluZ1xuICAgICAgICAvLyBoYXNodGFnIGZhbW91cyBsYXN0IHdvcmRzXG4gICAgICAgIGZlYXR1cmVOYW1lU3BsaXQgPSBmZWF0dXJlTmFtZS5zcGxpdCgnLicpO1xuXG4gICAgICAgIGlmIChmZWF0dXJlTmFtZVNwbGl0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIE1vZGVybml6cltmZWF0dXJlTmFtZVNwbGl0WzBdXSA9IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmZWF0dXJlTmFtZVNwbGl0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIE1vZGVybml6cltmZWF0dXJlTmFtZVNwbGl0WzBdXVtmZWF0dXJlTmFtZVNwbGl0WzFdXSA9IHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsYXNzZXMucHVzaCgocmVzdWx0ID8gJycgOiAnbm8tJykgKyBmZWF0dXJlTmFtZVNwbGl0LmpvaW4oJy0nKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgXG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdFJ1bm5lcjsiLCJ2YXIgTW9kZXJuaXpyUHJvdG8gPSByZXF1aXJlKCcuL01vZGVybml6clByb3RvJyk7XG52YXIgaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMgPSByZXF1aXJlKCcuL2luamVjdEVsZW1lbnRXaXRoU3R5bGVzJyk7XG5cblxuICB2YXIgdGVzdFN0eWxlcyA9IE1vZGVybml6clByb3RvLnRlc3RTdHlsZXMgPSBpbmplY3RFbGVtZW50V2l0aFN0eWxlcztcbiAgXG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdFN0eWxlczsiLCJcbiAgdmFyIHRlc3RzID0gW107XG4gIFxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0czsiLCJ2YXIgTW9kZXJuaXpyID0gcmVxdWlyZSgnLi8uLi9saWIvTW9kZXJuaXpyJyk7XG52YXIgcHJlZml4ZXMgPSByZXF1aXJlKCcuLy4uL2xpYi9wcmVmaXhlcycpO1xudmFyIHRlc3RTdHlsZXMgPSByZXF1aXJlKCcuLy4uL2xpYi90ZXN0U3R5bGVzJyk7XG5cbi8qIVxue1xuICBcIm5hbWVcIjogXCJUb3VjaCBFdmVudHNcIixcbiAgXCJwcm9wZXJ0eVwiOiBcInRvdWNoZXZlbnRzXCIsXG4gIFwiY2FuaXVzZVwiIDogXCJ0b3VjaFwiLFxuICBcInRhZ3NcIjogW1wibWVkaWFcIiwgXCJhdHRyaWJ1dGVcIl0sXG4gIFwibm90ZXNcIjogW3tcbiAgICBcIm5hbWVcIjogXCJUb3VjaCBFdmVudHMgc3BlY1wiLFxuICAgIFwiaHJlZlwiOiBcImh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTMvV0QtdG91Y2gtZXZlbnRzLTIwMTMwMTI0L1wiXG4gIH1dLFxuICBcIndhcm5pbmdzXCI6IFtcbiAgICBcIkluZGljYXRlcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgVG91Y2ggRXZlbnRzIHNwZWMsIGFuZCBkb2VzIG5vdCBuZWNlc3NhcmlseSByZWZsZWN0IGEgdG91Y2hzY3JlZW4gZGV2aWNlXCJcbiAgXSxcbiAgXCJrbm93bkJ1Z3NcIjogW1xuICAgIFwiRmFsc2UtcG9zaXRpdmUgb24gc29tZSBjb25maWd1cmF0aW9ucyBvZiBOb2tpYSBOOTAwXCIsXG4gICAgXCJGYWxzZS1wb3NpdGl2ZSBvbiBzb21lIEJsYWNrQmVycnkgNi4wIGJ1aWxkcyDigJMgaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzLzM3MiNpc3N1ZWNvbW1lbnQtMzExMjY5NVwiXG4gIF1cbn1cbiEqL1xuLyogRE9DXG5cbkluZGljYXRlcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgVzNDIFRvdWNoIEV2ZW50cyBBUEkuXG5cblRoaXMgKmRvZXMgbm90KiBuZWNlc3NhcmlseSByZWZsZWN0IGEgdG91Y2hzY3JlZW4gZGV2aWNlOlxuXG4qIE9sZGVyIHRvdWNoc2NyZWVuIGRldmljZXMgb25seSBlbXVsYXRlIG1vdXNlIGV2ZW50c1xuKiBNb2Rlcm4gSUUgdG91Y2ggZGV2aWNlcyBpbXBsZW1lbnQgdGhlIFBvaW50ZXIgRXZlbnRzIEFQSSBpbnN0ZWFkOiB1c2UgYE1vZGVybml6ci5wb2ludGVyZXZlbnRzYCB0byBkZXRlY3Qgc3VwcG9ydCBmb3IgdGhhdFxuKiBTb21lIGJyb3dzZXJzICYgT1Mgc2V0dXBzIG1heSBlbmFibGUgdG91Y2ggQVBJcyB3aGVuIG5vIHRvdWNoc2NyZWVuIGlzIGNvbm5lY3RlZFxuKiBGdXR1cmUgYnJvd3NlcnMgbWF5IGltcGxlbWVudCBvdGhlciBldmVudCBtb2RlbHMgZm9yIHRvdWNoIGludGVyYWN0aW9uc1xuXG5TZWUgdGhpcyBhcnRpY2xlOiBbWW91IENhbid0IERldGVjdCBBIFRvdWNoc2NyZWVuXShodHRwOi8vd3d3LnN0dWNveC5jb20vYmxvZy95b3UtY2FudC1kZXRlY3QtYS10b3VjaHNjcmVlbi8pLlxuXG5JdCdzIHJlY29tbWVuZGVkIHRvIGJpbmQgYm90aCBtb3VzZSBhbmQgdG91Y2gvcG9pbnRlciBldmVudHMgc2ltdWx0YW5lb3VzbHkg4oCTIHNlZSBbdGhpcyBIVE1MNSBSb2NrcyB0dXRvcmlhbF0oaHR0cDovL3d3dy5odG1sNXJvY2tzLmNvbS9lbi9tb2JpbGUvdG91Y2hhbmRtb3VzZS8pLlxuXG5UaGlzIHRlc3Qgd2lsbCBhbHNvIHJldHVybiBgdHJ1ZWAgZm9yIEZpcmVmb3ggNCBNdWx0aXRvdWNoIHN1cHBvcnQuXG5cbiovXG5cbiAgLy8gQ2hyb21lIChkZXNrdG9wKSB1c2VkIHRvIGxpZSBhYm91dCBpdHMgc3VwcG9ydCBvbiB0aGlzLCBidXQgdGhhdCBoYXMgc2luY2UgYmVlbiByZWN0aWZpZWQ6IGh0dHA6Ly9jcmJ1Zy5jb20vMzY0MTVcbiAgTW9kZXJuaXpyLmFkZFRlc3QoJ3RvdWNoZXZlbnRzJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJvb2w7XG4gICAgaWYoKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKSB7XG4gICAgICBib29sID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHF1ZXJ5ID0gWydAbWVkaWEgKCcscHJlZml4ZXMuam9pbigndG91Y2gtZW5hYmxlZCksKCcpLCdoZWFydHonLCcpJywneyNtb2Rlcm5penJ7dG9wOjlweDtwb3NpdGlvbjphYnNvbHV0ZX19J10uam9pbignJyk7XG4gICAgICB0ZXN0U3R5bGVzKHF1ZXJ5LCBmdW5jdGlvbiggbm9kZSApIHtcbiAgICAgICAgYm9vbCA9IG5vZGUub2Zmc2V0VG9wID09PSA5O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBib29sO1xuICB9KTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKmdsb2JhbHMgSGFuZGxlYmFyczogdHJ1ZSAqL1xudmFyIGJhc2UgPSByZXF1aXJlKFwiLi9oYW5kbGViYXJzL2Jhc2VcIik7XG5cbi8vIEVhY2ggb2YgdGhlc2UgYXVnbWVudCB0aGUgSGFuZGxlYmFycyBvYmplY3QuIE5vIG5lZWQgdG8gc2V0dXAgaGVyZS5cbi8vIChUaGlzIGlzIGRvbmUgdG8gZWFzaWx5IHNoYXJlIGNvZGUgYmV0d2VlbiBjb21tb25qcyBhbmQgYnJvd3NlIGVudnMpXG52YXIgU2FmZVN0cmluZyA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvc2FmZS1zdHJpbmdcIilbXCJkZWZhdWx0XCJdO1xudmFyIEV4Y2VwdGlvbiA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvZXhjZXB0aW9uXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvdXRpbHNcIik7XG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvcnVudGltZVwiKTtcblxuLy8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXG52YXIgY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBoYiA9IG5ldyBiYXNlLkhhbmRsZWJhcnNFbnZpcm9ubWVudCgpO1xuXG4gIFV0aWxzLmV4dGVuZChoYiwgYmFzZSk7XG4gIGhiLlNhZmVTdHJpbmcgPSBTYWZlU3RyaW5nO1xuICBoYi5FeGNlcHRpb24gPSBFeGNlcHRpb247XG4gIGhiLlV0aWxzID0gVXRpbHM7XG4gIGhiLmVzY2FwZUV4cHJlc3Npb24gPSBVdGlscy5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIGhiLlZNID0gcnVudGltZTtcbiAgaGIudGVtcGxhdGUgPSBmdW5jdGlvbihzcGVjKSB7XG4gICAgcmV0dXJuIHJ1bnRpbWUudGVtcGxhdGUoc3BlYywgaGIpO1xuICB9O1xuXG4gIHJldHVybiBoYjtcbn07XG5cbnZhciBIYW5kbGViYXJzID0gY3JlYXRlKCk7XG5IYW5kbGViYXJzLmNyZWF0ZSA9IGNyZWF0ZTtcblxuSGFuZGxlYmFyc1snZGVmYXVsdCddID0gSGFuZGxlYmFycztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIYW5kbGViYXJzOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIFV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgRXhjZXB0aW9uID0gcmVxdWlyZShcIi4vZXhjZXB0aW9uXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIFZFUlNJT04gPSBcIjIuMC4wXCI7XG5leHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO3ZhciBDT01QSUxFUl9SRVZJU0lPTiA9IDY7XG5leHBvcnRzLkNPTVBJTEVSX1JFVklTSU9OID0gQ09NUElMRVJfUkVWSVNJT047XG52YXIgUkVWSVNJT05fQ0hBTkdFUyA9IHtcbiAgMTogJzw9IDEuMC5yYy4yJywgLy8gMS4wLnJjLjIgaXMgYWN0dWFsbHkgcmV2MiBidXQgZG9lc24ndCByZXBvcnQgaXRcbiAgMjogJz09IDEuMC4wLXJjLjMnLFxuICAzOiAnPT0gMS4wLjAtcmMuNCcsXG4gIDQ6ICc9PSAxLngueCcsXG4gIDU6ICc9PSAyLjAuMC1hbHBoYS54JyxcbiAgNjogJz49IDIuMC4wLWJldGEuMSdcbn07XG5leHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xudmFyIGlzQXJyYXkgPSBVdGlscy5pc0FycmF5LFxuICAgIGlzRnVuY3Rpb24gPSBVdGlscy5pc0Z1bmN0aW9uLFxuICAgIHRvU3RyaW5nID0gVXRpbHMudG9TdHJpbmcsXG4gICAgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5mdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG59XG5cbmV4cG9ydHMuSGFuZGxlYmFyc0Vudmlyb25tZW50ID0gSGFuZGxlYmFyc0Vudmlyb25tZW50O0hhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nLFxuXG4gIHJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBpZiAoZm4pIHsgdGhyb3cgbmV3IEV4Y2VwdGlvbignQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBoZWxwZXJzJyk7IH1cbiAgICAgIFV0aWxzLmV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24obmFtZSwgcGFydGlhbCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBVdGlscy5leHRlbmQodGhpcy5wYXJ0aWFscywgIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBBIG1pc3NpbmcgZmllbGQgaW4gYSB7e2Zvb319IGNvbnN0dWN0LlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU29tZW9uZSBpcyBhY3R1YWxseSB0cnlpbmcgdG8gY2FsbCBzb21ldGhpbmcsIGJsb3cgdXAuXG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFwiTWlzc2luZyBoZWxwZXI6ICdcIiArIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoLTFdLm5hbWUgKyBcIidcIik7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZihjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICBpZihjb250ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgICAgb3B0aW9ucy5pZHMgPSBbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzLmVhY2goY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICB2YXIgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBVdGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMubmFtZSk7XG4gICAgICAgIG9wdGlvbnMgPSB7ZGF0YTogZGF0YX07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoJyk7XG4gICAgfVxuXG4gICAgdmFyIGZuID0gb3B0aW9ucy5mbiwgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZTtcbiAgICB2YXIgaSA9IDAsIHJldCA9IFwiXCIsIGRhdGE7XG5cbiAgICB2YXIgY29udGV4dFBhdGg7XG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgY29udGV4dFBhdGggPSBVdGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKSArICcuJztcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihjb250ZXh0KSkgeyBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpOyB9XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICB9XG5cbiAgICBpZihjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKGlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgICAgZm9yKHZhciBqID0gY29udGV4dC5sZW5ndGg7IGk8ajsgaSsrKSB7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEuaW5kZXggPSBpO1xuICAgICAgICAgICAgZGF0YS5maXJzdCA9IChpID09PSAwKTtcbiAgICAgICAgICAgIGRhdGEubGFzdCAgPSAoaSA9PT0gKGNvbnRleHQubGVuZ3RoLTEpKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbaV0sIHsgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gY29udGV4dCkge1xuICAgICAgICAgIGlmKGNvbnRleHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgICAgICBkYXRhLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgZGF0YS5pbmRleCA9IGk7XG4gICAgICAgICAgICAgIGRhdGEuZmlyc3QgPSAoaSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsga2V5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2tleV0sIHtkYXRhOiBkYXRhfSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoaSA9PT0gMCl7XG4gICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7IGNvbmRpdGlvbmFsID0gY29uZGl0aW9uYWwuY2FsbCh0aGlzKTsgfVxuXG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpcyB0byByZW5kZXIgdGhlIHBvc2l0aXZlIHBhdGggaWYgdGhlIHZhbHVlIGlzIHRydXRoeSBhbmQgbm90IGVtcHR5LlxuICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG4gICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cbiAgICBpZiAoKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsKSB8fCBVdGlscy5pc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVyc1snaWYnXS5jYWxsKHRoaXMsIGNvbmRpdGlvbmFsLCB7Zm46IG9wdGlvbnMuaW52ZXJzZSwgaW52ZXJzZTogb3B0aW9ucy5mbiwgaGFzaDogb3B0aW9ucy5oYXNofSk7XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIHZhciBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gVXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICAgIG9wdGlvbnMgPSB7ZGF0YTpkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgbGV2ZWwgPSBvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwgPyBwYXJzZUludChvcHRpb25zLmRhdGEubGV2ZWwsIDEwKSA6IDE7XG4gICAgaW5zdGFuY2UubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvb2t1cCcsIGZ1bmN0aW9uKG9iaiwgZmllbGQpIHtcbiAgICByZXR1cm4gb2JqICYmIG9ialtmaWVsZF07XG4gIH0pO1xufVxuXG52YXIgbG9nZ2VyID0ge1xuICBtZXRob2RNYXA6IHsgMDogJ2RlYnVnJywgMTogJ2luZm8nLCAyOiAnd2FybicsIDM6ICdlcnJvcicgfSxcblxuICAvLyBTdGF0ZSBlbnVtXG4gIERFQlVHOiAwLFxuICBJTkZPOiAxLFxuICBXQVJOOiAyLFxuICBFUlJPUjogMyxcbiAgbGV2ZWw6IDMsXG5cbiAgLy8gY2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgbWVzc2FnZSkge1xuICAgIGlmIChsb2dnZXIubGV2ZWwgPD0gbGV2ZWwpIHtcbiAgICAgIHZhciBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZVttZXRob2RdKSB7XG4gICAgICAgIGNvbnNvbGVbbWV0aG9kXS5jYWxsKGNvbnNvbGUsIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMubG9nZ2VyID0gbG9nZ2VyO1xudmFyIGxvZyA9IGxvZ2dlci5sb2c7XG5leHBvcnRzLmxvZyA9IGxvZztcbnZhciBjcmVhdGVGcmFtZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgZnJhbWUgPSBVdGlscy5leHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn07XG5leHBvcnRzLmNyZWF0ZUZyYW1lID0gY3JlYXRlRnJhbWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgdmFyIGxpbmU7XG4gIGlmIChub2RlICYmIG5vZGUuZmlyc3RMaW5lKSB7XG4gICAgbGluZSA9IG5vZGUuZmlyc3RMaW5lO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBub2RlLmZpcnN0Q29sdW1uO1xuICB9XG5cbiAgdmFyIHRtcCA9IEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBlcnJvclByb3BzLmxlbmd0aDsgaWR4KyspIHtcbiAgICB0aGlzW2Vycm9yUHJvcHNbaWR4XV0gPSB0bXBbZXJyb3JQcm9wc1tpZHhdXTtcbiAgfVxuXG4gIGlmIChsaW5lKSB7XG4gICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcbiAgICB0aGlzLmNvbHVtbiA9IG5vZGUuZmlyc3RDb2x1bW47XG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV4Y2VwdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIEV4Y2VwdGlvbiA9IHJlcXVpcmUoXCIuL2V4Y2VwdGlvblwiKVtcImRlZmF1bHRcIl07XG52YXIgQ09NUElMRVJfUkVWSVNJT04gPSByZXF1aXJlKFwiLi9iYXNlXCIpLkNPTVBJTEVSX1JFVklTSU9OO1xudmFyIFJFVklTSU9OX0NIQU5HRVMgPSByZXF1aXJlKFwiLi9iYXNlXCIpLlJFVklTSU9OX0NIQU5HRVM7XG52YXIgY3JlYXRlRnJhbWUgPSByZXF1aXJlKFwiLi9iYXNlXCIpLmNyZWF0ZUZyYW1lO1xuXG5mdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcbiAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgdmFyIHJ1bnRpbWVWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgICBjb21waWxlclZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiBcIitcbiAgICAgICAgICAgIFwiUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoXCIrcnVudGltZVZlcnNpb25zK1wiKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKFwiK2NvbXBpbGVyVmVyc2lvbnMrXCIpLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFwiVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYSBuZXdlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiBcIitcbiAgICAgICAgICAgIFwiUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uIChcIitjb21waWxlckluZm9bMV0rXCIpLlwiKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjsvLyBUT0RPOiBSZW1vdmUgdGhpcyBsaW5lIGFuZCBicmVhayB1cCBjb21waWxlUGFydGlhbFxuXG5mdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGVcIik7XG4gIH1cbiAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcbiAgfVxuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgdmFyIGludm9rZVBhcnRpYWxXcmFwcGVyID0gZnVuY3Rpb24ocGFydGlhbCwgaW5kZW50LCBuYW1lLCBjb250ZXh0LCBoYXNoLCBoZWxwZXJzLCBwYXJ0aWFscywgZGF0YSwgZGVwdGhzKSB7XG4gICAgaWYgKGhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIGhhc2gpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIG5hbWUsIGNvbnRleHQsIGhlbHBlcnMsIHBhcnRpYWxzLCBkYXRhLCBkZXB0aHMpO1xuXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHsgaGVscGVyczogaGVscGVycywgcGFydGlhbHM6IHBhcnRpYWxzLCBkYXRhOiBkYXRhLCBkZXB0aHM6IGRlcHRocyB9O1xuICAgICAgcGFydGlhbHNbbmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB7IGRhdGE6IGRhdGEgIT09IHVuZGVmaW5lZCwgY29tcGF0OiB0ZW1wbGF0ZVNwZWMuY29tcGF0IH0sIGVudik7XG4gICAgICByZXN1bHQgPSBwYXJ0aWFsc1tuYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgIHZhciBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBpbmRlbnQgKyBsaW5lc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJUaGUgcGFydGlhbCBcIiArIG5hbWUgKyBcIiBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlXCIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBKdXN0IGFkZCB3YXRlclxuICB2YXIgY29udGFpbmVyID0ge1xuICAgIGxvb2t1cDogZnVuY3Rpb24oZGVwdGhzLCBuYW1lKSB7XG4gICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGRlcHRoc1tpXSAmJiBkZXB0aHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhbWJkYTogZnVuY3Rpb24oY3VycmVudCwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcbiAgICB9LFxuXG4gICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcbiAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuICAgIGZuOiBmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVTcGVjW2ldO1xuICAgIH0sXG5cbiAgICBwcm9ncmFtczogW10sXG4gICAgcHJvZ3JhbTogZnVuY3Rpb24oaSwgZGF0YSwgZGVwdGhzKSB7XG4gICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSBwcm9ncmFtKHRoaXMsIGksIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24oZGF0YSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlIChkYXRhICYmIGRlcHRoLS0pIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIHZhciByZXQgPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIHJldCA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgdmFyIHJldCA9IGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgdmFyIGRlcHRocztcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgZGVwdGhzID0gb3B0aW9ucy5kZXB0aHMgPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IFtjb250ZXh0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGVTcGVjLm1haW4uY2FsbChjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGRlcHRocyk7XG4gIH07XG4gIHJldC5pc1RvcCA9IHRydWU7XG5cbiAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5oZWxwZXJzLCBlbnYuaGVscGVycyk7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBvcHRpb25zLmhlbHBlcnM7XG4gICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcHRpb25zLnBhcnRpYWxzO1xuICAgIH1cbiAgfTtcblxuICByZXQuX2NoaWxkID0gZnVuY3Rpb24oaSwgZGF0YSwgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO2Z1bmN0aW9uIHByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVwdGhzKSB7XG4gIHZhciBwcm9nID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgcmV0dXJuIGZuLmNhbGwoY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBvcHRpb25zLmRhdGEgfHwgZGF0YSwgZGVwdGhzICYmIFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKSk7XG4gIH07XG4gIHByb2cucHJvZ3JhbSA9IGk7XG4gIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcbiAgcmV0dXJuIHByb2c7XG59XG5cbmV4cG9ydHMucHJvZ3JhbSA9IHByb2dyYW07ZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBuYW1lLCBjb250ZXh0LCBoZWxwZXJzLCBwYXJ0aWFscywgZGF0YSwgZGVwdGhzKSB7XG4gIHZhciBvcHRpb25zID0geyBwYXJ0aWFsOiB0cnVlLCBoZWxwZXJzOiBoZWxwZXJzLCBwYXJ0aWFsczogcGFydGlhbHMsIGRhdGE6IGRhdGEsIGRlcHRoczogZGVwdGhzIH07XG5cbiAgaWYocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcIlRoZSBwYXJ0aWFsIFwiICsgbmFtZSArIFwiIGNvdWxkIG5vdCBiZSBmb3VuZFwiKTtcbiAgfSBlbHNlIGlmKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydHMuaW52b2tlUGFydGlhbCA9IGludm9rZVBhcnRpYWw7ZnVuY3Rpb24gbm9vcCgpIHsgcmV0dXJuIFwiXCI7IH1cblxuZXhwb3J0cy5ub29wID0gbm9vcDtmdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufSIsIlwidXNlIHN0cmljdFwiO1xuLy8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcbmZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG4gIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xufVxuXG5TYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gXCJcIiArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTYWZlU3RyaW5nOyIsIlwidXNlIHN0cmljdFwiO1xuLypqc2hpbnQgLVcwMDQgKi9cbnZhciBTYWZlU3RyaW5nID0gcmVxdWlyZShcIi4vc2FmZS1zdHJpbmdcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgZXNjYXBlID0ge1xuICBcIiZcIjogXCImYW1wO1wiLFxuICBcIjxcIjogXCImbHQ7XCIsXG4gIFwiPlwiOiBcIiZndDtcIixcbiAgJ1wiJzogXCImcXVvdDtcIixcbiAgXCInXCI6IFwiJiN4Mjc7XCIsXG4gIFwiYFwiOiBcIiYjeDYwO1wiXG59O1xuXG52YXIgYmFkQ2hhcnMgPSAvWyY8PlwiJ2BdL2c7XG52YXIgcG9zc2libGUgPSAvWyY8PlwiJ2BdLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5mdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnRzLmV4dGVuZCA9IGV4dGVuZDt2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbnZhciBpc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG59O1xuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICBpZiAoc3RyaW5nIGluc3RhbmNlb2YgU2FmZVN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcudG9TdHJpbmcoKTtcbiAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9IGVsc2UgaWYgKCFzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gIH1cblxuICAvLyBGb3JjZSBhIHN0cmluZyBjb252ZXJzaW9uIGFzIHRoaXMgd2lsbCBiZSBkb25lIGJ5IHRoZSBhcHBlbmQgcmVnYXJkbGVzcyBhbmRcbiAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuICBzdHJpbmcgPSBcIlwiICsgc3RyaW5nO1xuXG4gIGlmKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHsgcmV0dXJuIHN0cmluZzsgfVxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYmFkQ2hhcnMsIGVzY2FwZUNoYXIpO1xufVxuXG5leHBvcnRzLmVzY2FwZUV4cHJlc3Npb24gPSBlc2NhcGVFeHByZXNzaW9uO2Z1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O2Z1bmN0aW9uIGFwcGVuZENvbnRleHRQYXRoKGNvbnRleHRQYXRoLCBpZCkge1xuICByZXR1cm4gKGNvbnRleHRQYXRoID8gY29udGV4dFBhdGggKyAnLicgOiAnJykgKyBpZDtcbn1cblxuZXhwb3J0cy5hcHBlbmRDb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoOyIsIi8vIENyZWF0ZSBhIHNpbXBsZSBwYXRoIGFsaWFzIHRvIGFsbG93IGJyb3dzZXJpZnkgdG8gcmVzb2x2ZVxuLy8gdGhlIHJ1bnRpbWUgb24gYSBzdXBwb3J0ZWQgcGF0aC5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKVtcImRlZmF1bHRcIl07XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5BcHAgICAgICA9IHJlcXVpcmUgJ2FwcCdcbkJhY2tib25lID0gcmVxdWlyZSBcImJhY2tib25lXCJcblxuY2xhc3MgQXBwLkNvbGxlY3Rpb25zLkFwaUNvbGxlY3Rpb24gZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uXG5cbiAgYXBpVXJsOiAnLydcblxuICB1cmw6ID0+XG4gICAgQXBwLnJlcXVlc3QoJ2FwaVJvb3QnKSArIF8ucmVzdWx0KEAsICdhcGlVcmwnKVxuXG5cbiAgcGFyc2U6IChyZXNwb25zZSkgPT5cbiAgICByZXNwb25zZS5kYXRhXG5cblxuXG4gIGZldGNoOiAob3B0aW9ucykgPT5cblxuICAgICMgQ2hlY2sgaWYgd2UgbmVlZCB0byBwYXNzIGFsb25nIGFueSBnZXQgdmFyaWFibGVzXG4gICAgaWYgbm90IEBkYXRhP1xuICAgICAgZGF0YSA9IHt9XG5cbiAgICAjIHNldCBleHRyYSBmaWVsZHNcbiAgICBpZiBub3QgXy5pc0VtcHR5KEBkYXRhKVxuXG4gICAgICBpZiBub3Qgb3B0aW9ucz9cbiAgICAgICAgb3B0aW9ucyA9IHt9XG5cbiAgICAgIGlmIG5vdCBvcHRpb25zLmRhdGE/XG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9XG5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IF8uZXh0ZW5kIHt9LCBAZGF0YSwgb3B0aW9ucy5kYXRhXG5cbiAgICBBcHAuQ29sbGVjdGlvbnMuQXBpQ29sbGVjdGlvbi5fX3N1cGVyX18uZmV0Y2guYXBwbHkgQCwgWyBvcHRpb25zIF1cblxuXG4iLCJcInVzZSBzdHJpY3RcIlxuXG5BcHAgICAgICA9IHJlcXVpcmUgJ2FwcCdcblxuY2xhc3MgQXBwLkNvbGxlY3Rpb25zLkluZmluaXRlU2Nyb2xsQ29sbGVjdGlvbiBleHRlbmRzIEFwcC5Db2xsZWN0aW9ucy5BcGlDb2xsZWN0aW9uXG5cbiAgbmV4dFBhZ2U6IChhcmdzKSA9PlxuXG4gICAgQGZldGNoIGFyZ3NcblxuXG4gIHBhcnNlOiAocmVzcG9uc2UpID0+XG5cbiAgICAjIGNoZWNrIGlmIHRoZSBjb2xsZWN0aW9uIGhhcyBhIG5leHQgcGFnZVxuICAgIGlmIEBkYXRhPyBhbmQgQGRhdGEucGVyUGFnZT8gYW5kIHJlc3BvbnNlLmRhdGEubGVuZ3RoIDwgQGRhdGEucGVyUGFnZVxuICAgICAgQGhhc05leHQgPSBmYWxzZVxuXG4gICAgcmVzcG9uc2UuZGF0YVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbkFwcCAgICAgICA9IHJlcXVpcmUgXCJhcHBcIlxuJCAgICAgICAgID0gcmVxdWlyZSBcImpxdWVyeVwiXG5CYWNrYm9uZSAgPSByZXF1aXJlIFwiYmFja2JvbmVcIlxuXyAgICAgICAgID0gcmVxdWlyZSBcInVuZGVyc2NvcmVcIlxuXG5cbkFwcC5hZGRJbml0aWFsaXplciAtPlxuXG4gICMgc2V0IGJhY2tib25lIGdsb2JhbCBvcHRpb25zXG4gIEJhY2tib25lLmVtdWxhdGVKU09OID0gdHJ1ZVxuICBCYWNrYm9uZS5lbXVsYXRlSFRUUCA9IHRydWVcblxuICB0cmltQ2hhciA9IChzdHIsIGNoYXIpIC0+XG5cbiAgICBpZiBzdHIuY2hhckF0KDApIGlzIGNoYXJcbiAgICAgIHN0ciA9IHN0ci5zdWJzdHIgMVxuXG4gICAgaWYgc3RyLmNoYXJBdCggc3RyLmxlbmd0aCAtIDEgKSBpcyBjaGFyXG4gICAgICBzdHIgPSBzdHIuc3Vic3RyIDAsIHN0ci5sZW5ndGggLSAxXG5cbiAgICBzdHJcblxuXG4gIG5vcm1hbGl6ZVJlcXVlc3QgPSAodXJsKSAtPlxuXG4gICAgIyBnZXQgdGhlIEFQSSByZXF1ZXN0IHBhdGggZnJvbSB0aGUgVVJMXG4gICAgYXBpUm9vdCA9IEFwcC5yZXF1ZXN0ICdhcGlSb290J1xuICAgIGlmIHVybC5pbmRleE9mKGFwaVJvb3QpID49IDBcbiAgICAgIHVybFBhcnRzID0gdXJsLnNwbGl0IGFwaVJvb3RcbiAgICAgIHVybCA9IHVybFBhcnRzWzFdXG5cbiAgICAjIHRyaW0gc2xhc2hlc1xuICAgIHVybCA9IHRyaW1DaGFyIHVybCwgJy8nXG5cbiAgICB1cmxcblxuXG4gIHJlYWREb20gPSAob3B0aW9ucykgLT5cblxuICAgICMgY2hlY2sgRE9NIVxuICAgIGlmIG9wdGlvbnMudHlwZSBpcyAnR0VUJ1xuXG4gICAgICAjIGdldCBBUEkgcmVxdWVzdCBmcm9tIHVybFxuICAgICAgcmVxdWVzdCA9IG5vcm1hbGl6ZVJlcXVlc3Qgb3B0aW9ucy51cmxcbiAgICAgIHJlcXVlc3RJRFF1ZXJ5ID0gJydcblxuICAgICAgaWYgb3B0aW9ucy5kYXRhPyBhbmQgb3B0aW9ucy5kYXRhLnJlcXVlc3RJRD8gYW5kIG9wdGlvbnMuZGF0YS5yZXF1ZXN0SUQgaXNudCAnJ1xuICAgICAgICByZXF1ZXN0SURRdWVyeSA9ICdbZGF0YS1pZD1cIicgKyBvcHRpb25zLmRhdGEucmVxdWVzdElEICsgJ1wiXSdcblxuXG4gICAgICAkZGF0YUVsZW1lbnQgPSAkKCcuYndhcGktY2FsbC1kYXRhW2RhdGEtdHlwZT1cImdldFwiXScgKyByZXF1ZXN0SURRdWVyeSArICdbZGF0YS1yZXF1ZXN0PVwiJyArIHJlcXVlc3QgKyAnXCJdOm5vdCgubG9hZGVkKScpXG5cbiAgICAgIGlmICRkYXRhRWxlbWVudC5sZW5ndGggPiAwXG5cbiAgICAgICAgIyBhZGQgbG9hZGVkIGNsYXNzXG4gICAgICAgICRkYXRhRWxlbWVudC5hZGRDbGFzcygnbG9hZGVkJylcblxuXG4gICAgICAgICMgdHJ5IHRvIGxvb2sgZm9yIG1vZGVsIGRhdGEgb24gZG9tLlxuICAgICAgICBkYXRhID0gQXBwLkhlbHBlcnMuZGF0YS5nZXRFbGVtZW50RGF0YSggJGRhdGFFbGVtZW50IClcblxuICAgICAgICBpZiBkYXRhPyBhbmQgZGF0YSBpc250ICcnIGFuZCBub3QgXy5pc0VtcHR5KGRhdGEpXG5cbiAgICAgICAgICAjIGNvbnNvbGUubG9nICdVc2luZyBET00hISEnLCByZXF1ZXN0XG5cbiAgICAgICAgICAjIGNoZWNrIGlmIHdlIGhhdmUgdGhlIG9wdGlvbnMgaGFzaFxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIG5vdCBvcHRpb25zP1xuXG4gICAgICAgICAgIyBjYWxsIGNhbGxiYWNrIGZ1bmN0aW9ucywgaWYgZGVmaW5lZFxuICAgICAgICAgIGlmIGRhdGEubWV0YS5jb2RlIGlzIDIwMFxuXG4gICAgICAgICAgICAjIGNhbGwgU1VDQ0VTUyBjYWxsYmFja1xuICAgICAgICAgICAgaWYgdHlwZW9mIG9wdGlvbnMuc3VjY2VzcyBpcyAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgIG9wdGlvbnMuc3VjY2Vzcy5hcHBseSBALCBbZGF0YV1cblxuICAgICAgICAgIGVsc2VcblxuICAgICAgICAgICAgIyBjYWxsIEVSUk9SIGNhbGxiYWNrXG4gICAgICAgICAgICBpZiB0eXBlb2Ygb3B0aW9ucy5lcnJvciBpcyAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgIG9wdGlvbnMuZXJyb3IuYXBwbHkgQCwgW2RhdGFdXG5cbiAgICAgICAgICAjIGNhbGwgQ09NUExFVEUgY2FsbGJhY2tcbiAgICAgICAgICBpZiB0eXBlb2Ygb3B0aW9ucy5jb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICAgICAgICBvcHRpb25zLmNvbXBsZXRlLmFwcGx5IEAsIFtkYXRhXVxuXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuXG5cblxuXG5cbiAgYWpheEltbWVkaWF0ZSA9IChvcHRpb25zKSAtPlxuXG4gICAgIyBDaGVjayBpZiB3ZSBjYW4gY2FsbCB0aHJvdWdoIHRoZSBXZWJTb2NrZXQgYXBpXG4gICAgY29ubmVjdGVkID0gQXBwLmFwaVNvY2tldC5nZXQgJ2Nvbm5lY3RlZCcgaWYgQXBwLmFwaVNvY2tldD9cbiAgICBpZiBjb25uZWN0ZWQ/IGFuZCBjb25uZWN0ZWRcblxuICAgICAgIyBjb25zb2xlLmxvZyAnVXNpbmcgV2ViU29ja2V0cyEhISdcbiAgICAgIHhociA9IEFwcC5hcGlTb2NrZXQuY2FsbCBvcHRpb25zLnR5cGUsIG9wdGlvbnMudXJsLCBvcHRpb25zLmRhdGEsIG9wdGlvbnNcblxuICAgIGVsc2VcblxuICAgICAgIyBjb25zb2xlLmxvZyAnVXNpbmcgQUpBWCEhISdcbiAgICAgIHhociA9IGFqYXhCYWNrdXAgb3B0aW9uc1xuXG4gICAgeGhyXG5cblxuXG4gIGFwaUNhbGxTdGFjayA9IFtdXG5cbiAgYWpheERlYm91bmNlV3JhcHBlciA9IChmdW5jKSAtPlxuXG4gICAgIyBjb25zb2xlLmxvZyAnYWpheERlYm91bmNlV3JhcHBlcicsIGFwaUNhbGxTdGFja1xuXG4gICAgIyBjaGVjayBpZiB3ZSBoYXZlIGFueSBjYWxscyBpbiB0aGUgc3RhY2tcbiAgICByZXR1cm4gaWYgYXBpQ2FsbFN0YWNrLmxlbmd0aCA9PSAwXG5cbiAgICAjIGNvbnNvbGUubG9nICdTZW5kaW5nIGJhdGNoIHJlcXVlc3QgZm9yICcgKyBhcGlDYWxsU3RhY2subGVuZ3RoICsgJyBBUEkgY2FsbHMnXG5cbiAgICAjIGdldCBjb250ZW50IHR5cGUgZnJvbSBmaXJzdCBjYWxsIGluIHN0YWNrXG4gICAgY29udGVudFR5cGUgPSBhcGlDYWxsU3RhY2tbMF0uY29udGVudFR5cGVcbiAgICBkYXRhVHlwZSA9IFwianNvblwiXG4gICAgdHlwZSA9IFwiUE9TVFwiXG4gICAgYXBpUm9vdCA9IEFwcC5yZXF1ZXN0ICdhcGlSb290J1xuICAgIHVybCA9IGFwaVJvb3QgKyBcIjEvc2l0ZS9iYXRjaC9cIlxuXG5cbiAgICBkYXRhID0ge31cbiAgICBhcGlDYWxsT3B0aW9ucyA9IHt9XG5cbiAgICAjIGJ1aWxkICdzdWNjZXNzJywgJ2NvbXBsZXRlJyBhbmQgJ2Vycm9yJyBjYWxsYmFja3NcbiAgICBmb3IgYXBpQ2FsbCwgYXBpQ2FsbEluZGV4IGluIGFwaUNhbGxTdGFja1xuXG4gICAgICByZXF1ZXN0ID0gbm9ybWFsaXplUmVxdWVzdCBhcGlDYWxsLnVybFxuXG4gICAgICBpZiBhcGlDYWxsLmRhdGE/XG4gICAgICAgIGFwaUNhbGxEYXRhID0gYXBpQ2FsbC5kYXRhXG4gICAgICBlbHNlXG4gICAgICAgIGFwaUNhbGxEYXRhID0gJydcblxuICAgICAgcmVxdWVzdElEID0gYXBpQ2FsbEluZGV4ICsgJzonICsgYXBpQ2FsbC50eXBlICsgJzonICsgcmVxdWVzdFxuXG4gICAgICBkYXRhWyByZXF1ZXN0SUQgXSA9XG4gICAgICAgIHVybDogcmVxdWVzdFxuICAgICAgICB0eXBlOiBhcGlDYWxsLnR5cGVcbiAgICAgICAgZGF0YTogYXBpQ2FsbERhdGFcblxuICAgICAgYXBpQ2FsbE9wdGlvbnNbIHJlcXVlc3RJRCBdID0gYXBpQ2FsbFxuXG5cbiAgICBzdWNjZXNzID0gKGJhdGNoUmVzcG9uc2UsIGJhdGNoUmVzcG9uc2VUZXh0LCBiYXRjaFhIUikgLT5cbiAgICAgICMgY29uc29sZS5sb2cgJ2JhdGNoIHN1Y2Nlc3MnLCBiYXRjaFJlc3BvbnNlXG5cbiAgICAgICMgIyBjaGVjayBmb3IgZXJyb3IgcmVzcG9uc2VcbiAgICAgICMgaWYgYmF0Y2hSZXNwb25zZS5yZXN1bHQ/IGFuZCBiYXRjaFJlc3BvbnNlLnJlc3VsdCBpc250ICdzdWNjZXNzJyBhbmQgYmF0Y2hSZXNwb25zZS5yZXN1bHQgaXNudCAnYWJvcnQnXG5cbiAgICAgICMgICAjIHRyaWdnZXIgYXBwIGV2ZW50XG4gICAgICAjICAgQXBwLnZlbnQudHJpZ2dlciAnYWpheDplcnJvcicsIGJhdGNoUmVzcG9uc2UsIGJhdGNoUmVzcG9uc2VUZXh0LCBiYXRjaFhIUlxuXG4gICAgICAjICAgcmV0dXJuXG5cblxuICAgICAgIyBjaGVjayBlYWNoIHJlc3BvbnNlIGFuZCBjYWxsIHByb3BlciBjYWxsYmFjayAoJ3N1Y2Nlc3MnIG9yICdlcnJvcicpXG4gICAgICByZXNwb25zZXMgPSBiYXRjaFJlc3BvbnNlLmRhdGFcblxuICAgICAgaWYgbm90IHJlc3BvbnNlcz9cbiAgICAgICAgcmVzcG9uc2VzID0ge31cblxuICAgICAgIyBzYXZlIGJhdGNoIGNhbGxiYWNrcyBpbiBhbiBhcnJheVxuICAgICAgYmF0Y2hDYWxsYmFja3MgPSBbXVxuXG4gICAgICBmb3IgcmVxdWVzdElELCBhcGlDYWxsIG9mIGFwaUNhbGxPcHRpb25zXG4gICAgICAgICMgY29uc29sZS5sb2cgcmVxdWVzdElELCBhcGlDYWxsXG4gICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2VzWyByZXF1ZXN0SUQgXVxuXG4gICAgICAgIGlmIG5vdCByZXNwb25zZT9cbiAgICAgICAgICByZXNwb25zZSA9IHt9XG5cbiAgICAgICAgcmVzcG9uc2VSZXN1bHQgPSAnZXJyb3InXG4gICAgICAgIGlmIHJlc3BvbnNlLnN0YXR1cz8gYW5kIHJlc3BvbnNlLnN0YXR1cyBpcyAnc3VjY2VzcydcbiAgICAgICAgICByZXNwb25zZVJlc3VsdCA9ICdzdWNjZXNzJ1xuXG4gICAgICAgIGNhbGxiYWNrID0gYXBpQ2FsbFsgcmVzcG9uc2VSZXN1bHQgXVxuICAgICAgICBjb250ZXh0ID0gYXBpQ2FsbC5jb250ZXh0XG5cbiAgICAgICAgaWYgdHlwZW9mIGNhbGxiYWNrIGlzICdmdW5jdGlvbidcbiAgICAgICAgICBjYWxsYmFjay5hcHBseSBjb250ZXh0LCBbIHJlc3BvbnNlIF1cblxuICAgICAgICAjIGJhdGNoIGNhbGxiYWNrXG4gICAgICAgIGJhdGNoQ2FsbGJhY2sgPSBhcGlDYWxsWyAnYmF0Y2hTdWNjZXNzJyBdXG5cbiAgICAgICAgaWYgdHlwZW9mIGJhdGNoQ2FsbGJhY2sgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgICAgIGJhdGNoQ2FsbGJhY2tzLnB1c2hcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhcGlDYWxsWyAnYmF0Y2hTdWNjZXNzJyBdXG5cblxuICAgICAgZm9yIGJhdGNoQ2FsbGJhY2sgaW4gYmF0Y2hDYWxsYmFja3NcbiAgICAgICAgYmF0Y2hDYWxsYmFjay5jYWxsYmFjay5hcHBseSBiYXRjaENhbGxiYWNrLmNvbnRleHQsIFsgYmF0Y2hSZXNwb25zZSBdXG5cblxuICAgIGNvbXBsZXRlID0gLT5cbiAgICAgICMgY29uc29sZS5sb2cgJ2NvbXBsZXRlJywgYXJndW1lbnRzXG5cbiAgICAgICMgc2F2ZSBiYXRjaCBjYWxsYmFja3MgaW4gYW4gYXJyYXlcbiAgICAgIGJhdGNoQ2FsbGJhY2tzID0gW11cblxuICAgICAgIyBmaXJlICdjb21wbGV0ZScgY2FsbGJhY2sgZm9yIGFsbCByZXF1ZXN0cyBpbiBiYXRjaFxuICAgICAgZm9yIHJlcXVlc3RJRCwgYXBpQ2FsbCBvZiBhcGlDYWxsT3B0aW9uc1xuXG4gICAgICAgIGNhbGxiYWNrID0gYXBpQ2FsbFsgJ2NvbXBsZXRlJyBdXG4gICAgICAgIGNvbnRleHQgPSBhcGlDYWxsLmNvbnRleHRcblxuICAgICAgICBpZiB0eXBlb2YgY2FsbGJhY2sgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgICAgIGNhbGxiYWNrLmFwcGx5IGNvbnRleHQsIGFyZ3VtZW50c1xuXG4gICAgICAgICMgYmF0Y2ggY2FsbGJhY2tcbiAgICAgICAgYmF0Y2hDYWxsYmFjayA9IGFwaUNhbGxbICdiYXRjaENvbXBsZXRlJyBdXG5cbiAgICAgICAgaWYgdHlwZW9mIGJhdGNoQ2FsbGJhY2sgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgICAgIGJhdGNoQ2FsbGJhY2tzLnB1c2hcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhcGlDYWxsWyAnYmF0Y2hDb21wbGV0ZScgXVxuXG5cblxuICAgICAgZm9yIGJhdGNoQ2FsbGJhY2sgaW4gYmF0Y2hDYWxsYmFja3NcbiAgICAgICAgYmF0Y2hDYWxsYmFjay5jYWxsYmFjay5hcHBseSBiYXRjaENhbGxiYWNrLmNvbnRleHQsIGFyZ3VtZW50c1xuXG5cbiAgICBlcnJvciA9IC0+XG4gICAgICAjIGNvbnNvbGUubG9nICdlcnJvcicsIGFyZ3VtZW50c1xuXG4gICAgICAjIHNhdmUgYmF0Y2ggY2FsbGJhY2tzIGluIGFuIGFycmF5XG4gICAgICBiYXRjaENhbGxiYWNrcyA9IFtdXG5cbiAgICAgICMgZmlyZSAnZXJyb3InIGNhbGxiYWNrIGZvciBhbGwgcmVxdWVzdHMgaW4gYmF0Y2hcbiAgICAgIGZvciByZXF1ZXN0SUQsIGFwaUNhbGwgb2YgYXBpQ2FsbE9wdGlvbnNcblxuICAgICAgICBjYWxsYmFjayA9IGFwaUNhbGxbICdlcnJvcicgXVxuICAgICAgICBjb250ZXh0ID0gYXBpQ2FsbC5jb250ZXh0XG5cbiAgICAgICAgaWYgdHlwZW9mIGNhbGxiYWNrIGlzICdmdW5jdGlvbidcbiAgICAgICAgICBjYWxsYmFjay5hcHBseSBjb250ZXh0LCBhcmd1bWVudHNcblxuICAgICAgICAjIGJhdGNoIGNhbGxiYWNrXG4gICAgICAgIGJhdGNoQ2FsbGJhY2sgPSBhcGlDYWxsWyAnYmF0Y2hFcnJvcicgXVxuXG4gICAgICAgIGlmIHR5cGVvZiBiYXRjaENhbGxiYWNrIGlzICdmdW5jdGlvbidcbiAgICAgICAgICBiYXRjaENhbGxiYWNrcy5wdXNoXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICAgICAgICBjYWxsYmFjazogYXBpQ2FsbFsgJ2JhdGNoRXJyb3InIF1cblxuXG4gICAgICBmb3IgYmF0Y2hDYWxsYmFjayBpbiBiYXRjaENhbGxiYWNrc1xuICAgICAgICBiYXRjaENhbGxiYWNrLmNhbGxiYWNrLmFwcGx5IGJhdGNoQ2FsbGJhY2suY29udGV4dCwgYXJndW1lbnRzXG5cblxuICAgICMgYnVpbGQgbmV3IG9wdGlvbnMgZm9yIGJhdGNoIGNhbGxcbiAgICBvcHRpb25zID1cbiAgICAgIGVycm9yOiBlcnJvclxuICAgICAgc3VjY2Vzczogc3VjY2Vzc1xuICAgICAgY29tcGxldGU6IGNvbXBsZXRlXG4gICAgICBjb250ZW50VHlwZTogY29udGVudFR5cGVcbiAgICAgIGRhdGFUeXBlOiBkYXRhVHlwZVxuICAgICAgdHlwZTogdHlwZVxuICAgICAgdXJsOiB1cmxcbiAgICAgIGRhdGE6IGRhdGFcblxuXG4gICAgZnVuYyBvcHRpb25zXG5cbiAgICAjIHJlc2V0IGNhbGwgc3RhY2tcbiAgICBhcGlDYWxsU3RhY2sgPSBbXVxuXG5cblxuICBhamF4RGVib3VuY2VDYWxsYmFjayA9IF8ud3JhcCBhamF4SW1tZWRpYXRlLCBhamF4RGVib3VuY2VXcmFwcGVyXG4gIGFqYXhEZWJvdW5jZSA9IF8uZGVib3VuY2UgYWpheERlYm91bmNlQ2FsbGJhY2ssIDQwXG5cblxuXG4gICMjI1xuICBiYWNrdXAgQmFja2JvbmUgQUpBWCBmdW5jdGlvblxuICAjIyNcbiAgYWpheEJhY2t1cCA9IEJhY2tib25lLmFqYXhcblxuICAjIyNcbiAgb3ZlcnJpZGUgQmFja2JvbmUgQWpheFxuICAjIyNcbiAgQmFja2JvbmUuYWpheCA9IChvcHRpb25zKSAtPlxuXG5cbiAgICAjIyNcbiAgICBDaGVjayBpZiBjYWxsIGNhbiBiZSBmZXRjaGVkIGZyb20gRE9NXG4gICAgIyMjXG4gICAgcmVzdWx0ID0gcmVhZERvbSBvcHRpb25zXG4gICAgaWYgcmVzdWx0IGlzIHRydWVcbiAgICAgIHJldHVybiByZXN1bHRcblxuXG4gICAgIyBzZXQgY29udGV4dCBiYXNlZCBvbiBvcHRpb25cbiAgICBpZiBub3Qgb3B0aW9ucy5jb250ZXh0P1xuICAgICAgb3B0aW9ucy5jb250ZXh0ID0gQFxuXG5cbiAgICBpZiBvcHRpb25zLmJhdGNoPyBhbmQgb3B0aW9ucy5iYXRjaCBpcyB0cnVlXG5cbiAgICAgICMgQWRkIHRvIGRlYm91bmNlZCBiYXRjaCBjYWxsXG4gICAgICBhcGlDYWxsU3RhY2sucHVzaCBvcHRpb25zXG4gICAgICBhamF4RGVib3VuY2UuYXBwbHkgQFxuXG4gICAgZWxzZVxuXG4gICAgICAjIENhbGwgYWpheCBpbW1lZGlhdGVseSBpZiBcImltbWVkaWF0ZVwiIGlzIHNldCB0byB0cnVlXG4gICAgICBhamF4SW1tZWRpYXRlLmFwcGx5IEAsIFtvcHRpb25zXVxuXG5cblxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuQXBwICAgICAgPSByZXF1aXJlICdhcHAnXG5CYWNrYm9uZSA9IHJlcXVpcmUgJ2JhY2tib25lJ1xuXG5jbGFzcyBBcHAuQ29udHJvbGxlcnMuQXBwQ29udHJvbGxlciBleHRlbmRzIEJhY2tib25lLk1hcmlvbmV0dGUuQ29udHJvbGxlclxuXG4gIGdldEFwaVJvb3Q6IC0+XG5cbiAgICB3cFJvb3QgPSAnLydcbiAgICBhcGlSb290ID0gJz9id2FwaT0vJ1xuXG4gICAgaWYgQXBwLlNTT3B0aW9ucz9cbiAgICAgIHdwUm9vdCA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICd3cFJvb3QnXG5cbiAgICB3cFJvb3QgKyBhcGlSb290XG5cblxuICBpc0V2ZW46IChuKSAtPlxuICAgIG4gJSAyIGlzIDBcbiIsIlwidXNlIHN0cmljdFwiXG5cblxuXyAgICAgICAgID0gcmVxdWlyZSgndW5kZXJzY29yZScpXG5CYWNrYm9uZSAgPSByZXF1aXJlKCdiYWNrYm9uZScpXG4kICAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKVxuTW9kZXJuaXpyID0gcmVxdWlyZShcIm1vZGVybml6clwiKVxuXG5cblxuY2xhc3MgQnJvd3NlclN1cHBvcnRIZWxwZXIgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbFxuXG4gIGNoZWNrRm9ySUU6ICgpIC0+XG5cbiAgICBpZiAoIG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDcuXCIpID4gMCApIG9yICggbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgOC5cIikgPiAwICkgb3IgKCBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5LlwiKSA+IDAgKVxuICAgICAgIyBjb25zb2xlLmxvZyAnZm91bmQgSUU5J1xuICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICAjIGNvbnNvbGUubG9nICdub3QgSUUnXG4gICAgICByZXR1cm4gZmFsc2VcblxuICBpZUFqYXhTdXBwb3J0OiAoKSAtPlxuXG4gICAgaWYgKCBAY2hlY2tGb3JJRSgpIClcblxuICAgICAgaWYgd2luZG93LlhEb21haW5SZXF1ZXN0XG4gICAgICAgICQuYWpheFRyYW5zcG9ydCAocykgLT5cbiAgICAgICAgICBpZiBzLmNyb3NzRG9tYWluIGFuZCBzLmFzeW5jXG4gICAgICAgICAgICBpZiBzLnRpbWVvdXRcbiAgICAgICAgICAgICAgcy54ZHJUaW1lb3V0ID0gcy50aW1lb3V0XG4gICAgICAgICAgICAgIGRlbGV0ZSBzLnRpbWVvdXRcbiAgICAgICAgICAgIHhkciA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgc2VuZDogKF8sIGNvbXBsZXRlKSAtPlxuICAgICAgICAgICAgICBjYWxsYmFjayA9IChzdGF0dXMsIHN0YXR1c1RleHQsIHJlc3BvbnNlcywgcmVzcG9uc2VIZWFkZXJzKSAtPlxuICAgICAgICAgICAgICAgIHhkci5vbmxvYWQgPSB4ZHIub25lcnJvciA9IHhkci5vbnRpbWVvdXQgPSBqUXVlcnkubm9vcFxuICAgICAgICAgICAgICAgIHhkciA9IGB1bmRlZmluZWRgXG4gICAgICAgICAgICAgICAgY29tcGxldGUgc3RhdHVzLCBzdGF0dXNUZXh0LCByZXNwb25zZXMsIHJlc3BvbnNlSGVhZGVyc1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB4ZHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKVxuICAgICAgICAgICAgICB4ZHIub25sb2FkID0gLT5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayAyMDAsIFwiT0tcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHhkci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgICAsIFwiQ29udGVudC1UeXBlOiBcIiArIHhkci5jb250ZW50VHlwZVxuICAgICAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICAgICAgIHhkci5vbmVycm9yID0gLT5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayA0MDQsIFwiTm90IEZvdW5kXCJcbiAgICAgICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgICAgICB4ZHIub25wcm9ncmVzcyA9IGpRdWVyeS5ub29wXG4gICAgICAgICAgICAgIHhkci5vbnRpbWVvdXQgPSAtPlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrIDAsIFwidGltZW91dFwiXG4gICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgICAgeGRyLnRpbWVvdXQgPSBzLnhkclRpbWVvdXQgb3IgTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgICB4ZHIub3BlbiBzLnR5cGUsIHMudXJsXG4gICAgICAgICAgICAgIHhkci5zZW5kIChzLmhhc0NvbnRlbnQgYW5kIHMuZGF0YSkgb3IgbnVsbFxuICAgICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgICAgYWJvcnQ6IC0+XG4gICAgICAgICAgICAgIGlmIHhkclxuICAgICAgICAgICAgICAgIHhkci5vbmVycm9yID0galF1ZXJ5Lm5vb3BcbiAgICAgICAgICAgICAgICB4ZHIuYWJvcnQoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIFwiYWJvcnRlZFwiXG4gICAgICAgICAgICAgIHJldHVyblxuXG5cblxuIyMjXG5JbnN0YW50aWF0ZSBoZWxwZXJcbiMjI1xubW9kdWxlLmV4cG9ydHMgPSBuZXcgQnJvd3NlclN1cHBvcnRIZWxwZXJcbiIsIlwidXNlIHN0cmljdFwiXG5cbl8gICAgICAgICA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKVxuQmFja2JvbmUgID0gcmVxdWlyZSgnYmFja2JvbmUnKVxuJCAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jylcbk1vZGVybml6ciA9IHJlcXVpcmUoXCJtb2Rlcm5penJcIilcbkpTT04gICAgICA9IHJlcXVpcmUoXCJqc29uM1wiKVxuXG5cbmNsYXNzIERhdGFIZWxwZXIgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbFxuXG5cdCMjI1xuXHRHZXQgZGF0YSBmcm9tIGVsZW1lbnQgb24gRE9NLlxuXG5cdEBhdXRob3IgQWxlc3NhbmRybyBCaWF2YXRpIDxAYWxlYmlhdmF0aT5cblx0QHBhY2thZ2UgZGF0YS5jb2ZmZWVcblx0QHNpbmNlIDEuMFxuXHRAcGFyYW0gKGpRdWVyeS9zdHJpbmcpIGVsXG5cdEByZXR1cm4gKE9iamVjdCkgZGF0YVxuXHQjIyNcblxuXHRnZXRFbGVtZW50RGF0YTogKCBlbCwgZm9ybWF0ICkgLT5cblxuXHRcdCMgZ2V0IGpRdWVyeSBlbGVtZW50XG5cdFx0aWYgdHlwZW9mIGVsID09ICdzdHJpbmcnXG5cdFx0XHRlbCA9ICQoIGVsIClcblxuXHRcdCMgY2hlY2sgaWYgZWwgd2FzIGZvdW5kXG5cdFx0aWYgbm90IGVsIGluc3RhbmNlb2YgJCBvciBlbC5sZW5ndGggPT0gMFxuXHRcdFx0cmV0dXJuXG5cblxuXHRcdCMgaW5pdGlhbGl6ZSBkYXRhIHRvIGVtcHR5IG9ialxuXHRcdGRhdGEgPSB7fVxuXG5cdFx0IyBnZXQgZGF0YVxuXHRcdGlmIGVsLmlzKCAnc2NyaXB0JyApIG9yICggZm9ybWF0PyBhbmQgZm9ybWF0IGlzICdqc29uJyApXG5cblx0XHRcdGRhdGEgPSBKU09OLnBhcnNlIGVsLmh0bWwoKVxuXG5cdFx0ZWxzZVxuXG5cdFx0XHRkYXRhID0gZWwuZGF0YSgpO1xuXG5cdFx0ZGF0YVxuXG5cdCMgZ2V0RWxlbWVudERhdGEoKVxuXG5cbiMjI1xuSW5zdGFudGlhdGUgaGVscGVyXG4jIyNcbm1vZHVsZS5leHBvcnRzID0gbmV3IERhdGFIZWxwZXJcbiIsIlwidXNlIHN0cmljdFwiXG5cbkJhY2tib25lICA9IHJlcXVpcmUoJ2JhY2tib25lJylcblxuXG5jbGFzcyBEYXRlSGVscGVyIGV4dGVuZHMgQmFja2JvbmUuTW9kZWxcblxuICBnZXREYXRldGltZTogKHNlcnZlcl9nbXRfb2Zmc2V0KSA9PlxuXG4gICAgc2VydmVyX3RpbWUgPSBAZ2V0VGltZShzZXJ2ZXJfZ210X29mZnNldClcbiAgICBzZXJ2ZXJfZGF0ZXRpbWUgPSBuZXcgRGF0ZSggc2VydmVyX3RpbWUgKVxuICAgIHNlcnZlcl9kYXRldGltZVxuXG5cbiAgZ2V0VGltZTogKG9mZnNldCkgLT5cblxuICAgICMgY3JlYXRlIERhdGUgb2JqZWN0IGZvciBjdXJyZW50IGxvY2F0aW9uXG4gICAgZCA9IG5ldyBEYXRlKClcblxuICAgICMgY29udmVydCB0byBtc2VjXG4gICAgIyBhZGQgbG9jYWwgdGltZSB6b25lIG9mZnNldFxuICAgICMgZ2V0IFVUQyB0aW1lIGluIG1zZWNcbiAgICB1dGMgPSBkLmdldFRpbWUoKSArIChkLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMClcblxuICAgICMgY3JlYXRlIG5ldyBEYXRlIG9iamVjdCBmb3IgZGlmZmVyZW50IGNpdHlcbiAgICAjIHVzaW5nIHN1cHBsaWVkIG9mZnNldFxuICAgIG5kID0gbmV3IERhdGUodXRjICsgKDM2MDAwMDAqb2Zmc2V0KSk7XG5cbiAgICBzZXJ2ZXJfdGltZSA9IE1hdGgucm91bmQobmQuZ2V0VGltZSgpIC8gMTAwMClcblxuICAgIHNlcnZlcl90aW1lXG5cblxuICBwYXJzZVRpbWVzdGFtcCA6ICh0aW1lc3RhbXApIC0+XG5cbiAgICBzZWNzID0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSAtIHRpbWVzdGFtcFxuICAgIE1hdGguZmxvb3Igc2Vjc1xuICAgIG1pbnV0ZXMgPSBzZWNzIC8gNjBcbiAgICBzZWNzID0gTWF0aC5mbG9vcihzZWNzICUgNjApXG4gICAgcmV0dXJuIHNlY3MgKyAoKGlmIHNlY3MgPiAxIHRoZW4gXCIgc2Vjb25kcyBhZ29cIiBlbHNlIFwiIHNlY29uZCBhZ29cIikpICBpZiBtaW51dGVzIDwgMVxuICAgIGhvdXJzID0gbWludXRlcyAvIDYwXG4gICAgbWludXRlcyA9IE1hdGguZmxvb3IobWludXRlcyAlIDYwKVxuICAgIHJldHVybiBtaW51dGVzICsgKChpZiBtaW51dGVzID4gMSB0aGVuIFwiIG1pbnV0ZXMgYWdvXCIgZWxzZSBcIiBtaW51dGUgYWdvXCIpKSAgaWYgaG91cnMgPCAxXG4gICAgZGF5cyA9IGhvdXJzIC8gMjRcbiAgICBob3VycyA9IE1hdGguZmxvb3IoaG91cnMgJSAyNClcbiAgICByZXR1cm4gaG91cnMgKyAoKGlmIGhvdXJzID4gMSB0aGVuIFwiIGhvdXJzIGFnb1wiIGVsc2UgXCIgaG91ciBhZ29cIikpICBpZiBkYXlzIDwgMVxuICAgIHdlZWtzID0gZGF5cyAvIDdcbiAgICBkYXlzID0gTWF0aC5mbG9vcihkYXlzICUgNylcbiAgICByZXR1cm4gZGF5cyArICgoaWYgZGF5cyA+IDEgdGhlbiBcIiBkYXlzIGFnb1wiIGVsc2UgXCIgZGF5IGFnb1wiKSkgIGlmIHdlZWtzIDwgMVxuICAgIG1vbnRocyA9IHdlZWtzIC8gNC4zNVxuICAgIHdlZWtzID0gTWF0aC5mbG9vcih3ZWVrcyAlIDQuMzUpXG4gICAgcmV0dXJuIHdlZWtzICsgKChpZiB3ZWVrcyA+IDEgdGhlbiBcIiB3ZWVrcyBhZ29cIiBlbHNlIFwiIHdlZWsgYWdvXCIpKSAgaWYgbW9udGhzIDwgMVxuICAgIHllYXJzID0gbW9udGhzIC8gMTJcbiAgICBtb250aHMgPSBNYXRoLmZsb29yKG1vbnRocyAlIDEyKVxuICAgIHJldHVybiBtb250aHMgKyAoKGlmIG1vbnRocyA+IDEgdGhlbiBcIiBtb250aHMgYWdvXCIgZWxzZSBcIiBtb250aCBhZ29cIikpICBpZiB5ZWFycyA8IDFcbiAgICB5ZWFycyA9IE1hdGguZmxvb3IoeWVhcnMpXG4gICAgeWVhcnMgKyAoKGlmIHllYXJzID4gMSB0aGVuIFwiIHllYXJzIGFnb1wiIGVsc2UgXCIgeWVhcnMgYWdvXCIpKVxuXG5cblxuIyMjXG5JbnN0YW50aWF0ZSBoZWxwZXJcbiMjI1xubW9kdWxlLmV4cG9ydHMgPSBuZXcgRGF0ZUhlbHBlclxuXG5cblxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuXyAgICAgICAgID0gcmVxdWlyZSgndW5kZXJzY29yZScpXG5CYWNrYm9uZSAgPSByZXF1aXJlKCdiYWNrYm9uZScpXG4kICAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKVxuTW9kZXJuaXpyID0gcmVxdWlyZShcIm1vZGVybml6clwiKVxuXG5cbmNsYXNzIEVudkhlbHBlciBleHRlbmRzIEJhY2tib25lLk1vZGVsXG5cbiAgICBkZWZhdWx0czpcblxuICAgICAgICByZXNpemVFdmVudDogICAgICAgICAgXCJyZXNpemVcIlxuICAgICAgICBzY3JvbGxUb3A6ICAgICAgICAgICAgMFxuICAgICAgICBvcmllbnRhdGlvbjogICAgICAgICAgbnVsbFxuICAgICAgICBjZW50ZXI6ICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBoZWlnaHRGdWxsOiAgICAgICAgICAgbnVsbFxuICAgICAgICBoZWlnaHRSYXc6ICAgICAgICAgICAgbnVsbFxuICAgICAgICBoZWlnaHQ6ICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICB3aWR0aDogICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBzYWZhcmk6ICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpc01vYmlsZTogICAgICAgICAgICAgbnVsbFxuICAgICAgICBtb2JpbGVJcGhvbmU6ICAgICAgICAgbnVsbFxuICAgICAgICBtb2JpbGVJcGFkOiAgICAgICAgICAgbnVsbFxuICAgICAgICBtb2JpbGVJb3M6ICAgICAgICAgICAgbnVsbFxuICAgICAgICBtb2JpbGVBbmRyb2lkOiAgICAgICAgbnVsbFxuICAgICAgICBtb2JpbGVBbmRyb2lkVmVyc2lvbjogbnVsbFxuICAgICAgICBtb2JpbGVSYXdzY3JlZW46ICAgICAgbnVsbFxuICAgICAgICBpb3M6ICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3MxOiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3MyOiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3MyXzQ6ICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3MzOiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3M0OiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3M1OiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3M1X3VwOiAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3M2OiAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICBpb3M2X3VwOiAgICAgICAgICAgICAgbnVsbFxuXG5cbiAgICBzdGFydDogPT5cbiAgICAgICAgQHVwZGF0ZUVudigpXG5cblxuICAgIGluaXRpYWxpemU6ID0+XG5cbiAgICAgICAgIyBfLmJpbmRBbGwgQFxuXG4gICAgICAgICMgZGV0ZWN0IHVzZXIgYWdlbnRcbiAgICAgICAgQHVzZXJBZ2VudERldGVjdHMoKVxuXG4gICAgICAgIGlmIEBnZXQoXCJpc19tb2JpbGVcIikgb3IgQGdldChcImlzX3RhYmxldFwiKVxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uIEBnZXQoXCJyZXNpemVFdmVudFwiKSwgXy5kZWJvdW5jZShAdXBkYXRlRW52LCAzMDApXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgICQod2luZG93KS5vbiBAZ2V0KFwicmVzaXplRXZlbnRcIiksIF8udGhyb3R0bGUoQHVwZGF0ZUVudiwgMTAwLCB7bGVhZGluZzogZmFsc2V9KVxuXG4gICAgICAgICMgZGV0ZWN0IHNjcm9sbFxuICAgICAgICBpZiBcIm1vdXNld2hlZWxcIiBvZiB3aW5kb3dcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uIFwibW91c2V3aGVlbFwiLCBAd2hlZWxIYW5kbGVyXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwgQHVwZGF0ZVNjcm9sbERpclxuXG4gICAgICAgICMgYmluZCBjaGFuZ2U6Y2VudGVyIHRvIGFsbCBvdGhlciBoYW5kbGVyc1xuICAgICAgICBAb24gXCJjaGFuZ2U6b3JpZW50YXRpb25cIiwgQG1vYmlsZUFkZHJlc3NCYXJTY3JvbGxGaXgsIHRoaXNcblxuICAgICAgICAjIGRldGVjdCBvbmxpbmUvb2ZmbGluZVxuICAgICAgICBpZiB3aW5kb3cubmF2aWdhdG9yLm9uTGluZT9cbiAgICAgICAgICAgIEBzZXQgJ29mZmxpbmUnLCAobm90IHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lKVxuICAgICAgICAgICAgIyBiaW5kIG9mZmxpbmUvb25saW5lIGV2ZW50c1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9uICdvZmZsaW5lIG9ubGluZScsIEBvZmZsaW5lQ2hlY2tcblxuXG5cbiAgICBvZmZsaW5lQ2hlY2s6IChldmVudCkgPT5cblxuICAgICAgICBAc2V0ICdvZmZsaW5lJywgKGV2ZW50LnR5cGUgPT0gJ29mZmxpbmUnKVxuXG5cblxuXG4gICAgdXNlckFnZW50RGV0ZWN0czogPT5cblxuICAgICAgICB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmFcblxuICAgICAgICBpb3MgPSB1bmRlZmluZWRcbiAgICAgICAgaW9zMSA9IHVuZGVmaW5lZFxuICAgICAgICBpb3MyID0gdW5kZWZpbmVkXG4gICAgICAgIGlvczJfNCA9IHVuZGVmaW5lZFxuICAgICAgICBpb3MzID0gdW5kZWZpbmVkXG4gICAgICAgIGlvczQgPSB1bmRlZmluZWRcbiAgICAgICAgaW9zNSA9IHVuZGVmaW5lZFxuICAgICAgICBpb3M1X3VwID0gdW5kZWZpbmVkXG4gICAgICAgIGlvczYgPSB1bmRlZmluZWRcbiAgICAgICAgaW9zNl91cCA9IHVuZGVmaW5lZFxuICAgICAgICBzYWZhcmkgPSB+dWEuaW5kZXhPZihcIlNhZmFyaVwiKSBpc250IDAgYW5kIH51YS5pbmRleE9mKFwiQ2hyb21lXCIpIGlzIDBcbiAgICAgICAgbW9iaWxlX2lwaG9uZSA9IH51YS5pbmRleE9mKFwiaVBob25lXCIpIGlzbnQgMCBvciB+dWEuaW5kZXhPZihcImlQb2RcIikgaXNudCAwXG4gICAgICAgIG1vYmlsZV9pcGFkID0gfnVhLmluZGV4T2YoXCJpUGFkXCIpIGlzbnQgMFxuICAgICAgICBtb2JpbGVfaW9zID0gbW9iaWxlX2lwaG9uZSBvciBtb2JpbGVfaXBhZFxuICAgICAgICBtb2JpbGVfYW5kcm9pZCA9IH51YS5pbmRleE9mKFwiQW5kcm9pZFwiKSBpc250IDBcbiAgICAgICAgbW9iaWxlX2FuZHJvaWRfdmVyc2lvbiA9IHVuZGVmaW5lZFxuXG4gICAgICAgICMgRGV0ZWN0IGlmIHRoaXMgaXMgcnVubmluZyBhcyBhIGZ1bGxzY3JlZW4gYXBwIGZyb20gdGhlIGhvbWVzY3JlZW5cbiAgICAgICAgbW9iaWxlX3Jhd3NjcmVlbiA9IHdpbmRvdy5uYXZpZ2F0b3Iuc3RhbmRhbG9uZVxuXG4gICAgICAgIGlzX21vYmlsZSA9IEBpc01vYmlsZSggdWEgKVxuXG4gICAgICAgIG1vYmlsZV9hbmRyb2lkX3ZlcnNpb24gPSB1YS5zbGljZSh1YS5pbmRleE9mKFwiQW5kcm9pZFwiKSArIDgsIHVhLmluZGV4T2YoXCJBbmRyb2lkXCIpICsgMTMpICBpZiBtb2JpbGVfYW5kcm9pZFxuICAgICAgICBpZiAvKGlQaG9uZXxpUG9kfGlQYWQpL2kudGVzdCh1YSlcbiAgICAgICAgICAgIGlvcyA9IHRydWVcbiAgICAgICAgICAgIGlmIC9PUyAyX1xcZChfXFxkKT8gbGlrZSBNYWMgT1MgWC9pLnRlc3QodWEpXG5cbiAgICAgICAgICAgICAgICAjIGlPUyAyIHNvIERvIFNvbWV0aGluZ1xuICAgICAgICAgICAgICAgIGlvczIgPSB0cnVlXG4gICAgICAgICAgICAgICAgaW9zMl80ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiAvT1MgM19cXGQoX1xcZCk/IGxpa2UgTWFjIE9TIFgvaS50ZXN0KHVhKVxuXG4gICAgICAgICAgICAgICAgIyBpT1MgMyBzbyBEbyBTb21ldGhpbmdcbiAgICAgICAgICAgICAgICBpb3MzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlvczJfNCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgL09TIDRfXFxkKF9cXGQpPyBsaWtlIE1hYyBPUyBYL2kudGVzdCh1YSlcblxuICAgICAgICAgICAgICAgICMgaU9TIDQgc28gRG8gU29tZXRoaW5nXG4gICAgICAgICAgICAgICAgaW9zNCA9IHRydWVcbiAgICAgICAgICAgICAgICBpb3MyXzQgPSB0cnVlXG4gICAgICAgICAgICBlbHNlIGlmIC9PUyA1X1xcZChfXFxkKT8gbGlrZSBNYWMgT1MgWC9pLnRlc3QodWEpXG5cbiAgICAgICAgICAgICAgICAjIGlPUyA1IHNvIERvIFNvbWV0aGluZ1xuICAgICAgICAgICAgICAgIGlvczUgPSB0cnVlXG4gICAgICAgICAgICAgICAgaW9zNV91cCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgL09TIDZfXFxkKF9cXGQpPyBsaWtlIE1hYyBPUyBYL2kudGVzdCh1YSlcblxuICAgICAgICAgICAgICAgICMgaU9TIDYgc28gRG8gU29tZXRoaW5nXG4gICAgICAgICAgICAgICAgaW9zNiA9IHRydWVcbiAgICAgICAgICAgICAgICBpb3M1X3VwID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlvczZfdXAgPSB0cnVlXG4gICAgICAgICAgICBlbHNlIGlmIC9DUFUgbGlrZSBNYWMgT1MgWC9pLnRlc3QodWEpXG5cbiAgICAgICAgICAgICAgICAjIGlPUyAxIHNvIERvIFNvbWV0aGluZ1xuICAgICAgICAgICAgICAgIGlvczEgPSB0cnVlXG4gICAgICAgICAgICBlbHNlXG5cbiAgICAgICAgICAgICAgICAjIGlPUyA2IG9yIE5ld2VyIHNvIERvIE5vdGhpbmdcbiAgICAgICAgICAgICAgICBpb3M1X3VwID0gdHJ1ZVxuXG4gICAgICAgIEBzZXRcbiAgICAgICAgICAgICMgc2FmYXJpOiBzYWZhcmlcbiAgICAgICAgICAgIGlzX21vYmlsZTogaXNfbW9iaWxlXG4gICAgICAgICAgICBtb2JpbGVfaXBob25lOiBtb2JpbGVfaXBob25lXG4gICAgICAgICAgICBtb2JpbGVfaXBhZDogbW9iaWxlX2lwYWRcbiAgICAgICAgICAgIG1vYmlsZV9pb3M6IG1vYmlsZV9pb3NcbiAgICAgICAgICAgIG1vYmlsZV9hbmRyb2lkOiBtb2JpbGVfYW5kcm9pZFxuICAgICAgICAgICAgbW9iaWxlX2FuZHJvaWRfdmVyc2lvbjogbW9iaWxlX2FuZHJvaWRfdmVyc2lvblxuICAgICAgICAgICAgbW9iaWxlX3Jhd3NjcmVlbjogbW9iaWxlX3Jhd3NjcmVlblxuICAgICAgICAgICAgaW9zOiBpb3NcbiAgICAgICAgICAgIGlvczE6IGlvczFcbiAgICAgICAgICAgIGlvczI6IGlvczJcbiAgICAgICAgICAgIGlvczJfNDogaW9zMl80XG4gICAgICAgICAgICBpb3MzOiBpb3MzXG4gICAgICAgICAgICBpb3M0OiBpb3M0XG4gICAgICAgICAgICBpb3M1OiBpb3M1XG4gICAgICAgICAgICBpb3M1X3VwOiBpb3M1X3VwXG4gICAgICAgICAgICBpb3M2OiBpb3M2XG4gICAgICAgICAgICBpb3M2X3VwOiBpb3M2X3VwXG5cblxuXG4gICAgaXNNb2JpbGU6ICh1YSkgPT5cblxuICAgICAgICBpZiAoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaS50ZXN0KHVhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdCh1YS5zdWJzdHIoMCw0KSkpXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGZhbHNlXG5cbiAgICB1cGRhdGVFbnY6ID0+XG4gICAgICAgIGhlaWdodCA9IHVuZGVmaW5lZFxuICAgICAgICBoZWlnaHRfcmF3ID0gdW5kZWZpbmVkXG4gICAgICAgIGhlaWdodF9mdWxsID0gdW5kZWZpbmVkXG4gICAgICAgIHdpZHRoID0gdW5kZWZpbmVkXG4gICAgICAgIGNlbnRlciA9IHVuZGVmaW5lZFxuICAgICAgICBvcmllbnRhdGlvbiA9IHVuZGVmaW5lZFxuXG4gICAgICAgICMgZ2V0IHdpZHRoXG4gICAgICAgIHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKClcblxuICAgICAgICAjIGdldCBoZWlnaHQsIGRlcGVuZGluZyBvbiB3aGF0IGRldmljZSB3ZSBhcmUgb25cbiAgICAgICAgaWYgQGdldChcIm1vYmlsZV9pb3NcIikgYW5kIEBnZXQoXCJzYWZhcmlcIilcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodF9yYXcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICBoZWlnaHQgKz0gNjAgIGlmIEBnZXQoXCJtb2JpbGVfaXBob25lXCIpIGFuZCBub3QgQGdldChcIm1vYmlsZV9yYXdzY3JlZW5cIikgYW5kIGhlaWdodCBpc250IDMyMFxuICAgICAgICAgICAgaGVpZ2h0X2Z1bGwgPSBoZWlnaHRcbiAgICAgICAgZWxzZSBpZiBAZ2V0KFwibW9iaWxlX2FuZHJvaWRcIilcbiAgICAgICAgICAgIGlmIEBnZXQoXCJtb2JpbGVfYW5kcm9pZF92ZXJzaW9uXCIpIGlzIFwiNC4xLjFcIlxuICAgICAgICAgICAgICAgIGhlaWdodF9mdWxsID0gaGVpZ2h0ID0gaGVpZ2h0X3JhdyA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodF9yYXcgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgICAgICAgICBoZWlnaHRfZnVsbCA9IGhlaWdodCArIDU2XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodF9yYXcgPSBoZWlnaHRfZnVsbCA9ICQod2luZG93KS5oZWlnaHQoKVxuXG4gICAgICAgICMgY2hlY2sgb3JpZW50YXRpb25cbiAgICAgICAgaWYgd2lkdGggPiBoZWlnaHRcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gXCJsYW5kc2NhcGVcIlxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IFwicG9ydHJhaXRcIlxuXG4gICAgICAgICMgc2V0IGF0dHJpYnV0ZXNcbiAgICAgICAgQHNldFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgaGVpZ2h0X3JhdzogaGVpZ2h0X3Jhd1xuICAgICAgICAgICAgaGVpZ2h0X2Z1bGw6IGhlaWdodF9mdWxsXG4gICAgICAgICAgICBjZW50ZXI6XG4gICAgICAgICAgICAgICAgbGVmdDogd2lkdGggLyAyXG4gICAgICAgICAgICAgICAgdG9wOiBoZWlnaHQgLyAyXG5cbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvblxuXG5cbiAgICB1cGRhdGVTY3JvbGxEaXI6IChldmVudCkgPT5cbiAgICAgICAgc2Nyb2xsVG9wID0gQGdldFNjcm9sbFRvcCgpXG4gICAgICAgIGxhc3RTY3JvbGxUb3AgPSBAZ2V0KFwic2Nyb2xsVG9wXCIpXG4gICAgICAgIGlmIHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3BcbiAgICAgICAgICAgIEBzZXQgXCJzY3JvbGxEaXJcIiwgdHJ1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBAc2V0IFwic2Nyb2xsRGlyXCIsIGZhbHNlXG4gICAgICAgIEBzZXQgXCJzY3JvbGxUb3BcIiwgc2Nyb2xsVG9wXG5cbiAgICB3aGVlbEhhbmRsZXI6IChldmVudCwgZGVsdGEsIGRlbHRhWCwgZGVsdGFZKSA9PlxuXG5cbiAgICBnZXRTY3JvbGxUb3A6ID0+XG4gICAgICAgIGlmIHR5cGVvZiB3aW5kb3cucGFnZVlPZmZzZXQgaXNudCBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgI21vc3QgYnJvd3NlcnNcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgQiA9IGRvY3VtZW50LmJvZHkgI0lFICdxdWlya3MnXG4gICAgICAgICAgICBEID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICNJRSB3aXRoIGRvY3R5cGVcbiAgICAgICAgICAgIEQgPSAoaWYgKEQuY2xpZW50SGVpZ2h0KSB0aGVuIEQgZWxzZSBCKVxuICAgICAgICAgICAgRC5zY3JvbGxUb3BcblxuICAgIG1vYmlsZUFkZHJlc3NCYXJTY3JvbGxGaXg6ID0+XG5cbiAgICAgICAgaWYgQGdldChcIm1vYmlsZV9hbmRyb2lkXCIpIG9yIChAZ2V0KFwibW9iaWxlX2lvc1wiKSBhbmQgQGdldChcInNhZmFyaVwiKSlcbiAgICAgICAgICAgICQoXCJib2R5XCIpLmhlaWdodCBAZ2V0KFwiaGVpZ2h0X2Z1bGxcIilcbiAgICAgICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICAgICAgICAjIEhpZGUgdGhlIGFkZHJlc3MgYmFyIVxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyAwLCAxXG4gICAgICAgICAgICAsIDBcblxuIyBlbnZIZWxwZXJcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRW52SGVscGVyXG4iLCJcInVzZSBzdHJpY3RcIlxuXG5fICAgICAgICAgPSByZXF1aXJlKCd1bmRlcnNjb3JlJylcbkJhY2tib25lICA9IHJlcXVpcmUoJ2JhY2tib25lJylcbiQgICAgICAgICA9IHJlcXVpcmUoJ2pxdWVyeScpXG5Nb2Rlcm5penIgPSByZXF1aXJlKFwibW9kZXJuaXpyXCIpXG5cblxuY2xhc3MgSHR0cEhlbHBlciBleHRlbmRzIEJhY2tib25lLk1vZGVsXG5cbiAgdG9Vcmw6IChiYXNlX3VybCwgYXJncykgLT5cblxuICAgIHVybCA9IGJhc2VfdXJsXG4gICAgaW5kZXggPSAwXG4gICAgZmlyc3Rfc2VwYXJhdG9yID0gKGlmIGJhc2VfdXJsLmluZGV4T2YoXCI/XCIpIGlzIC0xIHRoZW4gXCI/XCIgZWxzZSBcIiZcIilcbiAgICAkLmVhY2ggYXJncywgKGtleSwgdmFsKSAtPlxuICAgICAgcmV0dXJuIHRydWUgIGlmIHZhbCBpcyBgdW5kZWZpbmVkYCBvciB2YWwgaXMgXCJcIlxuICAgICAgaWYgaW5kZXggaXMgMFxuICAgICAgICB1cmwgKz0gZmlyc3Rfc2VwYXJhdG9yXG4gICAgICBlbHNlXG4gICAgICAgIHVybCArPSBcIiZcIlxuICAgICAgdXJsICs9IGtleSArIFwiPVwiICsgdmFsXG4gICAgICBpbmRleCsrXG4gICAgdXJsXG5cbiAgIyB0b1VybCgpXG5cblxuICByZXF1aXJlRmlsZXM6IChmaWxlcykgLT5cblxuICAgIF8uZWFjaCBmaWxlcywgKGZpbGVuYW1lKSAtPlxuXG4gICAgICBmaWxlRXh0ID0gZmlsZW5hbWUuc3BsaXQoJy4nKS5wb3AoKVxuICAgICAgZmlsZXJlZiA9IG51bGw7XG5cbiAgICAgIGlmIGZpbGVFeHQgaXMgJ2pzJ1xuXG4gICAgICAgIGZpbGVyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdzY3JpcHQnXG4gICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlICd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCdcbiAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUgJ3NyYycsIGZpbGVuYW1lXG5cbiAgICAgIGVsc2UgaWYgZmlsZUV4dCBpcyAnY3NzJ1xuXG4gICAgICAgIGZpbGVyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdsaW5rJ1xuICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSAncmVsJywgJ3N0eWxlc2hlZXQnXG4gICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlICd0eXBlJywgJ3RleHQvY3NzJ1xuICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSAnaHJlZicsIGZpbGVuYW1lXG5cblxuICAgICAgaWYgZmlsZXJlZj9cblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2hlYWQnIClbMF0uYXBwZW5kQ2hpbGQoIGZpbGVyZWYgKVxuXG5cbiAgZ2V0UXVlcnlWYXJpYWJsZTogKHZhcmlhYmxlKSAtPlxuXG4gICAgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKVxuICAgIHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuXG4gICAgdmFsdWUgPSBudWxsXG5cbiAgICBfLmVhY2ggdmFycywgKHYsIGkpIC0+XG4gICAgICBwYWlyID0gdi5zcGxpdCgnPScpO1xuICAgICAgaWYgZGVjb2RlVVJJQ29tcG9uZW50KCBwYWlyWzBdICkgaXMgdmFyaWFibGVcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQgcGFpclsxXVxuXG4gICAgdmFsdWVcblxuIyBIdHRwSGVscGVyXG5cblxuIyMjXG5JbnN0YW50aWF0ZSBoZWxwZXJcbiMjI1xubW9kdWxlLmV4cG9ydHMgPSBuZXcgSHR0cEhlbHBlclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgICAgICA9IHJlcXVpcmUgJ2FwcCdcbkJhY2tib25lID0gcmVxdWlyZSBcImJhY2tib25lXCJcblxuY2xhc3MgQXBwLk1vZGVscy5BcGlNb2RlbCBleHRlbmRzIEJhY2tib25lLk1vZGVsXG5cbiAgdXJsUm9vdDogPT5cblxuICAgIHVybFJvb3QgPSBudWxsXG5cbiAgICBhcGlVcmwgPSBfLnJlc3VsdChALCAnYXBpVXJsJylcbiAgICBpZiBhcGlVcmw/XG4gICAgICB1cmxSb290ID0gQXBwLnJlcXVlc3QoJ2FwaVJvb3QnKSArIGFwaVVybFxuXG4gICAgdXJsUm9vdFxuXG5cbiAgcGFyc2U6IChyZXNwb25zZSkgLT5cblxuICAgIHBhcnNlZERhdGEgPSB7fVxuICAgIGlmIHJlc3BvbnNlLmRhdGE/XG4gICAgICBwYXJzZWREYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgIGVsc2VcbiAgICAgIHBhcnNlZERhdGEgPSByZXNwb25zZVxuXG4gICAgcGFyc2VkRGF0YVxuXG4gIGdldDogPT5cblxuICAgIHZhbHVlID0gQXBwLk1vZGVscy5BcGlNb2RlbC5fX3N1cGVyX18uZ2V0LmFwcGx5IEAsIGFyZ3VtZW50c1xuXG4gICAgaWYgXy5pc0Z1bmN0aW9uIHZhbHVlXG4gICAgICB2YWx1ZSA9IHZhbHVlLmFwcGx5IEBcblxuICAgIHZhbHVlXG5cblxuICB0b0pTT046ID0+XG5cbiAgICBkYXRhID0ge31cblxuICAgIGpzb24gPSBBcHAuTW9kZWxzLkFwaU1vZGVsLl9fc3VwZXJfXy50b0pTT04uYXBwbHkgQCwgYXJndW1lbnRzXG5cbiAgICBfLmVhY2gganNvbiwgKHZhbHVlLCBrZXkpIC0+XG4gICAgICBkYXRhW2tleV0gPSBAZ2V0KGtleSlcbiAgICAsIEBcblxuICAgIGRhdGFcblxuXG4gIHRvZ2dsZUF0dHJpYnV0ZTogKGF0dHIsIG9wdGlvbnMpID0+XG5cbiAgICBAc2V0KCBhdHRyLCBub3QgQGdldCggYXR0ciwgXy5kZWZhdWx0KCBvcHRpb25zLCB7fSApICkgKVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbmNsYXNzIEFwcC5Nb2RlbHMuV1BPcHRpb25Nb2RlbCBleHRlbmRzIEFwcC5Nb2RlbHMuQXBpTW9kZWxcblxuICBhcGlVcmw6ICcxL3NpdGUvb3B0aW9ucydcblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxuY2xhc3MgQXBwLk1vZGVscy5XUFVzZXJNZXRhTW9kZWwgZXh0ZW5kcyBBcHAuTW9kZWxzLkFwaU1vZGVsXG5cbiAgYXBpVXJsOiAnMS9zaXRlL3VzZXJtZXRhJ1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbkFwcC5tb2R1bGUgJ1NTT3B0aW9ucycsIChTU09wdGlvbnMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NPcHRpb25zLkNvbnRyb2xsZXJzLk9wdGlvbnNDb250cm9sbGVyIGV4dGVuZHMgQmFja2JvbmUuTWFyaW9uZXR0ZS5Db250cm9sbGVyXG5cblxuICAgIGdldE9wdGlvbnM6IChrZXkpID0+XG5cbiAgICAgIG9wdGlvbnNNb2RlbCA9IEBnZXRPcHRpb25zTW9kZWwoKVxuXG4gICAgICBpZiBrZXk/XG4gICAgICAgIHJldHVybiBvcHRpb25zTW9kZWwuZ2V0IGtleVxuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gb3B0aW9uc01vZGVsXG5cblxuICAgIGdldE9wdGlvbnNNb2RlbDogPT5cblxuICAgICAgaWYgbm90IEBvcHRpb25zTW9kZWw/XG5cbiAgICAgICAgQG9wdGlvbnNNb2RlbCA9IG5ldyBTU09wdGlvbnMuTW9kZWxzLk9wdGlvbnNNb2RlbFxuICAgICAgICAgIGlkOiAnc29jaWFsc3RyZWFtc19hcHBfc2V0dGluZ3MnXG5cbiAgICAgICAgIyBmZXRjaCBpbml0aWFsIGRhdGEgZnJvbSBET01cbiAgICAgICAgQG9wdGlvbnNNb2RlbC5mZXRjaCgpXG5cbiAgICAgIEBvcHRpb25zTW9kZWxcblxuXG5cbiAgICBnZXRVc2VyTWV0YTogKGtleSkgPT5cblxuICAgICAgdXNlck1ldGEgPSBAZ2V0VXNlck1ldGFNb2RlbCgpXG5cbiAgICAgIGlmIGtleT9cbiAgICAgICAgcmV0dXJuIHVzZXJNZXRhLmdldCBrZXlcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHVzZXJNZXRhXG5cblxuICAgIGdldFVzZXJNZXRhTW9kZWw6ID0+XG5cbiAgICAgIGlmIG5vdCBAdXNlck1ldGFNb2RlbD9cblxuICAgICAgICBAdXNlck1ldGFNb2RlbCA9IG5ldyBTU09wdGlvbnMuTW9kZWxzLlVzZXJNZXRhTW9kZWxcbiAgICAgICAgICBpZDogJ3NvY2lhbHN0cmVhbXMnXG5cbiAgICAgICAgIyBmZXRjaCBpbml0aWFsIGRhdGEgZnJvbSBET01cbiAgICAgICAgQHVzZXJNZXRhTW9kZWwuZmV0Y2goKVxuXG4gICAgICBAdXNlck1ldGFNb2RlbFxuXG4iLCIndXNlIHN0cmljdCdcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU09wdGlvbnMnLCAoU1NPcHRpb25zLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIGNsYXNzIFNTT3B0aW9ucy5Nb2RlbHMuT3B0aW9uc01vZGVsIGV4dGVuZHMgQXBwLk1vZGVscy5XUE9wdGlvbk1vZGVsXG5cbiAgICBkZWZhdWx0czpcbiAgICAgIGFwcF9zZXR0aW5nczogdHJ1ZVxuICAgICAgbW9kZXJhdGlvbjogZmFsc2VcbiAgICAgIHVzZXJfY2FuX21vZGVyYXRlOiBmYWxzZVxuICAgICAgaXNfYWRtaW46IGZhbHNlXG4gICAgICBkZXZfbW9kZTogZmFsc2VcbiAgICAgIHNzX2FwaV91cmw6ICdodHRwczovL2FwaS5zb2NpYWxzdHJlYW1zLmNvbS8nXG4gICAgICBzc19vYXV0aF91cmw6ICdodHRwczovL29hdXRoLnNvY2lhbHN0cmVhbXMuY29tLydcbiAgICAgIHNzX3VzZXJfaWQ6ICduZXcnXG4gICAgICBhY2Nlc3NfdG9rZW46ICduZXcnXG4gICAgICB0aW1lX3RvX25leHRfY3JvbjogZmFsc2VcbiAgICAgIHB1YmxpY19wYWdlX3VybDogJydcbiAgICAgIGFkbWluX3BhZ2VfdXJsOiAnJ1xuICAgICAgd3BSb290OiAnLydcblxuXG5cbiAgICB0b2dnbGVBdHRyaWJ1dGU6IChhdHRyKSA9PlxuICAgICAgQHNldCggYXR0ciwgbm90IEBnZXQoIGF0dHIgKSApXG5cblxuICAgIGluaXRpYWxpemU6ID0+XG5cbiAgICAgIEBsaXN0ZW5UbyBALCAnY2hhbmdlOm1vZGVyYXRpb24nLCBAb25Nb2RlcmF0aW9uQ2hhbmdlXG5cblxuICAgIG9uTW9kZXJhdGlvbkNoYW5nZTogKG1vZGVsLCBtb2RlcmF0aW9uKSA9PlxuXG4gICAgICBBcHAuU1NPcHRpb25zLnZlbnQudHJpZ2dlciAnY2hhbmdlOm1vZGVyYXRpb24nLCBtb2RlbCwgbW9kZXJhdGlvblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxuQXBwLm1vZHVsZSAnU1NPcHRpb25zJywgKFNTT3B0aW9ucywgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICBjbGFzcyBTU09wdGlvbnMuTW9kZWxzLlVzZXJNZXRhTW9kZWwgZXh0ZW5kcyBBcHAuTW9kZWxzLldQVXNlck1ldGFNb2RlbFxuXG4gICAgZGVmYXVsdHM6XG4gICAgICBwdWJsaXNoUG9wdXA6IGZhbHNlXG4gICAgICB0cmFzaFBvcHVwOiBmYWxzZVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxuQXBwLm1vZHVsZSAnU1NPcHRpb25zJywgKFNTT3B0aW9ucywgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICBTU09wdGlvbnMuQ29udHJvbGxlcnMgPSB7fVxuICBTU09wdGlvbnMuTW9kZWxzID0ge31cbiAgU1NPcHRpb25zLkNvbGxlY3Rpb25zID0ge31cbiAgU1NPcHRpb25zLlZpZXdzID0ge31cbiAgU1NPcHRpb25zLkxheW91dHMgPSB7fVxuICBTU09wdGlvbnMuUm91dGVycyA9IHt9XG4gIFNTT3B0aW9ucy5UZW1wbGF0ZXMgPSB7fVxuXG4gIFNTT3B0aW9ucy52ZW50ID0gbmV3IEJhY2tib25lLldyZXFyLkV2ZW50QWdncmVnYXRvcigpXG4gIFNTT3B0aW9ucy5jb21tYW5kcyA9IG5ldyBCYWNrYm9uZS5XcmVxci5Db21tYW5kcygpXG4gIFNTT3B0aW9ucy5yZXFyZXMgPSBuZXcgQmFja2JvbmUuV3JlcXIuUmVxdWVzdFJlc3BvbnNlKClcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbnJlcXVpcmUgJy4vU1NPcHRpb25zJ1xuXG4jIE1vZGVsc1xucmVxdWlyZSAnLi9Nb2RlbHMvT3B0aW9uc01vZGVsJ1xucmVxdWlyZSAnLi9Nb2RlbHMvVXNlck1ldGFNb2RlbCdcblxuIyBDb250cm9sbGVyc1xucmVxdWlyZSAnLi9Db250cm9sbGVycy9PcHRpb25zQ29udHJvbGxlcidcblxuXG5BcHAubW9kdWxlICdTU09wdGlvbnMnLCAoU1NPcHRpb25zLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIFNTT3B0aW9ucy5hZGRJbml0aWFsaXplciAtPlxuXG4gICAgY29udHJvbGxlciA9IG5ldyBTU09wdGlvbnMuQ29udHJvbGxlcnMuT3B0aW9uc0NvbnRyb2xsZXIoKVxuXG4gICAgIyMjXG4gICAgRGVmaW5lIE1vZHVsZSBBUElcbiAgICAjIyNcbiAgICBTU09wdGlvbnMucmVxcmVzLnNldEhhbmRsZXIgJ29wdGlvbicsIGNvbnRyb2xsZXIuZ2V0T3B0aW9uc1xuICAgIFNTT3B0aW9ucy5yZXFyZXMuc2V0SGFuZGxlciAnb3B0aW9ucycsIGNvbnRyb2xsZXIuZ2V0T3B0aW9uc1xuICAgIFNTT3B0aW9ucy5yZXFyZXMuc2V0SGFuZGxlciAndXNlck1ldGEnLCBjb250cm9sbGVyLmdldFVzZXJNZXRhXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxuQXBwLm1vZHVsZSAnU1NQb3N0cycsIChTU1Bvc3RzLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIGNsYXNzIFNTUG9zdHMuQ29sbGVjdGlvbnMuQXBpUG9zdHNDb2xsZWN0aW9uIGV4dGVuZHMgQXBwLkNvbGxlY3Rpb25zLkluZmluaXRlU2Nyb2xsQ29sbGVjdGlvblxuXG4gICAgbW9kZWw6IFNTUG9zdHMuTW9kZWxzLlBvc3RNb2RlbFxuXG4gICAgZGF0YTpcbiAgICAgIHBlclBhZ2UgOiAyNFxuICAgICAgY3JvbiA6ICdmYWxzZSdcblxuICAgIHVybDogLT5cblxuICAgICAgIyBjcmVhdGUgQVBJIHVybCwgYWRkaW5nIGV4dHJhIGZpZWxkcyBmb3IgYXV0aGVudGljYXRpb25cbiAgICAgIHVybCAgICAgICAgICAgID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAnb3B0aW9uJywgJ3NzX2FwaV91cmwnXG4gICAgICBzc19vYXV0aF91cmwgICA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICdzc19vYXV0aF91cmwnXG4gICAgICBhZG1pbl9wYWdlX3VybCA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICdhZG1pbl9wYWdlX3VybCdcbiAgICAgIHNzX3VzZXJfaWQgICAgID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAnb3B0aW9uJywgJ3NzX3VzZXJfaWQnXG4gICAgICBwbHVnaW5fdmVyc2lvbiA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICdwbHVnaW5fdmVyc2lvbidcbiAgICAgIGFjY2Vzc190b2tlbiAgID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAnb3B0aW9uJywgJ2FjY2Vzc190b2tlbidcblxuICAgICAgZGF0YSA9XG4gICAgICAgIG9yaWdpbl91cmwgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KCBhZG1pbl9wYWdlX3VybCApXG4gICAgICAgIHNzX3VzZXJfaWQgICAgIDogc3NfdXNlcl9pZFxuICAgICAgICBhY2Nlc3NfdG9rZW4gICA6IGFjY2Vzc190b2tlblxuICAgICAgICBwbHVnaW5fdmVyc2lvbiA6IHBsdWdpbl92ZXJzaW9uXG5cbiAgICAgIEFwcC5IZWxwZXJzLmh0dHAudG9VcmwgdXJsLCBkYXRhXG5cblxuICAgIHBhcnNlOiAocmVzcG9uc2UpID0+XG5cbiAgICAgICMgd2Ugc2V0IGEgbWF4aW11bSBvZiA5NCBwb3N0c1xuICAgICAgaWYgQGxlbmd0aCA+PSA5NFxuICAgICAgICByZXR1cm4gW11cblxuICAgICAgaWYgcmVzcG9uc2Uuc2VhcmNoX21ldGFkYXRhP1xuXG4gICAgICAgIGlmIG5vdCBAZGF0YT9cbiAgICAgICAgICBAZGF0YSA9IHt9XG5cbiAgICAgICAgQGRhdGEuc2VhcmNoX21ldGFkYXRhID0gcmVzcG9uc2Uuc2VhcmNoX21ldGFkYXRhXG5cbiAgICAgICMgY2hlY2sgaWYgdGhlIGNvbGxlY3Rpb24gaGFzIGEgbmV4dCBwYWdlXG4gICAgICBpZiBAZGF0YT8gYW5kIEBkYXRhLnBlclBhZ2U/IGFuZCByZXNwb25zZS5zdGF0dXNlcy5sZW5ndGggPCBAZGF0YS5wZXJQYWdlXG4gICAgICAgIEBoYXNOZXh0ID0gZmFsc2VcblxuICAgICAgIyByZXR1cm4gdGhlIHN0YXR1c2VzIGZyb20gdGhlIHJlc3BvbnNlXG4gICAgICByZXNwb25zZS5zdGF0dXNlc1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxuQXBwLm1vZHVsZSAnU1NQb3N0cycsIChTU1Bvc3RzLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIGNsYXNzIFNTUG9zdHMuQ29sbGVjdGlvbnMuUG9zdHNDb2xsZWN0aW9uIGV4dGVuZHMgQXBwLkNvbGxlY3Rpb25zLkluZmluaXRlU2Nyb2xsQ29sbGVjdGlvblxuXG4gICAgbW9kZWw6IFNTUG9zdHMuTW9kZWxzLlBvc3RNb2RlbFxuXG4gICAgZGF0YTpcbiAgICAgIHBlclBhZ2UgOiAyNFxuICAgICAgc3RhdHVzOiAncHVibGlzaCdcblxuICAgIGFwaVVybDogJzEvc2l0ZS9zb2NpYWxzdHJlYW1zJ1xuXG4gICAgY29tcGFyYXRvcjogKGEsYikgPT5cblxuICAgICAgYUlkID0gcGFyc2VJbnQgYS5nZXQoJ29yZGVyX2lkJyksIDEwXG4gICAgICBiSWQgPSBwYXJzZUludCBiLmdldCgnb3JkZXJfaWQnKSwgMTBcblxuICAgICAgaWYgYUlkID4gYklkXG4gICAgICAgIC0xXG4gICAgICBlbHNlIGlmIGFJZCA8IGJJZFxuICAgICAgICAxXG4gICAgICBlbHNlXG4gICAgICAgIDBcblxuICAgIG5leHRQYWdlOiAoYXJncykgPT5cblxuICAgICAgaWYgbm90IGFyZ3M/XG4gICAgICAgIGFyZ3MgPSB7fVxuXG4gICAgICBhcmdzID0gXy5kZWZhdWx0cyBhcmdzLFxuICAgICAgICBpbW1lZGlhdGU6IHRydWVcblxuICAgICAgaWYgbm90IGFyZ3MuZGF0YT9cbiAgICAgICAgYXJncy5kYXRhID0ge31cblxuICAgICAgIyBzZXQgdGhlIG1heCBvcmRlciBJRCBmcm9tIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb25cbiAgICAgIGlmIEBsZW5ndGggPiAwXG4gICAgICAgIGFyZ3MuZGF0YS5tYXhfb3JkZXJfaWQgPSBAbGFzdCgpLmdldCgnb3JkZXJfaWQnKVxuXG4gICAgICBAZmV0Y2ggYXJnc1xuXG5cbiAgICBwcmV2UGFnZTogKGFyZ3MpID0+XG5cbiAgICAgIGlmIG5vdCBhcmdzP1xuICAgICAgICBhcmdzID0ge31cblxuICAgICAgYXJncyA9IF8uZGVmYXVsdHMgYXJncyxcbiAgICAgICAgaW1tZWRpYXRlOiB0cnVlXG5cbiAgICAgIGlmIG5vdCBhcmdzLmRhdGE/XG4gICAgICAgIGFyZ3MuZGF0YSA9IHt9XG5cbiAgICAgICMgc2V0IHRoZSBtYXggb3JkZXIgSUQgZnJvbSB0aGUgbGFzdCBpdGVtIGluIHRoZSBjb2xsZWN0aW9uXG4gICAgICBpZiBAbGVuZ3RoID4gMFxuICAgICAgICBhcmdzLmRhdGEubWluX29yZGVyX2lkID0gQGZpcnN0KCkuZ2V0KCdvcmRlcl9pZCcpXG5cbiAgICAgIEBmZXRjaCBhcmdzXG5cblxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU1Bvc3RzJywgKFNTUG9zdHMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NQb3N0cy5Db250cm9sbGVycy5BdXRvUmVsb2FkQ29udHJvbGxlciBleHRlbmRzIEJhY2tib25lLk1hcmlvbmV0dGUuQ29udHJvbGxlclxuXG4gICAgIyBzZXQgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzXG4gICAgYXV0b1JlbG9hZEludGVydmFsOiAxNSAqIDYwICogMTAwMCAjIDE1bWluXG5cbiAgICBpbml0aWFsaXplOiA9PlxuXG4gICAgICBTU1Bvc3RzLm9uICdzdGFydCcsIEBvblN0YXJ0XG5cblxuICAgIG9uU3RhcnQ6ID0+XG5cbiAgICAgICMgaW5pdGlhbGl6ZSBhdXRvcmVsb2FkIGlmIHRoaXMgaXMgdGhlIGZ1bGwgc2NyZWVuIGV2ZW50IHBhZ2VcbiAgICAgIGlmICQoJ2JvZHknKS5oYXNDbGFzcyAncGFnZS10ZW1wbGF0ZS10ZW1wbGF0ZS1zb2NpYWxzdHJlYW0tZnVsbHNjcmVlbi1waHAnXG5cbiAgICAgICAgIyBpbml0aWFsaXplIGF1dG9yZWxvYWRcbiAgICAgICAgQGluaXRBdXRvcmVsb2FkKClcblxuICAgICAgICBwb3N0c0NvbXBvc2l0ZVZpZXcgPSBTU1Bvc3RzLnJlcXJlcy5yZXF1ZXN0ICdwb3N0c0NvbXBvc2l0ZVZpZXcnXG5cbiAgICAgICAgbW9kZWxzID0gW11cblxuICAgICAgICBwb3N0c0NvbXBvc2l0ZVZpZXcuY29sbGVjdGlvbi5lYWNoIChtb2RlbCkgLT5cbiAgICAgICAgICBtb2RlbHMucHVzaCBtb2RlbFxuXG4gICAgICAgIEBzaG93SW5Sb3dzIHBvc3RzQ29tcG9zaXRlVmlldywgbW9kZWxzLFxuICAgICAgICAgIGludGVydmFsOiAxNTAwXG5cblxuXG4gICAgaW5pdEF1dG9yZWxvYWQ6ID0+XG5cbiAgICAgIGF1dG9yZWxvYWRNZXRob2QgPSAnJ1xuXG4gICAgICAjIGNoZWNrIGlmIHdlYnNvY2tldCBpcyBhdmFpbGFibGVcbiAgICAgICMgLi4uXG5cbiAgICAgIGlmIGF1dG9yZWxvYWRNZXRob2QgaXMgJ3dlYnNvY2tldCdcbiAgICAgICAgQGluaXRBdXRvcmVsb2FkU29ja2V0KClcbiAgICAgIGVsc2VcbiAgICAgICAgQGluaXRBdXRvcmVsb2FkUG9sbCgpXG5cblxuXG4gICAgaW5pdEF1dG9yZWxvYWRTb2NrZXQ6ID0+XG5cblxuICAgIGluaXRBdXRvcmVsb2FkUG9sbDogPT5cblxuICAgICAgc2V0SW50ZXJ2YWwgQGF1dG9yZWxvYWRQb2xsLCBAYXV0b1JlbG9hZEludGVydmFsXG5cblxuICAgIGF1dG9yZWxvYWRQb2xsOiA9PlxuXG4gICAgICAjIGdldCBjb21wb3NpdGVWaWV3XG4gICAgICBjb21wb3NpdGVWaWV3ID0gU1NQb3N0cy5yZXFyZXMucmVxdWVzdCAncG9zdHNDb21wb3NpdGVWaWV3J1xuXG4gICAgICBpZiBjb21wb3NpdGVWaWV3LmxvYWRpbmc/IGFuZCBjb21wb3NpdGVWaWV3LmxvYWRpbmdcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGNvbXBvc2l0ZVZpZXcubG9hZGluZyA9IHRydWVcblxuICAgICAgZmlyc3RPcmRlcklEID0gcGFyc2VJbnQgY29tcG9zaXRlVmlldy5jaGlsZHJlbi5maW5kQnlJbmRleCgwKS5tb2RlbC5nZXQoJ29yZGVyX2lkJyksIDEwXG4gICAgICBjb21wb3NpdGVWaWV3LmNvbGxlY3Rpb24ucHJldlBhZ2VcbiAgICAgICAgcmVtb3ZlOiBmYWxzZVxuXG4gICAgICAgIGRhdGE6XG4gICAgICAgICAgcGVyUGFnZTogLTFcblxuICAgICAgICBzdWNjZXNzOiAoY29sbGVjdGlvbiwgcmVzKSA9PlxuXG4gICAgICAgICAgaWYgY29sbGVjdGlvbi5sZW5ndGggaXMgMFxuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICBjb21wb3NpdGVWaWV3LnJlbmRlcigpXG5cbiAgICAgICAgICBtb2RlbHMgPSBbXVxuXG4gICAgICAgICAgY29sbGVjdGlvbi5lYWNoIChtb2RlbCkgLT5cbiAgICAgICAgICAgIGlmIHBhcnNlSW50KCBtb2RlbC5nZXQoJ29yZGVyX2lkJyksIDEwICkgPiBmaXJzdE9yZGVySURcbiAgICAgICAgICAgICAgbW9kZWxzLnB1c2ggbW9kZWxcblxuICAgICAgICAgIEBzaG93SW5Sb3dzIGNvbXBvc2l0ZVZpZXcsIG1vZGVsc1xuXG5cbiAgICBzaG93SW5Sb3dzOiAoY29tcG9zaXRlVmlldywgbW9kZWxzLCBhcmdzKSA9PlxuXG4gICAgICBpZiBub3QgYXJncz9cbiAgICAgICAgYXJncyA9IHt9XG4gICAgICBhcmdzID0gXy5kZWZhdWx0cyBhcmdzLCB7fVxuXG4gICAgICBuZXdWaWV3cyA9IFtdXG5cbiAgICAgIF8uZWFjaCBtb2RlbHMsIChtb2RlbCkgLT5cbiAgICAgICAgIyBmaW5kIGNoaWxkIHZpZXcgZm9yIHRoaXMgbW9kZWxcbiAgICAgICAgY2hpbGRWaWV3ID0gY29tcG9zaXRlVmlldy5jaGlsZHJlbi5maW5kQnlNb2RlbCBtb2RlbFxuXG4gICAgICAgIGNoaWxkVmlldy4kZWwuaGlkZSgpXG4gICAgICAgIG5ld1ZpZXdzLnB1c2ggY2hpbGRWaWV3XG5cblxuICAgICAgIyBmaW5kIGhvdyBtYW55IGNvbHVtbnMgd2UgaGF2ZVxuICAgICAgbGF5b3V0ID0gJCgnLnNzLXdyYXBwZXInKS5hdHRyKCdkYXRhLWxheW91dCcpXG5cbiAgICAgIGNvbHMgPSAxXG4gICAgICBzd2l0Y2ggbGF5b3V0XG4gICAgICAgIHdoZW4gJ3NtYWxsJ1xuICAgICAgICAgIGNvbHMgPSAyXG4gICAgICAgIHdoZW4gJ21lZGl1bSdcbiAgICAgICAgICBjb2xzID0gM1xuICAgICAgICB3aGVuICdsYXJnZSdcbiAgICAgICAgICBjb2xzID0gNFxuXG4gICAgICAjIGRpdmlkZSBuZXcgcG9zdHMgaW4gZ3JvdXBzIG9yIGBjb2xzYCBwb3N0cyBlYWNoXG4gICAgICBuZXdWaWV3c0dyb3VwcyA9IFtdXG4gICAgICBfLmVhY2ggbmV3Vmlld3MucmV2ZXJzZSgpLCAobmV3VmlldywgbmV3Vmlld0luZGV4KSAtPlxuICAgICAgICBncm91cEluZGV4ID0gTWF0aC5mbG9vciggbmV3Vmlld0luZGV4IC8gY29scyApXG5cbiAgICAgICAgaWYgbm90IG5ld1ZpZXdzR3JvdXBzWyBncm91cEluZGV4IF0/XG4gICAgICAgICAgbmV3Vmlld3NHcm91cHMucHVzaCBbXVxuXG4gICAgICAgIG5ld1ZpZXdzR3JvdXBzWyBncm91cEluZGV4IF0ucHVzaCBuZXdWaWV3XG5cblxuICAgICAgaWYgYXJncy5pbnRlcnZhbD9cbiAgICAgICAgc2hvd0ludGVydmFsID0gYXJncy5pbnRlcnZhbFxuICAgICAgZWxzZVxuICAgICAgICBzaG93SW50ZXJ2YWwgPSBNYXRoLnJvdW5kKCBAYXV0b1JlbG9hZEludGVydmFsIC8gKCBuZXdWaWV3c0dyb3Vwcy5sZW5ndGggKyAxICkgKVxuXG4gICAgICBfLmVhY2ggbmV3Vmlld3NHcm91cHMsIChuZXdWaWV3R3JvdXAsIG5ld1ZpZXdHcm91cEluZGV4KSAtPlxuXG4gICAgICAgICMgc2hvdyBhZnRlciBzb21lIHRpbWVcbiAgICAgICAgc2V0VGltZW91dCAtPlxuXG4gICAgICAgICAgaWYgbmV3Vmlld0dyb3VwLmxlbmd0aCBpcyBjb2xzXG4gICAgICAgICAgICBfLmVhY2ggbmV3Vmlld0dyb3VwLCAobmV3VmlldykgLT5cbiAgICAgICAgICAgICAgbmV3Vmlldy4kZWwuc2xpZGVEb3duIDUwMFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIF8uZWFjaCBuZXdWaWV3R3JvdXAsIChuZXdWaWV3KSAtPlxuICAgICAgICAgICAgICBuZXdWaWV3LiRlbC5mYWRlSW4gODAwXG5cbiAgICAgICAgLCBuZXdWaWV3R3JvdXBJbmRleCAqIHNob3dJbnRlcnZhbFxuXG5cbiAgICAgICMgY2xlYXIgdGhlIGxvYWRpbmcgZmxhZ1xuICAgICAgY29tcG9zaXRlVmlldy5sb2FkaW5nID0gZmFsc2VcblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxuQXBwLm1vZHVsZSAnU1NQb3N0cycsIChTU1Bvc3RzLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIGNsYXNzIFNTUG9zdHMuQ29udHJvbGxlcnMuUG9zdHNDb250cm9sbGVyIGV4dGVuZHMgQmFja2JvbmUuTWFyaW9uZXR0ZS5Db250cm9sbGVyXG5cblxuICAgIGluaXRpYWxpemU6ID0+XG5cbiAgICAgIFNTUG9zdHMub24gJ3N0YXJ0JywgQG9uU3RhcnRcblxuXG4gICAgb25TdGFydDogPT5cblxuICAgICAgIyBjaGVjayBpZiB0aGUgaGVhZGVyIHJlZ2lvbiBpcyBpbiB0aGUgZG9tXG4gICAgICBpZiAkKCcuc3MtcG9zdHMtcmVnaW9uJykubGVuZ3RoID4gMFxuXG4gICAgICAgIEFwcC5hZGRSZWdpb25zXG4gICAgICAgICAgcG9zdHM6ICcuc3MtcG9zdHMtcmVnaW9uJ1xuXG5cbiAgICAgICMjI1xuICAgICAgUmVuZGVyIHBvc3RzIGZvciB0aGUgZmlyc3QgdGltZSwgaWYgYW55IHBvc3RzIGFyZSBmb3VuZCBpbiB0aGUgRE9NLlxuICAgICAgIyMjXG4gICAgICBpZiAkKCcuc3Mtd3JhcHBlcicpLmxlbmd0aCA+IDBcbiAgICAgICAgQGdldFBvc3RzQ29tcG9zaXRlVmlldygpLnJlbmRlckZyb21ET00gJCgnLnNzLXdyYXBwZXInKVxuXG4gICAgICAgIGlmIEFwcC5wb3N0cz9cbiAgICAgICAgICBBcHAucG9zdHMuY3VycmVudFZpZXcgPSBAZ2V0UG9zdHNDb21wb3NpdGVWaWV3KClcblxuXG5cbiAgICBnZXRQb3N0c0NvbGxlY3Rpb246ID0+XG5cbiAgICAgIGlmIG5vdCBAcG9zdHNDb2xsZWN0aW9uP1xuXG4gICAgICAgIEBwb3N0c0NvbGxlY3Rpb24gPSBuZXcgU1NQb3N0cy5Db2xsZWN0aW9ucy5Qb3N0c0NvbGxlY3Rpb24oKVxuXG4gICAgICAgICMgaWYgdGhlIHBocCBhcGkgY2FsbCB3YXMgbWFkZSB3aXRoIGEgcmVxdWVzdElELCBmZXRjaCB0aGF0XG4gICAgICAgIGlmICQoJy5id2FwaS1jYWxsLWRhdGFbZGF0YS1pZD1cInNvY2lhbHN0cmVhbXNfdG9wXCJdJykubGVuZ3RoID4gMFxuICAgICAgICAgIEBwb3N0c0NvbGxlY3Rpb24uZGF0YS5yZXF1ZXN0SUQgPSAnc29jaWFsc3RyZWFtc190b3AnXG5cbiAgICAgICAgIyBJZiB3ZSBhcmUgaW4gdGhlIGFkbWluIGFyZWEsIHdlIG5lZWQgdG8gc2V0IHRoZVxuICAgICAgICAjIG9mIHRoZSBjb2xsZWN0aW9uIHRvIGZldGNoIGJvdGggZHJhZnQgYW5kIHB1Ymxpc2hlZCBwb3N0c1xuICAgICAgICBpZiAkKCcuc3MtYWRtaW4nKS5sZW5ndGggPiAwXG4gICAgICAgICAgQHBvc3RzQ29sbGVjdGlvbi5kYXRhLnN0YXR1cyA9IFsnZHJhZnQnLCAncHVibGlzaCddXG5cbiAgICAgICAgIyBmZXRjaCBpbml0aWFsIHBvc3RzIGZyb20gRE9NXG4gICAgICAgIEBwb3N0c0NvbGxlY3Rpb24uZmV0Y2goKVxuXG4gICAgICBAcG9zdHNDb2xsZWN0aW9uXG5cblxuICAgIGdldEFwaVBvc3RzQ29sbGVjdGlvbjogPT5cblxuICAgICAgaWYgbm90IEBhcGlQb3N0c0NvbGxlY3Rpb24/XG5cbiAgICAgICAgQGFwaVBvc3RzQ29sbGVjdGlvbiA9IG5ldyBTU1Bvc3RzLkNvbGxlY3Rpb25zLkFwaVBvc3RzQ29sbGVjdGlvbigpXG5cbiAgICAgIEBhcGlQb3N0c0NvbGxlY3Rpb25cblxuXG5cbiAgICBnZXRBbGxQb3N0c0NvbGxlY3Rpb246ID0+XG5cbiAgICAgIGlmIG5vdCBAYWxsUG9zdHNDb2xsZWN0aW9uP1xuXG4gICAgICAgIEBhbGxQb3N0c0NvbGxlY3Rpb24gPSBuZXcgU1NQb3N0cy5Db2xsZWN0aW9ucy5Qb3N0c0NvbGxlY3Rpb24oKVxuXG4gICAgICAgIEBhbGxQb3N0c0NvbGxlY3Rpb24uZGF0YSA9XG4gICAgICAgICAgcmVxdWVzdElEIDogJ3NvY2lhbHN0cmVhbXNfYWxsJ1xuICAgICAgICAgIHBlclBhZ2U6IC0xXG4gICAgICAgICAgc3RhdHVzOiBbXG4gICAgICAgICAgICAncHVibGlzaCdcbiAgICAgICAgICAgICdkcmFmdCdcbiAgICAgICAgICAgICd0cmFzaCdcbiAgICAgICAgICBdXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAnaWQnXG4gICAgICAgICAgICAnc3RhdHVzJ1xuICAgICAgICAgICAgJ3ZlbmRvcl9pZCdcbiAgICAgICAgICAgICdzZXJ2aWNlX25hbWUnXG4gICAgICAgICAgXVxuXG4gICAgICAgIEBhbGxQb3N0c0NvbGxlY3Rpb24uZmV0Y2goKVxuXG4gICAgICAgICMgY29uc29sZS5sb2cgQGFsbFBvc3RzQ29sbGVjdGlvblxuXG4gICAgICBAYWxsUG9zdHNDb2xsZWN0aW9uXG5cblxuICAgIGdldFBvc3RzQ29tcG9zaXRlVmlldzogPT5cblxuICAgICAgaWYgbm90IEBwb3N0c0NvbXBvc2l0ZVZpZXc/IG9yIEBwb3N0c0NvbXBvc2l0ZVZpZXcuaXNDbG9zZWRcblxuICAgICAgICBAcG9zdHNDb21wb3NpdGVWaWV3ID0gbmV3IFNTUG9zdHMuVmlld3MuUG9zdHNDb21wb3NpdGVWaWV3XG4gICAgICAgICAgY29sbGVjdGlvbjogQGdldFBvc3RzQ29sbGVjdGlvbigpXG4gICAgICAgICAgbW9kZWw6IChuZXcgU1NQb3N0cy5Nb2RlbHMuUG9zdHNMYXlvdXRNb2RlbClcblxuICAgICAgQHBvc3RzQ29tcG9zaXRlVmlld1xuXG5cblxuICAgIGdldEFwaVBvc3RzQ29tcG9zaXRlVmlldzogPT5cblxuICAgICAgaWYgbm90IEBhcGlQb3N0c0NvbXBvc2l0ZVZpZXc/IG9yIEBhcGlQb3N0c0NvbXBvc2l0ZVZpZXcuaXNDbG9zZWRcblxuICAgICAgICBAYXBpUG9zdHNDb21wb3NpdGVWaWV3ID0gbmV3IFNTUG9zdHMuVmlld3MuUG9zdHNDb21wb3NpdGVWaWV3XG4gICAgICAgICAgY29sbGVjdGlvbjogQGdldEFwaVBvc3RzQ29sbGVjdGlvbigpXG4gICAgICAgICAgbW9kZWw6IChuZXcgU1NQb3N0cy5Nb2RlbHMuUG9zdHNMYXlvdXRNb2RlbClcblxuICAgICAgQGFwaVBvc3RzQ29tcG9zaXRlVmlld1xuXG5cblxuICAgIGRvaW5nQmF0Y2hTYXZlOiAodmFsdWUpID0+XG5cbiAgICAgIGlmIG5vdCBAZG9pbmdCYXRjaFNhdmVGbGFnP1xuICAgICAgICBAZG9pbmdCYXRjaFNhdmVGbGFnID0gZmFsc2VcblxuICAgICAgaWYgdmFsdWU/XG4gICAgICAgIEBkb2luZ0JhdGNoU2F2ZUZsYWcgPSB2YWx1ZVxuXG4gICAgICBAZG9pbmdCYXRjaFNhdmVGbGFnXG5cblxuICAgIGZldGNoU2VydmVyUG9zdHM6IChkYXRhLCBvcHRpb25zKSA9PlxuXG4gICAgICBwb3N0c0NvbGxlY3Rpb24gPSBAZ2V0UG9zdHNDb2xsZWN0aW9uKClcblxuICAgICAgaWYgbm90IHBvc3RzQ29sbGVjdGlvbi5kYXRhP1xuICAgICAgICBwb3N0c0NvbGxlY3Rpb24uZGF0YSA9IHt9XG5cbiAgICAgIGlmIGRhdGE/XG4gICAgICAgIHBvc3RzQ29sbGVjdGlvbi5kYXRhID0gXy5leHRlbmQge30sIHBvc3RzQ29sbGVjdGlvbi5kYXRhLCBkYXRhXG5cbiAgICAgICMgc2V0IGhhc05leHQgZmxhZyB0byB0cnVlIHNvIHRoYXQgaW5maW5pdGUgc2Nyb2xsIGNhbiBzdGFydCBhZ2FpblxuICAgICAgcG9zdHNDb2xsZWN0aW9uLmhhc05leHQgPSB0cnVlXG5cbiAgICAgICMgZmlyc3QgcmVzZXQgY29sbGVjdGlvblxuICAgICAgcG9zdHNDb2xsZWN0aW9uLnJlc2V0KClcblxuICAgICAgIyBmZXRjaCBuZXcgcG9zdHNcbiAgICAgIHBvc3RzQ29sbGVjdGlvbi5mZXRjaFxuICAgICAgICBzdWNjZXNzOiA9PlxuXG4gICAgICAgICAgIyBjaGVjayBpZiB0aGUgcmVnaW9uIGNvbnRhaW5zIHBvc3RzIGZyb20gdGhlIEFQSVxuICAgICAgICAgIHBvc3RzQ29tcG9zaXRlVmlldyA9IEBnZXRQb3N0c0NvbXBvc2l0ZVZpZXcoKVxuICAgICAgICAgIGlmIG5vdCBwb3N0c0NvbXBvc2l0ZVZpZXcuaXNSZW5kZXJlZFxuICAgICAgICAgICAgQXBwLnBvc3RzLnNob3cgcG9zdHNDb21wb3NpdGVWaWV3XG5cbiAgICAgICAgICBpZiBvcHRpb25zPyBhbmQgb3B0aW9ucy5zdWNjZXNzPyBhbmQgdHlwZW9mIG9wdGlvbnMuc3VjY2VzcyBpcyAnZnVuY3Rpb24nXG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoKVxuXG5cblxuICAgIGZldGNoQXBpUG9zdHM6IChkYXRhLCBvcHRpb25zKSA9PlxuXG4gICAgICBhcGlQb3N0c0NvbGxlY3Rpb24gPSBAZ2V0QXBpUG9zdHNDb2xsZWN0aW9uKClcblxuICAgICAgaWYgbm90IGFwaVBvc3RzQ29sbGVjdGlvbi5kYXRhP1xuICAgICAgICBhcGlQb3N0c0NvbGxlY3Rpb24uZGF0YSA9IHt9XG5cbiAgICAgIGlmIGRhdGE/XG4gICAgICAgIGFwaVBvc3RzQ29sbGVjdGlvbi5kYXRhID0gXy5leHRlbmQge30sIGFwaVBvc3RzQ29sbGVjdGlvbi5kYXRhLCBkYXRhXG5cbiAgICAgIGFwaVBvc3RzQ29sbGVjdGlvbi5oYXNOZXh0ID0gdHJ1ZVxuXG4gICAgICAjIGZvciBuZXcgYXBpIGNvbGxlY3Rpb25zIHdlIHNldCB0aGUgc2VhcmNoX21ldGFkYXRhIHRvIG51bGxcbiAgICAgIGlmIGFwaVBvc3RzQ29sbGVjdGlvbi5kYXRhLnNlYXJjaF9tZXRhZGF0YT9cbiAgICAgICAgZGVsZXRlIGFwaVBvc3RzQ29sbGVjdGlvbi5kYXRhLnNlYXJjaF9tZXRhZGF0YVxuXG4gICAgICAjIGZpcnN0IHJlc2V0IGNvbGxlY3Rpb25cbiAgICAgIGFwaVBvc3RzQ29sbGVjdGlvbi5yZXNldCgpXG5cbiAgICAgICMgZmV0Y2ggbmV3IHBvc3RzXG4gICAgICBhcGlQb3N0c0NvbGxlY3Rpb24uZmV0Y2hcblxuICAgICAgICBzdWNjZXNzOiA9PlxuXG4gICAgICAgICAgIyBjaGVjayBpZiB0aGUgcmVnaW9uIGNvbnRhaW5zIHBvc3RzIGZyb20gdGhlIEFQSVxuICAgICAgICAgIGFwaVBvc3RzQ29tcG9zaXRlVmlldyA9IEBnZXRBcGlQb3N0c0NvbXBvc2l0ZVZpZXcoKVxuICAgICAgICAgIGlmIG5vdCBhcGlQb3N0c0NvbXBvc2l0ZVZpZXcuaXNSZW5kZXJlZFxuICAgICAgICAgICAgQXBwLnBvc3RzLnNob3cgYXBpUG9zdHNDb21wb3NpdGVWaWV3XG5cbiAgICAgICAgICBpZiBvcHRpb25zPyBhbmQgb3B0aW9ucy5zdWNjZXNzPyBhbmQgdHlwZW9mIG9wdGlvbnMuc3VjY2VzcyBpcyAnZnVuY3Rpb24nXG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoKVxuXG5cbiAgICBwdWJsaXNoQXBpUG9zdHM6ID0+XG5cbiAgICAgICMgbG9vcCB0aHJvdWdoIGFsbCBwb3N0cyBpbiB0aGUgQVBJIGNvbGxlY3Rpb25cbiAgICAgIGFwaVBvc3RzQ29sbGVjdGlvbiA9IEBnZXRBcGlQb3N0c0NvbGxlY3Rpb24oKVxuXG4gICAgICBpZiBhcGlQb3N0c0NvbGxlY3Rpb24ubGVuZ3RoID4gMFxuICAgICAgICBhcGlQb3N0c0NvbGxlY3Rpb24uZWFjaCAoYXBpUG9zdE1vZGVsKSAtPlxuICAgICAgICAgIGFwaVBvc3RNb2RlbC5zYXZlIHt9LFxuICAgICAgICAgICAgYmF0Y2g6IHRydWVcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5tb21lbnQgPSByZXF1aXJlICdtb21lbnQnXG5cbkFwcC5tb2R1bGUgJ1NTUG9zdHMnLCAoU1NQb3N0cywgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICBjbGFzcyBTU1Bvc3RzLk1vZGVscy5Qb3N0TW9kZWwgZXh0ZW5kcyBBcHAuTW9kZWxzLkFwaU1vZGVsXG5cbiAgICBhcGlVcmw6ICcxL3NpdGUvc29jaWFsc3RyZWFtcydcblxuICAgIGluaXRpYWxpemU6ID0+XG5cbiAgICAgICMgY2hlY2sgaWYgdGhlIG9wdGlvbnMgbW9kdWxlIHdhcyBsb2FkZWRcbiAgICAgIGlmIEFwcC5TU09wdGlvbnM/IGFuZCBBcHAuU1NPcHRpb25zLnZlbnQ/XG5cbiAgICAgICAgIyBsaXN0ZW4gZm9yIG1vZGVyYXRpb24gY2hhbmdlc1xuICAgICAgICBAbGlzdGVuVG8gQXBwLlNTT3B0aW9ucy52ZW50LCAnY2hhbmdlOm1vZGVyYXRpb24nLCBAb25Nb2RlcmF0aW9uQ2hhbmdlXG5cblxuICAgICAgaWYgbm90IEBpZD8gb3IgQGlkIGlzICcnXG4gICAgICAgIHNhdmVkUG9zdCA9IEBnZXRTYXZlZFBvc3QoKVxuICAgICAgICBpZiBzYXZlZFBvc3Q/XG4gICAgICAgICAgaWQgPSBzYXZlZFBvc3QuZ2V0KCdpZCcpXG5cblxuICAgIG9uTW9kZXJhdGlvbkNoYW5nZTogKG1vZGVsLCBtb2RlcmF0aW9uKSA9PlxuXG4gICAgICAjIElmIHBvc3QgZG9lcyBub3QgaGF2ZSBhIGlkIHNldCwgZG8gbm90IHRvZ2dsZSBvbiBtb2RlcmF0aW9uIGNoYW5nZXNcbiAgICAgIGlmIG5vdCBAaWQ/IG9yIEBpZCBpcyAnJ1xuXG4gICAgICAgICMgYnkgZGVmYXVsdCB0aGUgc3RhdHVzIGlzICdwdWJsaWMnXG4gICAgICAgIHN0YXR1cyA9ICdwdWJsaXNoJ1xuXG4gICAgICAgICMgaWYgbW9kZXJhdGlvbiBpcyB0dXJuZWQgT04sIHRoZW4gd2Ugc2hvdWxkIHN3aXRjaCBhbGwgcG9zdHMgdG8gZHJhZnRcbiAgICAgICAgaWYgbW9kZXJhdGlvblxuICAgICAgICAgIHN0YXR1cyA9ICdkcmFmdCdcblxuICAgICAgICBAc2V0ICdzdGF0dXMnLCBzdGF0dXNcblxuXG4gICAgcGFyc2U6IChkYXRhKSAtPlxuXG4gICAgICBjb21wdXRlZEZpZWxkcyA9IFtcbiAgICAgICAgJ2Zvcm1hdHRlZF90aW1lJ1xuICAgICAgICAnYXZhdGFyJ1xuICAgICAgICAncGVybWFsaW5rJ1xuICAgICAgICAndXNlcl9saW5rJ1xuICAgICAgICAnZm9ybWF0dGVkX2NhcHRpb24nXG4gICAgICAgICdpbWFnZSdcbiAgICAgICAgJ3ZpZGVvJ1xuICAgICAgICAnaGFzX2ltYWdlJ1xuICAgICAgICAnaGFzX3ZpZGVvJ1xuICAgICAgICAnaGFzX21lZGlhJ1xuICAgICAgICAnYWN0aW9ucydcbiAgICAgICAgJ3N0YXR1c19pY29uJ1xuICAgICAgXVxuXG4gICAgICAjIHJlbW92ZSBjb21wdXRlZCBkYXRhXG4gICAgICBfLmVhY2ggY29tcHV0ZWRGaWVsZHMsIChrZXkpIC0+XG4gICAgICAgIGlmIGRhdGFba2V5XT9cbiAgICAgICAgICBkZWxldGUgZGF0YVtrZXldXG5cbiAgICAgIGlmIEBjb2xsZWN0aW9uP1xuXG4gICAgICAgIGR1cGVzID0gQGNvbGxlY3Rpb24ud2hlcmVcbiAgICAgICAgICB2ZW5kb3JfaWQ6IGRhdGEudmVuZG9yX2lkXG4gICAgICAgICAgc2VydmljZV9uYW1lOiBkYXRhLnNlcnZpY2VfbmFtZVxuXG4gICAgICAgIGlmIGR1cGVzLmxlbmd0aCA+IDFcbiAgICAgICAgICBkYXRhLmR1cGxpY2F0ZSA9IHRydWVcblxuICAgICAgZGF0YVxuXG5cbiAgICBkZWZhdWx0czpcblxuICAgICAgZHVwbGljYXRlOiBmYWxzZVxuXG4gICAgICBzdGF0dXM6IC0+XG5cbiAgICAgICAgb3V0cHV0ID0gJ2RyYWZ0J1xuXG4gICAgICAgICMgY2hlY2sgbW9kZXJhdGlvblxuICAgICAgICBpZiBBcHAuU1NPcHRpb25zP1xuICAgICAgICAgIG1vZGVyYXRpb24gPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAnbW9kZXJhdGlvbidcbiAgICAgICAgICBpZiBtb2RlcmF0aW9uPyBhbmQgbW9kZXJhdGlvbiBpcyBmYWxzZVxuICAgICAgICAgICAgb3V0cHV0ID0gJ3B1Ymxpc2gnXG5cblxuICAgICAgICBzYXZlZFBvc3QgPSBAZ2V0U2F2ZWRQb3N0KClcbiAgICAgICAgaWYgc2F2ZWRQb3N0P1xuICAgICAgICAgIG91dHB1dCA9IHNhdmVkUG9zdC5nZXQoJ3N0YXR1cycpXG5cbiAgICAgICAgb3V0cHV0XG5cblxuICAgICAgZm9ybWF0dGVkX3RpbWUgOiAtPlxuICAgICAgICBBcHAuSGVscGVycy5kYXRlLnBhcnNlVGltZXN0YW1wIEBnZXQoJ3RpbWVzdGFtcCcpXG5cbiAgICAgIHNjcmVlbl9uYW1lOiAtPlxuXG4gICAgICAgIG91dHB1dCA9ICcnXG5cbiAgICAgICAgc3dpdGNoIEBnZXQoJ3NlcnZpY2VfbmFtZScpXG4gICAgICAgICAgd2hlbiAndHdpdHRlcidcbiAgICAgICAgICAgIG91dHB1dCA9IEBnZXQoJ3VzZXInKS5zY3JlZW5fbmFtZVxuXG4gICAgICAgICAgd2hlbiAnaW5zdGFncmFtJ1xuICAgICAgICAgICAgb3V0cHV0ID0gQGdldCgndXNlcicpLnVzZXJuYW1lXG5cbiAgICAgICAgb3V0cHV0XG5cblxuICAgICAgYXZhdGFyOiAtPlxuXG4gICAgICAgIG91dHB1dCA9ICcnXG5cbiAgICAgICAgc3dpdGNoIEBnZXQoJ3NlcnZpY2VfbmFtZScpXG4gICAgICAgICAgd2hlbiAndHdpdHRlcidcbiAgICAgICAgICAgIG91dHB1dCA9IEBnZXQoJ3VzZXInKS5wcm9maWxlX2ltYWdlX3VybF9odHRwc1xuXG4gICAgICAgICAgd2hlbiAnaW5zdGFncmFtJ1xuICAgICAgICAgICAgb3V0cHV0ID0gQGdldCgndXNlcicpLnByb2ZpbGVfcGljdHVyZVxuXG4gICAgICAgIG91dHB1dFxuXG5cbiAgICAgIHBlcm1hbGluazogLT5cblxuICAgICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAgIHN3aXRjaCBAZ2V0KCdzZXJ2aWNlX25hbWUnKVxuICAgICAgICAgIHdoZW4gJ3R3aXR0ZXInXG4gICAgICAgICAgICBvdXRwdXQgPSBcImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL1wiICsgQGdldCgnc2NyZWVuX25hbWUnKSArIFwiL3N0YXR1cy9cIiArIEBnZXQoJ3ZlbmRvcl9pZCcpXG5cbiAgICAgICAgICB3aGVuICdpbnN0YWdyYW0nXG4gICAgICAgICAgICBvdXRwdXQgPSBAZ2V0KCdsaW5rJylcblxuICAgICAgICBvdXRwdXRcblxuXG4gICAgICB1c2VyX2xpbms6IC0+XG5cbiAgICAgICAgb3V0cHV0ID0gJydcblxuICAgICAgICBzd2l0Y2ggQGdldCgnc2VydmljZV9uYW1lJylcbiAgICAgICAgICB3aGVuICd0d2l0dGVyJ1xuICAgICAgICAgICAgb3V0cHV0ID0gXCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9cIiArIEBnZXQoJ3NjcmVlbl9uYW1lJylcblxuICAgICAgICAgIHdoZW4gJ2luc3RhZ3JhbSdcbiAgICAgICAgICAgIG91dHB1dCA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiArIEBnZXQoJ3NjcmVlbl9uYW1lJylcblxuICAgICAgICBvdXRwdXRcblxuXG4gICAgICBmb3JtYXR0ZWRfY2FwdGlvbjogLT5cblxuICAgICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAgIHN3aXRjaCBAZ2V0KCdzZXJ2aWNlX25hbWUnKVxuICAgICAgICAgIHdoZW4gJ3R3aXR0ZXInXG4gICAgICAgICAgICBvdXRwdXQgPSBAZ2V0KCd0ZXh0JylcblxuICAgICAgICAgIHdoZW4gJ2luc3RhZ3JhbSdcbiAgICAgICAgICAgIGNhcHRpb24gPSBAZ2V0KCdjYXB0aW9uJylcbiAgICAgICAgICAgIGlmIGNhcHRpb24/IGFuZCBjYXB0aW9uLnRleHQ/XG4gICAgICAgICAgICAgIG91dHB1dCA9IGNhcHRpb24udGV4dFxuXG4gICAgICAgIG91dHB1dCA9IEBwYXJzZVVybHMgb3V0cHV0XG4gICAgICAgIG91dHB1dCA9IEBwYXJzZU1lbnRpb25zIG91dHB1dFxuICAgICAgICBvdXRwdXQgPSBAcGFyc2VIYXNodGFncyBvdXRwdXRcbiAgICAgICAgb3V0cHV0ID0gQGFkZExpbmVicmVha3Mgb3V0cHV0XG5cbiAgICAgICAgb3V0cHV0XG5cblxuICAgICAgaW1hZ2U6IC0+XG5cbiAgICAgICAgb3V0cHV0ID0gJydcblxuICAgICAgICBzd2l0Y2ggQGdldCgnc2VydmljZV9uYW1lJylcbiAgICAgICAgICB3aGVuICd0d2l0dGVyJ1xuICAgICAgICAgICAgZW50aXRpZXMgPSBAZ2V0KCdlbnRpdGllcycpXG4gICAgICAgICAgICBpZiBlbnRpdGllcz8gYW5kIGVudGl0aWVzLm1lZGlhPyBhbmQgZW50aXRpZXMubWVkaWEubGVuZ3RoID4gMFxuICAgICAgICAgICAgICBvdXRwdXQgPSBlbnRpdGllcy5tZWRpYVswXS5tZWRpYV91cmxfaHR0cHNcblxuICAgICAgICAgIHdoZW4gJ2luc3RhZ3JhbSdcbiAgICAgICAgICAgIG91dHB1dCA9IEBnZXQoJ2ltYWdlcycpLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsXG5cbiAgICAgICAgb3V0cHV0XG5cblxuICAgICAgdmlkZW86IC0+XG5cbiAgICAgICAgb3V0cHV0ID0gJydcblxuICAgICAgICBzd2l0Y2ggQGdldCgnc2VydmljZV9uYW1lJylcbiAgICAgICAgICB3aGVuICdpbnN0YWdyYW0nXG4gICAgICAgICAgICB2aWRlb3MgPSBAZ2V0KCd2aWRlb3MnKVxuICAgICAgICAgICAgaWYgdmlkZW9zPyBhbmQgdmlkZW9zLnN0YW5kYXJkX3Jlc29sdXRpb24/IGFuZCB2aWRlb3Muc3RhbmRhcmRfcmVzb2x1dGlvbi51cmw/XG4gICAgICAgICAgICAgIG91dHB1dCA9IHZpZGVvcy5zdGFuZGFyZF9yZXNvbHV0aW9uLnVybFxuXG4gICAgICAgIG91dHB1dFxuXG5cbiAgICAgIGhhc19pbWFnZTogLT5cbiAgICAgICAgKEBnZXQoJ2ltYWdlJykgaXNudCAnJylcblxuICAgICAgaGFzX3ZpZGVvOiAtPlxuICAgICAgICAoQGdldCgndmlkZW8nKSBpc250ICcnKVxuXG5cbiAgICAgIGhhc19tZWRpYTogLT5cbiAgICAgICAgKEBnZXQoJ2hhc19pbWFnZScpIG9yIEBnZXQoJ2hhc192aWRlbycpKVxuXG5cbiAgICAgIGFjdGlvbnM6IC0+XG5cbiAgICAgICAgb3V0cHV0ID0gJydcblxuICAgICAgICAjIGNoZWNrIGlmIHRoZSBjdXJyZW50IHVzZXIgY2FuIG1vZGVyYXRlXG4gICAgICAgIHVzZXJfY2FuX21vZGVyYXRlID0gZmFsc2VcbiAgICAgICAgIyBjaGVjayBpZiB0aGUgb3B0aW9ucyBtb2R1bGUgd2FzIGxvYWRlZFxuICAgICAgICBpZiBBcHAuU1NPcHRpb25zP1xuICAgICAgICAgIHVzZXJfY2FuX21vZGVyYXRlID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAnb3B0aW9uJywgJ3VzZXJfY2FuX21vZGVyYXRlJ1xuXG4gICAgICAgIGlmIHVzZXJfY2FuX21vZGVyYXRlXG4gICAgICAgICAgb3V0cHV0ICs9ICc8YSBjbGFzcz1cInNzLXBvc3QtYWN0aW9uIHNzLXB1Ymxpc2gtYnRuXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj48aSBjbGFzcz1cInNzLWljb24tY2hlY2tcIj48L2k+PHNwYW4gY2xhc3M9XCJzcy1pbm5lclwiPlB1Ymxpc2g8L3NwYW4+PC9hPidcbiAgICAgICAgICBvdXRwdXQgKz0gJzxhIGNsYXNzPVwic3MtcG9zdC1hY3Rpb24gc3MtdHJhc2gtYnRuXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj48aSBjbGFzcz1cInNzLWljb24tdHJhc2gtb1wiPjwvaT48c3BhbiBjbGFzcz1cInNzLWlubmVyXCI+VHJhc2g8L3NwYW4+PC9hPidcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHN3aXRjaCBAZ2V0KCdzZXJ2aWNlX25hbWUnKVxuICAgICAgICAgICAgd2hlbiAndHdpdHRlcidcbiAgICAgICAgICAgICAgdmVuZG9yX2lkID0gQGdldCgndmVuZG9yX2lkJylcbiAgICAgICAgICAgICAgb3V0cHV0ICs9ICc8YSBjbGFzcz1cInNzLXBvc3QtYWN0aW9uXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P2luX3JlcGx5X3RvPScgKyB2ZW5kb3JfaWQgKyAnJnZpYT1Tb2NpYWxTdHJlYW1zV1AmcmVsYXRlZD1Tb2NpYWxTdHJlYW1zV1BcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cInNzLWljb24tcmVwbHlcIj48L2k+PHNwYW4gY2xhc3M9XCJzcy1pbm5lclwiPlJlcGx5PC9zcGFuPjwvYT4nXG4gICAgICAgICAgICAgIG91dHB1dCArPSAnPGEgY2xhc3M9XCJzcy1wb3N0LWFjdGlvblwiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC9yZXR3ZWV0P3R3ZWV0X2lkPScgKyB2ZW5kb3JfaWQgKyAnJnJlbGF0ZWQ9U29jaWFsU3RyZWFtc1dQXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJzcy1pY29uLXJldHdlZXRcIj48L2k+PHNwYW4gY2xhc3M9XCJzcy1pbm5lclwiPlJldHdlZXQ8L3NwYW4+PC9hPidcblxuICAgICAgICBvdXRwdXRcblxuXG4gICAgICBzdGF0dXNfaWNvbjogLT5cblxuICAgICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAgICMgY2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBjYW4gbW9kZXJhdGVcbiAgICAgICAgdXNlcl9jYW5fbW9kZXJhdGUgPSBmYWxzZVxuICAgICAgICAjIGNoZWNrIGlmIHRoZSBvcHRpb25zIG1vZHVsZSB3YXMgbG9hZGVkXG4gICAgICAgIGlmIEFwcC5TU09wdGlvbnM/XG4gICAgICAgICAgdXNlcl9jYW5fbW9kZXJhdGUgPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAndXNlcl9jYW5fbW9kZXJhdGUnXG5cbiAgICAgICAgaWYgdXNlcl9jYW5fbW9kZXJhdGVcbiAgICAgICAgICBzd2l0Y2ggQGdldCgnc3RhdHVzJylcbiAgICAgICAgICAgIHdoZW4gJ3B1Ymxpc2gnXG4gICAgICAgICAgICAgIG91dHB1dCArPSAnPGkgY2xhc3M9XCJzcy1pY29uLWNoZWNrXCI+PC9pPidcbiAgICAgICAgICAgIHdoZW4gJ2RyYWZ0J1xuICAgICAgICAgICAgICBvdXRwdXQgKz0gJzxpIGNsYXNzPVwic3MtaWNvbi1idyBidy1kcmFmdC1pY29uXCI+PC9pPidcbiAgICAgICAgICAgIHdoZW4gJ3RyYXNoJ1xuICAgICAgICAgICAgICBvdXRwdXQgKz0gJzxpIGNsYXNzPVwic3MtaWNvbi10cmFzaC1vXCI+PC9pPidcblxuICAgICAgICBvdXRwdXRcblxuXG4gICAgICBkZXZfbWV0YTogLT5cblxuICAgICAgICAjIGNoZWNrIGlmIHRoZSBvcHRpb25zIG1vZHVsZSB3YXMgbG9hZGVkXG4gICAgICAgIGlmIG5vdCBBcHAuU1NPcHRpb25zP1xuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICMgZ2V0IHRoZSBkZXZfbW9kZSBvcHRpb25cbiAgICAgICAgZGV2X21vZGUgPSBBcHAuU1NPcHRpb25zLnJlcXJlcy5yZXF1ZXN0ICdvcHRpb24nLCAnZGV2X21vZGUnXG4gICAgICAgIGlmIG5vdCBkZXZfbW9kZT8gb3Igbm90IGRldl9tb2RlXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgb3V0cHV0ID0gJydcbiAgICAgICAgb3V0cHV0ICs9ICc8cCBjbGFzcz1cInNzLXBvc3QtaWRcIj5pZDogJyArIEBnZXQoJ2lkJykgKyAnPC9wPidcbiAgICAgICAgb3V0cHV0ICs9ICc8cCBjbGFzcz1cInNzLXBvc3Qtb3JkZXJfaWRcIj5vcmRlcl9pZDogJyArIEBnZXQoJ29yZGVyX2lkJykgKyAnPC9wPidcbiAgICAgICAgb3V0cHV0ICs9ICc8cCBjbGFzcz1cInNzLXBvc3QtdmVuZG9yX2lkXCI+dmVuZG9yX2lkOiAnICsgQGdldCgndmVuZG9yX2lkJykgKyAnPC9wPidcbiAgICAgICAgb3V0cHV0ICs9ICc8cCBjbGFzcz1cInNzLXBvc3Qtc2VydmljZV9uYW1lXCI+c2VydmljZV9uYW1lOiAnICsgQGdldCgnc2VydmljZV9uYW1lJykgKyAnPC9wPidcbiAgICAgICAgb3V0cHV0ICs9ICc8cCBjbGFzcz1cInNzLXBvc3QtdGltZXN0YW1wXCI+dGltZXN0YW1wOiAnICsgQGdldCgndGltZXN0YW1wJykgKyAnPC9wPidcbiAgICAgICAgb3V0cHV0ICs9ICc8cCBjbGFzcz1cInNzLXBvc3QtZGF0ZVwiPmRhdGU6ICcgKyBtb21lbnQudW5peCggQGdldCgndGltZXN0YW1wJykgKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKSArICc8L3A+J1xuXG4gICAgICAgIG91dHB1dFxuXG5cbiAgICAjIC9kZWZhdWx0c1xuXG5cblxuICAgIHBhcnNlVXJsczogKHRleHQpIC0+XG5cblxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSAvW0EtWmEtel0rOlxcL1xcL1tBLVphLXowLTktX10rXFwuW0EtWmEtejAtOS1fOiUmXFw/XFwvLj1dKy9nLCAodXJpKSAtPlxuICAgICAgICAnPGEgaHJlZj1cIicgKyB1cmkgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JyArIHVyaSArICc8L2E+J1xuXG4gICAgICB0ZXh0XG5cblxuICAgIHBhcnNlTWVudGlvbnM6ICh0ZXh0KSAtPlxuXG4gICAgICBzd2l0Y2ggQGdldCgnc2VydmljZV9uYW1lJylcbiAgICAgICAgd2hlbiAndHdpdHRlcidcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlIC9bQF0rKFtBLVphLXowLTktX10rKS9nLCAobWF0Y2gsIGhhbmRsZSkgLT5cbiAgICAgICAgICAgICc8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgaGFuZGxlICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPkAnICsgaGFuZGxlICsgJzwvYT4nXG5cbiAgICAgICAgd2hlbiAnaW5zdGFncmFtJ1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UgL1tAXSsoW0EtWmEtejAtOS1fXSspL2csIChtYXRjaCwgaGFuZGxlKSAtPlxuICAgICAgICAgICAgJzxhIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vJyArIGhhbmRsZSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5AJyArIGhhbmRsZSArICc8L2E+J1xuXG4gICAgICB0ZXh0XG5cblxuICAgIHBhcnNlSGFzaHRhZ3M6ICh0ZXh0KSAtPlxuXG4gICAgICBzd2l0Y2ggQGdldCgnc2VydmljZV9uYW1lJylcbiAgICAgICAgd2hlbiAndHdpdHRlcidcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlIC9bXFxzXT9bI10rKFtBLVphLXowLTktX10rKS9nLCAobWF0Y2gsIGhhc2h0YWcpIC0+XG4gICAgICAgICAgICAnIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2hhc2h0YWcvJyArIGhhc2h0YWcgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IycgKyBoYXNodGFnICsgJzwvYT4nXG5cbiAgICAgICAgd2hlbiAnaW5zdGFncmFtJ1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UgL1tcXHNdP1sjXSsoW0EtWmEtejAtOS1fXSspL2csIChtYXRjaCwgaGFzaHRhZykgLT5cbiAgICAgICAgICAgICMgJzxhIGhyZWY9XCJodHRwOi8vc2VhcmNoaW5zdGFncmFtLmNvbS8nICsgaGFzaHRhZyArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4jJyArIGhhc2h0YWcgKyAnPC9hPidcbiAgICAgICAgICAgICcgIycgKyBoYXNodGFnXG5cbiAgICAgIHRleHRcblxuXG4gICAgYWRkTGluZWJyZWFrczogKHRleHQpIC0+XG5cbiAgICAgIHN3aXRjaCBAZ2V0KCdzZXJ2aWNlX25hbWUnKVxuICAgICAgICB3aGVuICd0d2l0dGVyJ1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UgL1xccj9cXG4vZywgJzxiciAvPidcblxuICAgICAgICB3aGVuICdpbnN0YWdyYW0nXG4gICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSAvXFxyP1xcbi9nLCAnICdcblxuICAgICAgdGV4dFxuXG5cblxuICAgIGdldFNhdmVkUG9zdDogPT5cblxuICAgICAgIyByZW1vdmluZyB0aGlzIGZlYXR1cmUgZm9yIG5vd1xuICAgICAgcmV0dXJuIG51bGxcblxuICAgICAgaWYgbm90IEBzYXZlZFBvc3Q/XG5cbiAgICAgICAgIyBjaGVjayBzdGF0dXMgZnJvbSB0aGUgY29sbGVjdGlvbiBvZiBhbGwgc2F2ZWQgcG9zdHNcbiAgICAgICAgYWxsUG9zdHNDb2xsZWN0aW9uID0gU1NQb3N0cy5yZXFyZXMucmVxdWVzdCAnYWxsUG9zdHNDb2xsZWN0aW9uJ1xuICAgICAgICBAc2F2ZWRQb3N0ID0gYWxsUG9zdHNDb2xsZWN0aW9uLmZpbmRXaGVyZVxuICAgICAgICAgIHZlbmRvcl9pZDogQGdldCAndmVuZG9yX2lkJ1xuICAgICAgICAgIHNlcnZpY2VfbmFtZTogQGdldCAnc2VydmljZV9uYW1lJ1xuXG4gICAgICBAc2F2ZWRQb3N0XG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCA9IHJlcXVpcmUgJ2FwcCdcblxuQXBwLm1vZHVsZSAnU1NQb3N0cycsIChTU1Bvc3RzLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIGNsYXNzIFNTUG9zdHMuTW9kZWxzLlBvc3RzTGF5b3V0TW9kZWwgZXh0ZW5kcyBBcHAuTW9kZWxzLkFwaU1vZGVsXG5cbiAgICBkZWZhdWx0czpcblxuICAgICAgd2lkdGg6IG51bGxcblxuICAgICAgbGF5b3V0OiAtPlxuXG4gICAgICAgIHBhcmVudFdpZHRoID0gQGdldCgnd2lkdGgnKVxuXG4gICAgICAgIGlmIG5vdCBwYXJlbnRXaWR0aD9cbiAgICAgICAgICByZXR1cm5cblxuICAgICAgICBsYXlvdXQgPSAnJ1xuXG4gICAgICAgIGlmIHBhcmVudFdpZHRoIDw9IDYwMFxuICAgICAgICAgIGxheW91dCA9ICd4LXNtYWxsJ1xuXG4gICAgICAgIGVsc2UgaWYgcGFyZW50V2lkdGggPiA2MDAgYW5kIHBhcmVudFdpZHRoIDw9IDkwMFxuICAgICAgICAgIGxheW91dCA9ICdzbWFsbCdcblxuICAgICAgICBlbHNlIGlmIHBhcmVudFdpZHRoID4gOTAwIGFuZCBwYXJlbnRXaWR0aCA8PSAxMjUwXG4gICAgICAgICAgbGF5b3V0ID0gJ21lZGl1bSdcblxuICAgICAgICBlbHNlIGlmIHBhcmVudFdpZHRoID4gMTI1MFxuICAgICAgICAgIGxheW91dCA9ICdsYXJnZSdcblxuICAgICAgICAjIGVsc2UgaWYgcGFyZW50V2lkdGggPiAxNTAwXG4gICAgICAgICMgICBsYXlvdXQgPSAneC1sYXJnZSdcblxuICAgICAgICBsYXlvdXRcbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5BcHAubW9kdWxlICdTU1Bvc3RzJywgKFNTUG9zdHMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgU1NQb3N0cy5Db250cm9sbGVycyA9IHt9XG4gIFNTUG9zdHMuTW9kZWxzID0ge31cbiAgU1NQb3N0cy5Db2xsZWN0aW9ucyA9IHt9XG4gIFNTUG9zdHMuVmlld3MgPSB7fVxuICBTU1Bvc3RzLkxheW91dHMgPSB7fVxuICBTU1Bvc3RzLlJvdXRlcnMgPSB7fVxuICBTU1Bvc3RzLlRlbXBsYXRlcyA9IHt9XG5cbiAgU1NQb3N0cy52ZW50ID0gbmV3IEJhY2tib25lLldyZXFyLkV2ZW50QWdncmVnYXRvcigpXG4gIFNTUG9zdHMuY29tbWFuZHMgPSBuZXcgQmFja2JvbmUuV3JlcXIuQ29tbWFuZHMoKVxuICBTU1Bvc3RzLnJlcXJlcyA9IG5ldyBCYWNrYm9uZS5XcmVxci5SZXF1ZXN0UmVzcG9uc2UoKVxuXG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFyc0NvbXBpbGVyID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzQ29tcGlsZXIudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYnVmZmVyID0gXCIgIDxkaXYgY2xhc3M9XFxcInNzLW1ldGFcXFwiPlxcbiAgICBcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5kZXZfbWV0YSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZGV2X21ldGEgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiZGV2X21ldGFcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuICA8L2Rpdj48IS0tIC5zcy1tZXRhIC0tPlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBidWZmZXIgPSBcIiAgPGRpdiBjbGFzcz1cXFwic3MtcG9zdC1tZWRpYVxcXCI+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJzcy1wb3N0LXNvY2lhbC1pY29uXFxcIj48aSBjbGFzcz1cXFwic3MtaWNvbi1cIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnNlcnZpY2VfbmFtZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2VydmljZV9uYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcInNlcnZpY2VfbmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCIgc3Mtd2F0ZXJtYXJrXFxcIj48L2k+PC9zcGFuPlxcblwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGFzX3ZpZGVvIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDQsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSg2LCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIiAgPC9kaXY+PCEtLSAuc3MtcG9zdC1tZWRpYSAtLT5cXG5cIjtcbn0sXCI0XCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBcIiAgICAgIDx2aWRlbyBjbGFzcz1cXFwic3MtcG9zdC12aWRlb1xcXCIgbXV0ZWQgYXV0b3BsYXkgbG9vcCBwb3N0ZXI9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaW1hZ2UgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmltYWdlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImltYWdlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgZGF0YS1pbWFnZT1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbWFnZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaW1hZ2UgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiaW1hZ2VcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBkYXRhLXNyYz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy52aWRlbyB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudmlkZW8gOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidmlkZW9cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiAvPjwhLS0gdmlkZW8uc3MtcG9zdC1pbWFnZSAtLT5cXG5cIjtcbn0sXCI2XCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInNzLXBvc3QtaW1hZ2Utd3JhcHBlclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaW1hZ2UgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmltYWdlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImltYWdlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIik7XFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmltYWdlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pbWFnZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJpbWFnZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJzcy1wb3N0LWltYWdlXFxcIiAvPlxcbiAgICAgIDwvZGl2PjwhLS0gLnNzLXBvc3QtaW1hZ2Utd3JhcHBlciAtLT5cXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGJ1ZmZlciA9IFwiPGRpdiBjbGFzcz1cXFwic3MtcG9zdC1pbm5lclxcXCI+XFxuXFxuICA8c3BhbiBjbGFzcz1cXFwic3MtcG9zdC1zcGFjZXJcXFwiPjwvc3Bhbj5cXG5cXG5cIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmRldl9tZXRhIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIlxcbiAgPGRpdiBjbGFzcz1cXFwic3MtcG9zdC1jb250ZW50XFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInNzLXBvc3Qtc29jaWFsLWljb25cXFwiPjxpIGNsYXNzPVxcXCJzcy1pY29uLVwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuc2VydmljZV9uYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zZXJ2aWNlX25hbWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwic2VydmljZV9uYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+PC9pPjwvc3Bhbj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic3MtcG9zdC1jb250ZW50LWlubmVyXFxcIj5cXG4gICAgICBcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5mb3JtYXR0ZWRfY2FwdGlvbiB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZm9ybWF0dGVkX2NhcHRpb24gOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiZm9ybWF0dGVkX2NhcHRpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiXFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+PCEtLSAuc3MtcG9zdC1jb250ZW50IC0tPlxcblxcblwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGFzX21lZGlhIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDMsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIlxcbiAgPGRpdiBjbGFzcz1cXFwic3MtcG9zdC1hY3Rpb25zXFxcIj5cXG4gICAgXCI7XG4gIHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYWN0aW9ucyB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYWN0aW9ucyA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJhY3Rpb25zXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIlxcbiAgPC9kaXY+PCEtLSAuc3MtcG9zdC1hY3Rpb25zIC0tPlxcblxcbiAgPGRpdiBjbGFzcz1cXFwic3MtcG9zdC1zdGF0dXNcXFwiPlxcbiAgICBcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5zdGF0dXNfaWNvbiB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc3RhdHVzX2ljb24gOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwic3RhdHVzX2ljb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuICA8L2Rpdj48IS0tIC5zcy1wb3N0LXN0YXR1cyAtLT5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcInNzLXBvc3QtZm9vdGVyXFxcIj5cXG4gICAgPGEgaHJlZj1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy51c2VyX2xpbmsgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnVzZXJfbGluayA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ1c2VyX2xpbmtcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwic3MtYXZhdGFyXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+IDxpbWcgc3JjPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmF2YXRhciB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXZhdGFyIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImF2YXRhclwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiLz4gPC9hPlxcbiAgICA8YSBocmVmPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnVzZXJfbGluayB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudXNlcl9saW5rIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcInVzZXJfbGlua1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJzcy1oYW5kbGVcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5AXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5zY3JlZW5fbmFtZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc2NyZWVuX25hbWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwic2NyZWVuX25hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9hPlxcbiAgICA8YSBocmVmPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnBlcm1hbGluayB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGVybWFsaW5rIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcInBlcm1hbGlua1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJzcy1wb3N0LXRpbWVcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5cXG4gICAgICA8c3BhbiBkYXRhLWxpdmVzdGFtcD1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aW1lc3RhbXAgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRpbWVzdGFtcCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ0aW1lc3RhbXBcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj48L3NwYW4+XFxuICAgIDwvYT5cXG4gIDwvZGl2PjwhLS0gLnNzLXBvc3QtZm9vdGVyIC0tPlxcblxcbjwvZGl2PjwhLS0gLnNzLXBvc3QtaW5uZXIgLS0+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzQ29tcGlsZXIgPSByZXF1aXJlKCdoYnNmeS9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnNDb21waWxlci50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiXFxuPGRpdiBjbGFzcz1cXFwic3MtcG9zdHNcXFwiPjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcInNzLWluZmluaXRlLXNjcm9sbC1sb2FkZXJcXFwiPjxkaXYgY2xhc3M9XFxcInNzLWlubmVyLXRleHRcXFwiPk5vIG1vcmUgY29udGVudCB0byBsb2FkLjwvZGl2PjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcInNzLWZvb3RlclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJzcy1jcmVkaXRzXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInNzLXBvd2VyZWQtYnlcXFwiPlBvd2VyZWQgYnk8L3NwYW4+XFxuICAgIDxhIGhyZWY9XFxcImh0dHA6Ly9zb2NpYWxzdHJlYW1zLmNvbVxcXCIgY2xhc3M9XFxcInNzLWZvb3Rlci1sb2dvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzcy1mb290ZXItbG9nby10ZXh0XFxcIj5Tb2NpYWwgU3RyZWFtczwvc3Bhbj5cXG4gICAgPC9hPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuXCI7XG4gIH0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbkFwcCAgICAgICA9IHJlcXVpcmUgJ2FwcCdcbk1vZGVybml6ciA9IHJlcXVpcmUgJ21vZGVybml6cidcbmFsZXJ0aWZ5ICA9IHJlcXVpcmUgJ2FsZXJ0aWZ5J1xuXG5BcHAubW9kdWxlICdTU1Bvc3RzJywgKFNTUG9zdHMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgY2xhc3MgU1NQb3N0cy5WaWV3cy5Qb3N0SXRlbVZpZXcgZXh0ZW5kcyBBcHAuVmlld3MuQmFzZUl0ZW1WaWV3XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4uL1RlbXBsYXRlcy9Qb3N0SXRlbVZpZXdUZW1wbGF0ZScpXG5cbiAgICBpbml0aWFsaXplOiA9PlxuXG4gICAgICBAbGlzdGVuVG8gQG1vZGVsLCAnY2hhbmdlOnN0YXR1cycsIEBvblN0YXR1c0NoYW5nZVxuXG4gICAgY2xhc3NOYW1lOiA9PlxuXG4gICAgICAjIHNldCBjbGFzcyBiYXNlZCBvbiBjaGlsZCBpbmRleFxuICAgICAgY2xhc3NlcyA9IFsnc3MtcG9zdCddXG5cbiAgICAgICMgY2hlY2sgaWYgdGhlIG9wdGlvbnMgbW9kdWxlIHdhcyBsb2FkZWRcbiAgICAgIGlmIEFwcC5TU09wdGlvbnM/XG4gICAgICAgIHNzT3B0aW9ucyA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbnMnXG5cbiAgICAgICAgaWYgc3NPcHRpb25zLmdldCgnZGV2X21vZGUnKVxuICAgICAgICAgIGNsYXNzZXMucHVzaCAnc3MtZGV2J1xuXG4gICAgICBpZiBAbW9kZWwuZ2V0KCdoYXNfbWVkaWEnKVxuICAgICAgICBjbGFzc2VzLnB1c2ggJ3NzLWhhcy1tZWRpYSdcblxuICAgICAgaWYgQG1vZGVsLmdldCgnaGFzX3ZpZGVvJylcbiAgICAgICAgY2xhc3Nlcy5wdXNoICdzcy1oYXMtdmlkZW8nXG5cbiAgICAgIGlmIEBtb2RlbC5nZXQoJ2R1cGxpY2F0ZScpXG4gICAgICAgIGNsYXNzZXMucHVzaCAnc3MtZHVwbGljYXRlJ1xuXG4gICAgICAjIHNlcnZpY2UgY2xhc3NcbiAgICAgIGNsYXNzZXMucHVzaCAnc3MtJyArIEBtb2RlbC5nZXQoJ3NlcnZpY2VfbmFtZScpXG5cbiAgICAgICMgc3RhdHVzIGNsYXNzXG4gICAgICBjbGFzc2VzLnB1c2ggJ3NzLXN0YXR1cy0nICsgQG1vZGVsLmdldCgnc3RhdHVzJylcblxuICAgICAgY2xhc3Nlcy5qb2luICcgJ1xuXG5cbiAgICBhdHRyaWJ1dGVzOiA9PlxuICAgICAgJ2RhdGEtaWQnOiBAbW9kZWwuZ2V0ICdvcmRlcl9pZCdcblxuICAgIG9uUmVuZGVyOiA9PlxuXG4gICAgICAjaWYgdmlkZW9cbiAgICAgIGlmIEBtb2RlbC5nZXQoJ2hhc192aWRlbycpP1xuXG4gICAgICAgICMgTXV0ZSB2aWRlb1xuICAgICAgICBAJCgndmlkZW8nKS5wcm9wICdtdXRlZCcsIHRydWVcblxuXG4gICAgICAjIGNoZWNrIGlmIGl0IGlzIG1vYmlsZSBvciB0YWJsZXRcbiAgICAgIGlmIE1vZGVybml6ci50b3VjaGV2ZW50cz8gYW5kIE1vZGVybml6ci50b3VjaGV2ZW50cyBpcyB0cnVlXG5cbiAgICAgICAgIyBiaW5kIHRoZSBjbGljayBldmVudCB0byB0aGUgYSB0YWcgc28gaU9TIGNhbiBmaXJlIHRoZSBjbGljayBldmVudFxuICAgICAgICBAJGVsLm9uICdjbGljaycsICdhJywgQG9uQ2xpY2tBbmNob3JcblxuICAgICAgICAjIGJpbmQgdGhlIGVsZW1lbnQgd2l0aCB0YXBweVxuICAgICAgICBAJGVsLm9uICd0YXAnLCBAb25UYXBcblxuICAgICAgZWxzZVxuICAgICAgICAjaWYgdmlkZW9cbiAgICAgICAgaWYgQG1vZGVsLmdldCgnaGFzX3ZpZGVvJyk/XG4gICAgICAgICAgIyBzZXQgdmlkZW8gc3JjXG4gICAgICAgICAgQCQoJ3ZpZGVvJykuYXR0ciBcInNyY1wiLCBAJCgndmlkZW8nKS5kYXRhKFwic3JjXCIpXG5cbiAgICAgICAgIyBkbyB0aGUgZGVza3RvcCBldmVudHNcbiAgICAgICAgQCRlbC5vbiAnbW91c2VlbnRlciBtb3VzZWxlYXZlJywgJy5zcy1wb3N0LWlubmVyJywgQG9uTW91c2VvdmVyXG4gICAgICAgIEAkZWwub24gJ2NsaWNrJywgJy5zcy1wdWJsaXNoLWJ0biwgLnNzLXRyYXNoLWJ0bicsIEBvbkNsaWNrVG9nZ2xlU3RhdHVzXG5cblxuICAgIG9uQ2xpY2tBbmNob3I6ICggZXZlbnQgKSA9PlxuXG4gICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgJHRhcmdldC5hZGRDbGFzcyggJ2NsaWNrLWZpcmVkJyApXG5cbiAgICAgICMgY2hlY2sgaWYgdGhlIGEgdGFnIGhhcyB0aGUgcHVibGlzaCBvciB0cmFzaCBjbGFzc2VzXG4gICAgICAjIGlmIGl0IGRvZXMsIHRyaWdnZXIgdGhlIHN0YXR1cyBjaGFuZ2UgZnVuY3Rpb25cbiAgICAgIGlmICR0YXJnZXQuaGFzQ2xhc3MoICdzcy1wdWJsaXNoLWJ0bicgKSBvciAkdGFyZ2V0Lmhhc0NsYXNzKCAnc3MtdHJhc2gtYnRuJyApXG4gICAgICAgIEBvbkNsaWNrVG9nZ2xlU3RhdHVzKGV2ZW50KVxuICAgICAgICByZXR1cm5cblxuICAgICAgIyB0cmlnZ2VyIHRoZSBhIHRhZyBmb3IgdGhlIGxpbmtzIGluc2lkZSB0aGUgcG9zdCBtYW51YWxseVxuICAgICAgaHJlZiA9ICR0YXJnZXQuYXR0ciggJ2hyZWYnIClcblxuICAgICAgdGFyZ2V0QXR0ciA9ICR0YXJnZXQuYXR0ciggJ3RhcmdldCcgKVxuICAgICAgaWYgbm90IHRhcmdldEF0dHI/XG4gICAgICAgIHRhcmdldEF0dHIgPSAnJ1xuXG4gICAgICAjIG9wZW4gdGhlIGxpbmsgaW4gYSBuZXcgdGFiXG4gICAgICB3aW5kb3cub3BlbiBocmVmLCB0YXJnZXRBdHRyXG5cbiAgICBvblRhcDogKCBldmVudCApID0+XG5cbiAgICAgICR0YXJnZXQgPSAkKCBldmVudC50YXJnZXQgKVxuICAgICAgJGN1cnJlbnRUYXJnZXQgPSAkKCBldmVudC5jdXJyZW50VGFyZ2V0IClcblxuICAgICAgIyBjaGVjayBpZiB0aGUgdGFyZ2V0IGlzIGFuIGEgdGFnIG9yIGlmIHRoZSBwYXJlbnQgaXMgYW4gYSB0YWdcbiAgICAgIGlmICR0YXJnZXQuaXMoICdhJyApIG9yICR0YXJnZXQucGFyZW50cyggJ2EnICkubGVuZ3RoID4gMFxuXG4gICAgICAgIHNldFRpbWVvdXQgLT5cblxuICAgICAgICAgICMgYmVmb3JlIGdvaW5nIGluc2lkZSB0aGUgc2V0dGltZW91dCBmdW5jdGlvbiwgaXQgd2lsbCBmaXJzdCB0cmlnZ2VyIGEgY2xpY2sgZXZlbnQgZm9yIHRoZSBhIHRhZ1xuICAgICAgICAgICMgd2hpY2ggYWRkcyB0aGUgJ2NsaWNrLWZpcmVkJyBjbGFzc1xuICAgICAgICAgICMgc28gd2UgY2hlY2sgaWYgdGhlIGEgdGFnIGhhcyB0aGF0IGNsYXNzIGFuZCBtYW51YWxseSB0cmlnZ2VyIHRoZSBjbGljayBldmVudFxuICAgICAgICAgIGlmIG5vdCAkdGFyZ2V0Lmhhc0NsYXNzKCAnY2xpY2stZmlyZWQnIClcbiAgICAgICAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3MoICdjbGljay1maXJlZCcgKS5jbGljaygpXG4gICAgICAgICwgMFxuXG4gICAgICAgIHJldHVyblxuXG4gICAgICAjIGNoZWNrIGlmIHdlIGhhdmUgdGhlIHRhcCBjbGFzcyBpbiB0aGUgY3VycmVudCB0YXJnZXRcbiAgICAgIGhhc1RhcENsYXNzID0gJGN1cnJlbnRUYXJnZXQuaGFzQ2xhc3MoICd0YXAnIClcbiAgICAgICQoICcuc3MtcG9zdC50YXAnICkucmVtb3ZlQ2xhc3MoICd0YXAnIClcbiAgICAgICRjdXJyZW50VGFyZ2V0LnRvZ2dsZUNsYXNzICd0YXAnLCBub3QgaGFzVGFwQ2xhc3NcblxuICAgIG9uQ2xpY2tUb2dnbGVTdGF0dXM6IChldmVudCkgPT5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAjIFNldCBkZWZhdWx0IHN0YXR1c1xuICAgICAgc3RhdHVzID0gJ3B1Ymxpc2gnXG4gICAgICBpZiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdzcy10cmFzaC1idG4nKVxuICAgICAgICBzdGF0dXMgPSAndHJhc2gnXG5cbiAgICAgIGN1cnJlbnRTdGF0dXMgPSBAbW9kZWwuZ2V0KCdzdGF0dXMnKVxuXG4gICAgICBpZiBjdXJyZW50U3RhdHVzIGlzIHN0YXR1c1xuXG4gICAgICAgIEBtb2RlbC5zZXRcbiAgICAgICAgICBzdGF0dXM6ICcnXG4gICAgICAgICxcbiAgICAgICAgICBzaWxlbnQ6IHRydWVcblxuICAgICAgICBAbW9kZWwuc2V0XG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXNcblxuICAgICAgZWxzZVxuXG4gICAgICAgIEBtb2RlbC5zYXZlXG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXNcblxuXG4gICAgb25Nb3VzZW92ZXI6IChldmVudCkgPT5cblxuICAgICAgaG92ZXIgPSBmYWxzZVxuICAgICAgaWYgZXZlbnQudHlwZSA9PSAnbW91c2VlbnRlcicgb3IgZXZlbnQudHlwZSA9PSAndGFwJ1xuICAgICAgICBob3ZlciA9IHRydWVcblxuICAgICAgQHRvZ2dsZUVsIEAkKCcuc3MtcG9zdC1tZWRpYScpLCBub3QgaG92ZXJcbiAgICAgIEB0b2dnbGVFbCBAJCgnLnNzLXBvc3QtYWN0aW9ucycpLCBob3ZlclxuXG4gICAgICBAJGVsLnRvZ2dsZUNsYXNzICdzcy1ob3ZlcicsIGhvdmVyXG5cbiAgICAgICMgY2hlY2sgaWYgaXQgaXMgbW9iaWxlIG9yIHRhYmxldFxuICAgICAgaWYgTW9kZXJuaXpyLnRvdWNoZXZlbnRzPyBhbmQgTW9kZXJuaXpyLnRvdWNoZXZlbnRzIGlzIHRydWVcbiAgICAgICAgQCRlbC5wYXJlbnQoKS50b2dnbGVDbGFzcyAndGFwJywgaG92ZXJcblxuXG4gICAgdG9nZ2xlRWw6ICgkZWwsIHRvZ2dsZSkgLT5cblxuICAgICAgY3NzU3RhcnQgPSB7fVxuICAgICAgYW5pbWF0ZSA9IHt9XG4gICAgICBjc3NFbmQgPSB7fVxuXG4gICAgICAjIGZhZGUgaW4vb3V0IGltYWdlXG4gICAgICBpZiB0b2dnbGVcblxuICAgICAgICBjc3NTdGFydCA9XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgIG9wYWNpdHk6IDBcblxuICAgICAgICBhbmltYXRlID1cbiAgICAgICAgICBvcGFjaXR5OiAxXG5cbiAgICAgIGVsc2VcblxuICAgICAgICBjc3NTdGFydCA9XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuXG4gICAgICAgIGFuaW1hdGUgPVxuICAgICAgICAgIG9wYWNpdHk6IDBcblxuICAgICAgICBjc3NFbmQgPVxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuXG4gICAgICAkZWxcbiAgICAgICAgLnN0b3AoMCwwKVxuICAgICAgICAuY3NzKCBjc3NTdGFydCApXG4gICAgICAgIC5hbmltYXRlIGFuaW1hdGUsIDIwMCwgLT5cbiAgICAgICAgICAkZWwuY3NzKCBjc3NFbmQgKVxuXG5cblxuICAgIG9uU3RhdHVzQ2hhbmdlOiAobW9kZWwsIHN0YXR1cykgPT5cblxuICAgICAgIyBnZXQgcHJldmlvdXMgc3RhdHVzXG4gICAgICBwcmV2U3RhdHVzID0gJ3B1Ymxpc2gnXG4gICAgICBpZiBAJGVsLmhhc0NsYXNzKCdzcy1zdGF0dXMtZHJhZnQnKVxuICAgICAgICBwcmV2U3RhdHVzID0gJ2RyYWZ0J1xuICAgICAgaWYgQCRlbC5oYXNDbGFzcygnc3Mtc3RhdHVzLXRyYXNoJylcbiAgICAgICAgcHJldlN0YXR1cyA9ICd0cmFzaCdcblxuICAgICAgZG9pbmdCYXRjaFNhdmUgPSBTU1Bvc3RzLnJlcXJlcy5yZXF1ZXN0ICdkb2luZ0JhdGNoU2F2ZSdcbiAgICAgIHVzZXJNZXRhID0gQXBwLlNTT3B0aW9ucy5yZXFyZXMucmVxdWVzdCAndXNlck1ldGEnXG5cbiAgICAgIG1lc3NhZ2UgPSAnJ1xuXG4gICAgICBzd2l0Y2ggcHJldlN0YXR1cyArICctJyArIHN0YXR1c1xuXG4gICAgICAgIHdoZW4gJ3B1Ymxpc2gtcHVibGlzaCdcblxuICAgICAgICAgIGlmIG5vdCBkb2luZ0JhdGNoU2F2ZVxuICAgICAgICAgICAgbW9kZXJhdGlvbiA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbicsICdtb2RlcmF0aW9uJ1xuICAgICAgICAgICAgaWYgbm90IG1vZGVyYXRpb25cbiAgICAgICAgICAgICAgaWYgbm90IHVzZXJNZXRhLmdldCgncHVibGlzaFBvcHVwJylcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCI8aDE+PGkgY2xhc3M9J3NzLWljb24tY2hlY2snPjwvaT48L2gxPjxoMz5UaGlzIHBvc3QgaXMgYWxyZWFkeSBhcHByb3ZlZC48L2gzPiA8YnIgLz4gVG8gdHVybiBBdXRvLUFwcHJvdmUgPHN0cm9uZz5PRkY8L3N0cm9uZz4gc2VlIHRoZSA8aT5hZHZhbmNlZCBzZXR0aW5nczwvaT4gPGkgY2xhc3M9J3NzLWljb24tY29nJz48L2k+XCJcbiAgICAgICAgICAgICAgICB1c2VyTWV0YS5zYXZlXG4gICAgICAgICAgICAgICAgICBwdWJsaXNoUG9wdXA6IHRydWVcblxuICAgICAgICB3aGVuICdwdWJsaXNoLXRyYXNoJywgJ2RyYWZ0LXRyYXNoJ1xuXG4gICAgICAgICAgaWYgbm90IGRvaW5nQmF0Y2hTYXZlIGFuZCBub3QgdXNlck1ldGEuZ2V0KCd0cmFzaFBvcHVwJylcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIjxoMT48aSBjbGFzcz0nc3MtaWNvbi10cmFzaC1vJz48L2k+PC9oMT48aDM+VGhpcyBwb3N0IGlzIHRyYXNoZWQhPC9oMz4gPGJyIC8+IDxoMz5UbyByZXNjdWUgdGhpcyBwb3N0IGNsaWNrIDxpPlZpZXcgVHJhc2g8L2k+IDxpIGNsYXNzPSdzcy1pY29uLXRyYXNoLW8nPjwvaT48L2gzPiA8YnIvPiBZb3Ugd2lsbCBub3Qgc2VlIHRoaXMgbWVzc2FnZSBhZ2Fpbi5cIlxuICAgICAgICAgICAgdXNlck1ldGEuc2F2ZVxuICAgICAgICAgICAgICB0cmFzaFBvcHVwOiB0cnVlXG5cbiAgICAgICAgICAjIHJlbW92ZSBpdGVtIGZyb20gbGlzdCAoZG8gYW5pbWF0aW9uKVxuICAgICAgICAgIEAkZWwuYWRkQ2xhc3MgJ3NzLXRyYXNoaW5nJ1xuXG4gICAgICAgICAgQCRlbC5mYWRlT3V0IDUwMCwgPT5cbiAgICAgICAgICAgIEByZW1vdmUoKVxuXG5cbiAgICAgICAgd2hlbiAnZHJhZnQtcHVibGlzaCdcblxuICAgICAgICAgIEByZW5kZXIoKVxuICAgICAgICAgIEAkZWwuYXR0cignY2xhc3MnLCBfLnJlc3VsdChALCAnY2xhc3NOYW1lJykpXG5cbiAgICAgICAgICBAJGVsLmFkZENsYXNzICdzcy1wdWJsaXNoaW5nJ1xuICAgICAgICAgIEAkKCcuc3MtcG9zdC1zcGFjZXInKS5mYWRlT3V0IDUwMCwgPT5cbiAgICAgICAgICAgIEAkZWwucmVtb3ZlQ2xhc3MgJ3NzLXB1Ymxpc2hpbmcnXG4gICAgICAgICAgICBAJCgnLnNzLXBvc3Qtc3BhY2VyJykuc2hvdygpXG5cblxuICAgICAgICB3aGVuICd0cmFzaC1wdWJsaXNoJ1xuXG4gICAgICAgICAgIyByZW1vdmUgaXRlbSBmcm9tIGxpc3QgKGRvIGFuaW1hdGlvbilcbiAgICAgICAgICBAJGVsLmFkZENsYXNzICdzcy1wdWJsaXNoaW5nJ1xuICAgICAgICAgIEAkZWwuZmFkZU91dCA1MDAsID0+XG4gICAgICAgICAgICBAcmVtb3ZlKClcblxuICAgICAgICB3aGVuICd0cmFzaC10cmFzaCdcblxuICAgICAgICAgICMgZG8gbm90aGluZ1xuXG4gICAgICAgIGVsc2VcblxuICAgICAgICAgIEByZW5kZXIoKVxuICAgICAgICAgIEAkZWwuYXR0cignY2xhc3MnLCBfLnJlc3VsdChALCAnY2xhc3NOYW1lJykpXG5cblxuICAgICAgIyBJRiBNT0RFTCBJUyBQVUJMSVNIIE9SIFRSQVNIIEFMRVJUIChub3QgZHJhZnQpXG4gICAgICBpZiBtZXNzYWdlIGlzbnQgJycgYW5kIGFsZXJ0aWZ5P1xuICAgICAgICBhbGVydGlmeS5hbGVydCAnJywgbWVzc2FnZVxuXG4iLCIndXNlIHN0cmljdCdcblxuQXBwID0gcmVxdWlyZSAnYXBwJ1xuXG5yZXF1aXJlICcuL1Bvc3RJdGVtVmlldydcblxuQXBwLm1vZHVsZSAnU1NQb3N0cycsIChTU1Bvc3RzLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gIGNsYXNzIFNTUG9zdHMuVmlld3MuUG9zdHNDb21wb3NpdGVWaWV3IGV4dGVuZHMgQXBwLlZpZXdzLkluZmluaXRlU2Nyb2xsQ29tcG9zaXRlVmlld1xuXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uL1RlbXBsYXRlcy9Qb3N0c0NvbXBvc2l0ZVZpZXdUZW1wbGF0ZSdcblxuICAgIGNsYXNzTmFtZTogLT5cbiAgICAgIGNsYXNzTmFtZSA9ICdzcy13cmFwcGVyJ1xuXG4gICAgICAjIGFkZCBjbGFzcyBpZiB0aGUgcG9zdHMgYXJlIGNvbWluZyBmcm9tIHRoZSBCVyBBUElcbiAgICAgIGlmIEBjb2xsZWN0aW9uPyBhbmQgQGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBTU1Bvc3RzLkNvbGxlY3Rpb25zLkFwaVBvc3RzQ29sbGVjdGlvblxuICAgICAgICBjbGFzc05hbWUgKz0gJyBzcy1hcGktcG9zdHMnXG5cbiAgICAgICMgY2hlY2sgaWYgdGhlIG9wdGlvbnMgbW9kdWxlIHdhcyBsb2FkZWRcbiAgICAgIGlmIEFwcC5TU09wdGlvbnM/XG4gICAgICAgIHNzT3B0aW9ucyA9IEFwcC5TU09wdGlvbnMucmVxcmVzLnJlcXVlc3QgJ29wdGlvbnMnXG5cbiAgICAgICAgaWYgc3NPcHRpb25zLmdldCgndXNlcl9jYW5fbW9kZXJhdGUnKVxuICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHNzLW1vZGVyYXRpb24nXG5cbiAgICAgICAgaWYgc3NPcHRpb25zLmdldCgnaXNfYWRtaW4nKVxuICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHNzLWlzLWFkbWluJ1xuXG4gICAgICBjbGFzc05hbWVcblxuXG4gICAgaXRlbVZpZXdDb250YWluZXI6ICcuc3MtcG9zdHMnXG5cbiAgICBpdGVtVmlldzogU1NQb3N0cy5WaWV3cy5Qb3N0SXRlbVZpZXdcblxuICAgIHNjcm9sbENvbnRhaW5lcjogJ3dpbmRvdydcblxuXG4gICAgX2dldENoaWxkVmlld0VsRnJvbU1vZGVsOiAobW9kZWwpID0+XG5cbiAgICAgIEAkKEBpdGVtVmlld0NvbnRhaW5lcikuZmluZCgnW2RhdGEtaWQ9XCInICsgbW9kZWwuZ2V0KCdvcmRlcl9pZCcpICsgJ1wiXScpXG5cblxuICAgIGluaXRpYWxpemU6ID0+XG5cbiAgICAgICMjI1xuICAgICAgTGlzdGVuIGZvciB3aWR0aCBjaGFuZ2VzIHRvIHJlc2V0IHRoZSBudW1iZXIgb2YgY29sdW1uc1xuICAgICAgIyMjXG4gICAgICBAbGlzdGVuVG8gQXBwLkhlbHBlcnMuZW52LCAnY2hhbmdlOndpZHRoJywgQG9uQ2hhbmdlRW52V2lkdGhcbiAgICAgIEBsaXN0ZW5UbyBAbW9kZWwsICdjaGFuZ2U6d2lkdGgnLCBAb25DaGFuZ2VXaWR0aFxuXG4gICAgICAjIGNhbGwgdGhlIHBhcmVudCdzIGNvbnN0cnVjdG9yXG4gICAgICBTU1Bvc3RzLlZpZXdzLlBvc3RzQ29tcG9zaXRlVmlldy5fX3N1cGVyX18uaW5pdGlhbGl6ZS5hcHBseSBALCBhcmd1bWVudHNcblxuXG4gICAgb25SZW5kZXI6ID0+XG4gICAgICBAb25DaGFuZ2VFbnZXaWR0aCgpXG4gICAgICBAJGVsLmF0dHIgJ2NsYXNzJywgXy5yZXN1bHQoQCwgJ2NsYXNzTmFtZScpXG5cbiAgICAgIFNTUG9zdHMuVmlld3MuUG9zdHNDb21wb3NpdGVWaWV3Ll9fc3VwZXJfXy5vblJlbmRlci5hcHBseSBALCBhcmd1bWVudHNcblxuXG4gICAgb25DaGFuZ2VFbnZXaWR0aDogPT5cbiAgICAgICMgY29uc29sZS5sb2cgJ29uQ2hhbmdlRW52V2lkdGgnXG5cbiAgICAgIHBhcmVudFdpZHRoID0gbnVsbFxuICAgICAgaWYgQCRlbD8gYW5kIEAkZWwucGFyZW50KCkubGVuZ3RoID4gMFxuICAgICAgICBwYXJlbnRXaWR0aCA9IEAkZWwucGFyZW50KCkud2lkdGgoKVxuXG4gICAgICBpZiBub3QgcGFyZW50V2lkdGg/IG9yIHBhcmVudFdpZHRoIGlzIDBcbiAgICAgICAgc2V0VGltZW91dCBAb25DaGFuZ2VFbnZXaWR0aCwgMjAwXG4gICAgICAgIHJldHVyblxuXG4gICAgICAjIGlmIHRoZSB3aWR0aCBpcyBzZXQsIHByb2NlZGUgd2l0aCB0aGUgbGF5b3V0IGNoZWNrc1xuICAgICAgQG1vZGVsLnNldCAnd2lkdGgnLCBwYXJlbnRXaWR0aFxuXG5cbiAgICBvbkNoYW5nZVdpZHRoOiA9PlxuXG4gICAgICBsYXlvdXQgPSBAbW9kZWwuZ2V0KCdsYXlvdXQnKVxuXG4gICAgICAjIGNvbnNvbGUubG9nICdvbkNoYW5nZVdpZHRoJywgbGF5b3V0XG5cbiAgICAgIGlmIG5vdCBsYXlvdXQ/XG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiBub3QgQGN1cnJlbnRMYXlvdXQ/XG4gICAgICAgIEBjdXJyZW50TGF5b3V0ID0gJydcblxuICAgICAgaWYgbGF5b3V0IGlzIEBjdXJyZW50TGF5b3V0XG4gICAgICAgIHJldHVyblxuXG4gICAgICBAY3VycmVudExheW91dCA9IGxheW91dFxuXG4gICAgICAjIHNldCBkYXRhIGxheW91dFxuICAgICAgQCRlbC5hdHRyICdkYXRhLWxheW91dCcsIGxheW91dFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbnJlcXVpcmUgJy4vU1NQb3N0cydcblxuIyBNb2RlbHNcbnJlcXVpcmUgJy4vTW9kZWxzL1Bvc3RNb2RlbCdcbnJlcXVpcmUgJy4vTW9kZWxzL1Bvc3RzTGF5b3V0TW9kZWwnXG5cbiMgQ29sbGVjdGlvbnNcbnJlcXVpcmUgJy4vQ29sbGVjdGlvbnMvUG9zdHNDb2xsZWN0aW9uJ1xucmVxdWlyZSAnLi9Db2xsZWN0aW9ucy9BcGlQb3N0c0NvbGxlY3Rpb24nXG5cbiMgVmlld3NcbnJlcXVpcmUgJy4vVmlld3MvUG9zdEl0ZW1WaWV3J1xucmVxdWlyZSAnLi9WaWV3cy9Qb3N0c0NvbXBvc2l0ZVZpZXcnXG5cbiMgQ29udHJvbGxlcnNcbnJlcXVpcmUgJy4vQ29udHJvbGxlcnMvUG9zdHNDb250cm9sbGVyJ1xucmVxdWlyZSAnLi9Db250cm9sbGVycy9BdXRvUmVsb2FkQ29udHJvbGxlcidcblxuXG5BcHAubW9kdWxlICdTU1Bvc3RzJywgKFNTUG9zdHMsIEFwcCwgQmFja2JvbmUsIE1hcmlvbmV0dGUsICQsIF8pIC0+XG5cbiAgU1NQb3N0cy5hZGRJbml0aWFsaXplciAtPlxuXG4gICAgcG9zdHNDb250cm9sbGVyID0gbmV3IFNTUG9zdHMuQ29udHJvbGxlcnMuUG9zdHNDb250cm9sbGVyKClcbiAgICBhdXRvUmVsb2FkQ29udHJvbGxlciA9IG5ldyBTU1Bvc3RzLkNvbnRyb2xsZXJzLkF1dG9SZWxvYWRDb250cm9sbGVyKClcblxuICAgICMjI1xuICAgIERlZmluZSBNb2R1bGUgQVBJXG4gICAgIyMjXG4gICAgU1NQb3N0cy5yZXFyZXMuc2V0SGFuZGxlciAncG9zdHNDb2xsZWN0aW9uJywgcG9zdHNDb250cm9sbGVyLmdldFBvc3RzQ29sbGVjdGlvblxuICAgIFNTUG9zdHMucmVxcmVzLnNldEhhbmRsZXIgJ2FwaVBvc3RzQ29sbGVjdGlvbicsIHBvc3RzQ29udHJvbGxlci5nZXRBcGlQb3N0c0NvbGxlY3Rpb25cbiAgICBTU1Bvc3RzLnJlcXJlcy5zZXRIYW5kbGVyICdwb3N0c0NvbXBvc2l0ZVZpZXcnLCBwb3N0c0NvbnRyb2xsZXIuZ2V0UG9zdHNDb21wb3NpdGVWaWV3XG4gICAgU1NQb3N0cy5yZXFyZXMuc2V0SGFuZGxlciAnYWxsUG9zdHNDb2xsZWN0aW9uJywgcG9zdHNDb250cm9sbGVyLmdldEFsbFBvc3RzQ29sbGVjdGlvblxuXG4gICAgU1NQb3N0cy5yZXFyZXMuc2V0SGFuZGxlciAnZG9pbmdCYXRjaFNhdmUnLCBwb3N0c0NvbnRyb2xsZXIuZG9pbmdCYXRjaFNhdmVcbiAgICBTU1Bvc3RzLmNvbW1hbmRzLnNldEhhbmRsZXIgJ2RvaW5nQmF0Y2hTYXZlJywgcG9zdHNDb250cm9sbGVyLmRvaW5nQmF0Y2hTYXZlXG4gICAgU1NQb3N0cy5jb21tYW5kcy5zZXRIYW5kbGVyICdmZXRjaFNlcnZlclBvc3RzJywgcG9zdHNDb250cm9sbGVyLmZldGNoU2VydmVyUG9zdHNcbiAgICBTU1Bvc3RzLmNvbW1hbmRzLnNldEhhbmRsZXIgJ2ZldGNoQXBpUG9zdHMnLCBwb3N0c0NvbnRyb2xsZXIuZmV0Y2hBcGlQb3N0c1xuICAgIFNTUG9zdHMuY29tbWFuZHMuc2V0SGFuZGxlciAncHVibGlzaEFwaVBvc3RzJywgcG9zdHNDb250cm9sbGVyLnB1Ymxpc2hBcGlQb3N0c1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuQXBwICAgICAgICA9IHJlcXVpcmUgXCJhcHBcIlxuSGFuZGxlYmFycyA9IHJlcXVpcmUgXCJoYnNmeS9ydW50aW1lXCJcblxuXG5IYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyICd0b1RpdGxlQ2FzZScsIChzdHIpIC0+XG4gIHN0ci5yZXBsYWNlIC9cXHdcXFMqL2csICh0eHQpIC0+XG4gICAgdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCAgICAgID0gcmVxdWlyZSBcImFwcFwiXG5CYWNrYm9uZSA9IHJlcXVpcmUgXCJiYWNrYm9uZVwiXG4kICAgICAgICA9IHJlcXVpcmUgXCJqcXVlcnlcIlxuXG5jbGFzcyBBcHAuVmlld3MuQmFzZUNvbXBvc2l0ZVZpZXcgZXh0ZW5kcyBCYWNrYm9uZS5NYXJpb25ldHRlLkNvbXBvc2l0ZVZpZXdcblxuICByZW5kZXJGcm9tRE9NOiAoZWwpID0+XG5cbiAgICBpZiBub3QgZWw/XG4gICAgICByZXR1cm4gQFxuXG4gICAgIyBhc3NpZ24gZG9tIGVsZW1lbnQgdG8gdmlld1xuICAgIGlmIGVsIGluc3RhbmNlb2YgJFxuICAgICAgaWYgZWwubGVuZ3RoID4gMFxuICAgICAgICBAZWwgPSBlbFswXVxuICAgIGVsc2VcbiAgICAgIEBlbCA9IGVsXG5cbiAgICBpZiBub3QgQGVsP1xuICAgICAgcmV0dXJuIEBcblxuICAgIEAkZWwgPSAkKGVsKVxuXG4gICAgQGlzUmVuZGVyZWQgPSB0cnVlXG4gICAgQGlzQ2xvc2VkID0gZmFsc2VcbiAgICBAcmVzZXRJdGVtVmlld0NvbnRhaW5lcigpXG5cbiAgICBAdHJpZ2dlckJlZm9yZVJlbmRlcigpXG5cbiAgICBAYmluZFVJRWxlbWVudHMoKVxuICAgIEB0cmlnZ2VyTWV0aG9kKFwiY29tcG9zaXRlOm1vZGVsOnJlbmRlcmVkXCIpXG5cbiAgICBAX3JlbmRlckNoaWxkcmVuRnJvbURPTSgpXG5cbiAgICBAdHJpZ2dlck1ldGhvZChcImNvbXBvc2l0ZTpyZW5kZXJlZFwiKVxuICAgIEB0cmlnZ2VyUmVuZGVyZWQoKVxuXG4gICAgQFxuXG5cblxuICBfcmVuZGVyQ2hpbGRyZW5Gcm9tRE9NOiA9PlxuXG4gICAgaWYgQGNvbGxlY3Rpb24ubGVuZ3RoID4gMFxuXG4gICAgICBAY29sbGVjdGlvbi5lYWNoIChtb2RlbCkgLT5cblxuICAgICAgICBlbCA9IEBfZ2V0Q2hpbGRWaWV3RWxGcm9tTW9kZWwgbW9kZWxcblxuICAgICAgICAjIGFzc2lnbiBkb20gZWxlbWVudCB0byB2aWV3XG4gICAgICAgIGlmIGVsPyBhbmQgZWwgaW5zdGFuY2VvZiAkIGFuZCBlbC5sZW5ndGggPiAwXG4gICAgICAgICAgZWwgPSBlbFswXVxuXG4gICAgICAgIGlmIG5vdCBlbD9cbiAgICAgICAgICByZXR1cm5cblxuICAgICAgICB2aWV3ID0gbmV3IHRoaXMuaXRlbVZpZXdcbiAgICAgICAgICBlbDogZWxcbiAgICAgICAgICBtb2RlbDogbW9kZWxcblxuICAgICAgICAjIHNldCB1cCB0aGUgY2hpbGQgdmlldyBldmVudCBmb3J3YXJkaW5nXG4gICAgICAgIEBhZGRDaGlsZFZpZXdFdmVudEZvcndhcmRpbmcgdmlld1xuXG4gICAgICAgICMgU3RvcmUgdGhlIGNoaWxkIHZpZXcgaXRzZWxmIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgICAgICAjIHJlbW92ZSBhbmQvb3IgY2xvc2UgaXQgbGF0ZXJcbiAgICAgICAgQGNoaWxkcmVuLmFkZCB2aWV3XG5cbiAgICAgICAgdmlldy50cmlnZ2VyTWV0aG9kICdyZW5kZXInXG5cbiAgICAgICwgQFxuXG5cblxuICBfZ2V0Q2hpbGRWaWV3RWxGcm9tTW9kZWw6IChtb2RlbCkgPT5cblxuICAgIEAkKEBpdGVtVmlld0NvbnRhaW5lcikuZmluZCgnW2RhdGEtaWQ9XCInICsgbW9kZWwuZ2V0KCdpZCcpICsgJ1wiXScpXG4iLCIndXNlIHN0cmljdCc7XG5cbkFwcCAgICAgID0gcmVxdWlyZSBcImFwcFwiXG5CYWNrYm9uZSA9IHJlcXVpcmUgXCJiYWNrYm9uZVwiXG4kICAgICAgICA9IHJlcXVpcmUgXCJqcXVlcnlcIlxuXG5jbGFzcyBBcHAuVmlld3MuQmFzZUl0ZW1WaWV3IGV4dGVuZHMgQmFja2JvbmUuTWFyaW9uZXR0ZS5JdGVtVmlld1xuXG4gIHJlbmRlckZyb21ET006IChlbCkgPT5cblxuICAgIGlmIG5vdCBlbD9cbiAgICAgIHJldHVybiBAXG5cbiAgICAjIGFzc2lnbiBkb20gZWxlbWVudCB0byB2aWV3XG4gICAgaWYgZWwgaW5zdGFuY2VvZiAkXG4gICAgICBpZiBlbC5sZW5ndGggPiAwXG4gICAgICAgIEBlbCA9IGVsWzBdXG4gICAgZWxzZVxuICAgICAgQGVsID0gZWxcblxuICAgIGlmIG5vdCBAZWw/XG4gICAgICByZXR1cm4gQFxuXG4gICAgQCRlbCA9ICQoZWwpXG5cbiAgICBAaXNSZW5kZXJlZCA9IHRydWVcbiAgICBAaXNDbG9zZWQgPSBmYWxzZVxuXG4gICAgIyBkZWxlZ2F0ZSBET00gZXZlbnRzXG4gICAgQGRlbGVnYXRlRXZlbnRzKClcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5BcHAgICAgICAgPSByZXF1aXJlIFwiYXBwXCJcbkJhY2tib25lICA9IHJlcXVpcmUgXCJiYWNrYm9uZVwiXG4kICAgICAgICAgPSByZXF1aXJlIFwianF1ZXJ5XCJcbl8gICAgICAgICA9IHJlcXVpcmUgXCJ1bmRlcnNjb3JlXCJcbk1vZGVybml6ciA9IHJlcXVpcmUgXCJtb2Rlcm5penJcIlxuXG5cbndpbmRvd1Njcm9sbEhhbmRsZXJWaWV3cyA9IHt9XG5cblxub25XaW5kb3dTY3JvbGwgPSAoZXZlbnQpIC0+XG5cbiAgZm9yIGNpZCwgdmlldyBvZiB3aW5kb3dTY3JvbGxIYW5kbGVyVmlld3NcblxuICAgIGlmIHZpZXc/IGFuZCBub3Qgdmlldy5pc0Nsb3NlZCBhbmQgdmlldy5lbD9cbiAgICAgIHZpZXcudHJpZ2dlck1ldGhvZCAnc2Nyb2xsJywgZXZlbnRcblxuXG5kZWJvdW5jZWRPbldpbmRvd1Njcm9sbCA9IF8udGhyb3R0bGUoIG9uV2luZG93U2Nyb2xsLCAzMDAgKVxuXG5iaW5kV2luZG93U2Nyb2xsRXZlbnQgPSAtPlxuXG4gICQod2luZG93KS5vbiAnc2Nyb2xsJywgZGVib3VuY2VkT25XaW5kb3dTY3JvbGxcblxuXG5iaW5kV2luZG93U2Nyb2xsRXZlbnRPbmNlID0gXy5vbmNlKCBiaW5kV2luZG93U2Nyb2xsRXZlbnQgKVxuXG5cblxuY2xhc3MgQXBwLlZpZXdzLkluZmluaXRlU2Nyb2xsQ29tcG9zaXRlVmlldyBleHRlbmRzIEFwcC5WaWV3cy5CYXNlQ29tcG9zaXRlVmlld1xuXG4gIGluaXRpYWxpemU6ID0+XG5cbiAgICByZXR1cm4gaWYgbm90IEBzY3JvbGxDb250YWluZXI/XG5cbiAgICBpZiBAY29sbGVjdGlvbj8gYW5kIEBjb2xsZWN0aW9uIGluc3RhbmNlb2YgQXBwLkNvbGxlY3Rpb25zLkluZmluaXRlU2Nyb2xsQ29sbGVjdGlvblxuXG4gICAgICBAbGlzdGVuVG8gQG1vZGVsLCAnY2hhbmdlOmxvYWRpbmcnLCBAb25Mb2FkaW5nQ2hhbmdlXG5cblxuICBvblJlbmRlcjogPT5cblxuICAgIEBiaW5kU2Nyb2xsRXZlbnQoKVxuXG5cbiAgb25DbG9zZTogPT5cblxuICAgIGlmIEBzY3JvbGxDb250YWluZXIgaXMgJ3dpbmRvdycgYW5kIHdpbmRvd1Njcm9sbEhhbmRsZXJWaWV3c1sgQGNpZCBdP1xuICAgICAgZGVsZXRlIHdpbmRvd1Njcm9sbEhhbmRsZXJWaWV3c1sgQGNpZCBdXG5cblxuICBiaW5kU2Nyb2xsRXZlbnQ6ID0+XG5cbiAgICBpZiBAc2Nyb2xsQ29udGFpbmVyIGlzICd3aW5kb3cnXG5cbiAgICAgIGJpbmRXaW5kb3dTY3JvbGxFdmVudE9uY2UoKVxuICAgICAgd2luZG93U2Nyb2xsSGFuZGxlclZpZXdzWyBAY2lkIF0gPSBAXG5cbiAgICBlbHNlXG5cbiAgICAgIGlmIEAkKCBAc2Nyb2xsQ29udGFpbmVyICkubGVuZ3RoID4gMFxuICAgICAgICBkZWJvdW5jZWRTY3JvbGwgPSBfLnRocm90dGxlKCBAb25TY3JvbGwsIDEwMCApXG4gICAgICAgIEAkKCBAc2Nyb2xsQ29udGFpbmVyICkuc2Nyb2xsIGRlYm91bmNlZFNjcm9sbFxuXG5cblxuICBvblNjcm9sbDogKGV2ZW50KSA9PlxuXG4gICAgIyBnZXQgc2Nyb2xsIGhlaWdodHNcbiAgICBpZiBAc2Nyb2xsQ29udGFpbmVyIGlzICd3aW5kb3cnXG5cbiAgICAgIHNjcm9sbEhlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpXG4gICAgICBpbm5lckhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKVxuXG4gICAgICAjIGdldCBzY3JvbGx0b3AgcG9zaXRpb25cbiAgICAgIHNjcm9sbFRvcCA9IEFwcC5IZWxwZXJzLmVudi5nZXQgJ3Njcm9sbFRvcCdcblxuICAgIGVsc2VcblxuICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblxuICAgICAgc2Nyb2xsSGVpZ2h0ID0gJHRhcmdldFswXS5zY3JvbGxIZWlnaHRcbiAgICAgIGlubmVySGVpZ2h0ID0gJHRhcmdldC5pbm5lckhlaWdodCgpXG5cbiAgICAgICMgZ2V0IHNjcm9sbHRvcCBwb3NpdGlvblxuICAgICAgc2Nyb2xsVG9wID0gJHRhcmdldC5zY3JvbGxUb3AoKVxuXG5cbiAgICAjIGNhbGN1bGF0ZSBkaWZmZXJlbnRpYWxzXG4gICAgcGl4ZWxzRnJvbVRvcCA9IHNjcm9sbFRvcFxuICAgIHBpeGVsc0Zyb21Cb3R0b20gPSAwICsgc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsVG9wIC0gaW5uZXJIZWlnaHRcblxuICAgICMgZml4ZWQgb2Zmc2V0XG4gICAgb2Zmc2V0ID0gNzAwICAjID0gMTAwMDAgKiAwLjJcblxuICAgICMgZ2V0IGJvdHRvbSBvZmZzZXQgb2YgZWxlbWVudCBpbiB0aGUgc2Nyb2xsaW5nIGFyZWFcbiAgICBvZmZzZXRCb3R0b20gPSBAZ2V0T2Zmc2V0Qm90dG9tICQoJy5zcy13cmFwcGVyJyksIHNjcm9sbEhlaWdodFxuXG4gICAgIyByZXR1cm4gZm9yIG5lZ2F0aXZlIHZhbHVlcyAoZWxhc3RpYyBzY3JvbGxpbmcgb24gTWFjIE9TIGFuZCBpT1MpXG4gICAgcmV0dXJuIGlmIHBpeGVsc0Zyb21Cb3R0b20gPCAwIG9yIHBpeGVsc0Zyb21Ub3AgPCAwXG5cbiAgICAjIHRyaWdnZXIgZXZlbnRzXG4gICAgaWYgcGl4ZWxzRnJvbUJvdHRvbSA8IG9mZnNldCArIG9mZnNldEJvdHRvbVxuXG4gICAgICAjIGNvbnNvbGUubG9nICdOZWFyQm90dG9tJ1xuICAgICAgQHRyaWdnZXJNZXRob2QgJ3Njcm9sbDpuZWFyOmJvdHRvbSdcblxuICAgIGVsc2UgaWYgcGl4ZWxzRnJvbVRvcCA8IG9mZnNldFxuXG4gICAgICAjIGNvbnNvbGUubG9nICdOZWFyVG9wJ1xuICAgICAgQHRyaWdnZXJNZXRob2QgJ3Njcm9sbDpuZWFyOnRvcCdcblxuXG5cbiAgZ2V0T2Zmc2V0Qm90dG9tOiAoJGVsLCBzY3JvbGxIZWlnaHQpID0+XG5cbiAgICBpZiBub3QgQG9mZnNldEJvdHRvbT9cbiAgICAgICMgY2FsY3VsYXRlIHRoZSBvZmZzZXQgb2YgdGhlIHBvc3RzIGRpdiBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHBhZ2VcbiAgICAgIEBvZmZzZXRCb3R0b20gPSBzY3JvbGxIZWlnaHQgLSAoICRlbC5oZWlnaHQoKSArICRlbC5vZmZzZXQoKS50b3AgKVxuXG4gICAgICAjIG1ha2Ugc3VyZSB0aGF0IHRoaXMgaXMgbm90IG5lZ2F0aXZlLlxuICAgICAgaWYgQG9mZnNldEJvdHRvbSA8IDBcbiAgICAgICAgQG9mZnNldEJvdHRvbSA9IDBcblxuICAgIEBvZmZzZXRCb3R0b21cblxuXG4gIG9uU2Nyb2xsTmVhckJvdHRvbTogPT5cblxuICAgIGlmIG5vdCBAY29sbGVjdGlvbi5uZXh0UGFnZT8gb3Igbm90IEBjb2xsZWN0aW9uPyBvciBAY29sbGVjdGlvbi5sZW5ndGggaXMgMFxuICAgICAgcmV0dXJuXG5cbiAgICBpZiBAbG9hZGluZz8gYW5kIEBsb2FkaW5nXG4gICAgICByZXR1cm5cblxuICAgIGlmIEBjb2xsZWN0aW9uLmhhc05leHQ/IGFuZCBAY29sbGVjdGlvbi5oYXNOZXh0IGlzIGZhbHNlXG4gICAgICByZXR1cm5cblxuICAgIEBsb2FkaW5nID0gdHJ1ZVxuICAgIEBtb2RlbC5zZXQgJ2xvYWRpbmcnLCB0cnVlXG5cbiAgICBAY29sbGVjdGlvbi5uZXh0UGFnZVxuICAgICAgcmVtb3ZlOiBmYWxzZVxuICAgICAgc3VjY2VzczogKGNvbGxlY3Rpb24sIHJlc3BvbnNlKSA9PlxuICAgICAgICBAbG9hZGluZyA9IGZhbHNlXG4gICAgICAgIEBtb2RlbC5zZXQgJ2xvYWRpbmcnLCBmYWxzZVxuXG5cbiAgb25Mb2FkaW5nQ2hhbmdlOiAobW9kZWwsIGxvYWRpbmcsIG9wdGlvbnMpIC0+XG5cbiAgICBpZiBub3QgQGxvYWRlclZpZXc/XG5cbiAgICAgICMgY3JlYXRlIGxvYWRlclxuICAgICAgaWYgQCQoJy5zcy1pbmZpbml0ZS1zY3JvbGwtbG9hZGVyJykubGVuZ3RoIGlzIDBcblxuICAgICAgICBpbmZpbml0ZVNjcm9sbExvYWRlckh0bWwgPSAnPGRpdiBjbGFzcz1cInNzLWluZmluaXRlLXNjcm9sbC1sb2FkZXJcIj48ZGl2IGNsYXNzPVwic3MtaW5uZXItdGV4dFwiPk5vIG1vcmUgY29udGVudCB0byBsb2FkLjwvZGl2PjwvZGl2PidcblxuICAgICAgICBpZiBAc2Nyb2xsQ29udGFpbmVyIGlzICd3aW5kb3cnXG5cbiAgICAgICAgICBAJGVsLmFwcGVuZCBpbmZpbml0ZVNjcm9sbExvYWRlckh0bWxcblxuICAgICAgICBlbHNlXG5cbiAgICAgICAgICBAJCggQHNjcm9sbENvbnRhaW5lciApLmFwcGVuZCBpbmZpbml0ZVNjcm9sbExvYWRlckh0bWxcblxuXG4gICAgICBAbG9hZGVyVmlldyA9IG5ldyBBcHAuVmlld3MuTG9hZGVySXRlbVZpZXdcbiAgICAgICAgbW9kZWw6IG5ldyBCYWNrYm9uZS5Nb2RlbFxuXG4gICAgICBAJCgnLnNzLWluZmluaXRlLXNjcm9sbC1sb2FkZXInKS5hcHBlbmQgQGxvYWRlclZpZXcucmVuZGVyKCkuZWxcblxuXG4gICAgZG9uZSA9IGZhbHNlXG5cbiAgICBpZiBsb2FkaW5nXG5cbiAgICAgIEBsb2FkZXJWaWV3LnN0YXJ0U3Bpbm5lcigpXG5cbiAgICBlbHNlXG5cbiAgICAgIEBsb2FkZXJWaWV3LnN0b3BTcGlubmVyKClcblxuICAgICAgIyAjIHNldCAnZG9uZScgZmxhZyB0byB0cnVlIHdoZW4gdGhlIGNvbGxlY3Rpb24gaXMgYXQgdGhlIGJvdHRvbS5cbiAgICAgICMgIyBXZSBkb24ndCBuZWVkIGl0IG9uIHRoZSBmcm9udCBlbmQsIGJ1dCB3ZSBtaWdodCB3YW50IGl0IG9uIHRoZVxuICAgICAgIyAjIGJhY2sgZW5kIHRvIHNob3cgYSBtZXNzYWdlIGxpa2U6IFwiR28gcHJvIHRvIGxvYWQgbW9yZSBwb3N0c1wiXG4gICAgICAjIGlmIEBjb2xsZWN0aW9uLmhhc05leHQ/IGFuZCBAY29sbGVjdGlvbi5oYXNOZXh0IGlzIGZhbHNlXG4gICAgICAjICAgZG9uZSA9IHRydWVcblxuICAgIEAkKCcuc3MtaW5maW5pdGUtc2Nyb2xsLWxvYWRlcicpLnRvZ2dsZUNsYXNzICdzcy1sb2FkaW5nJywgbG9hZGluZ1xuICAgIEAkKCcuc3MtaW5maW5pdGUtc2Nyb2xsLWxvYWRlcicpLnRvZ2dsZUNsYXNzICdzcy1kb25lJywgZG9uZVxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuQXBwICAgICAgID0gcmVxdWlyZSBcImFwcFwiXG5CYWNrYm9uZSAgPSByZXF1aXJlIFwiYmFja2JvbmVcIlxuXyAgICAgICAgID0gcmVxdWlyZSBcInVuZGVyc2NvcmVcIlxuXG5cbmNsYXNzIEFwcC5WaWV3cy5Mb2FkZXJJdGVtVmlldyBleHRlbmRzIEFwcC5WaWV3cy5CYXNlSXRlbVZpZXdcblxuICBjbGFzc05hbWU6ICdzcy1hamF4LWxvYWRlci12aWV3J1xuXG4gIGRlZmF1bHRTcGluQXJnczpcblxuICAgIGxpbmVzOiAxMiAgICAgICAgICAgICAgICMgVGhlIG51bWJlciBvZiBsaW5lcyB0byBkcmF3XG4gICAgbGVuZ3RoOiA3ICAgICAgICAgICAgICAgIyBUaGUgbGVuZ3RoIG9mIGVhY2ggbGluZVxuICAgIHdpZHRoOiAyICAgICAgICAgICAgICAgICMgVGhlIGxpbmUgdGhpY2tuZXNzXG4gICAgcmFkaXVzOiA5ICAgICAgICAgICAgICAgIyBUaGUgcmFkaXVzIG9mIHRoZSBpbm5lciBjaXJjbGVcbiAgICBjb3JuZXJzOiAxICAgICAgICAgICAgICAjIENvcm5lciByb3VuZG5lc3MgKDAuLjEpXG4gICAgcm90YXRlOiAwICAgICAgICAgICAgICAgIyBUaGUgcm90YXRpb24gb2Zmc2V0XG4gICAgZGlyZWN0aW9uOiAxICAgICAgICAgICAgIyAxOiBjbG9ja3dpc2UsIC0xOiBjb3VudGVyY2xvY2t3aXNlXG4gICAgY29sb3I6ICcjYWVhZWFlJyAgICAgICAgIyAjcmdiIG9yICNycmdnYmIgb3IgYXJyYXkgb2YgY29sb3JzXG4gICAgc3BlZWQ6IDEgICAgICAgICAgICAgICAgIyBSb3VuZHMgcGVyIHNlY29uZFxuICAgIHRyYWlsOiA2MCAgICAgICAgICAgICAgICMgQWZ0ZXJnbG93IHBlcmNlbnRhZ2VcbiAgICBzaGFkb3c6IGZhbHNlICAgICAgICAgICAjIFdoZXRoZXIgdG8gcmVuZGVyIGEgc2hhZG93XG4gICAgaHdhY2NlbDogZmFsc2UgICAgICAgICAgIyBXaGV0aGVyIHRvIHVzZSBoYXJkd2FyZSBhY2NlbGVyYXRpb25cbiAgICBjbGFzc05hbWU6ICdzcy1zcGlubmVyJyAgICAjIFRoZSBDU1MgY2xhc3MgdG8gYXNzaWduIHRvIHRoZSBzcGlubmVyXG5cblxuICB0ZW1wbGF0ZTogLT5cbiAgICAnJ1xuXG4gIG9uUmVuZGVyOiA9PlxuXG4gICAgQHN0YXJ0U3Bpbm5lcigpXG5cblxuICBzdGFydFNwaW5uZXI6ID0+XG5cbiAgICBzcGluQXJncyA9IF8uZXh0ZW5kIHt9LCBAZGVmYXVsdFNwaW5BcmdzLCBAbW9kZWwudG9KU09OKClcblxuICAgIEAkZWwuc3BpbiBzcGluQXJnc1xuXG4gIHN0b3BTcGlubmVyOiA9PlxuXG4gICAgQCRlbC5zcGluIGZhbHNlXG4iLCJcInVzZSBzdHJpY3RcIlxuXG5CYWNrYm9uZSA9IHJlcXVpcmUgJ2JhY2tib25lJ1xuXG4jIENSRUFURSBORVcgQkFDS0JPTkUuTUFSSU9ORVRURSBBUFBMSUNBVElPTlxuQXBwID0gbmV3IEJhY2tib25lLk1hcmlvbmV0dGUuQXBwbGljYXRpb25cblxuXHRDb250cm9sbGVyczoge31cblx0TW9kZWxzOiB7fVxuXHRDb2xsZWN0aW9uczoge31cblx0Vmlld3M6IHt9XG5cdExheW91dHM6IHt9XG5cdFJvdXRlcnM6IHt9XG5cdFRlbXBsYXRlczoge31cblx0UGFydGlhbHM6IHt9XG5cdEhlbHBlcnM6IHt9XG5cbndpbmRvdy5TU0FwcCA9IEFwcFxuXG4jIFJFVFVSTiBNQUlOIEFQUFxubW9kdWxlLmV4cG9ydHMgPSBBcHBcbiIsIlwidXNlIHN0cmljdFwiXG5cbiMgbW9kZXJuaXpyIG1vZHVsZXNcbnJlcXVpcmUgJ2Jyb3dzZXJuaXpyL3Rlc3QvdG91Y2hldmVudHMnXG5cbiMgbG9hZCBhcHAgb2JqZWN0XG5BcHAgPSByZXF1aXJlICdhcHAnXG5cbiMgcmVxdWlyZSBoZWxwZXJzXG5BcHAuSGVscGVycy5icm93c2VyU3VwcG9ydCAgPSByZXF1aXJlIFwiLi9IZWxwZXJzL2Jyb3dzZXJTdXBwb3J0XCJcbkFwcC5IZWxwZXJzLmRhdGEgICAgICAgICAgICA9IHJlcXVpcmUgXCIuL0hlbHBlcnMvZGF0YVwiXG5BcHAuSGVscGVycy5kYXRlICAgICAgICAgICAgPSByZXF1aXJlIFwiLi9IZWxwZXJzL2RhdGVcIlxuQXBwLkhlbHBlcnMuZW52ICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vSGVscGVycy9lbnZcIlxuQXBwLkhlbHBlcnMuaHR0cCAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vSGVscGVycy9odHRwXCJcblxuXG4jIGxvYWQgdGVtcGxhdGUgaGVscGVyc1xucmVxdWlyZSAnLi9UZW1wbGF0ZXMvSGVscGVycy90b1RpdGxlQ2FzZSdcblxuIyBsb2FkIGFwcCBjb250cm9sbGVyc1xucmVxdWlyZSAnLi9Db250cm9sbGVycy9BcHBDb250cm9sbGVyJ1xuXG4jIGxvYWQgYXBwIG1vZGVsc1xucmVxdWlyZSAnLi9Nb2RlbHMvQXBpTW9kZWwnXG5yZXF1aXJlICcuL01vZGVscy9XUE9wdGlvbk1vZGVsJ1xucmVxdWlyZSAnLi9Nb2RlbHMvV1BVc2VyTWV0YU1vZGVsJ1xuXG4jIGxvYWQgYXBwIGNvbGxlY3Rpb25zXG5yZXF1aXJlICcuL0NvbGxlY3Rpb25zL0FwaUNvbGxlY3Rpb24nXG5yZXF1aXJlICcuL0NvbGxlY3Rpb25zL0luZmluaXRlU2Nyb2xsQ29sbGVjdGlvbidcblxuIyByZXF1aXJlIGFwcCB2aWV3c1xucmVxdWlyZSAnLi9WaWV3cy9CYXNlSXRlbVZpZXcnXG5yZXF1aXJlICcuL1ZpZXdzL0Jhc2VDb21wb3NpdGVWaWV3J1xucmVxdWlyZSAnLi9WaWV3cy9Mb2FkZXJJdGVtVmlldydcbnJlcXVpcmUgJy4vVmlld3MvSW5maW5pdGVTY3JvbGxDb21wb3NpdGVWaWV3J1xuXG4jIGJhY2tib25lIGV4dGVudGlvbnNcbnJlcXVpcmUgJy4vQ29uZmlnL0JhY2tib25lQWpheCdcblxuXG4jIyNcbmluaXRpYWxpemUgY29udHJvbGxlciBvbiBkb2MgcmVhZHkgLSBiZWZvcmUgZXZlbiBzdGFydGluZyB0aGUgYXBwXG5zbyB0aGF0IHN1YiBhcHBzIGFuZCBtb2RlbHMgd2lsbCBoYXZlIGFjY2VzcyB0byB0aGUgYXBwIGFwaSBpbnNpZGUgdGhlIGFwcGluaXRpYWxpemVyc1xuIyMjXG4kID0gcmVxdWlyZSAnanF1ZXJ5J1xuJChkb2N1bWVudCkucmVhZHkgLT5cblxuICAkKCd2aWRlbycpLnByb3AgXCJtdXRlZFwiLCB0cnVlXG5cblxuICAjIGFkZCBBSkFYIHN1cHBvcnQgZm9yIElFOVxuICBBcHAuSGVscGVycy5icm93c2VyU3VwcG9ydC5pZUFqYXhTdXBwb3J0KClcblxuICAjIEluc3RhbnRpYXRlIGFwcCBjb250cm9sbGVyXG4gIGNvbnRyb2xsZXIgPSBuZXcgQXBwLkNvbnRyb2xsZXJzLkFwcENvbnRyb2xsZXIoKVxuXG4gICMjI1xuICBEZWZpbmUgQXBwIFJlcXVlc3RzXG4gICMjI1xuICBBcHAucmVxcmVzLnNldEhhbmRsZXIgJ2FwaVJvb3QnLCBjb250cm9sbGVyLmdldEFwaVJvb3RcbiAgQXBwLnJlcXJlcy5zZXRIYW5kbGVyICdpc0V2ZW4nLCBjb250cm9sbGVyLmlzRXZlblxuXG4gICMjI1xuICBzdGFydCB0aGUgYXBwXG4gIFRoaXMgaXMgd2hlbiBtb2R1bGVzIGdldCBpbml0aWFsaXplZFxuICAjIyNcbiAgQXBwLnN0YXJ0KClcblxuICAjIyNcbiAgc3RhcnQgRU5WIGhlbHBlci5cbiAgIyMjXG4gIEFwcC5IZWxwZXJzLmVudi5zdGFydCgpXG4iXX0=
