/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import registerDispatcher from './middlewares';
import reducers from './reducers';
import App from './components';

module.exports = {
    render: function(node, dispatcher) {
        const createStoreWithMiddleware = applyMiddleware(
            registerDispatcher(dispatcher)
        )(createStore);
        
        ReactDOM.render(
            <Provider store={createStoreWithMiddleware(reducers)}>
                <App/>
            </Provider>,
            node
        );
    },

    destroy: function(node) {
        ReactDOM.unmountComponentAtNode(node);
    }
};