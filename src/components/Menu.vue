<template>
  <div class="ui teal segment">
    <div class="ui secondary menu">
        <a class="ui right item">
        <div class="ui teal button ">
          <label v-if="!authenticatedUser">Sign in</label>
          {{authenticatedUser}}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      authenticatedUser () {
        return this.$store.getters.authenticatedUser
      }
    }

  }
</script>
