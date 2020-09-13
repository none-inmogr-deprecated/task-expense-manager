import {cloneDeep} from 'lodash';
import {createContext, useContext, useState} from 'react';

import {LocalStorage, StorageKeys} from '../integrations';

export type SetExpense = (data: Expense[]) => void | Promise<void>;

export type AppendExpense = (data: Expense) => void | Promise<void>;

export type RemoveExpense = (id: string) => void | Promise<void>;

export interface IExpenseContext {
  append: AppendExpense;
  clear: () => void;
  data: Expense[];
  remove: RemoveExpense;
  set: SetExpense;
}

export const ExpenseContext: React.Context<IExpenseContext> = createContext<
  IExpenseContext
>({} as IExpenseContext);

export const useExpense = () => useContext(ExpenseContext);

export const createExpense = (): IExpenseContext => {
  const [data, setData] = useState<Expense[]>([]);

  const set: SetExpense = async (next: Expense[]) => {
    const success = await LocalStorage.setItem(StorageKeys.EXPENSE_LIST, next);
    if (success) {
      setData(next);
    }
  };

  const append: AppendExpense = async (item: Expense) => {
    const next = [...data, item];
    set(next);
  };

  const clear = async () => {
    setData([]);
  };

  const remove: RemoveExpense = async (id: string) => {
    const next = cloneDeep(data);
    const index = next.findIndex((item) => item.id === id);
    if (index !== -1) {
      next.splice(index, 1);
      set(next);
    }
  };

  return {set, append, data, clear, remove};
};
