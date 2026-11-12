// Лаб 9 - Даалгавар 2: Алгоритмууд (бэлэн функц ашиглаагүй, зөвхөн давталт/нөхцөл)

// 1 + 2 + ... + n
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

// n! = 1 * 2 * ... * n
function factorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

// Анхны тоо эсэх
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 1..n: 3-д хуваагдвал Fizz, 5-д Buzz, хоёуланд нь FizzBuzz
function fizzBuzz(n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) out.push('FizzBuzz');
    else if (i % 3 === 0) out.push('Fizz');
    else if (i % 5 === 0) out.push('Buzz');
    else out.push(i);
  }
  return out;
}

// Эгшиг тоолох (латин + кирилл)
function countVowels(str) {
  const vowels = 'aeiouAEIOUаэиоуөүеёюяыАЭИОУӨҮЕЁЮЯЫ';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) { count++; break; }
    }
  }
  return count;
}

// Палиндром (хоёр заагч, хоосон зайг алгасна)
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === ' ') { left++; continue; }
    if (str[right] === ' ') { right--; continue; }
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Массивын хамгийн их утга
function maxOf(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// Цифрүүдийн нийлбэр: 1234 -> 10
function digitSum(n) {
  if (n < 0) n = -n;
  let sum = 0;
  while (n > 0) {
    const d = n % 10;
    sum += d;
    n = (n - d) / 10;
  }
  return sum;
}