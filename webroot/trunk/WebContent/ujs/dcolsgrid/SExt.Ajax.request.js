Ext.Ajax.request( {
	url : '../ujs/dcolsgrid/columns.json',
	success : function(response, opts) {
		var res = Ext.decode(response.responseText);
		columns = res.columns;
		records = res.records;
	},
	failure : function(response, opts) {
	}
});