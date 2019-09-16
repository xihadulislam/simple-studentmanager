<template>
    <div id="view-student">

<ul class="collection  with-header">

<li class="collection-header " >
    <h4> Name : {{student_name}}</h4>
</li>
<li class="collection-item"> Id : {{student_id}}</li>
<li class="collection-item"> City : {{city}}</li>

</ul>

        <router-link to="./" class="btn grey" > Back</router-link>

        <button @click="deletestudent" class="btn red">Delete</button>


<div class="fixed-action-btn">

<router-link  v-bind:to="{name : 'edit-student', params :{student_id:student_id}}"  class="btn-floating btn-large red" >

 <i class="material-icons">edit</i>
</router-link>

</div>
    </div>
</template>

<script>
import db from './firebaseinit'
export default {

       name : 'view-student',
    
    data(){

        return{

            student_id:null,
            student_name :null,
            city :null

        }
    },
    beforeRouteEnter (to, from, next) {

        db.collection('student').where('student_id','==',to.params.student_id).get()
        .then(snapshort =>{

            snapshort.forEach(doc=> {

                next(vm =>{

                    vm.student_id = doc.data().student_id;
                    vm.student_name = doc.data().student_name;
                    vm.city = doc.data().city;

                })
            })

        })
        

    },
    watch :{

        '$route': 'fetchdata'
    },
    methods :{

        fetchdata(){

  db.collection('student').where('student_id','==', this.$route.params.student_id).get()
        .then(snapshort =>{

            snapshort.forEach(doc=> {
                    this.student_id = doc.data().student_id;
                    this.student_name = doc.data().student_name;
                    this.city = doc.data().city;
            })

        })

        },
        deletestudent(){

            if(confirm('Are You Sure??')){

db.collection('student').where('student_id','==', this.$route.params.student_id).get()
        .then(snapshort =>{

            snapshort.forEach(doc=> {
                 doc.ref.delete()
                 this.$router.push('/')

            })

        })
            }

        }

    }


}
</script>

