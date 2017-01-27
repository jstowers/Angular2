
# Angular2 Development Course
Instructor: Mosh Hamedani (Udemy)


## Setting Up the Development Environment

> 1.	Download the seed-beta
> 
> 2.	Load node package manager
> 
> 3.	Load typescript
> 
> 4.  	Load typings



## Getting Started

1.	To start the node lite-server and launch the default Chrome browser, type the following in the console:

		$ npm start

2.	To open the app, type the following in the Chrome browser:

		localhost:3000


## Typescript Compilation

1. Each .ts file generates a .js and a js.map file

	.js => eventually loaded in the browser

	.js.map => used for debugging

	
2. package.json

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

3.	Any logic that is NOT about the view should be written in a separate class called a service.

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


### Databinding Overview

	Databinding = Communication

						   ------ passes data ------>     
	Component Body/Logic							  Component Template (view)
						   <--- listens to events ---

### Property Binding  (Sec. 3, Lec. 25)

1.	String Interpolation 

		Syntax:
		{{ expression resolving to a string }}

		Examples:
		<h1> {{ title }} </h1>
		<img src = "{{ imageUrl }}" />

	Used to display properties of a component in the view.
	
	Interpolation is just syntatical sugar.  Behind the scenes, when Angular2 compiles the template, it translates interpolation into property binding.

2.	What is Property Binding?

		Binding = sending data

		Property binding = sending data to a property of a DOM element

		Example:
		`<button [disabled] = "expression resolving to required value type"`
		for the [disabled] property, the expression must resolve to True/False

	Property binding works one way, from component to the DOM:

			Component (with its properties) -----> DOM 

	If the property changes in the component, the DOM element will be updated.  But any changes in the DOM are not reflected back to the component.

3.	What is Event Binding?
	
		Component listens to events emitted from a DOM element

		Example: listening for the button click event
		`<button (click) = "expression handling the event"`

		The expression could be a simple inline expression or a method() to be executed.

4.	Two-Way Data Binding
		Be default, Angular2 is unidirectional.  This makes apps faster!

		But two-way data binding is still available.  It sends data and listens for events, combining property[] and event() binding using the ngModel keyword.

		Example:
		`<input [(ngModel)] = "bound model (e.g.object)">`


5.	Availability

		a.	DOM properties and events

				< img [src] = "...">
				src is a native property built into the DOM

				<img [click] = "...">
				click is a native event built into the DOM

		b.	Angular2 directive properties and events

				<div [ngClass] = "...">
				ngClass allows you to add CSS classes to an element

				<div (ngSubmit) = "...">

		c.	Component properties and events (components are directives)

				<cmp [initObj] = "...">

				<cmp (rndEvent) = "...">

6.	Custom Bindings for directives and components

		i.	Property binding

				@Input() propertyName : string;


		ii.	Event binding

				@Output() eventName = newEventEmitter();


7.	Two Property Binding Syntaxes

		a.	<img [src] = "imageUrl" />

		b.	<img bind-src = "imageUrl" />

8.	Interpolation works well for dynamic headings, divs, and paragraphs, or wherever you want to render text.  Use the second syntax for everything else.


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


## Sunday, January 15, 2017

### Two-Way Binding

1.	ngModel

	a.	Two-way binding between a DOM property and a component property.

	b.	Syntax is a combination of event () and property [] binding:

			<input type = "text" [(ngModel)] = "title" />	

### Building a Favorite Component

1.	Glyphicon Star

	a.	On render - star empty

	b.	On click - star solid

	c.	On click again - star empty

2.	Process
	
	a.	Render an icon

	b.	Handle the click event

		
### Component API

1.	Goal

	a.	Use property binding to bind isFavorite property to some data.

	b.	Use event binding to subscribe to events raised from this component (like a change event)

2.	Public Component API

		--data--> input { COMPONENT } output --event-->

	a.	can mark properties as input or output, making them visible to the outside
		and available for event binding

	b.	the input and output properties form the public API of a component

