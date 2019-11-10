"use strict";
var $ = function (id) {
    return document.getElementById(id); 
};
var calculateSalesTax = function(subtotal, tax_rate) {
	var sales_tax = ((tax_rate / 100) * subtotal);
	sales_tax = sales_tax.toFixed(2);
	return sales_tax;
}
var calculateTotal = function(subtotal, sales_tax) {
	var tax_rate = (subtotal + sales_tax);
	tax_rate = tax_rate.toFixed(2);
	return tax_rate;
}
var processEntries = function() {
	var subtotal = parseFloat ($("subtotal").value);
	var tax_rate = parseFloat ($("tax_rate").value);
	if (isNaN(subtotal) || isNaN(tax_rate)) {
		alert("Both entries must be numeric");
	} else {
		$("sales_tax").value = calculateSalesTax(subtotal, tax_rate)
		$("tax_rate").value = calculateTotal(subtotal, sales_tax)
	}
};
window.onload = function() {
	$("calculate").onclick = processEntries;
	$("subtotal").focus();
};
