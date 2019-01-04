import { isFunction } from 'lodash'
import { init } from '../lib/initFunction'
import { Container } from 'aurelia-dependency-injection'
import apiAuthorizer from '../handlers/authorizer'

jest.mock('../lib/initFunction', () => { return { init: jest.fn(() => () => { }) } })

describe('Authorizer', () => {
  it('should register ApiAuthorizerHandler inside DI container', () => {
    const initContainerFunction = init.mock.calls[0][2]
    const container = new Container()

    initContainerFunction(container)
    expect(container.getResolver('ApiAuthorizerHandler')).toBeDefined()
  })

  it('should return handler from init', () => {
    expect(isFunction(apiAuthorizer)).toBeTruthy()
  })
})
