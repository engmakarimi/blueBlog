import { FormControl, Validators } from '@angular/forms';
import { Component, DestroyRef, Input, inject } from '@angular/core';
import { Blog, Comment } from 'src/app/core/models';
import { BlogApiService, UserService } from 'src/app/core/services';
import { switchMap, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent {
  @Input() blog!: Blog;
  public user = inject(UserService).user;
  private blogApiService = inject(BlogApiService);
  private destroyRef = inject(DestroyRef);
  loadMore = false;
  comment = new FormControl('', Validators.required);

  submit() {
    if (this.comment.valid) {
      const temp: Comment = {
        user: this.user,
        comment: this.comment.value as string,
      };
      this.blog.comments = [temp, ...this.blog.comments];
      console.log(this.blog.author);
      this.blogApiService
        .editBlog(this.blog)
        .pipe(
          takeUntilDestroyed(this.destroyRef),
          switchMap((res) => this.blogApiService.getBlog(this.blog.id + '')),
          tap((p) => this.comment.reset())
        )
        .subscribe((response: Blog) => (this.blog = response));
    }
  }
}
