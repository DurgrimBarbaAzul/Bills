export enum TypePay {
  cash = "CASH",
  credit = "CREDIT",
  debit = "DEBIT",
}

export interface IBill {
  id?: string;
  createDate?: string;
  amount: number;
  place: string;
  typePay: TypePay;
}
