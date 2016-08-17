package com.zh.controller.email;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zh.util.email.EmailUtils;

@Controller
@RequestMapping("/email")
public class EmailController {
	private static Logger logger=Logger.getLogger(EmailController.class);

	@RequestMapping(value="/send.do")
	@ResponseBody
	public String sendEmail() {
		try {
			boolean b = false;
			String[] file = { "D:\\logs\\20160816最新节目编排单.xlsx" };
			b = EmailUtils.sendEmail(3,"test", "<html><a>hellovx我是测试</a></html>", file);
			System.out.println(b);
			logger.error("这是error!!");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

		return "{\"test\":\"你好\"}";

	}

}
