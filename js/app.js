/*
================================================
Easy Responsive Tabs Configuration Setup
================================================
*/
$('#horizontalTab').easyResponsiveTabs({
	type: 'default',
	width: 'auto',
	fit: true
});




/*
================================================
Varibale Declaration For DOM Elements
================================================
*/
var name, //Your Name
	dob, //Date of Birth
	fromLocation, //From City
	toLocation, //To City
	departDate, //Depart Date
	returnDate, //Return Date
	travelClass, //Travelling Class

	oDate, //Date object
	date, //Current Date
	month, //Current Month
	year; //Current Year




/*
================================================
Defining DOM elements with varibale names
================================================
*/
var txtName = document.getElementById('name');
var txtDob = document.getElementById('datepickerDOB1');
var txtFromLocation = document.getElementById('city1');
var txtToLocation = document.getElementById('city2');
var txtDatePicker = document.getElementById('datepicker');
var optTravelClass = document.getElementById('changeClass');
var btnBookTicket = document.getElementById('bookTicket');




/*
================================================
Get current date for default intialization
================================================
*/
var getCurrentDate = function () {
	oDate = new Date();
	date = (oDate.getDate() > 9) ? oDate.getDate():"0"+oDate.getDate();
	month = (oDate.getMonth() > 9) ? (oDate.getMonth()+1):"0"+(oDate.getMonth()+1);
	year = (oDate.getFullYear() > 9) ? oDate.getFullYear():"0"+oDate.getFullYear();

	return month + "/" + date + "/" + year;
}




/*
================================================
Get number of days in a particular month
================================================
*/
function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}




/*
================================================
Get next date for default intialization
================================================
*/
var getNextDate = function () {
	var today = new Date();
    today.setDate((daysInMonth(year, month) == date) ? daysInMonth(year, month) : date );
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
	date = (tomorrow.getDate() > 9) ? (tomorrow.getDate()):"0"+tomorrow.getDate();
	return month + "/" + date + "/" + year;
}




/*
================================================
Default Variable Initialization for form
================================================
*/
name = "Tanish";
dob = "03/09/1993";
fromLocation = "Bengaluru";
toLocation = "Delhi";
departDate = getCurrentDate();
returnDate = getNextDate();




/*
================================================
Assign the varibale data to the form elements
================================================
*/
txtName.value = name;
txtDob.value = dob;
txtFromLocation.value = fromLocation;
txtToLocation.value = toLocation;
txtDatePicker.value = departDate;




/*
================================================
Creating an array to store object values
================================================
*/
var dataBase = [];

var objectStore = {
	"name": "",
	"dob": "",
	"from": "",
	"to": "",
	"depart": "",
	"class": ""
}




/*
================================================
Storing Data into an object
================================================
*/
var storeDataInObject = function(txtName, txtDob, txtFromLocation, txtToLocation, txtDatePicker, optTravelClass){
	objectStore.name = txtName;
	objectStore.dob = txtDob;
	objectStore.from = txtFromLocation;
	objectStore.to = txtToLocation;
	objectStore.depart = txtDatePicker;
	objectStore.class = optTravelClass;
}



/*
================================================
Displaying default data on page load
================================================
*/
var displayDefault = function(){
	storeDataInObject(txtName.value, txtDob.value, txtFromLocation.value, txtToLocation.value, txtDatePicker.value, optTravelClass.value);
	insertDataInTable(objectStore);
	dataBase.push(objectStore);
	return dataBase;
}




/*
================================================
Preventing submit button from submitting form
================================================
*/
btnBookTicket.onclick = function(event){
	event.preventDefault();
	storeDataInObject(txtName.value, txtDob.value, txtFromLocation.value, txtToLocation.value, txtDatePicker.value, optTravelClass.value);
	dataBase.push(objectStore);

	insertDataInTable(objectStore);
}



/*
================================================
Display form submitted data to the table
================================================
*/
var insertDataInTable = function(objectStore){
	tbody = document.getElementById('data');
	var newRow   = tbody.insertRow(tbody.rows.length);
	for(var temp in objectStore){
		var newCell  = newRow.insertCell(-1);
		var newText  = document.createTextNode(objectStore[temp]);
		newCell.appendChild(newText);
		console.log(objectStore[temp]);
	}
}



/*
================================================
Calling the function on loading the page
================================================
*/
document.addEventListener("DOMContentLoaded", function() {
	displayDefault();
});