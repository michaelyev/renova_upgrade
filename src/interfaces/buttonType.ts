export interface IButtonType {
  browse: IButtonTypeData;
  browseRight: IButtonTypeData;
  browseLeft: IButtonTypeData;
  feedback: IButtonTypeData;
}

export interface IButtonTypeData {
  text: string;
  icon?: boolean;
  style: any;
}
