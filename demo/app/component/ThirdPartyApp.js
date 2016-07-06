/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.define('Demo.component.ThirdPartyApp', {
    extend: 'Ext.Component',

    alias: 'widget.third-party-app',

    /**
     * @property {Object} appConfig
     */

    listeners: {
        afterrender: function() {
            var config = Ext.merge({
                target: Ext.getDom(this.getEl()),
                listeners: {
                    scope: this
                }
            }, this.appConfig);

            this.handle = Demo.Application.render(config);
        },
        beforedestroy: function() {
            this.handle.destroy();
        }
    }
});