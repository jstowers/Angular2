import { Component } from 'angular2/core';

@Component ({

	selector: 'tweet',

	styleUrls: ['app/tweet.component.css'],

	template: `
		<div class = "main" >
		
			<div class="media">
			  	<div class="media-left">
			    	<a href="#">
			      		<img class="media-object" src="http://lorempixel.com/200/200/people?1" alt="TEST">
			    	</a>
			  	</div>
			  	<div class="media-body">
			    	<h4 class="media-heading">Media Heading</h4>
			  	</div>
			</div>
		</div>
	`
})

export class TweetComponent {

	author = "Joe Stowers";

}