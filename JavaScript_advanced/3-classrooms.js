function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
      return function() {
        return seat;
      };
    }
  
    let students = [];
  
    for (let i = 0; i < numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    return students;
  }
  
  let classRoom = createClassRoom(10);
  
  // Now you can call each student's seat function
  for (let i = 0; i < classRoom.length; i++) {
    console.log(classRoom[i]()); // prints 1 to 10
  }