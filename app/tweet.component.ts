import { Component } from 'angular2/core';

@Component ({

	selector: 'tweet',

	styleUrls: ['app/tweet.component.css'],

	template: `
		<div class = "main" >

			<h2>{{author}}</h2>

		</div>
	`
})

export class TweetComponent {

	author = "Joe Stowers";

}