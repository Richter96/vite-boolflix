<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {

    }
  },
}
</script>

<template>
  <h1 class=" text">Boolflix</h1>

  <template>
    <SiteHeader></SiteHeader>
    <SiteMain></SiteMain>
    <SiteFooter></SiteFooter>
  </template>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;
</style>
