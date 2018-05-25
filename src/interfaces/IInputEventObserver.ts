export interface IInputEventObserver<TEvent> {
    OnEvent(eventId:string, event:TEvent) : void;
}