CREATE DATABASE  IF NOT EXISTS `beerstore` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `beerstore`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: beerstore
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `factura_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cart_product_idx` (`product_id`),
  KEY `fk_cart_factura_idx` (`factura_id`),
  CONSTRAINT `fk_cart_factura` FOREIGN KEY (`factura_id`) REFERENCES `facturas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturas`
--

DROP TABLE IF EXISTS `facturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `purchase_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_factura_user_idx` (`user_id`),
  KEY `fk_factura_cart_idx` (`cart_id`),
  CONSTRAINT `fk_factura_cart` FOREIGN KEY (`cart_id`) REFERENCES `cart_items` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_factura_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturas`
--

LOCK TABLES `facturas` WRITE;
/*!40000 ALTER TABLE `facturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `facturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` longtext NOT NULL,
  `category_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `origin` varchar(50) NOT NULL,
  `alcohol` int(11) NOT NULL,
  `ibu` int(11) NOT NULL,
  `image_url` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_category_idx` (`category_id`),
  KEY `fk_product_size_idx` (`size_id`),
  CONSTRAINT `fk_product_category` FOREIGN KEY (`category_id`) REFERENCES `products_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_size` FOREIGN KEY (`size_id`) REFERENCES `products_size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size_id`, `origin`, `alcohol`, `ibu`, `image_url`, `price`) VALUES (1,'Weidmann Hefetrüb 4','La Weidmann Hefetrüb es una cerveza de trigo que como toda Hefeweissbier no cuenta con la etapa de filtrado, dando ese aspecto turbio característico de este estilo. ',3,1,'Alemania',15,855,'/images/productos/1592794858610.png',200.00),(2,'Okcidenta 449 APA','Cerveza única de color dorado intenso y espuma blanca persistente. De cuerpo robusto e intensamente lupulada con las mejores variedades de Iúpulo del noroeste de EEUU',1,2,'Argentina',14,4,'/images/productos/1592794864507.png',120.00),(3,'Tart - Raisin And Pecan','Cerveza única de color dorado intenso y espuma blanca persistente. De cuerpo robusto e intensamente lupulada con las mejores variedades de Iúpulo del noroeste de EEUU',1,3,'China',24,26,'/images/productos/1592794870754.png',120.15),(4,'Buffalo - Striploin','Cerveza única de color dorado intenso y espuma blanca persistente. De cuerpo robusto e intensamente lupulada con las mejores variedades de Iúpulo del noroeste de EEUU\r\n4',1,3,'Senegal',14,43,'/images/productos/1592794836882.png',110.94),(5,'Cleaner - Lime Away','Cerveza única de color dorado intenso y espuma blanca persistente. De cuerpo robusto e intensamente lupulada con las mejores variedades de Iúpulo del noroeste de EEUU',3,4,'Honduras',19,69,'/images/productos/1592794879235.png',61.04),(6,'Bag - Regular Kraft 20 Lb','Cerveza única de color dorado intenso y espuma blanca persistente. De cuerpo robusto e intensamente lupulada con las mejores variedades de Iúpulo del noroeste de EEUU',1,5,'Indonesia',35,32,'/images/productos/1592794885416.png',56.45),(7,'Cardamon Ground','Cerveza única de color dorado intenso y espuma blanca persistente. De cuerpo robusto e intensamente lupulada con las mejores variedades de Iúpulo del noroeste de EEUU',2,1,'Poland',8,62,'/images/productos/1592794891874.png',93.12),(8,'Cup - 4oz Translucent','Cerveza única de color dorado intenso y espuma blanca persistente. De cuerpo robusto e intensamente lupulada con las mejores variedades de Iúpulo del noroeste de EEUUF',2,2,'Indonesia',49,54,'/images/productos/1592794897610.png',95.12),(9,'Baking Powder','Cerveza única de color dorado intenso y espuma blanca persistente. De cuerpo robusto e intensamente lupulada con las mejores variedades de Iúpulo del noroeste de EEUU',3,4,'Poland',35,63,'/images/productos/1592794903468.png',56.84),(10,'Soup - Knorr, Classic','Cerveza única de color dorado intenso y espuma blanca persistente. De cuerpo robusto e intensamente lupulada con las mejores variedades de Iúpulo del noroeste de EEUU',3,5,'Sweden',30,99,'/images/productos/1592794909684.png',79.30),(11,'Pepper - Cubanelle','Cerveza única de color dorado intenso y espuma blanca persistente. De cuerpo robusto e intensamente lupulada con las mejores variedades de Iúpulo del noroeste de EEUU',2,1,'Poland',26,93,'/images/productos/1592794915168.png',33.75);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_category`
--

DROP TABLE IF EXISTS `products_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_category`
--

LOCK TABLES `products_category` WRITE;
/*!40000 ALTER TABLE `products_category` DISABLE KEYS */;
INSERT INTO `products_category` (`id`, `name`) VALUES (1,'Industrial'),(2,'Pequeños Productores'),(3,'Artesanal');
/*!40000 ALTER TABLE `products_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_size`
--

DROP TABLE IF EXISTS `products_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_size`
--

LOCK TABLES `products_size` WRITE;
/*!40000 ALTER TABLE `products_size` DISABLE KEYS */;
INSERT INTO `products_size` (`id`, `size`) VALUES (1,'330 ml'),(2,'475 ml'),(3,'500 ml'),(4,'750 ml'),(5,'1000 ml');
/*!40000 ALTER TABLE `products_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provinces`
--

DROP TABLE IF EXISTS `provinces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provinces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provinces`
--

LOCK TABLES `provinces` WRITE;
/*!40000 ALTER TABLE `provinces` DISABLE KEYS */;
INSERT INTO `provinces` (`id`, `name`) VALUES (1,'Bs. As.'),(2,'Catamarca'),(3,'Chaco'),(4,'Chubut'),(5,'Cordoba'),(6,'Corrientes'),(7,'Entre Rios'),(8,'Formosa'),(9,'Jujuy'),(10,'La Pampa'),(11,'La Rioja'),(12,'Mendoza'),(13,'Misiones'),(14,'Neuquen'),(15,'Rio Negro'),(16,'Salta'),(17,'San Juan'),(18,'San Luis'),(19,'Santa Cruz'),(20,'Santa Fe'),(21,'Sgo. del Estero'),(22,'Tierra del Fuego'),(23,'Tucuman');
/*!40000 ALTER TABLE `provinces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `birthdate` date NOT NULL,
  `image_url` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `province_id` int(11) NOT NULL,
  `zip` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_category_idx` (`category_id`),
  KEY `fk_user_provinces_idx` (`province_id`),
  CONSTRAINT `fk_user_category` FOREIGN KEY (`category_id`) REFERENCES `users_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_provinces` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `category_id`, `address`, `birthdate`, `image_url`, `city`, `province_id`, `zip`) VALUES (1,'Mauro','Asselborn','admin@beerstore.com','$2b$10$bzGGIx.2RS4Ro8tg4MuVt..4cowv4pRudzXFVFhdmP5Je0.u986m2',1,'Ricardo Rojas 242','1986-11-29','/images/usuarios/1592796692431.png','Campana',1,2804),(2,'Pepe','TheVerduler','pepe@beerstore.com','$2b$10$YhGdU1B8nljaRtroVLBdy.2QIN4ARtc13v1wa4VDnU9D1UsV5tP6y',2,'Ricardo Rojas 242','1986-11-29','/images/usuarios/1593378885097.jpg','Campana',1,2804),(11,'Segismundo','Embrici','sembrici@gmail.com','$2b$10$dUzd2JNkvlFqkP3Z3f0aMOxmHtthY8Gbke6LbeGwqRnZPYgpEWUQu',1,'av siempreviva 742','2020-06-03','/images/usuarios/1593378385605.png','Pacheco',1,1617);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_category`
--

DROP TABLE IF EXISTS `users_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_category`
--

LOCK TABLES `users_category` WRITE;
/*!40000 ALTER TABLE `users_category` DISABLE KEYS */;
INSERT INTO `users_category` (`id`, `name`) VALUES (1,'Admin'),(2,'User');
/*!40000 ALTER TABLE `users_category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-28 18:57:42
