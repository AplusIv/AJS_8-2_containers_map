export default class ErrorRepository {
  static list = new Map();
  // Создал статическое свойство, для хранения ошибок.
  // Сейчас нет проблем с их поддержкой или пока не стоит так делать?

  static addError(errorKey, errorDiscription) {
    this.list.set(errorKey, errorDiscription);
  }

  static translate(code) {
    return this.list.has(code) ? this.list.get(code) : 'Unknown error';
  }
}
