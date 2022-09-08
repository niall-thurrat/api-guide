import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../services/apis.service';
import { Api } from '../../models/api';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {
  apis!: Api[];

  constructor(private apisService: ApisService) {}

  ngOnInit(): void {
    this.apisService.getApis().subscribe((response) => {
      this.apis = response.entries;
    });
  }
}
