// Mosh
// Sec. 5, Lec 51

import { Component } from 'angular2/core'

@Component ({

	selector: 'ngfor',

	styleUrls: ['app/ngfor.component.css'],

	template: `
		<hr class = "style1">
		<h3>Schools</h3>
		<ul>
			<li *ngFor = "#school of schools, #i = index">
				{{ i + 1}} - {{ school }}
			</li>
		</ul>
	`,

})

export class NgForComponent {

	schools = ['MakerSquare', 'University of Houston',
				'Baylor Law School', 'University of New Mexico'];


}