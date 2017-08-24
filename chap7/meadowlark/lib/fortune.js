// fortune library. 

var fortuneCookies = [
    "AAAAAAAAA",
    "BBBBBBBBB",
    "CCCCCCCCC",
    "DDDDDDDDD",
    "EEEEEEEEE",
]; 

exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx]; 
}; 