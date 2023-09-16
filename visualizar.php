<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visualizar Registros</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Registros de Canciones</h1>
    <ul>
        <?php
        $registros = file("registros.txt");
        foreach ($registros as $registro) {
            echo "<li>$registro</li>";
        }
        ?>
    </ul>
</body>
</html>
