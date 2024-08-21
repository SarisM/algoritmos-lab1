export const renderStudents = ({id, name, age, grade, course}) => {

    const figure = document.createElement("figure");
    figure.classList.add("student-card");


    //creamos etiquetas vacias
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const h3Grade = document.createElement("h3");
    const h3Course = document.createElement("h4");

    //ahora le asignamos valores a las etiquetas
    h1.textContent = id;
    h2.textContent = name;
    p.textContent = age;
    h3Grade.textContent = grade;
    h3Course.textContent = course;


    //ahora agregamos todo a la figura o cartita
    figure.appendChild(h1);
    figure.appendChild(h2);
    figure.appendChild(p);
    figure.appendChild(h3Grade);
    figure.appendChild(h3Course);

    //ahora retornamos la figura que contiene todo
    return figure;

}