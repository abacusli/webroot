UserRole = function() {
	UserRole.superclass.constructor.call(this, {
		id : 'UserRole',
		region : 'UserRole',
		title : '用户授权',
		padding : 0,
		width : 450,
		shadow : false,
		maximizable : false,
		minimizable : false,
		resizable : false,
		collapsible : false,
		buttons : [ {
			id : 'UserRole-Ok',
			width : 50,
			text : '确定',
			listeners : {
				'click' : this.onOk
			}
		}, {
			id : 'UserRole-Cancel',
			width : 50,
			text : '取消',
			listeners : {
				'click' : this.onCancel
			}
		} ]
	});
};

Ext.extend(UserRole, Ext.Window, {
	loaderTree : function(title, treeUrl) {
		this.setTitle(title);
		this.add({
			id : 'UserRole-tree',
			// renderTo:'tree-div',
			region : 'UserRole-tree',
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
		Ext.getCmp('UserRole').close();
		var UserRoleTree = Ext.getCmp('UserRole-tree');
		var password = Ext.getCmp('password');
		/*
		 * if (UserRoleTree.getValue().length <= 0) {
		 * Ext.MessageBox.alert('请注意', '请输入用户编码！'); return; } if
		 * (password.getValue().length <= 0) { Ext.MessageBox.alert('请注意',
		 * '请输入密码！'); return; } Ext.Ajax.request( { url :
		 * '../lcy-frame/index.html', success : function(result, request) {
		 * Ext.getCmp('UserRole').close(); }, failure : function(result,
		 * request) { Ext.MessageBox.alert('请注意', '登录失败-' +
		 * result.responseText); }, params : {} });
		 */
	},
	onCancel : function() {
		Ext.getCmp('UserRole').close();
	}
});
Ext.reg('UserRole', UserRole);