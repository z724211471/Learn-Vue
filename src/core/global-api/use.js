/* @flow */

import { toArray } from '../util/index'
//把你定的函数载入vue,只会载入一次
export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    //判断函数是否已经挂载
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }
    // additional parameters
//删除了传参的数组的第一条数据
    const args = toArray(arguments, 1)
    //添加在数组头部添加this，也就是vue对象
    args.unshift(this)
    //执行传入的函数
    if (typeof plugin.install === 'function') {
     plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }

    installedPlugins.push(plugin)
    return this
  }
}
