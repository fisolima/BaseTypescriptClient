import { ILogger } from "./ILogger";

export class ConsoleLogger implements ILogger {
    constructor() {

    }

    Info(value: any): void {
        console.info(value);
    }

    Warning(value: any): void {
        console.warn(value);
    }

    Error(value: any): void {
        console.error(value);
    }
}