create database store;
  use store;

-- -----------------------------------------------------
-- Table `store`.`tipo_documento`
-- -----------------------------------------------------
CREATE TABLE tipo_documento (
t_doc VARCHAR(10) ,
desc_tdoc VARCHAR(45) NOT NULL,
tdoc_estado TINYINT NOT NULL,
PRIMARY KEY (t_doc)
);


-- -----------------------------------------------------
-- Table `store`.`pregunta_seguridad`
-- -----------------------------------------------------
CREATE TABLE pregunta_seguridad (
id_p_seg INT(2),
p_seg VARCHAR(50) NOT NULL,
ver_p_seg VARCHAR(50) NOT NULL,
PRIMARY KEY (id_p_seg)
);

-- -----------------------------------------------------
-- Table `store`.`usuario`
-- -----------------------------------------------------
CREATE TABLE usuario (
t_doc_usuario VARCHAR(10) NULL DEFAULT NULL,
id_usuario VARCHAR(20) NULL DEFAULT NULL,
nom1_usuario VARCHAR(25) NOT NULL,
nom2_usuario VARCHAR(25) NULL,
ap1_usuario VARCHAR(25) NOT NULL,
ap2_usuario VARCHAR(25) NULL ,
correo_usuario VARCHAR(30) NOT NULL UNIQUE,
telefono_usuario VARCHAR(25) NOT NULL,
nomb_user VARCHAR (45) not NULL,
pass_user VARCHAR (45) not NULL,
id_p_seg_fk int (2) NOT NULL UNIQUE,
ver_p_seg_fk VARCHAR(50) NOT NULL,
PRIMARY KEY (t_doc_usuario, id_usuario)
);


-- -----------------------------------------------------
-- Table `store`.`empleado`
-- -----------------------------------------------------
CREATE TABLE empleado (
tdoc_emp VARCHAR(10) NULL DEFAULT NULL,
id_emp VARCHAR(20) NULL DEFAULT NULL,
sueldo_emp VARCHAR(20) NOT NULL,
user_emp VARCHAR(45) NOT NULL,
pass_emp VARCHAR(45) NOT NULL,
PRIMARY KEY (tdoc_emp, id_emp)
);


-- -----------------------------------------------------
-- Table `mydb`.`factura`
-- -----------------------------------------------------
CREATE TABLE factura (
n_factura INT NOT NULL,
fecha_factura DATE NOT NULL,
subtotal DOUBLE NOT NULL,
iva DOUBLE NOT NULL,
total_factura DOUBLE NOT NULL,
empleado_tdoc_emp VARCHAR(10) NOT NULL,
empleado_id_emp VARCHAR(10) NOT NULL,
cliente_tdoc_cliente VARCHAR(10) NOT NULL,
cliente_id_cliente VARCHAR(10) NOT NULL,
PRIMARY KEY (n_factura)

);


-- -----------------------------------------------------
-- Table `store`.`proveedor`
-- -----------------------------------------------------
CREATE TABLE proveedor (
Id_proveedor INT(3) NULL DEFAULT NULL,
nombre_proveedor VARCHAR(15) NOT NULL,
direccion_proveedor VARCHAR(15) NOT NULL,
PRIMARY KEY (Id_proveedor)
);


-- -----------------------------------------------------
-- Table `store`.`producto`
-- -----------------------------------------------------
CREATE TABLE producto (
Id_producto INT(5) NULL DEFAULT NULL,
nom_producto VARCHAR(45) NOT NULL,
valor_producto DOUBLE NOT NULL,
disponibilidad_producto TINYINT NOT NULL,
proveedor_Id_proveedor INT(3) NOT NULL,
PRIMARY KEY (Id_producto)
);


-- -----------------------------------------------------
-- Table `store`.`no_escolar`
-- -----------------------------------------------------
CREATE TABLE no_escolar (
no_escolar_Id_producto INT(5) NOT NULL,
PRIMARY KEY (no_escolar_Id_producto)

);

CREATE TABLE cliente (
usuario_t_doc VARCHAR(10) NOT NULL,
usuario_id_usuario VARCHAR(20) NOT NULL,
PRIMARY KEY (usuario_t_doc, usuario_id_usuario)

);

-- -----------------------------------------------------
-- Table `mydb`.`factura_has_no_escolar`
-- -----------------------------------------------------
CREATE TABLE factura_has_no_escolar (
factura_n_factura INT NOT NULL,
no_escolar_producto_Id_producto INT(5) NOT NULL,
PRIMARY KEY (factura_n_factura, no_escolar_producto_Id_producto)

);


-- -----------------------------------------------------
-- Table `store`.`escolar`
-- -----------------------------------------------------
CREATE TABLe escolar (
escolar_Id_producto INT(5) NOT NULL,
PRIMARY KEY (escolar_Id_producto)

);


