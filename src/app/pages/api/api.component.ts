import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../models/api';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  api!: Api;

  constructor(
    private route: ActivatedRoute, 
    private apisService: ApisService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ API }) => {
      this.getAPI(API);
    });
  }

  getAPI(API: string) {
    this.apisService.getApi(API).subscribe((apiData) => {
      this.api = apiData;
    });
  }

  updateApi(): void {
    this.apisService.updateApi(this.api)
  }

  deleteApi(): void {
    this.apisService.deleteApi(this.api.API)
    this.router.navigate(['/apis']);
  }
}
