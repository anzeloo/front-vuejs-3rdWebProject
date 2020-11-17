<template>
<div class="container">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

        <div class="row">
            <!-- FORM -->
            <div class="col-md-3">
                <div class="card" >
                    <div class="card-body">
                        <form >
                            <h5> Add an user </h5>

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
                            <button type="button" class="btn btn-primary btn-block" @click="addUser" > Add </button> 
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
        url: 'http://localhost:3000/users'
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
          console.log(id);
          this.$router.push({ params: { userId: id } }) 
      }
  }
}
</script>

<style>
</style>
