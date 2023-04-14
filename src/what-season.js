const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(myDate) {
  // throw new NotImplementedError('Not implemented');
  console.log (myDate);
  let season;
  
  if ( (myDate instanceof Date) && (myDate!=new Date()) && (myDate!=null)) {
    if (myDate.hasOwnProperty('toString')) throw new Error('Invalid date!');
    let month = myDate.getUTCMonth() + 1;
    if (month==1 || month==2|| month==12) {
      season = "winter";
    } else if (month>=3 && month <=5) {
      season = "spring";
    } else if (month>=6 && month<=8) {
      season = "summer";
    } else if (month>=9 && month<=11) {
      season = "autumn";
    } else {
      season = "Unable to determine the time of year!";
    }   
  } else if (myDate == null) {
    season = "Unable to determine the time of year!";
  }
  else {
    //season = "Invalid date!";
    throw new Error('Invalid date!');
  }
  return season;



}

module.exports = {
  getSeason
};

// console.log (module.exports({ John: 'Smith' }));
