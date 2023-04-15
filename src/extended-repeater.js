const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // let arrOptions = Object.entries(options);
  let result='';
  let substr='';
  options.addition = String(options.addition);
  str = String (str);
  
  if (options.addition=="undefined") {
    options.addition = '';
    substr='';
  }
  if (options.separator===undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator===undefined) {
    options.additionSeparator = '|';
  }

  if (options.additionRepeatTimes===undefined) {
    options.additionRepeatTimes = 0;
    substr = options.addition;
  }
 
  if (options.repeatTimes===undefined) {
    return result + str + options.addition;
  }


  for (let j=0; j<options.additionRepeatTimes; j++) {
    substr = substr + options.addition + options.additionSeparator;
  }

  if (options.additionRepeatTimes!==0) {
  substr = substr.slice(0,-(options.additionSeparator.length));
  }

  for (let i=0; i< options.repeatTimes; i++) {
    result = result + str + substr + options.separator;
  }

  if (options.additionRepeatTimes!==undefined) {
  result = result.slice(0,-(options.separator.length));
  }
  return result;
}

module.exports = {
  repeater
};
// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
// };
// console.log(module.exports(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }));
// 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'

// console.log(module.exports('la', { repeatTimes: 3 }));
//'la+la+la'