<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre_usuario = $_POST["nombre_usuario"];
    $nombre_cancion = $_POST["nombre_cancion"];
    
    $archivo = fopen("/Users/zero/Documents/Strom/Tiktok page/registros.txt", "a");
    
    if ($archivo) {
        $registro = "Usuario: $nombre_usuario - Canción: $nombre_cancion - Fecha y Hora: " . date("Y-m-d H:i:s") . "\n";
        fwrite($archivo, $registro);
        fclose($archivo);
        
        header("Location: visualizar.php");
        exit();
    } else {
        echo "Error al abrir el archivo de registros.";
    }
}
?>
