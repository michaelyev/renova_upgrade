import { ReactNode } from 'react';


interface IInputProps {
  type?: string;
  styles: string;
  button?: () => ReactNode;
}

export interface IInputType {
  footer?: IInputProps;
  selection?: IInputProps;
  productSearch?: IInputProps;
  contactForm?: IInputProps;
}