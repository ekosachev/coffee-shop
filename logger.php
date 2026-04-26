<?php

function writeAuthLog($login, $action)
{
    $time = date('Y-m-d H:i:s');
    $ip = $_SERVER['REMOTE_ADDR'];

    $line = $time . " | ip=" . $ip . " | login=" . $login . " | action=" . $action;
    $line .= PHP_EOL;

    $dir = __DIR__ . '/logs';
    $file = $dir . '/auth.log';

    file_put_contents($file, $line, FILE_APPEND);
}
