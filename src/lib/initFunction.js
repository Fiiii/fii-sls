import 'babel-polyfill'
import 'aurelia-polyfills'
import handlerInvoker from './handler/handlerInvoker'

let globalContainer

export function init(handlerName, container, configureContainer) {
  configureContainer(container)
  globalContainer = container
  return async (event, context, cb) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const response = await handlerInvoker(event, context, handlerName, container)
      console.log('response', response)
      cb(null, response)
    } catch (err) {
      cb(err, null)
    }
  }
}

export { globalContainer }
