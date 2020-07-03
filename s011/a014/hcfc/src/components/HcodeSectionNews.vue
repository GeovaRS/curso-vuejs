<template>
 <section>
  <div class="container">
   <HcodeSectionNewsIndividual
    img-name="news1.jpg"
    img-info="Notícia 1"
    news-title="Começam os treinos para a nova temporada"
    news-content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestiae assumenda dolorum autem cupiditate optio voluptatibus illo unde neque totam ipsa tenetur, animi dignissimos impedit in labore aperiam velit. Dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam eos assumenda odio id reiciendis culpa deleniti itaque quisquam exercitationem obcaecati doloremque ratione ex explicabo, quae reprehenderit hic. Sint, sequi?"
    news-date="29/06/2020"
   />
   <HcodeSectionNewsIndividual
    img-name="news2.jpg"
    img-info="Notícia 2"
    news-title="Jogo de quarta-feira termina empatado"
    news-content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestiae assumenda dolorum autem cupiditate optio voluptatibus illo unde neque totam ipsa tenetur, animi dignissimos impedit in labore aperiam velit. Dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam eos assumenda odio id reiciendis culpa deleniti itaque quisquam exercitationem obcaecati doloremque ratione ex explicabo, quae reprehenderit hic. Sint, sequi?"
    news-date="24/06/2020"
   />
   <HcodeSectionNewsIndividual
    img-name="news3.jpg"
    img-info="Notícia 3"
    news-title="A inauguração do novo estádio será na semana que vem"
    news-content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestiae assumenda dolorum autem cupiditate optio voluptatibus illo unde neque totam ipsa tenetur, animi dignissimos impedit in labore aperiam velit. Dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam eos assumenda odio id reiciendis culpa deleniti itaque quisquam exercitationem obcaecati doloremque ratione ex explicabo, quae reprehenderit hic. Sint, sequi?"
    news-date="20/06/2020"
   />
  </div>
 </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'

export default {
 components: {
  HcodeSectionNewsIndividual
 }
}
</script>

<style scoped>
 section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: #f37520;
 }
</style>