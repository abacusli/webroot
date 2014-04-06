AppFactor = function() {
	this.appFactorId='';
    AppFactor.superclass.constructor.call(this, {
        id:'appfactor',
        region:'appfactor',
        title:'AppFactor',
		padding:'5 5 5 5',
        split:true,
        width: 350,
		height:350,
        minSize: 150,
        maxSize: 350,
        collapsible: true,
        collapseFirst:false,
		items:[{
			padding:'5 5 5 5',
			layout:'form',
			plain:true,
			baseCls:"x-plain",
			items:[{
				id:'code',
				xtype:'textfield',
				fieldClass :'ap-form-field',
				fieldLabel :'显示编码',
				width: 205
				},{
				id:'name',
				xtype:'textfield',
				fieldClass :'ap-form-field',
				fieldLabel :'显示名称',
				width: 205
				},{
				id:'parent_code',
				xtype:'textfield',
				fieldClass :'ap-form-field',
				fieldLabel :'上级编码',
				width: 205
				},{
				id:'is_show',
				xtype:'radiogroup',  
				fieldLabel :'是否启用',
				width: 205,
				items : [{
					boxLabel : '是',
					inputValue : "2",
					name : "radio",
					checked : true  }, {
					boxLabel : '否',
					name : "radio",
					inputValue : "1"}
					]}]
		}],
		fbar:[{id:'ok',text:'确定',listeners:{'click':this.onOk}},{id:'cancel',text:'取消',listeners:{'click':this.onCancel}}]
	});
};

Ext.extend(AppFactor, Ext.Window, {
	onOk:function(){
		var appFactorId=Ext.getCmp('appfactor').appFactorId;
		var code=Ext.getCmp('code').getValue();
		var name=Ext.getCmp('name').getValue();
		var parent_code=Ext.getCmp('parent_code').getValue();
		var is_show=Ext.getCmp('is_show').getValue().getGroupValue() ;
		alert(code+name+parent_code+is_show);
      Ext.Ajax.request({
		url:'AppFactor.jsp?',
		success: function(result, request ){
			Ext.MessageBox.alert('请注意','增加成功！'+result.responseText);
		},
		failure:  function(result, request ){
			Ext.MessageBox.alert('请注意','增加失败-'+result.responseText);
		},
		params: {appFactorId:appFactorId,code:code,name:name,parent_code:parent_code,is_show:is_show}
	 });
	},
	onCancel:function(){
		Ext.getCmp('appfactor').close();
	}
});
Ext.reg('appfactor', AppFactor); 