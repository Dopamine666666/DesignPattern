import { StateBase } from "./StateBase";
import { StateType } from "./StateEnum";

export class  FSM {
  private stateMap: Map<StateType, StateBase> = new Map<StateType, StateBase>();
  private currentState: StateBase;

  public setState(state: StateType) {
    this.currentState = this.stateMap.get(state)!;
  }

  public getState(state: StateType) {
    return this.currentState;
  }

  public transitionState(state: StateType) {
    if(this.currentState) {
      this.currentState.onExit();
    }

    this.currentState = this.stateMap.get(state)!;
    this.currentState.onEnter();
  }

  public onUpdate(dt: number) {
    if(this.currentState) {
      this.currentState.onUpdate(dt);
    }
  }
}