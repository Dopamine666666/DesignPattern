import { StateBase } from "../StateBase";
import { StateType } from "../StateEnum";

export class StateRest extends StateBase {

  public getType(): StateType {
    return StateType.Rest;
  }

  public onEnter(): void {
    
  }

  public onExit(): void {
    
  }

  public onUpdate(dt: number): void {
    
  }
}