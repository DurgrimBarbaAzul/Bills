import Vue from "vue";
import Vuex from "vuex";
import Bills from "@/store/modules/bills";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Bills,
  },
});

export default store;
