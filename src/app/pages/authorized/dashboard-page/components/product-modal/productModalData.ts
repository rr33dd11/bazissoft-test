import {ProductValue} from '@shared/types/product';

export type ProductModalData = {
  productData: ProductValue | null;
  onSave: (value: ProductValue) => void;
  buttonText: string;
}

