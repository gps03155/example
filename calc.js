console.log("hello");

let add = function(a, b){
    return a + b;
}

let subtract = function(a, b){
    return a * b;
}

let divide = function(a, b){
    return a / b;
}

module.exports.add = add;
module.exports.subtract = subtract;
module.exports.divide = divide;