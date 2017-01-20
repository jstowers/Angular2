System.register(['angular2/core', './like.component'], function(exports_1, context_1) {
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
    var core_1, like_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            // TweetComponent generates the basic rendering template
            // for each tweet.
            TweetComponent = (function () {
                // Not sure why Mosh added this here?
                // this.data = undefined
                function TweetComponent() {
                    console.log('TweetComponent data', this.data);
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "data", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        styleUrls: ['app/tweet.component.css'],
                        template: "\n\t\t<div class=\"media\">\n\t\t  \t<div class=\"media-left\">\n\t\t    \t<a href=\"#\">\n\t\t    \t\t<img class=\"media-object\" src= \"{{ data.image }}\">\n\t\t    \t</a>\n\t\t  \t</div>\n\t\t  \t<div class=\"media-body\">\n\t  \t\t\t<h4 class=\"media-heading\">\n\t  \t\t\t\t{{ data.author }} \n\t  \t\t\t\t<span class = \"tweet-handle\"> {{ data.handle }} </span>\n  \t\t\t\t</h4>\n\t  \t\t\t{{ data.message }}\n\t  \t\t\t<div class = \"like-body\">\n\t\t  \t\t\t<like [likeCount] = \"data.likeCount\"\n\t    \t\t\t\t  [iLike] = \"data.iLike\"\n\t    \t\t\t\t(change) = onLikeChange($event) >\n\t\t\t\t\t</like>\n\t  \t\t\t</div>\n\t  \t\t</div>\n\t\t</div>\n\t",
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map