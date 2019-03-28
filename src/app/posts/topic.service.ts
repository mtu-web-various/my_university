import { Topic } from './topic.model';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { PostService } from './posts.service';

@Injectable()
export class TopicService {
  private topics: Topic[] = [
    new Topic("CS101-2019-Winter", 1 ),
    new Topic("Restaurants", 2)
  ];

  constructor(private postService: PostService){}


  getTopics(){
    return [...this.topics];
  }

  getTopic(index: number){
    return this.topics[index];
  }

  addTopic(topicName: string, topicID: number, postContent: string, postID: number){
    this.topics.push(new Topic(topicName, topicID));
    this.postService.addPost(postID, postContent, topicID);
  }
}
