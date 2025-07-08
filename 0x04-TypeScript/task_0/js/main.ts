// student interface
interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
};

// student variables
const studentOne:Student ={firstName:"Emmanuel", lastName:"Edwin", age:20, location:"Abuja"};
const studentTwo:Student ={firstName:"Peter", lastName:"Silas", age:22, location:"Lagos"};

// student arrays
const studentsList:Student[] =[studentOne, studentTwo];

// student table
const table= document.createElement('table');
const tableHead = document.createElement('thead');
const tableBody = document.createElement('tbody');

// table headers
const headerRow = document.createElement('tr');
const header_one = document.createElement('th');
header_one.textContent ='First Name';

const header_two = document.createElement('th');
header_two.textContent ='Location';
headerRow.appendChild(header_one);
headerRow.appendChild(header_two);
tableHead.appendChild(headerRow)

// create table rows
studentsList.map((student:Student) => {
    const tableRow = document.createElement('tr');

    const first_name = document.createElement('td');
    first_name.textContent = student.firstName

    const locationRow = document.createElement('td');
    locationRow.textContent = student.location;

    tableRow.appendChild(first_name);
    tableRow.appendChild(locationRow);

    tableBody.appendChild(tableRow);
});

table.appendChild(tableHead);
table.appendChild(tableBody);
document.body.appendChild(table)