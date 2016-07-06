/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import entity from './entity';

export default combineReducers({
    form,
    entity
})