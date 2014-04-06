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
			iconCls : 'icon-mod',listeners : {
				'click' : this.onClickMod
			}
		}, '-', {
			text : '删除',
			iconCls : 'icon-del'
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
		} ],
		items : [ {
			id : 'document',
			title : '首页',
			//xtype : 'DColsGrid',// DColsGrid//core1.jsp
			/*para : 'para',
			autoLoad : {
				url : '../ujs/dcolsgrid/columns.json'
			},*/
			autoScroll : true
		} ]
	});
};
Ext.extend(FrameCenter, Ext.TabPanel, {

	loadClass : function(node, frameDate) {
		var id = node.id + ' ' + frameDate;
		var tab = this.getComponent(id);
		if (tab) {
			this.setActiveTab(tab);
		} else {
			var autoLoad = {
				url : node.attributes.href + '&date=' + frameDate
			};
			var p = this.add(new DsGrid/*Ext.Panel*/( {
				id : node.id + ' ' + frameDate,
				//id : node.text + ' ' + frameDate,
				title : node.text + ' ' + frameDate,
				/*autoLoad : autoLoad,*/
				//xtype : 'DsGrid',
				closable : true,
				autoScroll : true
			//,
					}));
			this.setActiveTab(p);
		}
	},
	onClickAdd : function(a, b) {
		//alert("");
		var roleMenu = new RoleMenu();
	
		roleMenu.show();
	},
	onClickMod : function(a, b) {
		var ur = new UserRole();
		var urtabp = new UserRoleTabPanel();
		var us = new User();
		var rop = new RolePanel();
		var org = new Organization();
		var gr = new Group();
		urtabp.add(us);
		urtabp.add(org);
		urtabp.add(gr);
		urtabp.add(rop);
		ur.add(urtabp);
		ur.show();
	}
});

Ext.reg('framecenter', FrameCenter);