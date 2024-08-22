import { students } from "./data/students.js";
import { averageGrades } from "./utils/utilsAverageGrades.js";
import { filterGrade } from "./utils/utilsFilterGrade.js";
import { courseOrder } from "./utils/utilsCourseOrder.js";
import { sortStudentsAlphabetically } from "./utils/utilsAlphabeticallyOrdered.JS";

const average = averageGrades(students);
console.log(average);

const studentsEvalue = filterGrade(students);
console.log(studentsEvalue);

const sortedStudents = sortStudentsAlphabetically(students);
console.log(sortedStudents);

const courseFinalOrder = courseOrder(students);
console.log(courseFinalOrder);


//pintar tarjetas por curso
const renderStudents = ({ id, name, age, grade, course }) => {
    const figure = document.createElement("figure");
    figure.classList.add("student-card");

    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const h3Grade = document.createElement("h3");
    const h3Course = document.createElement("h4");

    h1.textContent = `ID: ${id}`;
    h2.textContent = `Name: ${name}`;
    p.textContent = `Age: ${age}`;
    h3Grade.textContent = `Grade: ${grade}`;
    h3Course.textContent = `Course: ${course}`;

    figure.appendChild(h1);
    figure.appendChild(h2);
    figure.appendChild(p);
    figure.appendChild(h3Grade);
    figure.appendChild(h3Course);

    return figure;
};

document.addEventListener('DOMContentLoaded', () => {
    const courseFinalOrder = courseOrder(students);
    const app = document.getElementById('app');

    // Crear un contenedor para los cursos
    const courseContainer = document.createElement("div");

    // Iterar sobre cada curso y agregar sus estudiantes al contenedor
    Object.keys(courseFinalOrder).forEach((course) => {
        const courses = courseFinalOrder[course];
        
        // Crear un título para el curso
        const courseName = document.createElement("h2");
        courseName.textContent = course;
        
        // Agregar el título al contenedor del curso
        courseContainer.appendChild(courseName);

        // Crear y agregar tarjetas de estudiantes al contenedor del curso
        courses.forEach(student => {
            const studentCard = renderStudents(student);
            courseContainer.appendChild(studentCard);
        });
    });

    // Agregar el contenedor de cursos al contenedor principal del DOM
    app.appendChild(courseContainer);
});







//pintar el promedio 


document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');



    const average = averageGrades(students);
    
    const averageGrade = document.createElement("h1");
        averageGrade.textContent = `Average Grade: ${average}`;
    
    app.appendChild(averageGrade);
});




// pintar tarjetas en orden alfabetico
const container = document.querySelector(".app");

const orderTitle = document.createElement("h2");
orderTitle.textContent = "List students";
container.appendChild(orderTitle);

const orderContainer = document.createElement("ul");

sortedStudents.forEach((student) => {
console.log(student);
const studentEl = document.createElement("li")
studentEl.textContent = student.name
orderContainer.appendChild(studentEl)

});

container.appendChild(orderContainer)




// pintar tarjetas en por notas

const containerGrades = document.querySelector(".app");

const highestGrades = document.createElement("h2");
highestGrades.textContent = "Students with Highest Grades";
containerGrades.appendChild(highestGrades);

const highestGradesStudents = filterGrade(students);

const gradesContainer = document.createElement("ul");

highestGradesStudents.forEach((student) => {
    const studentGrade = document.createElement("li");
    studentGrade.textContent = `${student.name} - Grade: ${student.grade}`;
    gradesContainer.appendChild(studentGrade);
});

containerGrades.appendChild(gradesContainer);