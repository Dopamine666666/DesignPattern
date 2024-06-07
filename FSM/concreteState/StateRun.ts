import { StateBase } from "../StateBase";
import { StateType } from "../FSMEnum";

export class StateRun extends StateBase {

  public getType(): StateType {
    return StateType.RUN;
  }

  public onEnter(): void {
    console.log('enter run state');
  }

  public onExit(): void {
    console.log('exit run state');    
  }

  public onUpdate(dt: number): void {
    console.log('now in run state');
  }
}