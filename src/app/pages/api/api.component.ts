import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../models/api';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  api!: Api;

  constructor(private route: ActivatedRoute, private apisService: ApisService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ API }) => {
      this.getAPI(API);
    });
  }

  getAPI(API: string) {
    this.apisService.getOne(API).subscribe((apiData) => {
      this.api = apiData;
    });
  }
}
