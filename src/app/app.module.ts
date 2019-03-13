import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PostService } from './posts/posts.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { TopicListComponent } from './posts/topic-list/topic-list.component';
import { TopicService } from './posts/topic.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    TopicListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PostService, TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
