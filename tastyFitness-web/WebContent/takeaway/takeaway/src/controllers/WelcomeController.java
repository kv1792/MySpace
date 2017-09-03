package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import pojo.UserInformation;
import daoImpl.ApplicationDaoImplementation;

@Controller
public class WelcomeController {
	
	@Autowired
	ApplicationDaoImplementation applicationDaoImpl;
	
	@RequestMapping(value="/loginUser", method=RequestMethod.POST,consumes="application/json")
	@ResponseBody public boolean welcomeMethod(@RequestBody UserInformation user){
		
		boolean flg = applicationDaoImpl.addUser(user);
		
		return flg;
	}

}
