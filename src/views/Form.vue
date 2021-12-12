<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="6" offset-md="3">
        <v-card>
          <v-card-title class="text-center">Agregar cuenta</v-card-title>
          <v-card-text>
            <v-combobox
              v-model="place"
              :items="places"
              :search-input.sync="searchPlace"
              label="Lugar"
              clearable
              :rules="[rules.required]"
            />
            <v-text-field
              type="number"
              v-model="amount"
              label="Total"
              clearable
              :rules="[rules.required]"
            />
            <v-select
              :items="typePays"
              v-model="typePay"
              label="Tipo de pago"
              :rules="[rules.required]"
            ></v-select>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-btn @click="cancel" color="pink" fab dark small fixed bottom left>
          <v-icon>mdi-window-close</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn @click="clear" color="pink" fab dark small fixed bottom>
          <v-icon>mdi-eraser</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          @click="add"
          :disabled="disabledAddBill"
          color="pink"
          fab
          dark
          small
          fixed
          bottom
          right
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

import { IBill, TypePay } from "@/types/bills";

const bills = namespace("Bills");

@Component
export default class Form extends Vue {
  public place = "";
  public amount = "";
  public typePay: TypePay = TypePay.cash;
  public searchPlace = "";

  public rules = {
    required: (value: any) => {
      return !!value || "Requerido.";
    },
  };

  public typePays: TypePay[] = [TypePay.cash, TypePay.credit, TypePay.debit];
  public places: string[] = ["Mercadona", "Dia", "Carrefour"];

  get disabledAddBill(): boolean {
    return this.place.trim() && this.amount ? false : true;
  }

  public clear(): void {
    this.place = "";
    this.amount = "";
    this.typePay = TypePay.cash;
  }

  public cancel(): void {
    this.$router.go(-1);
  }

  @bills.Action
  public addBill!: (bill: IBill) => void;

  public add(): void {
    const bill = {
      amount: Number.parseFloat(this.amount),
      place: this.place,
      typePay: this.typePay,
    };

    this.addBill(bill);
  }
}
</script>

<style></style>
