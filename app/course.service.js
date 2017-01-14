// A service is just a class
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            // CoursesComponent will use this service to get the courses
            // from the server.  
            // Will not concern ourselves with consuming a RESTful API.
            CourseService = (function () {
                function CourseService() {
                }
                // method to get courses
                // specify return type as string array
                CourseService.prototype.getCourses = function () {
                    return ["Course1", "Course2", "Course3"];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map