// A service is just a class

// CoursesComponent will use this service to get the courses
// from the server.  

// Will not concern ourselves with consuming a RESTful API.

export class CourseService {

	// method to get courses
	// specify return type as string array
	getCourses() : string[] {
		return ["Course1", "Course2", "Course3"];
	}
}