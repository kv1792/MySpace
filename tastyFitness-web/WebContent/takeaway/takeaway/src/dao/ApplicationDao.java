package dao;

import java.util.List;

import pojo.UserInformation;

public interface ApplicationDao {
	
	
	public boolean addUser(UserInformation user);
	
	public List<UserInformation> getCredentials(int id);

}
