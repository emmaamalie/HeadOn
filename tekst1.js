// set up text to print, each item in array is new line

var aText2 = new Array(
    "Hvis Torben ikke kunne give mig den hjælp jeg havde brug for, fandt han nogle der kunne.");
var iSpeed2 = 70; // time delay of print out
var iIndex2 = 0; // start printing array at this posision
var iArrLength2 = aText2[0].length; // the length of the text array
var iScrollAt2 = 20; // start scrolling up at this many lines

var iTextPos2 = 0; // initialise text position
var sContents2 = ''; // initialise contents variable
var iRow2; // initialise current row

function typewriter2() {
    sContents2 = ' ';
    iRow2 = Math.max(0, iIndex2 - iScrollAt2);
    var destination = document.getElementById("typedtext2");

    while (iRow2 < iIndex2) {
        sContents2 += aText2[iRow++] + '<br />';
    }
    destination.innerHTML = sContents2 + aText2[iIndex2].substring(0, iTextPos2) + "_";
    if (iTextPos2++ == iArrLength2) {
        iTextPos2 = 0;
        iIndex2++;
        if (iIndex2 != aText2.length) {
            iArrLength2 = aText2[iIndex2].length;
            setTimeout("typewriter2()", 500);
        }
    } else {
        setTimeout("typewriter2()", iSpeed2);
    }
}

typewriter2();
