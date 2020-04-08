import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { ITableColumns } from 'src/app/infrastructure/models/table-columns';

@Component({
  selector: 's3-forecast-list-presentation',
  templateUrl: './forecast-list-presentation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastListPresentationComponent {
  @Input() public forecasts: any;
  @Input() public isLoadingResults: boolean = false;

  @Output() public emitUpdateList = new EventEmitter<void>();

  public displayedColumns: ITableColumns[] = [
    {
      columnIndex: 1,
      columnId: 'date',
      columnName: 'Date',
    },
    {
      columnIndex: 2,
      columnId: 'temperatureC',
      columnName: 'Celsius',
    },
    {
      columnIndex: 3,
      columnId: 'temperatureF',
      columnName: 'Fahrenheit',
    },
    {
      columnIndex: 4,
      columnId: 'summary',
      columnName: 'Summary',
    },
  ];

  public updateList(): void {
    this.emitUpdateList.emit();
  }
}
