const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(catsArr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let countIndex = 0;
  for (let i = 0; i < catsArr.length; i++) {
    let elem = catsArr[i]; // положила элемент массива
    for (let j = 0; j < elem.length; j++) {      
      if (elem[j] ==='^^') {
         countIndex++;
      }    
    }   
    
  }
  // console.log (countIndex);
  return countIndex;
}

module.exports = {
  countCats
};


