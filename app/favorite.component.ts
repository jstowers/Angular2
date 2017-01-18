// import Component from Ang2
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({

	selector: 'favorite',

	templateUrl: 'app/favorite.template.html',

	styleUrls: ['app/favorite.component.css'],

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