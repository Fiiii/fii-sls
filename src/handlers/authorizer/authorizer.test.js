import { isFunction } from 'lodash'
import { init } from '../../lib/initFunction'
import { Container } from 'aurelia-dependency-injection'
import apiAuthorizer from './'

jest.mock('../../lib/initFunction', () => { return { init: jest.fn(() => () => { }) } })

describe('Authorizer', () => {
  it('Dummy test', () => {
    expect(1).toEqual(1)
  })

  it('should register ApiAuthorizerHandler inside DI container', () => {
    const initContainerFunc = init.mock.calls[0][2]
    const container = new Container()
    initContainerFunc(container)
    expect(container.getResolver('ApiAuthorizerHandler')).toBeDefined()
  })

  it('should return handler from init', () => {
    expect(isFunction(apiAuthorizer)).toBeTruthy()
  })
})
