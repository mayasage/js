const moduleMap = {
  'app.js': (module, require) => {
    const { calculator } = require('patterns/universal-js/dependency-resolution/calculator.js')
    const { display } = require('patterns/universal-js/dependency-resolution/display.js')

    display(calculator('2 + 2 / 4'))
  },

  'calculator.js': (module, require) => {
    const { parser } = require('patterns/universal-js/dependency-resolution/parser.js')
    const { resolver } = require('patterns/universal-js/dependency-resolution/resolver.js')

    module.exports.calculator = function (expr) {
      return resolver(parser(expr))
    }
  },

  'display.js': (module, require) => {
    module.exports.display = function () {
      /* ... */
    }
  },

  'parser.js': (module, require) => {
    module.exports.parser = function () {
      /* ... */
    }
  },

  'resolver.js': (module, require) => {
    module.exports.resolver = function () {
      /* ... */
    }
  },
}

export default moduleMap
