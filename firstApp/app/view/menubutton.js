Ext./**
 * @class firstApp.view.menubutton
 * @extends extendsClass
 * Description
 */
Ext.define('firstApp.view.menubutton', {
    extend: 'container',
    xtype: 'menubutton',
    
    requires: [
        'Ext.mixin.Observable'
    ],
    mixins: [
        'Ext.mixin.Observable'
    ]
});