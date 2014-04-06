WConnConfig = function() {
	this.appFactorId = '';
	WConnConfig.superclass.constructor.call(this, {
		id : 'w-conn-config',
		title : '系统信息配置',
		width : 400,
		resizable : false,
		collapsible : true,
		autoHeight : true,
		shadow : false,
		items : [ {
			baseCls : "x-plain",
			layout : 'form',
			padding : '5 5 0 5',
			plain : true,
			items : [
					{
						id : 'w-conn-config-dbinfo',
						xtype : 'fieldset',
						title : '数据库信息',
						collapsible : true,
						autoHeight : true,
						labelWidth : 80,
						defaults : {
							width : 265
						},
						defaultType : 'textfield',
						items : [
								{
									id : 'w-conn-config-code',
									xtype : 'textfield',
									fieldLabel : '编码'
								},
								{
									id : 'w-conn-config-type',
									xtype : 'combo',
									fieldLabel : '数据库类型',
									store : new Ext.data.ArrayStore( {
										autoDestroy : true,
										fields : [ 'initials', 'fullname' ],
										data : [ [ 'OR', 'Oracle' ],
												[ 'MY', 'MySQL' ],
												[ 'SQ', 'SQL Server 2000' ] ]
									}),
									displayField : 'fullname',
									typeAhead : true,
									mode : 'local',
									forceSelection : true,
									triggerAction : 'all',
									selectOnFocus : true
								}, {
									id : 'w-conn-config-ip',
									xtype : 'textfield',
									fieldLabel : 'IP地址'
								}, {
									id : 'w-conn-config-dbname',
									xtype : 'textfield',
									fieldLabel : '数据库名称'
								}, {
									id : 'w-conn-config-port',
									xtype : 'textfield',
									fieldLabel : '端口'
								}, {
									id : 'w-conn-config-name',
									xtype : 'textfield',
									fieldLabel : '用户名'
								}, {
									id : 'w-conn-config-password',
									xtype : 'textfield',
									fieldLabel : '密码',
									inputType : "password"
								} ]
					}, {
						id : 'w-conn-config-more',
						xtype : 'fieldset',
						title : '业务服务信息',
						collapsible : true,
						autoHeight : true,
						labelWidth : 80,
						defaults : {
							width : 265
						},
						defaultType : 'textfield',
						items : [ {
							id : 'w-conn-config-manager',
							fieldLabel : '负责人'
						}, {
							id : 'w-conn-config-system-type',
							xtype : 'combo',
							fieldLabel : '系统类型',
							store : new Ext.data.ArrayStore( {
								autoDestroy : true,
								fields : [ 'initials', 'system-type' ],
								autoLoad : true,
								url : '../conn-config/data.jsp'
							}),
							displayField : 'system-type',
							typeAhead : true,
							mode : 'local',
							forceSelection : true,
							triggerAction : 'all',
							selectOnFocus : true
						}, {
							id : 'w-conn-config-access-address',
							fieldLabel : '访问地址'
						}, {
							id : 'w-conn-config-enable',
							xtype : 'radiogroup',
							fieldLabel : '是否启用',
							width : 205,
							items : [ {
								boxLabel : '是',
								inputValue : "2",
								name : "radio",
								checked : true
							}, {
								boxLabel : '否',
								name : "radio",
								inputValue : "1"
							} ]
						} ]
					} ]
		} ],
		fbar : [ {
			id : 'w-conn-config-ok',
			width : 50,
			text : '确定',
			listeners : {
				'click' : this.onOk
			}
		}, {
			id : 'w-conn-config-cancel',
			width : 50,
			text : '取消',
			listeners : {
				'click' : this.onCancel
			}
		}, '-', '-', '-', '-' ]
	});
};

Ext.extend(WConnConfig, Ext.Window, {
	onOk : function() {
		var appFactorId = Ext.getCmp('w-conn-config').appFactorId;
		var code = Ext.getCmp('w-conn-config-code');
		var type = Ext.getCmp('w-conn-config-type');
		var ip = Ext.getCmp('w-conn-config-ip');
		var dbname = Ext.getCmp('w-conn-config-dbname');
		var name = Ext.getCmp('w-conn-config-name');
		var password = Ext.getCmp('w-conn-config-password');
		var manager = Ext.getCmp('w-conn-config-manager');
		var systemType = Ext.getCmp('w-conn-config-system-type');
		var accessAddress = Ext.getCmp('w-conn-config-access-address');
		var enable = Ext.getCmp('w-conn-config-enable').getValue()
				.getGroupValue();
		if (code.getValue().length <= 0) {
			Ext.MessageBox.alert('请注意', code.fieldLabel + ':是必输项！');
			return;
		}
		if (type.getValue().length <= 0) {
			Ext.MessageBox.alert('请注意', type.fieldLabel + ':是必输项！');
			return;
		}
		if (ip.getValue().length <= 0) {
			Ext.MessageBox.alert('请注意', ip.fieldLabel + ':是必输项！');
			return;
		}
		if (dbname.getValue().length <= 0) {
			Ext.MessageBox.alert('请注意', dbname.fieldLabel + ':是必输项！');
			return;
		}
		if (name.getValue().length <= 0) {
			Ext.MessageBox.alert('请注意', name.fieldLabel + ':是必输项！');
			return;
		}
		if (password.getValue().length <= 0) {
			Ext.MessageBox.alert('请注意', password.fieldLabel + ':是必输项！');
			return;
		}
		if (manager.getValue().length <= 0) {
			Ext.MessageBox.alert('请注意', manager.fieldLabel + ':是必输项！');
			return;
		}
		if (systemType.getValue().length <= 0) {
			Ext.MessageBox.alert('请注意', systemType.fieldLabel + ':是必输项！');
			return;
		}
		if (accessAddress.getValue().length <= 0) {
			Ext.MessageBox.alert('请注意', accessAddress.fieldLabel + ':是必输项！');
			return;
		}
		Ext.Ajax.request( {
			url : 'WConnConfig.jsp?',
			success : function(result, request) {
				Ext.MessageBox.alert('请注意', '增加成功！' + result.responseText);
			},
			failure : function(result, request) {
				Ext.MessageBox.alert('请注意', '增加失败-' + result.responseText);
			},
			params : {
				action : 'w-conn-config-add',
				appFactorId : appFactorId,
				code : code.getValue(),
				type : type.getValue(),
				ip : ip.getValue(),
				dbname : dbname.getValue(),
				name : name.getValue(),
				password : password.getValue(),
				manager : manager.getValue(),
				systemType : systemType.getValue(),
				accessAddress : accessAddress.getValue(),
				enable : enable
			}
		});
	},
	onCancel : function() {
		Ext.getCmp('w-conn-config').close();
	}
});
Ext.reg('w-conn-config', WConnConfig);
