# Mock 'N' Roll 🤘🏼
The Typescript interface mock generator. It will useful for Dependency Injection, Inversion and also Clean architecture onion layer testing and more !

# Usage
```
mnroll --path <path_to_ts_file> --out <result_folder:./__generated__> --name <name_of_class_or_interface>
```


# Basic test
```typescript
// Source interface
export interface User {
  id: string
  name: string
}
export interface UserRepository {
  randomUser(): User
}
```

```typescript
// Test
  it('Should return promise of object type correctly', async () => {
    const u = new UserRepository()
    u.mocks.randomUser().toReturn({ id: 'TEST', name: 'TEST' })
    const result = u.randomUser()
    expect(result).toEqual({ id: 'TEST', name: 'TEST' })
  })
```

# License
MIT.