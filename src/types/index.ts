export type Expense = {
  id: string;
  expenseName: string;
  amount: number;
  category: string;
  date: Value;
}

export type DraffExpense = {
  expenseName: string;
  amount: number;
  category: string;
  date: Value;
}


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];