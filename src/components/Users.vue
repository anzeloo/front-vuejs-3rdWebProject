<template>
<div class="container">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

        <div class="row">
            <!-- FORM -->
            <div class="col-md-3">
                <div class="card" >
                    <div class="card-body">
                        <form >
                            <h5> {{ statename }} an user </h5>

                            <div class="form-group">
                                <input type="text"  v-model="firstname" name="firstname" placeholder="firstname" class="form-control" >
                            </div>

                            <div class="form-group">
                                <input type="text" v-model="lastname" name="lastname" placeholder="lastname" class="form-control">
                            </div>

                             <div class="form-group">
                                <input type="text" v-model="username" name="username" placeholder="username" class="form-control">
                            </div>
                            
                             <div class="form-group">
                                <input type="password" v-model="password" name="password" placeholder="password" class="form-control">
                            </div>
                             
                           <div class="form-group">
                             <div class="select" >
                              <select v-model="type" name="type" class="form-control">
                                <option disabled value="">identification type</option>
                                <option>CC</option>
                                <option>TI</option>
                                <option>CE</option>
                                <option>PA</option>
                              </select>
                             </div>
                          </div>

                             <div class="form-group">
                                <input type="number" v-model="number" name="number" placeholder="identification number" class="form-control">
                            </div>

                             <div class="form-group">
                                <input type="text" v-model="photo" name="photo" placeholder="url photo" class="form-control">
                            </div>
                              
                           <div class="form-group">
                             <div class="select" >
                              <select v-model="active" name="active" class="form-control">
                                <option disabled value="">active?</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                             </div>
                          </div>
                            <button type="button" class="btn btn-primary btn-block" @click="addUser" > {{ statename }} </button> 
                           <div class="form-group">
                           <div v-if="statecancel === true">
                            <button type="button" class="btn btn-danger btn-block" disabled> cancel </button> 
                           </div>
                           <div v-else>
                               <button type="button" class="btn btn-danger btn-block" @click="cancelEdit"> cancel </button>
                           </div>
                           </div>
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
                               <tr v-for="user in users" v-bind:key="user.number">
                                    <td>{{user.name.firstname}}</td>  
                                    <td>{{user.name.lastname}}</td>  
                                    <td>{{user.username.type}}</td>  
                                    <td>{{user.identification.type}}</td>  
                                    <td>{{user.identification.number}}</td>  
                                    <td>{{user.active}}</td> 
                                    <td>  
                                        <button class="btn btn-info" @click="editUser(user._id)"> Edit </button>
                                        <button class="btn btn-danger" @click="deleteUser(user._id)"> Delete </button>
                                    </td>
                                </tr> 
                    </tbody>
                </table> 
            </div> 
        </div>
    </div>
</template>

<script>
import axios from 'axios';



export default {
  name: 'Users',
  data() {
    return{
        firstname: '', 
        lastname:'',
        username: '',
        type: '',
        number: '',
        password: '',
        photo: '',
        active: '',
        users:[],
        url: 'http://localhost:3000/users',
        state: true,
        statename: 'add',
        stateid: '',
        statecancel: true
    
    }
  },
  created() {
      this.getUsers();
  },
  methods: {
      getUsers() {
          axios.get(this.url).then(response => {
              this.users = response.data;
          }).catch(error => console.log(error))
      },
      addUser() {
          let user = {  
            firstname: this.firstname, 
            lastname: this.lastname,
            typeUN: this.username,
            typeID: this.type,
            number: parseInt(this.number),
            password: this.password,
            photo: this.photo,
            active: this.active==="Yes"? true : false
         }
            if(this.state){
               
               axios.post(this.url, user).then( response => {
                    if (response.status == 200) {
                          this.firstname= ''; 
                          this.lastname= '';
                          this.username= '';
                          this.type= '';
                          this.number= '';
                          this.password= '';
                          this.photo= '';
                          this.active= '';
                          this.getUsers();
                    }
                }
                ).catch(error => console.log(error))

            }
         else{
             this.updateUser(this.stateid);
         }

      },

      deleteUser(id) {
          axios.delete(this.url+"/"+id).then(response => {
              if (response.status == 200) {
                  console.log("Usuario eliminado");
                  this.getUsers();
              }
          }).catch(error => console.log(error))
      },

     editUser(id) {
          axios.get(this.url+"/"+id).then(response => {
              if (response.status == 200) {
                  console.log(response.data);
                  this.firstname = response.data.name.firstname;
                  this.lastname = response.data.name.lastname;

                  this.username = response.data.username.type;
                  this.password = response.data.password;
                  this.type = response.data.identification.type;
                  this.number = response.data.identification.number;
                  this.photo = response.data.photo;
                  this.active = response.data.active ? 'Yes' : 'No';

                  this.statecancel = false;
                  this.state = false;
                  this.statename = 'edit';
                  this.stateid = id;



                  
                  console.log(this.firstname);
              }
          }).catch(error => console.log(error))
      }
,

     updateUser(id){
            let userupdated = {  
     
            name: {
                firstname: this.firstname, 
                lastname: this.lastname
            },
            username: {
                type: this.username
            },
            identification: {
                type: this.type,
                number: this.number
            },
            password: this.password,
            photo: this.photo,
            active: this.active==="Yes"? true : false
         }
         console.log(id);
    console.log(userupdated);
         
            axios.put(this.url+"/"+id, userupdated).then( response => {
              if (response.status == 200) {
                    this.firstname= ''; 
                    this.lastname= '';
                    this.username= '';
                    this.type= '';
                    this.number= '';
                    this.password= '';
                    this.photo= '';
                    this.active= '';
                    
                    this.getUsers();
                    this.stateid = '';
                    this.statename = 'add';
                    this.state = true;
                    this.statecancel = true;

              }
          }
          ).catch(error => console.log(error))

         alert("The user has been updated successfully!");

      } ,

      cancelEdit(){
                    this.firstname= ''; 
                    this.lastname= '';
                    this.username= '';
                    this.type= '';
                    this.number= '';
                    this.password= '';
                    this.photo= '';
                    this.active= '';    

                    this.statecancel = true;
                    this.statename = 'add';
                    this.state = true;
                    this.stateid = '';

      }
      
        

  }
}
</script>

<style>
</style>
