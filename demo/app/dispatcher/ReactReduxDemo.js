/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.define('Demo.dispatcher.ReactReduxDemo', {
    extend: 'Demo.dispatcher.Dispatcher',

    /**
     * @inheritdoc
     */
    dispatch: function(action) {
        if (action.isDispatched) {
            return action;
        }

        switch (action.type) {
            case 'UPDATE': {
                var deferred = new Ext.Deferred();

                this.fireEvent('update', {
                    payload: action.params,
                    callback: function(response) {
                        if (response.success) {
                            deferred.resolve();
                        }
                        else {
                            deferred.reject(response.message);
                        }
                    }
                });

                return {
                    type: action.type,
                    isDispatched: true,
                    payload: deferred.promise
                };
            }
            default: {
                return action;
            }
        }
    }

});