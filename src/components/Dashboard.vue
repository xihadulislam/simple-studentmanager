<template>
    <div id="dashboard">
        
<ul class="collection  with-header">

<li class="collection-header " >
    <h4> Dashboard (Students)</h4>
</li>

<li v-for="(student, index) in students" :key="index" class="collection-item">

<div class="chip"> {{student.city}}</div>
   {{student.student_name}}
 

 <router-link v-bind:to="{name : 'view-student',params :{student_id:student.student_id}}"  class="secondary-content">
 <i class="material-icons">remove_red_eye</i>
 </router-link>
 
 </li>

</ul>

<div class="fixed-action-btn">

<router-link to="./new" class="btn-floating btn-large red"  >

 <i class="material-icons">add</i>
</router-link>

</div>
    </div>
</template>

<script>

import db from './firebaseinit'

export default {

       name : 'dashboard',
    
    data(){

        return{
            students:[],

        }
    },

    created(){

        console.log("looooogff")

        db.collection('student').get()
        .then(querySnapshot =>{
                querySnapshot.forEach(doc =>{

                    console.log("djfsfhdskjf")
                    console.log(doc.data())
                    const data = {

                        'id' : doc.id,
                        'student_id':doc.data().student_id,
                        'student_name':doc.data().student_name,
                        'city' : doc.data().city

                    }
                    this.students.push(data);
                })


        })

    },

methods:{
    call(){
    }

}


}
</script>


<style  scoped>




</style>