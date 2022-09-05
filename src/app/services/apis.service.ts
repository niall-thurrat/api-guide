import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApisDto } from '../models/apis-dto';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  constructor(private http: HttpClient) {}

  getApis() {
    return this.http.get<ApisDto>('https://api.publicapis.org/entries');
  }
}
