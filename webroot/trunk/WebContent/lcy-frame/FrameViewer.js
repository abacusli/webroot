Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = '../js/resources/images/default/s.gif';

	var north = new FrameNorth();

	var west = new FrameWest();

	var center = new FrameCenter();

	var viewport = new Ext.Viewport( {
		layout : 'border',
		items : [ north, west, center ]
	});

	west.on('click', function(node, e) {
		var frameDate = west.getTopToolbar().findById('frame-date').getValue()
				.format('Y-m-d');
		if (node.isLeaf()) {
			e.stopEvent();
			center.loadClass(node, frameDate);
		} else {
			e.stopEvent();
			center.loadClass(node, frameDate);
		}
	});
	/*west.getTopToolbar().findById('frame-date').on('change', function(self,ne,ol){
	                    alert(self.getValue().format('Y-m-d'));
	 });*/
	viewport.doLayout();
});