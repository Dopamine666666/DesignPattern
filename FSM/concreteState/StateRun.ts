import { StateBase } from "../StateBase";
import { StateType } from "../StateEnum";

export class StateRun extends StateBase {

  public getType(): StateType {
    return StateType.Run;
  }

  public onEnter(): void {
    
  }

  public onExit(): void {
    
  }

  public onUpdate(dt: number): void {
    
  }
}