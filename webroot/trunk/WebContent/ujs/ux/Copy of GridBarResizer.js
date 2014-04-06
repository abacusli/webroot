Ext.ux.GridBarResizer = Ext.extend(Object, {
	init : function(gpanel) {
		this.gpanel = gpanel;
		this.config(gpanel);
	},
	config : function(gpanel) {
		gpanel.getTopToolbar().addButton( {
			text : '增加',
			iconCls : 'icon-add',
			scope : this,
			listeners : {
				'click' : function(bt, e) {
					alert(bt.text);
					alert(gpanel.title);
				}
			}
		});
		gpanel.getTopToolbar().addButton( {
			text : '修改',
			iconCls : 'icon-mod',
			scope : this,
			handler : this.onGClickAdd(gpanel)
		});
		gpanel.getTopToolbar().addButton( {
			text : '删除',
			iconCls : 'icon-del',
			scope : this,
			handler : this.onGClickAdd(gpanel)
		});
		gpanel.getTopToolbar().addSeparator()
		gpanel.getTopToolbar().addButton( {
			text : '导入',
			iconCls : 'icon-imp',
			scope : this,
			listeners : {
				'click' : this.onGClickAdd
			}
		});
		gpanel.getTopToolbar().addButton( {
			text : '导出',
			iconCls : 'icon-exp',
			scope : this,
			listeners : {
				'click' : this.onGClickAdd
			}
		});
		gpanel.getTopToolbar().addSeparator()
		gpanel.getTopToolbar().addButton( {
			text : '打印',
			iconCls : 'icon-print',
			scope : this,
			listeners : {
				'click' : this.onGClickAdd
			}
		});
		gpanel.getTopToolbar().addSeparator()
		gpanel.getTopToolbar().addButton( {
			text : '查找',
			iconCls : 'icon-find',
			scope : this,
			listeners : {
				'click' : this.onClickFind
			}
		});
	},
	onClickFind : function() {
		alert(this.text);
		alert(gpanel.title);
	},
	onGClickAdd : function(gpanel) {
		//alert(this.text);
		alert(gpanel.title);
	},
	destroy : function() {
		Ext.destroy(this.gpanel);
		delete this.gpanel;
	}
});

Ext.preg('Ext.ux.GridBarResizer', Ext.ux.GridBarResizer);