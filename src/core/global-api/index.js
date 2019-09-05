/* @flow */

import config from '../config'
import { initUse } from './use'
import { initMixin } from './mixin'
import { initExtend } from './extend'
import { initAssetRegisters } from './assets'
import { set, del } from '../observer/index'
import { ASSET_TYPES } from 'shared/constants'
import builtInComponents from '../components/index'
import { observe } from 'core/observer/index'

import {
  warn,
  extend,
  nextTick,
  mergeOptions,
  defineReactive
} from '../util/index'

export function initGlobalAPI(Vue: GlobalAPI) {
  // config
  const configDef = {}
  configDef.get = () => config

  if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      )
    }
  }
  Object.defineProperty(Vue, 'config', configDef)

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  //挂载全局api
  Vue.util = {
    warn,
    extend,
    mergeOptions,
    defineReactive
  }

  Vue.set = set
  Vue.delete = del
  Vue.nextTick = nextTick

  // 2.6 explicit observable API

  Vue.observable = <T>(obj: T): T => {
    observe(obj)
   return obj
    }
     Vue.options = Object.create(null)

     //ASSET_TYPES=["component", "directive", "filter"]
  ASSET_TYPES.forEach(type => {
      Vue.options[type + 's'] = Object.create(null)
    })

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue
  //把KeepAlive挂载到组件上</T>
  extend(Vue.options.components, builtInComponents)
  //执行挂载外部的函数
  initUse(Vue)
  //混入vue
  initMixin(Vue)
  //也是混入
  initExtend(Vue)
  //初始化选项与资源的api
  initAssetRegisters(Vue)
}
