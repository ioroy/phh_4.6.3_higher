function myhigherFunction (func) {
    console.log('myhigherfunction')
    func();
}

function myhigherFunction (func)  {
    console.log ("myhigherFunction")
    func();
}

function outsideFunction () {
    console.log("outsidefunction")
}

outsideFunction();　　　
myhigherFunction(outsideFunction);