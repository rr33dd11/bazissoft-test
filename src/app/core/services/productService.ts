import {inject, Injectable, signal} from '@angular/core';
import {Product, ProductValue} from '@shared/types/product';
import {StorageService} from './storageService';
import {STORAGE_KEYS} from '@shared/consts/storage';
import {productsData} from '@shared/data/productsData';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  protected readonly storageService = inject(StorageService);
  readonly products = signal<Product[]>(this.getProducts());

  getProducts(): Product[] {
    const products = this.storageService.get<Product[]>(STORAGE_KEYS.products);
    if (products == null) {
      this.storageService.set<Product[]>(STORAGE_KEYS.products, productsData)
      return productsData;
    }
    return products;
  }

  addProduct(product: ProductValue) {
    const products = this.getProducts()
    const id = products.length
      ? Math.max(...products.map(p => p.id)) + 1
      : 1;
    const updatedProducts = [
      ...products,
      {id, ...product},
    ];

    this.products.set(updatedProducts);
    this.storageService.set(
      STORAGE_KEYS.products,
      updatedProducts,
    );}

  editProduct(id: number, productValue: ProductValue) {
    const products = this.getProducts();
    const updatedProducts = products.map(p => p.id == id ? {id, ...productValue} : p)
    this.products.set(updatedProducts);
    this.storageService.set<Product[]>(STORAGE_KEYS.products, updatedProducts);
  }

  deleteProduct(id: number) {
    const products = this.getProducts();
    const updatedProducts = products.filter(p => p.id != id);
    this.products.set(updatedProducts);
    this.storageService.set<Product[]>(STORAGE_KEYS.products, updatedProducts);
  }
}
