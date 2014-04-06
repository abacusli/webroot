[ {
	header : '序号',
	dataIndex : 'id',
	sortable : false,
	editable : false,
	width : 60
}, {
	header : '区划编码',
	dataIndex : 'code',
	editable : true,
	editor : {
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
		value : 30,
		forceSelection : true,
		triggerAction : 'all',
		selectOnFocus : true,
		scope : this
	},
	width : 70
}, {
	header : '区划名称',
	dataIndex : 'name',
	width : 120
}, {
	header : '单据编码',
	dataIndex : 'billcode',
	width : 70
}, {
	header : '单据类型',
	dataIndex : 'billtype',
	width : 200
}, {
	header : '预算执行',
	dataIndex : 'yszx',
	align : 'right',
	width : 145
}, {
	header : '平台',
	dataIndex : 'fasp',
	align : 'right',
	width : 145
}, {
	header : '相差金额',
	dataIndex : 'difference',
	align : 'right',
	width : 120
}, {
	header : '对数时间',
	dataIndex : 'date',
	width : 170
}, {
	header : '负责人',
	dataIndex : 'manager',
	width : 60
} ]