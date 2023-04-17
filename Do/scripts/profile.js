(function () {
  ("use strict");

  const profile_pic = document.getElementById("profile_pic");
  const drop_menu = document.getElementById("submenu");

  profile_pic.addEventListener("click", function (event) {
    event.preventDefault();
    view_dropdown();
  });

  function view_dropdown() {
    drop_menu.classList.toggle("open_menu");
  }

  //========================== adding habit
  const inputField = document.getElementById("new_habit");
  const addHabit = document.getElementById("add_habit");

  addHabit.addEventListener("click", function () {
    const clonedInput = inputField.cloneNode(true);
    clonedInput.id =
      "new_habit_" +
      (document.querySelectorAll("#habits_list input").length + 1);

    document.getElementById("habits_list").appendChild(clonedInput);
    clonedInput.style.display = "block";
  });

  //=======================sending data

  // Get the popup div and the button element
  const popupDiv = document.getElementById("popup");
  const buttonElement = document.getElementById("submit_btn");

  // Add an event listener to the button element
  buttonElement.addEventListener("click", function (event) {
    // Hide the popup div
    popupDiv.style.display = "none";
        console.log("h");

    event.preventDefault();

  });
  
})();
