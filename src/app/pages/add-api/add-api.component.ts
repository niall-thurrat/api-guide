import { Component, OnInit } from '@angular/core';
import { Api } from '../../models/api';

@Component({
  selector: 'app-add-api',
  templateUrl: './add-api.component.html',
  styleUrls: ['./add-api.component.scss']
})
export class AddApiComponent implements OnInit {
  newApi: Api = {
    API: '',
    Description: '',
    Auth: '',
    HTTPS: false,
    Cors: '',
    Link: '',
    Category: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
