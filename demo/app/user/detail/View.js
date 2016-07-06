/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.define('Demo.user.detail.View', {
    extend: 'Demo.component.ThirdPartyApp',
    alias: 'widget.user-detail-view',

    uses: [
        'Demo.Application' 
    ],

    padding: 10,

    appConfig: {
        name: Demo.Application.REACT_REDUX_DEMO,
        listeners: {
            update: function(options) {
                this.fireEvent('update', options);
            }
        }
    },

    /**
     * Updates the view with the record data.
     *
     * @param {Ext.data.Model} record
     */
    update: function(record) {
        this.handle.dispatch({
            type: 'READ',
            payload: {
                data: record.getData(),
                meta: record.getFields().filter(function(field) {
                    return !field.generated;
                }).map(function(field) {
                    var name = field.getName(),
                        label = Demo.MessageBundle.getMessage(name);
                    return {
                        name: name,
                        label: label,
                        placeholder: label,
                        required: !field.getAllowBlank()
                    };
                })
            }
        });
    }

});