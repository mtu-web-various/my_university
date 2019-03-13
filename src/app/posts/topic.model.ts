import { Post } from './post.model';

export class Topic{
  posts: Post[];
  //userId: string;
  topicName: string;
  //time: string;

  constructor(name: string, posts: Post[]){
    this.topicName = name;
    this.posts = posts;
  }


}
