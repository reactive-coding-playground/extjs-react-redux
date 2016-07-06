/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.define('Demo.user.list.View', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.user-list-view',

    requires: [
        'Demo.user.Store'
    ],

    store: {
        type: 'users'
    },

    viewConfig: {
        markDirty: false
    },

    title: 'Users',

    allowDeselect: false,

    constructor: function(config) {
        this.columns = [{
            dataIndex: 'firstName',
            text: Demo.MessageBundle.getMessage('firstName'),
            width: 150
        }, {
            dataIndex: 'lastName',
            text: Demo.MessageBundle.getMessage('lastName'),
            width: 150
        }, {
            dataIndex: 'comment',
            text: Demo.MessageBundle.getMessage('comment'),
            flex: 1
        }];

        this.callParent(arguments);
    },

    update: function(data) {
        var record = this.getSelection()[0],
            store = this.getStore();

        store.beginUpdate();

        Ext.Object.each(data, function(key, value) {
            record.set(key, value);
        });

        store.endUpdate();
    }

})