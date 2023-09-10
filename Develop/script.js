/* When the user loads this site they should see: 
      - A title and heading, with display of the date
      - A day calendar of the times 09:00-17:00, with each time row color coded to
        represent relationship with current hour
  The user can interact with this site by: 
      - Each time row allows for input of 'to-do's', plans, or events for the hour
      - When the user inputs something to these rows, they will need to click the save 
        button on the right side of the row to lock in their text. 
      - Anything written and saved in the time rows should be visable upon page refresh
*/

/* Function ensuring that information saved within local storage is always visable, 
even upon page reload */
$(function () {
// Function ensuring script runs after the DOM is fully loaded
$(document).ready(function () {
// Iterating button class
  $('.btn').each(function () {
    // Assigning the Id of parent container to the 'btn class to a variable
    var key = $(this).parent().attr('id');
    // Getting values from local Strorage using 'key'
    var storedValue = localStorage.getItem(key);
    // If there is value within the container,
    if (storedValue !== null) {
      // The value of the container will display onto the screen as
      //    the value that is saved for the container in local storage
      $(this).siblings('textarea').val(storedValue);
    }
  })
})


  // A function to be called when a user clicks on the btn class (save button)
  $('.btn').on('click', function () {
    // Variable for the Id of btn's parent container
    var key = $(this).parent().attr('id');
    // Variable for the input to the text area within the same
    //    family as the btn class
    var value = $(this).siblings('textarea').val()
    // setting both variables^ to local storage
    localStorage.setItem(key, value)
  })

  // Creating a varaible to match with the user's current time hour
  var currentHour = dayjs().hour()
  // For each time-block class, the following funtion will run
  $('.time-block').each(function () {
    // hourBlock variable is = the second portion of the Id attribute, within the 
    //    time-block class, when Id is split in 2 by the '-' (this is the time number)
    var hourBlock = Number($(this).attr('id').split('-')[1])
    // If user's current time is greater than the time-row (past),
    if (currentHour > hourBlock) {
      // turn the background color of the text area to a light-pink
      $(this).css('background-color', '#fec5e5')
    }
    // OR if the user's current time is within the time-row (present),
    else if (currentHour === hourBlock) {
      // turn the background color of the text area to light gray
      $(this).css('background-color', '#e1dfe0')
    }
    // OR if the user's current time is less than time-row (future),
    else {
      // turn the background color of the text area to a medium/darker pink
      $(this).css('background-color', '#fc94af')
    }

  })

  // Using day.js to display the user's current day, in format, to the 'currentDay' class of HTML
  $('#currentDay').text(dayjs().format('MM/DD/YYYY'))

});
