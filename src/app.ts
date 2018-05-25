import { ILogger } from './utils/ILogger';
import { ConsoleLogger } from './utils/ConsoleLogger';
import { ConfigurationManager } from './services/ConfigurationManager';
import { KeyDownEventDispatcher } from './services/KeyDownEventDispatcher';
import { KeyUpEventDispatcher } from './services/KeyUpEventDispatcher';
import { MouseDownEventDispatcher } from './services/MouseDownEventDispatcher';
import { MouseUpEventDispatcher } from './services/MouseUpEventDispatcher';
import { MouseMoveEventDispatcher } from './services/MouseMoveEventDispatcher';
import { IInputEventObserver } from './interfaces/IInputEventObserver';
import { IConfigurationManager } from './interfaces/IConfigurationManager';
import * as $ from 'jquery';

export class App implements IInputEventObserver<KeyboardEvent>{
    private _keyDownDispatcher : KeyDownEventDispatcher;
    private _keyUpDispatcher : KeyUpEventDispatcher;
    private _mouseDownDispatcher : MouseDownEventDispatcher;
    private _mouseUpDispatcher : MouseUpEventDispatcher;
    private _mouseMoveDispatcher : MouseMoveEventDispatcher;
    private _config: IConfigurationManager;
    private _logger : ILogger;

    constructor() {
        this._logger = new ConsoleLogger();
        this._config = new ConfigurationManager();
        this._keyDownDispatcher = new KeyDownEventDispatcher(this._config, this._logger);
        this._keyUpDispatcher = new KeyUpEventDispatcher(this._config, this._logger);
        this._mouseDownDispatcher = new MouseDownEventDispatcher(this._config, this._logger);
        this._mouseUpDispatcher = new MouseUpEventDispatcher(this._config, this._logger);
        this._mouseMoveDispatcher = new MouseMoveEventDispatcher(this._config, this._logger);

        this._keyDownDispatcher.Subscribe(this);
    }

    Startup() {
        this._logger.Info(this._config.Environment);

        $(document).ready(() => {    
            this._logger.Info('App.Startup!');
        });
    }

    OnEvent(eventId: string, event: KeyboardEvent): void {
        this._logger.Info(eventId + '\n' + event.keyCode);
    }
}