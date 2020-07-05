<template>
 <div id="app">
  <HcodeHeader
   @select-championship="changeChampionship"
   @change-component="changeComponent"
  />
  <HcodeSection
  :current-component="currentSectionComponent"
  />
  <HcodeFooter />
 </div>
</template>

<script>
import HcodeHeader from './components/HcodeHeader'
import HcodeSection from './components/HcodeSection'
import HcodeFooter from './components/HcodeFooter'
// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
 name: "App",
 components: {
  HcodeHeader,
  HcodeSection,
  HcodeFooter
 },
 data() {
  return {
   currentSectionComponent: 'HcodeSectionBanner'
  }
 },
 methods: {
  ...mapActions(['changeChampionship']),
  // changeChampionship(value) {
  //  this.$store.dispatch('changeChampionship', value);
  // },
  changeComponent(value) {
   let component;

   switch(value) {
    case 'news':
     component = 'HcodeSectionNews';
    break;

    case 'home':
    default:
     component = 'HcodeSectionBanner';
    break;
   }
   this.currentSectionComponent = component;
  }
 }
};
</script>

<style>
 @import url("https://fonts.googleapis.com/css?family=Rajdhani&display=swap");
</style>
