<template>
<div class="container">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

        <div class="row">
          
            <!-- FORM -->
            <div class="col-md-3">
                <div class="card" >
                    <div class="card-body">
                        <form>
                          
                            <h5> Update an user </h5>
                            
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

                            <button type="submit" class="btn btn-primary btn-block"> Update  </button>
                          
                        </form>
                    </div>
                </div>
            </div>
       </div>
    </div>


   
</template>
<script>
export default {
    name: 'EditUsers',
    data(){
        }
}
</script>

