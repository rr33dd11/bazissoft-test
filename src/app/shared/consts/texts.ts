import {passwordMinLength} from './nums';


export const loginPage = {
  loginLabels: {
    username: "Имя пользователя",
    password: "Пароль"
  },
  incorrectPasswordError: "Неверный пароль\nпопробуйте еще раз",
}

export const productPage = {
  productTableColumns: {
    id: "ID",
    name: "Название",
    price: "Цена",
    vat: "НДС",
    actions: "Действия",
  },
  productLabels: {
    name: "Название",
    price: "Цена",
    vat: "НДС"
  },
  actions: {
    delete: "Удалить",
    edit: "Редактировать",
    add: "Добавить"
  },
  deleteModal: {
    header: "Удалить продукт",
    confirmText: "Вы уверены, что хотите удалить продукт?"
  },
  productModal: {
    headerCreate: "Добавить продукт",
    headerEdit: "Редактировать продукт",
  }
}

export const purchasePage = {
  purchaseTableColumns: {
    id: "ID",
    productName: "Название товара",
    username: "Имя покупателя",
    amount: "Сумма операции",
    date: "Дата операции",
  }
}

export const buttonNames = {
  login: "Авторизоваться",
  create: "Добавить",
  edit: "Редактировать",
  delete: "Удалить",
}

export const validationErrorMessages = {
  usernameRequired: 'Поле обязательно для заполнения',
  passwordRequired: 'Поле обязательно для заполнения',
  passwordMinlength: `Минимальная длина ${passwordMinLength} символов`,
  passwordPattern: 'Пароль может содержать только латинские буквы и цифры',
  required: 'Поле обязательно для заполнения',
  positive: 'Значение не должно быть отрицательным'
};

export const navTabNames = {
  dashboard: 'Каталог товаров',
  history: 'История покупок',
}
