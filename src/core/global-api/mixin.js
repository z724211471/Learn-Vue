/* @flow */

import { mergeOptions } from '../util/index'
//混入功能的源码
export function initMixin (Vue: GlobalAPI) {

  Vue.mixin = function (mixin: Object) {
    console.log('啥意思啊')
    this.options = mergeOptions(this.options, mixin)
    console.log(this.options);
    return this
  }
}
