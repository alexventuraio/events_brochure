// (function($){
// 	$(function(){

// 		$('.button-collapse').sideNav();

// 	}); // end of document ready
// })(jQuery); // end of jQuery name space

$(document).ready(function() {
	// Initialize collapse button
	// $(".button-collapse").sideNav();
	$('.button-collapse').sideNav({
		menuWidth: 300, // Default is 240
		edge: 'left', // Choose the horizontal origin
		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	});
	// Initialize collapsible (uncomment the line below if you use the dropdown variation)
	//$('.collapsible').collapsible();
	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15 // Creates a dropdown of 15 years to control year
	});
	$('select').material_select(); // Activate the Comboboxes
	// The "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal-trigger').leanModal({
		dismissible: false, // Modal can be dismissed by clicking outside of the modal
		opacity: .6, // Opacity of modal background
		// in_duration: 300, // Transition in duration
		// out_duration: 200, // Transition out duration
		// ready: function() { alert('Ready'); }, // Callback for Modal open
		// complete: function() { alert('Closed'); } // Callback for Modal close
	});
});
