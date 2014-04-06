FrameCenter = function() {
	FrameCenter.superclass.constructor.call(this, {
		id : 'center',
		region : 'center',
		margins : '0 0 5 0',
		//resizeTabs: true,
		//minTabWidth: 135,
		//tabWidth: 135,
		plugins : new Ext.ux.TabCloseMenu(),
		deferredRender : false,
		enableTabScroll : true,
		autoScroll : true,
		activeTab : 0,
		tbar : [ {
			text : '增加',
			iconCls : 'icon-add',
			listeners : {
				'click' : this.onClickAdd
			}
		}, '-', {
			text : '修改',
			iconCls : 'icon-mod',
			listeners : {
				'click' : this.onClickMod
			}
		}, '-', {
			text : '删除',
			iconCls : 'icon-del',
			listeners : {
				'click' : this.onClickDel
			}
		}, '-', {
			text : '导入',
			iconCls : 'icon-imp'
		}, '-', {
			text : '导出',
			scope : this,
			iconCls : 'icon-exp'
		}, '-', {
			text : '打印',
			scope : this,
			iconCls : 'icon-print'
		}, '-', {
			text : '查找',
			scope : this,
			iconCls : 'icon-find'
		}, '-', {
			text : '刷新',
			iconCls : 'icon-refresh',
			listeners : {
				'click' : this.onClickRefresh
			}
		}, '-', {
			text : '报表',
			scope : this,
			iconCls : 'icon-report'
		} ],
		items : [ {
			id : 'core',
			title : '首页',
			/*xtype : 'EleDataGrig',*/
			autoLoad : {
				url : 'core.jsp'
			},
			autoScroll : true
		} ]
	});
};
Ext.extend(FrameCenter, Ext.TabPanel, {
	loadClass : function(node, frameDate) {
		var id = node.id;
		var tab = this.getComponent(id);
		if (tab) {
			this.setActiveTab(tab);
		} else {
			var autoLoad = {
				url : 'core.jsp?strid='
						+ node.id.substring(0, node.id.indexOf(' ')) + '&date='
						+ frameDate
			};
			var id = node.id;
			var strid = id.substring(0, id.indexOf(' '));
			var panl = new EleDataGrig /*EleBankEditGrid EleDataGrig*/( {
				id : node.id,
				title : node.text.substring(0, node.text.indexOf(' ')),
				//autoLoad : autoLoad,
				store : {
					proxy : new Ext.data.HttpProxy( {
						url : '../grid/EleBankEditGrid.jsp?strid=' + strid
					})
				},
				closable : true,
				autoScroll : true
			/*,
							items : [ {
								xtype : 'EleBankEditGrid'
							} ]*/
			});
			/*panl.id = node.id;
			panl.title = node.text.substring(0, node.text.indexOf(' '));*/
			var p = this.add(panl);
			this.setActiveTab(p);
		}
	},
	onClickAdd : function(a, b) {
		var id = Ext.getCmp('center').getActiveTab().id;
		//alert(id);
	var title = Ext.getCmp('center').getActiveTab().title;
	var strid = id.substring(0, id.indexOf(' '));
	var xtype = id.substring(id.indexOf(' ') + 1).trim();
	//alert(xtype);
	var windows = new Ext.Window( {
		width : 425,
		title : '',
		resizable : false,
		collapsible : true,
		autoHeight : true,
		shadow : false
	});
	windows.title = title;
	windows.add( {
		xtype : xtype
	});
	windows.show();
	var forms = windows.findByType(xtype);
	forms[0].strid = strid;
},
onClickMod : function(a, b) {
},
onClickDel : function(a, b) {
},
onClickRefresh : function(a, b) {
}
});

Ext.reg('framecenter', FrameCenter);