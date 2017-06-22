<template>
  <div id="app">
    <my-menu></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import Menu from './components/Menu.vue'

  export default {
    name: 'app',
    components: {MyMenu: Menu}
  }

</script>

<style type="text/css" src="@/assets/css/semantic-ui/semantic-ui.min.css"></style>
<style type="text/css">
  a router-link {
    color: teal; /* Match with the site theme*/
  }
</style>
