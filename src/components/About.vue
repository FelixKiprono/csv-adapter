<template>
<div>
<!-- header Content -->
<Header></Header>

<!-- Page Content -->
<div class="container">
  
  <h2 class="mb-1">What is Csv adapter ?</h2>

 <p class="mb-1">
     CSV adapter is a very simple comma delimited conversion tool, it converts csv files to desired sql format,i created csvadapter
     after spending alot of time while converting excel files to SQL queries, it has helped me alot in making the work abit
     faster and more accurate,i hope it solves your problem too.
</p>
 <h2 class="mb-1">Supported files</h2>

 <p class="mb-1">
     CSV adapter currently only supports <b>csv</b> file format</p>

<h2 class="mb-1">How to use csvadapter</h2>
<ol>
    <li>
    <p class="mb-1">
      Convert/Export you excel file to csv from your source with any software that manages spreadsheets, 
      or if you have an existing csv file skip this part. 
      
    </p>
      Ensure that your file format is <b>.csv</b> or you will get an upload error 
    
    </li>
     <li>
    <p class="mb-1">
      On csvadapter webapp click on the choose or drop file area and select your csv file from your computer files directory.<br>
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

   
</div>
</div>
<!-- footer Content -->

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
