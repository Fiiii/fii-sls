import BaseHandler from '../../lib/BaseHandler'

export default class ApiAuthorizerHandler extends BaseHandler {
  constructor() {
    super()
  }

  async _process(event, context) {
    return true
  }
}
