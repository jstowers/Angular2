import { Component, Output, EventEmitter } from 'angular2/core';

@Component({

	selector: 'like',

	template: 'like.template.html',

	styles: [`
				.glyphicon-heart {
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

	//likeCount = this.likeCount;

	onClick() {
		this.like = !this.like;
		this.change.emit({
			totalLike: totalLike + 1;
		})

	}


}