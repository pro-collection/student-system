package com.system.student.Service.impl;

import com.github.pagehelper.PageHelper;
import com.system.student.Service.StudentService;
import com.system.student.mapper.StudentMapper;
import com.system.student.model.Student;
import com.system.student.model.StudentExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentImpl implements StudentService {
    @Autowired
    private StudentMapper studentMapper;

    @Override
    public List<Student> findList(Integer pageSize, Integer pageNumber) {
        PageHelper.startPage(pageNumber, pageSize);
        return studentMapper.selectByExample(new StudentExample());
    }

    @Override
    public Student getStudentById(Long id) {
        return studentMapper.selectByPrimaryKey(id);
    }

    @Override
    public Integer createStudent(Student student) {
        return studentMapper.insertSelective(student);
    }

    @Override
    public Student getStudentByNumber(Long number) {
        return studentMapper.selectByNumber(number);
    }

    @Override
    public Integer deleteById(Long id) {
        return studentMapper.deleteByPrimaryKey(id);
    }
}
