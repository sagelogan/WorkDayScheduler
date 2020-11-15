//main planner function
$(document).ready(function () {
//VARIABLES
    //grab and format current date/stime
    $('p#currentDay').append(moment().format('dddd, MMM Do'));
    // get and track the current hour from moment js
    var currentDisplayHour = moment().format('ha');
    //create color cordination for the hour inputs based on the current hour and if a box is in the past,present or future
    var timeArr = $('input'); 

    //for loop to adjust the hour divs based on time in loop
    for (i = 0; i < timeArr.length; i++) {

      var hour = $(timeArr[i]).attr('id');

      var toDO = localStorage.getItem('item' + hour); 
      $(timeArr[i]).val(toDO);

      var timeDifference = moment(hour, 'ha').diff(moment(currentDisplayHour, 'ha'), 'hours');

      if (timeDifference < 0) {
        $(timeArr[i]).css('background', '#d3d3d3');
      } else if (timeDifference === 0) {
        $(timeArr[i]).css('background', 'red');
      } else {
        $(timeArr[i]).css('background', 'green');
      }
    }
  


    //9am event listener
    $('#saveButton9am').on('click', function () {
      $('input#9am').addClass('firstClick');
  
      //Set Local storage
      var toDOInput = $('#9am').val();
      localStorage.setItem('item9am', toDOInput);
  
      $('#saveButton9am').on('click', function () {
        $('input#9am').addClass('secondClick');
  
        //Remove Local Storage
        localStorage.removeItem('item9am');
      });
  
      //Remove text from input with garbage can
      $('#trashButton9am').on('click', function () {
        $('input#9am').val('').removeClass();
      });
    });
  


    
    //10am event listener
    $('#saveButton10am').on('click', function () {
      $('input#10am').addClass('firstClick');
  
      //Set Local Storage
      var toDOInput = $('#10am').val();
      localStorage.setItem('item10am', toDOInput);
  
      $('#saveButton10am').on('click', function () {
        $('input#10am').addClass('secondClick');
        //Remove Local Storage
        localStorage.removeItem('item10am');
      });
  
      //Remove text from input with garbage can
      $('#trashButton10am').on('click', function () {
        $('input#10am').val('').removeClass();
      });
    });
  



    //11am event listener
    $('#saveButton11am').on('click', function () {
      $('input#11am').addClass('firstClick');
  
      //Set Local Storage
      var toDOInput = $('#11am').val();
      localStorage.setItem('item11am', toDOInput);
  
      $('#saveButton11am').on('click', function () {
        $('input#11am').addClass('secondClick');
        //Remove Local Storage
        localStorage.removeItem('item11am');
      });
  
      //Remove text from input with garbage can
      $('#trashButton11am').on('click', function () {
        $('input#11am').val('').removeClass();
      });
    });


    
  
    // 12pm event listener
    $('#saveButton12pm').on('click', function () {
      $('input#12pm').addClass('firstClick');
  
      // Set Local Storage
      var toDOInput = $('#12pm').val();
      localStorage.setItem('item12pm', toDOInput);
  
      $('#saveButton12pm').on('click', function () {
        $('input#12pm').addClass('secondClick');
        //Remove Local Storage
        localStorage.removeItem('item12pm');
      });
  
      // Remove text from input with garbage can
      $('#trashButton12pm').on('click', function () {
        $('input#12pm').val('').removeClass();
      });
    });
  



    // 1pm event listener
    $('#saveButton1pm').on('click', function () {
      $('input#1pm').addClass('firstClick');
  
      // Set Local Storage
      var toDOInput = $('#1pm').val();
      localStorage.setItem('item1pm', toDOInput);
  
      $('#saveButton1pm').on('click', function () {
        $('input#1pm').addClass('secondClick');
        // Remove Local Storage
        localStorage.removeItem('item1pm');
      });
  
      // Remove text from input with garbage can
      $('#trashButton1pm').on('click', function () {
        $('input#1pm').val('').removeClass();
      });
    });
  



    // 2pm event listener
    $('#saveButton2pm').on('click', function () {
      $('input#2pm').addClass('firstClick');
  
      // Set Local Storage
      var toDOInput = $('#2pm').val();
      localStorage.setItem('item2pm', toDOInput);
  
      $('#saveButton2pm').on('click', function () {
        $('input#2pm').addClass('secondClick');
        // Remove Local Storage
        localStorage.removeItem('item2pm');
      });
  
      // Remove text from input with garbage can
      $('#trashButton2pm').on('click', function () {
        $('input#2pm').val('').removeClass();
      });
    });
  



    // 3pm event listener
    $('#saveButton3pm').on('click', function () {
      $('input#3pm').addClass('firstClick');
  
      // Set Local Storage
      var toDOInput = $('#3pm').val();
      localStorage.setItem('item3pm', toDOInput);
  
      $('#saveButton3pm').on('click', function () {
        $('input#3pm').addClass('secondClick');
        // Remove Local Storage
        localStorage.removeItem('item3pm');
      });
  
      // Remove text from input with garbage can
      $('#trashButton3pm').on('click', function () {
        $('input#3pm').val('').removeClass();
      });
    });



  
    // 4pm event listener
    $('#saveButton4pm').on('click', function () {
      $('input#4pm').addClass('firstClick');
  
      // Set Local Storage
      var toDOInput = $('#4pm').val();
      localStorage.setItem('item4pm', toDOInput);
  
      $('#saveButton4pm').on('click', function () {
        $('input#4pm').addClass('secondClick');
        // Remove Local Storage
        localStorage.removeItem('item4pm');
      });
  
      // Remove text from input with garbage can
      $('#trashButton4pm').on('click', function () {
        $('input#4pm').val('').removeClass();
      });
    });
  



    // 5pm  event listener
    $('#saveButton5pm').on('click', function () {
      $('input#5pm').addClass('firstClick');
  
      // Set Local Storage
      var toDOInput = $('#5pm').val();
      localStorage.setItem('item5pm', toDOInput);
  
      $('#saveButton5pm').on('click', function () {
        $('input#5pm').addClass('secondClick');
        // Remove Local Storage
        localStorage.removeItem('item5pm');
      });
  
      // Remove text from input with garbage can
      $('#trashButton5pm').on('click', function () {
        $('input#5pm').val('').removeClass();
      });
    });
  });
  