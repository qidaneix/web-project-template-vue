<template>
  <div id="app">
    <com-header></com-header>
    <index></index>
    <com-footer></com-footer>
  </div>
</template>

<script>
import comHeader from '../component/comHeader.vue';
import comFooter from '../component/comFooter.vue';
import index from './component/index.vue';

export default {
  components: {
    comHeader,
    comFooter,
    index
  }
}
</script>

<style lang="sass" scoped>

</style>