<template>
	<div>
		<div class="ui container stackable grid">
         <div class="six wide column">
           <h3 class="ui center aligned header">Register in</h3>
           

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
                 <button class="ui small fluid teal button" @click="register">Sign in</button>
               </div>
             </form>
         </div>

         <!--link to the registration view -->
         <div class="ui segment">
           Already have an account? <router-link to="/">Sign in here</router-link>
         </div>

       </div>

       <div class="six wide column">
         <div class="ui teal inverted segment">
           {{message}}
         </div>
       </div>
      </div>
	</div>
</template>

<script>
  import user from '@/modules/users'
  export default {
    name: 'Register',
    data () {
      return {
        username: '',
        password: '',
        message: ''
      }
    },

    methods: {
      register () {
        let newUser = {
          username: this.username,
          password: this.password
        }

        user.register(newUser)
          .then(response => {
            this.message = response
          })
          .catch(error => {
            this.message = error
          })
      }
    }
  }
</script>
