import { AccessorDeclaration } from 'ts-morph'
import { bind } from 'jest-each';
export interface User {
  id: string
  name: string
}
export interface Admin extends User {
  role: string

  setRole(): string
}

export interface RoleInfo {
  name: string
}

export type CreateInput = Pick<User, 'name'>
export type CreateManyInput = Pick<User, 'name'>
export type CreateAdminInput = Pick<Admin, 'name' | 'role'>

export class Elastic {
  init() {

  }
  searchUser(): User {
    return {
      id: 'TEST',
      name: 'TEST'
    }
  }
}

export interface UserRepository {

  init()

  bootstrap(): void

  bind(input: Promise<Elastic>): void

  randomUser(): User
  createUser(input: CreateInput): Promise<User>
  createManyUser(...inputs: CreateManyInput[]): Promise<User[]>
  createManyAdmin(...inputs: CreateAdminInput[]): Promise<Admin[]>

  gen: (input: string) => User

  callback: (cb: () => void) => string

  defaultRole: string
  generic: <T>(input: T) => T
  delimiter(d: AccessorDeclaration): AccessorDeclaration
  delime: (d: { role: RoleInfo }) => AccessorDeclaration
}
