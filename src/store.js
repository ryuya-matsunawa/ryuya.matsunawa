import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills:[]
  },
  mutations: {
    setSkills : function(state,skillsArray) {
      skillsArray[0].skill.forEach((skillInfo) => {
        state.skills.push(skillInfo.name)
      })
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
})
