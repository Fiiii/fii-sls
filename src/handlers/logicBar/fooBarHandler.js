import BaseHandler from '../../lib/BaseHandler'

export default class FooBarHandler extends BaseHandler {
  constructor(someService) {
    super()
    this.authService = someService
    console.log('Service:', someService)
  }

  async _process(event, context) {
    return true
  }
}
