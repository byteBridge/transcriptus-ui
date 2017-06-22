<template>
  <div>
       <div class="ui container stackable grid">
          <div class="six wide column">

           <h3 class="ui center aligned header">Sign in</h3>
           
            <div class="ui red segment" v-if="error">
              <i class="red warning sign icon"></i>{{error}}
              <button class="ui right floated circular icon mini button" @click="error = ''"> 
              <i class="red remove icon"></i></button>
             </div>

           <!--login playground where the username and password are entered -->
           <div class="ui teal segment">
             <form class="ui fluid form">

             <!--username-->
               <div class="field">
                 <label>Username</label>
                 <div class="ui left icon input">
                   <i class="user icon"></i>
                   <input type="text" v-model:value="username">
                 </div>
               </div>

               <!--password-->
               <div class="field">
                 <label>Password</label>
                 <a href="" class="ui right floated item">I forgot my password</a>
                 <div class="ui left icon input">
                  <i class="lock icon"></i>
                   <input type="password" v-model:value="password">
                 </div>
               </div>

               <!--Submit -->
               <div class="field">
                 <button class="ui small fluid teal button" @click="login">Sign in</button>
               </div>
             </form>
         </div>

         <!--link to the registration view -->
         <div class="ui segment" id="register">
           Don't have an account? <router-link to="/register">Sign up here</router-link>
         </div>

       </div>
      </div>
  </div>
</template> 

<script>
  import users from '../modules/users'
  import $ from 'jquery'
  window.$ = $

  export default {
    data () {
      return {
        username: '',
        password: '',
        error: '',
        authenticatedUser: this.auth
      }
    },

    methods: {
      login () {
        users.login(this.username, this.password)
          .then(response => {
            this.$store.commit('login', this.username)
            localStorage.setItem('token', response.data.token)
            this.$router.push({ path: '/secret' })
          })
          .catch(error => {
            this.error = error.response ? error.response.data.error : 'We are having trouble logging you in. Could you check your internet connection.'
          })
      }
    }
  }
</script>
