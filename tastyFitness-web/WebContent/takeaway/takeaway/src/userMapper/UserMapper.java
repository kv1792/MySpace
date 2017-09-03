package userMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import pojo.UserInformation;

public class UserMapper implements RowMapper<UserInformation>  {

	@Override
	public UserInformation mapRow(ResultSet rs, int id) throws SQLException {
		// TODO Auto-generated method stub
		UserInformation user = new UserInformation();
		user.setUsername(rs.getString("username"));
		user.setPassword(rs.getString("password"));
		
		return user;
	}
	
	

}
