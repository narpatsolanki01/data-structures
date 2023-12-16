/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
    }
    let letter={};
    
    for(let i=0; i<s.length; i++){
        if(letter[s[i]]!==undefined){
            letter[s[i]]++;
        }
        else {
            letter[s[i]]=1;
        }
        if(letter[t[i]]!==undefined){
            letter[t[i]]--;
        }
        else{
            letter[t[i]]=-1;
        }
    }

    for(const letters in letter){
        if(letter[letters]!==0){
            return false;
        }
    }
    return true;
}