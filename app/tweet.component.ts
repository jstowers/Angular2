import { Component } from 'angular2/core';
import { TweetService } from './tweet.service';

@Component ({

	providers: [TweetService],

	selector: 'tweet',

	styleUrls: ['app/tweet.component.css'],

	template: `
		<div class = "main" >

			<div class="media">
			  	<div class="media-left">
			    	<a href="#">
						<img class="media-object" src='http://lorempixel.com/200/200/people?1' alt="TEST">
			    	</a>
			  	</div>
			  	<div class="media-body">
			  		<div *ngFor = "#tweet of tweets">
			  			<img src={{tweet.image}}>
			  			<h4 class="media-heading">{{ tweet.author }}</h4>
			  			<p class ="tweet-body">{{ tweet.message }}</p>
			  		</div>
			  	</div>
			</div>
		</div>
	`
})

export class TweetComponent {

	author = "Joe Stowers";

	tweets;

	constructor(tweetService: TweetService) {
		this.tweets = tweetService.getTweets();
	}

}