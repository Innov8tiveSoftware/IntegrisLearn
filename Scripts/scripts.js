


var facilities = [
	{
		facility: "Please select a facility.",
		inpatientHeader: "",
		inpatientCopy: "",
		outpatientHeader: "",
		outpatientCopy: ""
	},
	{
		facility: "INTEGRIS Baptist Medical Center",
		inpatientHeader: "INTEGRIS Baptist Medical Center Inpatient",
		inpatientCopy: "<p><i>Includes anyone admitted to hospital facilities.</i></p> The full suite of INTEGRIS &amp; Me features will be available <strong>January 2017</strong>.",
		outpatientHeader: "INTEGRIS Baptist Medical Center Outpatient",
		outpatientCopy: "<p><i>Includes visits without hospitalization or admission to hospital: regular doctor visits, specialist visits, tests, etc.</i></p> <p>The full suite of INTEGRIS & Me features will be available <strong>July 2016</strong>.</p> <p>However, you will have access to all the features described above <strong>this December</strong>.</p>"
	},
	{
		facility: "INTEGRIS Baptist Regional Health Center (Miami)",
		inpatientHeader: "INTEGRIS Baptist Regional Health Center Inpatient",
		inpatientCopy: "<p><i>Includes anyone admitted to hospital facilities.</i></p> The full suite of INTEGRIS &amp; Me features will be available <strong>October 2017</strong>.",
		outpatientHeader: "INTEGRIS Baptist Regional Health Center Outpatient",
		outpatientCopy: "<p><i>Includes visits without hospitalization or admission to hospital: regular doctor visits, specialist visits, tests, etc.</i></p> <p>The full suite of INTEGRIS & Me features will be available <strong>November 2016</strong>.</p><p>However, you will have access to all the features described above <strong>this December</strong>.</p>"
	},
	{
		facility: "INTEGRIS Bass Baptist Health Center (Enid)",
		inpatientHeader: "INTEGRIS Bass Baptist Health Center Inpatient",
		inpatientCopy: "<p><i>Includes anyone admitted to hospital facilities.</i></p> <p>The full suite of INTEGRIS & Me features will be available <strong>May 2016</strong>.</p>",
		outpatientHeader: "INTEGRIS Bass Baptist Health Center Outpatient",
		outpatientCopy: "<p><i>Includes visits without hospitalization or admission to hospital: regular doctor visits, specialist visits, tests, etc.</i></p><p>The full suite of INTEGRIS & Me features will be available <strong>this December</strong>.</p>"
	},
	{
		facility: "INTEGRIS Cancer Institute",
		inpatientHeader: "INTEGRIS Cancer Institute Inpatient",
		inpatientCopy: "<p><i>Includes anyone admitted to hospital facilities.</i></p><p>The full suite of INTEGRIS & Me features will be available <strong>January 2017</strong>.</p>",
		outpatientHeader: "INTEGRIS Cancer Institute Outpatient",
		outpatientCopy: "<p><i>Includes visits without hospitalization or admission to hospital: regular doctor visits, specialist visits, tests, etc.</i></p><p>The full suite of INTEGRIS & Me features will be available <strong>July 2016</strong>.</p><p>However, you will have access to all the features described above <strong>this December</strong>.</p>"
	},
	{
		facility: "INTEGRIS Canadian Valley Hospital (Yukon)",
		inpatientHeader: "INTEGRIS Canadian Valley Hospital Inpatient",
		inpatientCopy: "<p><i>Includes anyone admitted to hospital facilities.</i></p><p>The full suite of INTEGRIS & Me features will be available <strong>July 2017</strong>.</p>",
		outpatientHeader: "INTEGRIS Canadian Valley Hospital Outpatient",
		outpatientCopy: "<p><i>Includes visits without hospitalization or admission to hospital: regular doctor visits, specialist visits, tests, etc.</i></p><p>The full suite of INTEGRIS & Me features will be available <strong>July 2016</strong>.</p><p>However, you will have access to all the features described above <strong>this December</strong>.</p>"
	},
	{
		facility: "INTEGRIS Grove Hospital",
		inpatientHeader: "INTEGRIS Grove Hospital Inpatient",
		inpatientCopy: "<p><i>Includes anyone admitted to hospital facilities.</i></p><p>The full suite of INTEGRIS & Me features will be available <strong>October 2017</strong>.</p>",
		outpatientHeader: "INTEGRIS Grove Hospital Outpatient",
		outpatientCopy: "<p><i>Includes visits without hospitalization or admission to hospital: regular doctor visits, specialist visits, tests, etc.</i></p><p>The full suite of INTEGRIS & Me features will be available <strong>November 2016</strong>.</p><p>However, you will have access to all the features described above <strong>this December</strong>.</p>"
	},
	{
		facility: "INTEGRIS Health Edmond",
		inpatientHeader: "INTEGRIS Health Edmond Inpatient",
		inpatientCopy: "<p><i>Includes anyone admitted to hospital facilities.</i></p><p>The full suite of INTEGRIS & Me features will be available <strong>July 2017</strong>.</p>",
		outpatientHeader: "INTEGRIS Health Edmond Outpatient",
		outpatientCopy: "<p><i>Includes visits without hospitalization or admission to hospital: regular doctor visits, specialist visits, tests, etc.</i></p><p>The full suite of INTEGRIS & Me features will be available <strong>July 2016</strong>.</p><p>However, you will have access to all the features described above <strong>this December</strong>.</p>"
	},
	{
		facility: "INTEGRIS Southwest Medical Center",
		inpatientHeader: "INTEGRIS Southwest Medical Center Inpatient",
		inpatientCopy: "<p><i>Includes anyone admitted to hospital facilities.</i></p><p>The full suite of INTEGRIS &amp; Me features will be available <strong>July 2017</strong>.</p>",
		outpatientHeader: "INTEGRIS Southwest Medical Center Outpatient",
		outpatientCopy: "<p><i>Includes visits without hospitalization or admission to hospital: regular doctor visits, specialist visits, tests, etc.</i></p><p>The full suite of INTEGRIS & Me features will be available <strong>July 2016</strong>.</p><p>However, you will have access to all the features described above <strong>this December</strong>.</p>"
	},
	{
		facility: "Lakeside Women’s Hospital",
		inpatientHeader: "INTEGRIS Lakeside Women’s Hospital Inpatient",
		inpatientCopy: "<p><i>Includes anyone admitted to hospital facilities.</i></p><p>The full suite of INTEGRIS & Me features will be available <strong>January 2017</strong>.</p>",
		outpatientHeader: "INTEGRIS Lakeside Women’s Hospital Outpatient",
		outpatientCopy: "<p><i>Includes visits without hospitalization or admission to hospital: regular doctor visits, specialist visits, tests, etc.</i></p><p>The full suite of INTEGRIS &amp; Me features will be available <strong>July 2016</strong>.</p><p>However, you will have access to all the features described above <strong>this December</strong>.</p>"
	}

];

