-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 15-Dez-2020 às 00:23
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE IF NOT EXISTS `cliente` (
  `idcliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(150) NOT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`idcliente`, `nome`, `email`) VALUES
(1, 'Ruan Lima ', 'devd8727@gmail.com'),
(2, 'josé', 'josé123@gmail.com'),
(3, 'Luan', 'luangameplay@gmail.com'),
(4, 'Maria', 'mariarocha@gmail.com'),
(5, 'Roger', 'rogermatias@gmail.com'),
(6, 'Luiza', 'luiza159@gmail.com'),
(7, 'João', 'joaonhnh@gmail.com');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentario`
--

DROP TABLE IF EXISTS `comentario`;
CREATE TABLE IF NOT EXISTS `comentario` (
  `idcliente` int(11) NOT NULL AUTO_INCREMENT,
  `produto` varchar(45) NOT NULL,
  `review` varchar(250) NOT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `comentario`
--

INSERT INTO `comentario` (`idcliente`, `produto`, `review`) VALUES
(1, 'Geladeira frost free', 'Muito boa, consome pouca energia e é super espaçosa'),
(2, 'Microondas', 'Muito útil. Coube certinho aqui na prateleira de casa!'),
(3, 'Fogão 4 Bocas', 'Adorei!! Super econômico'),
(4, 'Geladeira 4 portar', 'Muito espaçosa! O ponto negativo é o consumo de energia exagerado.'),
(5, 'Fogão Brastemp', 'Muito bom!'),
(6, 'Microondas Brastemp', 'Adorei!!'),
(7, 'Microondas Brastemp', 'Incrível!!!!');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

DROP TABLE IF EXISTS `produto`;
CREATE TABLE IF NOT EXISTS `produto` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `info` varchar(45) NOT NULL,
  `preco` varchar(45) NOT NULL,
  `img` varchar(45) NOT NULL,
  PRIMARY KEY (`idproduto`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `info`, `preco`, `img`) VALUES
(1, 'Geladeira Frost Free Brastemp', '2500', 'Geladeira1.png');

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `idcliente` FOREIGN KEY (`idcliente`) REFERENCES `comentario` (`idcliente`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
