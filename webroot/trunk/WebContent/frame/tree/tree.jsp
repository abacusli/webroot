<%@ page contentType="text/html; charset=utf-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
     <title></title>
	 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
     <link type="text/css" href="css/tree.css" rel="stylesheet">
     <script language="javascript">
     function ChangeStatus(o)
     {
      if (o.parentNode)
      {
       if (o.parentNode.className == "Open")
       {
        o.parentNode.className = "Close";
		o.src="images/+15_.gif";
       }
       else
       {o.src="images/-15_.gif";
        o.parentNode.className = "Open";
       }
      }
     }
	  function Change(id)
     {
      if (document.getElementById(id))
      { var o=document.getElementById(id)
       if (o.parentNode.className == "Open")
       {
        o.parentNode.className = "Close";
		o.src="images/+15_.gif";
       }
       else
       {o.src="images/-15_.gif";
        o.parentNode.className = "Open";
       }
      }
     }


//urlOld="";
//dayTime="";
 function Change(id,url)
     {//dayTime=top.getDayTime();
      if (document.getElementById(id))
      { var o=document.getElementById(id)
       if (o.parentNode.className == "Open")
       {
        o.parentNode.className = "Close";
		o.src="images/+15_.gif";
		/*if(urlOld===url+'&date='+dayTime){
		}else{
			window.open(url+'&date='+dayTime,'coreFrame');
			urlOld=url+'&date='+dayTime;
		}*/
		top. toUrl(url);
       }
       else
       {o.src="images/-15_.gif";
        o.parentNode.className = "Open";
		/*if(urlOld===url+'&date='+dayTime){
		}else{
			window.open(url+'&date='+dayTime,'coreFrame');
			urlOld=url+'&date='+dayTime;
		}*/
		top. toUrl(url);
       }
      }
     }

function mouseout(o){
	o.className="mouseout";
}

function mouseover(o){
	o.className="mouseover";
}
     </script>
</head>
<body>
<div class="MenuTree" id="MenuTree">
<div class="MenuTreeTitle" id="MenuTreeTitle"><div class="MenuTitle" id="MenuTitle">菜单栏</div></div>
<!---->
<div class="LeftMenuTree" id="LeftMenuTree">
	<ul>
<%
//
try{
	Class.forName("oracle.jdbc.OracleDriver");
}
catch(ClassNotFoundException e){
	out.println(e);
}
//
Connection conn=null;
try{
	 conn=DriverManager.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:orcl","abacus","sa");
}
catch(SQLException e){
}
//
Statement stmt=null;
ResultSet rs=null;
Statement stmtCh=null;
ResultSet rsCh=null;
int index=-1;
try{
	stmt=conn.createStatement();
	rs=stmt.executeQuery("select code,name from aa_qh where length(code)=4 order by code");
	while(rs.next()){
		index=index+1;
		out.println("<li class=\"Close\" ><div></div><img class=\"Menu\" id=\"tree"+index+"\" src=\"images/+15_.gif\" onClick=\"Change('tree"+index+"','../core.jsp?code="+rs.getString("CODE")+"');\"><a onClick=\"Change('tree"+index+"','../core.jsp?code="+rs.getString("CODE")+"');\"><span>"+rs.getString("CODE")+" "+rs.getString("NAME")+"</span></a>");

		stmtCh=conn.createStatement();
		rsCh=stmtCh.executeQuery("select code,name from aa_qh where length(code)=6 and code like '"+rs.getString("CODE").trim()+"%' order by code");
		out.println("<ul>");
		while(rsCh.next()){
			out.println("<li class=\"mouseout\" onMouseOver=\"javascript:mouseover(this)\" onMouseOut=\"javascript:mouseout(this)\"><img class=\"MenuItem\" src=\"images/leaf.gif\"><a onClick=\"top.toUrl('../core.jsp?code="+rsCh.getString("CODE")+"');\" target=\"coreFrame\">"+rsCh.getString("CODE")+" "+rsCh.getString("NAME")+"</a></li>");
		}
		out.println("</ul>");
		rsCh.close();
		stmtCh.close();


		out.println("</li>");
		
	}
	rs.close();
	stmt.close();
	conn.close();
}catch(SQLException e){
}
%>
	<!--
		<li class="Open" ><div></div><img class="Menu" id="tree001" src="images/-15_.gif" onClick="javascript:Change('tree001');"><a onClick="javascript:Change('tree001');"><span>系统配置</span></a>
		<ul>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="tree.html" target="coreFrame">1111111</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="core.jsp" target="coreFrame">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="/ds/f/Untitled-3.html" target="coreFrame">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="/ds/f/Untitled-3.html" target="coreFrame">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="/ds/f/Untitled-3.html" target="coreFrame">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="/ds/f/Untitled-3.html" target="coreFrame">77777777</a></li>
			</ul>
		</li>
		<li class="Close"><div></div><img class="Menu" id="tree002" src="images/+15_.gif" onClick="javascript:Change('tree002');"><a onClick="javascript:Change('tree002');"><span>用户配置</span></a>
		<ul>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
			</ul>
		</li>
		<li class="Close" ><div></div><img class="Menu" id="tree003" src="images/+15_.gif" onClick="javascript:Change('tree003');"><a onClick="javascript:Change('tree003');"><span>基础数据维护</span></a>
			<ul>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
			</ul>
		</li>
			<li class="Close" ><div></div><img class="Menu" id="tree004" src="images/+15_.gif" onClick="javascript:Change('tree004');"><a onClick="javascript:Change('tree004');"><span>基础数据维护</span></a>
			<ul>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
					<li class="mouseout" onMouseOver="javascript:mouseover(this)" onMouseOut="javascript:mouseout(this)"><img class="MenuItem" src="images/leaf.gif"><a href="#">77777777</a></li>
			</ul>
		</li>
		-->
	</ul>
</div>
</div>
<br>
<br>
</body>
</html>