<template>
  <main>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style lang="sass" scoped>

</style>
