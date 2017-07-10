

function myhigherFunction (func)  {
    console.log ("myhigherFunction")
    return outsideFunction;
}

function outsideFunction () {
    console.log("outsidefunction");
}

myhigherFunction();

var returnValue = myhigherFunction ();
console.log(returnValue);
returnValue();