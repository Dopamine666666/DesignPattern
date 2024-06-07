import { StateBase } from "../StateBase";
import { StateType } from "../StateEnum";

export class StateHomeWork extends StateBase {
  
  public getType(): StateType {
    return StateType.HomeWork;
  }

  public onEnter(): void {
    
  }

  public onExit(): void {
    
  }

  public onUpdate(dt: number): void {
    
  }
}