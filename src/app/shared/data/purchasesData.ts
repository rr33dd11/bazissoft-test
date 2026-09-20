import {Purchase} from '../types/purchase';

export const purchasesData: Purchase[] = [
  {
    id: 1,
    productName: "Тест 1",
    username: "test",
    amount: 20,
    date: new Date().toLocaleDateString()
  },
  {
    id: 2,
    productName: "Тест 2",
    username: "test",
    amount: 30,
    date: new Date().toLocaleDateString()
  },
  {
    id: 3,
    productName: "Тест 3",
    username: "test",
    amount: 30,
    date: new Date().toLocaleDateString()
  }
]
