import { Component, OnInit } from '@angular/core';
import { PostService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];


  constructor(public postsService: PostService) {

  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

}
