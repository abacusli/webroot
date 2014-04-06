Ext.ux.PageComboResizer = Ext.extend(Object, {
	labelComboBefore : '每页显示',
	labelComboAfter : '条记录',
	constructor : function(config) {
		Ext.apply(this, config || {});
	},
	init : function(ptbar) {
		this.ptbar = ptbar;
		this.add(ptbar);
	},
	add : function(ptbar) {
		ptbar.insert(11, '-');
		ptbar.insert(12, this.labelComboBefore);
		ptbar.insert(13, {
			xtype : 'combo',
			name : 'pageSize',
			width : 50,
			store : new Ext.data.ArrayStore( {
				autoDestroy : true,
				fields : [ 'initials', 'pageSize' ],
				autoLoad : true,
				url : '../ujs/ux/PageComboResizer.json'
			}),
			displayField : 'pageSize',
			typeAhead : true,
			mode : 'local',
			value : ptbar.pageSize,
			forceSelection : true,
			triggerAction : 'all',
			selectOnFocus : true,
			scope : this,
			listeners : {
				'change' : function(combo, newValue, oldValue) {
					var size = newValue + '';
					if (size == '全部') {
						ptbar.pageSize = ptbar.store.getTotalCount();
					} else {
						ptbar.pageSize = new Number(newValue);
					}
					var p = new Number(ptbar.get(4).getValue());
					var c = new Number(oldValue) * (p - 1)
					var start = c - c % ptbar.pageSize;
					ptbar.store.load( {
						params : {
							start : start,
							limit : ptbar.pageSize
						}
					});
				}
			}
		});
		ptbar.insert(14, this.labelComboAfter);
	},
	destroy : function() {
		Ext.destroy(this.ptbar);
		delete this.ptbar;
	}
});

Ext.preg('Ext.ux.PageComboResizer', Ext.ux.PageComboResizer);