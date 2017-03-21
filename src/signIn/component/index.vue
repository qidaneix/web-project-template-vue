<template>
  <main>
    {{msg}}
  </main>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      msg: 'main content of sign in'
    };
  }
}
</script>

<style lang="sass" scoped>
@import '../../scss/variables.scss';

main {
  color: $red;
}
</style>
