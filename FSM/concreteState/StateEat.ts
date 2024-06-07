import { StateBase } from "../StateBase";
import { StateType } from "../FSMEnum";

export class StateEat extends StateBase {

  public getType(): StateType {
    return StateType.EAT;
  }

  public onEnter(): void {
    console.log('enter eat state');
  }

  public onExit(): void {
    console.log('exit eat state');
  }

  public onUpdate(dt: number): void {
    console.log('now in eat state');
  }
}