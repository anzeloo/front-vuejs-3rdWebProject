<template>
<div class="container">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

        <div class="row">
          
            <!-- FORM -->
            <div class="col-md-3">
                <div class="card" >
                    <div class="card-body">
                        <form action="/add" method="POST" >
                          
                            <h5> Add an user </h5>
                            
                            <div class="form-group">
                                <input type="text"  v-model="user.firstname" name="firstname" placeholder="firstname" class="form-control" >
                            </div>

                            <div class="form-group">
                                <input type="text" v-model="user.lastname" name="lastname" placeholder="lastname" class="form-control">
                            </div>

                             <div class="form-group">
                                <input type="text" v-model="user.username" name="username" placeholder="username" class="form-control">
                            </div>
                            
                             <div class="form-group">
                                <input type="password" v-model="user.password" name="password" placeholder="password" class="form-control">
                            </div>
                             
                           <div class="form-group">
                             <div class="select" >
                              <select v-model="user.type" name="type" class="form-control">
                                <option disabled value="">identification type</option>
                                <option>CC</option>
                                <option>TI</option>
                                <option>CE</option>
                                <option>PA</option>
                              </select>
                             </div>
                          </div>

                             <div class="form-group">
                                <input type="text" v-model="user.number" name="number" placeholder="identification number" class="form-control">
                            </div>

                             <div class="form-group">
                                <input type="text" v-model="user.photo" name="photo" placeholder="url photo" class="form-control">
                            </div>
                              
                           <div class="form-group">
                             <div class="select" >
                              <select v-model="user.active" name="active" class="form-control">
                                <option disabled value="">active?</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                             </div>
                          </div>

                            <button type="submit" class="btn btn-primary btn-block"> Add  </button>
                          
                        </form>
                    </div>
                </div>
            </div>
            <!-- LIST -->
            <div class="col-md-9">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Username</th>
                            <th>Id type</th>
                            <th>Id number</th>
                            <th>Active</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                          <!--  <tr v-for="user in users" :key="user"> -->
                               <tr>
                                <td>{{user.firstname}}</td>  
                                <td>{{user.lastname}}</td>  
                                <td>{{user.username}}</td>  
                                <td>{{user.type}}</td>  
                                <td>{{user.number}}</td>  
                                <td>{{user.active}}</td> 
                                <td>  
                                    <button class="btn btn-info" @click.prevent="edit()"> Edit </button>
                                     <button class="btn btn-danger"> Delete </button>
                                <!--  <a href="/edit/user._id" class="btn btn-info"> Edit </a>  -->
                                </td>
                                </tr> 
                         <!--   </tr> -->
                         
                    </tbody>
                </table> 
            </div> 
        </div>
    </div>


   
</template>

<script>
export default {
  name: 'Users',
  data() {
    return{
     user:{
       firstname: '', 
       lastname:'',
       username: '',
       type: '',
       number: '',
       password: '',
       photo: '',
       active: ''

     },
     users:[]
    }
  },

  methods: {
      edit(){ 
      this.$router.push( "/editusers").catch(()=>{}); 
      }
  }
}
</script>

<style>
</style>
