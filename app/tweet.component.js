System.register(['angular2/core', './tweet.service'], function(exports_1, context_1) {
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
    var core_1, tweet_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetService) {
                    this.author = "Joe Stowers";
                    this.tweets = tweetService.getTweets();
                }
                TweetComponent = __decorate([
                    core_1.Component({
                        providers: [tweet_service_1.TweetService],
                        selector: 'tweet',
                        styleUrls: ['app/tweet.component.css'],
                        template: "\n\t\t<div class = \"main\" >\n\n\t\t\t<div class=\"media\">\n\t\t\t  \t<div class=\"media-left\">\n\t\t\t    \t<a href=\"#\">\n\t\t\t\t\t\t<img class=\"media-object\" src='http://lorempixel.com/200/200/people?1' alt=\"TEST\">\n\t\t\t    \t</a>\n\t\t\t  \t</div>\n\t\t\t  \t<div class=\"media-body\">\n\t\t\t  \t\t<div *ngFor = \"#tweet of tweets\">\n\t\t\t  \t\t\t<img src={{tweet.image}}>\n\t\t\t  \t\t\t<h4 class=\"media-heading\">{{ tweet.author }}</h4>\n\t\t\t  \t\t\t<p class =\"tweet-body\">{{ tweet.message }}</p>\n\t\t\t  \t\t</div>\n\t\t\t  \t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map