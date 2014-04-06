<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>left</title>
<link href="css/frame.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="leftTopBg"></div>
<div class="leftDownBgAll">
<div class="leftDownBgLeft">
<table cellspacing="0" cellpadding="0" border="0">
    <tr>
<%
java.text.SimpleDateFormat simpleDateTimeFormat = new java.text.SimpleDateFormat("yyyy-MM-dd");
String dateTime = simpleDateTimeFormat.format(new java.util.Date()).substring(0, 10);
String year = dateTime.substring(0, 4);
String month = dateTime.substring(5, 7);
String date = dateTime.substring(8, 10);
//out.print(dateTime);
out.print("<td>");
out.print("<select id=\"year\" onChange=\"top.getYear(this)\">");
for(int i=2010; i<2021;i++){
	if(year.equals(""+i)){
					 out.print("<option value=\""+i+"\" selected=\"selected\">"+i+"</option>");
	}else{
		out.print("<option value=\""+i+"\" >"+i+"</option>");
	}
}
out.print("</select>年");
out.print("</td>");

out.print("<td>");
out.print("<select id=\"month\" onChange=\"top.getMonth(this)\">");
for(int i=1; i<13;i++){
	if(i<10){
		if(month.equals("0"+i)){
					 out.print("<option value=\""+"0"+i+"\" selected=\"selected\">"+"0"+i+"</option>");
		}else{
			out.print("<option value=\""+"0"+i+"\" >"+"0"+i+"</option>");
		}
	}else{
		if(month.equals(""+i)){
					 out.print("<option value=\""+i+"\" selected=\"selected\">"+i+"</option>");
		}else{
			out.print("<option value=\""+i+"\" >"+i+"</option>");
		}
	}
	
}
out.print("</select>月");
out.print("</td>");

out.print("<td>");
out.print("<select id=\"date\" onChange=\"top.getDate(this)\">");
for(int i=1; i<32;i++){
	if(i<10){
		if(date.equals("0"+i)){
					 out.print("<option value=\""+"0"+i+"\" selected=\"selected\">"+"0"+i+"</option>");
		}else{
			out.print("<option value=\""+"0"+i+"\" >"+"0"+i+"</option>");
		}
	}else{
		if(date.equals(""+i)){
					 out.print("<option value=\""+i+"\" selected=\"selected\">"+i+"</option>");
		}else{
			out.print("<option value=\""+i+"\" >"+i+"</option>");
		}
	}
	
}
out.print("</select>日");
out.print("</td>");
%> </tr>
 </table>
</div>
<div class="leftDownBgRight"><img src="images/hiddenUp.gif"  onClick="top.showOrHiddenLogoFrame(this)"></div>
</div>
 <iframe  src="tree/tree.jsp" name="menuList" frameSpacing="0" marginWidth="0"  marginHeight="0"  frameBorder="0"  scrolling="yes" width=100% height=100% vspale="0"></iframe>	
</body>
</html>