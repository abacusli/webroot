
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