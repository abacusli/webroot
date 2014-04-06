var sm = new Ext.grid.CheckboxSelectionModel( {});
var cm = new Ext.grid.ColumnModel( {
	defaults : {
		width : 120,
		sortable : true
	},
	columns : [ sm, {
		header : '考生号',
		dataIndex : 'ksh',
		width : 130
	}, {
		header : '学号',
		dataIndex : 'xh',
		width : 130
	} ]
});
//cm.defaultSortable = true;

var StudentRecord = Ext.data.Record.create( [ {
	name : 'ksh',
	type : 'string'
}, {
	name : 'xh',
	type : 'string'
} ]);
var store = new Ext.data.Store( {
	proxy : new Ext.data.HttpProxy( {
		url : '../grid/EleBankEditGrid.json'
	}),
	reader : new Ext.data.JsonReader( {
		idProperty : 'id',
		totalProperty : 'results',
		root : 'rows'
	}, StudentRecord)//,remoteSort : true
		});
store.load( {
	params : {
		start : 0,
		limit : 12
	}
});
EleBankEditGrid = function() {
	this.strid = '';
	EleBankEditGrid.superclass.constructor.call(this, {
		id : 'ele-bank-edit-ssgrid',
		renderTo : document.body,// 'ele-bank-edit-grid',
		title : 'ele-bank-edit-grid',
		store : store,
		iconCls : 'icon-grid',
		frame : true,
		sm : sm,
		cm : cm,
		width : 600,
		height : 200,

		viewConfig : {
			forceFit : true
		},
		columnLines : true,
		//region : 'center',
		stripeRows : true,// 实现行颜色交替显示
		/*loadMask : {
			msg : '加载中...'
		},*/
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