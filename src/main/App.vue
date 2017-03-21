<template>
  <div id="app">
    <com-header></com-header>
    <main>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-view></router-view>
    </main>
    <com-footer></com-footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="sass" scoped>

</style>