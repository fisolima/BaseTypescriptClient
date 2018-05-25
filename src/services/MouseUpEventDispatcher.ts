import { ILogger } from "../utils/ILogger";
import { IConfigurationManager } from "../interfaces/IConfigurationManager";
import { BaseEventDispatcher } from "./BaseEventDispatcher";

export class MouseUpEventDispatcher extends BaseEventDispatcher<MouseEvent> {
    constructor(config: IConfigurationManager, logger: ILogger) {
        super(config, logger, 'mouseup');
    }
}