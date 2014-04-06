onTreeNodeClick:function(n){ 
var grid = this.grid; 
//根据传递过来的node，ajax请求服务器获取对应的动态列 
Ext.Ajax.request({ 
url:"sample.cfc?method=getDynColumn", 
params:{node:n.id}, 
success:function(response, option){ 
//固定列 
var cm = [ 
{header:"编号", mapping:"id", dataIndex:"id", width:65, menuDisabled:true}, 
{header:"名称", mapping:"name", dataIndex:"name", width:65, menuDisabled:true}, 
{header:"路径", mapping:"url", dataIndex:"url", width:65, menuDisabled:true}]; 
var fd = ["id", "name", "url", "classID"]; 
var res = Ext.util.JSON.decode(response.responseText); 
var columns = res.columns; 
var fields = res.fields; 
var types = res.types; 
//判断具体使用哪种方式进行数据编辑,1为input，2为checkbox,3为radio 
for (var i = 0; i < types.length; i++) { 
var edit = null; 
fd.push(fields[i].name); 
if (types[i].type == 1) { 
edit = new Ext.form.TextField();
} else {      
if (types[i].type == 2) { 
edit = new Ext.ux.form.LovCombo({ 
store:new Ext.data.JsonStore({ 
method:"GET",            
url:"sample.cfc?method=getComboboxData", 
root:"data",              
totalProperty:"totalCount", 
id:"id",                 
autoLoad:true,           
fields:["id", "text"]}),  
valueField:"id",         
displayField:"text",       
triggerAction:"all",     
editable:false        
});           
} else {           
edit = new Ext.form.ComboBox({ 
store:new Ext.data.JsonStore({method:"GET", 
url:"sample.cfc?method=getComboboxData",
root:"data", totalProperty:"totalCount", 
id:"id", autoLoad:true, fields:["id", "text"]}), 
valueField:"id",  
displayField:"text", 
triggerAction:"all", 
editable:false 
});            
}          
}         
columns[i].editor = edit; 
cm.push(columns[i]); 
}   
//重新绑定store及column 
grid.reconfigure( 
new Ext.data.JsonStore({ 
url:"sample.cfc", 
root:"data",  
baseParams:{method:"getGridData", node:n.id}, 
totalProperty:"totalCount", id:"id", fields:fd 
}),   
new Ext.grid.ColumnModel(cm)); 
onTreeNodeClick:
var store = grid.getStore(); 
grid.getBottomToolbar().bind(store); 
store.load({params:{start:0, limit:5}}); 
}}); 
}
