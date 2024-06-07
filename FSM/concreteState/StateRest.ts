import { StateBase } from "../StateBase";
import { StateType } from "../FSMEnum";

export class StateRest extends StateBase {

  public getType(): StateType {
    return StateType.REST;
  }

  public onEnter(): void {
    console.log('enter rest state');
  }

  public onExit(): void {
    console.log('exit rest state');
  }

  public onUpdate(dt: number): void {
    console.log('now in rest state');
  }
}