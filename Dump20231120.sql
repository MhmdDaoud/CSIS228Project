-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: musicdiscovery
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `artist_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `bio` text,
  `genre` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `social_media_links` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`artist_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (3,'name1','123123','genre1','country1','https://website13.com',''),(4,'name2','text2','genre2','country2','https://website.com',''),(5,'name3','text3','genre3','country3','https://website.com',''),(6,'name4','text4','genre4','country4','https://website.com',''),(7,'name5','text5','genre5','country5','https://website.com','');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `friendship`
--

DROP TABLE IF EXISTS `friendship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `friendship` (
  `friendship_id` int NOT NULL AUTO_INCREMENT,
  `user_id1` int NOT NULL,
  `user_id2` int NOT NULL,
  `status` enum('Pending','Accepted','Rejected') DEFAULT 'Pending',
  `request_date` datetime NOT NULL,
  `response_date` datetime DEFAULT NULL,
  PRIMARY KEY (`friendship_id`),
  KEY `user_id1` (`user_id1`),
  KEY `user_id2` (`user_id2`),
  CONSTRAINT `friendship_ibfk_1` FOREIGN KEY (`user_id1`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `friendship_ibfk_2` FOREIGN KEY (`user_id2`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friendship`
--

LOCK TABLES `friendship` WRITE;
/*!40000 ALTER TABLE `friendship` DISABLE KEYS */;
INSERT INTO `friendship` VALUES (3,11,4,'Accepted','2023-11-20 21:48:26','2023-11-20 21:48:46'),(4,7,4,'Rejected','2023-11-20 21:49:00','2023-11-20 21:49:18');
/*!40000 ALTER TABLE `friendship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlists`
--

DROP TABLE IF EXISTS `playlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlists` (
  `playlist_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `creation_date` datetime NOT NULL,
  `song_ids` text,
  PRIMARY KEY (`playlist_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `playlists_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlists`
--

LOCK TABLES `playlists` WRITE;
/*!40000 ALTER TABLE `playlists` DISABLE KEYS */;
INSERT INTO `playlists` VALUES (2,5,'playlist1','123','2023-11-20 21:42:13','5, 7'),(3,11,'playlist2','123123','2023-11-20 21:42:33','4, 6, 7'),(4,11,'playlist4','123123','2023-11-20 21:42:49','4, 5, 6, 7');
/*!40000 ALTER TABLE `playlists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratingsandreviews`
--

DROP TABLE IF EXISTS `ratingsandreviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratingsandreviews` (
  `rating_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `song_id` int NOT NULL,
  `rating` int DEFAULT NULL,
  `review_text` text,
  `timestamp` datetime NOT NULL,
  PRIMARY KEY (`rating_id`),
  KEY `user_id` (`user_id`),
  KEY `song_id` (`song_id`),
  CONSTRAINT `ratingsandreviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ratingsandreviews_ibfk_2` FOREIGN KEY (`song_id`) REFERENCES `songs` (`song_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratingsandreviews`
--

LOCK TABLES `ratingsandreviews` WRITE;
/*!40000 ALTER TABLE `ratingsandreviews` DISABLE KEYS */;
INSERT INTO `ratingsandreviews` VALUES (2,11,4,5,'text1','2023-11-20 21:43:43'),(3,4,7,5,'text1','2023-11-20 21:44:06'),(5,4,7,4,'text12','2023-11-20 21:44:16'),(6,4,6,4,'text1','2023-11-20 21:44:55');
/*!40000 ALTER TABLE `ratingsandreviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `song_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `artist_id` int NOT NULL,
  `album` varchar(255) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`song_id`),
  KEY `artist_id` (`artist_id`),
  CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`artist_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (4,'title1',3,'album1','2023-11-20',120,'genre1'),(5,'title2',3,'album2','2023-11-20',120,'genre2'),(6,'title3',4,'album3','2023-11-20',120,'genre3'),(7,'title5',4,'album5','2023-11-20',120,'genre5'),(11,'title4',7,'album4','2023-11-20',120,'genre4');
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userpreferences`
--

DROP TABLE IF EXISTS `userpreferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userpreferences` (
  `preference_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `favorite_genres` text,
  `favorite_artists` text,
  `playlist_ids` text,
  PRIMARY KEY (`preference_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `userpreferences_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userpreferences`
--

LOCK TABLES `userpreferences` WRITE;
/*!40000 ALTER TABLE `userpreferences` DISABLE KEYS */;
INSERT INTO `userpreferences` VALUES (2,11,'genre1, genre2, genre3','arist1','1'),(3,4,'genre1, genre2','arist1, artist2','4, 6');
/*!40000 ALTER TABLE `userpreferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `registration_date` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'user1','email1@gmail.com','123D@#ds','2023-11-20 00:00:00'),(5,'user2','email2@gmail.com','123123D@#ds','2023-11-20 00:00:00'),(6,'user3','email3@gmail.com','112343D@#ds','2023-11-20 00:00:00'),(7,'user4','email4@gmail.com','111asdfk12343D@#ds','2023-11-20 00:00:00'),(8,'user5','email5@gmail.com','1asAd934#ds','2023-11-20 00:00:00'),(9,'user6','email6@gmail.com','1aCS@12sAd934#ds','2023-11-20 00:00:00'),(10,'user7','email7@gmail.com','1239Ac@asds','2023-11-20 00:00:00'),(11,'user8','email8@gmail.com','1239knsadcjkAc@asds','2023-11-20 00:00:00'),(12,'user9','email9@gmail.com','nsvd032W#asds','2023-11-20 00:00:00'),(13,'user10','email10@gmail.com','nsv123123d032W#asds','2023-11-20 00:00:00'),(14,'user11','email11@gmail.com','nsv123123d032W#asds','2023-11-20 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-20 23:51:55
