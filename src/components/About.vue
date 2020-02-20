<template>
<div>
<!-- header Content -->
<Header></Header>

<!-- Page Content -->
<div class="container">
                      
<b-list-group>
  <b-list-group-item href="#" active class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">How to use csv converter</h5>
    
    </div>

    <small></small>
  </b-list-group-item>

  <b-list-group-item href="#" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1"></h5>
      <small class="text-muted"></small>
    </div>

<ol>
    <li>
    <p class="mb-1">
      Convert/Export you excel file to csv from your source with any software that manages spreadsheets, 
      or if you have an existing csv file skip this part. 
      
    </p>
       <small>Ensure that your file is .csv or you will get an error</small>
  
    
    </li>
     <li>
    <p class="mb-1">
      On csvadapter website click convert then import the CSV file on the drop file area <br>
     </p>
    </li>
     <li>
    <p class="mb-1">
      You MUST choose the target query before proceeding the default is standard SQL, if you leave it the system 
      will return standard SQL query.
    </p>
    </li>
     <li>
    <p class="mb-1">
      You can choose to specify the table name and target columns or leave it blank the system will use header column names 
    </p>
    </li>
      <li>
    <p class="mb-1">
      Click convert and boom you have your desired query  now copy and run on your favorite database.
    </p>
    </li>

</ol>

    <small class="text-muted">By sergei(csvadapter)</small>
  </b-list-group-item>

  
</b-list-group>
</div>
<!-- footer Content -->
</div>

</template>
<script>

//import Footer from './Footer.vue'
export default {
  name: 'about',
  components: {
  //  Footer  
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
