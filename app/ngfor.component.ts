// Mosh

// *ngFor
// Sec. 5, Lec 51-52

// 
/*	*ngFor -- the leading asterisk (*)
	
	When using ngFor, we need a <template>

	The * tells Ang2 to treate the <li> element as a template

		<template ngFor [ngForOf]="schools" #school #i=index>
			<li> {{ i +1 }} - {{ school }} </li>
		</template>

	This syntax is more complicated.

*/



import { Component } from 'angular2/core'

@Component ({

	selector: 'ngfor',

	styleUrls: ['app/ngfor.component.css'],

	template: `
		<hr class = "style1">
		<h3>Schools</h3>
		<ul>
			<li *ngFor = "#school of schools, #i = index">
				{{ i + 1}} - {{ school.name }}: {{ school.subject }}
			</li>
		</ul>
	`,

})

export class NgForComponent {

	//schools = ['MakerSquare', 'University of Houston',
	//			'Baylor Law School', 'University of New Mexico'];

	schools = [
		{
			name:'MakerSquare',
			subject: 'Software Engineering',
			year: '2016'
		},
		{
			name:'University of Houston',
			subject: 'Petroleum Engineering',
			year: '2009'
		},
		{
			name:'Baylor Law School',
			subject:'Law',
			year: '2002'
		},
		{
			name:'University of New Mexico',
			subject:'Chemical Engineering',
			year: '2000'
		}
	]
}