3.	Input Properties

	a.	Two ways to expose a private component property to the outside:

		i.	Input decorator (@Input) in export class
		ii.	Inputs property array [ ] inside @Component decorator

	b.	Input Decorator

		i.	Import into component:

				import { Component, Input } from 'angular2/core';

		ii.	Apply to the desired property:

				@Input isFavorite = false;

		iii.	It's a function and call it.

	c.	Inputs property inside @Component

		i.	Syntax:

				@Component({

					selector: ...,

					template: ...,

					inputs: ['isFavorite']
				})


		ii.		This method is a good way to document a component, listing all the inputs in one place as part of the component's metadata.

		iii.	But if you refactor the code and change the property, you will have to the change the property name here as well.  This additional step makes this method less efficient, less clean than the @Input decorator above.

	d.	Aliases

		i.	Can create an alias for the public name of the property

		ii.	Here, is-Favorite is the public name, while isFavorite the private name:

				@Input('is-Favorite) isFavorite = false;

				inputs: ['isFavorite:is-Favorite'];


## Sunday, January 15, 2017

### Output Properties

1.	Custom Event

		Every time the consumer clicks the favorite (star) icon, we want this to trigger a custom event.

		@Output() change = new EventEmitter();

2.	EventEmitter() is a class used to publish events

3.	Two ways to write an ouput property:

		i.	outputs: [  ]

		ii.	@Output() = new EventEmitter();


### Templates

1.	Okay to write templates inline if not too long.  But if the templates are large, better to separate the template from the component to maintain better separation of concerns.

2.	Process

	a.	Create a new HTML file for the favorite component:

			favorite.template.html

	b.	Paste HTML in new file.

	c.	Back in favorite.component.ts, replace template in @Component with templateUrl:

			@Component({

				selector: 'favorite',

				templateUrl: 'app/favorite.template.html',

				inputs: ['isFavorite']

			})

	d.	Can use template or templateUrl, but noth both!

3.	Additional HTTP request to download template file

	a.	templateUrl adds 1 additional HTTP request to the page load.  But this only happens once.

	b.	open DevTools => Network => and filter XHR

	c.	it should show 


## Tuesday, January 17, 2017

### Styles
1.	Overview

	a.	Styles scoped only to the component, won't leak to outer HTML

	b.	If reference outside 
		
2.	Two Places to Define Styles

	a.	Styles property in @Component metadata:

			@Component({

				selector: . . .

				styles: [ ]

			})

	b.	Reference external style sheets using styleUrls:

			@Component({

				selector: . . .

				styleUrls: ['app/favorite.component.css']

			})


### Homework: Like Component
1.	Outline
	a.	Use glyphicon-heart
	b.	Default color is light gray: #ccc
	c.	On mouse hover, cursor changes to a hand => css cursor: pointer



## Wednesday, January 18, 2017

### Homework:  Voter Comoponent

1.	Overview
	
		Create a component to display the total votes as found on StackOverflow.

2.	Algorithm

		a.	On mouse hover of up arrow, cursor changes to a hand.

		b.	If click up arrow once, up arrow icon is highlighted and total votes incremented by one.

		c.	If click up arrow again, nothing happens.  User can only give one upvote or one downvote to a post.

		d.	If click down arrow, total votes decreased by one to original count.  Neither arrow icon is highlighted (neutral vote).

		e.	If click down arrow again, total votes decreased by one and down arrow icon is highlighted.

3.	Divide and Conquer

		a.	Break down a complex problem into smaller, simpler problems

		b.	Most Complexity -> More Complexity -> Less Complexity

4.	Process

		a.	Render layout

		b.	Handle the clicks and calculate total votes
		
		c.	Implement highlights to icons if match user votes (class styles)
		
		d.	Implement one-vote limitation

5.	Technical Tips

		a.	Use glyphicon-menu-up and glyphicon-menu-down

		b.	To achieve a vertical layout:
			i.	Use the following elements: <i> <span> <i>
			ii.	Wrap these elements in a <div> with a small width of 20px

		c.	Public API
			i.	Input properties to bind to
				+ voteCount => total votes
				+ myVote => 1 for positive, 0 for neutral, -1 for negative
			ii.	Output property
				+ vote => event raised whenever user click up/downvote icons
				+ specify user's vote (1,0,-1)


## Thursday, January 19, 2017
### Challenge: Tweet Component
1.  TO DO

	 	a.	Create a Tweet Component
	 		i.		Image
	 		ii.		Author
	 		iii.	Twitter Handle
	 		iv.		Tweet
	 		v.		Like button (reuse like component)

	 	b.	Use bootstrap Media Object as template for Tweets

	 	c.	Create a service that is responsible for returning a list of tweets.
	 	
	 	d.	Hard-code a tweets object to be consumed by the service

	 	e.	Create a random picture of person using the query string below:
	 			http://lorempixel.com/100/100/people?1
	 	
	 	f.	Use dependency injection to inject service into component
	 	
	 	g.	Use *ngFor directive to render the tweets:
	 				`<div *ngFor = "#course of courses">
	 				</div>`

***

### Additional Directives (Sec. 5, Lec. 49)

**ngIf**

>Method 1:	
>	If the statement evaluates to "truthy," the `<div>` and its children will be inserted into the DOM:
>	
>			<div *ngIf = "courses.length > 0" >
>				List of courses
>			</div>
>			<div *ngIf = "courses.length == 0" >
>				You don't have any courses selected.
>			</div>
>
>	If the statement evaluates to "falsey," the `<div>` will be removed from the DOM.


>Method 2:	
>	We can bind to the hidden property of a DOM element.  The hidden attribute is a Boolean attribute indicating that the element is not yet, or no longer, relevant.
>	
>	In this example, if the courses array is empty, the first `<div>` will be hidden and the second `<div>` will be shown:
>	
>			// hidden => true
>			<div [hidden] = "courses.length == 0" >
>				List of courses
>			</div>
>			// hidden => false
>			<div [hidden] = "courses.length > 0" >
>				You don't have any courses selected yet
>			</div>
>	
	With Method 2, the hidden `<div>` element will stay in the DOM, it just won't be displayed.  This method is perfect for small element trees.


Conclusion:
> 	The [hidden] attribute works fine for small element trees.  
> 
> 	But for apps with large element trees, *ngIf works better.  Hiding unnecessary elements in the DOM takes substantial memory and computing resources.
> 
> 	Exception:
> 	If your element tree will be repeatedly removed and inserted in the DOM when a user clicks a checkbox or button, then using the [hidden] attribute may be more efficient.  In this case, using *ngIf may actually consume more resources.	


**ngSwitch**

Purpose:	To display an element and its children from a set of possible elements, based on a condition.

Example:	An app that lists the best restaurants in a neighborhood.  The navigation bar provides two buttons to choose:  Map View and List View.

**ngFor**

Syntax:
		`<ul>
			<li *ngFor = "#school of schools"></li>
		</ul>`

		#school of schools is microsyntax that Ang2 understands

			#school = local variable

			of = keyword

			schools = variable we want to iterate

	If we want to add an index, i, available in Ang2:

		`<ul>
			<li *ngFor = "#school of schools, #i = index">
				{{ i + 1}} - {{ course }}
			</li>
		</ul>`

**Pipes**
Used to format data

Code:	pipes.component.ts

Types
1.	Built-In
		Uppercase
		Lowercase
		Decimal
		Currency
		Date
		JSON
2.	Custom

## Friday, January 27, 2017

**Building a Basic Form**

1.	Bootstrap form-group => creates modern, responsive forms
		
		```` <form>	
				<div class = "form-group"

2.	Zen Coding

		Write HTML code using CSS formatting:
	
			div.form-group + Tab

			<div class = "form-group"></div>	

		Syntax

			.	=>	classes

			>	=>	immediate children
			
			+ 	=>	siblings

			[]	=>	attributes



