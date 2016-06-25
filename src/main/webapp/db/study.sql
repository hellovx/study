/*
SQLyog Professional v10.42 
MySQL - 5.7.10-log : Database - study
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`study` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `study`;

/*Table structure for table `tb_department` */

DROP TABLE IF EXISTS `tb_department`;

CREATE TABLE `tb_department` (
  `id` VARCHAR(50) CHARACTER SET gbk NOT NULL,
  `name` VARCHAR(50) CHARACTER SET gbk DEFAULT NULL,
  `create_time` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `tb_department` */

/*Table structure for table `tb_resource` */

DROP TABLE IF EXISTS `tb_resource`;

CREATE TABLE `tb_resource` (
  `id` VARCHAR(50) NOT NULL,
  `parent_id` VARCHAR(50) DEFAULT NULL,
  `res_name` VARCHAR(50) DEFAULT NULL,
  `res_url` VARCHAR(100) DEFAULT NULL,
  `img` VARCHAR(100) DEFAULT NULL,
  `remark` VARCHAR(500) DEFAULT NULL,
  `orderId` INT(11) DEFAULT '0',
  `create_time` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `tb_resource` */

/*Table structure for table `tb_role` */

DROP TABLE IF EXISTS `tb_role`;

CREATE TABLE `tb_role` (
  `id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(50) NOT NULL COMMENT '角色名称',
  `create_time` DATETIME DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `tb_role` */

/*Table structure for table `tb_role_resouce` */

DROP TABLE IF EXISTS `tb_role_resouce`;

CREATE TABLE `tb_role_resouce` (
  `id` VARCHAR(50) NOT NULL,
  `role_id` VARCHAR(50) NOT NULL,
  `res_id` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `tb_role_resouce` */

/*Table structure for table `tb_user` */

DROP TABLE IF EXISTS `tb_user`;

CREATE TABLE `tb_user` (
  `id` VARCHAR(50) NOT NULL,
  `login_name` VARCHAR(50) DEFAULT NULL COMMENT '登录名',
  `name` VARCHAR(50) DEFAULT NULL COMMENT '名称',
  `password` VARCHAR(30) DEFAULT NULL COMMENT '密码',
  `mobile` VARCHAR(30) DEFAULT NULL COMMENT '手机号',
  `create_time` DATETIME DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT='state:0未激活 1激活 2停用';

/*Data for the table `tb_user` */

/*Table structure for table `tb_user_department` */

DROP TABLE IF EXISTS `tb_user_department`;

CREATE TABLE `tb_user_department` (
  `id` VARCHAR(50) CHARACTER SET gbk NOT NULL,
  `user_id` VARCHAR(50) CHARACTER SET gbk DEFAULT NULL,
  `dep_id` VARCHAR(50) CHARACTER SET gbk DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `tb_user_department` */

/*Table structure for table `tb_user_role` */

DROP TABLE IF EXISTS `tb_user_role`;

CREATE TABLE `tb_user_role` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `role_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `tb_user_role` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
