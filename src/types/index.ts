export type TeeColorId = 'black' | 'cream' | 'wine' | 'forest' | 'white' | 'blue';

export interface TeeColor {
  id: TeeColorId;
  name: string;
  hex: string;
  clothHex: string;
  image: string;
  accent: string;
}

export type TeeSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type TeeView = 'front' | 'back' | 'left' | 'right';

export interface GraphicLayer {
  text: string;
  textColor: string;
  textFont: 'serif' | 'sans' | 'mono';
  textSize: number;
  imageSrc: string | null;
  imageName: string | null;
  posX: number; // percentage offset -50% to 50%
  posY: number; // percentage offset -50% to 50%
  scale: number; // 0.5 to 2.0
  rotation: number; // -180 to 180 degrees
}

export interface CustomizationState {
  color: TeeColor;
  size: TeeSize;
  activeView: TeeView;
  layers: {
    front: GraphicLayer;
    back: GraphicLayer;
    left: GraphicLayer;
    right: GraphicLayer;
  };
  basePrice: number;
  customizationFee: number;
}

export interface CartItem {
  id: string;
  title: string;
  color: TeeColor;
  size: TeeSize;
  price: number;
  quantity: number;
  activeView: TeeView;
  customText?: string;
  hasArtwork: boolean;
  image: string;
}

export interface CatalogProduct {
  id: string;
  title: string;
  subtitle: string;
  silhouette: string;
  gsm: number;
  price: number;
  availableColors: TeeColor[];
  defaultColor: TeeColor;
  primaryImage: string;
  secondaryImage: string;
  details: string[];
}
