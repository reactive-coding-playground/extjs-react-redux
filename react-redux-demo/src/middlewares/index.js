/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
const registerDispatcher = dispatcher => ({dispatch}) => {
        
    const originalDispatch = dispatcher.dispatch;

    dispatcher.dispatch = dispatch;

    return next => action => {
        action = originalDispatch.call(dispatcher, action);

        if (action.isDispatched && action.payload && action.payload.then) {
            action.payload.then(payload => dispatch({
                ...action,
                payload
            }));
        }
        else {
            next(action);
        }
    }
    
}

export default registerDispatcher;