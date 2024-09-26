export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface ProductOptions {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
  quantity?: number;
}

export interface ProductState {
  showCart: boolean;
  products: ProductOptions[];
  cart: ProductOptions[];
  addProducts: (products: ProductOptions[]) => void;
  selectedProducts: (product: ProductOptions) => void;
  changeCartState: () => void;
}

export interface HeaderProps {
  cartCount: number;
  changeCartState: () => void;
  showCart: boolean;
}

export interface ListCardsProps {
  productsStore: ProductState;
}

export interface CardsProps {
  thumbnail: string;
  price: number;
  title: string;
  addOnCart: () => void;
}
