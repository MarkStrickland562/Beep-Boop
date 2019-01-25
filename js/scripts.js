var beepBoop = function(myNumber) {
  return false;
}

$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();

    var myNumber = $("input#myNumber").val();
    var result = beepBoop(myNumber);
    $("#result").text(result);
	});
});
