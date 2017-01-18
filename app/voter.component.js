System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.voteCount = 10;
                    this.myVote = 0;
                }
                VoterComponent.prototype.onUpvote = function () {
                    if (this.myVote === -1) {
                        this.voteCount += 1;
                        this.myVote = 0;
                    }
                    else if (this.myVote === 0) {
                        this.voteCount += 1;
                        this.myVote = 1;
                    }
                    else
                        this.myVote = 1;
                    console.log('up myVote', this.myVote);
                    console.log('up voteCount', this.voteCount);
                };
                VoterComponent.prototype.onDownvote = function () {
                    if (this.myVote === 1) {
                        this.voteCount -= 1;
                        this.myVote = 0;
                    }
                    else if (this.myVote === 0) {
                        this.voteCount -= 1;
                        this.myVote = -1;
                    }
                    else
                        this.myVote = -1;
                    console.log('down myVote', this.myVote);
                    console.log('down voteCount', this.voteCount);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "myVote", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        styleUrls: ['app/voter.component.css'],
                        template: "\n\t\t\t<div class = \"voterFeature\">\n\n\t\t\t\t<i class = \"glyphicon glyphicon-menu-up\"\n\t\t\t\t\t(click) = onUpvote()>\n\t\t\t\t</i>\n\n\t\t\t\t<span class = \"votes\"> {{voteCount}} </span>\n\n\t\t\t\t<i class = \"glyphicon glyphicon-menu-down\"\n\t\t\t\t\t(click) = onDownvote()>\n\t\t\t\t</i>\n\n\t\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map