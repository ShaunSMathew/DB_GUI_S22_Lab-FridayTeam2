USE db;

-- create user table in db
CREATE TABLE `db`.`user` (
    `username` VARCHAR(45) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`username`)
);

-- insert sample entry
INSERT INTO `db`.`user` (`username`, `password`) VALUES ('testUser1',  'password');
INSERT INTO `db`.`user` (`username`, `password`) VALUES ('testUser2',  'password');

-- create farmer table in db
CREATE TABLE `db`.`farmer` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `username` VARCHAR(45),
    `address` VARCHAR(100),
    `avg_rating` FLOAT,
    `phone_num` VARCHAR(11), 
    `profile_pic` VARCHAR(500),
    PRIMARY KEY (`id`),
    FOREIGN KEY (username) REFERENCES `db`.`user`(username),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

-- insert sample entry
INSERT INTO `db`.`farmer` (`username`, `address`, `avg_rating`, `phone_num`, `profile_pic`) VALUES ('testUser1',  '31240 Dyer Street Dallas TX 75275',5.0,'8178633074','https://i.pinimg.com/564x/67/33/63/67336393990790885d9c7c4de17b822b.jpg');

-- create product table in db
CREATE TABLE `db`.`product` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `name` VARCHAR(200), 
    `price` FLOAT,
    `amount` INT,
    `avg_rating` FLOAT,
    `likes` INT,
    `dislikes` INT,
    PRIMARY KEY (`id`), 
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

-- create rest_owner (Restaurant Owner) table in test
CREATE TABLE `db`.`rest_owner` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `username` VARCHAR(70), 
    `address` VARCHAR(100),
    `avg_rating` FLOAT,
    `phone_num` VARCHAR(10),
    `profile_pic` VARCHAR(500),
    PRIMARY KEY (`id`),
    FOREIGN KEY (username) REFERENCES `db`.`user`(username),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

-- create order table in test
CREATE TABLE `db`.`order` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `farmer_id` INT NOT NULL,
    `rest_owner_id` INT NOT NULL,
    `tip` FLOAT,
    PRIMARY KEY (`id`), 
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
    INDEX (rest_owner_id),
    INDEX (`farmer_id`),
    FOREIGN KEY(rest_owner_id) REFERENCES rest_owner(id),
    FOREIGN KEY(farmer_id) REFERENCES farmer(id)
);
INSERT INTO `db`.`farmer` (`username`, `address`, `avg_rating`, `phone_num`, `profile_pic`) VALUES ('testUser2',  '31240 Dyer Street Dallas TX 75275',5.0,'8178633074','https://i.pinimg.com/564x/67/33/63/67336393990790885d9c7c4de17b822b.jpg');
