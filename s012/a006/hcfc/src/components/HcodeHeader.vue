<template>
 <header>
  <div class="container">
   <nav class="navbar navbar-expand">
    <a href="#" class="link navbar-brand mr-auto">
     <img src="./../assets/svg/logo-hcode.svg" alt="HCode Treinamentos"
     class="img d-inline-block align-top" id="logo" /> Futebol Clube
    </a>
    <div class="links mr-2">
     <a href="#" class="btn mr-5"
     @click.prevent="$emit('change-component', 'home')">
      Início
     </a>
     <a href="#" class="btn mr-5"
     @click.prevent="$emit('change-component', 'news')">
      Notícias
     </a>
     <a href="#" class="btn mr-5">
      Classificações
     </a>
     <select name="championship" id="select-shampionship" class="form-control"
     @change="$emit('select-championship', $event.target.value)">
      <option value="Campeonato Brasileiro">
       Selecione um Campeonato
      </option>
      <option value="Campeonato Brasileiro" selected>
       Campeonato Brasileiro
      </option>
      <option value="Campeonato Espanhol">
       Campeonato Espanhol
      </option>
      <option value="Campeonato Inglês">
       Campeonato Inglês
      </option>
      <option value="Campeonato Italiano">
       Campeonato Italiano
      </option>
     </select>
    </div>
   </nav>
  </div>
 </header>
</template>

<script>
export default {

};
</script>

<style scoped>
 header {
  background-color: #000;
 }

 #logo {
  width: 150px;
  height: 100%;
 }

 .links {
  display: inline-flex;
 }

 .links a {
  color: #fff;
 }

 .links a:focus {
  outline: none !important;
  box-shadow: none !important;
 }

 .link {
  color: #d48e23;
  font-size: 30px;
  font-family: 'Rajdhani';
 }
</style>
