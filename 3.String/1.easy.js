
/* Q1. Remove outer parenthesis */
// Input: s = "(()())(())"
// Output: "()()()"

function removeOuterParentheses(s) {
    /* 1st approach */
    /* T.C : O(n) */
    /* S.C : O(n) extra space is taken */

    let openCount = 0;
    let closeCount = 0;
    let res = '';
    let start = 0;
    for (let i = 0; i < s.length; i++) {

        if (s[i] === '(') {
            openCount++;
        } else if (s[i] === ')') {
            closeCount++;
        }

        if (openCount === closeCount) {
            res += s.slice(start + 1, i);
            start = i + 1;
        }

    }

    return res
};


/* Q2. Revere word in string */
// Input: s = "the sky is blue"
// Output: "blue is sky the"

function reverseWords(s) {
    /* 1st Approach */
    /* T.C : O(n) */
    /* S.C : O(n) extra space is   */

    // s = s.trim();
    // let start;
    // let end = s.length -1;
    // let extSp ='';

    // for(let i=s.length-1 ;i>=0;i--){
    //     if( s[i] === ' ' &&  s[i+1] ===' ' ){
    //         end = i-1;
    //         continue;
    //     }

    //     if( s[i] === ' ' ){
    //        if( end - i ) 
    //        extSp+=s.substring(i+1,end+1)+' ';
    //        end = i-1;   
    //     }  
    // }
    // extSp+=s.substring(0,end+1); 

    // console.log("substring : ",extSp);
    // return  extSp;

};

/* Q3. Largest odd no's in string */
// Input: num = "35427"
// Output: "35427"


function largestOddNumStr() {
    let minVal;
    let preStr = '';

    if (+num[num.length - 1] % 2 !== 0) {
        return num;
    }

    for (let i = 0; i < num.length; i++) {
        preStr += num[i]
        if (+num[i] % 2 !== 0) {
            minVal = preStr;
        }
    }

    return minVal ? minVal : "";
}

/* Q4. Longest common prefix. */
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestComnPrefix() {
    /* 1. 1st Approach */
    /* (1)Try sort of arr string (2) Find minLen of String  */
    /* T.C: O(n*logn)+O(n)+O(minLen) ==> O(nlogn)  */
    /* S.C: O(1) */

    // if( strs.length < 2 || strs[0].charAt(0) === '' ){
    //   return strs[0]  
    // } 

    // strs.sort();
    // let minLen = Number.MAX_SAFE_INTEGER;
    // for(let i=0;i<strs.length;i++){
    //     if( strs[i].length < minLen ){
    //         minLen = strs[i].length;
    //     }    
    // }
    // let i = 0;
    // while( i<minLen && strs[0].charAt(i) === strs[strs.length-1].charAt(i)){
    //     i++;  
    // }

    // console.log(strs[0].substring(0,i));
    // return strs[0].substring(0,i);

    /* 2. 2nd Approach  */
    // (1) Scan n no's of string 
    // (2) In each iteration we need to check min prefix of str 
    // (3) if no minLen prefix str is match then return empty string 
    /* T.C : O(n*m) where n is no's of String & m is length of prefix string */
    /* S.C : O(1) */

    if (strs.length === 0) return "";

    if (strs.length === 1) return strs[0];

    let result = strs[0];
    let len = result.length;

    for (let i = 1; i < strs.length; i++) {

        while (strs[i].indexOf(result) !== 0) {

            result = result.substring(0, len - 1);
            len--

            if (result === '') return "";

        }
    }
    return result;
}

/* Q5. Check two string is Isomorphic or not ? */

// Input: s = "egg", t = "add"
// Output: true

// Input: s = "foo", t = "bar"
// Output: false

function isIsomorphicStr(s, t) {
    /* 1. 1st Approach */
    /* T.C : O(n)  */
    /* S.C:  O(M)  */

    // 1. To have taken boolean & map array of 256 size
    // 2. Each characters have map with index to array value  
    // 3. In every iteration we need to store two str character value in form of map
    // with index to array value    

    // check string length
    // if( s.length !== t.length ) return false; 

    // let size = 256;

    // let marked = new Array(size);
    // let map = new Array(size);

    // marked.fill(false);
    // map.fill(-1);

    // for(let i=0; i<s.length ;i++){

    //     if( map[s.charCodeAt(i)] === -1 ){

    //         if(marked[t.charCodeAt(i)]) return false;

    //         marked[t.charCodeAt(i)] = true;
    //         map[ s.charCodeAt(i) ] = t.charAt(i);

    //     }else if( map[s.charCodeAt(i)] !== t.charAt(i) )  {
    //             return false;  
    //     }   


    // }
    // return true;  

    /* 2nd Approach */

    if (s.length !== t.length) return false;

    let charPair = {};



    for (let i = 0; i < s.length; i++) {

        if (charPair.hasOwnProperty(s[i])) {

            if (charPair[s[i]] !== t[i]) return false;

        } else if (!Object.values(charPair).includes(t[i])) {
            charPair[s[i]] = t[i];
        } else return false;

    }

    return true;
}

/* Q6. Check valid anagram of string */
// Input: s = "anagram", t = "nagaram"
// Output: true

function checkValidAnagram(s, t) {
    /* 1. 1st Approach*/
    /* T.C : O(n) */
    /* S.C : O(m) where m is length of freq size */

    if (s.length !== t.length) return false;

    let freq = new Array(26);
    freq.fill(0);

    // Maintaining count of each character in freq array
    for (let i = 0; i < s.length; i++) {
        freq[+s[i].charCodeAt() - 'a'.charCodeAt()]++;
    }

    // Iterate with 't' string to Decrement count of each character if freq > 0 


    for (let i = 0; i < t.length; i++) {
        if (freq[+t[i].charCodeAt() - 'a'.charCodeAt()] > 0) {
            freq[+t[i].charCodeAt() - 'a'.charCodeAt()]--;
        }
    }

    // Finally checking entire freq array contain then return true otherwise false

    for (let i = 0; i < 26; i++) {
        if (freq[i] > 0) return false;
    }

    return true;
}

/* Q7. Rotate of string */
// Input: s = "abcde", goal = "cdeab"
// Output: true

function rotateOfString(s) {
    /* 1. 1st Approach  */
    /* T.C: O(n) */
    /* S.C: O(1) no Auxilliary space taken */

    // 1. In every iteration we shift each character toward right 
    // 2. In every shift we comparing updated string with goal 
    // 3. Once rotated str is match with goal str then return true otherwise false

    // let extSp = '';

    // for(let i=0;i<s.length;i++){
    //     s = s.substring(1,s.length)+s.substring(0,1);

    //     if( goal === s ) return true;
    // } 

    // return false; 
}

