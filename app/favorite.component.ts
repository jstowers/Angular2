// import Component from Ang2
import {Component, Input} from 'angular2/core';

@Component({

	selector: 'favorite',

	template: `
		<i class = "glyphicon"
			[class.glyphicon-star-empty] = "!isFavorite"
			[class.glyphicon-star] = "isFavorite"
			(click) = "onClick()">
		</i>
	`

})

export class FavoriteComponent {

	// initial value for favorite
	@Input() isFavorite = false;

	// method toggles favorite on/off
	onClick() {
		this.isFavorite = !this.isFavorite;
	}

}