
// in Typescript, each file is considered a module
// in a module, often export one or more things like
// a class, function, or variable

// here, exporting CoursesComponent class so that it can 
// be imported by other modules

// Ang2 looks for certain metadata to identify components
// add a component decorator.

// decorator is like an attribute in C# or annotation in Java

// importing decorator from angular2/core
// these decorators are function
import {Component} from 'angular2/core'
import {CourseService} from './course.service'

// @Component function that takes an object
// all decorators need an @ sign before
@Component({

	// selector specifies a CSS selector for a host HTML element
	// Ang2 will create instance of component in host element
	// host element has tag 'courses'
	selector: 'courses',

	// template specifies HTML inserted in DOM when component's view is rendered
	
	// ` character allows you to break up HTML into multiple lines

	// use {{ }} to render title => called interpolation
	
	// if the value of the property 'title' changes in the component,
	// Ang2 will automatically update the view

	// add lists of courses
	template: `
		<h2>Courses</h2>
		{{ title }}
		<ul>
			<li *ngFor = "#course of courses">
			{{ course }}
			</li>
		</ul>
		`,

	// providers
	providers: [CourseService]
})

// Specify properties of the component to export
export class CoursesComponent {

	title = "The title of courses page.";

	courses;

	// with this constructor convention, our component is no 
	// longer tightly-coupled to the service.  Makes for better
	// modular code and more efficient testing.

	// when unit testing, can pass a mock or fake service
	
	constructor(courseService: CourseService){
		this.courses = courseService.getCourses();
	}
	
}