import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../services/apis.service';
import { Api } from '../../models/api';
import { Column } from '../../models/column';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {
  apis: Api[] = [];
  cols: Column[] = [];

  constructor(private apisService: ApisService) {}

  ngOnInit(): void {
    this.apisService.getApis().subscribe((response) => {
      this.apis = response.entries;
      this.cols = this.getCols(response.entries[0]);
    });
  }

  getCols(entry: Api): Column[] {
    const keys: string[] = Object.keys(entry);
    const cols: Column[] = [];

    keys.forEach(k => {
      if (k !== 'Link')
        cols.push(this.createColumn(k, k));
    })
    return cols;
  }

  createColumn(field: string, header: string): Column {
    return { 
      field: field,
      header: header
    };
  }
}
