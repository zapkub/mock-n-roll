import { isEqual } from "lodash";
import { User } from "../abstract";

export class __mock__Elastic {
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
        searchUser: () => {
            return {
                toReturn: (returnArg: User) => { this.called.push([["searchUser",], returnArg]) }
            }
        }
    };

    searchUser(): User {
        return this.on("searchUser")
    }
}
