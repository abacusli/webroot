/*
 * 培训信息查询表格显示
 * *
*/
XsglGrid = Ext.extend(Ext.grid.EditorGridPanel,{
	store:null,
	myid:"XsglGrid",
	constructor:function(_config){
	   if(_config == null){
		  _config = {}; 
	   }
	   Ext.apply(this, _config);
	   var sm = new Ext.grid.CheckboxSelectionModel({
							singleSelect : true,
							header:""
						});
	   var cm = new Ext.grid.ColumnModel([sm,
		            {header : '考生号',   dataIndex : 'ksh',width:130},
		            {header : '学号',   dataIndex : 'xh',width:130},
					{header : '姓名',     dataIndex : 'xm',width:80}, 
					{header : '性别', dataIndex : 'xbdm',width:40},
					{header : '政治面貌', dataIndex : 'zzmmdm',width:80},
					{header : '民族',     dataIndex : 'mzdm',width:80},
					{header : '院系', dataIndex : 'yx',width:120},
					{header : '专业', dataIndex : 'zy',width:120},
					{header : '班级', dataIndex : 'bj',width:80},
					{header : '层次',  dataIndex : 'cc',width:80},
					{header : '查看学生信息',  dataIndex : 'cz',renderer : chakan,autoExpandColumn:true}
				]);
	   cm.defaultSortable = false;
	   
	   var StudentRecord = Ext.data.Record.create([
		   			{name : 'ksh',        type:'string'},
					{name : 'xh',         type:'string'},
					{name : 'xm',       type:'string'}, 
					{name : 'xbdm',       type:'string'},
					{name : 'zzmmdm',       type:'string'},
					{name : 'mzdm',         type:'string'},
					{name : 'yx',       type:'string'},
					{name : 'zy',   type:'string'},
					{name : 'bj',       type:'string'},
					{name : 'cc',       type:'string'}
			]);
	   this.store = new Ext.data.Store ({
							proxy : new Ext.data.HttpProxy({
										url : 'xsgl/selAllXsxx?'
									}),
							reader : new Ext.data.JsonReader({ 
								  totalProperty:'count',
								  root:'xslist'
                                }, StudentRecord),
							remoteSort : true
						});
	    this.store.load({
					params:{
		    	         start:0,
		    	         limit:15
	    	         }
				});
	    XsglGrid.superclass.constructor.call(this,{
	    	id:"XsglGrid",
	    	store : this.store,
			sm : sm,
			cm : cm,
			region : 'center',
			stripeRows : true,// 实现行颜色交替显示
			loadMask : {
				msg : '加载中...'
			},

			bbar : new Ext.PagingToolbar( {
				pageSize : 15,
				store : this.store,
				displayInfo : true,
				displayMsg : '显示从{0}条数据到{1}条数据，共{2}条数据',
				emptyMsg : "数据为空"
									})
	    });
	}
});
function chakan(value, metadata, record, rowIndex, colIndex, store){
	var ksh = record.data.ksh;
	var caozuo = "<a href=\"#\" onclick=\"seeOneXsxx(" + ksh+ ");return false;\">"+"查看学生信息</a>";
	return caozuo;
}
function seeOneXsxx(ksh){
	var readWindow = new OnlyReadXsxxWindow();
	Ext.Ajax.request({
			url:'xsgl/selXsByKsh',
			params:{ksh:ksh},
			success:function(response,action){
				  data = Ext.util.JSON.decode(response.responseText);
			 //设定pxglid
				  Ext.getCmp("ksh").setValue(data.ksh);
//				  //培训信息
				   Ext.getCmp("xm").setValue(data.xm);
				   Ext.getCmp("xh").setValue(data.xh);
//				   Ext.getCmp("csny").setValue(Date.parseDate(data.csny,'YYYY-MM-DD'));
				   Ext.getCmp("csny").setValue(data.csny);
				   Ext.getCmp("zxmc").setValue(data.zxmc);
				   Ext.getCmp("dq").setValue(data.dq);
				   Ext.getCmp("sfzh").setValue(data.sfzh);
				   Ext.getCmp("jtdz").setValue(data.jtdz);
				   Ext.getCmp("yzbm").setValue(data.yzbm);
				   Ext.getCmp("lxdh").setValue(data.lxdh);
				   Ext.getCmp("sjr").setValue(data.sjr);
				   Ext.getCmp("kstc").setValue(data.kstc);
				   Ext.getCmp("tddw").setValue(data.tddw);
				   Ext.getCmp("cj").setValue(data.cj);
				   Ext.getCmp("tdzy").setValue(data.tdzy);                    
				   Ext.getCmp("yx").setValue(data.yx);
				   Ext.getCmp("zy").setValue(data.zy);
				   Ext.getCmp("bj").setValue(data.bj);
				   Ext.getCmp("lqzy").setValue(data.lqzy);
				   Ext.getCmp("xz").setValue(data.xz);
				   Ext.getCmp("cc").setValue(data.cc);
				   Ext.getCmp("rxrq").setValue(data.rxrq);
				   Ext.getCmp("xskkh").setValue(data.xskkh);
				   Ext.getCmp("xskyxrq").setValue(data.xskyxrq);
				   Ext.getCmp("yhkh").setValue(data.yhkh);
				   Ext.getCmp("yhzh").setValue(data.yhzh);
				   Ext.getCmp("nd").setValue(data.nd);
				   Ext.getCmp("tzzf").setValue(data.tzzf);
				   Ext.getCmp("zf").setValue(data.zf);
				   Ext.getCmp("zh").setValue(data.zh);
				   Ext.getCmp("sx").setValue(data.sx);
				   Ext.getCmp("yw").setValue(data.yw);
				   Ext.getCmp("wy").setValue(data.wy);
				   Ext.getCmp("wytl").setValue(data.wytl);
				   Ext.getCmp("dkywyy").setValue(data.dkywyy);                    
				   Ext.getCmp("dkjck").setValue(data.dkjck);
				   Ext.getCmp("dksx").setValue(data.dksx);
				   Ext.getCmp("dkzy").setValue(data.dkzy);
				   Ext.getCmp("dksz").setValue(data.dksz);
				   Ext.getCmp("tywd").setValue(data.tywd);
				   Ext.getCmp("ms").setValue(data.ms);
				   Ext.getCmp("yy").setValue(data.yy);
				   Ext.getCmp("byzc").setValue(data.byzc);
				   Ext.getCmp("fzmt").setValue(data.fzmt);
				   Ext.getCmp("ysmt").setValue(data.ysmt);
				   Ext.getCmp("kc").setValue(data.kc);
				   Ext.getCmp("ysby").setValue(data.ysby);
				   Ext.getCmp("bdzz").setValue(data.bdzz);
				   Ext.getCmp("sf").setValue(data.sf);
				   Ext.getCmp("tyzf").setValue(data.tyzf);
				   Ext.getCmp("ylymszf").setValue(data.ylymszf);
				   Ext.getCmp("ldtyszf").setValue(data.ldtyszf);
				   Ext.getCmp("qqszf").setValue(data.qqszf);                        
				   Ext.getCmp("ybml").setValue(data.ybml);
				   Ext.getCmp("ybyml").setValue(data.ybyml);
				   Ext.getCmp("ebm").setValue(data.ebm);
				   Ext.getCmp("sbm").setValue(data.sbm);
				   Ext.getCmp("yqwbm").setValue(data.yqwbm);
				   Ext.getCmp("tg").setValue(data.tg);
				   Ext.getCmp("ty").setValue(data.ty);
				   Ext.getCmp("sjt").setValue(data.sjt);
				   Ext.getCmp("qq").setValue(data.qq);
				   Ext.getCmp("tb").setValue(data.tb);
				   Ext.getCmp("bq").setValue(data.bq);
				   Ext.getCmp("zq").setValue(data.zq);
				   Ext.getCmp("lq").setValue(data.lq);
				   Ext.getCmp("pq").setValue(data.pq);
				   Ext.getCmp("ppq").setValue(data.ppq);
				   Ext.getCmp("ws").setValue(data.ws);
				   Ext.getCmp("tc").setValue(data.tc);
				   Ext.getCmp("yysy").setValue(data.yysy);
				   Ext.getCmp("yyqy").setValue(data.yyqy);
				   Ext.getCmp("yywd").setValue(data.yywd);
				   Ext.getCmp("yysc").setValue(data.yysc);
				   Ext.getCmp("yybs").setValue(data.yybs);
				   Ext.getCmp("mssm").setValue(data.mssm);
				   Ext.getCmp("mssc").setValue(data.mssc);  
				   Ext.getCmp("mssx").setValue(data.mssx);
				   Ext.getCmp("bz").setValue(data.bz);
				   Ext.getCmp("nd").setValue(data.nd);
//				   Ext.getCmp("").setValue(data.);
				   /********* 新增加字段******/
				   Ext.getCmp("zydhone").setValue(data.zydhone);
				   Ext.getCmp("zydhtwo").setValue(data.zydhtwo);
				   Ext.getCmp("zydhthree").setValue(data.zydhthree);
				   Ext.getCmp("zydhfour").setValue(data.zydhfour);
				   Ext.getCmp("zydhfive").setValue(data.zydhfive);
				   Ext.getCmp("zydhsix").setValue(data.zydhsix);
				   Ext.getCmp("zytz").setValue(data.zytz);
				   Ext.getCmp("zysxdmone").setValue(data.zysxdmone);
				   Ext.getCmp("zysxdmtwo").setValue(data.zysxdmtwo);
				   Ext.getCmp("zysxdmthree").setValue(data.zysxdmthree);
				   Ext.getCmp("zysxdmfour").setValue(data.zysxdmfour);
				   Ext.getCmp("zysxdmfive").setValue(data.zysxdmfive);
				   Ext.getCmp("zysxdmsix").setValue(data.zysxdmsix);
				   
				  
				   
				   
			//设定出生年月
				   
			//强制加载培训级别下拉列表
				   //性别信息
				   Ext.getCmp("xbdm").store.on('load', function() {  
													    Ext.getCmp("xbdm").setValue(data.xbdm);  
													});
				   Ext.getCmp("xbdm").store.load();
				   //民族信息
				   Ext.getCmp("mz").store.on('load', function() {  
													    Ext.getCmp("mz").setValue(data.mzdm);  
													});
				   Ext.getCmp("mz").store.load();
				   //政治面貌信息
				   Ext.getCmp("zzmm").store.on('load', function() {  
													    Ext.getCmp("zzmm").setValue(data.zzmmdm);  
													});
				   Ext.getCmp("zzmm").store.load();
//				   //地区信息
				    Ext.getCmp("dq").store.on('load', function() {  
													    Ext.getCmp("dq").setValue(data.dqdm);  
													});
				   Ext.getCmp("dq").store.load();
//				   //招生录取类别
				   Ext.getCmp("zslqlb").store.on('load', function() {  
													    Ext.getCmp("zslqlb").setValue(data.zslqlb);  
													});
				   Ext.getCmp("zslqlb").store.load();
				   //考生类别
				   Ext.getCmp("kslb").store.on('load', function() {  
													    Ext.getCmp("kslb").setValue(data.kslbdm);  
													});
				   Ext.getCmp("kslb").store.load();
				   //科类类别
				   Ext.getCmp("kl").store.on('load', function() {  
													    Ext.getCmp("kl").setValue(data.kldm);  
													});
				   Ext.getCmp("kl").store.load();
				   //批次类别
				   Ext.getCmp("pc").store.on('load', function() {  
													    Ext.getCmp("pc").setValue(data.pcdm);  
													});
				   Ext.getCmp("pc").store.load();
				   /************投档单位代码加载****************/
				   Ext.getCmp("tddwdmone").store.on('load', function() {  
													    Ext.getCmp("tddwdmone").setValue(data.tddwdmone);  
													});
				   Ext.getCmp("tddwdmone").store.load();
				   Ext.getCmp("tddwdmtwo").store.on('load', function() {  
													    Ext.getCmp("tddwdmtwo").setValue(data.tddwdmtwo);  
													});
				   Ext.getCmp("tddwdmtwo").store.load();
				    Ext.getCmp("tddwdmthree").store.on('load', function() {  
													    Ext.getCmp("tddwdmthree").setValue(data.tddwdmthree);  
													});
				   Ext.getCmp("tddwdmthree").store.load();
				   Ext.getCmp("tddwdmfour").store.on('load', function() {  
													    Ext.getCmp("tddwdmfour").setValue(data.tddwdmfour);   
													});
				   Ext.getCmp("tddwdmfour").store.load();
				     Ext.getCmp("tddwdmfive").store.on('load', function() {  
													    Ext.getCmp("tddwdmfive").setValue(data.tddwdmfive);  
													});
				   Ext.getCmp("tddwdmfive").store.load();
				   Ext.getCmp("tddwdmsix").store.on('load', function() {  
													    Ext.getCmp("tddwdmsix").setValue(data.tddwdmsix);  
													});
				   Ext.getCmp("tddwdmsix").store.load();
				 //数据查询完成后，显示窗体
		           Ext.getCmp("OnlyReadXsxxWindow").show();
		           
			}
		});

}