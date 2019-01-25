var validate = function(myNumber) {
  if ($.isNumeric(myNumber)) {
    return true;
  }
  else {
    return false;
  }
}

var beepBoop = function(myNumber) {
  var numberArray = [];
  var numberString;

  for (i=0; i<= Math.abs(Math.round(myNumber)); i += 1) {
    numberString = i.toString();
    if (i % 3 === 0 && i >= 3) {
      numberArray.push(" \"I'm sorry, Dave. I'm afraid I can't do that\"");
    }
    else if (numberString.match('1')) {
      numberArray.push(" \"Boop!\"");
    }
    else if (numberString.match('0')) {
      numberArray.push(" \"Beep!\" ");
    }
    else {
      numberArray.push(" " + numberString);
    }
  }
  return numberArray;
}

$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();

    var myNumber = $("input#myNumber").val();
    if (!myNumber) {
      $("#result").text("Please enter a valid number.");
    }
    else if (validate(myNumber)) {
      var result = beepBoop(myNumber);
      $("#result").text(result);
    }
    else {
      $("#result").text("You entered an invalid number, please try again.");
    }

    $("input#myNumber").val('');
	});
});
