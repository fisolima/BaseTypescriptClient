import { IInputEventObserver } from "../interfaces/IInputEventObserver";
import { IInputEventDispatcher } from "../interfaces/IInputEventDispatcher";
import { BaseService } from "./BaseService";
import { ILogger } from "../utils/ILogger";
import { IConfigurationManager } from "../interfaces/IConfigurationManager";

export abstract class BaseEventDispatcher<TEvent> extends BaseService implements IInputEventDispatcher<TEvent> {
    private _eventId : string;
    protected _observers: IInputEventObserver<TEvent>[] = [];

    constructor(config: IConfigurationManager, logger: ILogger, eventName: string) {
        super(config, logger);

        this._eventId = eventName;

        window.addEventListener(this._eventId, (event: any) => {
            event.preventDefault();
            for (let i=this._observers.length; i-->0;)
                this._observers[i].OnEvent(this._eventId, event);
        }, false);
    }

    public Subscribe(observer: IInputEventObserver<TEvent>): void {
        if (!observer)
            this.Throw("Observer is undefined");

        this._observers.push(observer);
    }
}