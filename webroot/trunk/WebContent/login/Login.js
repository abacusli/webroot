Login = function() {
	Login.superclass.constructor.call(this, {

		id : 'login',
		region : 'login',

		/* frame: true, */
		/* renderTo : 'login', */
		title : '登录系统',
		padding : 25,
		width : 360,
		/* height : 300, */
		resizable : false,
		items : [ {
			baseCls : "x-plain",
			labelWidth : 80,
			layout : 'form',
			padding : 5,
			plain : true,
			items : [ {
				xtype : 'fieldset',
				title : '登陆信息',
				defaultType : 'textfield',
				items : [ {
					id : 'code',
					xtype : 'textfield',
					fieldLabel : '用户编码',
					emptyText : '请输入用户编码',
					width : 150,
					listeners : {
						'blur' : this.onBlur
					}
				}, {
					id : 'password',
					xtype : 'textfield',
					fieldLabel : '密码',
					inputType : "password",
					width : 150
				} ]
			} ]
		} ],
		fbar : [ {
			id : 'login-ok',
			width : 50,
			text : '确定',
			listeners : {
				'click' : this.onOk
			}
		}, {
			id : 'login-reset',
			width : 50,
			text : '重置',
			listeners : {
				'click' : this.onReset
			}
		}, {
			id : 'login-cancel',
			width : 50,
			text : '取消',
			listeners : {
				'click' : this.onCancel
			}
		} ]
	});
};

Ext.extend(Login, Ext.Window, {// Window Panel
	onReset : function() {
		var code = Ext.getCmp('code');
		code.setDisabled(false);
		code.setValue('');
		var password = Ext.getCmp('password');
		password.setValue('');
	},
	onBlur : function() {
		var code = Ext.getCmp('code');
		if (code.getValue().length > 0) {
			Ext.Ajax.request({
				url : 'Login.jsp',
				success : function(result, request) {
					code.setValue(result.responseText.trim());
					code.setDisabled(true);
				},
				failure : function(result, request) {
					Ext.MessageBox.alert('信息提示', result.responseText);
					code.setValue('');
				},
				params : {
					action : 'checkUsername',
					code : code.getValue()
				}
			});
		} else {
			code.emptyText = '请输入用户编码';
		}
	},
	onOk : function() {
		var code = Ext.getCmp('code');
		var password = Ext.getCmp('password');
		if (code.getValue().length <= 0) {
			Ext.MessageBox.alert('信息提示', '请输入用户编码！');
			return;
		}
		if (password.getValue().length <= 0) {
			Ext.MessageBox.alert('信息提示', '请输入密码！');
			return;
		}
		Ext.Ajax.request({
			url : 'Login.jsp?',
			success : function(result, request) {
				Ext.getCmp('login').close();
				var role = new Role();
				role.loaderTree('选择角色', '../role/role.jsp?userid=' + result.responseText);
				role.show();
			},
			failure : function(result, request) {
				Ext.MessageBox.alert('信息提示', '登录失败-' + result.responseText);
			},
			params : {
				action : 'login',
				code : code.getValue(),
				password : password.getValue()
			}
		});
	},
	onCancel : function() {
		Ext.getCmp('login').close();
		// window.close();
	}
});
Ext.reg('login', Login);
