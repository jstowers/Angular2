import { Component, Input } from 'angular2/core';

import { LikeComponent } from './like.component';

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
	  			<div class = "like-body">
		  			<like [likeCount] = "data.likeCount"
	    				  [iLike] = "data.iLike"
	    				(change) = onLikeChange($event) >
					</like>
	  			</div>
	  		</div>
		</div>
	`,

	directives: [LikeComponent]
})

export class TweetComponent {

	@Input() data;

	// Not sure why Mosh added this here?
	// this.data = undefined
	constructor() {
		console.log('TweetComponent data', this.data);
	}
	
	


}