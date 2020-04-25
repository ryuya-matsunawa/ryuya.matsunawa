import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skillcategories:[],
    loaded:false
  },
  //response.dataがfunction(state,skills)のskillsに入る
  //state.skillsでstateの中のskillsを指定し,その中にresponse.dataをいれる
  //stateが変更された後loadedがtrueになることでグラフの表示が上手くいく
  mutations: {
    setSkills : function(state,payload) {
    state.skillcategories = payload.skillcategories
    state.loaded = true
    }
  },
  //axiosでデータを取得して,そのデータをresponse.dataに入れる
  //commitでsetSkillsを呼び出す
  actions: {
    async updateSkillCategories({commit}){
      const skillcategories = [];
      const functionsUrl = 'https://us-central1-'+ process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skillcategories';
      const res = await axios.get(functionsUrl);
      res.data.forEach((category) => {
        skillcategories.push(category);
      });
      commit('setSkills', {skillcategories});
    },
  },
  getters: {
    getSkills: (state) => (category) => {
      if (state.skillcategories.length > 0) {
        return state.skillcategories.find((skill) => skill.category===category);
      }
      return [];
    },
  }
  }
)
