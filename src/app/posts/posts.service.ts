import { Post } from './post.model';


export class PostService{
  private posts: Post[] = [

  ];

  getPosts(){
    return [...this.posts];
  }

  addPost(postId: number, content: string, topicId: number) {
    this.posts.push(new Post(content, postId, topicId));
  }
}
