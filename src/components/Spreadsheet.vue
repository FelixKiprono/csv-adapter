<template>
<div>
<!-- Page Content -->
<div class="container">
  <div class="card border-0 shadow my-5">
    <div class="card-body p-5">
       <b-alert show variant="warning">Nb: Please convert your file to csv first before uploading</b-alert>
<div class="dropfile">
 <input 
      type="file"
      class="fileinput"      
      ref="file"
      @change="onChange">
     
<h2 class="inputtext">Drop csv file here</h2>

</div>

<div class="row">
<div class="col-sm-4">
  Target Type 
<b-form-select placeholder="Target type" v-model="selected" :options="options">
    -- Please select an target type --
</b-form-select>
  </div>
   <div class="col-sm-4">
     Your table name 
      <b-form-input v-model="tablename" placeholder="tablename"></b-form-input>
      
    <!-- <div class="mt-2">Defined table <b>{{ tablename }}</b></div> -->
  </div>
  <div class="col-sm-4">
   <!-- Your Columns (add , after the name)
      <b-form-input v-model="columns" placeholder="target table column names"></b-form-input>
    <div class="mt-2"><b>{{ columns }}</b></div>-->
     

   Enter column names and press enter
    <b-form-tags 
    input-id="tags-basic" 
    separator=" ,;" 
    placeholder="add column name" 
    v-model="value" 
    class="mb-3"
    tag-variant="primary"
    ></b-form-tags>

  </div>

    <div class="col-sm-4">
      <b-button 
      size="md"       
    variant="primary"
      @click="uploadFile()">Convert File</b-button>
  </div>
 
</div>
<div>
    <br>
  <b-form-textarea
    id="textarea-rows"
    placeholder="Converted output"
    rows="8"
    style="font-family:monospace;"
    v-model="convertedData"    
  ></b-form-textarea>

  <div class="mt-3">
    <b-button-group size="sm">
      <b-button>Copy</b-button>
      <b-button @click="clear()">Clear</b-button>
    </b-button-group>
  </div>
</div>

</div>
</div>
</div>

<Footer></Footer>
</div>
</template>

<script>

import Footer from './Footer.vue'
export default {
  name: 'spreadsheet',
  components: {
    Footer
   
},
  data()
  {
    return {
        http:'https://api.csvadapter.com/',
        file:'',
        selected:'SQL',
        options:['SQL','MySQL','MsSQL','PostgreSQL','SQLite'],
        convertedData:'',
        name:'SQL and MySQL',
        tablename:'',
        columns:'',
        value: []
    }
  },
  methods:
  {
    clear()
    {
      this.convertedData='';

    },
      onChange($event)
      {
        var myfile = $event.target.files[0];        
        //read file contents
        this.file= myfile;    
      },
      uploadFile:function()
      {   
        if(this.file==='')
        {
          alert('You cannot convert empty file ');
          return;

        }
        
        //check if they have supplied table name

        var column='';
        if(this.value!=null)
        {
          var i=0;
          this.value.forEach((value)=>
          {
            i++;
            column = column + value;
            if(i<this.value.length)
            {
               column +=",";          

            }
          });      
        }
        else
        {
          column='';
        }
        this.columns = column;

       let formData = new FormData();
       formData.append('file', this.file);
       formData.append('type',this.selected);
       formData.append('table',this.tablename);
       formData.append('columns',this.columns);
    
    
    this.$http.post(this.http, formData,
      
      // this.$http.post('../php/index.php', formData,
       {
          headers:{
            'Content-Type': 'multipart/form-data'
          }
       })
       .then((response)=>
       {  
           this.convertedData = response.data;
           
       })
       .catch(function (error)
       {
           window.console.log(error);
       });
       

     }
     
  } 

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
