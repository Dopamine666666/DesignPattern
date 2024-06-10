import { StateType } from "./FSMEnum";
import { Transition } from "./Transition";

export abstract class StateBase {
  protected currentState: StateType;
  protected transitionArr: Transition[];
  

  public abstract onEnter(): void;
  public abstract onExit(): void;
  public abstract onUpdate(dt: number): void;

  public abstract getType(): StateType;

  public getTransitionArr() {
    return this.transitionArr;
  }
}