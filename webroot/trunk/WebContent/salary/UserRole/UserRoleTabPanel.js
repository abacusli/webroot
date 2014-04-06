UserRoleTabPanel = function() {
	UserRoleTabPanel.superclass.constructor.call(this, {
		id : 'UserRoleTabPanel',
		region : 'UserRoleTabPanel',
		autoTabs : true,
		activeTab : 0,
		baseCls : "x-plain",
		border : false
	});
};
Ext.extend(UserRoleTabPanel, Ext.TabPanel, {});
Ext.reg('UserRoleTabPanel', UserRoleTabPanel);