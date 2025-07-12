// interface Teacher {
//     readonly firstName: string;
//     readonly lastName: string;
//     fullTimeEmployee: boolean;
//     yearsOfExperience: number;
// 		location: string;
// 		[key: string]: any;
// 	}

// const teacher3: Teacher = {
// 	firstName: 'John',
// 	fullTimeEmployee: false,
// 	lastName: 'Doe',
// 	location: 'London',
// 	contract: false,
// 	yearsOfExperience: 0
// };

// console.log(teacher3);

// interface Directors extends Teacher {
// 	numberOfReports: number
// }

// // const director1: Directors = {
// // 	firstName: 'John',
// // 	lastName: 'Doe',
// // 	location: 'London',
// // 	fullTimeEmployee: true,
// // 	numberOfReports: 17,
// // 	yearsOfExperience: 0
// // };
// // console.log(director1);

// interface printTeacherFunction {
// 	(firstName:string, lastName:string):string
// }

// const printTeacher:printTeacherFunction = (firstName, lastName):string => {
// 	return `${firstName[0]}. ${lastName}`
// }

//  console.log(printTeacher("John", "Doe"))

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

class StudentClass implements Student {
	firstName: string
	lastName:string
	constructor (firstName:string, lastName:string) {
		this.firstName = firstName;
		this.lastName = lastName
	};

	 workOnHomework = ():string => {
		return "Currently working";
	};
	
	displayName = ():string => {
		return this.firstName
	}
}

const student = new StudentClass("Edwin", "Emmanuel");
console.log(student.displayName())