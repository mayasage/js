import moduleMap from './moduleMap.js'

const res = (modulesMap => {
  const require = name => {
    const module = { exports: {} }
    modulesMap[name](module, require)
    return module.exports
  }
  return require('patterns/universal-js/dependency-resolution/app.js')
})(moduleMap)

console.log(res)
