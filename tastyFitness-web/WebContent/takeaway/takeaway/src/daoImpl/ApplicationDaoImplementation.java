package daoImpl;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;

import pojo.UserInformation;
import userMapper.UserMapper;
import dao.ApplicationDao;

public class ApplicationDaoImplementation implements ApplicationDao{

	 private DataSource dataSource;
	   private JdbcTemplate jdbcTemplateObject;
	   
	   public void setDataSource(DataSource dataSource) {
		      this.dataSource = dataSource;
		      this.jdbcTemplateObject = new JdbcTemplate(dataSource);
		   }
	
	@Override
	public boolean addUser(UserInformation user) {
		// TODO Auto-generated method stub
		
		String sql = "insert into usercredentials(username, password) values (?,?)";
		
		int rs = jdbcTemplateObject.update(sql, user.getUsername(), user.getPassword());
		
		if(rs>0){
			
			return true;
		}else{
			
			return false;	
		}
		
		
	}

	@Override
	public List<UserInformation> getCredentials(int id) {
		// TODO Auto-generated method stub
		String sql = "select * from usercredentials where id=?";
		List<UserInformation> user = jdbcTemplateObject.query(sql,new UserMapper());
		return user;
	}
	
	

}
