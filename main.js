$(document).ready(function () {

	$("#mybutton").on("click", function (e) {
		e.preventDefault();
		// Disables the button's default behavior
		$("#mybutton").prop("disabled", true);
	});
	// When my button is clicked, disable the button.

	$("button").click(function () {
		$("[src]").hide(1000);
	});

	$("button").click(function () {
		$("p").css("color", "green");
		$("p").css("font-style", "italic")
	});


}); // Close all functions.