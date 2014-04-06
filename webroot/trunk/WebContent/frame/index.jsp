<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>主页</title>
</head>
<script language="javascript">
var logoFrameState = "show";
var menuFrameState = "show";

//控制LOGO框架的显示与隐藏
function showOrHiddenLogoFrame(source){
	if (logoFrameState == "hidden"){
		document.all.allFrame.rows = "65,*,5";
		logoFrameState = "show";
		source.src = "images/hiddenUp.gif";
			
	}else{
		document.all.allFrame.rows = "0,*,5";
		logoFrameState = "hidden";
		source.src = "images/showUp.gif";
	}
}
//控制菜单框架的显示与隐藏
function showOrHiddenMenuFrame(source){
	if (menuFrameState == "hidden"){
		document.all.middleFrame.cols = "256,8,*";
		menuFrameState = "show";
		source.src = "images/leftCtrlBarHidden.gif";
			
	}else{
		document.all.middleFrame.cols = "0,8,*";
		menuFrameState = "hidden";
		source.src = "images/leftCtrlBarShow.gif";
	}
}
dayTime="";
urlOld="";
urlPara="core.jsp?code=410";
today = new Date () ;
year=today.getYear();
month=(today.getMonth()+1);
date=today.getDate();
if (year <= 9) year = "0" + year;
if (month <= 9) month = "0" + month;
if (date <= 9) date = "0" + date;
dayTime=year+'-'+month+'-'+date;
function getYear(o){
	var index=o.selectedIndex;
	year=o.options[index].value;
	dayTime=year+'-'+month+'-'+date;
	toChangeUrl(urlPara);
}
function getMonth(o){
	var index=o.selectedIndex;
	month=o.options[index].value;
	dayTime=year+'-'+month+'-'+date;
	toChangeUrl(urlPara);
}
function getDate(o){
	var index=o.selectedIndex;
	date=o.options[index].value;
	dayTime=year+'-'+month+'-'+date;
	toChangeUrl(urlPara);
}
function toUrl(url){
	if(urlOld===url+'&date='+dayTime){
		}else{	
			urlOld=url+'&date='+dayTime;
			urlPara=url;
			//alert(url+'&date='+dayTime);
			window.open(url+'&date='+dayTime,'coreFrame');
		}
}
function toChangeUrl(url){
	if(urlPara.substring(0,3)==="../"){
		toUrl(urlPara.substring(3,urlPara.length));
		}else{
			toUrl(url);
		}
}
</script>
<frameset rows="65,*,7" cols="*" frameborder="no" border="0" framespacing="0" name="allFrame" id="allFrame"> 
  <frame name="logoFrame" src="logo.jsp" scrolling="no" noresize="noresize" frameborder="no" id="logoFrame" title="logoFrame">
  	<frameset rows="*" cols="256,8,*" frameborder="no" border="0" framespacing="0" name="middleFrame" id="middleFrame"> 
    	<frame src="left.jsp" name="leftFrame" frameborder="no" scrolling="no" noresize="noresize" id="leftFrame" title="leftFrame">
<frame name="leftCtrlBarFrame" src="leftCtrlBar.jsp" scrolling="no" noresize="noresize" frameborder="no" id="leftCtrlBarFrame" title="leftCtrlBarFrame">
		<frameset rows="22,*" cols="*" frameborder="no" border="0" framespacing="0" name="rightFrame" id="rightFrame"> 
			<frame name="infoFrame" src="info.jsp" scrolling="no" noresize="noresize" frameborder="no" id="infoFrame" title="infoFrame">    		
    		<frame name="coreFrame" src="core.jsp" scrolling="auto" noresize="noresize" frameborder="no" id="coreFrame" title="coreFrame">
		</frameset>
  	</frameset>
  <frame name="stateBarFrame" src="stateBar.jsp" scrolling="no" noresize="noresize" frameborder="no" id="stateBarFrame" title="stateBarFrame">
</frameset>
<noframes> 
<body bgcolor="#FFFFFF" text="#000000" topmargin="0" bottommargin="0" marginheight="0" leftmargin="0" rightmargin="0" marginwidth="0" marginheight="0">
</body>
</noframes> 
</html>