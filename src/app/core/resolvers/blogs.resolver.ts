import { ResolveFn } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { inject } from '@angular/core';
import { BlogApiService } from '../services';

export const blogsResolver: ResolveFn<Observable<any>> = () => {
  const blogApiService = inject(BlogApiService);

  return blogApiService.getBlogs().pipe(catchError((e) => of(null)));
};
