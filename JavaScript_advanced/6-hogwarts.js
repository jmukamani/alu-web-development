// Module studentHogwarts
let studentHogwarts = (() => {
    let privateScore = 0;
    let name = null;
  
    const changeScoreBy = (points) => {
      privateScore += points;
    };
  
    return {
      setName: (newName) => {
        name = newName;
        return this;
      },
      rewardStudent: () => {
        changeScoreBy(1);
        return this;
      },
      penalizeStudent: () => {
        changeScoreBy(-1);
        return this;
      },
      getScore: () => {
        return `${name}: ${privateScore}`;
      }
    };
  })();
  
  // Create instances of studentHogwarts
  let harry = Object.create(studentHogwarts);
  harry.setName("Harry")
    .rewardStudent()
    .rewardStudent()
    .rewardStudent()
    .rewardStudent();
  
  console.log(harry.getScore()); 
  
  let draco = Object.create(studentHogwarts);
  draco.setName("Draco")
    .rewardStudent()
    .penalizeStudent()
    .penalizeStudent()
    .penalizeStudent();
  
  console.log(draco.getScore()); 