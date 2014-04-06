
FrameDateField = function() {
    FrameDateField.superclass.constructor.call(this, {
		id: 'frame-date',
        enableKeyEvents: true,
		value: new Date().format('Y-m-d'),
		format: "Y-m-d",
		scope: this
		}
)};
Ext.extend(FrameDateField, Ext.form.DateField, {
});

Ext.reg('framedatefield', FrameDateField); 




/*this.frameDate = new Ext.form.DateField({
				id: 'frame-date',
				emptyText:'Select a Date',
                enableKeyEvents: true,
				format: "Y-m-d",
				listeners:{
					render: function(f){
                    	this.filter = new Ext.tree.TreeFilter(this, {
                    		clearBlank: true,
                    		autoClear: true
                    	});
					},
                    keydown: {
                        fn: this.ddd,
                        buffer: 350,
                        scope: this
                    },
					change: function(self,ne,ol){
                        alert(self.getValue().format('Y-m-d'));
                    },
                    scope: this
				}
			});*/