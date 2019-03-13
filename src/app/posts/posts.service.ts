import { Post } from './post.model';


export class PostService{
  private posts: Post[] = [
    new
  ];

  getPosts(){
    return [...this.posts];
  }

  addPost(topicName: string, text: string, userId: string, time: string) {
    const post: Post = {  topicName: topicName, text: text, userId: userId, time: time };
    this.posts.push(post);
  }
}
