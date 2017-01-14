// in Typescript, each file is considered a module
// in a module, often export one or more things like
// a class, function, or variable
System.register(['angular2/core', './course.service', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, course_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            // @Component function that takes an object
            // all decorators need an @ sign before
            CoursesComponent = (function () {
                // with this constructor convention, our component is no 
                // longer tightly-coupled to the service.  Makes for better
                // modular code and more efficient testing.
                // when unit testing, can pass a mock or fake service
                function CoursesComponent(courseService) {
                    this.title = "The title of courses page.";
                    this.courses = courseService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        // selector specifies a CSS selector for a host HTML element
                        // Ang2 will create instance of component in host element
                        // host element has tag 'courses'
                        selector: 'courses',
                        // template specifies HTML inserted in DOM when component's view is rendered
                        // ` character allows you to break up HTML into multiple lines
                        // use {{ }} to render title => called interpolation
                        // if the value of the property 'title' changes in the component,
                        // Ang2 will automatically update the view
                        // add lists of courses
                        template: "\n\t\t<h2>Courses</h2>\n\t\t{{ title }}\n\t\t<input type = \"text autoGrow\" />\n\t\t<ul>\n\t\t\t<li *ngFor = \"#course of courses\">\n\t\t\t{{ course }}\n\t\t\t</li>\n\t\t</ul>\n\t\t",
                        // providers
                        providers: [course_service_1.CourseService],
                        // directives
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map