<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%@ page import="abacus.jdbc.JdbcTemplate"%>
<%--<%
	String action = request.getParameter("action");
	String keyValues = request.getParameter("keyValues");
	System.out.println(keyValues);
	System.out.println(action);

	Enumeration e = request.getAttributeNames();
	Map map = new HashMap();
	while (e.hasMoreElements()) {
		String nextElement = (String) e.nextElement();
		System.out.print(nextElement + " "
				+ request.getParameter(nextElement));
		map.put(nextElement, request.getParameter(nextElement));
	}
	String code = request.getParameter("code");
	System.out.println(code);
%>--%>
<%
	String appFactorId = request.getParameter("strid");
	String action = request.getParameter("action");
	String code = request.getParameter("code");
	String type = request.getParameter("type");
	String ip = request.getParameter("ip");
	String dbname = request.getParameter("dbname");
	String name = request.getParameter("name");
	String password = request.getParameter("password");
	String manager = request.getParameter("manager");
	String systemType = request.getParameter("systemType");
	String accessAddress = request.getParameter("accessAddress");
	String enable = request.getParameter("radio");
	System.out.println(appFactorId);
	System.out.println(appFactorId);
	System.out.println(accessAddress);
	try {
		Class.forName("oracle.jdbc.OracleDriver");
	} catch (ClassNotFoundException e) {
		response.setStatus(505);
		out.println("加载驱动程序失败！");
		return;
	}
	Connection conn = null;
	try {
		conn = DriverManager
				.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:orcl",
						"abacus", "sa");
	} catch (SQLException e) {
		response.setStatus(505);
		out.println("创建数据库连接失败！");
		return;
	}
	Statement stmt = null;
	ResultSet rs = null;
	Statement stmtCh = null;
	ResultSet rsCh = null;
	StringBuffer sb = new StringBuffer();
	try {
		stmt = conn.createStatement();
		String sql = "select code from sys_table where strid='"
				+ appFactorId + "'";
		String tableName = "";
		System.out.println(tableName);
		rs = stmt.executeQuery(sql);
		if (rs.next()) {
			tableName = rs.getString("CODE");
		}
		rs.close();
		sql = "insert into "
				+ tableName
				+ " id (qhcode,code,username,password,type,enable,create_time,manager,set_year,ip,sid,text01,access_address) "
				+ "values('" + code + "','" + code + "','" + name
				+ "','" + password + "','" + systemType
				+ "',to_number('" + enable
				+ "')-1,to_char(sysdate,'yyyy-mm-dd hh24:mi:ss'),'"
				+ manager + "',to_char(sysdate,'yyyy'),'" + ip + "','"
				+ dbname + "','','" + accessAddress + "')";
		System.out.println(sql);
		stmt.executeUpdate(sql);
		
		stmt.close();
		conn.close();
		//response.setStatus(200);
		//return;
	} catch (SQLException e) {
		response.setStatus(505);
		out.println(e.getMessage());//.toString().substring(0, e.toString().indexOf("("))
		System.out.println(e.getMessage());
		return;
	}
%>