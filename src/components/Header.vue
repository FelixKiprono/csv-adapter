<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
  <div class="container">
        <router-link class="navbar-brand" to="/">Csv adapter</router-link>
     
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
         <li class="nav-item">
          <router-link class="nav-link" to="/" active>Convert</router-link>
        </li> 
        <!--  <li class="nav-item">
          <router-link class="nav-link" to="/account">Account</router-link>
        </li>  -->
        <li class="nav-item">
          <router-link class="nav-link" to="/pricing">Pricing</router-link>
        </li> 
        <li class="nav-item">
           <router-link class="nav-link" to="/about">About</router-link>
          <!-- <a class="nav-link" href="#">About</a>-->
        </li> 
      </ul>
    </div>
  </div>
</nav>

<!-- Page Content -->
 <router-view></router-view>


</div>
</template>
<script>
export default {
  name: 'header',
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
.dropfile{
    background: whitesmoke;
    height: 100px;
    border: 2px dashed rgb(204, 228, 228);
    outline-offset: -10px;
    font-family: sans-serif;
    margin: 20px auto;
   
    position: relative;

}
.fileinput{
height: 100px; width:100%;
position: absolute;
opacity:0;
text-align: center;
}
.inputtext{
text-align: center;
font-family: "Sans-serif", Arial, Verdana;
margin: 30px auto;

}
</style>
