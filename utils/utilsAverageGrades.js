// Calcula el promedio de las calificaciones (grade) de todos los estudiantes.

export const averageGrades =(students) => {
    const sumaTotal = students.reduce((suma, estudiante) => suma + estudiante.grade, 0);
    const media = sumaTotal / students.length;
    return media;
}