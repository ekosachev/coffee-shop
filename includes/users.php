<?php
// users.php

// Возвращаем массив напрямую. Это очень удобный паттерн в PHP для конфигов.
return [
    'admin' => [
        'id' => 1, // password admin123
        'password_hash' => '$2y$10$rQENAWIrlbUeLi8CSocYK.1oW3Lqbeg9It/j/mY4X.JVjvlkesS22',
    ],
    'user' => [
        'id' => 2, // password coffee
        'password_hash' => '$2y$10$QklCn0iZrZ7XnAFpVFXppeZFMEKbVg2NGB6sLygKAd9rT3EXyY/ry',
    ],
];
