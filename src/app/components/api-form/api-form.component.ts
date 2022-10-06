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
    alert('Great to see you\'re having a look at my demo app! This add function is just for show. It is not supported by the (backend) API.');
    this.apisService.add(this.api);
    this.router.navigate(['/apis']);
  }

  updateApi(): void {
    alert('Great to see you\'re having a look at my demo app! This update function is just for show. It is not supported by the (backend) API.');
    this.apisService.update(this.api);
  }

  deleteApi(): void {
    alert('Great to see you\'re having a look at my demo app! This delete function is just for show. It is not supported by the (backend) API.');
    this.apisService.delete(this.api.API);
    this.router.navigate(['/apis']);
  }
}
