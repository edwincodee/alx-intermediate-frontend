// interface DirectorInterface {
//     workFromHome(): string;
//     getCoffeeBreak(): string;
//     workDirectorTasks(): string;
// };

// interface TeacherInterface {
//     workFromHome(): string;
//     getCoffeeBreak(): string;
//     workTeacherTask(): string;
// };

// class Director implements DirectorInterface {
//  workFromHome(): string {
//      return "Working from home";
//  };
//  getCoffeeBreak():string {
//     return "Getting a coffee break";
//  };
//  workDirectorTasks(): string {
//      return "Getting to director tasks";
//  }
// }

// class Teacher implements TeacherInterface{
//     workFromHome(): string {
//         return "Cannot work from home";
//     };
//     getCoffeeBreak(): string {
//         return "Cannot have a break";
//     };
//     workTeacherTask(): string {
//         return "Getting to work";
//     };
// }

// function createEmployee (salary:number | string): Director | Teacher {
//     if (typeof salary === "number" && salary < 500) {
//         return new Teacher()
//     } else {
//         return new Director()
//     }
// }
// console.log(createEmployee(200));

// function isDirector(employee: Director | Teacher):employee is Director {
//     return (employee as Director).workDirectorTasks !== undefined
// }

// const executeWork = (employee: Director | Teacher) => {
// if (isDirector(employee)) {
//     return employee.workDirectorTasks();
// } else {
//     return employee.workTeacherTask();
// }
// }


type Subjects = "Math" | "History";

const teachClass = (todayClass:Subjects):string => {
 if (todayClass === "Math") {
    return "Teaching Math"
 } else {
    return "Teaching History"
 }
}