 'use strict';

angular.module('springAngularjsApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-springAngularjsApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-springAngularjsApp-params')});
                }
                return response;
            }
        };
    });
