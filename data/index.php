<?php

//https://www.ibm.com/developerworks/library/os-php-readfiles/index.html
//https://www.sitepoint.com/performant-reading-big-files-php/
//https://stackoverflow.com/questions/2749441/fastest-way-possible-to-read-contents-of-a-file

$file = '';
$file_handle = fopen("log_data.log", "r");

//echo '{';
$data = [];
while (!feof($file_handle)) {
   $line = fgets($file_handle);
   //echo $line;die;
   //echo json_encode(explode(' ',$line,0));
   //$first = (explode(' ',$line));   
   $first = (explode(':-:',$line));   
   //var_dump($first);die;
   $data[]=$first;
}
fclose($file_handle);
//echo '}';

//$c[] = $a;
$b['data']=$data;
$b['echo']=1;
$b['filtered']=1;

echo json_encode($b);


//echo json_encode($data);