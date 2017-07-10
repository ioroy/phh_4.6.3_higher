function arrayWalk (data, f) {
    for (var key in data) {
        f(data[key], key)
    }
}

function showElement (value, key) {
    console.log('キー（'　+ key + ')' + ' : '　 +'値（' + value + ')');
}

function showDecoratedElement (value, key) {
    console.log('キー（'　+ key + ')' + ' : '　 +'値（' + value + ')');
}

var ary = [1, 2, 4, 8, 16];

arrayWalk (ary, showElement);

//ary.forEach(showElement);