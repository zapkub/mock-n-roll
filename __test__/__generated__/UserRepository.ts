import { isEqual } from "lodash";
import { Elastic, User, CreateInput, CreateManyInput, CreateAdminInput, Admin, RoleInfo } from "../abstract";
import { AccessorDeclaration } from "../../node_modules/ts-morph/dist-declarations/ts-morph";

export class __mock__UserRepository {
    called: any[] = [];

    on(name: string, ...args: any) {
        const result = this.called.find(c => {
            const calls = [name, ...args]
            return isEqual(c[0], calls)
        })
        if (!result) {
            throw new Error(`call ${name} with ${JSON.stringify(args)} does not exists`)
        }
        return result[1]
    }

    mocks = {
        init: () => {
            return {
                toReturn: () => { this.called.push([["init",]]) }
            }
        },
        bootstrap: () => {
            return {
                toReturn: (returnArg: void) => { this.called.push([["bootstrap",], returnArg]) }
            }
        },
        bind: (input: Promise<Elastic>) => {
            return {
                toReturn: (returnArg: void) => { this.called.push([["bind", input], returnArg]) }
            }
        },
        randomUser: () => {
            return {
                toReturn: (returnArg: User) => { this.called.push([["randomUser",], returnArg]) }
            }
        },
        createUser: (input: CreateInput) => {
            return {
                toReturn: (returnArg: Promise<User>) => { this.called.push([["createUser", input], returnArg]) }
            }
        },
        createManyUser: (...inputs: CreateManyInput[]) => {
            return {
                toReturn: (returnArg: Promise<User[]>) => { this.called.push([["createManyUser", ...inputs], returnArg]) }
            }
        },
        createManyAdmin: (...inputs: CreateAdminInput[]) => {
            return {
                toReturn: (returnArg: Promise<Admin[]>) => { this.called.push([["createManyAdmin", ...inputs], returnArg]) }
            }
        },
        delimiter: (d: AccessorDeclaration) => {
            return {
                toReturn: (returnArg: AccessorDeclaration) => { this.called.push([["delimiter", d], returnArg]) }
            }
        },
        gen: (input: string) => {
            return {
                toReturn: (returnArg: User) => { this.called.push([["gen", input], returnArg]) }
            }
        },
        generic: <T>(input: T) => {
            return {
                toReturn: <T>(returnArg: T) => { this.called.push([["generic", input], returnArg]) }
            }
        },
        delime: (d: { role: RoleInfo }) => {
            return {
                toReturn: (returnArg: AccessorDeclaration) => { this.called.push([["delime", d], returnArg]) }
            }
        }
    };

    init() {
        return this.on("init")
    }

    bootstrap(): void {
        return this.on("bootstrap")
    }

    bind(input: Promise<Elastic>): void {
        return this.on("bind", input)
    }

    randomUser(): User {
        return this.on("randomUser")
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

    delimiter(d: AccessorDeclaration): AccessorDeclaration {
        return this.on("delimiter", d)
    }

    gen = (input: string) => {
        return this.on("gen", input)
    };
    defaultRole: string;
    generic = <T>(input: T) => {
        return this.on("generic", input)
    };
    delime = (d: { role: RoleInfo }) => {
        return this.on("delime", d)
    };
}
