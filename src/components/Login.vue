
<template>



    <div id="login">

<div class="row">

        <div class="valign-wrapper  login-box boc ">
  <div class="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
    <form @submit.prevent="calllogin">
      <div class="card-content ">
        <span class="card-title">Please Login your system</span>
        <div class="row ">
          <div class="input-field col s12">
            <label>Email address</label>
             <input type="email" v-model="email" required>
          </div>
          <div class="input-field col s12">
            <label >Password </label>
             <input type="password" v-model="password" required>
          </div>
        </div>
      </div>
      <div class="card-action right-align">
      <button  type="submit" class="btn green">Login</button>
      </div>
    </form>
  </div>
</div>

</div>
    </div>
</template>


<script>

import firebase from 'firebase'
export default {

        name : 'login',
    
       data (){
        return{

            email : null,
            password:null

        }
    },
    methods:{

        calllogin(e){
            
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then( user =>{
                alert('Login successfully');
             //   this.$router.push('/');
                 this.$router.go({path: this.$router.path});
            },
            
            err=>{
                alert(err.message);
            })

            e.preventDefault();

        }

    }


}
</script>


<style  scoped>


.boc{

    height: 500px;
    width: 1000px;
}


</style>
