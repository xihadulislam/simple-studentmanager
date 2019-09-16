<template>
    <div id="new-student">

<h3> Add New Student</h3>

    <div class="row">

        <form  @submit.prevent="savestudent" class="col s12" >

            <div class="row">

                <div class="input-field col s12">

                    <input type="text" v-model="student_name" required>
                    <label > Student Name</label>
                </div>

            </div>
             <div class="row">

                <div class="input-field col s12">

                    <input type="text" v-model="student_id" required>
                    <label > Student Id</label>
                </div>

            </div>
             <div class="row">

                <div class="input-field col s12">

                    <input type="text" v-model="city" required>
                    <label > City</label>
                </div>
            </div>

              <router-link to="./" class="btn grey" > Back</router-link>

        <button  type="submit" class="btn green">Save</button>
        </form>

  
    </div>
        
    </div>
</template>

<script>

    import db from './firebaseinit'

export default {
          name : 'new-student',
    
    data(){

        return{

            student_id:null,
            student_name :null,
            city :null
        }
    },
    methods :{

        savestudent(){

            db.collection('student').add({
                    student_name : this.student_name,
                    student_id : this.student_id,
                    city : this.city

                })
                .then(docref => this.$router.push('/'))
                .catch(Error=> console.log(''))

        }

    }


}
</script>

