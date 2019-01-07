import { init } from '../../lib/initFunction'
import { Container } from 'aurelia-dependency-injection'
import FooBarHandler from './fooBarHandler'

export default init('FooBarHandler', new Container(), (container) => {
  container.registerSingleton('FooBarHandler', FooBarHandler)
})
