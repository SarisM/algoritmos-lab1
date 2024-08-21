
//Ordenar a los estudiantes alfabeticamente

export const sortStudentsAlphabetically = (studentsArray) => {
    return studentsArray.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }