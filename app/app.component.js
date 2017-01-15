System.register(['angular2/core', './courses.component', './authors.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "My First Angular 2 App";
                    this.imageUrl = "http://lorempixel.com/400/200/";
                    // Bootstrap button class modifiers
                    this.isActive = true;
                    this.isDisabled = true;
                }
                AppComponent.prototype.onDivClick = function ($event) {
                    console.log('Click Event Propagation', $event.target);
                };
                ;
                // Can use methods to get access to the DOM element that 
                // raised the event.
                // $event => gives you access to the DOM event (object)
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log('Clicked', $event);
                };
                ;
                // implement two-data binding manually
                AppComponent.prototype.onChangeInput = function ($event) {
                    this.title = $event.target.value;
                    console.log('this.title =', this.title);
                };
                AppComponent.prototype.onClearTitle = function () {
                    this.title = '';
                    console.log('this.title =', this.title);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        // when Ang2 sees 'my-app', it will place the <h1> and <courses> elements
                        selector: 'my-app',
                        template: "\n    \t\t<h1>{{ title }}</h1>\n    \t\t<img [src] = \"imageUrl\" />\n\n    \t\t<input type = \"text\" [value] = \"title\" (input) = \"onChangeInput($event)\">\n\n    \t\t<input type = \"button\"(click)=onClearTitle() value = \"Clear\" />\n\n    \t\t<div (click) = \"onDivClick($event)\">\n    \t\t\t<button\n    \t\t\t\tclass = \"btn btn-lg btn-primary\"\n    \t\t\t\t[style.backgroundColor]= \"isActive ? 'light blue' : 'gray'\"\t\n    \t\t\t\t(click) = 'onClick($event)'>Lg Submit\n\t\t\t\t</button>\n    \t\t</div>\n\t\t\t<button\n\t\t\t\tclass = \"btn btn-md btn-primary\" \n    \t\t\t[class.disabled]=\"isDisabled\">Med Disabled\n\t\t\t</button>\n    \t\t<courses></courses>\n    \t\t<authors></authors>\n    \t\t",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*

    <button
                

*/ 
//# sourceMappingURL=app.component.js.map