RolePanel = function() {
	RolePanel.superclass.constructor.call(this, {
		id : 'RolePanel',
		region : 'RolePanel',
		title : '角色权限',
		header : true,
		/* split : true, */
		/* width : 220, */
		height : 350,
		padding : 5,
		baseCls : "x-plain",

		/* border : 0, */
		/* align:left, */

		/* collapsible : true, */
		/*
		 * margin : '5 5 5 5', cmargins : '0 5 5 5',
		 */
		/* rootVisible : false, */
		/* lines : false, */
		/* animate : true, */
		/*
		 * useArrows : true, autoScroll : true, animate : true, enableDD : true,
		 * containerScroll : true, rootVisible: false, frame: true,
		 * 
		 * lines : false, layout : 'border', autoScroll : true, loader : new
		 * Ext.tree.TreeLoader(), root : new Ext.tree.AsyncTreeNode({ expanded :
		 * true, children : [ { text : 'Menu Option 1', children : [ { text :
		 * 'Menu Option 1', leaf : true }, { text : 'Menu Option 2', leaf : true }, {
		 * text : 'Menu Option 3', leaf : true } ] // leaf: true }, { text :
		 * 'Menu Option 2', leaf : true }, { text : 'Menu Option 3', leaf : true } ]
		 * }), rootVisible : false,
		 * 
		 * root : { nodeType : 'async' }, dataUrl : 'check-nodes1.json', //
		 * dataUrl : 'tree.jsp', collapseFirst : false,
		 */
		items : [ {
			xtype : 'Role'
		}, {
			border : false,
			padding : 2,
			baseCls : "x-plain"
		}, {
			xtype : 'RoleGroup'
		} ],
		tbar : [ {
			id : 'RolePanel-Add',
			iconCls : 'icon-add',
			width : 50,
			text : '增加',
			listeners : {
			/* 'click' : this.onOk */
			}
		}, {
			id : 'RolePanel-Del',
			width : 50,
			text : '删除',
			iconCls : 'icon-del',
			listeners : {
			/* 'click' : this.onOk */
			}
		} ]
	});
};

Ext.extend(RolePanel, Ext.Panel, {});
Ext.reg('RolePanel', RolePanel);