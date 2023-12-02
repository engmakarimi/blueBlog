import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { inject } from '@angular/core';
import { BlogApiService } from '../services';

export const getBlogResolver: ResolveFn<Observable<any>> = (
  route: ActivatedRouteSnapshot
) => {
  const blogApiService = inject(BlogApiService);

  return blogApiService.getBlog(route.paramMap.get('id')||"").pipe(catchError((e) => of(null)));
};
