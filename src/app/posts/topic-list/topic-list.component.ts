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
export class TopicListComponent implements OnInit, OnDestroy {

  topics: Topic[] = [];
  private topicSubs: Subscription;

  constructor(public topicService: TopicService) { }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
    this.topicSubs = this.topicService.getTopicUpdateListener()
      .subscribe((topics: Topic[]) => {
        this.topics = topics;
      });
  }

  ngOnDestroy(){
    this.topicSubs.unsubscribe();
  }

  onTopicFormSubmit(form: NgForm){
    if (form.invalid){
      return;
    }

    this.topicService.addTopics(
      {topicName: "My Topic",
      text: "My Post",
      userId: "1",
      time: "now"},
      "1", form.value.post, "now");
  }
}
