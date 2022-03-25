-- create database db
CREATE DATABASE test;
SET FOREIGN_KEY_CHECKS = 0;
drop table if exists test_table;
drop table if exists farmer;
drop table if exists product;
drop table if exists rest_owner;
drop table if exists `order`;
drop table if exists review;
SET FOREIGN_KEY_CHECKS = 1;
-- use newly create database
USE test;

-- create table in db
CREATE TABLE `test`.`test_table` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `value` VARCHAR(45), 
    PRIMARY KEY (`id`), 
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

-- insert sample entry
INSERT INTO `test`.`test_table` (`value`) VALUES ('Test Value');
DROP Table `farmer`;

-- create farmer table in test
CREATE TABLE `test`.`farmer` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `username` VARCHAR(45), 
   -- `password` SHA1(string),
    `address` VARCHAR(100),
    `avg_rating` FLOAT,
    `phone_num` VARCHAR(11), 
    `profile_pic` VARCHAR(500),
    PRIMARY KEY (`id`), 
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

-- insert sample entry
INSERT INTO `test`.`farmer` (`username`, `address`, `avg_rating`, `phone_num`, `profile_pic`) VALUES ('testUser',  '31240 Dyer Street Dallas TX 75275',5.0,'8178633074','https://i.pinimg.com/564x/67/33/63/67336393990790885d9c7c4de17b822b.jpg');
-- create product table in test
CREATE TABLE `test`.`product` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `name` VARCHAR(200), 
    `price` FLOAT,
    `amount` INT,
    `avg_rating` FLOAT,
    `likes` INT,
    `dislikes` INT,
    `date_pub` DATETIME,
    `picture` VARCHAR(500),
    `description` VARCHAR(270),
    `farmer_id` INT NOT NULL,
    INDEX (farmer_id),
    PRIMARY KEY (`id`), 
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
    FOREIGN KEY (farmer_id) REFERENCES farmer(id)
);
-- create rest_owner (Restaurant Owner) table in test
DROP Table `rest_owner`;
CREATE TABLE `test`.`rest_owner` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `username` VARCHAR(70), 
    `address` VARCHAR(100),
    `avg_rating` FLOAT,
    `phone_num` VARCHAR(10),
    `profile_pic` VARCHAR(500),
    PRIMARY KEY (`id`), 
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

-- create order table in test
CREATE TABLE `test`.`order` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `farmer_id` INT NOT NULL,
    `rest_owner_id` INT NOT NULL,
    `tip` FLOAT,
    `delivery_time` DATETIME,
    PRIMARY KEY (`id`), 
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
    INDEX (rest_owner_id),
    INDEX (`farmer_id`),
    FOREIGN KEY(rest_owner_id) REFERENCES rest_owner(id),
    FOREIGN KEY(farmer_id) REFERENCES farmer(id)
);
CREATE TABLE `test`.`review`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `farmer_id` INT NOT NULL,
    `rest_owner_id` INT NOT NULL,
    `review` FLOAT,
    `text` VARCHAR(270),
    PRIMARY KEY (id),
    INDEX(farmer_id),
    INDEX(rest_owner_id),
    FOREIGN KEY (rest_owner_id) REFERENCES rest_owner(id),
    FOREIGN KEY (farmer_id) REFERENCES farmer(id)
);
INSERT INTO `test`.`farmer` (`username`, `address`, `avg_rating`, `phone_num`, `profile_pic`) VALUES ('testUser',  '31240 Dyer Street Dallas TX 75275',5.0,'8178633074','https://i.pinimg.com/564x/67/33/63/67336393990790885d9c7c4de17b822b.jpg');
