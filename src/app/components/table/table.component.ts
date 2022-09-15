import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../../models/column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data!: Object[];
  @Input() exclusions!: string[];
  @Input() dataType!: string;
  @Input() dropdownFilters!: string[];
  headers!: string[];
  columns!: Column[];
  filterOptions!: string[][];

  constructor() { }

  ngOnInit(): void {
    this.headers = Object.keys(this.data[0]);
    this.columns = this.getColumns(this.headers);
    this.filterOptions = this.getFilterOptions(this.data);
  }

  private getColumns(headers: string[]): Column[] {
    const cols: Column[] = [];

    headers.forEach(h => {
      if (!this.exclusions.includes(h))
        cols.push(this.createColumn(h, h));
    });
    return cols;
  }

  private createColumn(field: string, header: string): Column {
    return { 
      field: field,
      header: header
    };
  }

  private getFilterOptions(data: Object[]): string[][] {
    const tableOptions: string[][] = [];

    data.forEach(item => {
      const itemKeys: string[] = Object.keys(item);
      const itemValues: any[] = Object.values(item);

      itemKeys.forEach(key => { tableOptions.push([]); });

      for (let i = 0; i < itemKeys.length; i++) {
        if (this.dropdownFilters.includes(itemKeys[i]) && 
        !tableOptions[i].includes(itemValues[i])) {
          tableOptions[i].push(itemValues[i]);
        }
      }
    });
    return tableOptions;
  }
}
