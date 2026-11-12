// ===== Лаб 9 - Даалгавар 1: Хувьсагч, төрөл, хөрвүүлэлтийн туршилт =====
const studentName = 'Бямбадулам';
let age = 20;
const isStudent = true;
let nothing = null;
let notSet;
console.table([
  { утга: studentName, төрөл: typeof studentName },
  { утга: age, төрөл: typeof age },
  { утга: isStudent, төрөл: typeof isStudent },
  { утга: nothing, төрөл: typeof nothing },   // 'object' (JS-ийн алдаа)
  { утга: notSet, төрөл: typeof notSet },
  { утга: '5' + 3, төрөл: typeof ('5' + 3) }, // '53'
  { утга: '5' - 3, төрөл: typeof ('5' - 3) }, // 2
]);
console.log('0.1 + 0.2 =', 0.1 + 0.2);                    // 0.30000000000000004
console.log('0.1 + 0.2 === 0.3 ?', 0.1 + 0.2 === 0.3);    // false
console.log('(0.1+0.2).toFixed(2) =', (0.1 + 0.2).toFixed(2));

// Төрөл хөрвүүлэлт (explicit / implicit)
console.table([
  { илэрхийлэл: "Number('42')",   үр_дүн: Number('42') },
  { илэрхийлэл: "Number('abc')",  үр_дүн: Number('abc') },       // NaN
  { илэрхийлэл: "String(123)",    үр_дүн: String(123) },
  { илэрхийлэл: "Boolean('')",    үр_дүн: Boolean('') },         // false
  { илэрхийлэл: "parseInt('12px')", үр_дүн: parseInt('12px') },  // 12
  { илэрхийлэл: "'5' * '2'",      үр_дүн: '5' * '2' },           // 10
]);

// ===== Лаб 9 - Даалгавар 2: алгоритмуудын туршилт =====
console.log('sumTo(10) =', sumTo(10));
console.log('factorial(5) =', factorial(5));
console.log('isPrime(17) =', isPrime(17), '| isPrime(18) =', isPrime(18));
console.log('fizzBuzz(15) =', fizzBuzz(15).join(', '));
console.log("countVowels('Монгол улс') =", countVowels('Монгол улс'));
console.log("isPalindrome('level') =", isPalindrome('level'));
console.log('maxOf([3, 9, 2]) =', maxOf([3, 9, 2]));
console.log('digitSum(1234) =', digitSum(1234));

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeText.textContent = 'Light Mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeText.textContent = 'Dark Mode';
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';
    if (currentTheme === 'light') {
      newTheme = 'dark';
      themeText.textContent = 'Light Mode';
    } else {
      themeText.textContent = 'Dark Mode';
    }
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // 2. Flip Toggle
  document.querySelectorAll('.btn-flip').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const cardInner = button.closest('.card-inner');
      if (cardInner) cardInner.classList.toggle('is-flipped');
    });
  });

  // 3. Лаб 9 - Даалгавар 4: Form validation
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  const fields = [
    { input: 'nameInput',     error: 'nameError',     validate: validateName },
    { input: 'emailInput',    error: 'emailError',    validate: validateEmail },
    { input: 'passwordInput', error: 'passwordError', validate: validatePassword },
    { input: 'messageInput',  error: 'messageError',  validate: validateMessage },
  ];

  const success = document.getElementById('formSuccess');

  function check(f) {
    const el = document.getElementById(f.input);
    const msg = f.validate(el.value);
    document.getElementById(f.error).textContent = msg;
    el.style.border = msg ? '2px solid #ff4d4d' : '2px solid #22c55e';
    return msg === '';
  }

  // Бичих үед шууд шалгана
  fields.forEach(f => {
    document.getElementById(f.input).addEventListener('input', () => {
      check(f);
      success.textContent = '';
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let allValid = true;
    fields.forEach(f => { if (!check(f)) allValid = false; });

    if (allValid) {
      success.textContent = 'Баярлалаа! Санал хүсэлт амжилттай илгээгдлээ.';
      form.reset();
      fields.forEach(f => {
        document.getElementById(f.input).style.border = '';
      });
    } else {
      success.textContent = '';
    }
  });
});