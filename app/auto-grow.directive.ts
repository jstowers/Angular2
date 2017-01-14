
// ElementRef => gives us access to element
// Renderer => service that helps us render that element
import { Directive, ElementRef, Renderer } from 'angular2/core'

// Directive will be applied on the autoGrown element
@Directive({
	// The CSS selector for an attribute is the
	// attribute name in square brackets:
	selector: '[autoGrow]',
	// subscribe to events
	// '()' => binding onFocus() method to the focus event
	host: {
		'(focus)':'onFocus()',
		'(blur)': 'onBlur()'
	}
})

export class AutoGrowDirective {

	// create constructor function

	// Dependency Injection
	// Angular will automatically inject instances
	// of ElementRef and Renderer into this class

	// We need el and renderer in the methods below, so use private keyword.
	// TSC will create field el and renderer and intiialize
	// with these arguments.
	constructor(private el: ElementRef, private renderer: Renderer) {

	}

	// methods
	onFocus() {
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');	
	}

	onBlur() {
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');	
	}
}