import { Component } from 'angular2/core';
 
// The demo app lists the best restaurants in your neighborhood.

// SwitchComponent creates a navigation bar with two buttons 
// that can select Map View or List View.

// In the <div>, use the ngSwtich directive to select
// what content will be viewed depending on the button clicked.

// Binding the [ngSwitch] directive to the viewMode property of 
// the component.

// Then define seperate templates for map and list views.
// <template> element is part of HTML5 and, by default, is hidden
// until it's activated.  If a <template> is not active, its content
// will not be parsed and rendered in the DOM.
// To activate a <template>, use ngSwitchWhen

// And if a value doesn't equal one of the values specified in the <template>,
// you can use ngSwitchDefault
// Just add to the template element, no need to bind to any values.
// NOTE: Don't need to use ngSwitchDefault if you initialize the viewMode 
// with a default value -- here, 'map' 

// For the <li> elements, Bootstrap requires it to be active
// Add [class.active]


@Component ({

	selector: 'switch',

	styleUrls: ['app/ngswitch.component.css'],

	template: `

		<ul class = "nav nav-pills">

			<li [class.active] = "viewMode == 'map'"><a (click) = "viewMode = 'map'" >Map View</a></li>
			<li [class.active] = "viewMode == 'list'"><a (click) = "viewMode = 'list'">List View</a></li>

		</ul>

		<div [ngSwitch] = "viewMode">

			<template [ngSwitchWhen] = "'map'" > Map View Content  </template>
			<template [ngSwitchWhen] = "'list'"> List View Content </template>

		</div>

	`
})

export class SwitchComponent {

	// define a property that determines the currently selected tab, 
	// i.e., the current view mode
	// initialized to 'map'
	viewMode;

}