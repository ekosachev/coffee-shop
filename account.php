<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

$users = require_once 'includes/users.php';
$currentUser = null;

foreach ($users as $login => $data) {
    if ($data['id'] === $_SESSION['user_id']) {
        $currentUser = ['login' => $login, 'id' => $data['id']];
        break;
    }
}
?>

<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Интернет-магазин кофе</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"></script>
</head>

<body class="min-vh-100">
    <main>
        <div class="container m-5">Привет, <?= htmlspecialchars($currentUser['login']) ?>
            <a href="logout.php" class="btn btn-danger">Выйти</a>
        </div>
    </main>
    <hr>
    <footer class="bg-body-tertiary text-center py-3">
        &copy; Все права защищены
    </footer>
</body>

</html>
