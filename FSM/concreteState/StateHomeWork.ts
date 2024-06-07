import { StateBase } from "../StateBase";
import { StateType } from "../FSMEnum";

export class StateHomeWork extends StateBase {
  
  public getType(): StateType {
    return StateType.HOMEWORK;
  }

  public onEnter(): void {
    console.log('enter homeWork state');
  }

  public onExit(): void {
    console.log('exit homeWork state');
  }

  public onUpdate(dt: number): void {
    console.log('now in homeWork state');
  }
}