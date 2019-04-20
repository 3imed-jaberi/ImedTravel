
-- ************************************************
-- *  Name : Imed Jaberi                          *
-- *  Class : 2IM3                                *
-- *  Email : imed_jebari@hotmail.fr              *
-- *  Github : https://github.com/3imed-jaberi    *
-- ************************************************


-- Version of server Apache :  2.4.35
-- Version of server SQL :  8.0.12
-- Version of PHP :  7.2.10


--
-- Data Base :  `imed`
--

-- --------------------------------------------------------

--
-- Stucture of the table : `emails`
--

CREATE TABLE `emails` (
  `id` int(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `mail` varchar(120) CHARACTER SET utf8 NOT NULL,
  `user` varchar(120) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(15) CHARACTER SET utf8 NOT NULL,
  `msg` text CHARACTER SET utf8 NOT NULL
);

-- --------------------------------------------------------

--
-- Stucture of the table : `places`
--

CREATE TABLE `places` (
  `id` int(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `name` varchar(120) CHARACTER SET utf8 NOT NULL,
  `description` text CHARACTER SET utf8 NOT NULL,
  `prix` int(11) NOT NULL,
  `path` text NOT NULL
);

-- --------------------------------------------------------

--
-- Stucture of the table : `booking`
--

CREATE TABLE `booking` (
  `id` int(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `cin1` varchar(8) CHARACTER SET utf8 NOT NULL UNIQUE,
  `firstName1` varchar(120) CHARACTER SET utf8 NOT NULL,
  `lastName1` varchar(120) CHARACTER SET utf8 NOT NULL,
  `phone1` varchar(15) CHARACTER SET utf8 NOT NULL,
  `address1` varchar(255) CHARACTER SET utf8 NOT NULL,
  `date_dept` varchar(25) CHARACTER SET utf8 NOT NULL,
  `date_fin` varchar(25) CHARACTER SET utf8 NOT NULL,
  `cin2` varchar(8) CHARACTER SET utf8 NOT NULL,
  `firstName2` varchar(120) CHARACTER SET utf8 NOT NULL,
  `lastName2` varchar(120) CHARACTER SET utf8 NOT NULL,
  `cin3` varchar(8) CHARACTER SET utf8 DEFAULT NULL,
  `firstName3` varchar(120) CHARACTER SET utf8 DEFAULT NULL,
  `lastName3` varchar(120) CHARACTER SET utf8 DEFAULT NULL,
  `cin4` varchar(8) CHARACTER SET utf8 DEFAULT NULL,
  `firstName4` varchar(120) CHARACTER SET utf8 DEFAULT NULL,
  `lastName4` varchar(120) CHARACTER SET utf8 DEFAULT NULL,
  `cin5` varchar(8) CHARACTER SET utf8 DEFAULT NULL,
  `firstName5` varchar(120) CHARACTER SET utf8 DEFAULT NULL,
  `lastName5` varchar(120) CHARACTER SET utf8 DEFAULT NULL,
  `nb_place` int(11) NOT NULL,
  `id_p` int(11) NOT NULL,
  CONSTRAINT `booking_fk_place` FOREIGN KEY (`id_p`) REFERENCES `places` (`id`)
);

-- --------------------------------------------------------

--
-- Stucture of the table : `users`
--

CREATE TABLE `users` (
  `id` int(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `name` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(120) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--
-- Set the defaul admin `users`
--

--INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`) VALUES
--(1, '3imed-jaberi', '3imed.jebari@admin.com', '$2y$10$Zrhbq7H/c3mpz1YvsHAgheeUBXIj6MYzlwgaSc2dzGGqO08v/1bHi');
