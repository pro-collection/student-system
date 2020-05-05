create database if not exists studentSystem character set utf8;

use studentSystem;

create table student
(
    id           BIGINT(20) NOT NULL auto_increment COMMENT '主键ID',
    number       bigint(20) COMMENT '学号',
    name         VARCHAR(30)    DEFAULT NULL COMMENT '姓名',
    gender       enum ('1','2') default null comment '性别',
    phone        varchar(20) comment '电话号码',
    age          INT(11)        DEFAULT NULL COMMENT '年龄',
    grade        int(2)         default null comment '年级',
    class_number int(2)         default null comment '班级',
    email        VARCHAR(50)    DEFAULT NULL COMMENT '邮箱',
    address      varchar(200)   default null comment '地址',
    birthday     bigint(13) comment '出生年月日',
    PRIMARY KEY (id)
);

drop table student;

insert into student (number, name, gender, phone, age, grade, class_number, email, address, birthday)
values (201700002, '宝批龙2', '1', '15213498873', 20, 3, 3, '331326342@qq.com', '重庆渝北', 1588037150709);