Ext.ux.GridBarResizer = Ext.extend(Object, {
	init : function(gpanel) {
		this.gpanel = gpanel;
		this.config(gpanel);
	},
	config : function(gpanel) {
		var btFind = new Ext.Button( {
			text : '查询',
			iconCls : 'icon-find'
		});
		gpanel.getTopToolbar().addButton(btFind);
		var combo = new Ext.form.ComboBox( {
			name : 'manager',
			fieldLabel : '负责人',
			width : 200,
			store : new Ext.data.ArrayStore( {
				autoDestroy : true,
				fields : [ 'initials', 'manager' ],
				autoLoad : true,
				url : '../ujs/ux/FindComboResizer.json'
			}),
			displayField : 'manager',
			typeAhead : true,
			mode : 'local',
			value : '全部',
			forceSelection : true,
			triggerAction : 'all',
			selectOnFocus : true,
			scope : this
		});
		btFind.on('click', function() {
			var wds = new Ext.Window( {
				width : 300,
				title : '查询',
				resizable : false,
				padding : '10 2 10 2',
				collapsible : true,
				autoHeight : true,
				shadow : false,
				fbar : [ {
					text : '确定',
					listeners : {
						'click' : function() {
							var manager = combo.getValue();
							if (manager == '全部') {
								manager = '';
							}
							gpanel.store.on("beforeload", function(thiz, options) {
								thiz.baseParams["manager"] = manager;
							});
							gpanel.getBottomToolbar().store.load( {
								params : {
									start : 0,
									limit : gpanel.getBottomToolbar().pageSize
								}
							});
							wds.hide();
						}
					}
				}, {
					text : '取消',
					listeners : {
						'click' : function() {
							wds.hide();
						}
					}
				} ]
			});
			wds.add( {
				xtype : 'form',
				labelWidth : 80,
				defaults : {
					width : 175
				},
				baseCls : "x-plain",
				items : [ combo ]
			});
			wds.show();
		});
	},
	destroy : function() {
		Ext.destroy(this.gpanel);
		delete this.gpanel;
	}
});

Ext.preg('Ext.ux.GridBarResizer', Ext.ux.GridBarResizer);