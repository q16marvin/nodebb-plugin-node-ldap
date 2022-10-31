'use strict';

define('admin/plugins/nodebb_ldap', ['settings', 'alerts'], function(Settings, alerts) {
    var ACP = {};

    ACP.init = function() {
        Settings.load('nodebbldap', $('.ldap-settings'));
        $('#save').on('click', function() {
            Settings.save('nodebbldap', $('.ldap-settings'), function() {
                alerts.success({
                    title: 'Settings Saved',
                    message: 'Please reload your NodeBB to apply these settings',
					clickfn: function () {
                        socket.emit('admin.reload');
					},
                });
            });
        });
    };

    return ACP;
});
