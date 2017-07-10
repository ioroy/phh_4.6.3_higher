

function myhigherFunction ()  {
    console.log ("myhigherFunction")
    return outsideFunction;
}

function outsideFunction (value) {
    console.log("value :" + value);
}

myhigherFunction();

var returnValue = myhigherFunction ();
console.log(returnValue);
returnValue();