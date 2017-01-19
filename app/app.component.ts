import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component';
import {CourseService} from './course.service';

import {AuthorsComponent} from './authors.component';
import {AuthorService} from './authors.service';

import {BindingComponent} from './binding.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';

import {TweetComponent} from './tweet.component';


@Component({

    selector: 'my-app',

    styleUrls: ['app/app.component.css'],

    template: `
    		<div class = 'app-main' >
    			<h1> {{ title }} </h1>
    			<tweet></tweet>
			</div>
    	`,

    /*
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
					[voteCount] = "post.voteCount" 
					(vote) = onVoteChange($event) >
				</voter>
     		`,
	*/

    directives: [CoursesComponent, AuthorsComponent, BindingComponent, FavoriteComponent,
    			LikeComponent, VoterComponent, TweetComponent]
})

// view component that takes control over entire app
// lorempixel.com displays random photos to test your app template
export class AppComponent {

	//title = "My First Angular 2 App";
	title = "My First Twitter App";
	
	imageUrl = "http://lorempixel.com/200/200/people?1";

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

	onVoteChange($event) {
		console.log('$event', $event);
	}
	
}