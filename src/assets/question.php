<?php
echo var_dump($_POST);
setcookie('cookieName', 'cookieValue', [
    'expires' => time() + 3600,
    'path' => '/',
    'domain' => 'example.com',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'None' // Установите 'None' для сторонних cookie
]);
