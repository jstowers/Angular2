import { Component, Input } from 'angular2/core';

// TweetComponent generates the basic rendering template
// for each tweet.

@Component ({

	selector: 'tweet',

	styleUrls: ['app/tweet.component.css'],

	template: `
		<div class="media">
		  	<div class="media-left">
		    	<a href="#">
		    		<img class="media-object" src= "{{ data.image }}">
		    	</a>
		  	</div>
		  	<div class="media-body">
	  			<h4 class="media-heading">
	  				{{ data.author }} 
	  				<span class = "tweet-handle"> {{ data.handle }} </span>
  				</h4>
	  			{{ data.message }}
	  		</div>
		</div>
	`,
})

export class TweetComponent {

	// Not sure why Mosh added this here?
	// this.data = undefined
	/*
	constructor() {
		console.log('TweetComponent data', this.data);
	}
	*/

	@Input() data;

}