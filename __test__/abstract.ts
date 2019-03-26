export interface User {
  id: string
  name: string
}
export interface Admin extends User {
  role: string
}

export type CreateInput = Pick<User, 'name'>
export type CreateManyInput = Pick<User, 'name'>
export type CreateAdminInput = Pick<Admin, 'name' | 'role'>

export interface UserRepository {
  randomUser(): User
  createUser(input: CreateInput): Promise<User>
  createManyUser(...inputs: CreateManyInput[]): Promise<User[]>
  createManyAdmin(...inputs: CreateAdminInput[]): Promise<Admin[]>

  gen: (input: string) => User
}
