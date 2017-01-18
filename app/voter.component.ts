import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component ({

	selector: 'voter',

	styleUrls: ['app/voter.component.css'],

	template: `
			<div class = "voterFeature">

				<i class = "glyphicon glyphicon-menu-up vote-button"
					(click) = onUpvote()
					[class.highlighted] = "myVote === 1">
				</i>

				<span class = "votes"> {{voteCount}} </span>

				<i class = "glyphicon glyphicon-menu-down vote-button"
					(click) = onDownvote()
					[class.highlighted] = "myVote === -1">
				</i>

			</div>
	`
})



export class VoterComponent {

	// initialize these properties to 0, in case 
	// they are not passed into the component
	@Input() voteCount = 0;
	@Input() myVote = 0;

	@Output() vote = new EventEmitter();

	onUpvote() {
		// can only upvote one time
		if (this.myVote === 1){
			return;
		} else {
			this.myVote++;
			this.voteCount++;
		}

		this.vote.emit({
			myVote: this.myVote,
			voteCount: this.voteCount
		})

		console.log('up myVote', this.myVote);
		console.log('up voteCount', this.voteCount);
	}

	onDownvote() {
		// can only downvote one time
		if (this.myVote === -1){
			return;
		} else {
			this.myVote--;
			this.voteCount--;
		}

		this.vote.emit({
			myVote: this.myVote,
			voteCount: this.voteCount
		})

		console.log('down myVote', this.myVote);
		console.log('down voteCount', this.voteCount);
	}

}