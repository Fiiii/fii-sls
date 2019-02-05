import BaseHandler from '../../lib/BaseHandler'

export default class FooBarHandler extends BaseHandler {
  constructor() {
    super()
    console.log('Service job')
  }

  async _process(event, context) {
    return true
  }
}
