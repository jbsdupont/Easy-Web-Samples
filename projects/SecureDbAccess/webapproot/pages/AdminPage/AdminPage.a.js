dojo.declare("AdminPage", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

AdminPage.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
label1: ["wm.Label", {"autoSizeWidth":true,"caption":"Welcome Administrators!","height":"48px","padding":"4","styles":{"fontSize":"48px"},"width":"617px"}, {}]
}]
};

AdminPage.prototype._cssText = '';
AdminPage.prototype._htmlText = '';