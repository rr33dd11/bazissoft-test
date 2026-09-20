import {Component} from '@angular/core';
import {Product} from '../../../shared/types/product';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton, TuiDataList, TuiDropdown, TuiSizeS} from '@taiga-ui/core';
import {productsData} from '../../../shared/data/productsData';

@Component({
  imports: [TuiTable, TuiDataList, TuiDataListDropdownManager, TuiDropdown, TuiButton],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.scss',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  protected readonly products: Product[] = productsData;


  protected openedProductId: number | null = null;
  protected size: TuiSizeS = 's';
}
