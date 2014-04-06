<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%@ page import="abacus.jdbc.JdbcTemplate"%>
<%
	request.setCharacterEncoding("UTF-8");
	java.text.SimpleDateFormat simpleDateTimeFormat = new java.text.SimpleDateFormat(
			"yyyy-MM-dd");
	simpleDateTimeFormat.format(new java.util.Date()).substring(0, 10);
%>
<%
	String columns = "* ";
	String from = "from aa_ds_report t ";
	String where = "where 1=1 ";
	String date = request.getParameter("date");
	if (null == date || "".equals(date) || " ".equals(date)) {
		date = "";
	}
	where = where + "and t.对数时间 like '" + date + "%' ";

	String code = request.getParameter("code");
	if (null == code || "".equals(code) || " ".equals(code)) {
		code = "";
	}
	where = where + "and t.区划编码 like '" + code + "%' ";
	String manager = request.getParameter("manager");
	if (null == manager || "".equals(manager) || " ".equals(manager)) {
		manager = "";
	}
	where = where + "and t.负责人 like '" + manager + "%' ";
	String sql = "";
	String start = request.getParameter("start");
	String limit = request.getParameter("limit");
	System.out.println(code);
	System.out.println(date);
	System.out.println(start);
	System.out.println(limit);
	System.out.println(manager);

	ResultSet rs = null;
	StringBuffer sb = new StringBuffer();
	JdbcTemplate jdbcTemplate = new JdbcTemplate();
	columns = "count(*) count ";
	sql = "select " + columns + from + where;
	rs = jdbcTemplate.executeQuery(sql);
	System.out.println(sql);
	sb.append("{\r\n");
	try {
		if (rs.next()) {
			sb.append("\tresults : " + rs.getString("COUNT") + ",\r\n");
		}
		rs.close();
	} catch (SQLException e) {
	}
	columns = "*";
	sql = "select " + columns + from + where;
	int s = Integer.parseInt(start);
	int l = Integer.parseInt(limit);
	Object[] para = { new Integer(l + s), new Integer(s) };
	sql = "select * " + "from (select rownum as r, b.* " + " from ("
			+ sql + ") b " + "where rownum <=" + (l + s) + ") "
			+ "where r >" + s;
	System.out.println(sql);
	rs = jdbcTemplate.executeQuery(sql);
	sb.append("\trows: [");
	try {
		while (rs.next()) {
			sb.append("\r\n\t\t{id : " + rs.getInt("R") + ", code : '"
					+ rs.getString(2) + "',name : '" + rs.getString(3)
					+ "',billcode : '" + rs.getString(4)
					+ "',billtype : '" + rs.getString(5) + "',yszx : '"
					+ rs.getString(6) + "',fasp : '" + rs.getString(7)
					+ "',difference : '" + rs.getString(8)
					+ "',date : '" + rs.getString(10) + "',manager : '"
					+ rs.getString(12) + "'},");
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