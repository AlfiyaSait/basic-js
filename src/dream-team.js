const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(membersArr) {
  // throw new NotImplementedError('Not implemented');
  if (Array.isArray(membersArr)) {
    let sumNameArr = [];
    let teamName;
    for (let i=0; i<membersArr.length; i++) {
      let name = membersArr[i];
      if (typeof name==='string') {
        name = name.trim();
        let firstLetter = name[0].toUpperCase();
        sumNameArr.push(firstLetter);
        console.log (sumNameArr);      
      }
      else {
        teamName === false;
      }
    }
      sumNameArr = sumNameArr.sort();
      teamName = sumNameArr.join('');
      return teamName;   

  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};

// console.log(module.exports(['Matt', 'Ann', 'Dmitry', 'Max']));
