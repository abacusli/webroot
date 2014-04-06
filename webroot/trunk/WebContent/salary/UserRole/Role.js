Role = function() {
	Role.superclass.constructor.call(this, {
		id : 'Role',
		region : 'Role',
		title : '角色信息',
		header : false,
		/* split : true, */
		/* width : 220, */
		height : 80,
		/*border : false,*/
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
		collapseFirst : false
	});
};

Ext.extend(Role, Ext.tree.TreePanel, {});
Ext.reg('Role', Role);