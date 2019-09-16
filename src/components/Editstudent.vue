<template>
    <div id="edit-student">

<h3> Edit Student</h3>

 <div class="row">

        <form  @submit.prevent="updatestudent" class="col s12" >

            <div class="row">

                <div class="input-field col s12">

                    <input type="text" v-model="student_name" required>
              
                </div>

            </div>
             <div class="row">

                <div class="input-field col s12">

                    <input type="text" v-model="student_id" required>
               
                </div>

            </div>
             <div class="row">

                <div class="input-field col s12">

                    <input type="text" v-model="city" required>
                  
                </div>
            </div>

              <router-link to="/" class="btn grey" >Cancel</router-link>

        <button  type="submit" class="btn orange ">Update</button>
        </form>

  
    </div>
        
    </div>
</template>

<script>
 import db from './firebaseinit'
export default {


    name : 'edit-student',
    
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

        updatestudent(){

              db.collection('student').where('student_id','==', this.$route.params.student_id).get()
        .then(snapshort =>{

            snapshort.forEach(doc=> {
                doc.ref.update({
                        student_name : this.student_name,
                    student_id : this.student_id,
                    city : this.city

                })
                  .then(this.$router.push({
                      name : 'view-student', params: {student_id:this.student_id}
                  }))
            })

        })

        }

    }


}
</script>

