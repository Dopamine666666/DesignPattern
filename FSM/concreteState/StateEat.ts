import { StateBase } from "../StateBase";
import { StateType } from "../StateEnum";

export class StateEat extends StateBase {

  public getType(): StateType {
    return StateType.Eat;
  }

  public onEnter(): void {
    
  }

  public onExit(): void {
    
  }

  public onUpdate(dt: number): void {
    
  }
}