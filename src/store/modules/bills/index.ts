import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";
import { IBill } from "@/types/bills";
import sBills from "@/services/bills";

@Module({ namespaced: true })
class Bills extends VuexModule {
  public bills: IBill[] = [];

  get totalAmount(): number {
    return this.bills.reduce((total, bill) => bill.amount + total, 0);
  }

  @Mutation
  public ADD_BILL(bill: IBill): void {
    this.bills.push(bill);
  }

  @Action
  public async addBill(bill: IBill): Promise<void> {
    sBills.add(bill);
    // const wheels = await get(wheelStore)
    this.context.commit("ADD_BILL", bill);
  }
}

export default Bills;
