import { isEqual } from "lodash";

export class Admin {
    mocks = {};
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
}
