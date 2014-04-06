var sm = new Ext.grid.CheckboxSelectionModel( {});
var cm = new Ext.grid.ColumnModel( {
	defaults : {
		width : 120,
		sortable : true
	},
	columns : [ sm, {
		header : '序号',
		dataIndex : 'id',
		width : 130
	}, {
		header : '显示编码',
		dataIndex : 'code',
		width : 130
	}, {
		header : '显示名称',
		dataIndex : 'name',
		width : 130
	}, {
		header : '显示级次',
		dataIndex : 'levelNumber',
		width : 130
	}, {
		header : '是否启用',
		dataIndex : 'isValid',
		width : 130
	} ]
});
cm.defaultSortable = false;

var StudentRecord = Ext.data.Record.create( [ {
	name : 'id',
	type : 'int'
}, {
	name : 'code',
	type : 'string'
}, {
	name : 'name',
	type : 'string'
}, {
	name : 'levelNumber',
	type : 'string'
}, {
	name : 'isValid',
	type : 'string'
} ]);
var store = new Ext.data.Store(
		{
			proxy : new Ext.data.HttpProxy(
					{
						url : '../grid/EleBankEditGrid.json?strid={27ABCC20-7541-4A2F-8E43-DA7DB028ADBB}'
					}),
			reader : new Ext.data.JsonReader( {
				idProperty : 'id',
				totalProperty : 'results', //	results: 6,
				root : 'rows'
			}, StudentRecord)
		//,remoteSort : true
		});
store.load( {
	params : {
		start : 0,
		limit : 20
	}
});
EleBankEditGrid = function() {
	this.strid = '';
	EleBankEditGrid.superclass.constructor.call(this, {
		//id : 'ele-bank-edit-ssgrid',
		//renderTo : document.body,// 'ele-bank-edit-grid',
		//title : 'ele-bank-edit-grid',
		header: false,
		closable : true,
		autoScroll : true,
		store : store,
		iconCls : 'icon-grid',
		//frame : true,
		sm : sm,
		cm : cm,
		//width : 600,
		//height : 400,

		viewConfig : {
			forceFit : true
		},
		columnLines : true,
		//region : 'center',
		stripeRows : true,// 实现行颜色交替显示
		loadMask : {
			msg : '加载中...'
		},
		bbar : new Ext.PagingToolbar( {
			pageSize : 15,
			store : store,
			displayInfo : true,
			displayMsg : '显示从{0}条数据到{1}条数据，共{2}条数据',
			emptyMsg : "数据为空"
		})
	});
};
Ext.extend(EleBankEditGrid, Ext.grid.GridPanel, {
/*Ext.PanelEditor*/
});
Ext.reg('EleBankEditGrid', EleBankEditGrid);