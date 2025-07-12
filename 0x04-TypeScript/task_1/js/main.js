// interface Teacher {
//     readonly firstName: string;
//     readonly lastName: string;
//     fullTimeEmployee: boolean;
//     yearsOfExperience: number;
// 		location: string;
// 		[key: string]: any;
// 	}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        var _this = this;
        this.workOnHomework = function () {
            return "Currently working";
        };
        this.displayName = function () {
            return _this.firstName;
        };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    return StudentClass;
}());
var student = new StudentClass("Edwin", "Emmanuel");
console.log(student.displayName());
