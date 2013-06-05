Ext.define('FirstApp.view.Multipanel', {
    extend: 'Ext.Container',
    xtype: 'multipanel',

    requires: [
        'Ext.TitleBar',
        //'Ext.Video',
        'Ext.MessageBox',
    ],

    config: {
        tabBarPosition: 'bottom',
        defaults: {
            margin: 10,
            xtype: 'button',
            flex: 1

        },
        layout: {
            type: 'vbox',
        },

        items: [
            {
                html: 'object one',
                style: 'background-color: pink;',

                listeners: {                
                    tap: function(button, e, eOpts) {
                        Ext.Msg.alert('Event triggered');
                    }
                }
            },
            {
                html: 'object two',
                style: 'background-color: lightblue;',
                
                listeners: {                
                    tap: function(button, e, eOpts) {
                        Ext.Msg.alert('Event triggered');
                    }
                }
            },
            {
                html: 'Vote',
                style: 'background-color: lightgreen;',
                
                listeners: {                
                    tap: function(button, e, eOpts) {
                        Ext.Msg.alert('Event triggered');
                    }
                }

            },
        ]
    }
});