import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../../models/api';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.scss']
})
export class ApiFormComponent {
  @Input() api!: Api;
  @Input() isNew!: boolean;

  constructor(private apisService: ApisService, private router: Router) { }

  addApi(): void {
    this.apisService.add(this.api);
    this.router.navigate(['/apis']);
  }

  updateApi(): void {
    this.apisService.update(this.api);
  }

  deleteApi(): void {
    this.apisService.delete(this.api.API);
    this.router.navigate(['/apis']);
  }
}
