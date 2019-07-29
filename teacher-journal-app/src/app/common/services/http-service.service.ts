import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IStudent from '../entities/Student';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

    constructor(private http: HttpClient) {}

    public getData(url: string): Observavle<IStudent[]> {
      return this.http.get(url);
    }
}
