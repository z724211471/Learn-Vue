/* @flow */

import type Watcher from './watcher'
import { remove } from '../util/index'
import config from '../config'

let uid = 0

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
export default class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor() {
    this.id = uid++
    this.subs = []

  }
  //添加选项
  addSub(sub: Watcher) {
    this.subs.push(sub)
  }
  //移除选项
  removeSub(sub: Watcher) {
    remove(this.subs, sub)
  }
  //
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
  //通知
  notify() {

    const subs = this.subs.slice()
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort((a, b) => a.id - b.id)
    }
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null
const targetStack = []
//添加dep
export function pushTarget(target: ?Watcher) {
  targetStack.push(target)
  Dep.target = target
}
//删除最后一个值
export function popTarget() {
  targetStack.pop()

  Dep.target = targetStack[targetStack.length - 1]
}
