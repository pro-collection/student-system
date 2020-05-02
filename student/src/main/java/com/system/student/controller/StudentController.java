package com.system.student.controller;

import com.system.student.Service.StudentService;
import com.system.student.common.api.CommonResult;
import com.system.student.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/list")
    public CommonResult<List<Student>> findList(
            @RequestParam(value = "pageNumber", defaultValue = "1") Integer pageNumber,
            @RequestParam(value = "pageSie", defaultValue = "500") Integer pageSize
    ) {
        return CommonResult.success(studentService.findList(pageSize, pageNumber));
    }

    @PostMapping("/create")
    public CommonResult<Boolean> create(@RequestBody Student student) {
        Student findStudent = studentService.getStudentByNumber(student.getNumber());
        if (findStudent != null) return CommonResult.failed("当前学生已存在");
        Integer createCount = studentService.createStudent(student);
        if (createCount != 0) return CommonResult.success(true, "新建学生成功");
        return CommonResult.failed("新建学生失败");
    }

    @DeleteMapping("/{id}")
    public CommonResult<Boolean> delete(@PathVariable Long id) {
        Integer count = studentService.deleteById(id);
        if (count != 0) return CommonResult.success(true, "删除成功");
        return CommonResult.failed("删除学生信息失败");
    }
}
