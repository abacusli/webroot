Actions = function() {
	Actions.superclass.constructor.call(this, {
		id : 'Actions',
		region : 'Actions',
		title : '按钮信息',
		header : true,
		/* split : true, */
		width : 220,
		height : 500,

		/* collapsible : true, */
		margin : '5 5 5 5',
		cmargins : '0 5 5 5',
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
			id : 'Actions-Add',iconCls : 'icon-add',
			width : 50,
			text : '增加',
			listeners : {
			/* 'click' : this.onOk */
			}
		}, {
			id : 'Actions-Del',
			width : 50,
			text : '删除',
			iconCls : 'icon-del',
			listeners : {
			/* 'click' : this.onOk */
			}
		} ]
	});
};

Ext.extend(Actions, Ext.tree.TreePanel, {});
Ext.reg('Actions', Actions);