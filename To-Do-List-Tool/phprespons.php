<?php
if($_server("REQUEST_METHOD" === "POST"){
  $cookie = $_POST[cookie];
  echo $cookie;
}

?>
