import { ILogger } from "../utils/ILogger";
import { IConfigurationManager } from "../interfaces/IConfigurationManager";

export abstract class BaseService {
    protected _logger: ILogger;
    protected _config: IConfigurationManager;

    constructor(config: IConfigurationManager, logger: ILogger) {
        this._logger = logger;
        this._config = config;
    }

    public Throw(message:string) : void {
        this._logger.Error(message);

        throw new Error(message);
    }
}