<template>
    <div id="reg" >


        <div class="container">
            
            <div class="row">

                <div class="col s12 m8 offset-m2">

                    <div class="login card-panel  withe-text center ">
                        <h3>Register</h3>
                              <form @submit.prevent="callregister">
                                <div class="card-content ">
                                
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
                                <button   type="submit" class="btn green">Register</button>
                                </div>
                                </form>
                    </div>
                </div>
            </div>

            </div>     

    </div>
</template>

<script>

import firebase, { firestore } from 'firebase'
export default {
    name :'reg',
    data (){
        return{

            email : null,
            password:null

        }
    },
    methods:{

        callregister(e){
            
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
            .then( user =>{
                alert('Register successfully');
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
