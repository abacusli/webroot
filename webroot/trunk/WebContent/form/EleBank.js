EleBank = function() {
	this.strid = '';
	EleBank.superclass.constructor.call(this, {
		baseCls : "x-plain",
		padding : '10 10 10 10',
		plain : true,
		items : [ {
			xtype : 'fieldset',
			title : '基础信息',
			collapsible : true,
			autoHeight : true,
			labelWidth : 80,
			width : 390,
			defaults : {
				width : 280
			},
			defaultType : 'textfield',
			items : [ {
				name : 'code',
				fieldLabel : '显示编码'
			}, {
				name : 'name',
				fieldLabel : '显示名称'
			}, {
				name : 'parent_code',
				fieldLabel : '上级编码'
			}, {
				name : 'manager',
				fieldLabel : '负责人'
			}, {
				xtype : 'radiogroup',
				fieldLabel : '是否启用',
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
		fbar : [ {
			text : '确定',
			listeners : {
				'click' : this.onOk
			}
		}, {
			text : '取消',
			listeners : {
				'click' : this.onCancel
			}
		} ]
	});
};
Ext.extend(EleBank, Ext.form.FormPanel, {
	onOk : function() {
		var form = this.findParentByType('EleBank');
		if (form.form.isValid()) {
			var s = '';
			Ext.iterate(form.form.getValues(), function(key, value) {
				s += String.format("{0}={1}&", key, value);
			}, this);
			s = s + 'action=add&strid=' + form.strid;
			Ext.Ajax.request( {
				url : '../jsp/EleBank.jsp',
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
Ext.reg('EleBank', EleBank);