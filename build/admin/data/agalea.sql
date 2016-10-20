-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3306
-- Tiempo de generación: 14-09-2016 a las 10:46:24
-- Versión del servidor: 5.5.49-cll-lve
-- Versión de PHP: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `agalea`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adminuser`
--

CREATE TABLE IF NOT EXISTS `adminuser` (
  `idAdmin` int(11) NOT NULL,
  `adminName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `adminPassword` char(64) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `adminLastConnection` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- Volcado de datos para la tabla `adminuser`
--

INSERT INTO `adminuser` (`idAdmin`, `adminName`, `adminPassword`, `adminLastConnection`) VALUES
(0, 'admin', '$2y$10$yavwPc4idejZo0c2fV0gFOPX8QdGd1YogRnRWYYEPhBGyIbzvV6B2', '2016-09-08 09:53:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blogtip`
--

CREATE TABLE IF NOT EXISTS `blogtip` (
  `idBlogtip` int(11) NOT NULL AUTO_INCREMENT,
  `blogtipName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `blogtipDate` date NOT NULL,
  `blogtipImage` varchar(245) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `blogtipNote` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`idBlogtip`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `blogtip`
--

INSERT INTO `blogtip` (`idBlogtip`, `blogtipName`, `blogtipDate`, `blogtipImage`, `blogtipNote`) VALUES
(4, 'tip number three', '2016-08-15', 'http://localhost/www/Agalea/build/admin/src/images/document/20160815113549IEM4PY.jpg', '<p>&nbsp;</p>\r\n<div>\r\n<p>Lorem Ipsum&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>\r\n<p>&nbsp;</p>\r\n<p>Lorem Ipsum&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>\r\n<p style="text-align: center;"><img src="http://localhost/www/Agalea/build/admin/src/images/document/20160815113549IEM4PY.jpg" alt="" width="50%" height="NaN" />&nbsp;</p>\r\n<p>Lorem Ipsum&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>\r\n<p>&nbsp;</p>\r\n<p>Lorem Ipsum&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n</div>'),
(5, 'tip # 4', '2016-08-15', 'http://localhost/www/Agalea/build/admin/src/images/document/20160815113549KIFRKX.jpg', '<p style="text-align: center;"><a href="http://localhost/www/Agalea/build/admin/src/images/document/20160815113549KIFRKX.jpg">http://localhost/www/Agalea/build/admin/src/images/document/20160815113549KIFRKX.jpg</a></p>\r\n<p style="text-align: center;"><img src="http://localhost/www/Agalea/build/admin/src/images/document/20160815113549KIFRKX.jpg" alt="" width="80%" height="NaN" /></p>\r\n<p style="text-align: center;">&nbsp;</p>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `idCategory` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `categoryUrl` varchar(450) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=38 ;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`idCategory`, `categoryName`, `categoryUrl`) VALUES
(34, 'Hombres', 'hombres'),
(35, 'Niños', 'ninos'),
(36, 'Mujeres', 'mujeres');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `homebanner`
--

CREATE TABLE IF NOT EXISTS `homebanner` (
  `idHomeBanner` int(11) NOT NULL AUTO_INCREMENT,
  `bannerName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `bannerUrl` varchar(145) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `bannerImageName` varchar(245) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`idHomeBanner`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Volcado de datos para la tabla `homebanner`
--

INSERT INTO `homebanner` (`idHomeBanner`, `bannerName`, `bannerUrl`, `bannerImageName`) VALUES
(14, 'home2', 'http://paratodohayfans.com/web/agalea/#/productos/ninos', '20160823153823S089QV.BannerSlider1366x500-Home2'),
(15, 'home2', 'http://paratodohayfans.com/web/agalea/#/productos/mujeres', '20160823153845OIQTD6.BannerSlider1366x500-Home');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imageslibrary`
--

CREATE TABLE IF NOT EXISTS `imageslibrary` (
  `idImage` int(11) NOT NULL AUTO_INCREMENT,
  `nameImage` varchar(245) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`idImage`)
) ENGINE=InnoDB  DEFAULT CHARSET=ascii AUTO_INCREMENT=17 ;

--
-- Volcado de datos para la tabla `imageslibrary`
--

INSERT INTO `imageslibrary` (`idImage`, `nameImage`) VALUES
(13, '20160815113548C2KIXP.jpg'),
(14, '20160815113549Z31541.jpg'),
(15, '20160815113549IEM4PY.jpg'),
(16, '20160815113549KIFRKX.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `idProduct` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `productDescription` varchar(1024) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `productImage` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `productUrl` varchar(248) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `idSubcategory` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL,
  PRIMARY KEY (`idProduct`,`idSubcategory`,`idCategory`),
  KEY `fk_product_subcategory1_idx` (`idSubcategory`,`idCategory`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`idProduct`, `productName`, `productDescription`, `productImage`, `productUrl`, `idSubcategory`, `idCategory`) VALUES
(4, 'product 4', 'productDescription	\r\n', '201608151103297VV027.jpg', 'product-4', 30, 34),
(5, 'product 5', 'productDescription	\r\n', '20160815094730HAEG1A.jpg', 'product-5', 30, 34),
(6, 'product 6', 'productDescription	\r\n', '20160815094736VPXYBD.jpg', 'product-6', 33, 35),
(7, 'product 7', 'productDescription	\r\n', '20160815094742YW963E.jpg', 'product-7', 33, 35),
(8, 'Aretes', '$600\r\n', '20160823163658NFIJPZ.jpg', 'aretes', 36, 36),
(14, 'collar', 'Collares', '20160823154400UEBX65.jpg', 'collar', 33, 35),
(15, 'arete', 'aretes ', '20160823154442C7ARJS.jpg', 'arete', 30, 34),
(18, 'pulsera', '$360 ', '20160823154523VFKUOI.jpg', 'pulsera', 36, 36);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategory`
--

CREATE TABLE IF NOT EXISTS `subcategory` (
  `idSubcategory` int(11) NOT NULL AUTO_INCREMENT,
  `subcategoryName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `subcategoryImage` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `subcategoryDescription` varchar(1045) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `subcategoryUrl` varchar(248) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `idCategory` int(11) NOT NULL,
  PRIMARY KEY (`idSubcategory`,`idCategory`),
  KEY `fk_subcategory_category_idx` (`idCategory`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=41 ;

--
-- Volcado de datos para la tabla `subcategory`
--

INSERT INTO `subcategory` (`idSubcategory`, `subcategoryName`, `subcategoryImage`, `subcategoryDescription`, `subcategoryUrl`, `idCategory`) VALUES
(28, 'Relojes', '20160812181640KLS57V.jpg', 'Relojes', 'relojes', 36),
(29, 'Relojes', '20160812181644KGIM8R.jpg', 'Relojes', 'relojes', 35),
(30, 'Relojes', '20160812181649OG1S29.jpg', 'Relojes', 'relojes', 34),
(32, 'Anillos', '20160812181706ZLPTL4.jpg', 'Anillos', 'anillos', 36),
(33, 'Anillos', '20160812181722BGEG51.jpg', 'Anillos', 'anillos', 35),
(34, 'Anillos', '20160812181726B7VVTH.jpg', 'Anillos', 'anillos', 34),
(36, 'Collares', '20160823164315MJITOT.jpg', 'Bonitos Collares', 'collares', 36);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_product_subcategory1` FOREIGN KEY (`idSubcategory`, `idCategory`) REFERENCES `subcategory` (`idSubcategory`, `idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `fk_subcategory_category` FOREIGN KEY (`idCategory`) REFERENCES `category` (`idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
