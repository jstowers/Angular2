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
    		<button
    			class = "btn btn-lg btn-primary"
    			[style.backgroundColor]= "isActive ? 'light blue' : 'gray'">Lg Submit
			</button>
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

}

/*

	<button 
    			

*/