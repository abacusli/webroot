Organization = function() {
	Organization.superclass.constructor.call(this, {
		id : 'Organization',
		region : 'Organization',
		title : '机构权限',
		header : true,
		/* split : true, */
		/* width : 220, */
		height : 350,
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
		tbar : [
				'机构类型：',
				{
					name : 'organizationType',
					xtype : 'combo',
					width : 365,
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
				} /*
					 * , { id : 'Organization-Add', iconCls : 'icon-add', width :
					 * 50, text : '增加', listeners : { 'click' : this.onOk } }, {
					 * id : 'Organization-Del', width : 50, text : '删除', iconCls :
					 * 'icon-del', listeners : { 'click' : this.onOk } }
					 */]
	});
};

Ext.extend(Organization, Ext.tree.TreePanel, {});
Ext.reg('Organization', Organization);