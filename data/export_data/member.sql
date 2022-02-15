-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 15, 2022 at 02:19 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `argonts`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `memId` int(11) UNSIGNED NOT NULL,
  `memName` varchar(50) NOT NULL,
  `memSign` varchar(100) DEFAULT 'aucun signe particulier',
  `memIcon` varchar(100) DEFAULT 'ava_1.png',
  `memNavg` int(1) NOT NULL DEFAULT '3',
  `memComb` int(1) NOT NULL DEFAULT '3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`memId`, `memName`, `memSign`, `memIcon`, `memNavg`, `memComb`) VALUES
(3, 'Nestor', 'encore vigoureux malgré son âge', 'ava_14.png', 6, 3),
(21, 'Castor', 'un excellent dompteur de chevaux', 'ava_10.png', 3, 5),
(22, 'Pollux', 'maîtrise la technique du pugilat', 'ava_3.png', 4, 6),
(23, 'Euphémos', 'a hérité la faculté de marcher sur les flots', 'ava_11.png', 6, 3),
(24, 'Idmon', 'peut lire le sort dans les entrailles des animaux ', 'ava_14.png', 5, 1),
(27, 'Taulès', 'on dit qu\'il a vaincu un monstre marin', 'ava_5.png', 4, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`memId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `memId` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
