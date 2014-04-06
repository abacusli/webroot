DsGrig = Ext
		.extend(
				Ext.grid.GridPanel,
				{
					store : null,
					constructor : function(_config) {
						if (_config == null) {
							_config = {};
						}
						Ext.apply(this, _config);
						var sm = new Ext.grid.CheckboxSelectionModel( {});
						var cm = new Ext.grid.ColumnModel( {
							defaults : {
								width : 200,
								sortable : true
							},
							columns : [ sm, {
								header : '序号',
								dataIndex : 'id',
								width : 40
							}, {
								header : '区划编码',
								dataIndex : 'code',
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
								width : 145
							}, {
								header : '平台',
								dataIndex : 'fasp',
								//align : 'right',
								width : 145
							}, {
								header : '相差金额',
								dataIndex : 'difference',
								//align : 'right',
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
						});
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
							name : 'billcode',
							type : 'string'
						}, {
							name : 'billtype',
							type : 'string'
						}, {
							name : 'yszx',
							type : 'string'
						}, {
							name : 'fasp',
							type : 'string'
						}, {
							name : 'difference',
							type : 'string'
						}, {
							name : 'date',
							type : 'string'
						}, {
							name : 'manager',
							type : 'string'
						} ]);
						//var code = this.id.substring(0, this.id.indexOf(' '))
					//.trim();
					//var date = this.id.substring(this.id.indexOf(' ') + 1)
					//.trim();
					this.store = new Ext.data.Store( {
						proxy : new Ext.data.HttpProxy( {
						/*url : '../../ujs/grid/DsGrid.jsp?code='
							+ code + '&date=' + date*/
							url:'../ujs/grid/DsGrid.json'
						}),
						reader : new Ext.data.JsonReader( {
							idProperty : 'id',
							totalProperty : 'results',
							root : 'rows'
						}, StudentRecord)
					});
					this.store.load( {
						params : {
							start : 0,
							limit : 20
						}
					});
					DsGrig.superclass.constructor
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
										stripeRows : true,
										frame : true,
										renderTo : document.body,
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
Ext.reg('DsGrig', DsGrig);