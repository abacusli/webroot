<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%@ page import="abacus.jdbc.JdbcTemplate"%>
<%
	String strid = request.getParameter("strid");
	String start = request.getParameter("start");
	String limit = request.getParameter("limit");
	System.out.println(strid);
	System.out.println(start);
	System.out.println(limit);
	ResultSet rs = null;
	StringBuffer sb = new StringBuffer();
	String sql = "select code from sys_table where strid='" + strid
			+ "'";
	String tableName = "";
	JdbcTemplate jdbcTemplate = new JdbcTemplate();
	rs = jdbcTemplate.executeQuery(sql);
	System.out.println(sql);
	try {
		if (rs.next()) {
			tableName = rs.getString("CODE");
		}
		rs.close();
	} catch (SQLException e) {
	}
	sb.append("{\r\n");
	sql = "select count(*) count from " + tableName;
	rs = jdbcTemplate.executeQuery(sql);
	System.out.println(sql);
	try {
		if (rs.next()) {
			sb.append("\tresults : " + rs.getString("COUNT") + ",\r\n");
		}
		rs.close();
	} catch (SQLException e) {
	}
	int s = Integer.parseInt(start);
	int l = Integer.parseInt(limit);
	Object[] para = { new Integer(l + s), new Integer(s) };
	sql = "select * "
			+ "from (select rownum as r, b.* "
			+ " from (select code,en_name name,level_number,is_valid from "
			+ tableName + " order by code) b " + "where rownum <="
			+ (l + s) + ") " + "where r >" + s;
	System.out.println(sql);
	rs = jdbcTemplate.executeQuery(sql);
	sb.append("\trows: [");
	try {
		while (rs.next()) {
			sb.append("\r\n\t\t{id : " + rs.getInt("R") + ", code : '"
					+ rs.getString("CODE") + "',name : '"
					+ rs.getString("NAME") + "',levelNumber : '"
					+ rs.getString("LEVEL_NUMBER") + "',isValid : '"
					+ rs.getString("IS_VALID") + "'},");
		}
		rs.close();
	} catch (SQLException e) {
	}
	jdbcTemplate.close();
	sb.append("]\r\n");
	sb.append("}\r\n");
	out.println(sb.toString().replaceFirst("},]", "}]"));
	System.out.print(sb.toString().replaceFirst("},]", "}]"));
%>