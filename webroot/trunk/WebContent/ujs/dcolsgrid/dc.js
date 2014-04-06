Ext.Ajax
		.request( {
			url : '../ujs/dcolsgrid/columns.json',
			success : function(response, opts) {

				var res = Ext.decode(response.responseText);
				columns = res.columns;
				records = res.records;

				var cm = new Ext.grid.ColumnModel( {
					defaults : {
						width : 200,
						sortable : true
					},
					columns : columns
				});
				this.store = new Ext.data.Store( {
					proxy : new Ext.data.HttpProxy( {
						url : '../ujs/dcolsgrid/DColsGrid.json'
					}),
					reader : new Ext.data.JsonReader( {
						dProperty : 'id',
						totalProperty : 'results',
						root : 'rows'
					}, records)
				});

				var pageSize = 20;
				this.store.load( {
					params : {
						start : 0,
						limit : pageSize
					}
				});
				var grid = new Ext.grid.GridPanel(
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
				var wds = new Ext.Window( {
					width : 800,
					height : 9000,

					title : '查询',
					resizable : true,
					padding : '10 2 10 2',
					collapsible : true,
					autoHeight : true,
					shadow : false,
					autoHeight : true,
					fbar : [ {
						text : '确定',
						listeners : {
							'click' : function() {
								wds.close();
							}
						}
					}, {
						text : '取消',
						listeners : {
							'click' : function() {
								wds.close();
							}
						}
					} ]
				});
				wds.add(grid);
				wds.show();
			},
			failure : function(response, opts) {

			}
		});