import msg from './message.js'
import $ from 'jquery'

$(function() {
	$('#ShowBtn').on('click', function() {
		var om = new msg();
		om.show();
	})
})