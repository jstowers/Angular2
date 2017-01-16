import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component';
import {CourseService} from './course.service';

import {AuthorsComponent} from './authors.component';
import {AuthorService} from './authors.service';

import {BindingComponent} from './binding.component';

@Component({
	// when Ang2 sees 'my-app', it will place the <h1> and <courses> elements
    selector: 'my-app',
    template: `
    			<h1>{{ title }}</h1>
    			<img [src] = "imageUrl" />
    			<authors></authors>
    			<binding></binding>
    		`,

    directives: [CoursesComponent, AuthorsComponent, BindingComponent]
})

// view component that takes control over entire app
// lorempixel.com displays random photos to test your app template
export class AppComponent {

	title = "My First Angular 2 App";
	
	imageUrl = "http://lorempixel.com/400/200/";
	
}

/*

	<button 
    			

*/