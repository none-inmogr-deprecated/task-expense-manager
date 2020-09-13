declare interface ExpenseCreate {
  date: string;
  amount: number;
}

declare interface Expense extends ExpenseCreate {
  date: string;
  id: string;
  amount: number;
}
