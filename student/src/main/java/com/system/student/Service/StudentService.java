package com.system.student.Service;

import com.system.student.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> findList(Integer pageSize, Integer pageNumber);

    Student getStudentById(Long id);

    Integer createStudent(Student student);

    Student getStudentByNumber(Long number);

    Integer deleteById(Long id);
}
