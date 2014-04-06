User = function() {
	User.superclass.constructor.call(this, {
		id : 'User',
		region : 'User',
		title : '用户信息',
		labelWidth : 100,
		padding : 5,
		height : 350,
		baseCls : "x-plain",
		items : [
				{
					xtype : 'fieldset',
					collapsible : true,
					title : '基本信息',
					autoHeight : true,
					defaults : {
						width : 280
					},
					defaultType : 'textfield',
					items : [ {
						fieldLabel : '姓名',
						name : 'name',
						allowBlank : false
					}, {
						fieldLabel : '密码',
						name : 'password',
						allowBlank : false,
						inputType : "password"
					}, {
						fieldLabel : '性别',
						name : 'sex'
					}, {
						fieldLabel : '电子信箱',
						name : 'email',
						vtype : 'email'
					}, {
						fieldLabel : '是否启用',
						name : 'used',
						xtype : 'checkbox',
						allowBlank : false
					} ]
				},
				{
					xtype : 'fieldset',
					title : '组织机构',
					collapsible : true,
					autoHeight : true,
					defaults : {
						width : 280
					},
					defaultType : 'textfield',
					items : [
							{
								fieldLabel : '机构类型',
								hiddenName : 'state',
								name : 'organizationType',
								xtype : 'combo',
								store : new Ext.data.ArrayStore({
									fields : [ 'abbr', 'state' ],
									data : [ [ 'AL', 'Alabama', 'The Heart of Dixie' ],
											[ 'AK', 'Alaska', 'The Land of the Midnight Sun' ],
											[ 'AZ', 'Arizona', 'The Grand Canyon State' ],
											[ 'AR', 'Arkansas', 'The Natural State' ] ]
								// from states.js
								}),
								valueField : 'abbr',
								displayField : 'state',
								typeAhead : true,
								mode : 'local',
								triggerAction : 'all',
								emptyText : 'Select a state...',
								selectOnFocus : true
							}, {
								fieldLabel : '机构编码',
								name : 'organizationCode'
							}, {
								fieldLabel : '机构名称',
								name : 'organizationName'
							} ]
				}, {
					xtype : 'fieldset',
					title : '联系方式',
					collapsible : true,
					autoHeight : true,
					collapsed : true,
					defaults : {
						width : 280
					},
					defaultType : 'textfield',
					items : [ {
						fieldLabel : '手机号',
						name : 'telephone',
						xtype : 'numberfield'
					}, {
						fieldLabel : '办公电话',
						name : 'businessTelephone'
					}, {
						fieldLabel : '家庭电话',
						name : 'homeTelephone'
					}, {
						fieldLabel : '传真',
						name : 'fax',
						xtype : 'numberfield'
					}, {
						fieldLabel : 'QQ',
						name : 'qq',
						xtype : 'numberfield'
					} ]
				} ]
	});
};
Ext.extend(User, Ext.FormPanel, {});
Ext.reg('User', User);