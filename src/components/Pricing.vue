<template>
<div>
<!--<Header></Header>
 header Content -->


<!-- Page Content -->
<section class="pricing py-5">
  <div class="container">
    <div class="row">
      <!-- Free Tier -->
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Basic</h5>
            <h6 class="card-price text-center">$0<span class="period">/Forever</span></h6>
            <hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Ads present </li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Only Convert csv file to sql</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Limited sessions per day</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Limited upload size</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Personal and small scale use</li>
              <li><span class="fa-li"><i class="fas fa-times"></i></span>-</li>
             <li><span class="fa-li"><i class="fas fa-times"></i></span>-</li>
             <li><span class="fa-li"><i class="fas fa-times"></i></span>-</li>
             <li><span class="fa-li"><i class="fas fa-times"></i></span>-</li>
             <li><span class="fa-li"><i class="fas fa-times"></i></span>-</li>
               </ul>
            <a href="#" class="btn btn-block btn-success text-uppercase">Available</a>
          </div>
        </div>
      </div>
      <!-- Plus Tier -->
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 class="card-price text-center">$15<span class="period">/month</span></h6>
            <hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>No Ads</li>
             <li><span class="fa-li"><i class="fas fa-check"></i></span>Convert to more formats</li>
             <li><span class="fa-li"><i class="fas fa-check"></i></span>Choos the type of Query</li>
            
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited sessions</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited table rows</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited uploads size</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly payment cancel anytime</li>
              <li><span class="fa-li"><i class="fas fa-times"></i></span>-</li>
              <li><span class="fa-li"><i class="fas fa-times"></i></span>-</li>
              <li><span class="fa-li"><i class="fas fa-times"></i></span>-</li>
            
          </ul>
            <a href="#" class="btn btn-block btn-success text-uppercase">Comming Soon</a>
          </div>
        </div>
      </div>
      <!-- Pro Tier -->
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 class="card-price text-center">$100<span class="period">/yearly</span></h6>
            <hr>
            <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-check"></i></span>No Ads</li>
             <li><span class="fa-li"><i class="fas fa-check"></i></span>Choos the type of Query</li>
            
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited sessions</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited table rows</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited uploads size</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Commercial large scale use</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Save your data online</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Annual payment cancel anytime</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>API Access</li>
            </ul>
            <a href="#" class="btn btn-block btn-success text-uppercase">Comming Soon</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<!-- footer Content -->

<Footer></Footer>
</div>
</template>
<script>
import Footer from './Footer.vue'
export default {
  name: 'pricing',
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
