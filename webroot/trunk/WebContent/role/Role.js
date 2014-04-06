Role = function() {
	Role.superclass.constructor.call(this, {
		id : 'role',
		region : 'role',
		//renderTo:'tree-div',
		title : '角色信息',
		width : 280,
		height:300,
		minHeight : 150,
		collapsible : true,
		buttons : [ {
			id : 'role-ok',
			width : 50,
			text : '确定',
			listeners : {
				'click' : this.onOk
			}
		}, {
			id : 'role-cancel',
			width : 50,
			text : '取消',
			listeners : {
				'click' : this.onCancel
			}
		} ]
	});
};

Ext.extend(Role, Ext.Window, {
	loaderTree : function(title, treeUrl) {
		this.setTitle(title);
		this.add( {
			id : 'role-tree',
			//renderTo:'tree-div',
			region : 'role-tree',
			header : false,
			split : true,
			width : 280,
			height:300,
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
		window.open('../lcy-frame/index.html', '_self');
		Ext.getCmp('role').close();
		var roleTree = Ext.getCmp('role-tree');
		var password = Ext.getCmp('password');
		/*
		 * if (roleTree.getValue().length <= 0) {
			Ext.MessageBox.alert('请注意', '请输入用户编码！');
			return;
		}
		if (password.getValue().length <= 0) {
			Ext.MessageBox.alert('请注意', '请输入密码！');
			return;
		}
		Ext.Ajax.request( {
			url : '../lcy-frame/index.html',
			success : function(result, request) {
				Ext.getCmp('role').close();
			},
			failure : function(result, request) {
				Ext.MessageBox.alert('请注意', '登录失败-' + result.responseText);
			},
			params : {}
		});*/
	},
	onCancel : function() {
		Ext.getCmp('role').close();
	}
});
Ext.reg('role', Role);