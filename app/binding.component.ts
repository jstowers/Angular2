// import Component from Ang2
import {Component, Input} from 'angular2/core';
import {AppComponent} from './app.component';

// define Component decorator and provide metadata
@Component ({

	selector: 'binding',

	template: `
		  	<input type = "text" [value] = "title" (input) = "onChangeInput($event)">

    		<input type = "button"(click)=onClearTitle() value = "Clear" />

    		<div (click) = "onDivClick($event)">
    			<button
    				class = "btn btn-lg btn-primary"
    				[style.backgroundColor]= "isActive ? 'light blue' : 'gray'"	
    				(click) = 'onClick($event)'>Lg Submit
				</button>
    		</div>
			<button
				class = "btn btn-md btn-primary" 
    			[class.disabled]="isDisabled">Med Disabled
			</button>
    		`,

})

export class BindingComponent {

	// Bootstrap button class modifiers
	isActive = true;
	isDisabled = true;

	@Input() title = 'Binding Title';

	/*
	constructor (app:AppComponent) {
		this.title = app.title;
	}
	*/

	// console.log('AppComponent', AppComponent);

	// Methods
	onDivClick($event) {
		console.log('Click Event Propagation', $event.target);
	};

	// Can use methods to get access to the DOM element that 
	// raised the event.
	// $event => gives you access to the DOM event (object)
	onClick($event) {
		$event.stopPropagation();
		console.log('Clicked', $event)
	};

	// implement two-data binding manually
	onChangeInput($event) {
		this.title = $event.target.value;
		console.log('this.title =', this.title);
	}

	onClearTitle() {
		this.title = '';
		console.log('this.title =', this.title)
	}
}