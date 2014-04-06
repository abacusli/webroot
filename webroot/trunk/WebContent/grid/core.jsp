<%@ page contentType="text/html; charset=UTF-8" language="java"
	errorPage=""%>
<%@ page import="java.text.*"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%@ page import="abacus.jdbc.JdbcTemplate"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>core</title>
	<link href="css/frame.css" rel="stylesheet" type="text/css" />
	<script language="javascript">
function mouseout(o, className) {
	o.className = className;
}

function mouseover(o, className) {
	o.className = className;
}
</script>
</head>
<body>
	<%
		/*
		 public String rk(String s)
		 {
		 if (s == null)
		 return "";
		 else
		 return s;
		 }
		 */
		String date = "";
		if (null == request.getParameter("date")) {
			java.text.SimpleDateFormat simpleDateTimeFormat = new java.text.SimpleDateFormat(
					"yyyy-MM-dd");
			date = simpleDateTimeFormat.format(new java.util.Date())
					.substring(0, 10);
		} else {
			date = request.getParameter("date");
		}
		//out.print(date);
		String sql = "";
		if (null == request.getParameter("code")) {
			sql = "select * from aa_ds_report t where t.对数时间 like '" + date
					+ "%'";
		} else {
			sql = "select * from aa_ds_report t where t.对数时间 like '" + date
					+ "%' and t.区划编码 like '" + request.getParameter("code")
					+ "%'";
		}
		//out.print(sql);
	%>

	<table class="core" cellspacing="1" cellpadding="0" border="0">
		<tr class="td00" align="center">
			<th width="40" align="center">
				序号
			</th>
			<th width="70">
				区划编码
			</th>
			<th width="120">
				区划名称
			</th>
			<th width="70">
				单据编码
			</th>
			<th width="200">
				单据类型
			</th>
			<th width="145">
				预算执行
			</th>
			<th width="145">
				平台
			</th>
			<th width="120">
				相差金额
			</th>
			<!-- <th width="100">是否正常</th>-->
			<th width="170">
				对数时间
			</th>
			<!-- <th width="115">对数人姓名</th>-->
			<th width="60">
				负责人
			</th>
		</tr>
		<%
			//
			try {
				Class.forName("oracle.jdbc.OracleDriver");
			} catch (ClassNotFoundException e) {
				out.println(e);
			}
			//
			Connection conn = null;
			try {
				conn = DriverManager
						.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:orcl",
								"abacus", "sa");
			} catch (SQLException e) {
			}
			//

			Statement stmt = null;
			ResultSet rs = null;

			JdbcTemplate jdbcTemplate = new JdbcTemplate();
			String strid = request.getParameter("strid");
			rs = jdbcTemplate
					.executeQuery("select code from sys_table where strid='"
							+ strid + "'");
			String tableName = "";
			System.out.println(tableName);
			if (rs.next()) {
				tableName = rs.getString("CODE");
			}
			rs.close();
			int index = 0;
			sql = "select * from " + tableName;
			String className = "td01";
			try {
				stmt = conn.createStatement();
				rs = stmt.executeQuery(sql);
				//out.print(sql);
				while (rs.next()) {
					if (index % 2 == 0) {
						className = "td02";
					} else {
						className = "td01";
					}
					index = index + 1;//onMouseOver=\"javascript:mouseover(this,'tdover')\" onMouseOut=\"javascript:mouseout(this,'"+className+"')\"
					out.println("	<tr class=\"" + className + "\" >");
					out.println("		<td width=\"40\"  align=\"center\" >"
							+ index + "</td>");
					out.println("		<td width=\"70\"  align=\"center\" >"
							+ rs.getString(1) + "</td>");
					out.println("		<td width=\"120\" align=\"left\" >"
							+ rs.getString(2) + "</td>");
					out.println("		<td width=\"70\"  align=\"center\" >"
							+ rs.getString(3) + "</td>");
					out.println("		<td width=\"200\" align=\"left\" >"
							+ rs.getString(4) + "</td>");
					out.println("		<td width=\"145\" align=\"right\">"
							+ rs.getString(5) + "</td>");
					out.println("		<td width=\"145\" align=\"right\">"
							+ rs.getString(6) + "</td>");
					out.println("		<td width=\"120\" align=\"right\">"
							+ rs.getString(7) + "</td>");
					//out.println("		<td width=\"100\" align=\"left\" >"+rs.getString(8)+"</td>");
					out.println("		<td width=\"170\"  align=\"center\" >"
							+ rs.getString(9) + "</td>");
					//out.println("		<td width=\"115\" align=\"left\" >"+rs.getString(10)+"</td>");
					out.println("		<td width=\"60\"  align=\"center\" >"
							+ rs.getString(11) + "</td>");
					out.println("	</tr>");
				}
				rs.close();
				stmt.close();
				conn.close();
			} catch (SQLException e) {
			}
		%>
	</table>
</body>
</html>