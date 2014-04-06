<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%
	String action = request.getParameter("action");
	String code = request.getParameter("code");
	String username = "";
	String password = request.getParameter("password");
	try {
		Class.forName("com.mysql.jdbc.Driver");
	} catch (ClassNotFoundException e) {
		response.setStatus(505);
		out.print("加载驱动程序失败！");
		return;
	}
	Connection conn = null;
	try {
		conn = DriverManager
				.getConnection(
						"jdbc:mysql://127.0.0.1:3306/salary?user=root;password=root;useUnicode=true;amp;characterEncoding=UTF-8",
						"root", "root");

	} catch (SQLException e) {
		response.setStatus(505);
		out.print("创建数据库连接失败！");
		return;
	}
	Statement stmt = null;
	ResultSet rs = null;
	if ("checkUsername".equals(action)) {
		try {
			stmt = conn.createStatement();
			String sql = "select code, en_name name from app_user where code='"
					+ code + "'";
			rs = stmt.executeQuery(sql);
			if (rs.next()) {
				username = rs.getString("CODE") + " "
						+ rs.getString("NAME");
				rs.close();
				stmt.close();
				response.setStatus(200);
				out.print(username);
				return;
			} else {
				response.setStatus(505);
				out.print("系统里没有用户【" + code + "】！");
				return;
			}
		} catch (SQLException e) {
			response.setStatus(505);
			out.print(e);
			return;
		}
	}
	if ("login".equals(action)) {
		try {
			stmt = conn.createStatement();
			username = code.substring(code.indexOf(" ")).trim();
			code = code.substring(0, code.indexOf(" ")).trim();
			String sql = "select strid ,code, en_name name from app_user where code='"
					+ code
					+ "' and en_name='"
					+ username
					+ "' and text01='" + password + "'";
			System.out.print(sql);
			rs = stmt.executeQuery(sql);
			String id = "";
			if (rs.next()) {
				id = rs.getString("STRID");
				rs.close();
				stmt.close();
				conn.close();
				response.setStatus(200);
				out.print(id);
				return;
			} else {
				response.setStatus(505);
				out.print("用户密码错误！");
				return;
			}
		} catch (SQLException e) {
			response.setStatus(505);
			out.print(e);
			return;
		}
	}
%>