/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.define('Demo.dispatcher.Dispatcher', {

    mixins: ['Ext.mixin.Observable'],

    /**
     * Creates a new instance.
     * 
     * @param {Object} config
     */
    constructor: function(config) {
        this.mixins.observable.constructor.call(this, config);
    },

    /**
     * Dispatches the action.
     * 
     * @param {Object} action
     *
     * @return {Object} The dispatched action or the original action if it
     * can't be dispatched.
     */
    dispatch: Ext.emptyFn
    
});