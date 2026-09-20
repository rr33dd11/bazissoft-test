import {Component} from '@angular/core';
import {Purchase} from '../../../shared/types/purchase';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';
import {purchasesData} from '../../../shared/data/purchasesData';

@Component({
  imports: [TuiTable, TuiDataList, TuiDataListDropdownManager, TuiDropdown, TuiButton],
  selector: 'app-history-page',
  styleUrl: './history-page.scss',
  templateUrl: './history-page.html',
})
export class HistoryPage {
  protected readonly purchases: Purchase[] = purchasesData;
}
