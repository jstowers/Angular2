Joseph Stowers
January 13, 2017

Angular2 Development Course
Udemy




## Development Environment

1.	Download the seed-beta

2.	Load node

3.	Load typescript

4.  Load typings



## Getting Started

1.	In the console, type the following to start the lite server:

		$ npm start

		launches default browser (Chrome)

2.	in browser, type:

		localhost:3000


## Typescript Compilation

Each .ts file has a .js and a js.map file

	.js.map => used for debugging

	.js => eventually loaded in the browser

.package.json

	"script.start"
	includes a start script for concurrently running
	typscript compiler (tsc) in watch mode and starting lite
	web server

	in watch mode, tsc will automatically generate .js.map
	and .js files in the same folder



## Thursday, January 12, 2017

### Section 4 - Your First Angular 2 App

tsconfig.json - 

typings.json - external JavaScript libraries, need to import

package.json - standard Node configuration


### Section 2, Lecture 9
Will implement component, directive, and service from scratch

### Section 2, Lecture 11

1.  Create a class CoursesComponent

2.  Import {Component} form angular2/core

3.	Directive - a class that allows us to extend or control DOM.

	Can define custom attributes or elements like 
	<classes /> that are not part of standard HTML.

	Technically, every component is a directive.  The difference is that a component has a template and a directive doesn't.

	What is a template??


### Services
#### Section 2, Lecture 15

1.	Right now, CoursesComponent is rendering a hard-coded list of courses.  
	But in real world, often get data from a server.

2.	CoursesComponent should only contain logic for the view.

3.	Any logic that is NOT about the view should be written in a separate class called
	a service.

4.	Create a new file called course.service.ts

5.	Create a class CourseService that contains a method to get
the data from the server.  For now, will only return an array of
courses.  Won't concern ourselves with consuming a RESTful API.

6.  In CoursesComponent, we need a reference to the service.  Can
create in constructor of CoursesComponent.

7.	Dependency Injection Framework
		Need to create service and pass into component

		Inject class dependencies when creating the class.

		Here, CourseService is a dependency.  So it will first
		create an instance of this service.  And then inject it
		into the constructor of the CoursesComponent class.

8.	ERROR => No provider for CourseService!  (CoursesComponent -> CourseService)

	CoursesComponent has a dependency on CourseService but Ang2
	doesn't know how to create that service.


### Module 		(Sec. 2, Lec. 21)
1.	Module - a block of highly-related classes.

2.	Best change in Ang2 beta.

3.	For each application, start with AppModule.


### Exercise	(Extend App)
Authors

1.	Create a component

2.	Set the properties

3.	User interpolation {{ }}

4.	Create a service - get authors from server

5.	Use dependency injection


### Directives		(Sec. 2, Lec. 19)
1.	In HTML, use <input> tag to render an input box.

2.	Use directive to extend behavior of <input> tag to grow on mouseover => <input autogrow>

3.	



























