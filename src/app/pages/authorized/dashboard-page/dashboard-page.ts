import {Component, inject} from '@angular/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton, TuiDataList, TuiDialogService, TuiDropdown, TuiSizeS} from '@taiga-ui/core';
import {Product, ProductValue} from '@shared/types/product';
import {ProductService} from '@core/services/productService';
import {buttonNames, dashboardPageTexts} from '@shared/consts/texts';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {ProductModal} from './components/product-modal/product-modal';
import {DeleteProductModal} from './components/delete-product-modal/delete-product-modal';
@Component({
  standalone: true,
  imports: [TuiTable, TuiDataList, TuiDataListDropdownManager, TuiDropdown, TuiButton],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.scss',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  protected readonly productService = inject(ProductService);
  protected readonly products = this.productService.products;
  protected openedProductId: number | null = null;
  protected size: TuiSizeS = 's';
  protected readonly productTableColumns = dashboardPageTexts.productTableColumns;
  private readonly dialogs = inject(TuiDialogService);
  protected readonly actions = dashboardPageTexts.actions;
  protected readonly productModalTexts = dashboardPageTexts.productModal;
  protected readonly deleteModalTexts = dashboardPageTexts.deleteModal;

  protected addProduct(): void {
    this.dialogs.open(
      new PolymorpheusComponent(ProductModal),
      {
        size: 's',
        label: this.productModalTexts.headerCreate,
        data: {
          buttonText: buttonNames.create,
          productData: null,
          onSave: (value: ProductValue) => {
            this.productService.addProduct(value);
          },
        }
      },
    ).subscribe();
  }

  protected editProduct(product: Product): void {
    this.openedProductId = null
    const {id, ...productValue } = product
    this.dialogs.open(
      new PolymorpheusComponent(ProductModal),
      {
        size: 's',
        label: this.productModalTexts.headerEdit,
        data: {
          buttonText: buttonNames.edit,
          productData: productValue,
          onSave: (value: ProductValue) => {
            this.productService.editProduct(id, value);
          },
        }
      },
    ).subscribe();
  }

  protected deleteProduct(productId: number): void {
    this.openedProductId = null
    this.dialogs.open(
      new PolymorpheusComponent(DeleteProductModal),
      {
        size: 's',
        label: this.deleteModalTexts.header,
        data: {
          id: productId,
        }
      },
    ).subscribe();
  }

}
