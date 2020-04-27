package com.system.student.controller;

import com.system.student.modal.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class UserController {

    private List<User> userList = new ArrayList<>();

    @GetMapping("/")
    public ModelAndView index() {
        userList.add(new User("1", "socks", "123456", new Date()));
        userList.add(new User("2", "admin", "111111", new Date()));
        userList.add(new User("2", "admin", "111111", new Date()));
        userList.add(new User("3", "jacks", "222222", null));
        return new ModelAndView("user/user", "userList", userList);
    }
}
