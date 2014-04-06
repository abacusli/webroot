<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%
	//
	try {
		/* Class.forName("oracle.jdbc.OracleDriver"); */
		Class.forName("com.mysql.jdbc.Driver");

	} catch (ClassNotFoundException e) {
		out.println(e);
	}
	//
	Connection conn = null;
	try {
		/* conn=DriverManager.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:orcl","abacus","sa"); */
		conn=DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/salary?user=root;password=root;useUnicode=true;amp;characterEncoding=UTF-8","root","root"); 
	} catch (SQLException e) {
	}
	//
	Statement stmt = null;
	ResultSet rs = null;
	Statement stmtCh = null;
	ResultSet rsCh = null;
	int index = -1;
	StringBuffer sb = new StringBuffer();
	try {
		stmt = conn.createStatement();
		rs = stmt
				.executeQuery("select code,name from aa_qh where length(code)=4 /*and code like '4100%'*/ order by code");
		sb.append("[");
		while (rs.next()) {
			sb.append("{\r\n");
			index = index + 1;
			sb.append("\tid: '" + rs.getString("CODE") + "',\r\n");
			sb.append("\ttext: '" + rs.getString("CODE") + " "
					+ rs.getString("NAME") + "',\r\n");
			sb.append("\tcls: 'folder',\r\n");
			sb.append("\ticon: '',\r\n");
			sb.append("\ticonCls: 'x-tree-node-icon-parent',\r\n");
			//sb.append("\thref: 'core.jsp?code="+rs.getString("CODE")+"',\r\n");
			stmtCh = conn.createStatement();
			rsCh = stmtCh
					.executeQuery("select code,name from aa_qh where length(code)=6 and code like '"
							+ rs.getString("CODE").trim()
							+ "%' order by code");
			sb.append("\tchildren: [");
			while (rsCh.next()) {
				sb.append("{\r\n");
				sb.append("\tid: '" + rsCh.getString("CODE") + "',\r\n");
				sb.append("\t\ttext: '" + rsCh.getString("CODE") + " "
						+ rsCh.getString("NAME") + "', ");
				sb.append("\t\tleaf: true");
				//sb.append("\t\thref: 'core.jsp?code="+rsCh.getString("CODE")+"'\r\n");
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
	}

	out.println(sb.toString().replaceAll("},]", "}]"));
%>