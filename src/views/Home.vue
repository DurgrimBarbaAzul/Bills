<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="6" offset-md="3">
        <v-card>
          <v-card-text>
            <div class="text-center">
              <h1>Gastos</h1>
              <h2 class="pt-5">Total: {{ totalAmount }}</h2>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-btn @click="listBill" color="pink" fab dark small fixed bottom left>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn @click="addBill" color="pink" fab dark small fixed bottom right>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const bills = namespace("Bills");

@Component
export default class Home extends Vue {
  @bills.Getter
  public totalAmount!: number;

  public addBill(): void {
    this.$router.push("/form");
  }

  public listBill(): void {
    this.$router.push("/list");
  }
}
</script>
