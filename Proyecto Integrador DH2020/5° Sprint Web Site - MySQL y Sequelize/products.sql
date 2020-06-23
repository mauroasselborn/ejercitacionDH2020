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
-- Table structure for table `products`
--
USE beerstore;
DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `name` varchar
(50) NOT NULL,
  `description` longtext NOT NULL,
  `category_id` tinyint
(4) NOT NULL,
  `size` int
(10) unsigned NOT NULL,
  `origin` varchar
(50) NOT NULL,
  `alcohol` int
(11) NOT NULL,
  `ibu` int
(11) NOT NULL,
  `image_url` varchar
(100) DEFAULT NULL,
  `price` decimal
(10,2) DEFAULT NULL,
  PRIMARY KEY
(`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`
id`,
`name
`, `description`, `category_id`, `size`, `origin`, `alcohol`, `ibu`, `image_url`, `price`) VALUES
(1,'Weidmann Hefetrüb','La Weidmann Hefetrüb es una cerveza de trigo que como toda Hefeweissbier no cuenta con la etapa de filtrado, dando ese aspecto turbio característico de este estilo. ',5,475,'Alemania',15,855,'/images/productos/1592610842099.png',200.00),
(2,'Okcidenta 449 APA','Cerveza única de color dorado intenso y espuma blanca persistente. De cuerpo robusto e intensamente lupulada con las mejores variedades de Iúpulo del noroeste de EEUU',1,500,'Argentina',14,4,'/images/productos/1592611017808.png',120.00),
(3,'Tart - Raisin And Pecan','Oncobiologics, Inc.',5,632,'China',24,26,'/images/productos/1592612907975.png',702.15),
(4,'Buffalo - Striploin','KB Home',5,14,'Senegal',14,43,'/images/productos/1592612913425.png',292.94),
(5,'Cleaner - Lime Away','Fitbit, Inc.',5,869,'Honduras',19,69,'/images/productos/1592612917983.png',331.04),
(6,'Bag - Regular Kraft 20 Lb','BGC Partners, Inc.',1,44,'Indonesia',35,32,'/images/productos/1592612924384.png',56.45),
(7,'Cardamon Ground','Power Integrations, Inc.',2,997,'Poland',8,62,'/images/productos/1592612930204.png',459.12),
(8,'Cup - 4oz Translucent','SPDR Dorsey Wright Fixed Income Allocation ETF',2,319,'Indonesia',49,54,'/images/productos/1592612934930.png',458.12),
(9,'Baking Powder','Legg Mason BW Global Income Opportunities Fund Inc.',5,4,'Poland',35,63,'/images/productos/1592612940288.png',986.84),
(10,'Soup - Knorr, Classic Can. Chili','New Senior Investment Group Inc.',3,109,'Sweden',30,99,'/images/productos/1592612945968.png',932.30),
(11,'Pepper - Cubanelle','Public Storage',4,607,'Poland',26,93,'/images/productos/1592612951129.png',33.75),
(12,'Pears - Bosc','Nuveen Preferred and Income Term Fund',5,680,'Indonesia',11,59,'/images/productos/1592612956696.png',566.06),
(13,'Shrimp - Black Tiger 6 - 8','First Trust Developed Markets ex-US Small Cap AlphaDEX Fund',4,334,'United Kingdom',46,63,'/images/productos/1592612962045.png',819.98),
(14,'Container - Foam Dixie 12 Oz','Ashford Hospitality Trust Inc',3,511,'China',17,12,'/images/productos/1592612968088.png',537.05),
(15,'Chocolate Bar - Coffee Crisp','Vical Incorporated',2,279,'Philippines',12,96,'/images/productos/1592612973948.png',908.93),
(16,'Bouq All Italian - Primerba','Morgan Stanley Emerging Markets Debt Fund, Inc.',5,599,'China',6,51,'/images/productos/1592612979232.png',159.78),
(17,'Icecream Cone - Areo Chocolate','EnerNOC, Inc.',1,282,'Portugal',4,8,'/images/productos/1592612985309.png',456.32),
(18,'Pork Casing','Peoples Bancorp of North Carolina, Inc.',5,39,'Indonesia',17,29,'/images/productos/1592612992094.png',807.12),
(19,'Pork - European Side Bacon','Dominion Diamond Corporation',3,356,'Greece',12,37,'/images/productos/1592612999750.png',196.27),
(20,'Peppercorns - Pink','Handy & Harman Ltd.',5,553,'Burkina Faso',7,18,'/images/productos/1592613008496.png',723.71),
(21,'Pepper - Orange','Pengrowth Energy Corporation',5,812,'Poland',28,40,'/images/productos/1592613014358.png',792.00),
(22,'Ecolab - Hobart Upr Prewash Arm','Nu Skin Enterprises, Inc.',1,36,'Luxembourg',10,84,'/images/productos/1592613023760.png',578.49);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-19 21:33:50
