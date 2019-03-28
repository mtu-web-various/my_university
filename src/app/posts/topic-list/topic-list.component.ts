import { Component, OnInit, OnDestroy } from '@angular/core';
import { TopicService } from '../topic.service';
import { NgForm } from '@angular/forms';
import { Topic } from '../topic.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics: Topic[] = [];

  constructor(public topicService: TopicService) { }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
  }

  onTopicFormSubmit(form: NgForm){
    this.topicService.addTopic(form.value.topic,1,form.value.post,1);
    this.topics = this.topicService.getTopics();
  }
}
