import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills:[],
    loaded:false
  },
  mutations: {
    setSkills : function(state,skills) {
    state.skills = skills
    state.loaded = true
    }
  },
  actions: {
    getSkills: function({commit}){
      return axios.get('https://us-central1-portfolio-d9ccd.cloudfunctions.net/skills')
          .then(response => {
            commit('setSkills',response.data)
          })
    }
  },
  getters: {
    skillName: (state) => (index) => {
      const skillNameArray = []
      if(state.skills){
        state.skills[index].skill.forEach((Skill) => {
          skillNameArray.push(Skill.name)
        })
      }
      return skillNameArray
    },
    skillScore: (state) => (index) => {
      const skillScoreArray = []
      if(state.skills[index]){
        state.skills[index].skill.forEach((Skill) => {
          skillScoreArray.push(Skill.score)
        })
      }
      return skillScoreArray
    },
    skillColor: (state) => (index) => {
      const skillColorArray = []
      if(state.skills[index]){
        state.skills[index].skill.forEach((Skill) => {
          skillColorArray.push(Skill.backgroundColor)
        })
      }
      return skillColorArray
    },
    borderColor: (state) => (index) => {
      const borderColorArray = []
      if(state.skills[index]){
        state.skills[index].skill.forEach((Skill) => {
          borderColorArray.push(Skill.borderColor)
        })
      }
      return borderColorArray
    }
  }
  }
)
