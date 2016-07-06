/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.define('Demo.user.Model', {
    extend: 'Ext.data.Model',
    
    fields: [{
        name: 'firstName',
        allowBlank: false
    }, {
        name: 'lastName',
        allowBlank: false
    }, 'comment']
});