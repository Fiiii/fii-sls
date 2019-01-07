import BaseHandler from '../../lib/BaseHandler'

export default class ApiAuthorizerHandler extends BaseHandler {
  constructor(authService) {
    super()
    this.authService = authService
    console.log('Service:', authService)
  }

  async _process(event, context) {
    return true
  }
}
