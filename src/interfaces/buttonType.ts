type buttonType = 'feedback' | 'request' | 'browseRight' | 'browseLeft' | 'browse';

export interface IButtonType {
  type: buttonType;
  imageName?: string;
  id?: string;
}

export interface IButtonTypeData {
  text: string;
  icon?: boolean;
  style: any;
}
