import { LogicalExpression, ParameterCompareType, ParameterType, StateType } from "./FSMEnum";
import { Parameter } from "./Parameter";

export class Transition {
  public toState: StateType;
  public parameterArr: Parameter[];
  public logicalExpression: LogicalExpression;
  private transCallBack: () => boolean;

  public init(to: StateType, paramArr: Parameter[],logicalType: LogicalExpression = LogicalExpression.AND, transCallBack?: () => boolean) {
    this.toState = to;
    this.parameterArr = [...paramArr];
    this.logicalExpression = logicalType;
    if(transCallBack) this.transCallBack = transCallBack;
  }

  // private getValue() {
  //   switch(this.parameter.valueType) {
  //     case ParameterType.STRING:
  //       return this.parameter.strValue;
  //     case ParameterType.NUMBER:
  //       return this.parameter.numValue; 
  //     // case ParameterType.BOOLEAN:
  //     //   return this.boolValue;
  //     // break;
  //     default:
  //       console.log('parameter type error');
  //     break;    
  //   }
  // }

  // private compare(beCompared: number | boolean | string) {
  //   if(typeof beCompared != typeof this.getValue()) {
  //     console.log('parameter type error');
  //     return false;
  //   }
  //   if(this.parameter.valueType == ParameterType.NUMBER) return this.checkNumberType(beCompared as number);
  //   return this.checkStringType(beCompared as string);
  // }

  // private checkNumberType(beCompared: number) {
  //    switch(this.parameter.compareType) {
  //     case ParameterCompareType.GREATER:
  //       return beCompared > this.parameter.numValue;
  //     case ParameterCompareType.LESS:
  //       return beCompared < this.parameter.numValue;
  //     case ParameterCompareType.EQUAL:
  //       return beCompared == this.parameter.numValue;
  //     case ParameterCompareType.NOT_EQUAL:
  //       return beCompared != this.parameter.numValue;
  //     case ParameterCompareType.GREATER_EQUAL:
  //       return beCompared >= this.parameter.numValue;
  //     case ParameterCompareType.LESS_EQUAL:
  //       return beCompared <= this.parameter.numValue;          
  //    }
  // }

  // private checkStringType(beCompared: string) {
  //   if(this.parameter.compareType == ParameterCompareType.EQUAL) return beCompared == this.parameter.strValue;
  //   if(this.parameter.compareType == ParameterCompareType.NOT_EQUAL) return beCompared != this.parameter.strValue;
  //   console.log('parameter type error');
  //   return false;
  // }

  public canTransition() {
    if(!this.transCallBack) return false;
    return this.transCallBack();
  }
}