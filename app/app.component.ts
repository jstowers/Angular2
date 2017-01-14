import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component';
import {CourseService} from './course.service';

import {AuthorsComponent} from './authors.component';
import {AuthorService} from './authors.service';

@Component({
	// when Ang2 sees 'my-app', it will place the <h1> and <courses> elements
    selector: 'my-app',
    template: `
    		<h1>My First Angular 2 App</h1>
    		<courses></courses>
    		<authors></authors>
    		`,
    directives: [CoursesComponent, AuthorsComponent]
})

// view component that takes control over entire app
export class AppComponent { }