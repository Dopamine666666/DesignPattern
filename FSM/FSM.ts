import { LogicalExpression, ParamName, ParameterCompareType, ParameterType, StateType } from "./FSMEnum";
import { Parameter } from "./Parameter";
import { StateBase } from "./StateBase";
import { Transition } from "./Transition";
import { StateEat } from "./concreteState/StateEat";
import { StateHomeWork } from "./concreteState/StateHomeWork";
import { StateRest } from "./concreteState/StateRest";
import { StateRun } from "./concreteState/StateRun";

export class FSM {
  private stateMap: Map<StateType, StateBase>;
  private currentState: StateBase;
  private parameterMap: Map<ParamName, Parameter> = new Map();

  public onloadStateMachine() {
    this.stateMap = new Map([
      [StateType.EAT, new StateEat()],
      [StateType.RUN, new StateRun()],
      [StateType.REST, new StateRest()],
      [StateType.HOMEWORK, new StateHomeWork()],
    ]);
  }

  public transitionState(state: StateType) {
    if(this.currentState != null) {
      this.currentState.onExit();
    }
    this.currentState = this.stateMap.get(state)!;
    this.currentState.onEnter();
    // this.currentState.onUpdate(0);
  }

  private onUpdate(dt: number) {
    if(this.currentState != null) this.currentState.onUpdate(dt);
    for(let i = 0; i < this.currentState.getTransitionArr().length; i++) {
      const trans = this.currentState.getTransitionArr()[i];
      
      if(trans.canTransition() || this.CompareTransition(trans)) {
        this.transitionState(trans.toState);
      }
    }
  }

  private CompareTransition(trans: Transition) {
    let res0 = trans.logicalExpression == LogicalExpression.AND ? true : false;
    for(let i = 0; i < trans.parameterArr.length; i++) {
      const param = trans.parameterArr[i];
      const beCompared = this.parameterMap.get(param.name);
      let res1 = param.valueType == ParameterType.NUMBER ? this.checkNumberType(param, beCompared?.numValue!) : this.checkStringType(param, beCompared?.strValue!);
      if(trans.logicalExpression == LogicalExpression.AND) {
        if(!res1) {
          res0 = false;
          break;
        };
      }else {
        if(res1) {
          res0 = true;
          break;
        }
      }
    }
    return res0;
  }

  private checkNumberType(param: Parameter, beCompared: number) {
    switch(param.compareType) {
     case ParameterCompareType.GREATER:
       return beCompared > param.numValue;
     case ParameterCompareType.LESS:
       return beCompared < param.numValue;
     case ParameterCompareType.EQUAL:
       return beCompared == param.numValue;
     case ParameterCompareType.NOT_EQUAL:
       return beCompared != param.numValue;
     case ParameterCompareType.GREATER_EQUAL:
       return beCompared >= param.numValue;
     case ParameterCompareType.LESS_EQUAL:
       return beCompared <= param.numValue;          
    }
  }

  private checkStringType(param: Parameter, beCompared: string) {
    if(param.compareType == ParameterCompareType.EQUAL) return beCompared == param.strValue;
    if(param.compareType == ParameterCompareType.NOT_EQUAL) return beCompared != param.strValue;
    console.log('parameter type error');
    return false;
  }

  private updateContextParam(paramName: ParamName, paramValue: number | string) {
    const param = this.getParameter(paramName);
    if(typeof paramValue == 'number') {
      param!.valueType = ParameterType.NUMBER;
      param!.numValue = paramValue;
    }else {
      param!.valueType = ParameterType.STRING;
      param!.strValue = paramValue;
    }
  }

  private getParameter(paramName: ParamName) {
    if(this.parameterMap.has(paramName)) return this.parameterMap.get(paramName);
    return new Parameter()
  }
}