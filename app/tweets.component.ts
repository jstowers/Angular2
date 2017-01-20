import { Component } from 'angular2/core';
import { TweetService } from './tweet.service';
import { TweetComponent } from './tweet.component';

// TweetsComponent calls the tweetService to retrieve
// tweets and feeds them into TweetComponent for rendering

@Component({

	selector: 'tweets',	

	template: `
		<div *ngFor = "#tweet of tweets">
	    	<tweet [data]="tweet"></tweet>
		</div>
	`,

	directives: [TweetComponent],

	providers: [TweetService]
})

export class TweetsComponent {

	tweets: any[];

	constructor(tweetService: TweetService) {
		this.tweets = tweetService.getTweets();
	}
}