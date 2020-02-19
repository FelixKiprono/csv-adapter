<template>
<div>
<!-- header Content -->
<Header></Header>

<!-- Page Content -->
<div class="container">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header bg-default text-black"><i class="fa fa-envelope"></i> Message us.
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" rows="5" required></textarea>
                        </div>
                        <div class="mx-auto">
                        <button type="submit" class="btn btn-primary text-right">Send</button></div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-4">
            <div class="card bg-light mb-3">
                <div class="card-header bg-default text-black"><i class="fa fa-phone"></i> Contacts</div>
                <div class="card-body">
                    <p>You can also reach us via these channels</p>
                    <p>Facebook  <a href="">csvadapter</a></p>
                    <p>Twitter  <a href="">@csvadapter</a></p>
                    <p>Email  <a href="">csvadapter@gmail.com</a></p>
                   <!--  <p>Skype  <a href=""> @csvadapter</a></p>
                    <p>Zoom  <a href=""> csvadapter</a></p>
 -->
                </div>

            </div>
        </div>
    </div>
</div>
<!-- footer Content -->
<Footer></Footer>

</div>
</template>
<script>

import Footer from './Footer.vue'
export default {
  name: 'about',
  components: {
    Footer  
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

</style>
