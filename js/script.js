'use strict';

function padString ( str, num, sym, boolType = true){
    if ( typeof str !== 'string') {
        return console.log('Error is not a string');
    }
    if (  str === 'number' ){
        return console.log('Error - number entered') ;
    }
    if ( str === ''){
        return console.log('Error - empty string');
    }
    if ( str === undefined){
        return console.log('Error - string is undefined');
    }
    if ( typeof  num !== 'number') {
        return console.log('Error is not a number');
    }
    if ( typeof sym !== 'string' && sym.length === 1){
        return console.log('Error variable must be a single character string');
    }
    if ( sym === ''){
        return console.log('Error - empty string');
    }
    if ( typeof  boolType !== 'boolean') {
        return console.log('Error value is not boolean data type');
    }

   if ( num > str.length) {
       num -= str.length;
       if (boolType === true) {
           for ( let r = 0; r < num; r++) {
               str += sym
           }
       } else  {
           for ( let l = 0; l < num; l++) {
               str = sym + str
           }
       }
   } else {
       str = str.substr(0 , num );
   }
   return str;
}
console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2, '*'));