// start auto rotate marquee
$(function () {
	if ($(".swiper-container").length) {
		var swiper = new Swiper('.swiper-container', {
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			autoplay: 5000,
			speed: 2000,
			effect: "fade",
			loop: true,
			fade: { crossFade: true }
		});
	}
});

// run after entire page is loaded
$(window).bind("load", function () {

	/* populate facility select list */
	for (var i = 0; i < facilities.length; i++) {
		$('.facility-selector').append($('<option>', {
			value: facilities[i].facility,
			text: facilities[i].facility
		}));
	}

	/* show facility details */
	$('.facility-selector').change(function (event) {
		var selectedIndex = $(".facility-selector option:selected").index();
		if (selectedIndex == 0) {
			$('#facility-details-container').hide(500);
		} else if (selectedIndex <= facilities.length) {
			$('.selected-facility').html(facilities[selectedIndex].facility);
			$('.facility-inpatient-header').html(facilities[selectedIndex].inpatientHeader);
			$('.facility-inpatient-copy').html(facilities[selectedIndex].inpatientCopy);
			$('.facility-outpatient-header').html(facilities[selectedIndex].outpatientHeader);
			$('.facility-outpatient-copy').html(facilities[selectedIndex].outpatientCopy);
			$('#facility-details-container').show(500);
		}
	});

});