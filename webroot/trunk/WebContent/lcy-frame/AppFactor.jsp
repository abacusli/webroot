<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%
String appFactorId=request.getParameter("appFactorId");
String name=request.getParameter("name");
String code=request.getParameter("code");
String parent_code=request.getParameter("parent_code");
String is_show=request.getParameter("is_show");
try{
	Class.forName("oracle.jdbc.OracleDriver");
}
catch(ClassNotFoundException e){
	response.setStatus(505);
	out.println("加载驱动程序失败！");
	return;
}
Connection conn=null;
try{
	 conn=DriverManager.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:orcl","abacus","sa");
}
catch(SQLException e){
	response.setStatus(505);
	out.println("创建数据库连接失败！");
	return;
}
Statement stmt=null;
ResultSet rs=null;
Statement stmtCh=null;
ResultSet rsCh=null;
StringBuffer sb= new StringBuffer();
try{
	stmt=conn.createStatement();
	String sql="select code from sys_table where strid='"+appFactorId+"'";
	String tableName="";
	rs=stmt.executeQuery(sql);
	if(rs.next()){
		tableName=rs.getString("CODE");
	}
	rs.close();
	stmt.executeUpdate("insert into "+tableName+" id (strid,code,en_name,is_show,is_delete,create_time) "
	+"values(strid(),'"+code+"','"+name+"',to_number('"+is_show+"')-1,to_number('"+is_show+"')-1,to_char(sysdate,'yyyy-mm-dd hh24:mi:ss'))");
	stmt.close();
	conn.close();
	response.setStatus(200);
}catch(SQLException e){
	response.setStatus(505);
	out.println(e.toString().substring(0,e.toString().indexOf("(")));
	return;
}
%>