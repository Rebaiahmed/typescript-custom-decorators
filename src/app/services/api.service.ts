import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getData(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
