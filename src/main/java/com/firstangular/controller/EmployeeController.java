package com.firstangular.controller;


import com.firstangular.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.firstangular.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/vi/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public Iterable<Employee> findAll() {
        return employeeRepository.findAll();
    }

}


