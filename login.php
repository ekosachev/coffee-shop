<?php
session_start();

$users = require_once 'includes/users.php';
require_once 'logger.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = trim($_POST['login'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (empty($login) || empty($password)) {
        $error = "Заполните все поля";
    } elseif (!isset($users[$login])) {
        $error = "Неверный логин или пароль";
        writeAuthLog($login, 'FAIL_LOGIN');
    } elseif (password_verify($password, $users[$login]['password_hash'])) {
        $_SESSION['user_id'] = $users[$login]['id'];
        $_SESSION['user_login'] = $login;
        writeAuthLog($login, 'SUCCESS_LOGIN');
        header('Location: account.php');
        exit;
    } else {
        $error = "Неверный логин или пароль";
        writeAuthLog($login, 'FAIL_LOGIN');
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
        <div class="container-fluid py-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-5">
                    <div class="card">
                        <div class="card-header">

                            Войти в аккаунт
                        </div>
                        <div class="card-body">
                            <form method="post">
                                <div class="mb-3">
                                    <label for="inputLogin" class="form-label">Логин</label>
                                    <input type="text" name="login" id="inputLogin" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label for="inputPassword" class="form-label">Пароль</label>
                                    <input type="password" name="password" id="inputPassword" class="form-control">
                                </div>
                                <?php if (isset($error)): ?>
                                    <div class="text-danger form-text"><?= htmlspecialchars($error) ?></div>
                                <?php endif; ?>
                                <button type="submit" class="btn btn-primary">Войти</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <hr>
    <footer class="bg-body-tertiary text-center py-3">
        &copy; Все права защищены
    </footer>
</body>

</html>
