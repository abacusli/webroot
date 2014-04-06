DColsGrid = Ext
		.extend(
				Ext.grid.GridPanel,
				{
					store : null,
					constructor : function(_config) {
						if (_config == null) {
							_config = {};
						}
						var columns;
						var box = new Ext.Panel( {
							id : 'document',
							title : '首页',
							xtype : 'panel',// DColsGrid//core1.jsp
							para : 'para',
							autoLoad : {
								url : '../ujs/dcolsgrid/columns.json'
							},
							autoScroll : true
						});
						alert(box.getOuterSize() );
						Ext.Ajax
								.request( {
									timeout : 0,
									url : '../ujs/dcolsgrid/columns.json',
									success : function(response, opts) {
										var res = Ext
												.decode(response.responseText);
										columns = res.columns;
										records = res.records;
										alert(columns[0].dataIndex);
										alert(this.document
												.getElementById('document').innerHTML);
										//alert(records.getEL());
										return columns;
									},
									failure : function(response, opts) {
									}
								});
						Ext.apply(this, _config);
						var cm = new Ext.grid.ColumnModel( {
							defaults : {
								width : 200,
								sortable : true
							},
							columns : columns
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
						var code = this.id.substring(0, this.id.indexOf(' '))
								.trim();
						var date = this.id.substring(this.id.indexOf(' ') + 1)
								.trim();
						this.store = new Ext.data.Store( {
							proxy : new Ext.data.HttpProxy( {
								url : '../ujs/dcolsgrid/DColsGrid.json?code='
										+ code + '&date=' + date
							/*url : '../ujs/grid/DColsGrid.json'*/
							}),
							reader : new Ext.data.JsonReader( {
								dProperty : 'id',
								totalProperty : 'results',
								root : 'rows'
							}, StudentRecord)
						});

						var pageSize = 20;
						this.store.load( {
							params : {
								start : 0,
								limit : pageSize
							}
						});

						DColsGrid.superclass.constructor
								.call(
										this,
										{
											store : this.store,
											plugins : [ new Ext.ux.GridBarResizer() ],
											cm : cm,
											viewConfig : {
												forceFit : true
											},
											columnLines : true,
											stripeRows : true,
											loadMask : {
												msg : '加载中...'
											},
											tbar : new Ext.Toolbar(),
											bbar : new Ext.PagingToolbar(
													{
														pageSize : pageSize,
														beforePageText : '第',
														afterPageText : '页 共 {0} 页',
														store : this.store,
														displayInfo : true,
														lastText : 'lastText',
														plugins : [ new Ext.ux.PageComboResizer() ],
														displayMsg : '显示从<span style="font-weight: bold;">{0}</span>条数据到<span style="font-weight: bold;">{1}</span>条数据，共<span style="font-weight: bold;">{2}</span>条数据',
														emptyMsg : "数据为空"
													})
										});
					}
				});
Ext.reg('DColsGrid', DColsGrid);