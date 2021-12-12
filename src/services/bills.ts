import { IBill } from "@/types";

const sBills = {
  add(bill: IBill): IBill {
    const newBill = {
      ...bill,
      id: Math.random().toString(16).substr(2, 8),
      createDate: new Date().toString(),
    };

    return newBill;
  },
};

export default sBills;
