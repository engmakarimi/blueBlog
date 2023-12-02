import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Blog } from 'src/app/core/models';
import { BlogApiService } from 'src/app/core/services';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  @Input() blogs!: Blog[];

  search = new FormControl();
  private blogApiService = inject(BlogApiService);
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    this.search.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        debounceTime(20),
        distinctUntilChanged(),
        switchMap((value: string) => {
          return this.blogApiService.searchBlog(value);
        })
      )
      .subscribe((response: Blog[]) => {
        this.blogs = [...response];
      });
  }
}
