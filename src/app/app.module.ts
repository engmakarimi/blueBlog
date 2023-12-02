import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { AvatarInfoComponent } from './components/avatar-info/avatar-info.component';
import { AvatarWrittenComponent } from './components/avatar-written/avatar-written.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailsComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    AvatarInfoComponent,
    AvatarWrittenComponent,
    CreateBlogComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
