package com.system.student.controller;

import com.system.student.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class StudentViewController {
    private List<User> userList = new ArrayList<>();

    {
        userList.add(new User("1", "socks", "123456", new Date()));
        userList.add(new User("2", "admin", "111111", new Date()));
        userList.add(new User("3", "jacks", "222222", null));
    }



    @GetMapping("/")
    public ModelAndView index() {
        return new ModelAndView("user/user", "userList", userList);
    }
}