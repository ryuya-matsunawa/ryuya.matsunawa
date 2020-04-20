import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category: "",
    name: "",
    score: ""
  },
  mutations: {
    getAddress(state, category, name, score) {
      state.category = category;
      state.name = name;
      state.score = score;
    }
  },
  actions: {
    async getAddressAction(context) {
      const payload = {
        category: "",
    name: "",
    score: ""
      };
      await axios
        .get("https://us-central1-portfolio-d9ccd.cloudfunctions.net/skills", {
          params: { zipcode: payload.zip }
        })
        .then(res => {
          payload.address = res.data.data.fullAddress;
        });
      context.commit("getAddress", payload);
    }
  }
});
