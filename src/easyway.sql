-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 17. 19:03
-- Kiszolgáló verziója: 10.4.22-MariaDB
-- PHP verzió: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `easyway`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `admin`
--

INSERT INTO `admin` (`id`, `password`, `username`) VALUES
(1, '$2b$10$R7jV67rnbu.n7IGy8OgNEO03StUBkwvZNhVZ4LX.uIprATPV49VSG', 'Admin1'),
(2, '$2b$10$dyGmvH2PvH13kp4gEHWuM.1yUpDTzPXsK06g0aiBf2zJk6C1UbebW', 'Admin2'),
(3, '$2b$10$XmGOqQh7ZRQivy8qPC/HJuK2SQY.bBmoLi4S7uscPoEoOBS9P4ciO', 'Admin3'),
(4, '$2b$10$jJqRqda28LVok8/uvmNlS.4wWRK5XTHXfjQvsHbG8jPCV2ONePx4u', 'Admin1');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `foods`
--

CREATE TABLE `foods` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `calorie` double NOT NULL,
  `protein` double NOT NULL,
  `carbohydrate` double NOT NULL,
  `fat` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `foods`
--

INSERT INTO `foods` (`id`, `name`, `calorie`, `protein`, `carbohydrate`, `fat`) VALUES
(1, 'répa', 50, 50, 50, 50),
(2, 'Uborka', 22, 50, 50, 50),
(3, 'Cékla', 50, 50, 50, 50),
(4, 'Csirkemell', 200, 120, 51, 23),
(5, 'Példa', 33, 20, 51, 27),
(6, 'Steak', 500, 310, 303, 220);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `form`
--

CREATE TABLE `form` (
  `id` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `water_consume` varchar(255) NOT NULL,
  `lifestyle` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `diet_plan` varchar(255) NOT NULL,
  `weight_goal` int(11) NOT NULL,
  `look` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `form`
--

INSERT INTO `form` (`id`, `weight`, `height`, `age`, `water_consume`, `lifestyle`, `gender`, `diet_plan`, `weight_goal`, `look`) VALUES
(1, 70, 180, 19, 'Onetwo', '', 'Male', 'weightGain', 80, 'ectomorph'),
(2, 65, 175, 33, 'lessThanOneLiter', 'normalActivity', 'Female', 'weightLoss', 60, 'endomorph'),
(3, 70, 198, 25, 'lessThanOneLiter', 'fewActivity', 'Male', 'weightGain', 80, 'mesomorph');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `record`
--

CREATE TABLE `record` (
  `id` int(11) NOT NULL,
  `bodyWeight` int(11) NOT NULL,
  `workoutTime` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `record`
--

INSERT INTO `record` (`id`, `bodyWeight`, `workoutTime`, `date`, `userId`) VALUES
(4, 70, 30, '2023-04-16 19:14:26', 4),
(7, 70, 45, '2023-04-16 19:21:41', 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `token`
--

CREATE TABLE `token` (
  `token` varchar(255) NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `name`, `email`, `password`) VALUES
(4, 'Asd1234', 'Példa Béla', 'pelda-bela@gmail.com', '$2b$10$WVYozm7j571mpbAWC31BT.vsYxsHODKGO2aDG4/lp6bS.1xR.432.'),
(5, 'Példa123', 'Ifj. Példa Béla', 'pelda@example.com', '$2b$10$9NgzYj51.iTpRlbItU5RZ.9lI/YDjKLPTRbvsEbur5tl4bL7KPR/G');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_8675cd3761984947c2506f39a25` (`userId`);

--
-- A tábla indexei `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`token`),
  ADD KEY `FK_94f168faad896c0786646fa3d4a` (`userId`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `foods`
--
ALTER TABLE `foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `form`
--
ALTER TABLE `form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `record`
--
ALTER TABLE `record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `record`
--
ALTER TABLE `record`
  ADD CONSTRAINT `FK_8675cd3761984947c2506f39a25` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Megkötések a táblához `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FK_94f168faad896c0786646fa3d4a` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
