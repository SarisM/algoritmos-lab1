// Organizar a los estudiantes en un objeto basado en su curso 


export const courseOrder = (students) => {
    const accumulator = {};
    students.forEach(student => {
        if (accumulator[student.course]) {
            accumulator[student.course].push(student);
        } else {
            accumulator[student.course] = [student]; 
        }
    });
    return accumulator;
}




