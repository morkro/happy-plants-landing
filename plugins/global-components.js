import Vue from 'vue'

const requireComponent = require.context('~/components', false, /^(?!\.\/Module).*(\.vue)$/)
const fileNameToComponentName = file => file.substr(2).replace(/\.vue/, '')
const pascalToKebab = name => name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
const addPrefix = name => name.includes('-') ? name : `v-${name}`

for (const fileName of requireComponent.keys()) {
  console.log(fileName)
  const componentName = addPrefix(pascalToKebab(fileNameToComponentName(fileName)))
  const componentConfig = requireComponent(fileName)
  Vue.component(componentName, componentConfig.default || componentConfig)
}
