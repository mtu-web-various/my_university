import { Topic } from './topic.model';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { PostService } from './posts.service';

@Injectable()
export class TopicService {
  private topics: Topic[] = [
    new Topic("CS101-2019-Winter", [ new Post("Interesting class"), new Post("I like it") ] ),
    new Topic("Restaurants", [ new Post("Italian Restaurant"), new Post("Tasty food in Inihod") ] )
  ];

  constructor(private postService: PostService){}


  getTopics(){
    return [...this.topics];
  }

  getTopicUpdateListener(){
    return this.topicsUpdated.asObservable();
  }

  addTopics(post: Post, userId: string, topicName: string, time: string){

    const topic: Topic = {  userId: userId, topicName: topicName, time: time };
    this.topics.push(topic);
  }
}
