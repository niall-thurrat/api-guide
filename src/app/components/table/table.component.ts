import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../../models/column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data!: any[];
  @Input() exclusions: string[] = [];
  @Input() dataType!: string;
  headers!: string[];
  cols!: Column[];


  constructor() { }

  ngOnInit(): void {
    const item: any = this.data[0];
    
    this.headers = Object.keys(item);
    this.cols = this.getCols(this.headers);
  }

  private getCols(headers: string[]): Column[] {
    
    const cols: Column[] = [];

    headers.forEach(h => {
      if (!this.exclusions.includes(h))
        cols.push(this.createColumn(h, h));
    })
    return cols;
  }

  private createColumn(field: string, header: string): Column {
    return { 
      field: field,
      header: header
    };
  }

}
