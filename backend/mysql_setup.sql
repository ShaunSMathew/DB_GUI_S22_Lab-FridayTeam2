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
    `username` VARCHAR(45) NOT NULL,
    `street_address` VARCHAR(100),
    `city` VARCHAR(50),
    `state` VARCHAR(50),
    `zip` INTEGER,
    `ratings_sum` FLOAT,
    `num_of_ratings` INTEGER,
    `phone_num` VARCHAR(15),
    `profile_pic` VARCHAR(500),
    PRIMARY KEY (`username`),
    FOREIGN KEY (username) REFERENCES `db`.`user`(username),
    UNIQUE INDEX `id_UNIQUE` (`username` ASC) VISIBLE
);

-- insert sample entry
INSERT INTO `db`.`farmer` (`username`, `street_address`, `phone_num`, `profile_pic`) VALUES ('testUser1',  '31240 Dyer Street Dallas TX 75275', '8178633074','https://i.pinimg.com/564x/67/33/63/67336393990790885d9c7c4de17b822b.jpg');

-- create product table in db
CREATE TABLE `db`.`product` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200),
    `price` FLOAT,
    `amount` INT,
    `ratings_sum` FLOAT,
    `num_of_ratings` INTEGER,
    `likes` INT,
    `dislikes` INT,
    `farmer_username` VARCHAR(45),
    PRIMARY KEY (`id`),
    FOREIGN KEY (farmer_username) REFERENCES farmer(username),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

-- create rest_owner (Restaurant Owner) table in test
CREATE TABLE `db`.`rest_owner` (
    `username` VARCHAR(45) NOT NULL,
    `address` VARCHAR(100),
    `ratings_sum` FLOAT,
    `num_of_ratings` INTEGER,
    `phone_num` VARCHAR(15),
    `profile_pic` VARCHAR(500),
    PRIMARY KEY (`username`),
    FOREIGN KEY (username) REFERENCES `db`.`user`(username),
    UNIQUE INDEX `id_UNIQUE` (`username` ASC) VISIBLE
);

-- create order table in test
CREATE TABLE `db`.`order` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `farmer_username` VARCHAR(45) NOT NULL,
    `rest_owner_username` VARCHAR(45) NOT NULL,
    `product_id` INTEGER,
    `tip` FLOAT,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
    INDEX (rest_owner_username),
    INDEX (`farmer_username`),
    FOREIGN KEY(rest_owner_username) REFERENCES rest_owner(username),
    FOREIGN KEY(farmer_username) REFERENCES farmer(username),
    FOREIGN KEY(product_id) REFERENCES product(id)
);

CREATE TABLE `db`.`review` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(500),
    `farmer_username` VARCHAR(45),
    FOREIGN KEY (farmer_username) REFERENCES farmer(username),
    PRIMARY KEY (`id`)
);

