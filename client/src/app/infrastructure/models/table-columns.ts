export interface ITableColumns {
  columnIndex: number;
  columnId: string;
  columnName: string;
}

export class TableColumns implements ITableColumns {
  columnIndex: number;
  columnId: string;
  columnName: string;

  constructor() {
    this.columnIndex = 0;
    this.columnId = '';
    this.columnName = '';
  }
}
