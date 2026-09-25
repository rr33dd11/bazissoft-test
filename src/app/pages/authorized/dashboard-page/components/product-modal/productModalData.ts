import {ProductValue} from '@shared/types/product';

export type ProductModalDataType = {
  productData: ProductValue | null;
  onSave: (value: ProductValue) => void;
  buttonText: string;
}

