 'use strict'
 exports.min = function min (array) {
   if(array===undefined||array===[]||array===[""]||!isNaN(array)){
     return 0;
   }
   return Math.min(...array)
 }
 exports.max = function max (array) {
  if(array===undefined||array===[]||array===[""]||!isNaN(array)){
    return 0;
  }
   return Math.max(...array);
 }
 exports.avg = function avg (array) {
  if(array===undefined||array===[]||array===[""]||!isNaN(array)){
    return 0;
  }
  let count = 0;
  array.forEach(item => {
    count += item;
  });
  return count = (+(count/array.length).toFixed(2));
}




