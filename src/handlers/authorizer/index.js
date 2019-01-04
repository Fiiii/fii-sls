import { init } from '../../lib/initFunction'
import { Container } from 'aurelia-dependency-injection'
import ApiAuthorizerHandler from './authorizerHandler'

export default init('ApiAuthorizerHandler', new Container(), (container) => {
  container.registerSingleton('ApiAuthorizerHandler', ApiAuthorizerHandler)
})
