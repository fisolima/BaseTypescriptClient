import { ILogger } from "../utils/ILogger";
import { IConfigurationManager } from "../interfaces/IConfigurationManager";
import { BaseEventDispatcher } from "./BaseEventDispatcher";

export class KeyDownEventDispatcher extends BaseEventDispatcher<KeyboardEvent> {
    constructor(config: IConfigurationManager, logger: ILogger) {
        super(config, logger, 'keydown');
    }
}