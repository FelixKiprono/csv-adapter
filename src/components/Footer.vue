<template>
<div>

  <footer id="sticky-footer" class="py-4 bg-light text-black-50">
    <div class="container text-center">
      <small>Copyright &copy;2020 Csvadapter </small>
    </div>
  </footer>
</div>
</template>
<script>
export default {
  name: 'footer',
  data()
  {
    return {
       
    }
  },
  

}

</script>

<style> 

#sticky-footer {
  flex-shrink: none;
  background-color: beige;
}

/* Set a background image by replacing the URL below */
body {
 /* background: url('https://freecoursesite.us/wp-content/uploads/2019/08/Mastering-Essential-Excel-in-3-HOURS-Course-Learn-Excel.jpg') no-repeat center center fixed;*/
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}

</style>
