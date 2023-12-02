import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  BlogDetailsComponent,
  BlogListComponent,
  CreateBlogComponent,
} from './pages';
import { blogsResolver, getBlogResolver } from './core/resolvers';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blogs' },
  {
    path: 'blogs',
    resolve: {
      blogs: blogsResolver,
    },
    component: BlogListComponent,
  },
  {
    path: 'blogs/add',
    component: CreateBlogComponent,
  },
  {
    path: 'blogs/:id',
    resolve: {
      blog: getBlogResolver,
    },
    component: BlogDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
