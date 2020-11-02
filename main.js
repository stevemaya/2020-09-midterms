// Your code below.

const isValidPassword = function (str) {
  if (str.length < 12 || str.includes('.') || str.includes(' ')) {
    return false;
  }
  return true;
};

const onlyCs = function (numbers) {
  return numbers.filter(function (number) {
    if (number >= 70 && number <= 79) {
      return number;
    }
  });
};

const countBs = function (numbers) {
  let countB = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 80 && numbers[i] <= 89) {
      countB++;
    }
  }
  return countB;
};
/*
const lastIndexOfPunctuation = function(str) {
  let results = 0;
  for(let i = 0; i < str.length; i++){
    if (str[i] === '.' ){
      results++;
    } else if (str[i] === '?') {
      results++;
    } else if (str[i] === '!') {
      results++;
    } else {
      result += '-1';
    }
    
  }
  return results;
  };
*/
const deleteMiddleLetters = function (str) {
  let middle = '';
  const mid = str.length % 2;
  for (let i = 0; i < str.length; i++) {
    if (mid === 1 && i !== (str.length - 1) / 2) {
      middle += str[i]
    } if (mid === 0 && i !== str.length / 2 - 1 && i !== str.length / 2) {
      middle += str[i];
    }
  }
  return middle;
};

const getCenturies = function(arrays) {
  const centuries = arrays.map(function(array) {
  
    return array.toString().slice(0,2) + 'th';
  });
  return centuries;
};

// Our code below. Don't touch!


if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof onlyCs === 'undefined') {
  onlyCs = undefined;
}

if (typeof countBs === 'undefined') {
  countBs = undefined;
}

if (typeof lastIndexOfPunctuation === 'undefined') {
  lastIndexOfPunctuation = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof getCenturies === 'undefined') {
  getCenturies = undefined;
}



module.exports = {
  isValidPassword,
  onlyCs,
  countBs,
  lastIndexOfPunctuation,
  deleteMiddleLetters,
  getCenturies,
}
