<template>
  <div class="ui contaner">
    <h2>The top10 most wanted people</h2>
    <div class="ui vertical list">
      <div class="item" v-for="criminal in criminals">
        <div class="circular horizontal red label"><i class="user icon"></i></div>
        {{criminal.username}}
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '@/modules/axios'

  export default {
    'name': 'Secret',
    data () {
      return {
        criminals: []
      }
    },

    mounted () {
      const auth = {
        params: {
          token: localStorage.getItem('token')
        }
      }
      axios.get('/secret', auth)
        .then(response => {
          console.log(response)
          this.criminals = response.data.users
        })
        .catch(console.log)
    }
  }
</script>
