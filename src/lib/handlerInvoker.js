import { isNil, isFunction } from 'lodash'

export default async function invoke(event, context, handlerName, container) {
  if (isNil(handlerName)) {
    const err = new Error('handlerName is required')
    throw err
  }

  const handlerInstance = container.get(handlerName)
  if (!isFunction(handlerInstance.execute)) {
    const err = new Error(`The handler -${handlerName}- must expose an execute() function`)
    throw err
  }

  try {
    return handlerInstance.execute(event, context)
  } catch (err) {
    throw err
  }
}
