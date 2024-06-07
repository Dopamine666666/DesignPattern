import { StateType } from "./FSMEnum";
import { Parameter } from "./Parameter";

export class Transition {
  private transCallBack: (() => boolean) | null = null;
  private parameterArr: Parameter[] = [];
  
  private toState: StateType;

  public transition(toState: StateType, paramArr: Parameter[],transCallBack: () => boolean) {
    this.toState = toState;
    this.parameterArr = [...paramArr];
    if(transCallBack) this.transCallBack = transCallBack;
  }

  public canTransition(): boolean {
    if(!this.transCallBack) return false;

    return this.transCallBack();
  }
}