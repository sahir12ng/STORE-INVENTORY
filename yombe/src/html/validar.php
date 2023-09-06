<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=, initial-scale=1.0">
  <title>validacion login</title>
</head>
<body>
  <?php

  class Login 
  {
    public function Login_user($cedula,$user,$pass)
  {
  session_start();
  require_once 'conexion.php';

  $db=database::conectar();
  $cont=0;
  $sql2="SELECT * FROM usuario WHERE t_doc_usuario='$cedula' AND id_usuario='$user' and pass_user='$pass'";
  $result2= $db->query($sql2);

  while($row2=$result2->fetch(PDO::FETCH_ASSOC))
  {
    $uusername=stripslashes($row2["t_doc_usuario"]);
    $idd_usuario=stripslashes($row2["id_usuario"]);
    $ppasword=stripcslashes($row2["pass_user"]);
    $cont=$cont+1; 
  }
  if($cont==0)
  {
    print"<script>alert(\"usuario y/o password incorectas.\");window.location='inicio_sesion.php';</script>";

  }

  if ($cont!=0)
  {
    $_SESSION['t_doc_usuario']=$uusername;
    $_SESSION['id_usuario']=$idd_usuario;
    $_SESSION['pass_user']=$ppasword;
    $sql1="SELECT persona_rol FROM persona_has_roles WHERE persona_tdoc='$uusername' and persona_id='$idd_usuario' and persona_rol=10";
    $result1= $db->query($sql1);
while($row1=$result1->fetch(PDO::FETCH_ASSOC))
  {
    $role=stripslashes($row1["persona_rol"]);
  }
  if(@$role === null)
  {
    print"<script>alert(\"el usuario no tiene asignado ningun rol\");window.location='inicio_sesion.php';</script>";
  }
  if(@$role === '10')
  {
    $_SESSION['active']=1;
    header('location: interfaz.php');
  }

  elseif(@$role === '11'){
    $_SESSION['active']=1;
    header('location: interfaz.php');
  }

  elseif(@$role === 'temporal')
  {
    print"<script>alert(\"señor usuario su rol es temporal,comuniquese con el administrador\");window.location='inicio_sesion.php';</script>";

  }
}
}
  }
    $Nuevo=new Login();
    $Nuevo->Login_user($_POST["aña"],$_POST["user"],$_POST["pass"]);
?>
</body>
</html>

