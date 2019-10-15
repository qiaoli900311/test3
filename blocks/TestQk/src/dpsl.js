import HelloWorld from './index.vue'
import dpslConfig from '../dpsl.json'
HelloWorld.install = function(Vue) {
  Vue.component(HelloWorld.name, HelloWorld)
}

// 可视化的可配置项
HelloWorld.$dpslConfig = dpslConfig

export default HelloWorld
