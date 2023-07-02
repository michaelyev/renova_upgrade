import { BrandLogos } from './manufacturers';

export interface INavTab {
  id: string;
  text: string;
}

export interface INavTabsConfig {
  products: INavTab[];
  manufacturers: INavTab[];
  portfolio: INavTab[];
  productSort: INavTab[];
}
