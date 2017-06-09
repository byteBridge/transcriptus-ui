<template>
  <div>
       <div class="ui container stackable grid">
         <div class="six wide column">
           <h3 class="ui center aligned header">Sign in</h3>
           

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
         <div class="ui segment">
           Don't have an account? <a href="#">Sign in here</a>
         </div>

       </div>
      </div>
  </div>
</template> 

<script>
  import users from '../modules/users'
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },

    methods: {
      login () {
        users.login(this.username, this.password)
          .then(response => {
            alert(response)
          })
          .catch(error => {
            alert(error)
          })
      }
    }
  }
</script>
