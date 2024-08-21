// Filtra a los estudiantes que tienen una calificación (grade)  
// mayor a 80 y luego ordénalos de mayor a menor calificación.

export const filterGrade = (students) => {
    const evaluateStudents = students.filter(student => student.grade >= 80);
    return evaluateStudents.sort((a, b) => b.grade - a.grade);
}