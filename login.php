<!DOCTYPE html>

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
