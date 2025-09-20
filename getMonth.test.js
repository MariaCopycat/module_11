const { getMonth } = require('./getMonth');

test('Корректные значения месяцев (успешные)', () => {
  expect(getMonth(1)).toBe('январь');
  expect(getMonth(5)).toBe('май');
  expect(getMonth(12)).toBe('декабрь');
});

test('Корнер-кейсы: n=0 и n=13 (должен возвращать "неизвестно")', () => {
  expect(getMonth(0)).toBe('неизвестно');
  expect(getMonth(13)).toBe('неизвестно');
});

test('Неуспешные случаи: отрицательные и некорректные значения', () => {
  expect(getMonth(-1)).toBe('неизвестно');
  expect(getMonth('string')).toBe('неизвестно');
  expect(getMonth(null)).toBe('неизвестно');
});