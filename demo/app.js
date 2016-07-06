/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.application({
    name: 'Demo',

    extend: 'Demo.Application',

    requires: [
        'Demo.main.View'
    ],

    mainView: 'Demo.main.View'
});
