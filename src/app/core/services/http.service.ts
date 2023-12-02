import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  baseurl = environment.apiBaseUrl;
  get<TResponse>(url: string, id: string) {
    return this.http.get<TResponse>(`${this.baseurl}/${url}/${id}`);
  }
  getList(url: string, query?: string): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/${url}`);
  }
  getSearchList(url: string, query?: string): Observable<any> {
    const options = query
      ? { params: new HttpParams().set('title_like', query) }
      : {};
    return this.http.get<any>(`${this.baseurl}/${url}`, options);
  }
  patch(url: string, model: any): Observable<any> {
    return this.http.patch<any>(`${this.baseurl}/${url}`, model).pipe();
  }

  post(url: string, body: any, httpOptions?: any): Observable<any> {
    return this.http.post(`${this.baseurl}/${url}`, body, httpOptions);
  }

  put(url: string, body: any): Observable<any> {
    return this.http.put(`${this.baseurl}/${url}/${body.id}`, body);
  }

  delete(url: string) {
    return this.http.delete(`${this.baseurl}/${url}`);
  }
}
