<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%@ page import="abacus.jdbc.JdbcTemplate"%>
<%--<%
Object para[] = { "4108","4107","4109"};
jdbcTemplate.setStatement(false);
String s = "select * from aa_qh t where code in (?,?,?)";
List list = jdbcTemplate.query(s, para);
System.out.print(s);
//jdbcTemplate.close();
//jdbcTemplate.setStatement(false);
//jdbcTemplate.execute("drop table sys_111");
Map map = null;
for (int i = 0; i < list.size(); i++) {
	map = (Map) list.get(i);
	System.out.print(map.get("code"));
	System.out.println(map.get("name"));
}
%>--%>
<%
	ResultSet rs = null;
	ResultSet rsCh = null;
	int index = -1;
	StringBuffer sb = new StringBuffer();
	JdbcTemplate jdbcTemplate = new JdbcTemplate();
	JdbcTemplate jdbcTemplateCh = new JdbcTemplate();
	try {
		rs = jdbcTemplate
				.executeQuery("select strid id, code,en_name name,class_name from sys_table where level_number=1 and is_show=1 order by code");
		sb.append("[");
		while (rs.next()) {
			sb.append("{\r\n");
			index = index + 1;
			sb.append("\tid: '" + rs.getString("ID") + " "
					+ rs.getString("CLASS_NAME") + "',\r\n");
			sb.append("\ttext: '" + rs.getString("CODE") + " "
					+ rs.getString("NAME") + "',\r\n");
			sb.append("\tcls: 'folder',\r\n");
			sb.append("\ticon: '',\r\n");
			sb.append("\ticonCls: 'x-tree-node-icon-parent',\r\n");
			rsCh = jdbcTemplateCh
					.executeQuery("select strid id,code,en_name name, class_name from  sys_table where level_number=2 and is_show=1 and monther_id = '"
							+ rs.getString("ID").trim()
							+ "' order by code");
			sb.append("\tchildren: [");
			while (rsCh.next()) {
				sb.append("{\r\n");
				sb.append("\tid: '" + rsCh.getString("ID") + " "
						+ rsCh.getString("CLASS_NAME") + "',\r\n");
				sb.append("\t\ttext: '" + rsCh.getString("CODE") + " "
						+ rsCh.getString("NAME") + "', ");
				sb.append("\t\tleaf: true");
				sb.append("},");
			}
			rsCh.close();
			jdbcTemplateCh.close();
			sb.append("]\r\n");
			sb.append("},");
		}
		sb.append("]\r\n");
		rs.close();
		jdbcTemplate.close();
	} catch (SQLException e) {
	}
	out.println(sb.toString().replaceAll("},]", "}]"));
%>