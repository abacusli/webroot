FormConnConfig = function() {
	this.strid = '';//{7FF868A1-E015-43B0-8DE6-B3416942A44F}
	FormConnConfig.superclass.constructor.call(this, {
		baseCls : "x-plain",
		padding : '10 10 10 10',
		plain : true,
		items : [
				{
					xtype : 'fieldset',
					title : '数据库信息',
					collapsible : true,
					autoHeight : true,
					labelWidth : 80,
					width : 390,
					defaults : {
						width : 280
					},
					defaultType : 'textfield',
					items : [
							{
								xtype : 'textfield',
								name : 'code',
								allowBlank : false,
								fieldLabel : '编码'
							},
							{
								xtype : 'combo',
								name : 'type',
								allowBlank : false,
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
								allowBlank : false,
								forceSelection : true,
								triggerAction : 'all',
								selectOnFocus : true
							}, {
								xtype : 'textfield',
								name : 'ip',
								allowBlank : false,
								fieldLabel : 'IP地址'
							}, {
								xtype : 'textfield',
								name : 'dbname',
								allowBlank : false,
								fieldLabel : '数据库名称'
							}, {
								xtype : 'textfield',
								name : 'port',
								allowBlank : false,
								fieldLabel : '端口'
							}, {
								xtype : 'textfield',
								name : 'name',
								allowBlank : false,
								fieldLabel : '用户名'
							}, {
								xtype : 'textfield',
								name : 'password',
								allowBlank : false,
								fieldLabel : '密码',
								inputType : "password"
							} ]
				}, {
					xtype : 'fieldset',
					title : '业务服务信息',
					collapsible : true,
					autoHeight : true,
					width : 390,
					labelWidth : 80,
					defaults : {
						width : 280
					},
					defaultType : 'textfield',
					items : [ {
						name : 'manager',
						allowBlank : false,
						fieldLabel : '负责人'
					}, {
						xtype : 'combo',
						name : 'systemType',
						allowBlank : false,
						fieldLabel : '系统类型',
						store : new Ext.data.ArrayStore( {
							autoDestroy : true,
							fields : [ 'initials', 'system-type' ],
							autoLoad : true,
							url : '../autoconn-config/data.jsp'
						}),
						displayField : 'system-type',
						typeAhead : true,
						mode : 'local',
						forceSelection : true,
						triggerAction : 'all',
						selectOnFocus : true
					}, {
						name : 'accessAddress',
						allowBlank : false,
						fieldLabel : '访问地址'
					}, {
						xtype : 'radiogroup',
						name : 'enable',
						allowBlank : false,
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
				} ],
		buttons : [ {
			width : 50,
			text : '确定',
			listeners : {
				'click' : this.onOk
			}
		}, {
			width : 50,
			text : '取消',
			listeners : {
				'click' : this.onCancel
			}
		}, '-', '-', '-', '-', '-', '-', '-', '-' ]
	});
};

Ext.extend(FormConnConfig, Ext.form.FormPanel, {
	onOk : function() {
		var form = this.findParentByType('formconnconfig');
		if (form.form.isValid()) {
			var s = '';
			Ext.iterate(form.form.getValues(), function(key, value) {
				s += String.format("{0}={1}&", key, value);
			}, this);
			s = s + 'action=add&strid=' + form.strid;
			Ext.Ajax.request( {
				url : '../jsp/FormConnConfig.jsp',
				success : function(result, request) {
					Ext.MessageBox.alert('请注意', '增加成功！' + result.responseText);
				},
				failure : function(result, request) {
					Ext.MessageBox.alert('请注意', '增加失败-' + result.responseText);
				},
				params : s
			});
		}
	},
	onCancel : function() {
		this.findParentByType('window').close()
	}
});
Ext.reg('formconnconfig', FormConnConfig);
