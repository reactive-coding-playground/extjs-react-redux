/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.define('Demo.main.Controller', function() {

    /**
     * @param {Object} options
     * @param {Object} options.payload
     * @param {Function} options.callback
     */
    function onUserUpdate(options) {
        this.getUserListView().update(options.payload);
        options.callback({
            success: true
        });
    }

    /**
     * @param {Ext.selection.Model} selModel
     * @param {Ext.data.Model[]} selection
     */
    function onSelectionChange(selModel, selection) {
        this.getUserDetailView().update(selection[0]);
    }

    return {
        extend: 'Ext.app.Controller',

        uses: [
            'Demo.user.detail.View',
            'Demo.user.list.View'
        ],

        config: {
            refs: [{
                ref: 'userListView',
                selector: 'user-list-view'
            }, {
                ref: 'userDetailView',
                selector: 'user-detail-view'
            }]
        },

        /**
         * @inheritdoc
         */
        init: function() {
            this.listen({
                component: {
                    'user-detail-view': {
                        update: onUserUpdate
                    },
                    'user-list-view': {
                        selectionchange: onSelectionChange
                    }
                }
            });
        }
    };

});