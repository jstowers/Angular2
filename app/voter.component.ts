import { Component, Input } from 'angular2/core';

@Component ({

	selector: 'voter',

	styleUrls: ['app/voter.component.css'],

	template: `
			<div class = "voterFeature">

				<i class = "glyphicon glyphicon-menu-up"
					(click) = onUpvote()>
				</i>

				<span class = "votes"> {{voteCount}} </span>

				<i class = "glyphicon glyphicon-menu-down"
					(click) = onDownvote()>
				</i>

			</div>
	`
})



export class VoterComponent {

	@Input() voteCount = 10;
	@Input() myVote = 0;

	onUpvote() {

		if (this.myVote === -1) {
			this.voteCount += 1;
			this.myVote = 0;
		}
		else if (this.myVote === 0){
			this.voteCount += 1;
			this.myVote = 1;
		}
		else this.myVote = 1;
		
		console.log('up myVote', this.myVote);
		console.log('up voteCount', this.voteCount);
	}

	onDownvote() {

		if (this.myVote === 1) {
			this.voteCount -=1;
			this.myVote = 0;
		} 
		else if (this.myVote === 0) {
			this.voteCount -= 1;
			this.myVote = -1;
		} 
		else this.myVote = -1;

		console.log('down myVote', this.myVote);
		console.log('down voteCount', this.voteCount);
	}

}