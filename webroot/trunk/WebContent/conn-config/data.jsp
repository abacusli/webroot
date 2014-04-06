<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%
	try {
		Class.forName("oracle.jdbc.OracleDriver");
	} catch (ClassNotFoundException e) {
		out.println(e);
	}
	Connection conn = null;
	try {
		conn = DriverManager
				.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:orcl",
						"abacus", "sa");
	} catch (SQLException e) {
	}
	Statement stmt = null;
	ResultSet rs = null;
	StringBuffer sb = new StringBuffer();
	try {
		stmt = conn.createStatement();
		rs = stmt
				.executeQuery("select code,en_name name from sys_sys where level_number=1 and is_show=1 order by code");
		sb.append("[");
		while (rs.next()) {
			sb.append("[");
			sb.append("'" + rs.getString("CODE") + "',");
			sb.append("'" + rs.getString("NAME") + "'");
			sb.append("],");
		}
		sb.append("]");
		rs.close();
		stmt.close();
		conn.close();
	} catch (SQLException e) {
	}
	out.println(sb.toString().replaceAll("],]", "]]"));
%>