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
  headers!: string[];
  columns!: Column[];

  constructor() { }

  ngOnInit(): void {
    const item: Object = this.data[0];
    
    this.headers = Object.keys(item);
    this.columns = this.getColumns(this.headers);
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
}
