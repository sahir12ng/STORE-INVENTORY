<?php

    require_once "conexion.php";
    class crud_productos
    {
        private $pdo;
        public function __CONSTRUCT()
        {
            try {
                $this->pdo = database::conectar();
            } catch (Exception $e) {
                die($e->getMessage());
            }
        }

        public function insertar_producto( $nombre_prod, $precio, $cant_disp,$prov)
        {

            $sql = "INSERT INTO  producto (nom_producto, valor_producto, disponibilidad_producto,proveedor_Id_proveedor) VALUES ('$nombre_prod', '$precio', '$cant_disp','$prov')";

            $this->pdo->query($sql);

                print "<script>alert(\"Producto agregado exitosamente.\");window.location='inventario.php';</script>";

        }

        public function actualizar_producto($nombre_prod, $precio, $cant_disp, $categoria,$prov)
        {
            $sql = "UPDATE producto SET
            nom_producto = '$nombre_prod',
            valor_producto = '$precio',
            disponibilidad_producto = '$cant_disp',
            proveedor_Id_proveedor = '$prov'
            WHERE Id_producto = '$cod'";
            $this->pdo->query($sql);

            print "<script>alert(\"Producto actualizado exitosamente.\");window.location='inventario.php';</script>";
        }

        public function borrar_producto($cod)
        {
            $sql = "DELETE FROM producto WHERE Id_producto = '$cod'";

            $this->pdo->query($sql);

            print "<script>alert(\"Producto eliminado exitosamente.\");window.location='inventario.php';</script>";

        }

    }

?>