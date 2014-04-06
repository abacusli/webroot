<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%@ page import="abacus.jdbc.JdbcTemplate"%>
<%
	String strid = request.getParameter("strid");
	ResultSet rs = null;
	StringBuffer sb = new StringBuffer();
	String sql = "select code from sys_table where strid='" + strid
			+ "'";
	String tableName = "";
	JdbcTemplate jdbcTemplate = new JdbcTemplate();
	rs = jdbcTemplate.executeQuery(sql);
	//System.out.print(sql);
	try {
		if (rs.next()) {
			tableName = rs.getString("CODE");
		}
		rs.close();
		//jdbcTemplate.close(rs);
	} catch (SQLException e) {
	}
	//System.out.print(tableName);

	sb.append("{\r\n");
	rs = jdbcTemplate.executeQuery("select count(*) count from "
			+ tableName);
	try {
		if (rs.next()) {
			sb.append("results : " + rs.getString("COUNT") + ",\r\n");
			//System.out.print(rs.getString("COUNT"));
		}
		rs.close();
		//jdbcTemplate.close(rs);
	} catch (SQLException e) {
	}
	sql = " select code,en_name name,level_number,is_valid from "
			+ tableName + " order by code";
	rs = jdbcTemplate.executeQuery(sql);
	sb.append("\trows: [\r\n");
	int index = 0;
	try {
		while (rs.next()) {
			sb.append("\t\r\n{id : " + index++ + ", code : '"
					+ rs.getString("CODE") + "',name : '"
					+ rs.getString("NAME") + "',levelNumber : '"
					+ rs.getString("LEVEL_NUMBER") + "',isValid : '"
					+ rs.getString("IS_VALID") + "'},");
		}
		rs.close();
		//jdbcTemplate.close(rs);
	} catch (SQLException e) {
	}
	sb.append("]\r\n");
	sb.append("}\r\n");
	out.println(sb.toString().replaceFirst("},]", "}]"));
	System.out.print(sb.toString().replaceFirst("},]", "}]"));
%>