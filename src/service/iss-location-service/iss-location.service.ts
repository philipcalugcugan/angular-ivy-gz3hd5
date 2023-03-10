import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssLocationService {
  public baseUrl = 'https://api.wheretheiss.at/v1/satellites/25544'; // Data

  constructor(private httpClient: HttpClient) {}

  public getIisLocation(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
