System.register(['angular2/core', './courses.component', './authors.component', './binding.component', './favorite.component', './like.component', './voter.component', './tweet.component', './tweets.component', './pptybind.component', './ngswitch.component', './ngfor.component', './contact-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, binding_component_1, favorite_component_1, like_component_1, voter_component_1, tweet_component_1, tweets_component_1, pptybind_component_1, ngswitch_component_1, ngfor_component_1, contact_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (binding_component_1_1) {
                binding_component_1 = binding_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (pptybind_component_1_1) {
                pptybind_component_1 = pptybind_component_1_1;
            },
            function (ngswitch_component_1_1) {
                ngswitch_component_1 = ngswitch_component_1_1;
            },
            function (ngfor_component_1_1) {
                ngfor_component_1 = ngfor_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    //title = "My First Angular 2 App";
                    this.title = "My First Twitter App";
                    this.author = "Joe Stowers";
                    this.imageUrl = "http://lorempixel.com/200/200/people?1";
                    // 
                    // can bind post.isFavorite property value to our isFavorite
                    // property in the <favorite> component
                    this.post = {
                        title: "Post Title",
                        isFavorite: true,
                        likeCount: 10,
                        voteCount: 10,
                        iLike: false
                    };
                }
                // Example of logging the output from an event emitter on the favorite component
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log('$event', $event);
                };
                AppComponent.prototype.onLikeChange = function ($event) {
                    console.log('$event', $event);
                };
                AppComponent.prototype.onVoteChange = function ($event) {
                    console.log('$event', $event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styleUrls: ['app/app.component.css'],
                        template: "\n    \t\t<div class = 'app-main' >\n    \t\t\t<h1>{{ title }}</h1>\n    \t\t\t<h2>{{ author }}</h2>\n    \t\t\t<switch></switch>\n    \t\t\t<ngfor></ngfor>\n    \t\t\t<contact-form></contact-form>\n\t\t\t</div>\n    \t",
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
                                    <tweets></tweets>
                                    <pptybind></pptybind>
                                `,
                        */
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, binding_component_1.BindingComponent, favorite_component_1.FavoriteComponent,
                            like_component_1.LikeComponent, voter_component_1.VoterComponent, tweet_component_1.TweetComponent, tweets_component_1.TweetsComponent, pptybind_component_1.PptybindComponent,
                            ngswitch_component_1.SwitchComponent, ngfor_component_1.NgForComponent, contact_form_component_1.ContactFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map