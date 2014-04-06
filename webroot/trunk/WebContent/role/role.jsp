<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%
	String userid = request.getParameter("userid").trim();
	try {
		Class.forName("oracle.jdbc.OracleDriver");
	} catch (ClassNotFoundException e) {
		out.print(e);
	}
	Connection conn = null;
	try {
		conn = DriverManager
				.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:orcl",
						"abacus", "sa");
	} catch (SQLException e) {
		out.print(e);
	}
	Statement stmt = null;
	ResultSet rs = null;
	Statement stmtCh = null;
	ResultSet rsCh = null;
	int index = -1;
	StringBuffer sb = new StringBuffer();
	try {
		stmt = conn.createStatement();
		String sql = "select strid id, code,en_name name from vw_app_user_role where /**/level_number=1 and  is_show=1 and id='"
				+ userid + "' order by code";
		rs = stmt.executeQuery(sql);
		System.out.print(sql);
		sb.append("[");
		while (rs.next()) {
			sb.append("{\r\n");
			index = index + 1;
			sb.append("\tid: '" + rs.getString("ID") + "',\r\n");
			sb.append("\ttext: '" + rs.getString("CODE") + " "
					+ rs.getString("NAME") + "',\r\n");
			sb.append("\tcls: 'folder',\r\n");
			sb.append("\ticon: '',\r\n");
			sb.append("\ticonCls: 'x-tree-node-icon-parent',\r\n");
			stmtCh = conn.createStatement();
			rsCh = stmtCh
					.executeQuery("select strid id,code,en_name name from vw_app_user_role where level_number=2 and is_show=1 and id='"
							+ userid
							+ "' and monther_id = '"
							+ rs.getString("ID").trim()
							+ "' order by code");
			sb.append("\tchildren: [");
			while (rsCh.next()) {
				sb.append("{\r\n");
				sb.append("\tid: '" + rsCh.getString("ID") + "',\r\n");
				sb.append("\t\ttext: '" + rsCh.getString("CODE") + " "
						+ rsCh.getString("NAME") + "', ");
				sb.append("\t\tleaf: true");
				sb.append("},");
			}
			rsCh.close();
			stmtCh.close();
			sb.append("]\r\n");
			sb.append("},");
		}
		sb.append("]\r\n");
		rs.close();
		stmt.close();
		conn.close();
	} catch (SQLException e) {
		out.print(e);
	}
	out.println(sb.toString().replaceAll("},]", "}]"));
%>