export const enum formActionType {
  Change = 'CHANGE_VALUE',
  Reset = 'RESET_FORM',
  SetError = 'SET_ERROR'
};

export const enum formError {
  MinLength = 'Слишком мало символов (мин. 3)',
  EmptyData = 'Необходимо ввести текст',
  UnknownError = 'Ошибка! Введите корректные данные'
};