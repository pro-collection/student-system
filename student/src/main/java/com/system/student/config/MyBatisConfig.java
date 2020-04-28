package com.system.student.config;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan("com.system.student.mapper")
public class MyBatisConfig {
}
