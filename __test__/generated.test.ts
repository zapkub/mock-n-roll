import { UserRepository } from './__generated__/UserRepository'

describe('Generated result testing', () => {
  const u = new UserRepository()
  it('Should return promise of array type correctly', async () => {
    u.mocks
      .createManyAdmin({ name: 'TEST', role: 'role' })
      .toReturn(Promise.resolve([]))
    const result = await u.createManyAdmin({ name: 'TEST', role: 'role' })
    expect(result).toEqual([])
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
})
