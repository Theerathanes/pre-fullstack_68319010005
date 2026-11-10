-- CreateTable
CREATE TABLE `Subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(67) NOT NULL,
    `objective` VARCHAR(50) NOT NULL,
    `discription` VARCHAR(100) NOT NULL,
    `teacher` VARCHAR(20) NOT NULL,
    `credit` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
