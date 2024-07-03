const welcome = function(firstName, lastName) {
  let fullName = firstName + " " + lastName;

  function displayFullName() {
    alert("Welcome " + fullName + "!");
  }

  displayFullName();
};