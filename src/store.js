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
    setSkills : function(state,skillcategories) {
    state.skillcategories = skillcategories
    state.loaded = true
    }
  },
  //axiosでデータを取得して,そのデータをresponse.dataに入れる
  //commitでsetSkillsを呼び出す
  actions: {
    getSkills: function({commit}){
      const functionsUrl = 'https://us-central1-'+ process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skillcategories';
      console.log(process.env.VUE_APP_FUNCTIONS_API)
      return axios.get(functionsUrl)
          .then(response => {
            commit('setSkills',response.data)
          })
    }
  },
  getters: {
    skillName: (state) => (index) => {
      const skillNameArray = []
      if(state.skillcategories){
        state.skillcategories[index].skills.forEach((Skill) => {
          skillNameArray.push(Skill.name)
        })
      }
      return skillNameArray
    },
    skillScore: (state) => (index) => {
      const skillScoreArray = []
      if(state.skillcategories[index]){
        state.skillcategories[index].skills.forEach((Skill) => {
          skillScoreArray.push(Skill.score)
        })
      }
      return skillScoreArray
    },
    skillColor: (state) => (index) => {
      const skillColorArray = []
      if(state.skillcategories[index]){
        state.skillcategories[index].skills.forEach((Skill) => {
          skillColorArray.push(Skill.backgroundColor)
        })
      }
      return skillColorArray
    },
    borderColor: (state) => (index) => {
      const borderColorArray = []
      if(state.skillcategories[index]){
        state.skillcategories[index].skills.forEach((Skill) => {
          borderColorArray.push(Skill.borderColor)
        })
      }
      return borderColorArray
    }
  }
  }
)
