
# Angular2 Development Course
Instructor: Mosh Hamedani (Udemy)


## Setting Up the Development Environment

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


### Exercise
Extend App by Adding an Authors' Section:

1.	Create a component

2.	Set the properties

3.	Use interpolation {{ }}

4.	Create a service - get authors from server

5.	Use dependency injection


## Friday, January 13, 2017

### Directives		(Sec. 2, Lec. 19)
1.	Three Kinds of Directives:
	a.	Components - directives with a template
	b.	Structureal directives - change the structure of the view (i.e., NgFor, NgIf)
	c.	Attribute directives - change the appearance or behavior of an element

2. 	In HTML, use <input> tag to render an input box.

3.	Use directive to extend behavior of <input> tag to grow on mouseover '<input autoGrow>'

Summary:
Implemented an attribute directive that utilizes the onFocus() and onBlur() events to highlight the border of an input text box.

This directive would be helpful for form validation.


### Property Binding  (Sec. 3, Lec. 25)

1.	Interpolation 

		<h1> {{ title }} </h1>
		<img src = "{{ imageUrl }}" />

	Used to display properties of a component in the view.
	
	Interpolation is just syntatical sugar.  Behind the scenes, when Angular2 compiles the template, it translates interpolation into property binding.

2.	What is Property Binding?

	Binding the property in a component to a property of a DOM element.  Property binding works one way, from component to the DOM.

		Component (with its properties) -----> DOM 

	If the property changes in the component, the DOM element will be updated.  But any changes in the DOM are not reflected back to the component. 

4.	Two Property Binding Syntaxes

		a.	<img [src] = "imageUrl" />

		b.	<img bind-src = "imageUrl" />

5.	Interpolation works well for dynamic headings, divs, and paragraphs, or wherever you want to render text.  Use the second syntax for everything else.


## Saturday, January 14, 2017

### Class Binding   (Sec. 3, Lec. 26)

1.	Use to modify bootstrap classes in Angular

2.	<button class = "btn btn-primary" [class.disabled]="isDisabled">Submit</button>


### Style Binding

1.	Variation of property binding

2.	Can apply inline style to an element


### Event Binding

1.	Handles movements from the DOM like keystrokes, clicks, mouse movements.  Bind to methods.

2.	Two syntaxes: () and on-
	a. 	<button (click) = "onClick()" >Submit
	b. 	<button on-click = "onClick()" >Submit

3.	Event vs. Property Binding

	a.	Parenthesis fof Event Binding

		Use () for calling methods and subscribing to events.

		methods()

	b.	Brackets for Property Binding

		In JavaScript, access "property" of an object using [ ]

		appComponent['title']

4.	$event Object

	a.	To capture the $event object, pass $event as a parameter in the event callback from the template:

			<div (click) = "onDivClick($event)">

	b.	$event gives you access to the DOM element that raised the event

	c.	This allows for easy modification of the event in the class method:

			class MyComponent {

  				clicked(event) {
    				event.preventDefault();
  				}
			}

	d.	$event.target

			The target property represents the DOM element (button) raised by the event onClick()

	e.	If you don't pass the $event in your template, then the event will not be available in the method.


5.	Event Propagation

	a.	All events bubble up the DOM tree unless a handler prevents further bubbling.

	b.	The handler to stop bubbling is stopPropagation()

			$event.stopPropagation()




