-- -----------------------------------------------------
-- Table `mydb`.`factura_has_escolar`
-- -----------------------------------------------------
CREATE TABLE factura_has_escolar (
  factura_n_factura INT NOT NULL,
  escolar_producto_Id_producto INT(5) NOT NULL,
  PRIMARY KEY (factura_n_factura,escolar_producto_Id_producto)

);

-- -----------------------------------------------------
-- Table `store`.`administrador`
-- -----------------------------------------------------
CREATE TABLE administrador (
tdoc_adm VARCHAR(10) NULL DEFAULT NULL,
id_adm VARCHAR(20) NULL DEFAULT NULL,
user_adm VARCHAR(45) NOT NULL,
pass_adm VARCHAR(45) NOT NULL,
PRIMARY KEY (tdoc_adm, id_adm)
);


-- -----------------------------------------------------
-- Table `store`.`rol`
-- -----------------------------------------------------
CREATE TABLE rol (
id_rol INT(4) NULL DEFAULT NULL,
nomb_rol VARCHAR(30) NOT NULL,
PRIMARY KEY (id_rol)
);


-- -----------------------------------------------------
-- Table `store`.`persona_has_roles`
-- -----------------------------------------------------
CREATE TABLE persona_has_roles (
persona_tdoc VARCHAR(10) NULL DEFAULT NULL,
persona_id VARCHAR(20) NULL DEFAULT NULL,
persona_rol INT NULL DEFAULT NULL,
estado_rol TINYINT NOT NULL,
PRIMARY KEY (persona_tdoc, persona_id, persona_rol)
);

alter table usuario
add foreign key (t_doc_usuario)
references tipo_documento(t_doc);

alter table usuario
add FOREIGN KEY (id_p_seg_fk)
REFERENCES pregunta_seguridad (id_p_seg);

alter table empleado
add FOREIGN KEY (tdoc_emp , id_emp)
REFERENCES usuario (t_doc_usuario , id_usuario);

alter table factura
add FOREIGN KEY (empleado_tdoc_emp , empleado_id_emp)
REFERENCES empleado (tdoc_emp , id_emp);

alter table factura
add FOREIGN KEY (cliente_tdoc_cliente , cliente_id_cliente)
REFERENCES cliente (usuario_t_doc , usuario_id_usuario);

alter table producto
add FOREIGN KEY (proveedor_Id_proveedor)
REFERENCES proveedor (Id_proveedor);

alter table no_escolar
add FOREIGN KEY (no_escolar_Id_producto)
REFERENCES producto (Id_producto);

alter table cliente
add FOREIGN KEY (usuario_t_doc)
REFERENCES tipo_documento (t_doc);

alter table factura_has_no_escolar
add FOREIGN KEY (factura_n_factura)
REFERENCES factura (n_factura);

alter table factura_has_no_escolar
add FOREIGN KEY (no_escolar_producto_Id_producto)
REFERENCES no_escolar (no_escolar_Id_producto);

alter table escolar
add FOREIGN KEY (escolar_Id_producto)
REFERENCES producto (Id_producto);


alter table factura_has_escolar
add FOREIGN KEY (factura_n_factura)
REFERENCES factura (n_factura);

alter table factura_has_escolar  
add FOREIGN KEY (escolar_producto_Id_producto)
REFERENCES escolar (escolar_Id_producto);

alter table administrador
add FOREIGN KEY (tdoc_adm , id_adm)
REFERENCES usuario (t_doc_usuario , id_usuario);


alter table persona_has_roles
add FOREIGN KEY (persona_tdoc , persona_id)
REFERENCES usuario (t_doc_usuario , id_usuario);

alter table persona_has_roles
add FOREIGN KEY (persona_rol)
REFERENCES rol (id_rol);



insert into pregunta_seguridad
values ('1', 'Ciudad de nacimiento/ Nombre tu mascota', 'Bogotá/olos'),
 ('2', 'Ciudad de nacimiento/ Nombre tu mascota', 'Bogotá/Tony'),
 ('3', 'Ciudad de nacimiento/ Nombre tu mascota', 'Santander/yeriel');

 insert into tipo_documento
values ('T.I', 'Tajerta de identidad', '1'),
('C.C', 'Cedula de ciudadania', '1'),
('C.E', 'Cedula de Extranjeria', '1');

insert into  usuario
values ('C.C', '1121334559', 'Maribel', '', 'Guillen', 'Torres', 'papeleriariana191@gmail.com', '3225832533', '1', 'si'),
('C.C','1020308456','OLOS','','YERIEL','nova','olosnp8@gmail.com','3114475462','2','si'),
('C.C','1003988392','pipe','andre','alarcon','penagos','epipealarcon@gmail.com','3250662025','3','si');


insert into cliente
values ('T.I','1090444555'),
('C.C','1003789901'),
('C.C','1200456899'),
('T.I','1070360921'),
('T.I','1231455744'),
('T.I','1900343122'),
('C.C','1561100833'),
('C.C','1048594231');

