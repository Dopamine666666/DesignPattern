import { StateType } from "./FSMEnum";

export abstract class StateBase {
  protected currentState: StateType;

  public abstract onEnter(): void;
  public abstract onExit(): void;
  public abstract onUpdate(dt: number): void;

  public abstract getType(): StateType;
}