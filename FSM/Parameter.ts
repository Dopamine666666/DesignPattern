import { ParamName, ParameterCompareType, ParameterType } from "./FSMEnum";

export class Parameter {
  public name: ParamName;
  public compareType: ParameterCompareType;
  public valueType: ParameterType;
  public numValue: number;
  // public boolValue: boolean;
  public strValue: string;

  constructor(compareType?: ParameterCompareType, valueType?: ParameterType, numValue?: number, strValue?: string) {
    if(compareType) this.compareType = compareType;
    if(valueType) this.valueType = valueType;
    if(numValue)  this.numValue = numValue;
    if(strValue)  this.strValue = strValue;
  }

}