import { IConfigurationManager } from "../interfaces/IConfigurationManager";

declare var __ENVIRONMENT__: string;

export class ConfigurationManager implements IConfigurationManager{
    constructor() {        
    }

    get Environment():string {
        return __ENVIRONMENT__;
    }
}