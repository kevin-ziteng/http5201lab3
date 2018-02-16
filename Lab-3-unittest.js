//LAB 3 - UNIT TESTING
//alert("lab 3");//please delete this line once connected.
/**
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumberId(idIn) {
    "use strict";
    var idTest = false;
	var idRx = /^n\d{8}$/i;
    if (idRx.test(idIn)) {
        idTest = true;
    }
    return idTest;
}

function test__checkHumberId(valueIn, expected) {
	"use strict";
	var result = checkHumberId(valueIn);
	console.log(result);
	var check = "xxFAILEDxx"
	if ( result === expected )
	{
		check = "==PASSED==";
	}
	var msg = "Value tested: " + valueIn + " | Expected result: " + expected + " " + check + "<br />";
	
	document.getElementById("data").innerHTML += msg;
}

test__checkHumberId("n01255155", true);
test__checkHumberId("n01254324", true);
test__checkHumberId("N01255151", true);
test__checkHumberId("n0125155", false);
test__checkHumberId("X01255155", false);
test__checkHumberId("ab1234323", false);
