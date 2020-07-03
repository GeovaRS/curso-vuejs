import Vue from 'vue'
import Vuex from'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
  championship: 'Campeonato Brasileiro',
  clubName: 'HCode Treinamentos'
 },
 getters: {
  getChampionchip(state) {
   return state.championchip
  },
  getClubName(state) {
   return state.clubName
  }
 }
})
