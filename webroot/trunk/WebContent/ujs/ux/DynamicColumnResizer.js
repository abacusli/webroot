Ext.ux.DynamicColumnResizer = Ext.extend(Object, {
	init : function(gpanel) {
		this.gpanel = gpanel;
		this.config(gpanel);
	},
	config : function(gpanel) {
	},
	destroy : function() {
		Ext.destroy(this.gpanel);
		delete this.gpanel;
	}
});

Ext.preg('Ext.ux.DynamicColumnResizer', Ext.ux.DynamicColumnResizer);