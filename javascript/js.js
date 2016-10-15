'use strict';

console.log("-- : ", window.localStorage, typeof(Storage));
function init() {
	var handsets = [
		{name: "OnePlus 1", company: "OP-OnePlus", releaseDate: "Mar 2016"},
		{name: "OnasasePlus 2", company: "OP-OnePlus", releaseDate: "Mar 2016"},
		{name: "OnePlus 3", company: "OP-OnePlus", releaseDate: "Mar 2016"},
		{name: "OnePlus 4", company: "OP-OnePlus", releaseDate: "Mar 2016"},
		{name: "OnePlus 5", company: "OP-OnePlus", releaseDate: "Mar 2016"},
		{name: "OnePlus 6", company: "OP-OnePlus", releaseDate: "Mar 2016"},
		{name: "OnePlus 7",company: "OP-OnePlus", releaseDate: "Mar 2016"},
		{name: "OnePlus 8",company: "OP-OnePlus", releaseDate: "Mar 2016"},
		{name: "OnePlus 9",company: "OP-OnePlus", releaseDate: "Mar 2016"},
		{name: "OnePlus 10",company: "OP-OnePlus", releaseDate: "Mar 2016"},
		{name: "OnePlus 11",company: "OP-OnePlus", releaseDate: "Mar 2016"},
		{name: "OnePlus 12",company: "OP-OnePlus", releaseDate: "Mar 2016"}
	];
	// if( !window.localStorage.hasOwnProperty("allHandsets") ) {
		window.localStorage.setItem("allHandsets", JSON.stringify( handsets ));
	// }
}
init();
console.log("-- : ", window.localStorage);

function addPhone(){
	console.log('new phone.');
	var displayView = document.getElementById( 'displayView' );
	displayView.style.display = "none";
	var inputView = document.getElementById( 'inputView' );
	inputView.style.display = "";
}

function saveForm(){
	var form = document.getElementById("inputForm");
	if( form ) {
		console.log('got form : ', form);
        // console.log( form.elements.namedItem("firstname").value );
        var newPhone = {
            name: form.elements.namedItem("mName").value.trim(),
            company: form.elements.namedItem("mCompany").value.trim(),
            releaseDate: form.elements.namedItem("mReleaseDt").value.trim()
        };
        var isValid = validateNewData( newPhone );
        // var mCompany = form.elements.namedItem("mReleaseDt").value;
        console.log('Is valid input :', isValid);
	}
}

function validateNewData( newData ) {
    var errMsgElem = document.getElementById("errMsg");
    if( !(newData.name && newData.company && newData.releaseDate) ) {
        if( errMsgElem ){
            errMsgElem.style.display = '';
            errMsgElem.innerHTML = 'fields marked with <span style="color: red">*</span> are mandatory !';
        }
        return false;
    }
    if( errMsgElem ){
        errMsgElem.style.display = 'none';
        errMsgElem.innerHTML = '';
    }
    return true;
}

// function submitPhone(){
// 	//TODO: from here
// }

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  console.log( ' -- > ', document.readyState );// interactive
  console.log( "dsp table : ", document.getElementById("displayTable") );
  var table = document.getElementById("displayTable");
  var data = JSON.parse(window.localStorage.getItem("allHandsets"));
  	console.log('---.--- ; ', data);
  insertRowToTable(JSON.parse(window.localStorage.getItem("allHandsets")), "displayTable");
});


function insertRowToTable( dataRows, tableId ) {
	var table = document.getElementById( tableId );
  	// var data = JSON.parse( indow.localStorage.getItem("allHandsets") );

  	dataRows.forEach(function(item, index){// array of objects
  		console.log(item, index);
  		var row = table.insertRow(-1);// last position
  		var cellPos = 0;
  		for (var prop in item){
  			console.log(prop);
  			if( typeof(item) == 'object' && item.hasOwnProperty ){
	  			row.insertCell( cellPos ).innerHTML = item[prop];
	  			cellPos++;
	  		}
  		}
  	});

}