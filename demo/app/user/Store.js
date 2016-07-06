/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.define('Demo.user.Store', {
    extend: 'Ext.data.JsonStore',
    model: 'Demo.user.Model',
    
    alias: 'store.users',
    
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: '/data/users.json'
    }
});