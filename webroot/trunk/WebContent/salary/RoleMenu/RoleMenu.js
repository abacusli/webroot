RoleMenu = function() {
	RoleMenu.superclass.constructor.call(this, {
		id : 'RoleMenu',
		region : 'RoleMenu',
		title : '角色授权',
		padding : 3,
		/*
		 * minWidth : 400, minHeight : 300,
		 */
		width : 912,
		/* height : 400, */

		layout : 'table',
		defaults : {
			// applied to each contained panelpadding
			bodyStyle : 'padding:5px'

		},
		layoutConfig : {
			// The total column count must be specified here
			columns : 7
		},

		shadow : false,
		maximizable : false,
		minimizable : false,
		resizable : false,
		/* layout : 'toolbar', *//* column toolbar */
		collapsible : false,
		items : [ {
			xtype : 'Roles'
		}, {
			border : false,
			padding : 2,
			baseCls : "x-plain"
		}, {
			xtype : 'Menus'
		}, {
			border : false,
			padding : 2,
			baseCls : "x-plain"
		}, {
			xtype : 'Modules'
		}, {
			border : false,
			padding : 2,
			baseCls : "x-plain"
		}, {
			xtype : 'Actions'
		} ],
		buttons : [ {
			id : 'RoleMenu-Ok',
			width : 50,
			text : '确定',
			listeners : {
				'click' : this.onOk
			}
		}, {
			id : 'RoleMenu-Cancel',
			width : 50,
			text : '取消',
			listeners : {
				'click' : this.onCancel
			}
		} ]
	});
};

Ext.extend(RoleMenu, Ext.Window, {
	loaderTree : function(title, treeUrl) {
		this.setTitle(title);
		this.add({
			id : 'RoleMenu-tree',
			// renderTo:'tree-div',
			region : 'RoleMenu-tree',
			header : false,
			split : true,
			width : 280,
			height : 300,
			minSize : 150,
			maxSize : 350,
			collapsible : true,
			plain : true,
			baseCls : 'x-plain',
			rootVisible : false,
			lines : false,
			animate : true,
			lines : false,
			autoScroll : true,
			root : {
				nodeType : 'async'
			},
			dataUrl : treeUrl,
			xtype : 'treepanel',
			collapseFirst : false
		});
	},
	onOk : function() {
		window.open('../../lcy-frame/index.html', '_self');
		Ext.getCmp('RoleMenu').close();
		var RoleMenuTree = Ext.getCmp('RoleMenu-tree');
		var password = Ext.getCmp('password');
		/*
		 * if (RoleMenuTree.getValue().length <= 0) {
		 * Ext.MessageBox.alert('请注意', '请输入用户编码！'); return; } if
		 * (password.getValue().length <= 0) { Ext.MessageBox.alert('请注意',
		 * '请输入密码！'); return; } Ext.Ajax.request( { url :
		 * '../lcy-frame/index.html', success : function(result, request) {
		 * Ext.getCmp('RoleMenu').close(); }, failure : function(result,
		 * request) { Ext.MessageBox.alert('请注意', '登录失败-' +
		 * result.responseText); }, params : {} });
		 */
	},
	onCancel : function() {
		Ext.getCmp('RoleMenu').close();
	}
});
Ext.reg('RoleMenu', RoleMenu);