import Vue from 'vue'
import Vuex from'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
  championship: 'Campeonato Brasileiro',
  clubName: 'HCode Treinamentos',
  news: [{
   id: 1,
   title: 'Começam os treinos para a nova temporada',
   content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestiae assumenda dolorum autem cupiditate optio voluptatibus illo unde neque totam ipsa tenetur, animi dignissimos impedit in labore aperiam velit. Dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam eos assumenda odio id reiciendis culpa deleniti itaque quisquam exercitationem obcaecati doloremque ratione ex explicabo, quae reprehenderit hic. Sint, sequi?',
   date: '2020-06-29',
   img: 'news1.jpg',
   imgInfo: 'Notícia 1'
  }, {
   id: 2,
   title: 'Jogo de quarta-feira termina empatado',
   content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestiae assumenda dolorum autem cupiditate optio voluptatibus illo unde neque totam ipsa tenetur, animi dignissimos impedit in labore aperiam velit. Dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam eos assumenda odio id reiciendis culpa deleniti itaque quisquam exercitationem obcaecati doloremque ratione ex explicabo, quae reprehenderit hic. Sint, sequi?',
   date: '2020-06-24',
   img: 'news2.jpg',
   imgInfo: 'Notícia 2'
  }, {
   id: 3,
   title: 'A inauguração do novo estádio será na semana que vem',
   content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestiae assumenda dolorum autem cupiditate optio voluptatibus illo unde neque totam ipsa tenetur, animi dignissimos impedit in labore aperiam velit. Dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam eos assumenda odio id reiciendis culpa deleniti itaque quisquam exercitationem obcaecati doloremque ratione ex explicabo, quae reprehenderit hic. Sint, sequi?',
   date: '2020-06-20',
   img: 'news3.jpg',
   imgInfo: 'Notícia 3'
  }]
 },
 getters: {
  getChampionchip(state) {
   return state.championchip
  },
  getClubName(state) {
   return state.clubName
  },
  getNews(state) {
   return state.news
  }
 }
})
