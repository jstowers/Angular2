import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({

	selector: 'like',

	templateUrl: 'app/like.template.html',

	styles: [`
				.glyphicon-heart {
					font-size: 50px;
					color: #ccc;
					cursor: pointer;
				}

			 	.highlighted {
			 		color: deeppink;
			 	}

			 	.likes {
			 		display: inline-block;
			 		font-size: 20px;
			 		color: blue;
			 	}
			`]
})

export class LikeComponent {

	// input properties bound to the app.component
	@Input() likeCount;
	@Input() iLike;

	@Output() change = new EventEmitter();

	onClick() {

		this.iLike = !this.iLike;
		this.likeCount += this.iLike ? 1 : -1;

		this.change.emit({
			iLike : this.iLike,
			likeCount : this.likeCount
		}
	};
}