insert rol
values ('10', 'Empleado'),
('11', 'Administrador');

insert persona_has_roles
values ('C.C', '1121334559', '11', '1' ),
('C.C', '1003988392', '10', '1'),
('C.C', '1020308456', '10', '1'),
('C.C','1003988392','11','1');

insert empleado
values ('C.C', '1020308456','180000','olos12','olasotoro'),
('C.C', '1003988392','180000','epipe','d.alarcon');

insert administrador
values ('C.C', '1003988392','Penawawas','A.alarcon'),
('C.C','1121334559','Maribel123','nosequeponerxd');




insert into factura 
values('20','2023-09-12','3000','19%','3.570','C.C','1020308456','T.I','1090444555'),
 ('21','2023-09-12','7300','19%','8.700','C.C','1020308456','C.C','1003789901'),
 ('22','2023-11-21','400','19%','500','C.C','1003988392','C.C','1200456899'),
 ('23','2023-08-30','12000','19%','14.370','C.C','1003988392','T.I','1070360921'),
 ('24','2023-07-14','700','19%','800','C.C','1003988392','T.I','1231455744'),
 ('25','2023-07-10','12000','19%','14.370','C.C','1003988392','C.C','1561100833'),
 ('26','2023-08-06','12000','19%','14.370','C.C','1020308456','T.I','1900343122'),
 ('27','2023-07-10','12000','19%','14.370','C.C','1003988392','C.C','1048594231');

insert into proveedor 
values ( '10806787', 'Norma', 'Colombia, Valle del Cauca,  Calle 15 # 32-234 Acopi / Yumbo'),
('10777543', 'Prisma-Color', 'Calle 12 # 34 - 30, Bogotá, Colombia'),
('15235689', 'Faber-Castell', 'Ak 68 #17a-61, Fontibón, Bogotá, Cundinamarca'),
('10503321', 'Pelikan', 'Cra. 65b #17, Bogotá'),
('123456781', 'Offi-esco', 'CALLE 11 #20-61 B/ La pepita Bogotá'),
('108091034', 'Bic', 'Calle 12 # 34 - 30, Bogotá, Colombia');

insert into producto
values ('147','Cuaderno','3000','30','10806787'),
 ('258','Colores','7500', '8','10806787'),
 ('369','Marcadores','4200', '30','10806787' ),
 ('123','Esferos', '1200','50' ,'108091034'),
 ('456','Esferos-SemiGel', '1800','25' ,'123456781'),
 ('789','Correctores','1500' ,'24', '123456781'),
 ('963','MicroPuntas', '3000','27', '10503321'),
 ('852','Resaltadores','2300' ,'20', '10503321'),
 ('741','Borradores','700','12','10503321'),
 ('987','Tajalapiz','500','35', '15235689'),
 ('654','Colores', '5500','5', '15235689'),
 ('321','Colores','6300','3', '10777543'),
 ('159','Tajalapiz','900', '10','123456781'),
 ('357','Marcadores','3700','10' ,'10503321'),
 ('753','Correctores-Cinta', '3000','5', '123456781'),
 ('951','Confetti','1000', '10','10503321'),
 ('743','Globos','800', '100','10806787'),
 ('965','Velas-cumpleaños','1500','30', '10503321'),
 ('856','Jueguetes de fiestas','5000', '15','108091034');

insert into escolar
values ('147'),
 ('258'),
 ('369'),
 ('123'),
 ('456'),
 ('789'),
 ('963'),
 ('852'),
 ('741'),
 ('987'),
 ('654'),
 ('321'),
 ('159'),
 ('357'),
 ('753');

insert into no_escolar
values ('951'),
 ('743'),
 ('965'),
 ('856');

insert into factura_has_escolar
values ('20','258'), 
 ('21','852'), 
 ('22','357'), 
 ('23','741');

insert factura_has_no_escolar 
values ('24','965'),
 ('25','951'),
 ('26','965'),
 ('27','856');


select nom1_usuario, nom2_usuario, t_doc_usuario,t_doc, desc_tdoc from usuario
inner join tipo_documento
on t_doc=t_doc_usuario;


select Id_producto,nom_producto,Id_proveedor,proveedor_Id_proveedor,nombre_proveedor  from producto
inner join proveedor
on Id_proveedor=proveedor_Id_proveedor;


select persona_id, nomb_rol from persona_has_roles
left join rol
on persona_rol=id_rol;

select user_emp, nom1_usuario, correo_usuario, telefono_usuario from empleado
left join usuario
on id_emp=id_usuario;

select id_usuario, nom1_usuario from usuario
right join administrador
on id_usuario=id_adm;

select nom_producto,Id_producto from producto
right join escolar
on Id_producto=escolar_Id_producto;
