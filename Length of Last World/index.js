/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let spece=s.trim();
    let world1 =spece.split(' ');
    let lastworld1=world1[world1.length-1];
    let lastworldlength1=lastworld1.length;
    return lastworldlength1;
};