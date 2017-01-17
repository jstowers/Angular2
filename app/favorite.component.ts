// import Component from Ang2
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({

	selector: 'favorite',

	template: `
		<i class = "glyphicon"
			[class.glyphicon-star-empty] = "!isFavorite"
			[class.glyphicon-star] = "isFavorite"
			(click) = "onClick()">
		</i>
	`,

	inputs: ['isFavorite']

})

export class FavoriteComponent {

	// input decorator
	// @Input() 

	// place input properties at beginning of component
	// make them easy to find

	// create EventEmitter()
	@Output() change = new EventEmitter();

	// initial value for favorite
	isFavorite = false;

	// method toggles favorite on/off
	onClick() {
		this.isFavorite = !this.isFavorite;
		this.change.emit({
			newValue: this.isFavorite;
		});
	}

}