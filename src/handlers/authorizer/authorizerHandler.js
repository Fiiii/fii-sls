import BaseHandler from '../../lib/BaseHandler'

export default class ApiAuthorizerHandler extends BaseHandler {
  constructor(authService) {
    super()
    this.authService = authService
    console.log('service:', authService)
  }

  async _process(event, context) {
    return true
  }
}
