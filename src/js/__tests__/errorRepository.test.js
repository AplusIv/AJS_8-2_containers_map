import ErrorRepository from '../errorRepository';

test('should add errors in error list', () => {
  ErrorRepository.addError(400, 'Состояние 1');
  ErrorRepository.addError(404, 'Состояние 2');
  ErrorRepository.addError(409, 'Состояние 3');
  ErrorRepository.addError(400, 'Состояние 1'); // Пробую добавить такой же элемент. Ожидаемо, его map не пропускает.
  // expect(ErrorRepository.list).toContainEqual({400 : "Состояние 1"})
  expect(ErrorRepository.list).toEqual(new Map([
    [400, 'Состояние 1'],
    [404, 'Состояние 2'],
    [409, 'Состояние 3'],
  ]));
});

test.each([
  [400, 'Состояние 1'],
  [404, 'Состояние 2'],
  [409, 'Состояние 3'],
  [415, 'Unknown error'],
])('should show discription or Unknown error by certain error key', (code, expected) => {
  ErrorRepository.addError(400, 'Состояние 1');
  ErrorRepository.addError(404, 'Состояние 2');
  ErrorRepository.addError(409, 'Состояние 3');
  const result = ErrorRepository.translate(code);
  expect(result).toBe(expected);
});
