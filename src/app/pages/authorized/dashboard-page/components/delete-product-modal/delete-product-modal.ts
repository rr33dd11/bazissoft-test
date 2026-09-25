import {Component, inject} from '@angular/core';
import {ProductService} from '@core/services/productService';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {TuiButton, TuiDialogContext} from '@taiga-ui/core';
import {buttonNames, dashboardPageTexts} from '@shared/consts/texts';

@Component({
  standalone: true,
  imports: [TuiButton],
  selector: 'app-delete-product-modal',
  styleUrl: './delete-product-modal.scss',
  templateUrl: './delete-product-modal.html',
})
export class DeleteProductModal {
  private readonly productService = inject(ProductService);
  protected readonly buttonNames = buttonNames;
  protected readonly context = inject(
    POLYMORPHEUS_CONTEXT,
  ) as TuiDialogContext<void, {id: number}>;


  delete() {
    this.productService.deleteProduct(this.context.data.id)
    this.context.completeWith()
  }

  protected readonly confirmText = dashboardPageTexts.deleteModal.confirmText;
}
