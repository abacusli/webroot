RoleGroup = function() {
	RoleGroup.superclass.constructor.call(this, {
		/* id : 'RoleGroup', */
		region : 'RoleGroup',
		/* title : '角色权限组', */
		header : false,
		/* margins:'5 0 0 0', */
		layout : 'fit',
		/* split : true, */
		/* width : 220, */
		height : 230,
		/* border : false, */
		/* baseCls : "x-plain", */
		/* align:left, */

		/* collapsible : true, */
		/*
		 * margin : '5 5 5 5', cmargins : '0 5 5 5',
		 */
		/* rootVisible : false, */
		lines : false,
		/* animate : true, */
		useArrows : true,
		autoScroll : true,
		animate : true,
		enableDD : true,
		containerScroll : true,
		/* rootVisible: false, */
		/* frame: true, */

		lines : false,
		/* layout : 'border', */
		autoScroll : true,
		loader : new Ext.tree.TreeLoader(),
		root : new Ext.tree.AsyncTreeNode({
			expanded : true,
			children : [ {
				text : 'Menu Option 1',
				children : [ {
					text : 'Menu Option 1',
					leaf : true
				}, {
					text : 'Menu Option 2',
					leaf : true
				}, {
					text : 'Menu Option 3',
					leaf : true
				} ]
			// leaf: true
			}, {
				text : 'Menu Option 2',
				leaf : true
			}, {
				text : 'Menu Option 3',
				leaf : true
			} ]
		}),
		rootVisible : false,
		/*
		 * root : { nodeType : 'async' }, dataUrl : 'check-nodes1.json',
		 */
		// dataUrl : 'tree.jsp',
		collapseFirst : false,

		tbar : [ {
			xtype : 'textfield',
			name : 'RoleGroupName',
			width : 368
		}, {
			id : 'RoleGroup-Select',
			width : 50,
			text : '选择',
			iconCls : 'icon-sel',
			listeners : {
			/* 'click' : this.onOk */
			}
		} /*
			 * { id : 'RoleGroup-Add', iconCls : 'icon-add', width : 50, text :
			 * '增加', listeners : { 'click' : this.onOk } }, { id :
			 * 'RoleGroup-Del', width : 50, text : '删除', iconCls : 'icon-del',
			 * listeners : { 'click' : this.onOk } }
			 */]

	});
};

Ext.extend(RoleGroup, Ext.tree.TreePanel, {});
Ext.reg('RoleGroup', RoleGroup);