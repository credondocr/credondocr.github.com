/* jshint ignore:start */

/* jshint ignore:end */

define('matemanomicon/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].RESTAdapter.extend({
    namespace: "api",
    host: "http://localhost:8080"
  });

});
define('matemanomicon/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'matemanomicon/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('matemanomicon/components/radio-button', ['exports', 'ember-radio-buttons'], function (exports, EmberRadioButton) {

	'use strict';

	exports['default'] = EmberRadioButton['default'];

});
define('matemanomicon/controllers/posts', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    init: function init() {
      this.set("question", Ember['default'].Object.create());
    },
    actions: {
      publishPost: function publishPost() {
        var newPost = this.store.createRecord("question", {
          enunciation: this.question.enunciation,
          title: this.question.title,
          expression: this.question.expression
        });
        newPost.save();
      }
    }
  });

});
define('matemanomicon/initializers/app-version', ['exports', 'matemanomicon/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  };

});
define('matemanomicon/initializers/export-application-global', ['exports', 'ember', 'matemanomicon/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('matemanomicon/models/post', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('matemanomicon/models/question', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    enunciation: DS['default'].attr("string"),
    title: DS['default'].attr("string"),
    expression: DS['default'].attr("string"),
    options: DS['default'].attr("array"),
    tags: DS['default'].attr("array")
  });

});
define('matemanomicon/router', ['exports', 'ember', 'matemanomicon/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route("posts");
    this.resource("questions", function () {
      this.resource("question", { path: "/:question_id" });
    });
  });

  exports['default'] = Router;

});
define('matemanomicon/routes/question', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.store.find("question", params.question_id);
    }
  });

});
define('matemanomicon/routes/questions/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
			model: function model() {
					return this.store.find("question");
			}
	});

});
define('matemanomicon/serializers/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].RESTSerializer.extend({});

});
define('matemanomicon/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Biznz");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[6]); }
        var element0 = dom.childAt(fragment, [2]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),-1,-1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),-1,-1);
        var morph2 = dom.createMorphAt(fragment,5,6,contextualElement);
        inline(env, morph0, context, "link-to", ["Home", "index"], {});
        inline(env, morph1, context, "link-to", ["Preguntas", "questions"], {});
        content(env, morph2, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('matemanomicon/templates/posts', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Pregunta");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("  \n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1,"class","post-publish");
        var el2 = dom.createTextNode("  \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("Publish");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [7, 1]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,1);
        var morph2 = dom.createMorphAt(dom.childAt(element0, [5]),0,1);
        inline(env, morph0, context, "input", [], {"value": get(env, context, "question.enunciation"), "placeholder": "Cual es la pregunta?"});
        inline(env, morph1, context, "textarea", [], {"value": get(env, context, "question.title"), "placeholder": "Titulo"});
        inline(env, morph2, context, "textarea", [], {"value": get(env, context, "question.expression"), "placeholder": "expression"});
        element(env, element1, context, "action", ["publishPost"], {});
        return fragment;
      }
    };
  }()));

});
define('matemanomicon/templates/question', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("Title");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),-1,-1);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [2, 3]),-1,-1);
        content(env, morph0, context, "enunciation");
        content(env, morph1, context, "title");
        return fragment;
      }
    };
  }()));

});
define('matemanomicon/templates/questions/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" 	");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),-1,-1);
            content(env, morph0, context, "fo.enunciation");
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("       	");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("	\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            if (this.cachedFragment) { dom.repairClonedNode(fragment,[1]); }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            var morph1 = dom.createMorphAt(fragment,1,2,contextualElement);
            inline(env, morph0, context, "radio-button", [], {"value": "fo.id", "name": "hola", "checked": get(env, context, "selectedNumber")});
            content(env, morph1, context, "f.answer");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("fieldset");
          var el2 = dom.createTextNode("\n 	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("legend");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("   ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          if (this.cachedFragment) { dom.repairClonedNode(element0,[3]); }
          var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),-1,-1);
          var morph1 = dom.createMorphAt(element0,2,3);
          var morph2 = dom.createMorphAt(element0,3,4);
          content(env, morph0, context, "fo.title");
          block(env, morph1, context, "link-to", ["question", get(env, context, "fo")], {}, child0, null);
          block(env, morph2, context, "each", [get(env, context, "fo.options")], {"keyword": "f"}, child1, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[1]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        block(env, morph0, context, "each", [get(env, context, "model")], {"keyword": "fo"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('matemanomicon/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/components/radio-button.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/radio-button.js should pass jshint', function() { 
    ok(true, 'components/radio-button.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/controllers/posts.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/posts.js should pass jshint', function() { 
    ok(true, 'controllers/posts.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/helpers/resolver', ['exports', 'ember/resolver', 'matemanomicon/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('matemanomicon/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/helpers/start-app', ['exports', 'ember', 'matemanomicon/app', 'matemanomicon/router', 'matemanomicon/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('matemanomicon/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/models/post.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/post.js should pass jshint', function() { 
    ok(true, 'models/post.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/models/question.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/question.js should pass jshint', function() { 
    ok(true, 'models/question.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/routes/question.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/question.js should pass jshint', function() { 
    ok(true, 'routes/question.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/routes/questions/index.jshint', function () {

  'use strict';

  module('JSHint - routes/questions');
  test('routes/questions/index.js should pass jshint', function() { 
    ok(true, 'routes/questions/index.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/serializers/application.jshint', function () {

  'use strict';

  module('JSHint - serializers');
  test('serializers/application.js should pass jshint', function() { 
    ok(true, 'serializers/application.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/test-helper', ['matemanomicon/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('matemanomicon/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/transforms/array.jshint', function () {

  'use strict';

  module('JSHint - transforms');
  test('transforms/array.js should pass jshint', function() { 
    ok(true, 'transforms/array.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/transforms/object.jshint', function () {

  'use strict';

  module('JSHint - transforms');
  test('transforms/object.js should pass jshint', function() { 
    ok(true, 'transforms/object.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("adapter:application", "ApplicationAdapter", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('matemanomicon/tests/unit/adapters/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/adapters');
  test('unit/adapters/application-test.js should pass jshint', function() { 
    ok(true, 'unit/adapters/application-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/controllers/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:add", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('matemanomicon/tests/unit/controllers/add-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/add-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/add-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/controllers/posts-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:posts", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('matemanomicon/tests/unit/controllers/posts-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/posts-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/posts-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/models/post-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("post", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('matemanomicon/tests/unit/models/post-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/post-test.js should pass jshint', function() { 
    ok(true, 'unit/models/post-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/models/questions-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("questions", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('matemanomicon/tests/unit/models/questions-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/questions-test.js should pass jshint', function() { 
    ok(true, 'unit/models/questions-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/routes/add-question-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:add-question", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('matemanomicon/tests/unit/routes/add-question-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/add-question-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/add-question-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/routes/quest-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:quest", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('matemanomicon/tests/unit/routes/quest-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/quest-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/quest-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/routes/question-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:question", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('matemanomicon/tests/unit/routes/question-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/question-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/question-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/routes/question/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:question/add", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('matemanomicon/tests/unit/routes/question/add-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes/question');
  test('unit/routes/question/add-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/question/add-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/routes/questions-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:questions", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('matemanomicon/tests/unit/routes/questions-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/questions-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/questions-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/routes/questions/add-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:questions/add", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('matemanomicon/tests/unit/routes/questions/add-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes/questions');
  test('unit/routes/questions/add-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/questions/add-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/routes/questions/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:questions/index", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('matemanomicon/tests/unit/routes/questions/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes/questions');
  test('unit/routes/questions/index-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/questions/index-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/serializers/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("serializer:application", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var serializer = this.subject();
    assert.ok(serializer);
  });

  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('matemanomicon/tests/unit/serializers/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/serializers');
  test('unit/serializers/application-test.js should pass jshint', function() { 
    ok(true, 'unit/serializers/application-test.js should pass jshint.'); 
  });

});
define('matemanomicon/tests/unit/serializers/question-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("serializer:question", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var serializer = this.subject();
    assert.ok(serializer);
  });

  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('matemanomicon/tests/unit/serializers/question-test.jshint', function () {

  'use strict';

  module('JSHint - unit/serializers');
  test('unit/serializers/question-test.js should pass jshint', function() { 
    ok(true, 'unit/serializers/question-test.js should pass jshint.'); 
  });

});
define('matemanomicon/transforms/array', ['exports', 'ember', 'ember-data'], function (exports, Ember, DS) {

  'use strict';

  exports['default'] = DS['default'].Transform.extend({
    deserialize: function deserialize(value) {
      if (Ember['default'].isArray(value)) {
        return Ember['default'].A(value);
      } else {
        return Ember['default'].A();
      }
    },
    serialize: function serialize(value) {
      if (Ember['default'].isArray(value)) {
        return Ember['default'].A(value);
      } else {
        return Ember['default'].A();
      }
    }
  });

});
define('matemanomicon/transforms/object', ['exports', 'ember', 'ember-data'], function (exports, Ember, DS) {

  'use strict';

  exports['default'] = DS['default'].Transform.extend({
    deserialize: function deserialize(value) {
      if (!Ember['default'].$.isPlainObject(value)) {
        return {};
      } else {
        return value;
      }
    },
    serialize: function serialize(value) {
      if (!Ember['default'].$.isPlainObject(value)) {
        return {};
      } else {
        return value;
      }
    }
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('matemanomicon/config/environment', ['ember'], function(Ember) {
  var prefix = 'matemanomicon';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("matemanomicon/tests/test-helper");
} else {
  require("matemanomicon/app")["default"].create({"name":"matemanomicon","version":"0.0.0.8d7541e9"});
}

/* jshint ignore:end */
//# sourceMappingURL=matemanomicon.map