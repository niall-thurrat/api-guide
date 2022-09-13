import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApisDto } from '../models/apis-dto';
import { Api } from '../models/api';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  baseUrl: string = 'https://api.publicapis.org';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ApisDto>(`${this.baseUrl}/entries`);
  }

  // TODO: use an ID instead of 'API' for requesting a single API from backend. 'Title' is not a unique value
  getOne(API: string) {
    return this.http.get<ApisDto>(`${this.baseUrl}/entries?title=${API}`).pipe(
      switchMap((res) => {
        return of(res.entries.slice(0, 1)[0]);
      })
    );
  }
  
  add(api: Api) {
    this.http.post(`${this.baseUrl}/entries/${api.API}`, api);
  }

  update(api: Api) {
    this.http.put(`${this.baseUrl}/entries/${api.API}`, api);
  }

  delete(id: string) {
    this.http.delete(`${this.baseUrl}/entries/${id}`);
  }
}
