<?php
// Allow from any origin
if(isset($_SERVER["HTTP_ORIGIN"]))
{
    // You can decide if the origin in $_SERVER['HTTP_ORIGIN'] is something you want to allow, or as we do here, just allow all
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
else
{
    //No HTTP_ORIGIN set, so we allow any. You can disallow if needed here
    header("Access-Control-Allow-Origin: *");
}

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 600");  // cache for 10 minutes

if($_SERVER["REQUEST_METHOD"] == "OPTIONS")
{
    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT"); //Make sure you remove those you do not want to support

    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    //Just exit with 200 OK with the above headers for OPTIONS method
    exit(0);
}

// if(isset($_FILES['file']['name']))
// {
//From here, handle the request as it is ok

//read the request
// File name
$filename = $_FILES['file']['name'];
//the file itself
$file = $_FILES['file']['tmp_name'];
//Valid file extensions
$valid_extensions = array("csv");
//File extension
$extension = pathinfo($filename, PATHINFO_EXTENSION);

//table
$table;
//columns
$columns;
//Check extension
if(!in_array(strtolower($extension),$valid_extensions) )
{
  print("Invalid file type, you provided a invalid file with ".$extension." extension");
  //exit(0);
}
else
{
  //check the target conversion
  $type =  $_POST['type'];
  $columns =  $_POST['columns'];
   if(isset($_POST['table']))
   {
     $table = $_POST['table'];
   }

  switch($type)
  {
    case 'SQL':
    //standard SQL
    GenerateSQL($file,$table,$columns);
    break;

    case 'MySQL':
      //Opensource Mysql
    print('MySQL is comming soon **');
    break;

    case 'MicrosoftSQLServer':
      //Microsoft standard SQL
    print('MicrosoftSQLServer is comming soon **');
    break;

    case 'PostgreSQL':
    //PostgreSQL SQL
    print('PostgreSQL is comming soon **');
    break;

    case 'SQlite':
    //SQlite SQL
    print('SQLite is comming soon **');
    break;

    case 'MongoDB':
    //SQlite SQL
    print('MongoDB is comming soon **');
    break;

    case 'MSAccess':
    //SQlite SQL
    print('MSAccess is comming soon **');
    break;

    case 'JSON':
    //standard json
    print('Json is comming soon **');
    //GenerateJson($file);
    break;

  }

}
function GenerateJson($myfile)
{
  $csvFile = file($myfile);

  $index=0;
  $k=0;
  $columns =array();
  foreach ($csvFile as $lne)
  {
    $line= preg_replace('/^$bom/', '', $lne);

    $k++;
    $index++;
    //get column names
    if($index==1)
    {
      $var =   explode (",", $line);

      $j=0;
      for($i=0;$i<count($var);$i++)
      {
        $j++;
        array_push($columns,$var[$i]);
       }
      // print(json_encode($columns));

    }
    else
    {
      $row =  explode (",", $line);
    //  var_dump($row);

    //get the data from the line
      $data=array();
      for($j=0;$j<count($row);$j++)
      {
        $value = trim($row[$j],"\r\n");
        array_push($data,$value);
      }
      $finalarry = array_combine($columns, $data);
      print(json_encode($finalarry));

  }
  }
}



function GenerateSQL($myfile,$table,$columns)
{

      $csvFile = file($myfile);
      $data = [];
      $index=0;
      $tbl;
      if($table==null)
      {
        $tbl='yourtable';
      }
      else
      {
        $tbl=$table;
      }

      $query="INSERT INTO `$tbl`"."(";

      $k=0;
      foreach ($csvFile as $line)
      {
        $k++;
        $index++;
        //check if the client sent columns

        //get column names
        if($index==1)
        {
          //
          if($columns!=null)
          {
            $var =   explode (",", $columns);
            $j=0;
            for($i=0;$i<count($var);$i++)
            {
              $j++;
              $query.='`'.$var[$i].'`';
              if($j<count($var))
              {
                $query.=',';
              }
            }

          }
          else
          {
            $var =   explode (",", $line);
            $j=0;
            for($i=0;$i<count($var);$i++)
            {
              $j++;
              $query.='`'.$var[$i].'`';
              if($j<count($var))
              {
                $query.=',';
              }
            }

          }

          $query.=') VALUES ';
        }
        else
        {
        //get the data from the line
        $row =   explode (",", $line);

        $query.='(';
        $c=0;
        for($m=0;$m<count($row);$m++)
        {
          $c++;
          $query.="'".$row[$m]."'";
          if($c<count($row))
          {
            $query.=',';
          }
        }

          $query.=')';
  if($k!=count($csvFile))
  {
      $query.=',';
  }
  else
  {
    $query.=';';

  }
      }
      }
  print($query);
}
?>
