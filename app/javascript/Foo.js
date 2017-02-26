import logger from 'logger'
import forEach from 'lodash/forEach'

const foo = ['foo', 'created']

export default class Foo {
  constructor () {
    forEach(foo, (msg) => logger(msg))
  }
}
