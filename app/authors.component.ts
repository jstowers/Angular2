// import Component decorator form Ang2 Core
import {Component} from 'angular2/core'
import {AuthorService} from './authors.service'

@Component({
	selector: 'authors',

	template: `
		<div>
			<h2>Authors</h2>
			{{ title }}
			<ul>
				<li *ngFor = "#author of authors">
				{{ author }}
				</li>
			</ul>
		</div>
		`,

	providers: [AuthorService]

})

// Specify properties of AuthorsComponent to export
export class AuthorsComponent {

	title = "Title for the authors page";

	authors;

	constructor(authorService: AuthorService) {
		this.authors = authorService.getAuthors();
	}

}
