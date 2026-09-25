import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {TuiButton, TuiDialogContext, TuiError, TuiInput, TuiLabel, TuiTextfield} from '@taiga-ui/core';
import {ProductModalData} from './productModalData';
import {ProductValue} from '@shared/types/product';
import {productPage, validationErrorMessages} from '@shared/consts/texts';
import {TuiForm} from '@taiga-ui/layout';

@Component({
  imports: [ReactiveFormsModule,
    TuiTextfield,
    TuiLabel, TuiInput, TuiButton, TuiError, TuiForm],
  selector: 'app-product-modal',
  styleUrl: './product-modal.scss',
  templateUrl: './product-modal.html',
})
export class ProductModal {
  protected readonly context = inject(
    POLYMORPHEUS_CONTEXT,
  ) as TuiDialogContext<void, ProductModalData>;

  protected readonly productLabels = productPage.productLabels

  protected readonly form = new FormGroup({
    name: new FormControl(this.context.data.productData?.name ?? "", {
      nonNullable: true,
      validators: [Validators.required],
    }),
    price: new FormControl(this.context.data.productData?.price ?? 0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)],
    }),
    vat: new FormControl(this.context.data.productData?.vat ?? 20, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)],
    }),
  });

  protected save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    const data = this.form.getRawValue() as ProductValue

    this.context.data.onSave(data)
    this.context.completeWith()
  }

  protected readonly validationErrorMessages = validationErrorMessages;
}
