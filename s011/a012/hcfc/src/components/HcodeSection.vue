<template>
 <div>
  <div class="container">
   <div class="roww mt-5">
    <h3>Notícias do {{ championship }}</h3>
   </div>
  </div>
  <HcodeSectionBanner />
  <HcodeSectionNews />
 </div>
</template>

<script>
import HcodeSectionBanner from './HcodeSectionBanner'
import HcodeSectionNews from './HcodeSectionNews'

export default {
 components: {
  HcodeSectionBanner,
  HcodeSectionNews
 },
 props: {
  championship: String
 }
}
</script>

<style scoped>

</style>