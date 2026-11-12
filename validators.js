// Лаб 9 - Даалгавар 3: Validation функцууд
// Буцаах утга: алдааны мессеж (string). Хоосон string ('') = зөв.

function validateName(value) {
  const v = value.trim();
  if (v === '') return 'Нэр хоосон байж болохгүй.';
  if (v.length < 2 || v.length > 50) return 'Нэр 2–50 тэмдэгт байх ёстой.';
  if (/\d/.test(v)) return 'Нэр тоо агуулж болохгүй.';
  return '';
}

function validateEmail(value) {
  const v = value.trim();
  if (v === '') return 'Имэйл хаяг хоосон байж болохгүй.';
  if (/\s/.test(v)) return 'Имэйл хаяг зай агуулж болохгүй.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Имэйл хэлбэр буруу байна (нэр@домэйн.өргөтгөл).';
  return '';
}

function validatePassword(value) {
  if (value === '') return 'Нууц үг хоосон байж болохгүй.';
  if (/\s/.test(value)) return 'Нууц үг хоосон зай агуулж болохгүй.';
  if (value.length < 8) return 'Нууц үг дор хаяж 8 тэмдэгт байх ёстой.';
  if (!/[A-Za-zА-Яа-яӨөҮүЁё]/.test(value)) return 'Нууц үг үсэг агуулсан байх ёстой.';
  if (!/\d/.test(value)) return 'Нууц үг тоо агуулсан байх ёстой.';
  return '';
}

function validateMessage(value) {
  const v = value.trim();
  if (v === '') return 'Санал хүсэлт хоосон байж болохгүй.';
  if (v.length < 10 || v.length > 500) return 'Санал хүсэлт 10–500 тэмдэгт байх ёстой.';
  return '';
}