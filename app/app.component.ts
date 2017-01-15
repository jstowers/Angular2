import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component';
import {CourseService} from './course.service';

import {AuthorsComponent} from './authors.component';
import {AuthorService} from './authors.service';

@Component({
	// when Ang2 sees 'my-app', it will place the <h1> and <courses> elements
    selector: 'my-app',
    template: `
    		<h1>{{ title }}</h1>
    		<img [src] = "imageUrl" />

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
    		<courses></courses>
    		<authors></authors>
    		`,
    directives: [CoursesComponent, AuthorsComponent]
})

// view component that takes control over entire app
// lorempixel.com displays random photos to test your app template
export class AppComponent { 
	title = "My First Angular 2 App";
	
	imageUrl = "http://lorempixel.com/400/200/";
	
	// Bootstrap button class modifiers
	isActive = true;
	isDisabled = true;

	


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

/*

	<button 
    			

*/