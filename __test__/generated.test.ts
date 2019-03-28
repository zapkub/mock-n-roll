import { __mock__UserRepository } from './__generated__/UserRepository'
import { UserRepository, Elastic } from './abstract'
import { __mock__Elastic } from './__generated__/Elastic'

describe('Generated mock from class should work', () => {
  it('Should work', () => {
    function x(e: Elastic) {
      expect(e.searchUser()).toBeDefined()
    }

    const defaultElasic = new Elastic()
    const mockElastic = new __mock__Elastic()
    mockElastic.mocks.searchUser().toReturn({
      id: 'unit',
      name: 'unit'
    })

    x(defaultElasic)
    x(mockElastic)

  })
})

describe('Generated result testing', () => {
  const u = new __mock__UserRepository()

  it('should able to mock func arg', () => {
    u.mocks.callback(() => function() {return "x"}).toReturn("y")
    expect(u.callback(() => function() {return "x";})).toEqual("y")


    u.mocks.callback(function() {return "x"}).toReturn("z")
    expect(u.callback(function() {return "x";})).toEqual("z")
  })

  it('Should inheritance of source interface', async () => {
    u.defaultRole = 'user'
    function x(userRepository: UserRepository) {
      expect(userRepository.defaultRole).toEqual('user')
    }
    x(u)
  })

  it('Should return promise of array type correctly', async () => {
    u.mocks
      .createManyAdmin({ name: 'TEST', role: 'role' })
      .toReturn(Promise.resolve([]))
    const result = await u.createManyAdmin({ name: 'TEST', role: 'role' })
    expect(result).toEqual([])
  })
  it('should able to mock FunctionType property', async () => {
    u.mocks.gen('Test').toReturn({ name: 'ba', id: 'foo' })
    const result = u.gen('Test')
    expect(result).toEqual({ name: 'ba', id: 'foo' })
  })
  it('Should return promise of object type correctly', async () => {
    u.mocks.randomUser().toReturn({ id: 'TEST', name: 'TEST' })
    const result = u.randomUser()
    expect(result).toEqual({ id: 'TEST', name: 'TEST' })
  })
  it('should return multiple mock correctly', async () => {
    u.mocks.createUser({ name: 'create_TEST_2' }).toReturn(
      Promise.resolve({
        id: 'TEST_2',
        name: 'TEST_2'
      })
    )
    u.mocks.createUser({ name: 'create_TEST' }).toReturn(
      Promise.resolve({
        id: 'TEST',
        name: 'TEST'
      })
    )
    let result = await u.createUser({ name: 'create_TEST' })
    expect(result).toEqual({
      id: 'TEST',
      name: 'TEST'
    })

    result = await u.createUser({ name: 'create_TEST_2' })
    expect(result).toEqual({
      id: 'TEST_2',
      name: 'TEST_2'
    })
  })

  it('called should match snapshot', () => {
    expect(u.called).toMatchSnapshot()
  })
})
