/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
import {
    READ,
    UPDATE
} from '../actions/types';

export default (state = { meta: [], data: {}}, action) => {
    switch (action.type) {
        case READ: {
            return {
                ...action.payload
            };
        }
        case UPDATE: {
            return {
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}