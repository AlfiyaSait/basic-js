const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  if (Array.isArray(arr)) {
    let myArr = arr.slice(0); //копируем массив с нулевого элемента
    for (let i=0; i< myArr.length; i++) {
      if (myArr[i]=='--discard-next') {
        if (myArr[i+1]!=undefined) { //если следующий существует
          myArr.splice(i+1,1); //удаляем следующий
          myArr.splice(i,1);  //удаляем сам элемент '--discard-next'
        } else {
          myArr.splice(i,1); //удаляем сам элемент '--discard-next'
        }    
      }
      if (myArr[i]=='--discard-prev') {
        if ((myArr[i-1]!=undefined) && (arr[i]!='--discard-next')) { //если предыдущий существует и пред-предыдущий элемент до него не был '--discard-next' (смотрим не измененный массив с учетом текущего индекса)
          myArr.splice(i-1,1); //удаляем предыдущий
          myArr.splice(i-1,1); //удаляем сам элемент '--discard-prev'
        } else {
          myArr.splice(i,1); //удаляем сам элемент '--discard-prev'
        }
      }
      if (myArr[i]=='--double-next') {
        if (myArr[i+1]!=undefined) { //если следующий существует
          myArr.splice(i+1,0,myArr[i+1]); //вставляем следующий
          myArr.splice(i,1); //удаляем сам элемент '--double-next'
        } else {
          myArr.splice(i,1); //удаляем сам элемент '--double-next'
        }
      }
      if (myArr[i]=='--double-prev') {
        if ((myArr[i-1]!=undefined) && (arr[i]!='--discard-next')) { //если предыдущий существует и пред-предыдущий элемент до него не был '--discard-next' (смотрим не измененный массив с учетом текущего индекса)
          myArr.splice(i-1,0,myArr[i-1]); //дублируем предыдущий
          myArr.splice(i+1,1); //удаляем сам элемент '--double-prev'
        } else {
          myArr.splice(i,1); //удаляем сам элемент '--double-prev'
        }
      }
    }
    return myArr;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
 
  
}

module.exports = {
  transform
};
// console.log(module.exports([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));
//[1, 2, 3, 4, 5]