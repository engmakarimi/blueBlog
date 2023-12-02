import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogApiService } from 'src/app/core/services';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent implements OnInit {
  form!: FormGroup;
  private blogApiService = inject(BlogApiService);
  router = inject(Router);

  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      mainText: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      shortText: new FormControl('', Validators.required),
      creationDate: new FormControl(
        new Date().toISOString(),
        Validators.required
      ),
    });
  }

  submit() {
    if (this.form.valid) {
      this.blogApiService
        .addBlog(this.form.value)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.router.navigate(['/blogs']);
        });
    }
  }
  cancel() {
    this.router.navigate(['/blogs']);
  }
}
