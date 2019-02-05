import BaseHandler from '../../lib/BaseHandler'

export default class EventProducerHandler extends BaseHandler {
  constructor() {

  }

  async _process(event, context) {
    return true
  }
}
