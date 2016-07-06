/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
import {
  UPDATE
} from './types';

export function update(params) {
    return {
        type: UPDATE,
        params
    }
}