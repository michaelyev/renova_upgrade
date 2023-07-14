export interface IProduct {
  id: number;
  productName: string;
  title: string;
  productCode: string;
  image: string;
  status: string;
  description: string;
  rating: number;
  price: string | number;
  discountedPrice: number;
  characteristics: {
    manufacturer: string;
    model: string;
    size: string;
    purpose: string;
    surface: string;
    design: string;
    material: string;
    type: string;
  };
}
