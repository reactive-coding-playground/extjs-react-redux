/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.define('Demo.Application', function() {

    var alias = 'react-redux-demo',
        mappings = {};
    
    mappings[alias] = {
        dispatcher: 'Demo.dispatcher.ReactReduxDemo',
        library: window.ReactReduxDemo
    }

    return {
        extend: 'Ext.app.Application',

        name: 'Demo',

        requires: [
            'Demo.MessageBundle',
            'Demo.dispatcher.ReactReduxDemo'
        ],

        controllers: [
            'Demo.main.Controller'
        ],

        statics: {
            REACT_REDUX_DEMO: alias,

            render: function(options) {
                var mapping = mappings[options.name],
                    target = options.target,
                    dispatcher;

                dispatcher = Ext.create(mapping.dispatcher, {
                    listeners: options.listeners
                });
                
                mapping.library.render(target, dispatcher);

                return {
                    dispatch: function(action) {
                        dispatcher.dispatch(action);
                    },
                    destroy: function() {
                        mapping.library.destroy(target);
                    }
                };
            }
        }
    };
});
