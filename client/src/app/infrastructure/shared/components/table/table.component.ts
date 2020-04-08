import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { IResults } from '../../../models/results';
import { ITableColumns } from '../../../models/table-columns';

@Component({
  selector: 's3-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() public displayedColumns: ITableColumns[];
  @Input() public isLoadingResults = false;
  @Input() public tableData: IResults<any>;

  public columnIdList: string[] = [];

  public ngOnInit(): void {
    this.columnIdList = this.displayedColumns.map((column) => column.columnId);
  }

  public trackByColumnId(index: number, item: ITableColumns): number | null {
    return item ? item.columnIndex : null;
  }

  public showGrid(): string {
    return this.tableData.results && this.tableData.results.length
      ? 'inherit'
      : 'none';
  }
}
