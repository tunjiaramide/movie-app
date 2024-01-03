CREATE DATABASE `movies`;

CREATE TABLE `movies`.`movie_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

