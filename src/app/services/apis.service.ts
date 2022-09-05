import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  constructor(private http: HttpClient) {}

  getApis() {
    return this.http.get('https://api.publicapis.org/entries');
  }
}
