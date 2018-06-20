// jQuery TODO: SOLUTION

// When the user clicks any button, run addTask.
$("button").click(addTask);

// Add a listener to the document.
// It should keep an ear out for a click on elements with an id of "delete".
// We can't use .click, because the element is dynamically created.
$(document).on("click", "#delete", removeTask);

// When a user presses any key on their keyboard,
$("input").keypress(function(event) {

  // listen to see that key was "enter."
  if (event.which === 13) {

    // If so, run addTask.
    addTask();
  }
});

// Function to add a task.
function addTask() {

  // Get the content (value) of the input box.
  var task = $("#new-task").val();

  // Append that content to the #tasks div.
  // Nest our content in another div in another div
  // with a span containing an X.
  // Notice the id? We can delete the task whenever the user clicks the span.
  $("#tasks").append("<div>" + task + "<span id='delete'>X</span></div>");

  // Clear the content of the input box.
  $("#new-task").val("");
}

// Function to remove a task.
function removeTask() {

  // Grab the closest div to the element that was clicked and remove it.
  // (In this case, the closest element is the one that's encapsulating it.)
  $(this).closest("div").remove();
}
