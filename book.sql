-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2013 at 03:38 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `shelfari`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE IF NOT EXISTS `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_name` varchar(20) NOT NULL,
  `author` varchar(200) NOT NULL,
  `status` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `book_name` (`book_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=201 ;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `book_name`, `author`, `status`) VALUES
(11, 'anshul', 'mentor', 1),
(14, 'Backbone.js', 'Kevin Bheda', 2),
(17, 'CodeIgniter', 'sfsdf', 2),
(37, 'wrwrw', 'rwrwrw', 1),
(38, 'rw', 'wrwr', 0),
(45, 'let us c', 'yashwant', 0),
(46, 'let us c++', 'yashwanr', 0),
(109, 'the monk', 'chetan bhagat', 0),
(110, 'The Immortals of Mel', 'Amish Tripathi', 0),
(111, 'two states ', 'chetan bhagat', 1),
(112, 'revolution 2020', 'chetan bhagat', 0),
(113, 'three mistakes of my', 'chetan bhagat', 0),
(114, 'Master of Game', 'Sydney Sheldon', 0),
(115, 'Kevin', 'Shah', 1),
(116, 'If tomorrow comes', 'Sydney Sheldon', 0),
(117, 'Naked', 'Sydney Sheldon', 0),
(118, 'connect the dots', 'Rashmi bansal', 0),
(119, 'Zahir', 'Paulo Coelho', 0),
(120, 'Alchemist', 'Paulo Coelho', 0),
(122, 'Rage of Angels', 'Sydney Sheldon', 0),
(123, 'The Sands Of Time', 'Sydney Sheldon', 0),
(124, 'Nothing Lasts Foreve', 'Sydney Sheldon', 0),
(125, 'Morning, Noon and Ni', 'Sydney Sheldon', 0),
(126, 'The Best Laid Plans', 'Sydney Sheldon', 2),
(127, 'The Sky Is Falling', 'Sydney Sheldon', 0),
(128, 'The Other Side of Mi', 'Sydney Sheldon', 0),
(143, 'kushal shukla', 'kushal', 2),
(144, 'ramayana', 'valmiki', 0),
(145, 'hello', 'yoo', 2),
(146, 'nitesh', 'bindass', 1),
(149, 'mm', 'vm', 1),
(150, 'vm', 'mm', 0),
(151, 'vmm', 'mm', 0),
(200, 'sfsfs', 'sfsfa', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
