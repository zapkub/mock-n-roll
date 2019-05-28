import * as lodash_1 from "lodash";
import { Elastic, User, CreateInput, CreateManyInput, CreateAdminInput, Admin, RoleInfo } from "../abstract";
import { AccessorDeclaration } from "../../node_modules/ts-morph/dist-declarations/ts-morph";

const serialize = require('node-serialize')

export class __mock__UserRepository {
    called: any[] = [];
    on = (calls, methodName, ...args) => {
        const call = [methodName, serialize.serialize(args)];
        const result = lodash_1.reverse(calls).find(c => {
            if (c[0][0] !== methodName) {
                return false;
            }
            const equalAssert = lodash_1.isEqual(c[0], call);
            if (equalAssert) {
                return equalAssert;
            }
            const mockAssert = (c[1]);
            const callAssert = args;
            if (Array.isArray(callAssert)) {
                return callAssert.reduce((current, next, i) => {
                    if (mockAssert[i] === exports.Any) {
                        return current && true;
                    }
                    else {
                        return current && (serialize.serialize(next) === serialize.serialize(mockAssert[i]));
                    }
                }, true);
            }
            return false;
        });
        if (!result) {
            throw new Error(`call ${methodName} with ${JSON.stringify(serialize.serialize({ parameters: args }), null, " ")} does not exists`);
        }
        return result[2];
    };
    addCalled = (calls, methodName, ...args) => {
        return (returnValue) => {
            calls.push([[methodName, serialize.serialize(args)], args, returnValue]);
        };
    };
    mocks = {
        init: () => {
            return {
                toReturn: () => { this.addCalled(this.called, "init")(undefined) }
            }
        },
        bootstrap: () => {
            return {
                toReturn: (returnArg: void) => { this.addCalled(this.called, "bootstrap")(returnArg) }
            }
        },
        bind: (input: Promise<Elastic>) => {
            return {
                toReturn: (returnArg: void) => { this.addCalled(this.called, "bind", input)(returnArg) }
            }
        },
        randomUser: () => {
            return {
                toReturn: (returnArg: User) => { this.addCalled(this.called, "randomUser")(returnArg) }
            }
        },
        createUser: (input: CreateInput) => {
            return {
                toReturn: (returnArg: User) => { this.addCalled(this.called, "createUser", input)(Promise.resolve(returnArg)) }
            }
        },
        createManyUser: (...inputs: CreateManyInput[]) => {
            return {
                toReturn: (returnArg: User[]) => { this.addCalled(this.called, "createManyUser", ...inputs)(Promise.resolve(returnArg)) }
            }
        },
        createManyAdmin: (...inputs: CreateAdminInput[]) => {
            return {
                toReturn: (returnArg: Admin[]) => { this.addCalled(this.called, "createManyAdmin", ...inputs)(Promise.resolve(returnArg)) }
            }
        },
        delimiter: (d: AccessorDeclaration) => {
            return {
                toReturn: (returnArg: AccessorDeclaration) => { this.addCalled(this.called, "delimiter", d)(returnArg) }
            }
        },
        gen: (input: string) => {
            return {
                toReturn: (returnArg: User) => { this.addCalled(this.called, "gen", input)(returnArg) }
            }
        },
        callback: (cb: () => void) => {
            return {
                toReturn: (returnArg: string) => { this.addCalled(this.called, "callback", cb)(returnArg) }
            }
        },
        generic: <T>(input: T) => {
            return {
                toReturn: <T>(returnArg: T) => { this.addCalled(this.called, "generic", input)(returnArg) }
            }
        },
        delime: (d: { role: RoleInfo }) => {
            return {
                toReturn: (returnArg: AccessorDeclaration) => { this.addCalled(this.called, "delime", d)(returnArg) }
            }
        }
    };

    init() {
        return this.on(this.called, "init")
    }

    bootstrap(): void {
        return this.on(this.called, "bootstrap")
    }

    bind(input: Promise<Elastic>): void {
        return this.on(this.called, "bind", input)
    }

    randomUser(): User {
        return this.on(this.called, "randomUser")
    }

    createUser(input: CreateInput): Promise<User> {
        return this.on(this.called, "createUser", input)
    }

    createManyUser(...inputs: CreateManyInput[]): Promise<User[]> {
        return this.on(this.called, "createManyUser", ...inputs)
    }

    createManyAdmin(...inputs: CreateAdminInput[]): Promise<Admin[]> {
        return this.on(this.called, "createManyAdmin", ...inputs)
    }

    delimiter(d: AccessorDeclaration): AccessorDeclaration {
        return this.on(this.called, "delimiter", d)
    }

    gen = (input: string) => {
        return this.on(this.called, "gen", input)
    };
    callback = (cb: () => void) => {
        return this.on(this.called, "callback", cb)
    };
    defaultRole: string;
    generic = <T>(input: T) => {
        return this.on(this.called, "generic", input)
    };
    delime = (d: { role: RoleInfo }) => {
        return this.on(this.called, "delime", d)
    };
}
