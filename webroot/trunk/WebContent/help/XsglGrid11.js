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
	    	store:this.store,
	    	sm:sm,
	    	cm:cm,
	    	region : 'center',
	    	stripeRows : true,// 实现行颜色交替显示
	    	loadMask : {
				msg : '加载中...'
			 },
			
			bbar : new Ext.PagingToolbar({
										pageSize : 15,
										store : this.store,
										displayInfo : true,
										displayMsg : '显示从{0}条数据到{1}条数据，共{2}条数据',
										emptyMsg : "数据为空"
									})
	    });
	}
});
