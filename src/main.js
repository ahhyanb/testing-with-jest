/*  create a function that will find the highest scoring student 
    if there are multiple student with the same high score you can return any of them
*/


function findHighestScoringStudent(students) {
    students.sort((a, b) => b.score - a.score);
    return students[0];
}


const mathStudents = [
      { name: "Shane Carey", score: 9.5 },
      { name: "Catarina Lima", score: 9.7 },
      { name: "Rebecca Mills", score: 8.7 },
    ];
    
    
findHighestScoringStudent(mathStudents);




module.exports = findHighestScoringStudent;