<template>

 <nav>
    <div class="nav-wrapper green">
      <router-link to="./" class="brand-logo center">Student Manager</router-link>

      <ul class="right">
        <li v-if="isLogedin"><router-link to="/">Dashboard</router-link></li>
          <li v-if="!isLogedin"><router-link to="/login">Login</router-link></li>
            <li v-if="!isLogedin"><router-link to="/reg">Register</router-link></li>

            <li v-if="isLogedin"> <button @click ="logout" class="btn  pink "> LogOut </button></li>

      </ul>

    </div>
  </nav>

</template>


<script>

import firebase from 'firebase'
export default {


  name:'navbar',
  data (){
    return{
      isLogedin : false,
      currentuserT : null
    }
  },
  created(){

    if(firebase.auth().currentUser){

      this.isLogedin =true;

    }

  },
  methods :{

    logout(){

      firebase.auth().signOut().then(()=>{

       this.$router.go({path: this.$router.path});
      })

    }
  }
  
}
</script>



<style >


</style>

