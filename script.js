
// Функция, выводящая четные числа от большего к меньшему:

function evenNumbersDescending(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
  
    for (let i = max; i >= min; i--) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }

//   Функция power, возведения числа в степень:

  function power(base, exponent = 2) {
    return Math.pow(base, exponent);
  }
  
//   Функция, считающая сумму чисел от 1 до n:
function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }

//   Функция, считающая сумму четных и нечетных чисел от n до m:

function sumEvenOdd(n, m) {
    let evenSum = 0;
    let oddSum = 0;
  
    for (let i = n; i <= m; i++) {
      if (i % 2 === 0) {
        evenSum += i;
      } else {
        oddSum += i;
      }
    }
  
    console.log("Сумма четных чисел:", evenSum);
    console.log("Сумма нечетных чисел:", oddSum);
  }
  
//   Функция, возвращающая самый длинный элемент массива строк:

function longestString(strings) {
    if (strings.length === 0) return null;
  
    let longest = strings[0];
  
    for (let i = 1; i < strings.length; i++) {
      if (strings[i].length > longest.length) {
        longest = strings[i];
      }
    }
  
    return longest;
  }
  console.log(longestString(['one', 'two', 'three'])); 
  