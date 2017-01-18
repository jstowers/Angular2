import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({

	selector: 'like',

	templateUrl: 'app/like.template.html',

	styles: [`
				.glyphicon-heart {
					font size: 50 px,
					color: #ccc,
					cursor: pointer;
				}

			 	.highlighted {
			 		color: deeppink;
			 	}
			`]
})

export class LikeComponent {

	@Input() 'likeCount';

	@Output() change = new EventEmitter();

	totalLike = this.likeCount;
	iLike = false;

	//likeCount = this.likeCount;

	onClick() {
		this.iLike = !this.iLike;
		this.change.emit({
			totalLike: totalLike + 1;
		})

	}


}