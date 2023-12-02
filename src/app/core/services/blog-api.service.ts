import { Observable, map } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';
import { Blog } from '../models';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class BlogApiService {
  private httpService = inject(HttpService);
  private user = inject(UserService).user;

  private url = 'blogs';

  getBlogs() {
    return this.httpService.getList(this.url);
  }
  searchBlog(query?: string) {
    return this.httpService.getSearchList(this.url, query);
  }
  getBlog(id: string): Observable<Blog> {
    return this.httpService.get<Blog>(this.url, id);
  }
  addBlog(value: Partial<Blog>) {
    return this.httpService.post(this.url, {
      ...value,
      author: this.user,
      comments: [],
    });
  }
  editBlog(value: Partial<Blog>) {
    return this.httpService.put(this.url, {
      ...value,
    });
  }
}
