var fortuneCookies = [
    "AAAAAAAAAAAAA",
    "BBBBBBBBBBBBB",
    "CCCCCCCCCCCCC",
    "DDDDDDDDDDDDD",
    "EEEEEEEEEEEEE",
    "FFFFFFFFFFFFF",
    "GGGGGGGGGGGGG",
    "HHHHHHHHHHHHH"
]; 

exports.getFortune = function() {
   var idx = Math.floor(Math.random() * fortuneCookies.length); 
    return fortuneCookies[idx]; 
}; 