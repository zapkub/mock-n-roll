import { isEqual } from "lodash";
import { CreateInput, User, CreateManyInput, CreateAdminInput, Admin } from "../abstract";

export class UserRepository {
    mocks = {
        createUser: (input: CreateInput) => {
            return {
                toReturn: (returnArg: Promise<User>) => {
                    this.called.push([["createUser", input], returnArg])
                }
            }        
},
        createManyUser: (...inputs: CreateManyInput[]) => {
            return {
                toReturn: (returnArg: Promise<User[]>) => {
                    this.called.push([["createManyUser", ...inputs], returnArg])
                }
            }        
},
        createManyAdmin: (...inputs: CreateAdminInput[]) => {
            return {
                toReturn: (returnArg: Promise<Admin[]>) => {
                    this.called.push([["createManyAdmin", ...inputs], returnArg])
                }
            }        
}
    };
    called: any[] = [];

    on(name: string, ...args) {
        const result = this.called.find(c => {
            const calls = [name, ...args]
            return isEqual(c[0], calls)
        })
        if (!result) {
            throw new Error(`call ${name} with ${JSON.stringify(args)} is not exists`)
        }
        return result[1]
    }

    createUser(input: CreateInput): Promise<User> {
        return this.on("createUser", input)
    }

    createManyUser(...inputs: CreateManyInput[]): Promise<User[]> {
        return this.on("createManyUser", ...inputs)
    }

    createManyAdmin(...inputs: CreateAdminInput[]): Promise<Admin[]> {
        return this.on("createManyAdmin", ...inputs)
    }
}
