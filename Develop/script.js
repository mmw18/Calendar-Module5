// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  $('.btn').on('click', function () {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('textarea').val()

    localStorage.setItem(key, value)
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var currentHour = dayjs().hour()
  $('.time-block').each(function () {
    var hourBlock = Number($(this).attr('id').split('-')[1])
    // console.log(hourBlock, currentHour);

    if (currentHour > hourBlock) {
      // you want to add the class of past to the div
      $(this).css('background-color', '#edcbd4')
      console.log("past");
    }
    else if (currentHour === hourBlock) {
      // add the class of present to the div
      $(this).css('background-color', '#cdbcbd')
      console.log("present");
    }
    else {
      // add theclass of future
      $(this).css('background-color', '#c85d7a')
      console.log("future");
    }

  })
  // var str = 'hello-19'

  // console.log(parseInt(str.split('-')[1]));

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // console.log(dayjs().hour());



  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('MM/DD/YYYY'))
});
