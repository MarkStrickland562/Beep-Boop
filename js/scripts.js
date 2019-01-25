// A function to validate that the inputted number is valid.

var validate = function(myNumber) {
  if ($.isNumeric(myNumber)) {
    return true;
  }
  else {
    return false;
  }
}

// A function to process the number and return an array of either integers
// or text that replaces the integers. The array can be optionally returned
// in reverse direction.

var beepBoop = function(myNumber) {
  var numberArray = [];
  var numberString;

  for (i=0; i<= Math.abs(Math.round(myNumber)); i += 1) {
    numberString = i.toString();

    // If the integer is evenly divisible by three, replace it with a "sorry" message.
    if (i % 3 === 0 && i >= 3) {
      numberArray.push(" \"I'm sorry, " + myName + ". I'm afraid I can't do that\"");
    }
    // If the integer contains a '1', replace it with "Boop!".
    else if (numberString.match('1')) {
      numberArray.push(" \"Boop!\"");
    }
    // If the integer contains a '0', replace it with "Beep!".
    else if (numberString.match('0')) {
      numberArray.push(" \"Beep!\" ");
    }
    // Otherwise, return the integer.
    else {
      numberArray.push(" " + numberString);
    }
  }

  // If the user specified forward direction, return the array.
  if (direction === "1") {
    return numberArray;
  } else
  // Otherwise, return the array in reverse direction.
  {
  return numberArray.reverse();
  }
}

$(document).ready(function() {
  $("form#submit").submit(function(event) {
    event.preventDefault();

    myName = $("input#myName").val();

    var myNumber = $("input#myNumber").val();

    direction = $("input:radio[name=direction]:checked").val();

    // If the user didn't enter their name, show a message.
    if (!myName) {
      alert("Please enter your name");
    }
    // If the user didn't enter a number, show a message.
    else if (!myNumber) {
      alert("Please enter a valid number.");
    }
    // If the user entered a valid number, process it.
    else if (validate(myNumber)) {
      var result = beepBoop(myNumber);
      $("#result").text(result);
      $("#yourName").empty().append(myName);
      $("#result-text").fadeIn();
      $("button#showme").fadeOut();
      $("button#showmeagain").fadeIn();
    }
    // Otherwise, show a message
    else {
      alert("You entered an invalid number, please try again.");
    }

    $("input#myNumber").val('');
	});
});
