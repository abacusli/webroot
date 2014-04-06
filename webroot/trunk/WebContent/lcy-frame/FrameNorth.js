
FrameNorth = function() {
    FrameNorth.superclass.constructor.call(this, {
        id: 'north',
        region:'north',
        height:60
    });
};
Ext.extend(FrameNorth, Ext.BoxComponent, {
});
Ext.reg('framenorth', FrameNorth); 