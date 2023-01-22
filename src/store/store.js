import Vue from "vue";
import Vuex from "vuex";
import { getters } from "@/store/getters";
import { mutations } from "@/store/mutations";
import { LOCAL_STORAGE_KEYS } from "../enums/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      activities: [],
      hiddenActivities: JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEYS.HIDDEN_ACTIVITIES) || "[]"
      ),
      errToast: null
    };
  },
  getters: getters,
  mutations: mutations
});
