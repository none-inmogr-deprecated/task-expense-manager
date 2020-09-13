import { generateShortId } from 'short-id-generator';

import { LocalStorage, StorageKeys } from '../integrations';

export const ExpenseAction = {
  add: async (data: ExpenseCreate) => {
    const items = await LocalStorage.getItem<Expense[]>(
      StorageKeys.EXPENSE_LIST,
    );
    if (!items) {
      return false;
    }
    const item: Expense = {...data, id: generateShortId()};
    items.push(item);
    return LocalStorage.setItem(StorageKeys.EXPENSE_LIST, items);
  },

  remove: async (id: string) => {
    const items = await LocalStorage.getItem<Expense[]>(
      StorageKeys.EXPENSE_LIST,
    );
    if (!items) {
      return false;
    }
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    return LocalStorage.setItem(StorageKeys.EXPENSE_LIST, items);
  },
};
