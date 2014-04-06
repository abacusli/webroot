RoleMenuTabPanel = function() {
	RoleMenuTabPanel.superclass.constructor.call(this, {
		id : 'RoleMenuTabPanel',
		region : 'RoleMenuTabPanel',
		autoTabs : true,
		activeTab : 0,
		border : false
	});
};

Ext.extend(RoleMenuTabPanel, Ext.TabPanel, {});
Ext.reg('RoleMenuTabPanel', RoleMenuTabPanel);