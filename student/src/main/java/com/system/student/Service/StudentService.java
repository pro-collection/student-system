package com.system.student.Service;

import com.system.student.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> findList(Integer pageSize, Integer pageNumber);
}
