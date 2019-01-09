import 'aurelia-polyfills'
import handlerInvoker from './handlerInvoker'

let globalContainer

export function init(handlerName, container, configureContainer) {
  configureContainer(container)
  globalContainer = container
  return async (event, context, cb) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const response = await handlerInvoker(event, context, handlerName, container)

      console.log('response', response)
      return 'INIT AUTH'
    } catch (err) {
      return err
    }
  }
}

export { globalContainer }
