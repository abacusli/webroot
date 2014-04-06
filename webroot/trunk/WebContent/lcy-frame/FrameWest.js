
var frameDateField=new FrameDateField();
FrameWest = function() {
    FrameWest.superclass.constructor.call(this, {
        id:'west',
        region:'west',
        title:'菜单栏',
        split:true,
        width: 200,
        minSize: 150,
        maxSize: 350,
        collapsible: true,
        margins:'0 0 5 5',
        cmargins:'0 5 5 5',
        rootVisible:false,
        lines:false,animate:true,lines:false,
        autoScroll:true,
		root: {
            nodeType: 'async'
        },
        //dataUrl: 'check-nodes.json',
		dataUrl: 'tree.jsp',
        collapseFirst:false,
		tbar:['选择日期:','   ',frameDateField]
	});
};

Ext.extend(FrameWest, Ext.tree.TreePanel, {
	
	/*initComponent: function(frameDateField){
        Ext.apply(this, {
            tbar:['选择日期:','   ',frameDateField]
        })
        //FrameWest.superclass.initComponent.call(this);
    },
	ddd:function(){
		alert("Date");
	}*/
});
Ext.reg('framewest', FrameWest); 