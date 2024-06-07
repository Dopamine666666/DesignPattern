import { ParameterCompare, ParameterType } from "./FSMEnum";

export class Parameter {
  public name: string;
  public type: ParameterType;
  public compare: ParameterCompare;
  public numValue: number;
  public boolValue: boolean;
  public strValue: string;
}