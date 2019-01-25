var validate = function(myNumber) {
  if ($.isNumeric(myNumber)) {
    return true;
  }
  else {
    return false;
  }
}

var beepBoop = function(myNumber) {

  return false;
}

$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();

    var myNumber = $("input#myNumber").val();
    if (validate(myNumber)) {
      var result = beepBoop(myNumber);
      $("#result").text(result);
    }
    else {
      $("#result").text("You entered an invalid number, please try again.");
    }
	});
});
