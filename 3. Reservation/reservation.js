"use strict";
var $ = function(id) { return document.getElementById(id); };

var saveReservation = function() {
    sessionStorage.arrivalDate = $("arrival_date").value;
    sessionStorage.nights = $("nights").value;
    sessionStorage.adults = $("adults").value;
    sessionStorage.child = $("children").value;
    var value = document.getElementsByName("room").value;
    for(x in value){
        console.log(value[x]);
    }
    // sessionStorage.roomType = document.getElementsByName("room")[0].value;
    sessionStorage.bedType = document.getElementsByName("bed")[0].value;
    sessionStorage.smoking = $("smoking").value;
    sessionStorage.name = $("name").value;
    sessionStorage.email = $("email").value;
    sessionStorage.phone = $("phone").value;
    
    // submit form
    // $("reservation_form").submit();
};

window.onload = function() {
    $("submit_request").onclick = saveReservation;
    $("arrival_date").focus();
};