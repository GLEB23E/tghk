<?php
$file = './assets/files/ГОСТ Р 54802-2011, Компрессоры поршневые.pdf';

header("Cache-Control: public");
header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=$file");
header("Content-Type: application/zip");
header("Content-Transfer-Encoding: binary");

readfile($file);