import { IInputEventObserver } from "./IInputEventObserver";

export interface IInputEventDispatcher<TEvent> {
    Subscribe(observer:IInputEventObserver<TEvent>) : void;
}