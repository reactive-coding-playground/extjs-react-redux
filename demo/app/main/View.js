/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.define('Demo.main.View', {
    extend: 'Ext.container.Container',

    requires: [
        'Ext.plugin.Viewport',
        'Demo.user.list.View',
        'Demo.user.detail.View'
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'user-list-view',
        flex: 1
    }, {
        xtype: 'user-detail-view',
        width: 300
    }]
});
