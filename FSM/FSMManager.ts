import { StateType } from "./FSMEnum";
import { Parameter } from "./Parameter";
import { StateBase } from "./StateBase";
import { StateEat } from "./concreteState/StateEat";
import { StateHomeWork } from "./concreteState/StateHomeWork";
import { StateRest } from "./concreteState/StateRest";
import { StateRun } from "./concreteState/StateRun";

export class FSMManager {
  private stateMap: Map<StateType, StateBase>;
  private currentState: StateBase;
  private parameterMap: Map<string, Parameter> = new Map();

  public onloadStateMachine() {
    this.stateMap = new Map([
      [StateType.EAT, new StateEat()],
      [StateType.RUN, new StateRun()],
      [StateType.REST, new StateRest()],
      [StateType.HOMEWORK, new StateHomeWork()],
    ]);

    this.stateMap.forEach((v, k, map) => {
      
    })
  }

  public transitionState(state: StateType) {
    if(this.currentState != null) {
      this.currentState.onExit();
    }
    this.currentState = this.stateMap.get(state)!;
    this.currentState.onEnter();
    this.currentState.onUpdate(0);
  }

  private onUpdate(dt: number) {
    if(this.currentState != null) this.currentState.onUpdate(dt);
    
  }
}