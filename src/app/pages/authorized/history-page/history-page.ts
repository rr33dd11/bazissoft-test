import {Component} from '@angular/core';
import {Purchase} from '@shared/types/purchase';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {purchasesData} from '@shared/data/purchasesData';
import {purchasePage} from '@shared/consts/texts';

@Component({
  imports: [TuiTable, TuiDataList, TuiDropdown],
  selector: 'app-history-page',
  styleUrl: './history-page.scss',
  templateUrl: './history-page.html',
})
export class HistoryPage {
  protected readonly purchases: Purchase[] = purchasesData;
  protected readonly purchaseTableColumns = purchasePage.purchaseTableColumns
}
