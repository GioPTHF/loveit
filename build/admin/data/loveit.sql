-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-10-2016 a las 19:51:06
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `loveit`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adminuser`
--

CREATE TABLE `adminuser` (
  `idAdmin` int(11) NOT NULL,
  `adminName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `adminPassword` char(64) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `adminLastConnection` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- Volcado de datos para la tabla `adminuser`
--

INSERT INTO `adminuser` (`idAdmin`, `adminName`, `adminPassword`, `adminLastConnection`) VALUES
(0, 'admin', '$2y$10$yavwPc4idejZo0c2fV0gFOPX8QdGd1YogRnRWYYEPhBGyIbzvV6B2', '2016-10-20 11:28:44'),
(0, 'admin', 'admin', '2016-10-20 11:28:44'),
(1, 'admin', 'admin', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amenidades`
--

CREATE TABLE `amenidades` (
  `idAmenidades` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `amenidades`
--

INSERT INTO `amenidades` (`idAmenidades`, `Nombre`, `Descripcion`) VALUES
(9, 'fdsdds', 'dsfdfd'),
(11, 'fgfdf', 'fdfd'),
(16, 'Prueba', 'AASs'),
(17, 'Prueba corregida de amenidad 2', 'Descripción para la prueba de amenidad 2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `espacios`
--

CREATE TABLE `espacios` (
  `idEspacios` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `espacios`
--

INSERT INTO `espacios` (`idEspacios`, `Nombre`, `Descripcion`) VALUES
(2, 'Espacio 2 ', 'Prueba de otro espacio'),
(3, 'Espacio', 'Des'),
(4, 'Espacio nuevo', 'DES');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `idHabitaciones` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(2000) DEFAULT NULL,
  `tipoHabitacion_idtipoHabitacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`idHabitaciones`, `Nombre`, `Descripcion`, `tipoHabitacion_idtipoHabitacion`) VALUES
(40, 'Prueba 12', 'DES', 1),
(42, 'Habitacion', 'Des', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenesamenidades`
--

CREATE TABLE `imagenesamenidades` (
  `idimagenesAmenidades` int(11) NOT NULL,
  `nombreImagen` varchar(45) DEFAULT NULL,
  `Amenidades_idAmenidades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `imagenesamenidades`
--

INSERT INTO `imagenesamenidades` (`idimagenesAmenidades`, `nombreImagen`, `Amenidades_idAmenidades`) VALUES
(15, '2016101216592180FWIB.jpg', 16),
(17, '2016101917003948MJIK.jpg', 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenesespacios`
--

CREATE TABLE `imagenesespacios` (
  `idimagenesEspacios` int(11) NOT NULL,
  `nombreImagen` varchar(45) DEFAULT NULL,
  `Espacios_idEspacios` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `imagenesespacios`
--

INSERT INTO `imagenesespacios` (`idimagenesEspacios`, `nombreImagen`, `Espacios_idEspacios`) VALUES
(2, '201610191942379Q2WWL.jpg', 3),
(5, '20161019204625ANS4L3.png', 3),
(6, '20161019204713JLPEPQ.jpg', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imageneshabitacion`
--

CREATE TABLE `imageneshabitacion` (
  `idimagenesHabitacion` int(11) NOT NULL,
  `nombreImagen` varchar(100) DEFAULT NULL,
  `Habitaciones_idHabitaciones` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `imageneshabitacion`
--

INSERT INTO `imageneshabitacion` (`idimagenesHabitacion`, `nombreImagen`, `Habitaciones_idHabitaciones`) VALUES
(84, '20161019170943ADVCCI.jpg', 42),
(85, '20161019171257593N11.jpg', 40);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipohabitacion`
--

CREATE TABLE `tipohabitacion` (
  `idtipoHabitacion` int(11) NOT NULL,
  `NombreHabitacion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipohabitacion`
--

INSERT INTO `tipohabitacion` (`idtipoHabitacion`, `NombreHabitacion`) VALUES
(1, 'Habitación de lujo king'),
(2, 'JR Suites'),
(3, 'Signature suites'),
(4, 'Master suites'),
(5, 'Habitación de lujo doble');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `amenidades`
--
ALTER TABLE `amenidades`
  ADD PRIMARY KEY (`idAmenidades`);

--
-- Indices de la tabla `espacios`
--
ALTER TABLE `espacios`
  ADD PRIMARY KEY (`idEspacios`);

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`idHabitaciones`),
  ADD KEY `fk_Habitaciones_tipoHabitacion_idx` (`tipoHabitacion_idtipoHabitacion`);

--
-- Indices de la tabla `imagenesamenidades`
--
ALTER TABLE `imagenesamenidades`
  ADD PRIMARY KEY (`idimagenesAmenidades`),
  ADD KEY `fk_imagenesAmenidades_Amenidades1_idx` (`Amenidades_idAmenidades`);

--
-- Indices de la tabla `imagenesespacios`
--
ALTER TABLE `imagenesespacios`
  ADD PRIMARY KEY (`idimagenesEspacios`),
  ADD KEY `fk_imagenesEspacios_Espacios1_idx` (`Espacios_idEspacios`);

--
-- Indices de la tabla `imageneshabitacion`
--
ALTER TABLE `imageneshabitacion`
  ADD PRIMARY KEY (`idimagenesHabitacion`),
  ADD KEY `fk_imagenesHabitacion_Habitaciones1_idx` (`Habitaciones_idHabitaciones`);

--
-- Indices de la tabla `tipohabitacion`
--
ALTER TABLE `tipohabitacion`
  ADD PRIMARY KEY (`idtipoHabitacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `amenidades`
--
ALTER TABLE `amenidades`
  MODIFY `idAmenidades` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `espacios`
--
ALTER TABLE `espacios`
  MODIFY `idEspacios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  MODIFY `idHabitaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT de la tabla `imagenesamenidades`
--
ALTER TABLE `imagenesamenidades`
  MODIFY `idimagenesAmenidades` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `imagenesespacios`
--
ALTER TABLE `imagenesespacios`
  MODIFY `idimagenesEspacios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `imageneshabitacion`
--
ALTER TABLE `imageneshabitacion`
  MODIFY `idimagenesHabitacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
--
-- AUTO_INCREMENT de la tabla `tipohabitacion`
--
ALTER TABLE `tipohabitacion`
  MODIFY `idtipoHabitacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD CONSTRAINT `fk_Habitaciones_tipoHabitacion` FOREIGN KEY (`tipoHabitacion_idtipoHabitacion`) REFERENCES `tipohabitacion` (`idtipoHabitacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imagenesamenidades`
--
ALTER TABLE `imagenesamenidades`
  ADD CONSTRAINT `fk_imagenesAmenidades_Amenidades1` FOREIGN KEY (`Amenidades_idAmenidades`) REFERENCES `amenidades` (`idAmenidades`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imagenesespacios`
--
ALTER TABLE `imagenesespacios`
  ADD CONSTRAINT `fk_imagenesEspacios_Espacios1` FOREIGN KEY (`Espacios_idEspacios`) REFERENCES `espacios` (`idEspacios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imageneshabitacion`
--
ALTER TABLE `imageneshabitacion`
  ADD CONSTRAINT `fk_imagenesHabitacion_Habitaciones1` FOREIGN KEY (`Habitaciones_idHabitaciones`) REFERENCES `habitaciones` (`idHabitaciones`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
