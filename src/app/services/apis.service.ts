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

  getApis() {
    return this.http.get<ApisDto>(`${this.baseUrl}/entries`);
  }

  // TODO: use an ID instead of 'API' for requesting a single API from backend. 'Title' is not a unique value
  getApi(API: string) {
    return this.http.get<ApisDto>(`${this.baseUrl}/entries?title=${API}`).pipe(
      switchMap((res) => {
        return of(res.entries.slice(0, 1)[0]);
      })
    );
  }

  updateApi(api: Api) {
    this.http.post(`${this.baseUrl}/entries/${api.API}`, api);
  }

  deleteApi(id: string) {
    this.http.delete(`${this.baseUrl}/entries/${id}`);
  }
}
