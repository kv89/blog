'use strict';

// console.log("-- : ", window.localStorage, typeof(Storage));
var handsets = [];
var paging = {
    pageNo: 1,
    pageSize: 5,

    totalPages: -1,
    totalRecords: -1,
    currPageData: []
};

function nextPage() {
    debugger;
    if( !isNaN(paging.pageNo) ){
        if( paging.pageNo < paging.totalPages ) {
            paging.pageNo++;
            insertRowsToTable();
        }
    }
}

function prevPage() {
    if( !isNaN(paging.pageNo) ){
        if( paging.pageNo > 1 ) {
            paging.pageNo--;
            insertRowsToTable();
        }
    }
    // insertRowsToTable();
}

function init() {
	handsets = [
		{name: "l OnePlus 1", company: "OP-OnePlus", releaseDate: "1 Mar 2016", id: 1 },
        {name: "h OnasasePlus 2", company: "OP-OnePlus", releaseDate: "2 Mar 2016", id: 2 },
        {name: "d OnePlus 3", company: "OP-OnePlus", releaseDate: "3 Mar 2016", id: 3 },
        {name: "k OnePlus 4", company: "OP-OnePlus1", releaseDate: "4 Mar 2016", id: 4 },
        {name: "b OnePlus 5", company: "OP-OnePlus", releaseDate: "5 Mar 2016", id: 5 },

        {name: "f OnePlus 6", company: "OP-OnePlus", releaseDate: "6 Mar 2016", id: 6 },
        {name: "a OnePlus 7",company: "OP-OnePlus", releaseDate: "7 Mar 2016", id: 7 },
        {name: "g OnePlus 8",company: "OP-OnePlus", releaseDate: "8 Mar 2016", id: 8 },
        {name: "e OnePlus 9",company: "OP-OnePlus", releaseDate: "9 Mar 2016", id: 9 },
        {name: "j OnePlus 10",company: "OP-OnePlus", releaseDate: "10 Mar 2016"		,id: 10},

        {name: "c OnePlus 11",company: "OP-OnePlus", releaseDate: "11 Mar 2016", id: 11},
        {name: "i OnePlus 12",company: "OP-OnePlus", releaseDate: "12 Mar 2016", id: 12}
	];
	// if( !window.localStorage.hasOwnProperty("allHandsets") ) {
		window.localStorage.setItem("allHandsets", JSON.stringify( handsets ));
	// }
    paging.totalRecords = handsets.length;
    paging.totalPages = Math.ceil( handsets.length / paging.pageSize );
}
init();
// console.log("-- : ", window.localStorage);

document.addEventListener("DOMContentLoaded", function (event) { 
    debugger;
    //do work
    //   console.log( ' -- > ', document.readyState );// interactive
    //   console.log( "dsp table : ", document.getElementById("displayTable") );
    // var table = document.getElementById("displayTable");
    // var data = handsets;//JSON.parse(window.localStorage.getItem("allHandsets"));
    // console.log('---.--- ; ', data);
    paging.pageNo = 1;
    insertRowsToTable();
});

function addPhone(){
	console.log('new phone.');
	var displayView = document.getElementById( 'displayView' );
	displayView.style.display = "none";
	var inputView = document.getElementById( 'inputView' );
	inputView.style.display = "";
}

function navigateToSearch(){
    var displayView = document.getElementById( 'displayView' );
	displayView.style.display = "";
	var inputView = document.getElementById( 'inputView' );
	inputView.style.display = "none";
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

var onsearchEnter = function(){// TODO: not optimized yet
    var searchElem = document.getElementById("searchInp");
    var searchFor = '';
    if( searchElem ){
        searchFor =  searchElem.value.trim();
        if( !searchFor || searchFor == '' ) {
            insertRowsToTable(handsets, "displayTable");
            return ;
        }
    } else {
        return ;        
    }
    console.log('search for : ', searchFor);
	
    var filterData = searchForString( searchFor );
    // console.log('Result : ',  filterData );
    // debugger;
    // if( searchFor.length == 0 && filterData.length == 0){
    //     filterData = handsets;
    // }
    insertRowsToTable(filterData, "displayTable");
    
    
}

function searchForString(searchFor) {// TODO: bug on 2nd time search
    searchFor = searchFor.toLowerCase();
// debugger;
    var results = {};
    var data = handsets;
    // console.log('data : ', data);
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (key != 'id' && data[i][key].toLowerCase().indexOf(searchFor) != -1) {
                // results.push(data[i]);
                results[data[i].id] = data[i];
            }
        }
    }
    var ret = [];
    for(var key in results){
        ret.push(results[key]);
    }
    return ret;
}

function insertRowsToTable( ) {
    debugger;
    // var table = document.getElementById("displayTable");
    // // var data = JSON.parse( indow.localStorage.getItem("allHandsets") );
    // if (!table) {
    //     return;
    // }
    // // console.log('table.rows : ', table.rows, table.rows.length);
    // while (table.rows.length > 2) {
    //     table.deleteRow( -1 );
    // }
    var dataRows = handsets;
    var fromIndex = (paging.pageNo - 1) * paging.pageSize;
    var noOfItems = fromIndex + paging.pageSize;
    paging.currPageData = dataRows.slice(fromIndex, noOfItems);
    console.log('total rows in table : ', paging.currPageData.length);

    createTable();

    // paging.currPageData.forEach(function (item, index) {// array of objects
    //     // console.log(item, index);
    //     var row = table.insertRow(-1);// last position
    //     var cellPos = 0;
    //     for (var prop in item) {
    //         // console.log(prop);
    //         if (typeof (item) == 'object' && item.hasOwnProperty(prop) && prop != 'id') {
    //             row.insertCell(cellPos).innerHTML = item[prop];
    //             cellPos++;
    //         }
    //     }
    // });
}

function createTable(){
    debugger;
    var table = document.getElementById("displayTable");
    // var data = JSON.parse( indow.localStorage.getItem("allHandsets") );
    if (!table) {
        return;
    }
    // console.log('table.rows : ', table.rows, table.rows.length);
    while (table.rows.length > 2) {
        table.deleteRow( -1 );
    }

    paging.currPageData.forEach(function (item, index) {// array of objects
        // debugger;
        var row = table.insertRow(2);// first position
        var cellPos = 0;
        for (var prop in item) {
            // console.log(prop);
            if (typeof (item) == 'object' && item.hasOwnProperty(prop) && prop != 'id') {
                row.insertCell(cellPos).innerHTML = item[prop];
                cellPos++;
            } 
        }
    });
}

   // --------------
function myFunction( column ) {
    // debugger;
    if( column === 'name' ){
        document.getElementById("nameSortDrp").classList.toggle("show");
    }
    else if( column === 'company' ){
        document.getElementById("companySortDrp").classList.toggle("show");
    }
    else if( column === 'date' ){
        document.getElementById("dateSortDrp").classList.toggle("show");
    }
     
}
    
    // --------------

function sortName( sortOrder ) {
    // debugger;
    function asc( a, b ) {
        return (a.name < b.name) ? -1 : 1;
    }

    function desc( a, b ) {
        return (a.name < b.name) ? 1 : -1;
    }

    if( handsets.length > 0 ) {
        handsets.sort( sortOrder == 0 ? asc : desc);
        handsets.forEach(console.log);
        insertRowsToTable();
    }

}