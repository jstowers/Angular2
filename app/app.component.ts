import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component';
import {CourseService} from './course.service';

import {AuthorsComponent} from './authors.component';
import {AuthorService} from './authors.service';

import {BindingComponent} from './binding.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';


@Component({

    selector: 'my-app',

    template: `
    			<h1>{{ title }}</h1>
    			<img [src] = "imageUrl" />
    			<authors></authors>
    			<binding [bind-title] = "title"></binding>
    			<favorite [isFavorite] = "post.isFavorite"
    				(change) = onFavoriteChange($event) ></favorite>
    			<like [likeCount] = "post.likeCount"
    				  [iLike] = "post.iLike"
    				(change) = onLikeChange($event) >
				</like>
				<voter
					[voteCount] = "post.voteCount" >
				</voter>
     		`,

    directives: [CoursesComponent, AuthorsComponent, BindingComponent, FavoriteComponent,
    			LikeComponent, VoterComponent]
})

// view component that takes control over entire app
// lorempixel.com displays random photos to test your app template
export class AppComponent {

	title = "My First Angular 2 App";
	
	imageUrl = "http://lorempixel.com/400/200/";

	// can bind post.isFavorite property value to our isFavorite
	// property in the <favorite> component
	post = {
		title: "Post Title",
		isFavorite: true,
		likeCount: 10,
		voteCount: 10,
		iLike: false
	};

	// Example of logging the output from an event emitter on the favorite component
	onFavoriteChange($event) {
		console.log('$event', $event);
	}

	onLikeChange($event) {
		console.log('$event', $event);
	}
	
}