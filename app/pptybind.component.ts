// Angular2: The Complete Guide
// Maximilian Schwarzmüller
// January 20, 2017

// Property Binding (Sec. 2, Lec. 23)

import { Component } from 'angular2/core';

@Component ({

	selector: 'pptybind',

	template: `

		<h2> Interpolation </h2>
		<p>
			{{ stringInterpolation }} | {{ numberInterpolation }}
		</p>
		<hr>

		<h2> Property Binding </h2>

	`,

})

export class PptybindComponent {

	// for interpolation, everything that is a string or 
	// that can be cast as string works

	stringInterpolation = 'This is string interpolation!';

	numberInterpolation = 2;

}