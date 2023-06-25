export interface IButtonType {
  browse: IButtonTypeData;
  feedback: IButtonTypeData;
}

export interface IButtonTypeData {
  text: string;
  icon?: boolean;
  style: any;
}
