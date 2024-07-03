<?php
echo var_dump($_POST);
setcookie("myCookie", "value", [
    "samesite" => "None",
    "secure" => true
]);