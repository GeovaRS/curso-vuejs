<template>
 <div id="app">
  <HcodeHeader />
  <HcodeSection />
  <HcodeFooter />
 </div>
</template>

<script>
import HcodeHeader from './components/HcodeHeader'
import HcodeSection from './components/HcodeSection'
import HcodeFooter from './components/HcodeFooter'

export default {
 name: "App",
 components: {
  HcodeHeader,
  HcodeSection,
  HcodeFooter
 },
};
</script>

<style>
 @import url("https://fonts.googleapis.com/css?family=Rajdhani&display=swap");
</style>
