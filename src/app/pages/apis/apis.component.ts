import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {
  apis: any = []; //TODO: change any

  constructor(private apisService: ApisService) {}

  ngOnInit(): void {
    this.apisService.getApis().subscribe((response: any) => { //TODO: change any
      this.apis = response.entries;
    });
  }
}
