<?php
require_once 'logger.php';

session_start();
$login = $_SESSION['user_login'] ?? 'unknown';
writeAuthLog($login, 'LOGOUT');
$_SESSION = [];
session_destroy();
header('Location: login.php');
exit;
