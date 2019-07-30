import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IStudent from '../entities/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

    constructor(private http: HttpClient) {}

    public getData(url: string): Observable<any > {
      return this.http.get(url);
    }
}
