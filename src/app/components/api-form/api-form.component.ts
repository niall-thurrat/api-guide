import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../../models/api';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.scss']
})
export class ApiFormComponent implements OnInit {
  @Input() api!: Api;

  constructor(private apisService: ApisService, private router: Router) { }

  ngOnInit(): void {
  }

  updateApi(): void {
    this.apisService.updateApi(this.api)
  }

  deleteApi(): void {
    this.apisService.deleteApi(this.api.API)
    this.router.navigate(['/apis']);
  }
}
