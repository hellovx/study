package com.zh.controller.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(value="user")
@Controller
public class UserController {

	@RequestMapping(value="findUserList")
	public String findUserList(){
		System.out.println("hello user");
		return "";
	}

}
