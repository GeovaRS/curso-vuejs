<template>
 <div id="app">
  <HcodeHeader
   @select-championship="changeChampionship"
   @change-component="changeComponent"
  />
  <HcodeSection />
  <HcodeFooter />
 </div>
</template>

<script>
import HcodeHeader from './components/HcodeHeader'
import HcodeSection from './components/HcodeSection'
import HcodeFooter from './components/HcodeFooter'
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
   
  }
 },
 methods: {
  ...mapActions(['changeChampionship']),
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
