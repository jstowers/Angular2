System.register(['angular2/core', './courses.component', './authors.component', './binding.component', './favorite.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, binding_component_1, favorite_component_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "My First Angular 2 App";
                    this.imageUrl = "http://lorempixel.com/400/200/";
                    // can bind post.isFavorite property value to our isFavorite
                    // property in the <favorite> component
                    this.post = {
                        title: "Post Title",
                        isFavorite: true
                    };
                }
                // Example of logging the output from an event emitter on the favorite component
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log('$event', $event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t\t\t<h1>{{ title }}</h1>\n    \t\t\t<img [src] = \"imageUrl\" />\n    \t\t\t<authors></authors>\n    \t\t\t<binding [bind-title] = \"title\"></binding>\n    \t\t\t<favorite [isFavorite] = \"post.isFavorite\" \n    \t\t\t\t(change) = onFavoriteChange($event) ></favorite>\n    \t\t",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, binding_component_1.BindingComponent, favorite_component_1.FavoriteComponent]
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