import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Newstudent from '@/components/Newstudent'
import Viewstudent from '@/components/Viewstudent'
import Editstudent from '@/components/Editstudent'
import Login from '@/components/Login'
import Reg from '@/components/Reg'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta:{
        requiredauth : true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        requiredguest : true
      }
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
      meta:{
        requiredguest : true
      }
    },
    {
      path: '/new',
      name: 'new-student',
      component: Newstudent,
      meta:{
        requiredauth : true
      }
    },
    {
      path: '/edit/:student_id',
      name: 'edit-student',
      component: Editstudent,
      meta:{
        requiredauth : true
      }
    },
    {
      path: '/:student_id',
      name: 'view-student',
      component: Viewstudent,
      meta:{
        requiredauth : true
      }
    }
    
  ]
})



router.beforeEach((to,from,next)=>{


  if(to.matched.some(record=> record.meta.requiredauth)){
    if(!firebase.auth().currentUser){

      next({
        path : '/login',
        query:{
          redirect : to.fullPath
        }

      });

    }else {

      next();
    }
  }
  else  if(to.matched.some(record=> record.meta.requiredguest)){
    if(firebase.auth().currentUser){

      next({
        path : '/',
        query:{
          redirect : to.fullPath
        }

      });

    }else {

      next();
    }
  }
  else{
    next();
  }

})


export default router;