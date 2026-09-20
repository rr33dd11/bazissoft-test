import {passwordMinLength} from './nums';

export const validationErrorMessages = {
  usernameRequired: 'Поле обязательно для заполнения',
  passwordRequired: 'Поле обязательно для заполнения',
  passwordMinlength: `Минимальная длина ${passwordMinLength} символов`,
  passwordPattern: 'Пароль может содержать только латинские буквы и цифры'
};

export const incorrectPasswordError = "Неверный пароль\nпопробуйте еще раз"

export const navTabNames = {
  dashboard: 'Каталог товаров',
  history: 'История покупок',
}
