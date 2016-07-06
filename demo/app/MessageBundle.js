/**
 * @author Maxim Lichmanov
 *
 * {@link http://reanimatter.com}
 */
Ext.define('Demo.MessageBundle', function() {

    var bundle = {
        firstName: 'First Name',
        lastName: 'Last Name',
        comment: 'Comment'
    };
    
    return {
        singleton: true,
        
        getMessage: function(key) {
            return bundle[key] || key;
        }
    };
    
});