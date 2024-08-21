
import { students } from "./data/students.js";
import { averageGrades } from "./utils/utilsAverageGrades.js";
import { filterGrade } from "./utils/utilsFilterGrade.js";
import { courseOrder } from "./utils/utilsCourseOrder.js";
import { sortStudentsAlphabetically } from "./utils/utilsAlphabeticallyOrdered.JS";
import { renderStudents } from "./renderStudents.js";


const average = averageGrades (students)
console.log(average);

const studentsEvalue = filterGrade(students)
console.log(studentsEvalue);
 
const sortedStudents = sortStudentsAlphabetically(students)
console.log(sortedStudents);

const courseFinalOrder = courseOrder(students)
console.log(courseFinalOrder)


//contenedor app del html
const container = document.querySelector(".app");

students.forEach((student) => {
    //aqui cramos el estudiante
    const studentFigure = renderStudents(student);

    //y aqui agregamos el personaje al contenedor del html
    container.appendChild(studentFigure);
})