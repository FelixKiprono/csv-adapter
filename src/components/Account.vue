<template>
<div>
<!-- header Content -->

<!-- Page Content -->
<div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <b-button variant="primary">Login</b-button>
                        </div>
                        <div class="form-group">
                            <a href="#" class="ForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                </div>
                <div class="col-md-6 login-form-2">
                    <h3>Create Account</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <b-button variant="success">Create</b-button>
                        </div>
                        <div class="form-group">

                        </div>
                    </form>
                </div>
            </div>
        </div>
<!-- footer Content -->


</div>
</template>
<script>
//import Header from './Header.vue'
export default {
  name: 'account',
  components: {
  //  Header  
},
  data()
  {
    return {
       
    }
  },
  

}

</script>

<style> 
/* Set a background image by replacing the URL below */
body {
 /* background: url('https://freecoursesite.us/wp-content/uploads/2019/08/Mastering-Essential-Excel-in-3-HOURS-Course-Learn-Excel.jpg') no-repeat center center fixed;*/
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
.login-container{
    margin-top: 5%;
    margin-bottom: 5%;
}
.login-form-1{
    padding: 5%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
    text-align: center;
    color: #333;
}
.login-form-2{
    padding: 5%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2 h3{
    text-align: center;
    color: #333;
}
.login-container form{
    padding: 10%;
}
.btnSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    border: none;
    cursor: pointer;
}
.login-form-1 .btnSubmit{
    font-weight: 600;
    color: #fff;
    background-color: #0062cc;
}
.login-form-2 .btnSubmit{
    font-weight: 600;
    color: #0062cc;
    background-color: #fff;
}
.login-form-2 .ForgetPwd{
    color: #fff;
    font-weight: 600;
    text-decoration: none;
}
.login-form-1 .ForgetPwd{
    color: #0062cc;
    font-weight: 600;
    text-decoration: none;
}

</style>
