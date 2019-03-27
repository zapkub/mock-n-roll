import { isEqual } from "lodash";

export class __mock__Admin {
    called: any[] = [];

    on(name: string, ...args) {
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
        setRole: () => {
            return {
                toReturn: (returnArg: string) => { this.called.push([["setRole",], returnArg]) }
            }
        }
    };

    setRole(): string {
        return this.on("setRole")
    }

    role: string;
}
