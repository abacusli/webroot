EleDataGrig = Ext
		.extend(
				Ext.grid.GridPanel,
				{
					store : null,
					constructor : function(_config) {
						if (_config == null) {
							_config = {};
						}
						Ext.apply(this, _config);
						var sm = new Ext.grid.CheckboxSelectionModel( {
						//singleSelect : false,
								//header : ""
								});
						var cm = new Ext.grid.ColumnModel( {
							defaults : {
								width : 100,
								sortable : true
							},
							columns : [ sm, {
								header : '序号',
								dataIndex : 'id',
								width : 30
							}, {
								header : '显示编码',
								dataIndex : 'code',
								width : 50
							}, {
								header : '显示名称',
								dataIndex : 'name',
								width : 130
							}, {
								header : '显示级次',
								dataIndex : 'levelNumber',
								width : 130
							}, {
								header : '是否启用',
								dataIndex : 'isValid',
								width : 130
							} ]
						});
						cm.defaultSortable = false;

						cm.defaultSortable = false;

						var StudentRecord = Ext.data.Record.create( [ {
							name : 'id',
							type : 'int'
						}, {
							name : 'code',
							type : 'string'
						}, {
							name : 'name',
							type : 'string'
						}, {
							name : 'levelNumber',
							type : 'string'
						}, {
							name : 'isValid',
							type : 'string'
						} ]);
						var strid = this.id.substring(0, this.id.indexOf(' '));
						this.store = new Ext.data.Store( {
							proxy : new Ext.data.HttpProxy( {
								url : '../grid/EleDataGrid.jsp?strid=' + strid
							}),
							reader : new Ext.data.JsonReader( {
								idProperty : 'id',
								totalProperty : 'results',
								root : 'rows'
							}, StudentRecord)
						//,
								//remoteSort : true
								});
						this.store.load( {
							params : {
								start : 0,
								limit : 20
							}
						});
						EleDataGrig.superclass.constructor
								.call(
										this,
										{
											store : this.store,
											sm : sm,
											cm : cm,
											viewConfig : {
												forceFit : true
											},
											columnLines : true,
											//region : 'center',
											stripeRows : true,// 实现行颜色交替显示
											loadMask : {
												msg : '加载中...'
											},
											bbar : new Ext.PagingToolbar(
													{
														pageSize : 20,
														store : this.store,
														displayInfo : true,
														displayMsg : '显示从<span style="font-weight: bold;">{0}</span>条数据到<span style="font-weight: bold;">{1}</span>条数据，共<span style="font-weight: bold;">{2}</span>条数据',
														emptyMsg : "数据为空"
													})
										});
					}
				});
Ext.reg('EleDataGrig', EleDataGrig);